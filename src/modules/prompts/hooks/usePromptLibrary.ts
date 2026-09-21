'use client';

import { useState, useMemo } from 'react';
import { PromptItem } from '@/types';
import { MOCK_PROMPTS } from '../data/promptsData';

export const usePromptLibrary = () => {
  const [prompts] = useState<PromptItem[]>(MOCK_PROMPTS);
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('ALL');
  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem | null>(null);

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    prompts.forEach(p => p.tags.forEach(t => tags.add(t)));
    return ['ALL', ...Array.from(tags).sort()];
  }, [prompts]);

  const filteredPrompts = useMemo(() => {
    return prompts.filter(p => {
      // Tag filter
      if (selectedTag !== 'ALL' && !p.tags.includes(selectedTag)) {
        return false;
      }

      // Search query
      if (!search.trim()) return true;
      const q = search.toLowerCase().trim();
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    });
  }, [prompts, search, selectedTag]);

  const resetFilters = () => {
    setSearch('');
    setSelectedTag('ALL');
  };

  return {
    prompts,
    filteredPrompts,
    search,
    setSearch,
    selectedTag,
    setSelectedTag,
    availableTags,
    selectedPrompt,
    setSelectedPrompt,
    resetFilters,
    totalCount: prompts.length,
    matchingCount: filteredPrompts.length
  };
};
