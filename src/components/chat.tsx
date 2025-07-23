"use client";

import React from "react";
import { SendHorizontal } from "lucide-react";

export const Chat = () => {
  const user = {
    name: "John Doe",
    email: "admin@wanchat.com",
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-2">
      <h1 className="md:text-5xl text-xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-transparent bg-clip-text mb-3">
        Welcome back {user.name.split(" ")[0]}.
      </h1>
      <p>Describe what you want to build and we will help you build it.</p>
      <div className="w-full max-w-3xl mx-auto relative flex flex-col p-5 items-center justify-center border border-gray-500 rounded-md mt-3">
        <div
          className="w-full overflow-hidden bg-transparent resize-none outline-none"
          contentEditable
          id="chat"
        ></div>
        <div className="absolute right-2 bottom-2">
          <SendHorizontal className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
