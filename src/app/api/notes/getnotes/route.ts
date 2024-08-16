import mongoose from "mongoose";
import Notes from "@/models/noteModel";
import { connect } from "@/app/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../auth";

connect();

export async function GET() {
  const session = await auth();
  console.log(session);
  const email = session?.user.email;
  try {
    const notes = await Notes.find({ email: email }).exec();

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
