import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";

async function ReadNote({ params }: any) {
  const id = params.id;

  let notes;
  const url = "http://localhost:3000/api/notes/getnotebyId";
  const url1 = `${process.env.NEXTAUTH_URL}/api/notes/getnotebyId`;
  console.log(url1);
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(id),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    notes = json.notes;
    const audioUrl = notes.audio;
    console.log(json);
  } catch (error: any) {
    console.error(error.message);
  }

  return (
    <main className="bg-blue-400 min-h-screen flex flex-col  items-center">
      <Card className="h-48 mt-28 w-96 mb-10">
        <CardContent>
          <p className="mt-10">{notes.note}</p>
        </CardContent>
      </Card>
      <audio controls>
        <source src={notes.audio} type="audio/mpeg" />
        <source src={notes.audio} type="audio/ogg" />
        {/* <p>
        Download
        <a href="myAudio.mp3" download="myAudio.mp3">
          MP3
        </a>
        or
        <a href="myAudio.ogg" download="myAudio.ogg">
          OGG
        </a>
        audio.
      </p> */}
      </audio>
    </main>
  );
}

export default ReadNote;
