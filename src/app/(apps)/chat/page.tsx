"use client";

import { Chat } from "@/components/chat";
import { useChat } from "@/context";

export default function ChatPage() {
  const { chat, content } = useChat((state) => state);

  return (
    <div className="w-full border border-red-700 h-full">
      <Chat chatt={chat} content={content} />
    </div>
  );
}
