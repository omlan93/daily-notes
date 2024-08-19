import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("first");
  const reqBody = await request.blob();
  console.log(reqBody);
  var file = new File([reqBody], "file_name", { lastModified: 1534584790000 });

  const { url } = await put("new.wav", file, {
    access: "public",
  });
  console.log(url);

  // return Response.json({ url });
  return NextResponse.json({
    url,
  });
}
