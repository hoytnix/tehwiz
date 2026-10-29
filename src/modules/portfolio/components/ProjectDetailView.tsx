'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Project } from '@/types';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProjectCover, StatusDot } from './ProjectCard';

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [project.id]);

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const liveUrl = project.links?.liveUrl || project.url;
  const hasExternalLaunch = Boolean(liveUrl) && !project.redirect;
  const singleGithub = project.links?.githubUrl;
  const repoUrls = project.links?.githubUrls || [];
  const huggingFace = project.links?.huggingFaceUrl;
  const itchIo = project.links?.itchIoUrl;

  return (
    <div className="h-full w-full flex flex-col overflow-y-auto bg-ink text-muted">
      <div className="max-w-magazine mx-auto w-full px-6 lg:px-16 py-8 pb-24">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              className="text-sm text-muted hover:text-bone transition-colors"
            >
              ← Projects
            </button>
            <Breadcrumbs
              items={[
                { label: 'Projects', href: '/portfolio' },
                { label: project.title }
              ]}
            />
          </div>
          <div className="flex items-center gap-2">
            {prevProject && (
              <button
                onClick={() => handleNavigateProject(prevProject.id)}
                className="px-3 py-1.5 text-sm text-muted hover:text-bone border border-edge hover:border-accent transition-colors"
                title={`Previous: ${prevProject.title}`}
              >
                ←
              </button>
            )}
            {nextProject && (
              <button
                onClick={() => handleNavigateProject(nextProject.id)}
                className="px-3 py-1.5 text-sm text-muted hover:text-bone border border-edge hover:border-accent transition-colors"
                title={`Next: ${nextProject.title}`}
              >
                →
              </button>
            )}
          </div>
        </div>

        <div className="max-w-3xl mb-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mb-4">
            <StatusDot status={project.status} />
            <span className="text-edge">|</span>
            <span>{project.category}</span>
            <span className="text-edge">|</span>
            <span>{project.license?.name}</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl leading-none text-bone mb-4">
            {project.title}
          </h1>
          {project.tagline && (
            <p className="text-base sm:text-lg">{project.tagline}</p>
          )}
        </div>

        <div className="max-w-3xl mb-12">
          <ProjectCover project={project} />
        </div>

        <div className="max-w-3xl flex flex-wrap gap-3 mb-16">
          {project.redirect ? (
            <span className="py-2.5 px-5 text-sm text-muted border border-edge">
              Redirect → {project.redirect.to.replace('https://', '')}
            </span>
          ) : (
            hasExternalLaunch && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 text-sm font-medium bg-accent text-ink hover:opacity-90 transition-colors"
              >
                Open →
              </a>
            )
          )}
          {itchIo && (
            <a
              href={itchIo}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 text-sm text-bone border border-edge hover:border-accent transition-colors"
            >
              Itch.io →
            </a>
          )}
          {singleGithub && (
            <a
              href={singleGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 text-sm text-bone border border-edge hover:border-accent transition-colors"
            >
              Source code →
            </a>
          )}
          {repoUrls.map((repo) => (
            <a
              key={repo.label}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 text-sm text-bone border border-edge hover:border-accent transition-colors"
            >
              {repo.label} →
            </a>
          ))}
          {huggingFace && (
            <a
              href={huggingFace}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 text-sm text-bone border border-edge hover:border-accent transition-colors"
            >
              Model weights →
            </a>
          )}
        </div>

        {project.redirect && (
          <p className="max-w-3xl text-sm mb-16 border border-edge p-5">
            {project.redirect.note}
          </p>
        )}

        <div className="max-w-3xl flex flex-col gap-12">
          <section>
            <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </section>

          {project.highlights && project.highlights.length > 0 && (
            <section>
              <h2 className="font-display text-3xl text-bone mb-5">Highlights</h2>
              <ul className="flex flex-col gap-3">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-base flex gap-3">
                    <span className="text-accent select-none">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.specs && project.specs.length > 0 && (
            <section>
              <h2 className="font-display text-3xl text-bone mb-5">Specs</h2>
              <dl className="border border-edge divide-y divide-edge">
                {project.specs.map((spec, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-1 sm:gap-4 p-4">
                    <dt className="font-mono text-xs text-muted pt-0.5">{spec.label}</dt>
                    <dd className="font-mono text-xs text-bone break-words">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {project.architectureNotes && (
            <section>
              <h2 className="font-display text-3xl text-bone mb-5">Engineering notes</h2>
              <p className="text-base leading-relaxed">{project.architectureNotes}</p>
            </section>
          )}

          {project.license && (
            <section>
              <h2 className="font-display text-3xl text-bone mb-5">License</h2>
              <p className="text-base mb-3">{project.license.summary}</p>
              <p className="font-mono text-xs text-muted mb-4">{project.license.name}</p>
              {project.license.url && (
                <a
                  href={project.license.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:opacity-90 transition-colors"
                >
                  License file →
                </a>
              )}
            </section>
          )}

          {project.pricing && project.pricing.length > 0 && (
            <section>
              <h2 className="font-display text-3xl text-bone mb-5">Pricing</h2>
              <div className="flex flex-col gap-px bg-edge border border-edge">
                {project.pricing.map((tier, idx) => (
                  <div key={idx} className="bg-card p-5">
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <span className="text-base text-bone">{tier.plan}</span>
                      <span className="font-mono text-xs text-bone">
                        {tier.price}{tier.period ? ` ${tier.period}` : ''}
                      </span>
                    </div>
                    <p className="text-sm">{tier.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <nav className="flex items-center justify-between border-t border-edge pt-8" aria-label="More projects">
            {prevProject && (
              <button
                onClick={() => handleNavigateProject(prevProject.id)}
                className="text-sm text-muted hover:text-bone transition-colors text-left"
              >
                <span className="block text-xs mb-1">Previous</span>
                <span className="font-display text-xl text-bone">{prevProject.title}</span>
              </button>
            )}
            {nextProject && (
              <button
                onClick={() => handleNavigateProject(nextProject.id)}
                className="text-sm text-muted hover:text-bone transition-colors text-right ml-auto"
              >
                <span className="block text-xs mb-1">Next</span>
                <span className="font-display text-xl text-bone">{nextProject.title}</span>
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};
