import React, { useState } from 'react';
import { Project } from '../../types';
import { CyberCard } from '../DesignSystem/CyberCard';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [showFullLicense, setShowFullLicense] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'BETA': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      case 'ALPHA': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'MVP': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  const getLicenseBadgeColor = (licenseName: string = '') => {
    if (licenseName.includes('MIT')) {
      return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
    }
    if (licenseName.includes('BSL')) {
      return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
    }
    return 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30';
  };

  const hasMultipleRepos = project.links?.githubUrls && project.links.githubUrls.length > 0;
  const singleGithub = project.links?.githubUrl;
  const huggingFace = project.links?.huggingFaceUrl;
  const liveUrl = project.links?.liveUrl || project.url;

  return (
    <CyberCard className="flex flex-col h-full group !p-0 border border-white/10 bg-slate-950/60 backdrop-blur-xl hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
      <div className="p-6 flex-1 flex flex-col">
        {/* Header: Title, Category & Status */}
        <div className="flex justify-between items-start gap-2 mb-2">
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
              {project.title}
            </h3>
            {project.category && (
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                {project.category}
              </span>
            )}
          </div>
          <span className={`text-[10px] px-2.5 py-1 rounded-full border font-bold tracking-wide flex-shrink-0 ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>

        {/* Tagline */}
        {project.tagline && (
          <p className="text-xs font-medium text-slate-300/90 italic mb-3">
            {project.tagline}
          </p>
        )}

        {/* Description */}
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-slate-400 font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Section: License & Legal Terms */}
        {project.license && (
          <div className="mb-5 p-3 rounded-xl bg-black/40 border border-white/5">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-1.5 text-slate-300 text-xs font-semibold">
                <span className="material-icons text-[14px] text-indigo-400">gavel</span>
                <span>License & Legal Terms</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded border font-mono font-medium ${getLicenseBadgeColor(project.license.name)}`}>
                {project.license.name}
              </span>
            </div>

            <p className={`text-slate-400 text-[11px] leading-relaxed ${showFullLicense ? '' : 'line-clamp-2'}`}>
              {project.license.summary}
            </p>

            <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-white/5">
              {project.license.summary && project.license.summary.length > 100 ? (
                <button
                  type="button"
                  onClick={() => setShowFullLicense(!showFullLicense)}
                  className="text-[10px] text-indigo-400 hover:text-indigo-300 font-medium focus:outline-none"
                >
                  {showFullLicense ? 'Show less' : 'Read full terms'}
                </button>
              ) : <div />}

              {project.license.url && (
                <a
                  href={project.license.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] text-indigo-300 hover:text-white font-medium hover:underline"
                >
                  <span>License file</span>
                  <span className="material-icons text-[10px]">open_in_new</span>
                </a>
              )}
            </div>
          </div>
        )}

        {/* Section: Tiered Pricing Table */}
        {project.pricing && project.pricing.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-1.5 text-slate-300 text-xs font-semibold mb-2.5">
              <span className="material-icons text-[14px] text-indigo-400">payments</span>
              <span>Pricing & Plans</span>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              {project.pricing.map((tier, idx) => {
                const isFeatured = tier.highlighted;
                return (
                  <div
                    key={idx}
                    className={`relative p-2.5 rounded-xl transition-all border ${
                      isFeatured
                        ? 'bg-indigo-950/30 border-indigo-500/40 shadow-sm shadow-indigo-500/10'
                        : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-xs font-semibold text-white truncate">
                          {tier.plan}
                        </span>
                        {tier.badge && (
                          <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono font-medium whitespace-nowrap ${
                            isFeatured
                              ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                              : 'bg-white/10 text-slate-300 border border-white/10'
                          }`}>
                            {tier.badge}
                          </span>
                        )}
                      </div>
                      
                      <div className="text-right flex-shrink-0">
                        <span className={`font-mono text-xs font-bold ${isFeatured ? 'text-indigo-300' : 'text-slate-200'}`}>
                          {tier.price}
                        </span>
                        {tier.period && (
                          <span className="text-[10px] text-slate-400 ml-1 font-normal">
                            {tier.period}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                      {tier.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Footer Links (Dual Repos, Hugging Face, Live Site) */}
      <div className="p-4 mt-auto border-t border-white/5 bg-black/40 flex flex-wrap gap-2 items-center">
        {/* Live URL */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-3.5 py-2 rounded-lg transition-all shadow-md shadow-indigo-600/20"
          >
            <span>{project.id === 'yuli' ? 'Try Yuli Web App' : 'Visit Project'}</span>
            <span className="material-icons text-xs">arrow_outward</span>
          </a>
        )}

        {/* Hugging Face Link */}
        {huggingFace && (
          <a
            href={huggingFace}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-amber-200 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 px-3 py-2 rounded-lg transition-all"
          >
            <span>🤗 Hugging Face</span>
            <span className="material-icons text-xs">open_in_new</span>
          </a>
        )}

        {/* Single GitHub Repo */}
        {singleGithub && (
          <a
            href={singleGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white px-3 py-2 rounded-lg transition-all"
          >
            <span className="material-icons text-xs">code</span>
            <span>GitHub</span>
          </a>
        )}

        {/* Multiple GitHub Repos */}
        {hasMultipleRepos && project.links.githubUrls?.map((repo) => (
          <a
            key={repo.label}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:bg-indigo-600/20 hover:border-indigo-500/30 hover:text-indigo-200 px-2.5 py-2 rounded-lg transition-all"
            title={repo.label}
          >
            <span className="material-icons text-xs">code</span>
            <span>{repo.label}</span>
          </a>
        ))}
      </div>
    </CyberCard>
  );
};