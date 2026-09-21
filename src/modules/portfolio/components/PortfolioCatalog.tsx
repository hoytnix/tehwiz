'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PortfolioItem } from '@/types';
import { MOCK_PROJECTS } from '../data/portfolioData';
import { usePortfolioFilter } from '../hooks/usePortfolioFilter';
import { ProjectCard } from './ProjectCard';
import { PortfolioFilterBar } from './PortfolioFilterBar';
import { CyberButton } from '@/components/ui/CyberButton';

import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PermalinkButton } from '@/components/ui/PermalinkButton';

interface PortfolioCatalogProps {
  initialProjects?: PortfolioItem[];
}

export const PortfolioCatalog: React.FC<PortfolioCatalogProps> = ({ 
  initialProjects = MOCK_PROJECTS 
}) => {
  const router = useRouter();
  const [projects] = useState<PortfolioItem[]>(initialProjects);

  // Backward compatibility: redirect any #project/ID hashes to /portfolio/ID
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#project/')) {
      const projectId = window.location.hash.replace('#project/', '');
      if (projectId) {
        router.replace(`/portfolio/${projectId}`);
      }
    }
  }, [router]);

  const {
    search,
    setSearch,
    filter,
    setFilter,
    selectedCategory,
    setSelectedCategory,
    sort,
    setSort,
    availableStatuses,
    availableCategories,
    statusCounts,
    filteredAndSortedProjects,
    resetFilters,
    totalCount,
    matchingCount
  } = usePortfolioFilter(projects);

  return (
    <div className="h-full flex flex-col p-4 sm:p-6 lg:p-8 overflow-y-auto pb-24 bg-transparent text-slate-100">
      
      {/* Breadcrumbs & Page Permalink Bar */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-shrink-0">
        <Breadcrumbs items={[{ label: 'Systems Directory', icon: 'layers' }]} />
        <PermalinkButton path="/portfolio" label="Share Directory" />
      </div>

      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-white/[0.08] flex-shrink-0">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl sm:text-3xl text-white font-extrabold tracking-tight">
              Systems Directory
            </h2>
            <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {matchingCount} of {totalCount}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Curated software architectures, edge-native AI models, computer vision tools, and Web3 engines.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
            search
          </span>
          <input
            type="text"
            placeholder="Search systems, tags, specs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all font-sans"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <span className="material-icons text-xs">close</span>
            </button>
          )}
        </div>
      </div>

      {/* Toolbar: Filters & Sort */}
      <PortfolioFilterBar
        availableStatuses={availableStatuses}
        filter={filter}
        setFilter={setFilter}
        statusCounts={statusCounts}
        availableCategories={availableCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sort={sort}
        setSort={setSort}
        search={search}
        resetFilters={resetFilters}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
          />
        ))}

        {/* Empty State */}
        {filteredAndSortedProjects.length === 0 && (
          <div className="col-span-full py-16 px-6 text-center rounded-2xl bg-white/[0.02] border border-white/[0.06] text-slate-400 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4 text-slate-400">
              <span className="material-icons text-3xl">search_off</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">No Matching Systems Found</h3>
            <p className="text-xs text-slate-400 max-w-md mb-6">
              No applications match the current query "{search}" or selected status/category filters.
            </p>
            <CyberButton
              variant="outline"
              size="sm"
              icon="refresh"
              onClick={resetFilters}
            >
              Reset Filters
            </CyberButton>
          </div>
        )}
      </div>
    </div>
  );
};
