import { getAI } from './core';

export const generateVlogEntry = async (prompt: string): Promise<string | null> => {
  const ai = getAI();
  
  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: '16:9'
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!videoUri) return null;

    const apiKey = 
      process.env.NEXT_PUBLIC_GEMINI_API_KEY || 
      process.env.GEMINI_API_KEY || 
      process.env.API_KEY || 
      '';
    return `${videoUri}&key=${apiKey}`;
  } catch (error) {
    console.error("Veo Generation Error:", error);
    throw error;
  }
};
