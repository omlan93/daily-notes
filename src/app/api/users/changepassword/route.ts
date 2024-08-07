import { connect } from "@/app/dbConfig/dbConfig";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, password } = reqBody;

    const user = await User.findOne({ username });
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }
    await User.findByIdAndUpdate(user._id, { password: hashedPassword });
    return NextResponse.json({ message: "Password Changed", success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
