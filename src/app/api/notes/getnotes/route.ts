import mongoose from "mongoose";
import Notes from "@/models/noteModel";
import { connect } from "@/app/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

import { currentUser } from "@clerk/nextjs/server";

connect();

export async function GET() {
  const user = await currentUser();
  console.log(user);
  const email = user?.primaryEmailAddress?.emailAddress;
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
