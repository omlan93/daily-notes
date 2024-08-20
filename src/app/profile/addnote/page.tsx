"use client";

import axios from "axios";

import { Button } from "@/components/ui/button";

import { useToast } from "@/components/ui/use-toast";
import React, { useState } from "react";
import { getSession } from "../../../app/getSession";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import UploadForm from "@/app/component/form";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

export default function AddNote() {
  const [notes, setNotes] = React.useState({
    email: "",
    note: "",
    audio: "",
    date: "",
  });

  const [url, setUrl] = useState("");
  const [flag, setFlag] = useState(false);
  const recorderControls = useAudioRecorder();
  const addAudioElement = async (blob: any) => {
    console.log(blob);
    // const formData = new FormData();
    // formData.append("audio-file", blob as Blob);
    // const response = await fetch("/api/file", {
    //   method: "POST",
    //   body: formData,
    // });

    // // const data = await response.json();
    // // console.log(data);

    // console.log(formData.get("audio-file"));
    const url = URL.createObjectURL(blob);
    const response = await fetch("/api/audioUpload", {
      method: "POST",
      body: blob,
    });
    const audioUrl = await response.json();
    console.log(audioUrl);
    setNotes({ ...notes, audio: audioUrl.url });
    setUrl(url);
    setFlag(true);
    console.log(url);

    const audio = document.createElement("audio");
    audio.src = url;
    console.log(url);
    audio.controls = true;
    document.body.appendChild(audio);
  };

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
    <div className="flex flex-col justify-start items-center bg-blue-400 min-h-screen space-y-10">
      <h1 className="mt-20">Note</h1>

      <Input
        type="text"
        placeholder="Write your note here"
        onChange={(e) => setNotes({ ...notes, note: e.target.value })}
        className=" bg-white mt-10 h-48 w-3/4"
      />
      <div className="flex flex-row justify-between space-x-20">
        <UploadForm />

        <div className="bg-gray-100 p-10 border border-r-2 border-rounded-full">
          <AudioRecorder
            onRecordingComplete={(blob) => addAudioElement(blob)}
            recorderControls={recorderControls}
            showVisualizer={true}
          />
          <button onClick={recorderControls.stopRecording}>
            Stop recording
          </button>
          <div>
            {flag && (
              <audio controls>
                <source src={url} type="audio/mpeg" />
                <source src={url} type="audio/ogg" />
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
            )}
          </div>
        </div>
      </div>

      <Button className="mt-4" onClick={onclick}>
        Add Note
      </Button>
    </div>
  );
}
