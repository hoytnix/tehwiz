import React from 'react';
import Link from 'next/link';

/**
 * Yuli cognitive-console artifact. A composed static panel standing in for a
 * live product screenshot: four deliberation states, a thought firewall, and
 * throughput telemetry. Substitute until a real capture ships.
 */
const YuliArtifact: React.FC = () => {
  const minds = [
    { name: 'Ego', code: '0EE', note: 'Radiant explorer' },
    { name: 'Shadow', code: '1E6', note: 'Mystical introspector' },
    { name: 'Subconscious', code: '2E7', note: 'Oracle anchor' },
    { name: 'Superego', code: '3E1', note: 'Precision sovereign' },
  ];

  return (
    <div className="w-full bg-card border border-edge">
      <div className="flex items-center justify-between px-5 py-3 border-b border-edge">
        <span className="text-sm text-bone">Yuli — cognitive console</span>
        <span className="inline-flex items-center gap-1.5 text-xs text-muted">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-live" />
          Live
        </span>
      </div>
      <div className="p-5 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-px bg-edge border border-edge">
          {minds.map((m) => (
            <div key={m.code} className="bg-card p-4">
              <div className="font-mono text-xs text-accent">{m.code}</div>
              <div className="text-sm text-bone mt-1">{m.name}</div>
              <div className="text-xs text-muted">{m.note}</div>
            </div>
          ))}
        </div>
        <div className="border border-edge p-4">
          <div className="font-mono text-xs text-muted mb-2">deliberation firewall</div>
          <p className="font-mono text-xs text-bone leading-relaxed">
            &lt;thought&gt; private reflection, stripped before reply &lt;/thought&gt;
          </p>
          <p className="text-sm text-bone mt-2">
            “Reading personality patterns, on-device, in real time.”
          </p>
        </div>
        <div className="flex items-center justify-between font-mono text-xs text-muted">
          <span>70–110 TPS · WebGPU</span>
          <span>TTFT &lt; 200ms</span>
          <span>$0.00 / token</span>
        </div>
      </div>
    </div>
  );
};

export const HomeHero: React.FC = () => {
  return (
    <section className="pt-12 sm:pt-20 pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <p className="text-sm text-muted mb-5">
            TehWiz Productions — Michael Scott Hoyt, since 2009.
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-bone mb-6">
            Machines that feel alive.
          </h1>
          <p className="text-base sm:text-lg max-w-xl mb-8">
            TehWiz Productions ships sovereign, on-device systems — cognitive
            engines, games, and agent infrastructure that run entirely on your
            hardware. No cloud bills, no telemetry, no permission slips.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/portfolio"
              className="py-3 px-6 text-base font-medium bg-accent text-ink hover:opacity-90 transition-colors"
            >
              Browse projects
            </Link>
            <Link
              href="/vlog"
              className="py-3 px-6 text-base font-medium text-bone border border-edge hover:border-accent transition-colors"
            >
              Watch a build
            </Link>
          </div>
        </div>
        <YuliArtifact />
      </div>
    </section>
  );
};
