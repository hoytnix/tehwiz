import React, { useRef, useEffect, useState } from 'react';
import { ChatMessage } from '../../types';
import { MarkdownRenderer } from '../Shared/MarkdownRenderer';

interface ChatMessageListProps {
  messages: ChatMessage[];
  isProcessing: boolean;
  variant?: 'modern' | 'terminal';
}

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-colors ${
        copied 
          ? 'text-emerald-400 bg-emerald-400/10' 
          : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
      }`}
      title="Copy full response"
    >
      <span className="material-icons text-[12px]">
        {copied ? 'check' : 'content_copy'}
      </span>
      <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
};

export const ChatMessageList: React.FC<ChatMessageListProps> = ({ 
  messages, 
  isProcessing,
  variant = 'modern' 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isProcessing]);

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 pt-16 md:pt-6 scroll-smooth" ref={scrollRef}>
      {messages.map((msg) => (
        <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} group animate-[fadeIn_0.3s_ease-out]`}>
          
          {/* Avatar for Model */}
          {msg.role === 'model' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg mr-3 flex-shrink-0 mt-1 hidden md:flex">
                 <span className="material-icons text-white text-[14px]">smart_toy</span>
              </div>
          )}

          <div className={`rounded-2xl p-4 shadow-sm backdrop-blur-sm max-w-[90%] md:max-w-[75%] border overflow-hidden ${
            msg.role === 'user' 
              ? 'bg-indigo-600/80 text-white border-indigo-500/50 rounded-br-none' 
              : msg.role === 'system'
              ? 'bg-red-500/10 text-red-300 border-red-500/20 italic text-xs w-full text-center'
              : 'bg-white/5 text-slate-100 border-white/10 rounded-bl-none'
          }`}>
            
            <div className="flex items-center justify-between mb-2 gap-4">
                <div className="flex items-center gap-2 opacity-50 text-[10px] uppercase tracking-wider font-semibold">
                    {msg.role === 'user' ? 'You' : 'Archie'} 
                    <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
                    {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
                {msg.role === 'model' && msg.text && (
                    <CopyButton text={msg.text} />
                )}
            </div>

            {/* Image Grid */}
            {(msg.images && msg.images.length > 0 || msg.image) && (
            <div className={`grid gap-2 mb-3 ${((msg.images?.length || 0) > 1) ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {/* Legacy Support */}
                {msg.image && (
                        <div className="rounded-lg overflow-hidden border border-white/10 bg-black/20 aspect-video flex items-center justify-center">
                        <img src={`data:${msg.mimeType};base64,${msg.image}`} alt="Legacy Upload" className="w-full h-full object-cover" />
                    </div>
                )}
                {/* Modern Support */}
                {msg.images?.map((img, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden border border-white/10 bg-black/20 aspect-video flex items-center justify-center shadow-inner">
                        <img src={`data:${img.mimeType};base64,${img.data}`} alt={`Upload ${idx}`} className="w-full h-full object-cover transition-transform hover:scale-105" />
                    </div>
                ))}
            </div>
            )}

            {msg.text && (
              <div className="text-sm md:text-base leading-relaxed break-words min-w-0">
                  <MarkdownRenderer>{msg.text}</MarkdownRenderer>
              </div>
            )}
            
            {msg.isError && (
                 <div className="text-red-400 text-xs mt-2 font-medium flex items-center gap-1">
                     <span className="material-icons text-sm">error_outline</span>
                     Connection Interrupted
                 </div>
            )}
          </div>
        </div>
      ))}
      
      {isProcessing && (
        <div className="flex justify-start items-center gap-2 ml-1 md:ml-11">
           <div className="flex space-x-1">
               <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
               <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
               <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
           </div>
           <span className="text-xs text-indigo-300 font-medium">Archie is thinking...</span>
        </div>
      )}
    </div>
  );
};