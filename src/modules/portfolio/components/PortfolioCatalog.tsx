'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PortfolioItem } from '@/types';
import { MOCK_PROJECTS } from '../data/portfolioData';
import { usePortfolioFilter } from '../hooks/usePortfolioFilter';
import { ProjectCard } from './ProjectCard';
import { PortfolioFilterBar } from './PortfolioFilterBar';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

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
    availableStatuses,
    availableCategories,
    filteredAndSortedProjects,
    resetFilters,
    totalCount,
    matchingCount
  } = usePortfolioFilter(projects);

  return (
    <div className="h-full flex flex-col p-6 sm:p-8 lg:px-16 overflow-y-auto bg-ink text-muted">
      <Breadcrumbs items={[{ label: 'Projects' }]} />

      <div className="mt-6 mb-2">
        <h1 className="font-display text-5xl sm:text-6xl leading-none text-bone mb-4">
          Project grid
        </h1>
        <p className="text-base sm:text-lg max-w-2xl">
          {totalCount} sovereign systems from TehWiz Productions — on-device AI,
          games, security, and agent infrastructure.
        </p>
      </div>

      <div className="mt-8">
        <PortfolioFilterBar
          availableStatuses={availableStatuses}
          filter={filter}
          setFilter={setFilter}
          availableCategories={availableCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          search={search}
          setSearch={setSearch}
          resetFilters={resetFilters}
        />
      </div>

      {matchingCount !== totalCount && (
        <p className="text-sm mb-6">
          Showing {matchingCount} of {totalCount}.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {filteredAndSortedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

        {filteredAndSortedProjects.length === 0 && (
          <div className="col-span-full py-16 px-6 text-center border border-edge text-muted flex flex-col items-center justify-center">
            <h3 className="font-display text-2xl text-bone mb-1">No matching systems</h3>
            <p className="text-sm max-w-md mb-6">
              Nothing matches the current search or filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-sm text-bone border border-edge hover:border-accent transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
