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
  const date = new Date(Date.now());
  const hour = date.getHours();
  console.log(hour % 12);
  const minute = date.getMinutes();
  console.log(minute);
  const router = useRouter();
  const [flag, setFlag] = useState(false);

  const deleteNote = async (e: any) => {
    console.log("first");
    const id = e.currentTarget.getAttribute("data-value");
    console.log(id);
    try {
      const response = await axios.post("/api/notes/deletenotes", { id });

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
  const [notes, setNotes] = useState<String[] | null>([]);

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
      //console.log(notes[0].date);
      // const date = new Date(notes[0].date);
      // const hour = date.getHours();
      // console.log(hour);
      // console.log(hour % 12);

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
          Add today&apos;s Note
        </Button>
        {/* {notes?.map((note: any, index: any) => (
          <Card key={index} className="text-black mt-10 w-96">
            <CardHeader>
              {/* <CardTitle>{index + 1}</CardTitle> 
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                {new Date(note.date).getDay() === 0
                  ? "Sat"
                  : new Date(note.date).getDay() === 1
                  ? "Sun"
                  : new Date(note.date).getDay() === 2
                  ? "Mon"
                  : new Date(note.date).getDay() === 3
                  ? "Tue"
                  : new Date(note.date).getDay() === 4
                  ? "Wed"
                  : new Date(note.date).getDay() === 5
                  ? "Thu"
                  : new Date(note.date).getDay() === 6
                  ? "Fri"
                  : ""}
                {"    "} &nbsp;&nbsp;
                {new Date(note.date).getMonth() === 0
                  ? "Jan"
                  : new Date(note.date).getMonth() === 1
                  ? "Feb"
                  : new Date(note.date).getMonth() === 2
                  ? "Mar"
                  : new Date(note.date).getMonth() === 3
                  ? "Apr"
                  : new Date(note.date).getMonth() === 4
                  ? "May"
                  : new Date(note.date).getMonth() === 5
                  ? "Jun"
                  : new Date(note.date).getMonth() === 6
                  ? "Jul"
                  : new Date(note.date).getMonth() === 7
                  ? "Aug"
                  : new Date(note.date).getMonth() === 8
                  ? "Sep"
                  : new Date(note.date).getMonth() === 9
                  ? "Oct"
                  : new Date(note.date).getMonth() === 10
                  ? "Nov"
                  : new Date(note.date).getMonth() === 11
                  ? "Dec"
                  : ""}{" "}
                {new Date(note.date).getDate()}
                {" , "}
                {new Date(note.date).getFullYear()} &nbsp;&nbsp;
                {new Date(note.date).getHours() % 12} :&nbsp;
                {new Date(note.date).getMinutes() < 10 ? "0" : ""}
                {new Date(note.date).getMinutes()}&nbsp;
                {new Date(note.date).getHours() > 12 ? "PM" : "AM"}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={() => router.push(`/profile/notes/${note._id}`)}>
                View
              </Button>
              <Button>Edit</Button>
              <Button data-value={note._id} onClick={deleteNote}>
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))} */}
      </div>
    </main>
  );
}

export default Notes;
