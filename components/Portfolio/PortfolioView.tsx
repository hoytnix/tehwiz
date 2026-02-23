import React, { useState } from 'react';
import { PortfolioItem } from '../../types';
import { usePortfolioFilter } from '../../hooks/usePortfolioFilter';
import { MOCK_PROJECTS } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const PortfolioView: React.FC = () => {
  const [projects] = useState<PortfolioItem[]>(() => shuffleArray(MOCK_PROJECTS));

  // Logic Separation: Filtering Hook
  const {
      filter,
      setFilter,
      sort,
      setSort,
      availableStatuses,
      filteredAndSortedProjects
  } = usePortfolioFilter(projects);

  return (
    <div className="absolute inset-0 flex flex-col p-6 overflow-y-auto pb-32 bg-transparent">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10 flex-shrink-0">
            <div>
                <h2 className="text-2xl text-white font-bold flex items-center gap-2">
                    Portfolio
                </h2>
                <p className="text-sm text-slate-400 mt-1">Curated Projects & Experiments</p>
            </div>
        </div>

        {/* Filter and Sort Toolbar */}
        <div className="flex flex-col xl:flex-row gap-4 mb-8 p-1.5 bg-white/5 rounded-2xl backdrop-blur-md border border-white/5">
            {/* Filter Group */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 p-2 hide-scrollbar">
                    {availableStatuses.map(status => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap flex-shrink-0
                                ${filter === status
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sort Group */}
             <div className="flex items-center gap-3 border-t xl:border-t-0 xl:border-l border-white/10 pt-3 xl:pt-0 xl:pl-4 px-4 pb-2 md:pb-0">
                 <span className="text-xs text-slate-500 font-bold uppercase whitespace-nowrap">
                    Sort By
                 </span>
                 <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-black/20 text-slate-200 border-none text-xs font-medium rounded-lg px-3 py-2 focus:ring-1 focus:ring-indigo-500 cursor-pointer hover:bg-black/30 transition-colors"
                 >
                     <option value="DEFAULT">Recommended</option>
                     <option value="PRIORITY">Status Priority</option>
                     <option value="TITLE_ASC">A-Z</option>
                     <option value="TITLE_DESC">Z-A</option>
                 </select>
             </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            {filteredAndSortedProjects.length === 0 && (
                <div className="col-span-full py-20 text-center rounded-2xl bg-white/5 text-slate-400 flex flex-col items-center justify-center">
                    <span className="material-icons text-4xl mb-2 opacity-50">search_off</span>
                    No projects found matching current filters.
                </div>
            )}
        </div>
    </div>
  );
};