## Wan Chat - Powered by v0 SDK by Vercel

```jsx
"use client";

import React, { useState } from "react";
import { v0 } from "v0-sdk";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Chat = () => {
  const [src, setSrc] = useState < string > "";

  const handleGenerate = async () => {
    const chat = await v0.chats.create({
      message: "Create a responsive navbar with Tailwind CSS",
    });
    const code = chat.files?.map((file) => file.source).join("\n\n") || "";
    setSrc(code);
  };

  return (
    <div className="w-full p-2">
      <h1 className="text-3xl font-bold mb-5 text-center">
        Hello, Wan Chat, Powered by v0
      </h1>
      <button
        onClick={handleGenerate}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Generate Code
      </button>
      <div className="w-full mx-auto text-sm border max-w-2xl bg-gray-100 rounded p-4 mb-2">
        <SyntaxHighlighter language="tsx" style={oneDark} wrapLongLines>
          {src}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
```
