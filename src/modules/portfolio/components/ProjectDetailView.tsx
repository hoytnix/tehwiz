'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Project } from '@/types';
import { CyberButton } from '@/components/ui/CyberButton';
import { CyberCard } from '@/components/ui/CyberCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PermalinkButton } from '@/components/ui/PermalinkButton';

export interface ProjectDetailViewProps {
  project: Project;
  onBack?: () => void;
  onSelectProject?: (id: string) => void;
  allProjects: Project[];
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBack,
  onSelectProject,
  allProjects
}) => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.push('/portfolio');
    }
  };

  const handleNavigateProject = (id: string) => {
    if (onSelectProject) {
      onSelectProject(id);
    } else {
      router.push(`/portfolio/${id}`);
    }
  };

  // Handle ESC key to go back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleBack]);

  // Scroll to top on project switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const handleCopyLink = () => {
    const url = typeof window !== 'undefined' 
      ? `${window.location.origin}/portfolio/${project.id}` 
      : `https://tehwiz.com/portfolio/${project.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
    }
    if (licenseName.includes('BSL')) {
      return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    }
    return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40';
  };

  const liveUrl = project.links?.liveUrl || project.url;
  const singleGithub = project.links?.githubUrl;
  const hasMultipleRepos = project.links?.githubUrls && project.links.githubUrls.length > 0;
  const huggingFace = project.links?.huggingFaceUrl;

  const liveButtonLabel = project.id === 'yuli' 
    ? 'Try Yuli Web App' 
    : project.status === 'LIVE' 
      ? 'Launch Live App' 
      : 'Launch Web App';

  return (
    <div className="h-full w-full flex flex-col p-4 sm:p-6 lg:p-8 overflow-y-auto pb-32 bg-transparent text-slate-100">
      {/* Top Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.08] flex-shrink-0">
        <div className="flex items-center gap-3">
          <CyberButton
            variant="secondary"
            size="sm"
            icon="arrow_back"
            onClick={handleBack}
          >
            Back to Systems
          </CyberButton>

          {/* Breadcrumbs */}
          <Breadcrumbs 
            items={[
              { label: 'Systems', href: '/portfolio', icon: 'layers' },
              { label: project.title }
            ]} 
            className="hidden sm:flex"
          />
        </div>

        {/* Action Controls & Pagination */}
        <div className="flex items-center gap-2">
          {/* Permalink Button */}
          <PermalinkButton 
            path={`/portfolio/${project.id}`} 
            label="Permalink" 
            copiedLabel="Permalink Copied!" 
          />

          {/* Prev / Next Flippers */}
          {prevProject && (
            <button
              onClick={() => handleNavigateProject(prevProject.id)}
              className="p-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all cursor-pointer"
              title={`Previous: ${prevProject.title}`}
            >
              <span className="material-icons text-base">chevron_left</span>
            </button>
          )}
          {nextProject && (
            <button
              onClick={() => handleNavigateProject(nextProject.id)}
              className="p-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all cursor-pointer"
              title={`Next: ${nextProject.title}`}
            >
              <span className="material-icons text-base">chevron_right</span>
            </button>
          )}
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 mb-8 border border-white/[0.1] bg-gradient-to-br from-indigo-950/50 via-slate-900/70 to-black/90 backdrop-blur-2xl shadow-2xl specular-border">
        {/* Ambient Glow Orb */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex-1 min-w-0">
            {/* Category & Status */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className={`text-[11px] px-3 py-1 rounded-full border font-bold uppercase tracking-wider ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
              {project.category && (
                <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 font-mono font-semibold">
                  {project.category}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
              {project.title}
            </h1>

            {/* Tagline */}
            {project.tagline && (
              <p className="text-base sm:text-lg text-indigo-200/90 font-medium mb-4 max-w-3xl leading-relaxed">
                {project.tagline}
              </p>
            )}

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-300 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Primary Quick Actions */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
              >
                <span>{liveButtonLabel}</span>
                <span className="material-icons text-sm">arrow_outward</span>
              </a>
            )}

            {huggingFace && (
              <a
                href={huggingFace}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl text-sm font-semibold text-amber-200 bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>🤗 Hugging Face Space</span>
                <span className="material-icons text-sm">open_in_new</span>
              </a>
            )}

            {singleGithub && (
              <a
                href={singleGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <span className="material-icons text-sm">code</span>
                <span>GitHub Repository</span>
                <span className="material-icons text-xs">open_in_new</span>
              </a>
            )}

            {hasMultipleRepos && project.links.githubUrls?.map((repo) => (
              <a
                key={repo.label}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-white/5 border border-white/10 hover:bg-indigo-600/20 hover:border-indigo-500/40 hover:text-indigo-200 transition-all flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="material-icons text-sm text-indigo-400">code</span>
                  <span className="font-mono truncate">{repo.label}</span>
                </div>
                <span className="material-icons text-xs opacity-70">open_in_new</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copy Hooks Banner: The Hook & The Agitation */}
      {(project.hook || project.agitation) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {project.hook && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-slate-900/60 border border-indigo-500/30 flex items-start gap-3.5 shadow-lg">
              <span className="material-icons text-indigo-400 text-2xl mt-0.5 shrink-0">bolt</span>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300 font-bold block mb-1">
                  The Core Hook
                </span>
                <p className="text-white text-base font-semibold leading-snug">
                  "{project.hook}"
                </p>
              </div>
            </div>
          )}

          {project.agitation && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-rose-950/30 via-slate-900/60 to-black/60 border border-rose-500/20 flex items-start gap-3.5 shadow-lg">
              <span className="material-icons text-rose-400 text-2xl mt-0.5 shrink-0">psychology_alt</span>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-rose-300 font-bold block mb-1">
                  The Real-World Friction
                </span>
                <p className="text-slate-200 text-sm font-medium leading-snug">
                  "{project.agitation}"
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Content Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Columns: Enemy, Mechanism, Transformation, Highlights, Specs, License */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Section: The Enemy & Friction Point */}
          {project.enemyFriction && (
            <CyberCard 
              glowColor="none"
              className="!p-6 sm:!p-8 border border-rose-500/25 bg-gradient-to-br from-rose-950/20 via-slate-950/70 to-black/80"
            >
              <div className="flex items-center gap-2.5 text-rose-300 font-bold text-lg mb-3">
                <span className="material-icons text-rose-400">report_problem</span>
                <h2>The Enemy & The Status-Quo Friction</h2>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.enemyFriction}
              </p>
            </CyberCard>
          )}

          {/* Section: The Unique Mechanism */}
          {project.uniqueMechanism && (
            <CyberCard 
              glowColor="indigo"
              className="!p-6 sm:!p-8 border border-indigo-500/30 bg-gradient-to-br from-indigo-950/30 via-slate-950/70 to-black/80"
            >
              <div className="flex items-center gap-2.5 text-indigo-300 font-bold text-lg mb-3">
                <span className="material-icons text-indigo-400">auto_awesome</span>
                <h2>The Unique Mechanism</h2>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.uniqueMechanism}
              </p>
            </CyberCard>
          )}

          {/* Section: The Transformation */}
          {project.transformation && (
            <CyberCard 
              glowColor="emerald"
              className="!p-6 sm:!p-8 border border-emerald-500/25 bg-gradient-to-br from-emerald-950/20 via-slate-950/70 to-black/80"
            >
              <div className="flex items-center gap-2.5 text-emerald-300 font-bold text-lg mb-3">
                <span className="material-icons text-emerald-400">trending_up</span>
                <h2>The Transformation & Real-World ROI</h2>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.transformation}
              </p>
            </CyberCard>
          )}

          {/* Detailed Narrative & About */}
          <CyberCard 
            glowColor="indigo"
            className="!p-6 sm:!p-8 bg-slate-950/70 border border-white/[0.08]"
          >
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <span className="material-icons text-indigo-400">info</span>
              <h2>Project Overview & Architecture</h2>
            </div>

            <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line mb-6">
              {project.description}
            </p>

            {/* Highlights List if present */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                  Key Capabilities & Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5"
                    >
                      <span className="material-icons text-sm text-emerald-400 mt-0.5 shrink-0">check_circle</span>
                      <span className="text-xs text-slate-300 leading-normal">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CyberCard>

          {/* Technical Specifications Grid */}
          {project.specs && project.specs.length > 0 && (
            <CyberCard className="!p-6">
              <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
                <span className="material-icons text-indigo-400">memory</span>
                <h2>Technical Specifications & Environment</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.specs.map((spec, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                      {spec.label}
                    </span>
                    <span className="text-sm font-semibold text-white font-mono break-words">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </CyberCard>
          )}

          {/* Architecture Notes if present */}
          {project.architectureNotes && (
            <CyberCard className="!p-6">
              <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
                <span className="material-icons text-indigo-400">account_tree</span>
                <h2>Engineering Rationale</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.architectureNotes}
              </p>
            </CyberCard>
          )}

          {/* Section: Licensing & Legal Terms */}
          {project.license && (
            <CyberCard className="!p-6 sm:!p-8 border-indigo-500/20 bg-gradient-to-br from-indigo-950/20 to-black/40">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <span className="material-icons text-indigo-400">gavel</span>
                  <h2>Licensing & Legal Terms</h2>
                </div>

                <span className={`text-xs px-3 py-1 rounded-full border font-mono font-bold ${getLicenseBadgeColor(project.license.name)}`}>
                  {project.license.name}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-white/5 mb-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.license.summary}
                </p>
              </div>

              {project.license.url && (
                <div className="flex items-center justify-end">
                  <a
                    href={project.license.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 hover:text-white transition-colors bg-indigo-500/10 border border-indigo-500/30 px-4 py-2 rounded-xl hover:bg-indigo-500/20"
                  >
                    <span>View Official LICENSE File</span>
                    <span className="material-icons text-xs">open_in_new</span>
                  </a>
                </div>
              )}
            </CyberCard>
          )}
        </div>

        {/* Right 1 Column: Pricing Table, Quick Links, Related Projects */}
        <div className="flex flex-col gap-6">
          {/* Detailed Pricing Table */}
          {project.pricing && project.pricing.length > 0 && (
            <CyberCard className="!p-6">
              <div className="flex items-center gap-2 text-white font-bold text-lg mb-1">
                <span className="material-icons text-indigo-400">payments</span>
                <h2>The Offer & Pricing</h2>
              </div>
              <p className="text-xs text-slate-400 mb-5">
                Transparent access, licensing, and enterprise tiers.
              </p>

              <div className="flex flex-col gap-3">
                {project.pricing.map((tier, idx) => {
                  const isFeatured = tier.highlighted;
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl transition-all border ${
                        isFeatured
                          ? 'bg-indigo-950/40 border-indigo-500/50 shadow-md shadow-indigo-500/10'
                          : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">
                            {tier.plan}
                          </span>
                          {tier.badge && (
                            <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-medium ${
                              isFeatured
                                ? 'bg-indigo-500/30 text-indigo-200 border border-indigo-500/50'
                                : 'bg-white/10 text-slate-300 border border-white/10'
                            }`}>
                              {tier.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mb-2">
                        <span className={`font-mono text-xl font-extrabold ${isFeatured ? 'text-indigo-300' : 'text-white'}`}>
                          {tier.price}
                        </span>
                        {tier.period && (
                          <span className="text-xs text-slate-400 ml-1.5 font-mono">
                            {tier.period}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300/90 leading-relaxed">
                        {tier.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CyberCard>
          )}

          {/* Quick Links Card */}
          <CyberCard className="!p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">
              Project Access & Repos
            </h3>

            <div className="flex flex-col gap-2.5">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/10 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="material-icons text-indigo-400 text-sm">language</span>
                    <span className="text-xs font-semibold text-white truncate">Live Application</span>
                  </div>
                  <span className="material-icons text-xs text-slate-400 group-hover:text-white">open_in_new</span>
                </a>
              )}

              {huggingFace && (
                <a
                  href={huggingFace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/10 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-sm">🤗</span>
                    <span className="text-xs font-semibold text-white truncate">Hugging Face Profile</span>
                  </div>
                  <span className="material-icons text-xs text-slate-400 group-hover:text-white">open_in_new</span>
                </a>
              )}

              {singleGithub && (
                <a
                  href={singleGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/10 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="material-icons text-sm text-slate-400">code</span>
                    <span className="text-xs font-mono text-slate-200 truncate">Source Code</span>
                  </div>
                  <span className="material-icons text-xs text-slate-400 group-hover:text-white">open_in_new</span>
                </a>
              )}

              {hasMultipleRepos && project.links.githubUrls?.map((repo) => (
                <a
                  key={repo.label}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/10 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="material-icons text-sm text-indigo-400">code</span>
                    <span className="text-xs font-mono text-slate-200 truncate">{repo.label}</span>
                  </div>
                  <span className="material-icons text-xs text-slate-400 group-hover:text-white">open_in_new</span>
                </a>
              ))}
            </div>
          </CyberCard>

          {/* More Projects Quick Switcher */}
          <CyberCard className="!p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
              Explore More Apps
            </h3>

            <div className="flex flex-col gap-2">
              {allProjects
                .filter((p) => p.id !== project.id)
                .slice(0, 4)
                .map((other) => (
                  <Link
                    key={other.id}
                    href={`/portfolio/${other.id}`}
                    onClick={(e) => {
                      if (onSelectProject) {
                        e.preventDefault();
                        onSelectProject(other.id);
                      }
                    }}
                    className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/10 text-left transition-all group flex items-center justify-between"
                  >
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors block truncate">
                        {other.title}
                      </span>
                      <span className="text-[10px] text-slate-400 block truncate">
                        {other.category || other.status}
                      </span>
                    </div>
                    <span className="material-icons text-xs text-slate-500 group-hover:text-white transition-colors">
                      arrow_forward
                    </span>
                  </Link>
                ))}
            </div>
          </CyberCard>
        </div>
      </div>
    </div>
  );
};
