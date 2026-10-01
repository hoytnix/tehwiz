import React from 'react';
import Link from 'next/link';
import { CyberCard } from '@/components/ui/CyberCard';

export const CorePillars: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Explore The TehWiz Workstation
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Choose a domain to inspect systems, source code, prompt loops, or vlog archives.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Pillar 1: Projects */}
        <Link href="/portfolio" className="block focus:outline-none">
          <CyberCard 
            glowColor="indigo"
            className="flex flex-col justify-between group h-full"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300 shadow-md">
                <span className="material-icons text-2xl">layers</span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  14 Projects
                </h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Catalog
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Sovereign AI agents, harm-reduction computer vision scanners, and WebGPU protocols.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Yuli', 'Purple Canary', 'Aevloc'].map(p => (
                  <span key={p} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-400 font-mono">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-indigo-300 group-hover:text-indigo-200">
              <span>Browse Catalog</span>
              <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </CyberCard>
        </Link>

        {/* Pillar 2: Prompt Vault */}
        <Link href="/prompts" className="block focus:outline-none">
          <CyberCard 
            glowColor="amber"
            className="flex flex-col justify-between group h-full"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300 shadow-md">
                <span className="material-icons text-2xl">terminal</span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  Prompt Vault
                </h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Scaffolds
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                System instructions, recursive deep-thought cognitive loops, and expert personas.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Recursion', 'Deep Thought', 'Personas'].map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-400 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-amber-300 group-hover:text-amber-200">
              <span>Access Vault</span>
              <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </CyberCard>
        </Link>

        {/* Pillar 3: Engineering Blog */}
        <Link href="/blog" className="block focus:outline-none">
          <CyberCard 
            glowColor="emerald"
            className="flex flex-col justify-between group h-full"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-md">
                <span className="material-icons text-2xl">article</span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Engineering Blog
                </h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Articles
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Architectural essays, on-device AI models, WebGPU pipelines, and sovereign systems.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Sovereign AI', 'Edge Computing', 'WebGPU'].map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-400 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-emerald-300 group-hover:text-emerald-200">
              <span>Read Articles</span>
              <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </CyberCard>
        </Link>

        {/* Pillar 4: Vlogs */}
        <Link href="/vlog" className="block focus:outline-none">
          <CyberCard 
            glowColor="cyan"
            className="flex flex-col justify-between group h-full"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300 shadow-md">
                <span className="material-icons text-2xl">smart_display</span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Engineering Vlogs
                </h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Streams
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Vibe-coding vlogs, zero-to-App-Store architectural journals, and live builds.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Aevloc Demo', 'Ohtani 1/1 Card', 'Vibe Coding'].map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-400 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-cyan-300 group-hover:text-cyan-200">
              <span>Watch Streams</span>
              <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </CyberCard>
        </Link>

      </div>
    </div>
  );
};
