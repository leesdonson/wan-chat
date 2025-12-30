"use client";

import React, { useState, useRef, useEffect } from "react";
import { SendHorizontal, Paperclip, Mic } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const Chatinput = ({
  onSend,
  disabled,
  placeholder,
}: ChatInputProps) => {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize the textarea as the user types
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white dark:bg-zinc-900 border-t md:border-none">
      <form
        onSubmit={handleSubmit}
        className="relative flex items-end w-full gap-2 p-2 rounded-2xl bg-zinc-100 dark:bg-zinc-800 focus-within:ring-2 ring-blue-500/50 transition-all"
      >
        {/* Attachment Button */}
        <button
          type="button"
          className="p-2 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
        >
          <Paperclip size={20} />
        </button>

        {/* Text Input Area */}
        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || "Ask Gemini..."}
          disabled={disabled}
          className="w-full bg-transparent border-none focus:ring-0 resize-none py-2 max-h-[200px] scrollbar-thin text-zinc-800 dark:text-zinc-100"
        />

        {/* Action Buttons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="p-2 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            <Mic size={20} />
          </button>

          <button
            type="submit"
            disabled={!input.trim() || disabled}
            className={`p-2 rounded-xl transition-all ${
              input.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                : "text-zinc-400 cursor-not-allowed"
            }`}
          >
            <SendHorizontal size={20} />
          </button>
        </div>
      </form>
      <p className="text-[10px] text-center mt-2 text-zinc-400">
        AI can make mistakes. Check important info.
      </p>
    </div>
  );
};
