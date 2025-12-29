import { v0 } from "v0-sdk";

const chatPrompt = async (formData: FormData) => {
  const message = formData.get("chat");
  //   const chat = await v0.chats.create({ message });
  //   const result = chat.files?.map((file) => file.source);

  return message;
};

const getPrompt = async (message: string) => {
  console.log("I got It!!:", message);
  const chat = await v0.chats.create({ message });
  const result = chat.files?.map((file) => file.source);

  return result;
};

export { chatPrompt, getPrompt };
