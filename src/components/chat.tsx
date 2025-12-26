import React from "react";
import { v0 } from "v0-sdk";

import { ChatInput } from "./chat-input";
import { ChatResult } from "./chat-result";

export const Chat = async () => {
  const chat = await v0.chats.create({
    message: "Create a responsive navbar with Tailwind CSS",
  });
  const code = chat.files?.map((file) => file.source).join("\n\n") || "";

  const user = {
    name: "John Doe",
    email: "admin@wanchat.com",
  };

  return (
    <div className="w-full mt-10 flex flex-col items-center justify-center p-2">
      <h1 className="md:text-5xl text-xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-transparent bg-clip-text mb-3">
        Welcome back {user.name.split(" ")[0]}.
      </h1>
      <p>Describe what you want to build and we will help you build it.</p>
      <div className="w-full max-w-4xl mx-auto  flex flex-col items-center justify-center rounded-xl mt-3">
        <ChatResult code={code} />
        <ChatInput />
      </div>
    </div>
  );
};
