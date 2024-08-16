import mongoose from "mongoose";
import Audio from "@/models/audioModel";
import { connect } from "@/app/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    console.log("first");
    const reqBody = await request.json();
    const formData: any = new FormData();

    console.log(formData.get("audio-file"));
    console.log("first");
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function GET() {
  return NextResponse.json({ message: "Hello" });
}
