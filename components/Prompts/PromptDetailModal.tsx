import React, { useState } from 'react';
import { PromptItem } from '../../types';
import { MarkdownRenderer } from '../Shared/MarkdownRenderer';

interface PromptDetailModalProps {
  prompt: PromptItem;
  onClose: () => void;
}

export const PromptDetailModal: React.FC<PromptDetailModalProps> = ({ prompt, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8" onClick={onClose}>
        <div 
            className="bg-leet-black border border-leet-green/30 w-full max-w-4xl h-[85vh] flex flex-col rounded-lg shadow-[0_0_50px_rgba(0,255,65,0.15)] relative overflow-hidden" 
            onClick={e => e.stopPropagation()}
        >
            {/* Modal Header */}
            <div className="p-4 border-b border-leet-green/20 flex items-center justify-between bg-black/50 backdrop-blur">
                <div>
                    <h2 className="text-xl font-bold text-leet-green tracking-wide">{prompt.title}</h2>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                            <span className="font-mono">/prompts/{prompt.id}</span>
                            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                            <div className="flex gap-1">
                            {prompt.tags.map(tag => (
                                <span key={tag} className="border border-gray-800 px-1 rounded text-[10px]">{tag}</span>
                            ))}
                            </div>
                    </div>
                </div>
                <button 
                    onClick={onClose}
                    className="text-gray-500 hover:text-red-500 transition-colors p-2 rounded hover:bg-white/5"
                >
                    <span className="material-icons">close</span>
                </button>
            </div>

            {/* Modal Content - Rendered Markdown */}
            <div className="flex-1 overflow-y-auto p-6 bg-black/40 custom-scrollbar">
                    <div className="max-w-none">
                    <MarkdownRenderer>{prompt.content}</MarkdownRenderer>
                    </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-leet-green/20 bg-black/80 flex justify-between items-center shrink-0">
                    <div className="text-[10px] text-gray-600 font-mono hidden md:block">
                    RENDERING_ENGINE: MARKDOWN_V2 // MODE: READ_ONLY
                    </div>
                    <button
                    onClick={() => handleCopy(prompt.id, prompt.content)}
                    className={`px-8 py-3 rounded font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    copiedId === prompt.id
                        ? 'bg-leet-green text-black border border-leet-green shadow-[0_0_15px_rgba(0,255,65,0.4)]'
                        : 'bg-leet-green/10 text-leet-green border border-leet-green/50 hover:bg-leet-green hover:text-black hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]'
                    }`}
                >
                    {copiedId === prompt.id ? (
                        <>
                        <span className="material-icons">check_circle</span>
                        COPIED_TO_CLIPBOARD
                        </>
                    ) : (
                        <>
                        <span className="material-icons">content_copy</span>
                        COPY_RAW_SOURCE
                        </>
                    )}
                </button>
            </div>
        </div>
    </div>
  );
};