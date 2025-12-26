"use client";

import { SendHorizontal } from "lucide-react";

export function ChatInput() {
  return (
    <div className="border relative rounded-xl px-2 py-8 mt-5 w-full">
      <div
        className="w-full overflow-hidden bg-transparent resize-none outline-none"
        contentEditable
        id="chat"
      ></div>
      <div className="absolute right-2 bottom-2">
        <SendHorizontal className="w-4 h-4" />
      </div>
    </div>
  );
}
