import React from "react";
import { v0 } from "v0-sdk";

import { ChatInput } from "./chat-input";
import { ChatResponse } from "./chat-response";
import { cn } from "@/lib/utils";
import { chatPrompt } from "@/api";

export const Chat = async () => {
  // const chat = await v0.chats.create({
  //   message: "What is the capital of Australia?",
  // });
  // const chatResponse =
  //   chat.files?.map((file) => file.source).join("\n\n") || "";
  // const chatResponse = await chatPrompt("What is the capital of Japan?");
  // console.log(chatResponse);
  const content = true;
  const user = {
    name: "John Doe",
    email: "admin@wanchat.com",
  };

  return (
    <div className="w-full h-full max-w-4xl mx-auto relative flex flex-col items-center justify-center rounded-xl mt-3">
      {content ? (
        <h1>Chat Response</h1>
      ) : (
        <div className="">
          <h1 className="md:text-5xl text-xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-transparent bg-clip-text mb-3">
            Welcome back {user.name.split(" ")[0]}.
          </h1>
          <p>Describe what you want to build and we will help you build it.</p>
        </div>
      )}

      <div
        className={cn("w-full", {
          "absolute bottom-5 left-0 right-0": content,
        })}
      >
        {/* <ChatResult code={code} /> */}
        <ChatInput />
      </div>
    </div>
  );
};
