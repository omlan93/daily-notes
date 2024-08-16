"use client";

import axios from "axios";

import { Button } from "@/components/ui/button";

import { useToast } from "@/components/ui/use-toast";
import React, { useState } from "react";
import { getSession } from "../../../app/getSession";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function AddNote() {
  const [notes, setNotes] = React.useState({
    email: "",
    note: "",
    date: "",
  });

  const router = useRouter();

  const { toast } = useToast();

  const onclick = async () => {
    console.log("first");
    console.log(notes);

    console.log(notes);

    try {
      const response = await axios.post("/api/notes/addnotes", notes);

      console.log("Signup success", response.data);
      toast({
        description: "Your note has been added.",
      });
      router.push("/profile/notes");
    } catch (error: any) {
      console.log("Sign Up failed", error.message);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center bg-blue-400 min-h-screen">
      <h1 className="mt-20">Note</h1>

      <Input
        type="text"
        placeholder="Write your note here"
        onChange={(e) => setNotes({ ...notes, note: e.target.value })}
        className=" bg-white mt-10 h-48 w-3/4"
      />
      <Button className="mt-4" onClick={onclick}>
        Add Note
      </Button>
    </div>
  );
}
