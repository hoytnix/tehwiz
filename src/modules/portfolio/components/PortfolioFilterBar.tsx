'use client';

import React from 'react';

interface PortfolioFilterBarProps {
  availableStatuses: string[];
  filter: string;
  setFilter: (filter: string) => void;
  statusCounts: Record<string, number>;
  availableCategories: string[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  sort: string;
  setSort: (sort: string) => void;
  search: string;
  resetFilters: () => void;
}

export const PortfolioFilterBar: React.FC<PortfolioFilterBarProps> = ({
  availableStatuses,
  filter,
  setFilter,
  statusCounts,
  availableCategories,
  selectedCategory,
  setSelectedCategory,
  sort,
  setSort,
  search,
  resetFilters,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 mb-6 p-2 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
      {/* Status Filters */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 hide-scrollbar">
        {availableStatuses.map((status) => {
          const isActive = filter === status;
          const count = statusCounts[status] || 0;
          return (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/25 border border-indigo-400/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <span>{status}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-black/30 text-indigo-200' : 'bg-white/10 text-slate-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Secondary Category & Sort Controls */}
      <div className="flex items-center gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/[0.06]">
        {/* Category Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-black/40 text-slate-300 border border-white/10 text-xs font-medium rounded-xl px-3 py-1.5 focus:outline-none focus:border-indigo-500/50 cursor-pointer hover:bg-black/60 transition-colors"
        >
          <option value="ALL">All Categories</option>
          {availableCategories.filter(c => c !== 'ALL').map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Sort Dropdown */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-black/40 text-slate-300 border border-white/10 text-xs font-medium rounded-xl px-3 py-1.5 focus:outline-none focus:border-indigo-500/50 cursor-pointer hover:bg-black/60 transition-colors"
        >
          <option value="DEFAULT">Sort: Curated</option>
          <option value="PRIORITY">Sort: Status Priority</option>
          <option value="TITLE_ASC">Sort: Name (A-Z)</option>
          <option value="TITLE_DESC">Sort: Name (Z-A)</option>
        </select>

        {/* Reset Filters Button */}
        {(filter !== 'ALL' || selectedCategory !== 'ALL' || search) && (
          <button
            onClick={resetFilters}
            className="p-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Reset all filters"
          >
            <span className="material-icons text-sm">refresh</span>
          </button>
        )}
      </div>
    </div>
  );
};
