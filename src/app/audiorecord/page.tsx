"use client";
import axios from "axios";
import { set } from "mongoose";
import { useState } from "react";

import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

export default function ExampleComponent() {
  const [url, setUrl] = useState("");
  const [flag, setFlag] = useState(false);
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob: any) => {
    const url = URL.createObjectURL(blob);
    setUrl(url);
    setFlag(true);
    console.log(url);

    const audio = document.createElement("audio");
    audio.src = url;
    console.log(url);
    audio.controls = true;
    document.body.appendChild(audio);
  };

  // const sendAudioFile = async (blob: any) => {
  //   const formData = new FormData();
  //   formData.append("audio-file", blob);
  //   console.log(formData.get("audio-file"));
  //   try {
  //     // const response = await fetch("http://localhost:3000/api/audioUpload", {
  //     //   method: "POST",
  //     //   body: formData,
  //     // });

  //     const response = await axios.post("/api/audioUpload", { formData });
  //     console.log(response);
  //   } catch (error: any) {
  //     console.log(error.data);
  //   }
  // };

  return (
    <div>
      <p>starts</p>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        showVisualizer={true}
      />
      <button onClick={recorderControls.stopRecording}>Stop recording</button>

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
  );
}
