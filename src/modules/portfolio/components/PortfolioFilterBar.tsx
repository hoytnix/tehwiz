'use client';

import React from 'react';

interface PortfolioFilterBarProps {
  availableStatuses: string[];
  filter: string;
  setFilter: (filter: string) => void;
  availableCategories: string[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  search: string;
  setSearch: (search: string) => void;
  resetFilters: () => void;
}

const STATUS_ORDER = ['All', 'Live', 'Beta', 'MVP', 'Alpha', 'POC', 'Deprecated'];

export const PortfolioFilterBar: React.FC<PortfolioFilterBarProps> = ({
  availableStatuses,
  filter,
  setFilter,
  availableCategories,
  selectedCategory,
  setSelectedCategory,
  search,
  setSearch,
  resetFilters,
}) => {
  const ordered = STATUS_ORDER.filter(
    (s) => s === 'All' || availableStatuses.includes(s)
  );
  const extra = availableStatuses.filter(
    (s) => s !== 'ALL' && !STATUS_ORDER.includes(s)
  );
  const statuses = [...ordered, ...extra];

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-8">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-card border border-edge px-4 py-2.5 text-sm text-bone placeholder-muted focus:outline-none focus:border-accent transition-colors"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-bone text-lg leading-none"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
        {statuses.map((status) => {
          const value = status === 'All' ? 'ALL' : status;
          const isActive = filter === value;
          return (
            <button
              key={status}
              onClick={() => setFilter(value)}
              className={`px-3 py-2 text-sm whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                isActive ? 'text-bone' : 'text-muted hover:text-bone'
              }`}
            >
              {status !== 'All' && (
                <span
                  className={`inline-block w-1.5 h-1.5 rounded-full ${
                    status === 'Live' ? 'bg-live' : isActive ? 'bg-accent' : 'bg-muted'
                  }`}
                />
              )}
              {status}
            </button>
          );
        })}
      </div>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="bg-card text-muted border border-edge text-sm px-3 py-2.5 focus:outline-none focus:border-accent cursor-pointer transition-colors"
        aria-label="Filter by category"
      >
        <option value="ALL">All categories</option>
        {availableCategories
          .filter((c) => c !== 'ALL')
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
      </select>

      {(filter !== 'ALL' || selectedCategory !== 'ALL' || search) && (
        <button
          onClick={resetFilters}
          className="px-3 py-2.5 text-sm text-muted hover:text-bone transition-colors shrink-0"
        >
          Reset
        </button>
      )}
    </div>
  );
};
