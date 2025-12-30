import { v0 } from "v0-sdk";

import { ChatInput } from "./chat-input";
import { ChatResponse } from "./chat-response";

export const Chat = async ({
  chatt,
  content,
}: {
  chatt: string;
  content: boolean;
}) => {
  // const chatt = useChat((state) => state.chat);
  // const content = useChat((state) => state.content);

  let chatResponse = "";

  // if (chatt && content) {
  //   const chat = await v0.chats.create({
  //     message: chatt,
  //   });
  //   chatResponse = chat.files?.map((file) => file.source).join("\n\n") || "";
  // }

  // const content = false;
  const user = {
    name: "John Doe",
    email: "admin@wanchat.com",
  };

  return (
    <div className="w-full justify-center h-full max-w-4xl mx-auto relative flex flex-col rounded-xl mt-3">
      {content ? (
        <ChatResponse chat={chatResponse} />
      ) : (
        <div className="w-full max-w-3xl mx-auto p-4">
          <h1 className="md:text-5xl text-xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-transparent bg-clip-text mb-3">
            Welcome back {user.name.split(" ")[0]}.
          </h1>
          <p>Describe what you want to build and we will help you build it.</p>
        </div>
      )}

      <div className="w-full">
        <ChatInput onSend={() => {}} />
      </div>
    </div>
  );
};
