import React, { useRef, useEffect } from 'react';
import { useChatSession } from '../../hooks/useChatSession';
import { useGeminiInteraction } from '../../hooks/useGeminiInteraction';
import { ChatMessageList } from '../Chat/ChatMessageList';
import { CyberButton } from '../DesignSystem/CyberButton';

export const TerminalView: React.FC = () => {
  // Unified State: Consume the same session hook as ChatView
  const { messages, setMessages } = useChatSession();
  
  // Unified Logic: Use the same interaction hook
  const { isProcessing, sendMessage } = useGeminiInteraction(messages, setMessages);

  const [input, setInput] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="h-full flex flex-col bg-black/80 font-mono text-sm relative">
       {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-leet-green/30" />
      
      {/* Unified List Component */}
      <ChatMessageList 
        messages={messages} 
        isProcessing={isProcessing} 
        variant="terminal" 
      />

      <form onSubmit={handleSubmit} className="p-4 bg-leet-gray/50 border-t border-leet-green/30 flex gap-2 items-center">
        <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-leet-green">{'>'}</span>
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-black border border-leet-green/30 rounded pl-8 pr-4 py-3 focus:outline-none focus:border-leet-green text-leet-green placeholder-leet-green/30 font-mono"
            placeholder="Execute command..."
            autoFocus
            />
        </div>
        <CyberButton 
          type="submit" 
          disabled={isProcessing}
          variant="primary"
          icon="send"
        >
          Send
        </CyberButton>
      </form>
    </div>
  );
};