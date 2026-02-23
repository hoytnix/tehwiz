import React, { useState } from 'react';
import { ChatMessage } from '../types';
import { streamChat } from '../services/ai/chat';
import { Content, Part } from '@google/genai';

export const useGeminiInteraction = (
  messages: ChatMessage[],
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>
) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const sendMessage = async (
    text: string, 
    images: { data: string; mimeType: string }[] = []
  ) => {
    if ((!text.trim() && images.length === 0) || isProcessing) return;

    // 1. Add User Message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: text,
      images: images.length > 0 ? images : undefined,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setIsProcessing(true);

    // 2. Add Placeholder Model Message
    const modelMsgId = (Date.now() + 1).toString();
    const modelMsg: ChatMessage = {
      id: modelMsgId,
      role: 'model',
      text: '', 
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, modelMsg]);

    try {
      // 3. Prepare History for Gemini SDK
      const history: Content[] = messages
        .filter(m => m.role !== 'system')
        .map(m => {
            const parts: Part[] = [];
            
            // Legacy single image support
            if (m.image && m.mimeType) {
                parts.push({ inlineData: { mimeType: m.mimeType, data: m.image } });
            }
            
            // Modern multiple images
            if (m.images) {
                m.images.forEach(img => {
                    parts.push({ inlineData: { mimeType: img.mimeType, data: img.data } });
                });
            }

            parts.push({ text: m.text || "" });
            return { role: m.role, parts: parts };
        });

      // 4. Stream Response
      await streamChat(history, { 
          text: userMsg.text, 
          images: userMsg.images 
      }, (chunk) => {
        setMessages(prev => prev.map(m => 
          m.id === modelMsgId ? { ...m, text: m.text + chunk } : m
        ));
      });
    } catch (error) {
      console.error("Gemini Interaction Error:", error);
      setMessages(prev => prev.map(m => 
        m.id === modelMsgId ? { ...m, text: "// ERROR: PACKET LOSS. NEURAL LINK SEVERED. RETRY.", isError: true } : m
      ));
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    isProcessing,
    sendMessage
  };
};