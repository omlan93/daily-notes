"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import React from "react";
import toast from "react-hot-toast";

function ProfilePage() {
  const route = useRouter();
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
      console.log(data.data);
    } catch (error: any) {
      console.log("Details Unsuccessful!", error.message);
      toast.error("Details Unsuccessful!");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
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
    </div>
  );
}

export default ProfilePage;
