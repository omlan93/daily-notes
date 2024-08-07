import React from "react";

function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-300">
      <h1 className="text-4xl text-blue-900 mb-10">Profile Details</h1>
      <hr />
      <p className="text-4xl text-blue-900">
        User ID:{" "}
        <span className="p-2 rounded bg-orange-500 text-black ml-2">
          {params.id}
        </span>
      </p>
    </div>
  );
}

export default UserProfile;
