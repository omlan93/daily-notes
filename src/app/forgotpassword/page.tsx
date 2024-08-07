"use client";

import React from "react";
import axios from "axios";
import { useState } from "react";

function forgotPassword() {
  const [email, setEmail] = React.useState("");

  const onsubmit = async () => {
    try {
      const response = await axios.post("api/users/forgotpassword", {
        email: email,
      });
      console.log("Email sent successfully", response.data);
    } catch (error: any) {
      console.log("Email not sent", error.message);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2 bg-blue-300 text-blue-900">
      <h1 className="text-4xl text-blue-900 mb-6">Forgot Password</h1>
      <hr />
      <label htmlFor="email">Email</label>
      <input
        className=" p-2 mb-4 border border-gray-300 rounded-lg"
        type="text"
        id="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <hr />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        onClick={onsubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default forgotPassword;
