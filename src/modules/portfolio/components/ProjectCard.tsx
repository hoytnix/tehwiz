import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';
import { CyberCard } from '@/components/ui/CyberCard';

export const ProjectCard: React.FC<{ 
  project: Project; 
  onSelect?: (project: Project) => void; 
}> = ({ project, onSelect }) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'LIVE':
        return {
          bg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          dot: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]',
          ping: true,
          glowColor: 'emerald' as const
        };
      case 'BETA':
        return {
          bg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
          dot: 'bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]',
          ping: false,
          glowColor: 'cyan' as const
        };
      case 'ALPHA':
      case 'PRE-ALPHA':
        return {
          bg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
          dot: 'bg-purple-400',
          ping: false,
          glowColor: 'purple' as const
        };
      case 'MVP':
      case 'POC':
        return {
          bg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          dot: 'bg-amber-400',
          ping: false,
          glowColor: 'amber' as const
        };
      default:
        return {
          bg: 'bg-slate-500/15 text-slate-300 border-slate-500/30',
          dot: 'bg-slate-400',
          ping: false,
          glowColor: 'indigo' as const
        };
    }
  };

  const statusConfig = getStatusConfig(project.status);
  const liveUrl = project.links?.liveUrl || project.url;
  const singleGithub = project.links?.githubUrl;
  const hasMultipleRepos = project.links?.githubUrls && project.links.githubUrls.length > 0;
  const huggingFace = project.links?.huggingFaceUrl;
  const itchIo = project.links?.itchIoUrl;

  // Primary pricing tier summary
  const featuredPricing = project.pricing?.find(p => p.highlighted) || project.pricing?.[0];
  const pricingSummary = featuredPricing 
    ? `${featuredPricing.plan}: ${featuredPricing.price}${featuredPricing.period ? featuredPricing.period : ''}`
    : null;

  return (
    <CyberCard 
      glowColor={statusConfig.glowColor}
      className="flex flex-col h-full !p-0 bg-slate-950/70 backdrop-blur-xl border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 group"
    >
      <div className="p-6 flex-1 flex flex-col">
        
        {/* Header: Category & Status Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold truncate">
            {project.category || 'System Architecture'}
          </span>

          <span className={`inline-flex items-center gap-1.5 text-[10px] px-2.5 py-0.5 rounded-full border font-mono font-bold tracking-wider ${statusConfig.bg}`}>
            <span className="relative flex h-1.5 w-1.5">
              {statusConfig.ping && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              )}
              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${statusConfig.dot}`}></span>
            </span>
            <span>{project.status}</span>
          </span>
        </div>

        {/* Title */}
        <div className="mb-2">
          <Link
            href={`/portfolio/${project.id}`}
            onClick={(e) => {
              if (onSelect) {
                onSelect(project);
              }
            }}
            className="block"
          >
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight flex items-center justify-between">
              <span className="truncate">{project.title}</span>
              <span className="material-icons text-base text-indigo-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                arrow_forward
              </span>
            </h3>
          </Link>
        </div>

        {/* Tagline */}
        {project.tagline && (
          <p className="text-xs font-medium text-slate-300 italic mb-3 line-clamp-2">
            {project.tagline}
          </p>
        )}

        {/* Core Hook highlight */}
        {project.hook && (
          <div className="mb-3.5 p-2.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-indigo-200 text-xs font-medium flex items-start gap-2">
            <span className="material-icons text-indigo-400 text-sm shrink-0 mt-0.5">bolt</span>
            <span className="line-clamp-2 italic leading-snug">"{project.hook}"</span>
          </div>
        )}

        {/* Description */}
        <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-400 font-mono"
              >
                #{tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/[0.02] text-slate-500 font-mono">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Licensing & Pricing Mini-Bar */}
        <div className="mt-auto pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
          {project.license && (
            <div className="flex items-center gap-1 truncate text-slate-300" title={project.license.summary}>
              <span className="material-icons text-[13px] text-indigo-400">gavel</span>
              <span className="truncate">{project.license.name}</span>
            </div>
          )}
          {pricingSummary && (
            <div className="shrink-0 text-indigo-300 font-semibold" title={pricingSummary}>
              {pricingSummary}
            </div>
          )}
        </div>

      </div>

      {/* Footer Actions */}
      <div className="p-3.5 border-t border-white/[0.06] bg-black/40 flex items-center justify-between gap-2">
        <Link
          href={`/portfolio/${project.id}`}
          onClick={(e) => {
            if (onSelect) {
              onSelect(project);
            }
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <span className="material-icons text-sm text-indigo-400">tune</span>
          <span>Inspect System Specs</span>
        </Link>

        <div className="flex items-center gap-1.5">
          {itchIo && (
            <a
              href={itchIo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-rose-400 hover:text-white hover:bg-rose-500/20 transition-colors"
              title="Play / Download on Itch.io"
            >
              <span className="material-icons text-sm">sports_esports</span>
            </a>
          )}

          {huggingFace && (
            <a
              href={huggingFace}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-amber-300 hover:bg-white/10 transition-colors"
              title="Hugging Face Model Weights"
            >
              <span className="text-xs font-mono font-bold">🤗</span>
            </a>
          )}

          {singleGithub && (
            <a
              href={singleGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Source Code on GitHub"
            >
              <span className="material-icons text-sm">code</span>
            </a>
          )}

          {hasMultipleRepos && (
            <a
              href={project.links.githubUrls![0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title={`${project.links.githubUrls!.length} GitHub Repositories`}
            >
              <span className="material-icons text-sm">code</span>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm shadow-indigo-600/30"
            >
              <span>Launch</span>
              <span className="material-icons text-xs">arrow_outward</span>
            </a>
          )}
        </div>
      </div>
    </CyberCard>
  );
};
