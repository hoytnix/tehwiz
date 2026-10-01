import React from 'react';
import Link from 'next/link';
import { CyberButton } from '@/components/ui/CyberButton';

export const FlagshipSpotlight: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-indigo-500/40 bg-gradient-to-br from-indigo-950/60 via-purple-950/30 to-black/80 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl shadow-indigo-950/50">
      {/* Ambient Spotlight Glow */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />
      
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="flex-1 min-w-0">
          {/* Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              FLAGSHIP SYSTEM • LIVE BETA
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
              100% IN-BROWSER WEBGPU
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Yuli: Autonomous Cognitive Persona Engine
          </h2>

          {/* Quote / Hook */}
          <p className="text-indigo-200 text-sm sm:text-base italic font-medium mb-4">
            &ldquo;Teaching machines to feel alive: reading personality patterns on-device to build game characters and companions that truly understand you.&rdquo;
          </p>

          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-3xl">
            Born from an inquiry into how game characters move, Yuli is TehWiz&apos;s sovereign on-device cognitive companion running on an 𝔽₂⁴ Boolean Hypercube state space. By reading human MBTI personality patterns in real time across four operational minds, Yuli delivers 70–110 TPS on mobile WebGPU with sub-200ms time-to-first-token—paving the way for next-generation AI NPCs.
          </p>

          {/* Feature Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['𝔽₂⁴ Hypercube State Space', 'WebGPU 110 TPS', 'Pushdown Thought Firewall', 'MBTI Real-time Detection', 'BSL 1.1 License'].map((spec) => (
              <span
                key={spec}
                className="text-xs px-3 py-1 rounded-xl bg-black/40 border border-white/10 text-indigo-200 font-mono font-medium"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://project-yuli.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
            >
              <span>Launch Yuli Web App</span>
              <span className="material-icons text-sm">arrow_outward</span>
            </a>

            <CyberButton
              variant="secondary"
              size="md"
              icon="auto_awesome"
              href="/portfolio/yuli"
            >
              View Architecture & Specs
            </CyberButton>
          </div>
        </div>

        {/* Quick Metrics Pillar */}
        <div className="lg:w-72 shrink-0 p-5 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md flex flex-col gap-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
            Performance Telemetry
          </span>
          <div className="flex justify-between items-center py-2 border-b border-white/5 text-xs">
            <span className="text-slate-400">Time-to-First-Token</span>
            <span className="font-mono text-emerald-400 font-bold">&lt;200ms</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5 text-xs">
            <span className="text-slate-400">Stream Throughput</span>
            <span className="font-mono text-indigo-300 font-bold">70–110 TPS</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5 text-xs">
            <span className="text-slate-400">Hardware Req.</span>
            <span className="font-mono text-slate-300 font-medium">iPhone SE 3+ / 4GB</span>
          </div>
          <div className="flex justify-between items-center py-2 text-xs">
            <span className="text-slate-400">Cloud API Cost</span>
            <span className="font-mono text-emerald-400 font-bold">$0.00 / token</span>
          </div>
        </div>
      </div>
    </div>
  );
};
