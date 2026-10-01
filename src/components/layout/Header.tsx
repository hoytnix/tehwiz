'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SYSTEM_NAME, APP_VERSION } from '@/config/constants';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const isMenuActive = pathname.startsWith('/menu');

  return (
    <header className="h-16 flex items-center justify-between px-4 sm:px-6 z-40 shrink-0 relative glass-panel mx-3 sm:mx-4 mt-3 rounded-2xl border border-white/[0.08] shadow-2xl">
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Logo / System Monogram */}
        <Link 
          href="/" 
          className="flex items-center gap-3 focus:outline-none group text-left cursor-pointer"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:scale-105 border border-white/20">
              <span className="material-icons text-white text-base">auto_fix_high</span>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#090d16] shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                {SYSTEM_NAME}
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 text-[9px] font-mono font-bold tracking-widest bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded">
                {APP_VERSION}
              </span>
            </div>
            <span className="hidden sm:block text-[10px] font-medium text-slate-400 tracking-wider uppercase font-mono">
              Michael Scott Hoyt
            </span>
          </div>
        </Link>
      </div>

      {/* Status Indicators, Menu Page Link & External Quick Links */}
      <div className="flex items-center gap-2 sm:gap-4 text-xs font-medium text-slate-400">
        {/* GitHub Profile */}
        <a
          href="https://github.com/hoytnix"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/20 text-slate-300 hover:text-white transition-all duration-200 text-xs font-medium"
          title="GitHub Profile (@hoytnix)"
        >
          <span className="material-icons text-sm text-indigo-400">code</span>
          <span className="font-mono">@hoytnix</span>
        </a>

        {/* Menu Page Direct Link Button */}
        <Link
          href="/menu"
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200 border ${
            isMenuActive
              ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-lg shadow-pink-600/30 border-pink-400/40'
              : 'bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white border-white/10 hover:border-indigo-400/30'
          }`}
          title="Open Complete System Menu Page"
          aria-label="Open System Menu Page"
        >
          <span className="material-icons text-base">apps</span>
          <span className="font-semibold text-xs">Menu</span>
        </Link>
      </div>
    </header>
  );
};
