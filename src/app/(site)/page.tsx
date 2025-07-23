import React from "react";
import { v0 } from "v0-sdk";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Main = async () => {
  // const chat = await v0.chats.create({
  //   message: "Create a responsive navbar with Tailwind CSS",
  // });
  // const code = chat.files?.map((file) => file.source).join("\n\n") || "";

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <h1 className="md:text-5xl text-2xl p-3 font-bold bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
        Build your web apps in minutes.
      </h1>
      <p className="p-3 mb-5">
        We offer a platform that allows you to build your web apps in minutes.
      </p>
      <div className="w-full max-w-xl mx-auto flex justify-center items-center gap-5 p-2 mb-5">
        <Link className="w-full" href="/chat">
          <button className="rounded cursor-pointer w-full bg-blue-800 p-2">
            Try it now.
          </button>
        </Link>
        <Link className="w-full" href="/docs">
          <button className="rounded w-full cursor-pointer bg-blue-800 p-2">
            Learn more.
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
