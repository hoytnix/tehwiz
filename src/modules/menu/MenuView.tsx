'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PermalinkButton } from '@/components/ui/PermalinkButton';
import { MENU_SECTIONS, NavSectionItem } from '@/config/menuNavigation';
import { SYSTEM_NAME, APP_VERSION } from '@/config/constants';
import { SITE_CONFIG } from '@/config/site';

export const MenuView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter items across all sections based on search query and category filter
  const filteredSections = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return MENU_SECTIONS.map((section) => {
      // Filter by category selection if not 'all'
      if (activeCategory !== 'all' && section.title !== activeCategory) {
        return null;
      }

      if (!q) {
        return section;
      }

      const matchingItems = section.items.filter((item) => {
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesSub = item.subtitle?.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesBadge = item.badge?.toLowerCase().includes(q);
        return matchesTitle || matchesSub || matchesDesc || matchesBadge;
      });

      if (matchingItems.length === 0) {
        return null;
      }

      return {
        ...section,
        items: matchingItems
      };
    }).filter(Boolean) as typeof MENU_SECTIONS;
  }, [searchQuery, activeCategory]);

  const totalMatches = useMemo(() => {
    return filteredSections.reduce((acc, s) => acc + s.items.length, 0);
  }, [filteredSections]);

  return (
    <div className="h-full w-full overflow-y-auto px-4 sm:px-8 py-6 sm:py-8 bg-transparent text-slate-100 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col gap-8 pb-16">
        
        {/* Header Bar with Breadcrumb and Share */}
        <div className="flex items-center justify-between gap-3 flex-shrink-0">
          <Breadcrumbs items={[{ label: 'System Directory Menu', icon: 'apps' }]} />
          <div className="flex items-center gap-2">
            <PermalinkButton path="/menu" label="Share Menu" />
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/50 via-slate-950/60 to-black/80 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 -mb-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>SYSTEM DIRECTORY &amp; NAVIGATION MATRIX</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
                Full System Index
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Explore the complete ecosystem of <strong className="text-white">{SYSTEM_NAME} {APP_VERSION}</strong>. Sovereign edge AI engines, prompt engineering scaffolds, live architectures, and external developer hubs.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 shrink-0">
              <div className="px-4 py-3 rounded-2xl bg-black/40 border border-white/10 flex flex-col backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-extrabold text-indigo-300 font-mono">14</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">AI Systems</span>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-black/40 border border-white/10 flex flex-col backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-extrabold text-purple-300 font-mono">100%</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Edge-Native</span>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-black/40 border border-white/10 flex flex-col backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono">2009</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Est. Founded</span>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-black/40 border border-white/10 flex flex-col backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-mono">LIVE</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Status OK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-slate-900/40 p-2.5 rounded-2xl border border-white/[0.08] backdrop-blur-md">
          {/* Search Input */}
          <div className="relative flex-1">
            <span className="material-icons absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
              search
            </span>
            <input
              type="text"
              placeholder="Search sections, systems, tools, prompts, or repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-indigo-500 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                aria-label="Clear Search"
              >
                <span className="material-icons text-sm">close</span>
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All Sections
            </button>
            {MENU_SECTIONS.map((sec) => (
              <button
                key={sec.title}
                onClick={() => setActiveCategory(sec.title)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeCategory === sec.title
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="material-icons text-xs">{sec.icon}</span>
                <span>{sec.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter if filtering */}
        {(searchQuery || activeCategory !== 'all') && (
          <div className="flex items-center justify-between text-xs text-slate-400 px-2 font-mono">
            <span>
              Showing {totalMatches} destination{totalMatches === 1 ? '' : 's'}
              {searchQuery && <span> matching "{searchQuery}"</span>}
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-indigo-400 hover:text-indigo-300 underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Sections Grid */}
        <div className="flex flex-col gap-10">
          {filteredSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <span className="material-icons text-xl">{section.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                      {section.title}
                    </h2>
                    <p className="text-xs text-slate-400 font-medium">
                      {section.description}
                    </p>
                  </div>
                </div>

                {section.viewAllHref && (
                  <Link
                    href={section.viewAllHref}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors group shrink-0"
                  >
                    <span>{section.viewAllLabel || 'View all'}</span>
                    <span className="material-icons text-sm group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                )}
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}

          {filteredSections.length === 0 && (
            <div className="text-center py-16 px-4 rounded-3xl border border-dashed border-white/10 bg-black/20">
              <span className="material-icons text-4xl text-slate-500 mb-3">search_off</span>
              <h3 className="text-lg font-bold text-white mb-1">No matching destinations found</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto mb-4">
                No sections or modules matched your query "{searchQuery}". Try clearing search keywords.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all"
              >
                Clear Search &amp; Show All
              </button>
            </div>
          )}
        </div>

        {/* Footer Meta Matrix */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-slate-900/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span>{SITE_CONFIG.name} — Architecture &amp; Index</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline flex items-center gap-1"
            >
              <span>GitHub</span>
              <span className="material-icons text-xs">arrow_outward</span>
            </a>
            <span>•</span>
            <a
              href={SITE_CONFIG.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline flex items-center gap-1"
            >
              <span>YouTube</span>
              <span className="material-icons text-xs">arrow_outward</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

const MenuItemCard: React.FC<{ item: NavSectionItem }> = ({ item }) => {
  const content = (
    <div className="h-full p-5 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.03] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-0.5">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-105 group-hover:border-indigo-500/40 group-hover:text-indigo-300 transition-all duration-200">
              <span className="material-icons text-xl">{item.icon}</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-1.5">
                <span>{item.title}</span>
                {item.isExternal && (
                  <span className="material-icons text-xs text-slate-400 group-hover:text-indigo-300">
                    arrow_outward
                  </span>
                )}
              </h3>
              {item.subtitle && (
                <span className="text-[11px] font-mono text-slate-400 font-medium">
                  {item.subtitle}
                </span>
              )}
            </div>
          </div>

          {item.badge && (
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold border shrink-0 ${
                item.badgeColor || 'bg-white/10 text-slate-300 border-white/10'
              }`}
            >
              {item.badge}
            </span>
          )}
        </div>

        <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
        <span className="text-indigo-400/80 group-hover:text-indigo-300 transition-colors flex items-center gap-1 font-semibold">
          <span>{item.isExternal ? 'Launch external node' : 'Enter portal'}</span>
          <span className="material-icons text-xs group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </span>
        <span className="text-slate-500">{item.isExternal ? 'External' : 'Route'}</span>
      </div>
    </div>
  );

  if (item.isExternal) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus:outline-none"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className="block h-full focus:outline-none">
      {content}
    </Link>
  );
};
