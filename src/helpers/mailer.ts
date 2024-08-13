import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  const nodemailer = require("nodemailer");
  const events = require("events");

  async function sendmail(mailOptions: any) {
    try {
      console.log("Sending email with the following options:", mailOptions);
      const mailresponse: any = await transport.sendMail(mailOptions);
      console.log("Email sent successfully:", mailresponse);
    } catch (error: any) {
      console.log("Error sending email:", error);
    }
    console.log("Mail Sent");
    return true;
  }

  // Increase the max listeners limit
  events.EventEmitter.defaultMaxListeners = 20;
  try {
    //create a token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordExpiry: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      service: "Gmail",

      auth: {
        user: process.env.USER,
        pass: process.env.APP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.USER,
      to: "nitu542518@gmail.com",
      sunject:
        emailType === "VERIFY" ? "Verify Your Email" : "Reset your password",

      html: "",
    };

    if (emailType === "VERIFY") {
      mailOptions.html = `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to verify your email</p>`;
    } else if (emailType === "RESET") {
      mailOptions.html = `<p>Click <a href="${process.env.DOMAIN}/resetpassword?token=${hashedToken}">here</a> to update your password</p>`;
    }

    sendmail(mailOptions);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
