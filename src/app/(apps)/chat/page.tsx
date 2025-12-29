import { Chat } from "@/components/chat";
import { ChatResponse } from "@/components/chat-response";

const ChatPage = async () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Chat />
    </div>
  );
};

export default ChatPage;
