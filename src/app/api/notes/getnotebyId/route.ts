import mongoose from "mongoose";
import Notes from "@/models/noteModel";
import { connect } from "@/app/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  console.log("first");
  try {
    const reqBody = await request.json();
    const id = reqBody;
    console.log(id);
    const notes = await Notes.findById(id).exec();
    console.log(notes);
    return NextResponse.json({
      notes,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ hello: "world" });
}
