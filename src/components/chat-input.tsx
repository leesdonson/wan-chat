"use client";

import { useChat } from "@/context";
// import { getPrompt } from "@/api";
import React, { useState, useRef, useEffect } from "react";

export function ChatInput({ onSend }: { onSend: () => void }) {
  const [prompt, setPrompt] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const addChat = useChat((state) => state.addChat);
  const setContent = useChat((state) => state.setContent);

  // Auto-resize logic for the textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [prompt]);

  const handleSubmit = async () => {
    // const response = await getPrompt(prompt);
    // store the response in the state management, get the response from the state and pass it to the ChatResponse component
    addChat(prompt);
    setContent(true);
  };

  const handleFormEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      console.log("Submitting:", prompt);
      handleSubmit();
      setPrompt(""); // Clear input after submit
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <form
        onSubmit={handleFormEvent}
        className="relative flex items-end w-full shadow-custom rounded-3xl px-4 py-6 transition-all"
      >
        <textarea
          ref={textareaRef}
          rows={1}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask Wan Chat."
          className="w-full bg-transparent border-none outline-none resize-none overflow-hidden max-h-[200px] py-1 text-gray-100 placeholder-gray-00"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleFormEvent(e);
            }
          }}
        />

        <button
          type="submit"
          disabled={!prompt.trim()}
          className={`ml-2 p-2 rounded-full transition-colors ${
            prompt.trim()
              ? "text-blue-600 hover:bg-gray-200 dark:hover:bg-gray-700"
              : "text-gray-400 cursor-not-allowed"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </button>
      </form>
      <p className="text-xs text-center mt-3 text-gray-500">
        AI may display inaccurate info, so double-check its responses.
      </p>
    </div>
  );
}
