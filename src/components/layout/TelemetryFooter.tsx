import React from 'react';
import { SITE_CONFIG } from '@/config/site';

export const TelemetryFooter: React.FC = () => {
  return (
    <footer className="shrink-0 border-t border-edge bg-ink">
      <div className="max-w-magazine mx-auto px-6 lg:px-16 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm text-muted">
        <span>
          Copyright (C) 2026 <a href="https://isicecakeoisis.com" target="_blank" rel="noopener">ISICECAKEOISIS</a>. A <a href="https://tehwiz.com" target="_blank" rel="noopener">TehWiz Production</a>.
        </span>
        <span>
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bone transition-colors"
          >
            Contact / GitHub
          </a>
          <span className="mx-2">·</span>
          <span>Next.js 15 · React 19 · WebGPU · TypeScript</span>
        </span>
      </div>
    </footer>
  );
};
