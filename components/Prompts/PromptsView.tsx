import React from 'react';
import { PromptDetailModal } from './PromptDetailModal';
import { usePromptLibrary } from '../../hooks/usePromptLibrary';
import { PromptCard } from './PromptCard';

export const PromptsView: React.FC = () => {
  const { filteredPrompts, search, setSearch, selectedPrompt, setSelectedPrompt } = usePromptLibrary();

  return (
    <div className="h-full flex flex-col p-6 bg-black/90 font-mono overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b border-leet-green/30 pb-4 flex-shrink-0">
          <h2 className="text-2xl text-leet-green font-bold flex items-center gap-2">
              <span className="material-icons text-2xl animate-pulse">integration_instructions</span>
              PROMPT_LIBRARY
          </h2>
          <div className="text-xs text-leet-green/50">
              /usr/share/prompts
          </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-leet-green/50 material-icons text-sm">search</span>
          <input 
            type="text" 
            placeholder="SEARCH_DB..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-black/50 border border-leet-green/30 rounded pl-10 pr-4 py-3 focus:outline-none focus:border-leet-green text-leet-green placeholder-leet-green/30 font-mono text-sm transition-all"
          />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20">
        {filteredPrompts.map((prompt) => (
          <PromptCard 
            key={prompt.id} 
            prompt={prompt} 
            onSelect={setSelectedPrompt} 
          />
        ))}
        
        {filteredPrompts.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-600 border border-dashed border-gray-800 rounded">
                DATA_NOT_FOUND // CHECK_QUERY_PARAMETERS
            </div>
        )}
      </div>

      {selectedPrompt && (
        <PromptDetailModal 
            prompt={selectedPrompt} 
            onClose={() => setSelectedPrompt(null)} 
        />
      )}
    </div>
  );
};