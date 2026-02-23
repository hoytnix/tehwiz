import { useState, useMemo } from 'react';
import { PortfolioItem } from '../types';

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
  const [filter, setFilter] = useState<string>('ALL');
  const [sort, setSort] = useState<string>('DEFAULT');

  const availableStatuses = useMemo(() => {
    const statuses = Array.from(new Set(projects.map(p => p.status)));
    statuses.sort((a, b) => (STATUS_PRIORITY[a] || 99) - (STATUS_PRIORITY[b] || 99));
    return ['ALL', ...statuses];
  }, [projects]);

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projects];

    if (filter !== 'ALL') {
        result = result.filter(p => p.status === filter);
    }

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
  }, [projects, filter, sort]);

  return {
    filter,
    setFilter,
    sort,
    setSort,
    availableStatuses,
    filteredAndSortedProjects
  };
};