'use client';

import React, { useState, useEffect } from 'react';
import { PromptItem } from '@/types';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { CyberButton } from '@/components/ui/CyberButton';

interface PromptDetailModalProps {
  prompt: PromptItem;
  onClose: () => void;
}

export const PromptDetailModal: React.FC<PromptDetailModalProps> = ({ prompt, onClose }) => {
  const [copied, setCopied] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 lg:p-8" 
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-slate-950/90 border border-white/[0.1] shadow-2xl overflow-hidden relative specular-border animate-float-gentle"
        onClick={e => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-32 bg-amber-500/10 blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-start justify-between gap-4 bg-white/[0.02] backdrop-blur-md shrink-0">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Cognitive Architecture
              </span>
              <span className="text-xs text-slate-500 font-mono">
                /prompts/{prompt.id}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {prompt.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              {prompt.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {prompt.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-amber-200/90"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] transition-colors shrink-0 cursor-pointer"
            title="Close modal (Esc)"
          >
            <span className="material-icons text-lg">close</span>
          </button>
        </div>

        {/* Modal Content - Rendered Markdown */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-black/40">
          <div className="prose prose-invert max-w-none text-slate-200">
            <MarkdownRenderer>{prompt.content}</MarkdownRenderer>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-white/[0.08] bg-black/80 flex items-center justify-between gap-4 shrink-0">
          <div className="text-[11px] font-mono text-slate-400 hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>SYSTEM PROMPT INSTRUCTION • READ ONLY</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <CyberButton
              variant="secondary"
              size="md"
              onClick={onClose}
            >
              Close
            </CyberButton>

            <CyberButton
              variant={copied ? 'emerald' : 'primary'}
              size="md"
              icon={copied ? 'check' : 'content_copy'}
              onClick={handleCopy}
              className="min-w-[170px]"
            >
              {copied ? 'Copied Prompt!' : 'Copy Raw Prompt'}
            </CyberButton>
          </div>
        </div>
      </div>
    </div>
  );
};
