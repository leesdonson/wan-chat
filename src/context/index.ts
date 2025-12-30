import { create } from "zustand";

type ChatState = {
  chat: string;
  content: boolean;
  setContent: (content: boolean) => void;
  addChat: (chat: string) => void;
};

const useChat = create<ChatState>((set) => ({
  chat: "",
  content: false,
  setContent: (content: boolean) => set({ content }),
  addChat: (chat: string) => set({ chat }),
}));

export { useChat };
