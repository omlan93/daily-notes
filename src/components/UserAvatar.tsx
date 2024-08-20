"use client";

import { useState } from "react";
import { auth } from "../../auth";
import Link from "next/link";

export default function UserAvatar({ props }: any) {
  const [flag, setFlag] = useState(false);
  const onclick = () => {
    console.log("first");
    if (flag) setFlag(false);
    else setFlag(true);
  };
  console.log(props);

  return (
    <main>
      <div className="mb-2">
        <img
          src={props}
          alt="User Avatar"
          className="rounded-full size-14"
          onClick={onclick}
        />
      </div>
    </main>
  );
}
