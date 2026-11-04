'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/portfolio', label: 'Projects' },
  { href: '/blog', label: 'Writing' },
  { href: '/vlog', label: 'Vlogs' },
  { href: '/#about', label: 'About' },
];

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="shrink-0 border-b border-edge bg-ink">
      <div className="max-w-magazine mx-auto flex items-center justify-between px-6 lg:px-16 h-16">
        <Link href="/" className="flex items-center gap-3 focus:outline-none group">
          <span className="w-8 h-8 flex items-center justify-center bg-accent text-ink font-display text-lg leading-none">
            T
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-bone group-hover:text-accent transition-colors">
              TehWiz Productions
            </span>
            <span className="text-xs text-muted">
              Michael Scott Hoyt
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.href === '/#about'
                ? false
                : pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-sm transition-colors ${
                  active ? 'text-bone' : 'text-muted hover:text-bone'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://github.com/hoytnix"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 px-3 py-1.5 text-sm text-muted hover:text-bone transition-colors"
          >
            GitHub
          </a>
          {process.env.NODE_ENV === 'development' && (
            <Link
              href="/editor"
              className="ml-2 px-2.5 py-1 text-xs font-mono rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors flex items-center gap-1.5"
              title="Localhost Content Studio (Dev Only)"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Editor</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
