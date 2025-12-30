// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import { v0 } from "v0-sdk";

export async function POST(request: NextRequest) {
  const { message, chatId } = await request.json();

  try {
    let chat;
    if (chatId) {
      // Continue existing conversation
      chat = await v0.chats.sendMessage({ chatId, message });
    } else {
      // Start a brand new generation
      chat = await v0.chats.create({ message });
    }

    // Returns chat.id and chat.demo (the UI component data)
    return NextResponse.json({
      id: chat.id,
      demoId: chat.demo,
      url: chat.url,
    });
  } catch (error) {
    return NextResponse.json({ error: "Generation failed" }, { status: 500 });
  }
}
