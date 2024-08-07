"use client";

import axios from "axios";
import React, { use, useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { set } from "mongoose";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function ResetPassword() {
  const router = useRouter();
  const [token, setToken] = React.useState("");
  const [verified, setVerified] = React.useState(false);
  const [error, seteError] = React.useState(false);
  const [newpassword, setNewpassword] = React.useState({
    username: "",
    password: "",
    confirmnewpass: "",
  });

  const [buttonDisabled, setbuttonDisabled] = React.useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/resetpassword", { token });
      setVerified(true);
    } catch (error: any) {
      seteError(true);
      console.log(error.response.data);
    }
  };

  const onChangePass = async () => {
    if (newpassword.password !== newpassword.confirmnewpass) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("/api/users/changepassword", {
        username: newpassword.username,
        password: newpassword.password,
      });
      console.log("Password changed successfully", response.data);
      toast.success("Password changed successfully");
      router.push("/login");
    } catch (error: any) {
      console.log("Password change failed", error.response.data);
      toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      console.log(token, token.length);
      verifyUserEmail();
    }
  }, [token]);

  useEffect(() => {
    if (
      newpassword.password.length > 0 &&
      newpassword.confirmnewpass.length > 0
    ) {
      setbuttonDisabled(false);
    } else {
      setbuttonDisabled(true);
    }
  }, [newpassword]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-300 text-blue-900">
      {/* <h2 className="p-2 bg-color-500 text-black">
        {token ? `${token}` : "no token"}
      </h2> */}

      {verified && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl mb-6">Email Verified!</h2>
          <label htmlFor="username">Username</label>
          <hr />
          <input
            className="text-black p-2 border border-gray-300 rounded-lg mb-4"
            type="text"
            id="username"
            value={newpassword.username}
            placeholder="Username"
            onChange={(e) =>
              setNewpassword({ ...newpassword, username: e.target.value })
            }
          />
          <hr />
          <label htmlFor="NewPassword">New Password</label>
          <hr />
          <input
            className="text-black p-2 border border-gray-300 rounded-lg mb-4"
            type="text"
            id="newpassword"
            value={newpassword.password}
            placeholder="New Password"
            onChange={(e) =>
              setNewpassword({ ...newpassword, password: e.target.value })
            }
          />
          <hr />

          <label htmlFor="ConfirmNewPassword">Confirm New Password</label>
          <hr />
          <input
            className="text-black p-2 border border-gray-300 rounded-lg mb-4"
            type="text"
            id="confirmnewpassword"
            value={newpassword.confirmnewpass}
            placeholder="Confirm New Password"
            onChange={(e) =>
              setNewpassword({ ...newpassword, confirmnewpass: e.target.value })
            }
          />

          <button
            className="p-2 border border-blue-800 rounded-lg mb-4 mt-4 focus:outline-none focus:border-blue-950 text-white bg-blue-700 hover:p-3 hover:bg-blue-600"
            onClick={onChangePass}
          >
            Change Password
          </button>
        </div>
      )}

      {error && (
        <div>
          <h2 className="text-2xl">{`Error: ${error}`}</h2>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
