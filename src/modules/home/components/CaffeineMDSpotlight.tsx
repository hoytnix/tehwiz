import React from 'react';
import Link from 'next/link';
import { CyberButton } from '@/components/ui/CyberButton';

export const CaffeineMDSpotlight: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-amber-500/40 bg-gradient-to-br from-amber-950/60 via-stone-950/35 to-black/85 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl shadow-amber-950/40">
      {/* Ambient Spotlight Glow Orbs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="flex-1 min-w-0">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
              ☕ NEW RELEASE · LIVE
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              LOCAL-FIRST PWA
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              FILE SYSTEM ACCESS API
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-purple-500/20 text-purple-300 border border-purple-500/40">
              ZERO VENDOR LOCK-IN
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 flex items-center gap-3">
            <span>CaffeineMD &mdash; Sovereign, Local-First Knowledge Management</span>
            <span className="text-2xl sm:text-3xl select-none" role="img" aria-label="coffee">☕</span>
          </h2>

          {/* Quote / Hook */}
          <p className="text-amber-200 text-sm sm:text-base italic font-medium mb-4">
            &ldquo;High-performance, keyboard-driven Markdown knowledge base &amp; personal wiki engineered for pure thought velocity.&rdquo;
          </p>

          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-3xl">
            <strong className="text-amber-300 font-semibold">CaffeineMD</strong> is a sovereign personal knowledge management system modeled after Obsidian and Notion. Engineered for extreme keyboard-driven speed with zero vendor lock-in, it pairs offline-first IndexedDB persistence with native File System Access API directory mounting. Seamlessly toggle between rich-text prose editing powered by TipTap v2 and ProseMirror, raw plaintext Markdown, and instant diff viewing&mdash;keeping your second brain private, ultra-fast, and completely under your own sovereign control.
          </p>

          {/* Feature Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              'Local-First',
              'TipTap v2',
              'ProseMirror',
              'IndexedDB',
              'PWA',
              'Diff Viewer'
            ].map((chip) => (
              <span
                key={chip}
                className="text-xs px-3 py-1 rounded-xl bg-black/50 border border-amber-500/20 text-amber-200 font-mono font-medium"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.caffeinemd.wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 hover:from-amber-500 hover:to-orange-400 transition-all shadow-lg shadow-amber-600/30 flex items-center gap-2"
            >
              <span className="material-icons text-base">open_in_browser</span>
              <span>Open App (www.caffeinemd.wiki)</span>
              <span className="material-icons text-sm">arrow_outward</span>
            </a>

            <a
              href="https://github.com/hoytnix/CaffeineMD"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
            >
              <span className="material-icons text-base">code</span>
              <span>Source Code</span>
              <span className="material-icons text-sm">arrow_outward</span>
            </a>

            <CyberButton
              variant="secondary"
              size="md"
              icon="auto_awesome"
              href="/portfolio/caffeinemd"
            >
              Architecture &amp; Specs
            </CyberButton>
          </div>
        </div>

        {/* Quick Metrics Pillar */}
        <div className="lg:w-72 shrink-0 p-5 rounded-2xl bg-black/50 border border-amber-500/20 backdrop-blur-md flex flex-col gap-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
            <span className="material-icons text-sm text-amber-400">psychology</span>
            Architecture Telemetry
          </span>
          <div className="flex justify-between items-center py-2 border-b border-white/5 text-xs">
            <span className="text-slate-400">Paradigm</span>
            <span className="font-mono text-emerald-400 font-bold">Local-First PWA</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5 text-xs">
            <span className="text-slate-400">Editor Engine</span>
            <span className="font-mono text-amber-300 font-bold">TipTap v2 / ProseMirror</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5 text-xs">
            <span className="text-slate-400">Storage API</span>
            <span className="font-mono text-slate-300 font-medium">Native File System + IDB</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5 text-xs">
            <span className="text-slate-400">Vendor Lock-In</span>
            <span className="font-mono text-emerald-400 font-bold">0% (Pure Markdown)</span>
          </div>
          <div className="flex justify-between items-center py-2 text-xs">
            <span className="text-slate-400">License</span>
            <span className="font-mono text-cyan-300 font-bold">MIT Open Source</span>
          </div>
        </div>
      </div>
    </div>
  );
};
