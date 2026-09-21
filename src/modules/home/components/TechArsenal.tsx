import React from 'react';

export const TechArsenal: React.FC = () => {
  const techArsenal = [
    { name: 'WebGPU', icon: 'memory' },
    { name: 'React 19', icon: 'code' },
    { name: 'Next.js 15', icon: 'hub' },
    { name: 'TypeScript', icon: 'integration_instructions' },
    { name: 'PyTorch', icon: 'psychology' },
    { name: 'Computer Vision', icon: 'visibility' },
    { name: 'WASM', icon: 'settings_ethernet' },
    { name: 'Google GenAI', icon: 'auto_awesome' },
    { name: 'Tailwind CSS', icon: 'palette' },
  ];

  return (
    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="material-icons text-indigo-400 text-xl">biotech</span>
        <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
          Core Architectural Arsenal:
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {techArsenal.map((tech) => (
          <span
            key={tech.name}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300"
          >
            <span className="material-icons text-[13px] text-indigo-400">{tech.icon}</span>
            <span>{tech.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
