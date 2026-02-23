import React, { useState } from 'react';
import { PromptItem } from '../../types';
import { CyberCard } from '../DesignSystem/CyberCard';
import { CyberButton } from '../DesignSystem/CyberButton';

interface PromptCardProps {
  prompt: PromptItem;
  onSelect: (prompt: PromptItem) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({ prompt, onSelect }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, id: string, content: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <CyberCard className="flex flex-col h-full group">
       <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg text-gray-200 group-hover:text-leet-green transition-colors">
            {prompt.title}
          </h3>
          <span className="material-icons text-gray-700 group-hover:text-leet-green/50 transition-colors">
            data_object
          </span>
       </div>

       <div className="flex flex-wrap gap-2 mb-4">
         {prompt.tags.map(tag => (
           <span key={tag} className="text-[10px] border border-gray-700 text-gray-500 px-1.5 py-0.5 rounded group-hover:border-leet-green/30 group-hover:text-leet-green/70 transition-colors">
             {tag}
           </span>
         ))}
       </div>

       <p className="text-sm text-gray-400 mb-4 line-clamp-2 flex-grow">
         {prompt.description}
       </p>

       {/* Preview Block */}
       <div 
          className="bg-black border border-gray-800 rounded p-3 relative group/code mb-4 cursor-pointer hover:border-leet-green/30 transition-colors"
          onClick={() => onSelect(prompt)}
       >
          <div className="absolute top-0 right-0 p-1 z-10">
             <span className="text-[10px] text-gray-600 bg-gray-900 px-1 rounded flex items-center gap-1 opacity-70 group-hover/code:opacity-100 transition-opacity">
                <span className="material-icons text-[10px]">visibility</span>
                PREVIEW
             </span>
          </div>
          <div className="h-24 overflow-hidden relative">
              <div className="text-xs text-leet-green/70 font-mono opacity-70 group-hover/code:opacity-100 transition-opacity whitespace-pre-wrap">
                  {prompt.content}
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></div>
          </div>
       </div>

       {/* Actions */}
       <div className="flex gap-2">
           <CyberButton 
              variant="secondary" 
              className="flex-1" 
              onClick={() => onSelect(prompt)}
              icon="visibility"
           >
             View
           </CyberButton>
           
           <CyberButton
              variant={copiedId === prompt.id ? 'primary' : 'outline'}
              className="flex-1"
              onClick={(e) => handleCopy(e, prompt.id, prompt.content)}
              icon={copiedId === prompt.id ? 'check' : 'content_copy'}
           >
             {copiedId === prompt.id ? 'Copied' : 'Copy'}
           </CyberButton>
       </div>
    </CyberCard>
  );
};