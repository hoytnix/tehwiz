'use client';

import React, { useState } from 'react';
import { PromptItem } from '@/types';
import { CyberCard } from '@/components/ui/CyberCard';
import { CyberButton } from '@/components/ui/CyberButton';

interface PromptCardProps {
  prompt: PromptItem;
  onSelect: (prompt: PromptItem) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({ prompt, onSelect }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CyberCard 
      glowColor="amber"
      className="flex flex-col h-full bg-slate-950/70 border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 group cursor-pointer"
      onClick={() => onSelect(prompt)}
    >
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
              Cognitive Instruction
            </span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors tracking-tight line-clamp-1">
            {prompt.title}
          </h3>
        </div>

        {/* Quick Copy Icon Button */}
        <button
          onClick={handleCopy}
          className={`p-2 rounded-xl border transition-all shrink-0 cursor-pointer ${
            copied
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-500/20'
              : 'bg-white/[0.04] text-slate-400 hover:text-white border-white/[0.08] hover:bg-white/[0.08]'
          }`}
          title={copied ? 'Copied to clipboard!' : 'Copy prompt text'}
        >
          <span className="material-icons text-sm block">
            {copied ? 'check' : 'content_copy'}
          </span>
        </button>
      </div>

      {/* Description */}
      <p className="text-xs text-slate-300 mb-4 line-clamp-2 leading-relaxed">
        {prompt.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {prompt.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-amber-200/80 font-mono"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Code Editor Window Preview */}
      <div className="mt-auto mb-4 rounded-xl overflow-hidden border border-white/[0.08] bg-black/60 shadow-inner group/code">
        {/* Editor Window Titlebar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-white/[0.03] border-b border-white/[0.06] text-[10px] font-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500/40"></span>
            <span className="w-2 h-2 rounded-full bg-amber-500/40"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-500/40"></span>
          </div>
          <span className="truncate opacity-75">system_prompt.md</span>
        </div>

        {/* Editor Content Area */}
        <div className="p-3 text-[11px] font-mono text-slate-300 leading-relaxed max-h-24 overflow-hidden relative">
          <p className="whitespace-pre-wrap line-clamp-4 font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
            {prompt.content}
          </p>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
        <CyberButton
          variant="secondary"
          size="sm"
          icon="visibility"
          className="flex-1 text-xs"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(prompt);
          }}
        >
          Inspect Prompt
        </CyberButton>

        <CyberButton
          variant={copied ? 'emerald' : 'outline'}
          size="sm"
          icon={copied ? 'check' : 'content_copy'}
          className="flex-1 text-xs"
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy Raw'}
        </CyberButton>
      </div>
    </CyberCard>
  );
};
