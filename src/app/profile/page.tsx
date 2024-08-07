"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";

function ProfilePage() {
  const route = useRouter();
  const [id, setId] = useState("nothing");
  const currId = useRef("nothing");

  const onLogOut = async () => {
    try {
      const response = await axios.get("api/users/logout");
      console.log(response.data);
      toast.success("Log Out Successful!");
      route.push("/login");
    } catch (error: any) {
      console.log("Log Out Unsuccessful!", error.message);
      toast.error("Login Unsuccessful!");
    }
  };

  const onDetails = async () => {
    try {
      const data = await axios.get("api/users/me");
      // console.log(data);
      // console.log(data.data);
      const user = data.data.data;
      console.log(user._id);
      //setMovies(prevMovies => ([...prevMovies, ...result]));
      currId.current = user.username;
      console.log(currId.current);
      // console.log(user, "hello");
      route.push(`/profile/${currId.current}`);
    } catch (error: any) {
      console.log("Details Unsuccessful!", error.message);
      toast.error("Details Unsuccessful!");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-300 text-blue-900">
      <h2 className="text-2xl">Welcome to your profile page</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 font-bold text-white rounded-full px-8 py-4 mt-4"
        onClick={onLogOut}
      >
        Log Out
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-700 font-bold text-white rounded-full px-8 py-4 mt-4"
        onClick={onDetails}
      >
        User Details
      </button>

      {/* <div>
        {id === "nothing" ? <></> : <Link href={`/profile/${id}`}></Link>}
      </div> */}
    </div>
  );
}

export default ProfilePage;
