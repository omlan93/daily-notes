"use client";

import Image from "next/image";
import { use } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-400">
      <h1 className="text-4xl text-blue-900 mb-20">Welcome</h1>
      <hr />
      <div className="flex space-x-20">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => route.push("/signup")}
        >
          Sign Up
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => route.push("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}
