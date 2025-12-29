import { generateText } from "ai";
import { NextRequest } from "next/server";

export async function GET() {
  const result = await generateText({
    model: "xai/grok-3",
    prompt: "What is the capital of France?",
  });
  return Response.json(result);
}
