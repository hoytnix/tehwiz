'use client';

import { useState, useMemo } from 'react';
import { PortfolioItem } from '@/types';

const STATUS_PRIORITY: Record<string, number> = {
  'LIVE': 1,
  'MVP': 2,
  'BETA': 3,
  'ALPHA': 4,
  'PRE-ALPHA': 5,
  'POC': 6,
  'CLASSIFIED': 7,
  'ARCHIVED': 8
};

export const usePortfolioFilter = (projects: PortfolioItem[]) => {
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [sort, setSort] = useState<string>('DEFAULT');

  const availableStatuses = useMemo(() => {
    const statuses = Array.from(new Set(projects.map(p => p.status)));
    statuses.sort((a, b) => (STATUS_PRIORITY[a] || 99) - (STATUS_PRIORITY[b] || 99));
    return ['ALL', ...statuses];
  }, [projects]);

  const availableCategories = useMemo(() => {
    const categories = Array.from(new Set(projects.map(p => p.category).filter(Boolean)));
    categories.sort((a, b) => a.localeCompare(b));
    return ['ALL', ...categories];
  }, [projects]);

  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: projects.length };
    projects.forEach(p => {
      counts[p.status] = (counts[p.status] || 0) + 1;
    });
    return counts;
  }, [projects]);

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projects];

    // Status filter
    if (filter !== 'ALL') {
      result = result.filter(p => p.status === filter);
    }

    // Category filter
    if (selectedCategory !== 'ALL') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Search query
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.tagline?.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q) ||
        p.hook?.toLowerCase().includes(q) ||
        p.tags?.some(tag => tag.toLowerCase().includes(q))
      );
    }

    // Sorting
    result.sort((a, b) => {
      switch (sort) {
        case 'PRIORITY':
          return (STATUS_PRIORITY[a.status] || 99) - (STATUS_PRIORITY[b.status] || 99);
        case 'TITLE_ASC':
          return a.title.localeCompare(b.title);
        case 'TITLE_DESC':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return result;
  }, [projects, filter, selectedCategory, search, sort]);

  const resetFilters = () => {
    setSearch('');
    setFilter('ALL');
    setSelectedCategory('ALL');
    setSort('DEFAULT');
  };

  return {
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
    totalCount: projects.length,
    matchingCount: filteredAndSortedProjects.length
  };
};
