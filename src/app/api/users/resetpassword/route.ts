import mongoose from "mongoose";
import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log(token);

    var user = new User();

    const user1 = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordExpiry: { $gt: Date.now() },
    });

    user = user1;

    console.log(user);

    if (!user) {
      return NextResponse.json({ error: "Invalid Token" }, { status: 400 });
    }
    console.log(user);

    user.isVerified = true;
    user.forgotPasswordToken = undefined;
    user.forgotPasswordExpiry = undefined;

    const savedUser = await user.save();

    return NextResponse.json({ message: "Email Verified", success: true });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
