"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

function SignUp() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setbuttonDisabled] = React.useState(false);
  const [Loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/users/signup", user);

      console.log("Signup success", response.data);
      toast.success("Sign Up Successfull!");
      router.push("/login");
    } catch (error: any) {
      console.log("Sign Up failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setbuttonDisabled(false);
    } else {
      setbuttonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{Loading ? "Processing" : "Sign Up"}</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="text-black p-2 border border-gray-300 rounded-lg"
        type="text"
        id="username"
        value={user.username}
        placeholder="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label htmlFor="email">email</label>
      <input
        className="text-black p-2 border border-gray-300 rounded-lg"
        type="text"
        id="email"
        value={user.email}
        placeholder="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
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
        onClick={onSignup}
      >
        {buttonDisabled ? "No Signup" : "Signup here"}
      </button>
      <Link href={"/login"}>Visit login page</Link>
    </div>
  );
}

export default SignUp;
