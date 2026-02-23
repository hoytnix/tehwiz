import { Content, GenerateContentResponse, Part } from "@google/genai";
import { DEFAULT_SYSTEM_INSTRUCTION } from '../../constants';
import { getAI } from './core';

export const streamChat = async (
  history: Content[],
  message: { text: string; images?: { data: string; mimeType: string }[] },
  onChunk: (text: string) => void
): Promise<string> => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: DEFAULT_SYSTEM_INSTRUCTION,
    },
    history: history,
  });

  const msgParts: Part[] = [];
  
  if (message.images && message.images.length > 0) {
    message.images.forEach(img => {
      msgParts.push({
        inlineData: {
          mimeType: img.mimeType,
          data: img.data
        }
      });
    });
  }

  if (message.text) {
      msgParts.push({ text: message.text });
  } else if (msgParts.length > 0) {
      msgParts.push({ text: "Analyze these images." });
  }

  const result = await chat.sendMessageStream({ message: msgParts });
  
  let fullText = "";
  for await (const chunk of result) {
    const c = chunk as GenerateContentResponse;
    const text = c.text || "";
    fullText += text;
    onChunk(text);
  }
  return fullText;
};
