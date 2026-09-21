import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

export const getAI = (): GoogleGenAI => {
  if (!aiInstance) {
    const apiKey = 
      process.env.NEXT_PUBLIC_GEMINI_API_KEY || 
      process.env.GEMINI_API_KEY || 
      process.env.API_KEY || 
      '';
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};
