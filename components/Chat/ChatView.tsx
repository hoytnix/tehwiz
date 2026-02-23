import React, { useState } from 'react';
import { useChatSession } from '../../hooks/useChatSession';
import { useGeminiInteraction } from '../../hooks/useGeminiInteraction';
import { ChatSidebar } from './ChatSidebar';
import { ChatMessageList } from './ChatMessageList';
import { ChatInputArea } from './ChatInputArea';

export const ChatView: React.FC = () => {
  // Logic Separation: Session Management Hook
  const { 
    sessions, 
    currentSessionId, 
    messages, 
    setMessages, 
    initNewSession, 
    loadSession, 
    deleteSession, 
    updateSessionTitle 
  } = useChatSession();

  // Logic Separation: Gemini Interaction Hook
  const { isProcessing, sendMessage } = useGeminiInteraction(messages, setMessages);

  // View State
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="h-full flex font-sans text-sm relative overflow-hidden bg-transparent">
      <ChatSidebar 
        sessions={sessions}
        currentSessionId={currentSessionId}
        onLoadSession={loadSession}
        onNewSession={initNewSession}
        onDeleteSession={deleteSession}
        onUpdateTitle={updateSessionTitle}
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative w-full h-full">
        {/* Mobile Toggle */}
        <button 
            onClick={() => setShowHistory(true)}
            className="md:hidden absolute top-4 left-4 z-20 text-slate-300 bg-black/20 backdrop-blur p-2 rounded-lg border border-white/10 hover:bg-white/10"
        >
            <span className="material-icons">history</span>
        </button>

        <ChatMessageList messages={messages} isProcessing={isProcessing} />

        <ChatInputArea 
            onSend={sendMessage} 
            isProcessing={isProcessing} 
        />
      </div>
    </div>
  );
};