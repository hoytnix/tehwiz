import { useState, useMemo } from 'react';
import { PromptItem } from '../types';
import { MOCK_PROMPTS } from '../data/promptsData';

export const usePromptLibrary = () => {
  const [prompts] = useState<PromptItem[]>(MOCK_PROMPTS);
  const [search, setSearch] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem | null>(null);

  const filteredPrompts = useMemo(() => {
    return prompts.filter(p => 
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    );
  }, [prompts, search]);

  return {
    prompts,
    filteredPrompts,
    search,
    setSearch,
    selectedPrompt,
    setSelectedPrompt
  };
};