"use client";

import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { format } from "path";
import { useState } from "react";
import { getnotes } from "@/app/actions";

function Notes() {
  const router = useRouter();
  const [flag, setFlag] = useState(false);

  const deleteNote = async (e: any) => {
    console.log("first");
    const id = e.currentTarget.getAttribute("data-value");
    console.log(id);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/notes/deletenotes",
        { id }
      );

      setNotes(notes);
      setFlag(false);
      console.log("first");
    } catch (error: any) {
      console.log(error.data);
    }
  };

  //declare an array named notes
  //set notes to an empty array
  //declare a variable named date
  //set date to the current date

  //log the time of the date
  //declare a variable named router
  //set router to the useRouter hook
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      var notes: any = [];

      // try {
      //   const response = await axios.get(" /api/notes/getnotes");
      //   notes = response.data.notes;
      //   setNotes(notes);
      //   setFlag(true);
      //   console.log("first");
      // } catch (error: any) {
      //   console.log(error.data);
      // }
      console.log("first");
      const response = await getnotes();
      console.log(response);
      notes = response;
      setNotes(notes);
      setFlag(true);

      return notes;
    };

    getNotes();

    return () => {};
  }, [flag]);

  console.log(notes);

  const addNote = () => {
    router.push("/profile/addnote");
  };

  return (
    <main className="bg-blue-300 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <Button className="mt-10" size="lg" onClick={addNote}>
          Add today's Note
        </Button>
        {notes.map((note: any, index: any) => (
          <Card key={index} className="text-black mt-10 w-96">
            <CardHeader>
              <CardTitle>{index + 1}</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <p>{note.date}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={() => router.push(`/profile/notes/${note._id}`)}>
                Read
              </Button>
              <Button>Edit</Button>
              <Button data-value={note._id} onClick={deleteNote}>
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default Notes;
