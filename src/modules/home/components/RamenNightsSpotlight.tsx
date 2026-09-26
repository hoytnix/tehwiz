import React from 'react';
import Link from 'next/link';
import { CyberButton } from '@/components/ui/CyberButton';

export const RamenNightsSpotlight: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-rose-500/40 bg-gradient-to-br from-rose-950/60 via-amber-950/25 to-black/85 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl shadow-rose-950/40">
      {/* Ambient Spotlight Glow Orbs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-rose-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="flex-1 min-w-0">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping inline-block" />
              NEW RELEASE • NOW ON ITCH.IO 🎉
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
              TOKYO UNIV CAPSTONE SIM
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-orange-500/20 text-orange-300 border border-orange-500/40">
              ZERO-DEPENDENCY CANVAS
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              FREE ($1 REC. DONATION)
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 flex items-center gap-3">
            <span>Ramen Nights &amp; Budget Bites</span>
            <span className="text-2xl sm:text-3xl select-none" role="img" aria-label="ramen">🍜</span>
          </h2>

          {/* Quote / Hook */}
          <p className="text-rose-200 text-sm sm:text-base italic font-medium mb-4">
            &ldquo;Where textbook economic theory clashes with Tokyo&apos;s cutthroat restaurant industry. Scale from a cramped alley cart to a five-district empire to graduate.&rdquo;
          </p>

          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-3xl">
            <strong className="text-rose-300 font-semibold">Ramen Nights &amp; Budget Bites</strong> is Tokyo University Department of Economics&apos; most grueling capstone challenge! Found, operate, and scale a profitable ramen franchise across five simulated Tokyo districts—from budget residential hubs to bustling Shinjuku commuter rushes and high-margin Ginza storefronts. Built from scratch with zero runtime dependencies on pure HTML5 Canvas and dynamic Web Audio chiptunes: recruit postgraduate classmates with specialized skill trees, engineer broths in the Custom Recipe Lab, monitor live P&amp;L balance sheets, and adapt to day/night weather dynamics without microtransactions or predatory wait timers.
          </p>

          {/* Feature Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              '🏙️ 5 Tokyo Districts',
              '🎓 Classmate Crew & Skill Trees',
              '🍜 Custom Recipe Lab & Tare R&D',
              '📊 Live P&L Dashboards & Inflation',
              '🌦️ Weather & Shift Dynamics',
              '🎨 Vanilla HTML5 Canvas',
              '🎵 Web Audio Chiptunes',
              '🚫 Zero Paywalls or Predatory Timers'
            ].map((spec) => (
              <span
                key={spec}
                className="text-xs px-3 py-1 rounded-xl bg-black/50 border border-rose-500/20 text-rose-200 font-mono font-medium"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://tehwiz.itch.io/ramen-nights-and-budget-bites"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-rose-600 via-rose-500 to-red-500 hover:from-rose-500 hover:to-red-400 transition-all shadow-lg shadow-rose-600/30 flex items-center gap-2"
            >
              <span className="material-icons text-base">sports_esports</span>
              <span>Play on Itch.io</span>
              <span className="material-icons text-sm">arrow_outward</span>
            </a>

            <CyberButton
              variant="secondary"
              size="md"
              icon="tune"
              href="/portfolio/ramen-nights"
            >
              Game Architecture &amp; Specs
            </CyberButton>

            <a
              href="https://ramen.tehwiz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-amber-200 bg-amber-500/10 border border-amber-500/25 hover:bg-amber-500/20 transition-all flex items-center gap-1.5"
            >
              <span className="material-icons text-sm">open_in_browser</span>
              <span>Try Beta</span>
            </a>
          </div>
        </div>

        {/* Quick Metrics Pillar */}
        <div className="lg:w-72 shrink-0 p-5 rounded-2xl bg-black/50 border border-rose-500/20 backdrop-blur-md flex flex-col gap-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-rose-300 font-bold flex items-center gap-1.5">
            <span className="material-icons text-sm text-rose-400">sports_esports</span>
            Release Telemetry
          </span>
          <div className="flex justify-between items-center py-2 border-b border-white/5 text-xs">
            <span className="text-slate-400">Academic Lore</span>
            <span className="font-mono text-emerald-400 font-bold">Tokyo Univ Capstone</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5 text-xs">
            <span className="text-slate-400">Districts</span>
            <span className="font-mono text-rose-300 font-bold">5 Tokyo Hubs</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5 text-xs">
            <span className="text-slate-400">Engine Stack</span>
            <span className="font-mono text-slate-300 font-medium">Vanilla HTML5 Canvas</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/5 text-xs">
            <span className="text-slate-400">Audio Stack</span>
            <span className="font-mono text-amber-300 font-medium">Web Audio Chiptunes</span>
          </div>
          <div className="flex justify-between items-center py-2 text-xs">
            <span className="text-slate-400">Predatory Timers</span>
            <span className="font-mono text-emerald-400 font-bold">0% (Pure Strategy)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
