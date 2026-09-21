import { getAI } from './core';
import { ThreatItem } from '@/types';

export const generateProjectIdea = async (): Promise<any> => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: "Generate a json object for a fake 'elite' portfolio project. It should have: title, description (short, technical), techStack (array of strings), and a short codeSnippet (string). Return ONLY JSON.",
    config: { responseMimeType: 'application/json' }
  });
  try {
    return JSON.parse(response.text || "{}");
  } catch {
    return { title: "Error", description: "Failed to generate", techStack: [], codeSnippet: "" };
  }
};

export const generateCodePayload = async (prompt: string, model: string, useThinking: boolean = false): Promise<string> => {
  const ai = getAI();
  const config: any = {
    systemInstruction: "You are a senior developer. Output only the code requested. Format it using Markdown code blocks.",
  };
  
  if (useThinking && (model.includes('gemini-3') || model.includes('gemini-2.5'))) {
    config.thinkingConfig = { thinkingBudget: 1024 };
  }

  const response = await ai.models.generateContent({
    model: model,
    contents: prompt,
    config: config
  });

  return response.text || "// No code generated";
};

export const fetchThreatIntel = async (query: string = "latest cybersecurity threats"): Promise<ThreatItem[]> => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Find 5 ${query}. Return a JSON array of objects with title, url, source, and severity (low/medium/high/critical). Return ONLY JSON.`,
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: 'application/json'
    }
  });

  try {
    return JSON.parse(response.text || "[]");
  } catch (e) {
    console.error("Failed to parse threat intel", e);
    return [];
  }
};
