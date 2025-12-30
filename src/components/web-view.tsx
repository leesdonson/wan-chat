"use client";
import { useState } from "react";
import { CodeProjectPart } from "@v0-sdk/react";
import { Chatinput } from "./chatinput";

export default function GeminiClone() {
  const [messages, setMessages] = useState<any[]>([]);
  const [activeDemoId, setActiveDemoId] = useState<string | null>(null);

  const handleSendMessage = async (input: string) => {
    // 1. Add user message to UI
    setMessages((prev) => [...prev, { role: "user", content: input }]);

    // 2. Call your API
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    // 3. Update the UI with the AI response and the "Live" Component
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "Generating your UI..." },
    ]);
    if (data.demoId) {
      setActiveDemoId(data.demoId); // This triggers the renderer
    }
  };

  return (
    <main className="flex h-screen w-full">
      {/* LEFT SIDE: The Chat (ChatResponse + ChatInput) */}
      <div className="w-1/2 flex flex-col border-r">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`p-4 ${m.role === "user" ? "bg-muted" : ""}`}
            >
              {m.content}
            </div>
          ))}
        </div>
        <Chatinput onSend={handleSendMessage} />
      </div>

      {/* RIGHT SIDE: The Live Rendering (Artifacts/Gemini Style) */}
      <div className="w-1/2 bg-gray-50">
        {activeDemoId ? (
          <CodeProjectPart />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Preview will appear here
          </div>
        )}
      </div>
    </main>
  );
}
