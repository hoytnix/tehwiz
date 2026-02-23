import React from 'react';
import { PortfolioItem } from '../../types';
import { CyberCard } from '../DesignSystem/CyberCard';

export const ProjectCard: React.FC<{ project: PortfolioItem }> = ({ project }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
        case 'LIVE': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
        case 'BETA': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
        case 'ALPHA': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
        case 'MVP': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
        default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <CyberCard className="flex flex-col h-full group !p-0">
        <div className="p-6 flex-1">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                    {project.title}
                </h3>
                <span className={`text-[10px] px-2.5 py-1 rounded-full border font-bold ${getStatusColor(project.status)}`}>
                    {project.status}
                </span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
            </p>
        </div>

        {project.url && (
            <div className="p-4 mt-auto border-t border-white/5 bg-white/[0.02]">
                <a 
                   href={project.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-indigo-300 hover:text-white px-4 py-2.5 rounded-lg transition-all hover:bg-indigo-600 shadow-sm"
                >
                   <span>Visit Project</span>
                   <span className="material-icons text-xs">arrow_outward</span>
                </a>
            </div>
        )}
    </CyberCard>
  );
};