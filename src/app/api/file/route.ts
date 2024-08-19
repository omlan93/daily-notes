import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("file") as File;

  if (!file.name) {
    return NextResponse.json({ error: "No file found" }, { status: 400 });
  }

  const blob = await put(file.name, file, { access: "public" });
  console.log(blob);

  return NextResponse.json(blob);
}
