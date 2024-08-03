"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setbuttonDisabled] = React.useState(false);
  const [Loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);

      const response = await axios.post("api/users/login", user);
      console.log("Login Successful", response.data);
      toast.success("Login Successful!");
      router.push("/profile");
    } catch (error: any) {
      console.log("Log In Unsuccessful", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setbuttonDisabled(false);
    } else {
      setbuttonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{Loading ? "Processing" : "Log In"}</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input
        className="text-black p-2 border border-gray-300 rounded-lg"
        type="text"
        id="email"
        value={user.email}
        placeholder="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <hr />
      <label htmlFor="password">password</label>
      <input
        className="text-black p-2 border border-gray-300 rounded-lg"
        type="password"
        id="password"
        value={user.password}
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <button
        className="p-2 border border-gray-300 rounded-lg mb-4 mt-4 focus:outline-none focus:border-gray-600"
        onClick={onLogin}
      >
        Signup here
      </button>
      <Link href={"/signup"}>Visit Signup page</Link>
    </div>
  );
}

export default LoginPage;
