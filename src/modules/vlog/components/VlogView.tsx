'use client';

import React, { useState } from 'react';
import { VlogEntry } from '@/types';
import { MOCK_ENTRIES } from '../data/vlogData';
import { FeaturedStream } from './FeaturedStream';
import { VlogCard } from './VlogCard';
import { CyberCard } from '@/components/ui/CyberCard';

export const VlogView: React.FC = () => {
  const [entries] = useState<VlogEntry[]>(MOCK_ENTRIES);

  return (
    <div className="h-full flex flex-col p-4 sm:p-6 lg:p-8 overflow-y-auto pb-24 bg-transparent text-slate-100">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-white/[0.08] flex-shrink-0">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <h2 className="text-2xl sm:text-3xl text-white font-extrabold tracking-tight">
              Engineering Vlogs
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Live Video Streams
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Zero-to-App-Store architectural journals, vibe-coding sessions, and AI game development walkthroughs.
          </p>
        </div>

        <a
          href="https://www.youtube.com/@MichaelHoyt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600/15 border border-red-500/30 text-red-300 hover:bg-red-600/25 hover:text-white transition-all text-xs font-semibold self-start sm:self-auto shadow-sm"
        >
          <span className="material-icons text-base">smart_display</span>
          <span>YouTube Channel</span>
          <span className="material-icons text-xs">open_in_new</span>
        </a>
      </div>

      {/* Featured Video Showcase */}
      {entries.length > 0 && (
        <FeaturedStream entry={entries[0]} />
      )}

      {/* Archive Grid & Upcoming Teaser */}
      <div className="flex flex-col gap-4">
        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
          Stream Archive & Upcoming Logs
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {entries.map((entry) => (
            <VlogCard key={entry.id} entry={entry} />
          ))}

          {/* Upcoming Episode Teaser Card */}
          <CyberCard 
            glowColor="indigo"
            className="flex flex-col justify-between p-5 bg-gradient-to-br from-indigo-950/20 via-slate-950/60 to-black/80 border border-dashed border-indigo-500/30"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  NEXT BROADCAST
                </span>
                <span className="text-xs text-indigo-400 font-mono">Upcoming Episode</span>
              </div>

              <h4 className="text-base font-bold text-white tracking-tight mb-2">
                [Ep. 3] Sovereign Edge AI: Building Yuli's 𝔽₂⁴ Hypercube & WebGPU Engine
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Deep dive into WebGPU model quantization, inline Pushdown Automaton thought filtering, and zero-cloud-bill character AI architectures.
              </p>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Production Stream</span>
              <a
                href="https://www.youtube.com/@MichaelHoyt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-indigo-300 hover:text-white flex items-center gap-1"
              >
                <span>Subscribe on YouTube</span>
                <span className="material-icons text-xs">open_in_new</span>
              </a>
            </div>
          </CyberCard>
        </div>
      </div>

    </div>
  );
};
