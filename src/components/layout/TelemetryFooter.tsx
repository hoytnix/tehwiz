import React from 'react';

export const TelemetryFooter: React.FC = () => {
  return (
    <footer className="h-7 px-6 z-10 shrink-0 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-black/40 border-t border-white/[0.05] select-none">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(99,102,241,0.6)]"></span>
        <span className="text-slate-300">A TehWiz Production</span>
        <span className="text-slate-600">/</span>
        <span className="text-slate-400 hidden sm:inline">Michael Scott Hoyt // © 2026 ISICECAKEOISIS.</span>
      </div>

      <div className="flex items-center gap-4 text-slate-400">
        <span className="hidden md:inline">Next.js 15 • React 19 • WebGPU • TypeScript</span>
        <span className="text-slate-600 hidden md:inline">/</span>
        <span className="text-emerald-400/90 font-medium">System Online</span>
      </div>
    </footer>
  );
};
