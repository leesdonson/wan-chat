import React from "react";
import { v0 } from "v0-sdk";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Main = async () => {
  // const chat = await v0.chats.create({
  //   message: "Create a responsive navbar with Tailwind CSS",
  // });
  // const code = chat.files?.map((file) => file.source).join("\n\n") || "";

  return (
    <div className="w-full bg-black/90 p-2">
      <h1 className="text-3xl text-slate-300 font-bold mb-5 text-center">
        Hello, Wan Chat, Powered by v0
      </h1>
      {/* <button
        onClick={handleGenerate}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Generate Code
      </button> */}
      {/* <div className="w-full mx-auto text-sm max-w-2xl rounded mb-2">
        <SyntaxHighlighter language="tsx" style={oneDark} wrapLongLines={true}>
          {code}
        </SyntaxHighlighter>
      </div> */}
    </div>
  );
};

export default Main;
