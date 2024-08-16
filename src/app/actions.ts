"use server";

import Notes from "@/models/noteModel";
import { auth } from "../../auth";
import { NextResponse } from "next/server";
import { connect } from "./dbConfig/dbConfig";

connect();

export async function getnotes() {
  const session = await auth();
  console.log(session);
  const email = session?.user.email;
  try {
    const notes = await Notes.find({ email: email }).exec();

    console.log(notes);
    return notes;
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
  }
}
