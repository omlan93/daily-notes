import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //create a token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(
        userId,
        { verifyToken: hashedToken },
        { verifyTokenExpiry: Date.now() + 3600000 }
      );
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(
        userId,
        { forgotPasswordToken: hashedToken },
        { forgotPasswordTokenExpiry: Date.now() + 3600000 }
      );
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "8e1cb783f0922f",
        pass: "94b8e6cba2e45b",
      },
    });

    const mailOptions = {
      from: "omlan2793@gmail.com",
      to: email,
      sunject:
        emailType === "VERIFY" ? "Verify Your Email" : "Reset your password",

      html: `<p>Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}">here</a> to {emailType === "VERIFY" ? "verify your email" : "reset your password"}</p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
