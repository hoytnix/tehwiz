'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SYSTEM_NAME, APP_VERSION } from '@/config/constants';
import { APP_REGISTRY } from '@/config/appRegistry';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isItemActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

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

        {/* Desktop Navigation Switcher */}
        <nav className="hidden md:flex items-center gap-1 ml-2 p-1 rounded-xl bg-black/40 border border-white/[0.06] backdrop-blur-md">
          {APP_REGISTRY.map((item) => {
            const active = isItemActive(item.href);
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                  active
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-400/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.06]'
                }`}
              >
                <span className="material-icons text-sm opacity-80">{item.icon}</span>
                <span>{item.shortLabel || item.label}</span>
                {item.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                    active ? 'bg-black/30 text-indigo-200' : 'bg-white/10 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Status Indicators & External Quick Links */}
      <div className="flex items-center gap-3 sm:gap-4 text-xs font-medium text-slate-400">
        {/* GitHub Profile */}
        <a
          href="https://github.com/hoytnix"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/20 text-slate-300 hover:text-white transition-all duration-200 text-xs font-medium"
          title="GitHub Profile (@hoytnix)"
        >
          <span className="material-icons text-sm text-indigo-400">code</span>
          <span className="font-mono">@hoytnix</span>
        </a>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-slate-200 p-2 hover:bg-white/10 rounded-xl transition-colors border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-icons text-lg">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl pt-20 px-4 pb-8 flex flex-col gap-3">
          <div className="flex justify-between items-center pb-4 mb-2 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">Navigation</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <span className="material-icons">close</span>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {APP_REGISTRY.map((item) => {
              const active = isItemActive(item.href);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-3.5 rounded-xl text-left font-semibold flex items-center justify-between transition-all ${
                    active 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40' 
                      : 'text-slate-300 hover:bg-white/5 hover:text-white border border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-icons text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-white/10">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center text-xs text-slate-400">
            <span className="font-mono">Michael Scott Hoyt</span>
            <a 
              href="https://github.com/hoytnix" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline flex items-center gap-1 font-mono"
            >
              <span>GitHub</span>
              <span className="material-icons text-xs">open_in_new</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
