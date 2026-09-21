import React from 'react';

export const StatsMatrix: React.FC = () => {
  const stats = [
    { label: 'Production Systems', value: '14+', note: 'Active Live Deployments & Repos' },
    { label: 'Edge Architecture', value: '100%', note: 'Sovereign On-Device AI & WebGPU' },
    { label: 'Inference Throughput', value: '70–110', note: 'TPS on Mobile WebGPU (sub-200ms TTFT)' },
    { label: 'Software Craftsmanship', value: '15+ Yrs', note: 'Shipping Products Since 2009' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex flex-col justify-between hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all group"
        >
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200 block mb-1 group-hover:from-indigo-200 group-hover:to-purple-300 transition-all">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-200 block">
              {stat.label}
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2 font-mono leading-tight">
            {stat.note}
          </p>
        </div>
      ))}
    </div>
  );
};
