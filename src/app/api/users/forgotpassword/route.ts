import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/models/userModel";
import mongoose from "mongoose";
import { sendEmail } from "@/helpers/mailer";
import { NextRequest, NextResponse } from "next/server";
import { error } from "console";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;

    //check if user already exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    //send email
    const response = await sendEmail({
      email,
      emailType: "RESET",
      userId: user._id,
    });

    return {
      message: "Email sent successfully",
      success: true,
    };
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
