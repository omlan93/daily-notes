import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";

async function ReadNote({ params }: any) {
  const id = params.id;

  let notes;
  const url = "http://localhost:3000/api/notes/getnotebyId";
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
    console.log(json);
  } catch (error: any) {
    console.error(error.message);
  }

  return (
    <main className="bg-blue-400 min-h-screen flex justify-center ">
      <Card className="h-48 mt-28 w-96">
        <CardContent>
          <p className="mt-10">{notes.note}</p>
        </CardContent>
      </Card>
    </main>
  );
}

export default ReadNote;
