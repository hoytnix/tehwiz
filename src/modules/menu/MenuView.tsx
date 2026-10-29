'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { MENU_SECTIONS, NavSectionItem } from '@/config/menuNavigation';

export const MenuView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSections = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return MENU_SECTIONS.map((section) => {
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
    <div className="h-full w-full overflow-y-auto bg-ink text-muted">
      <div className="max-w-magazine mx-auto px-6 lg:px-16 py-8 pb-24 flex flex-col gap-12">
        <Breadcrumbs items={[{ label: 'Index' }]} />

        <div>
          <h1 className="font-display text-5xl sm:text-6xl leading-none text-bone mb-4">
            Index
          </h1>
          <p className="text-base sm:text-lg max-w-2xl">
            Every system, essay, stream, and repository in the TehWiz
            Productions catalog.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search the index..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card border border-edge px-4 py-2.5 text-sm text-bone placeholder-muted focus:outline-none focus:border-accent transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-bone text-lg leading-none"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
          <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-2 text-sm whitespace-nowrap transition-colors ${
                activeCategory === 'all' ? 'text-bone' : 'text-muted hover:text-bone'
              }`}
            >
              All sections
            </button>
            {MENU_SECTIONS.map((sec) => (
              <button
                key={sec.title}
                onClick={() => setActiveCategory(sec.title)}
                className={`px-3 py-2 text-sm whitespace-nowrap transition-colors ${
                  activeCategory === sec.title ? 'text-bone' : 'text-muted hover:text-bone'
                }`}
              >
                {sec.title}
              </button>
            ))}
          </div>
        </div>

        {(searchQuery || activeCategory !== 'all') && (
          <div className="flex items-center justify-between text-sm -mt-6">
            <span>
              Showing {totalMatches} destination{totalMatches === 1 ? '' : 's'}
              {searchQuery && <span> matching “{searchQuery}”</span>}
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-accent hover:opacity-90"
            >
              Reset filters
            </button>
          </div>
        )}

        <div className="flex flex-col gap-12">
          {filteredSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-edge">
                <div>
                  <h2 className="font-display text-3xl text-bone">
                    {section.title}
                  </h2>
                  <p className="text-sm mt-1">
                    {section.tagline}
                  </p>
                </div>
                {section.viewAllHref && (
                  <Link
                    href={section.viewAllHref}
                    className="text-sm text-accent hover:opacity-90 transition-colors shrink-0"
                  >
                    {section.viewAllLabel || 'View all'} →
                  </Link>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}

          {filteredSections.length === 0 && (
            <div className="text-center py-16 px-4 border border-edge">
              <h3 className="font-display text-2xl text-bone mb-1">No matching destinations</h3>
              <p className="text-sm max-w-md mx-auto mb-4">
                Nothing matched “{searchQuery}”.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-4 py-2 text-sm bg-accent text-ink hover:opacity-90 transition-colors"
              >
                Show all
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MenuItemCard: React.FC<{ item: NavSectionItem }> = ({ item }) => {
  const content = (
    <div className="h-full p-6 bg-card border border-edge flex flex-col justify-between group">
      <div>
        <h3 className="font-display text-2xl text-bone group-hover:text-accent transition-colors">
          {item.title}
          {item.isExternal && <span className="text-sm text-muted"> ↗</span>}
        </h3>
        {item.subtitle && (
          <div className="text-xs text-muted mt-1">
            {item.subtitle}
          </div>
        )}
        {item.badge && (
          <div className="text-xs text-muted mt-2">
            {item.badge}
          </div>
        )}
        <p className="text-sm mt-3">
          {item.description}
        </p>
      </div>
      <div className="mt-4 pt-3 border-t border-edge text-sm text-accent">
        {item.isExternal ? 'Launch ↗' : 'Open →'}
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
