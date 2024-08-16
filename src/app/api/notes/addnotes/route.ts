import mongoose from "mongoose";
import Notes from "@/models/noteModel";
import { connect } from "@/app/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../auth";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    var { email, note, date }: any = reqBody;
    const session = await auth();
    console.log(session);
    email = session?.user.email;
    console.log(email);
    date = new Date().toString();
    console.log(date);

    console.log(reqBody);

    const newNote = new Notes({
      email,
      note,
      date,
    });
    console.log(newNote);
    const savedNotes = await newNote.save();
    console.log(savedNotes);

    return NextResponse.json({
      message: "User Signed Up successfully",
      success: true,
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
