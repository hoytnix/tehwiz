import React from 'react';
import { CyberButton } from '@/components/ui/CyberButton';

export const HomeHero: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center relative pt-4">
      {/* Top Eyebrow Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold mb-6 shadow-sm backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        <span>SOVEREIGN EDGE AI • COGNITIVE ARCHITECTURES • COMPUTER VISION</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl">
        Hacking FLOSS &{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
          Coding With Prose
        </span>{' '}
        Since 2009.
      </h1>

      {/* Subtitle */}
      <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal max-w-3xl leading-relaxed mb-8">
        <strong className="text-white font-semibold">TehWiz Productions</strong> by{' '}
        <span className="text-indigo-300 font-semibold">Michael Scott Hoyt</span>. Senior systems architect coding with prose, shipping 100% on-device AI models, objective harm-reduction diagnostics, and high-performance applications since 2009.
      </p>

      {/* Quick CTA Actions */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <CyberButton
          variant="primary"
          size="lg"
          icon="layers"
          href="/portfolio"
          className="shadow-indigo-500/30 shadow-xl"
        >
          Explore 14 Production Projects
        </CyberButton>

        <CyberButton
          variant="secondary"
          size="lg"
          icon="terminal"
          href="/prompts"
        >
          Prompt Engineering Vault
        </CyberButton>

        <CyberButton
          variant="outline"
          size="lg"
          icon="smart_display"
          href="/vlog"
        >
          Engineering Vlogs
        </CyberButton>
      </div>
    </div>
  );
};
