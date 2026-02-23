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

    return `${videoUri}&key=${process.env.API_KEY}`;
  } catch (error) {
    console.error("Veo Generation Error:", error);
    throw error;
  }
};
