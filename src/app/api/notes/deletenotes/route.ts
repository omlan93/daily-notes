import mongoose from "mongoose";
import Notes from "@/models/noteModel";
import { connect } from "@/app/dbConfig/dbConfig";
import { NextResponse, NextRequest } from "next/server";

connect();

export async function POST(request: NextRequest) {
  console.log("first");
  try {
    console.log("second");
    const reqBody = await request.json();
    const { id } = reqBody;
    console.log(id);
    const note = await Notes.findByIdAndDelete(id);

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "success" }, { status: 200 });
}
