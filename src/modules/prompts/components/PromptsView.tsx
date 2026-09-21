'use client';

import React, { useEffect } from 'react';
import { PromptDetailModal } from './PromptDetailModal';
import { usePromptLibrary } from '../hooks/usePromptLibrary';
import { PromptCard } from './PromptCard';
import { CyberButton } from '@/components/ui/CyberButton';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PermalinkButton } from '@/components/ui/PermalinkButton';

export const PromptsView: React.FC = () => {
  const { 
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
    totalCount,
    matchingCount
  } = usePromptLibrary();

  // Handle deep-link query parameter ?id=... on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const promptId = params.get('id');
      if (promptId) {
        const found = prompts.find(p => p.id === promptId);
        if (found) {
          setSelectedPrompt(found);
        }
      }
    }
  }, [prompts, setSelectedPrompt]);

  const handleSelectPrompt = (prompt: any) => {
    setSelectedPrompt(prompt);
    if (typeof window !== 'undefined') {
      history.pushState(null, '', `/prompts?id=${prompt.id}`);
    }
  };

  const handleCloseModal = () => {
    setSelectedPrompt(null);
    if (typeof window !== 'undefined') {
      history.pushState(null, '', '/prompts');
    }
  };

  return (
    <div className="h-full flex flex-col p-4 sm:p-6 lg:p-8 overflow-y-auto pb-24 bg-transparent text-slate-100">
      
      {/* Breadcrumbs & Page Permalink Bar */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-shrink-0">
        <Breadcrumbs items={[{ label: 'Prompt Engineering Vault', icon: 'terminal' }]} />
        <PermalinkButton path="/prompts" label="Share Vault" />
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-white/[0.08] flex-shrink-0">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <h2 className="text-2xl sm:text-3xl text-white font-extrabold tracking-tight">
              Prompt Engineering Vault
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {matchingCount} of {totalCount}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Battle-tested cognitive recursion loops, Casper memory bank schemas, and expert persona instructions.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
            search
          </span>
          <input 
            type="text" 
            placeholder="Search prompts, tags, instructions..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all font-sans"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
            >
              <span className="material-icons text-xs">close</span>
            </button>
          )}
        </div>
      </div>

      {/* Tag Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pt-2 pb-2 mt-1 mb-6 hide-scrollbar">
        {availableTags.map((tag) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/20 border border-amber-400/40'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05] border border-white/[0.04]'
              }`}
            >
              {tag === 'ALL' ? 'All Prompts' : `#${tag}`}
            </button>
          );
        })}
      </div>

      {/* Prompts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrompts.map((prompt) => (
          <PromptCard 
            key={prompt.id} 
            prompt={prompt} 
            onSelect={handleSelectPrompt}
          />
        ))}

        {/* Empty State */}
        {filteredPrompts.length === 0 && (
          <div className="col-span-full py-16 px-6 text-center rounded-2xl bg-white/[0.02] border border-white/[0.06] text-slate-400 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4 text-slate-400">
              <span className="material-icons text-3xl">terminal</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">No Prompts Found</h3>
            <p className="text-xs text-slate-400 max-w-md mb-6">
              No cognitive scaffolds match the query "{search}" or tag "{selectedTag}".
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

      {/* Detail Modal */}
      {selectedPrompt && (
        <PromptDetailModal 
          prompt={selectedPrompt} 
          onClose={handleCloseModal}
        />
      )}

    </div>
  );
};
