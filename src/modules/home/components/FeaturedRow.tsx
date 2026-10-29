import React from 'react';
import Link from 'next/link';
import { MOCK_PROJECTS } from '@/modules/portfolio/data/portfolioData';
import { ProjectCover, ProjectFavicon, StatusDot } from '@/modules/portfolio/components/ProjectCard';

const FEATURED_IDS = ['yuli', 'terminally-skilled', 'caffeinemd'];

export const FeaturedRow: React.FC = () => {
  const featured = FEATURED_IDS.map((id) =>
    MOCK_PROJECTS.find((p) => p.id === id)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section aria-label="Featured projects">
      <h2 className="font-display text-4xl text-bone mb-8">Featured</h2>
      <div className="flex flex-col gap-8">
        {featured.map((project) => {
          const liveUrl = project.links?.liveUrl || project.url;
          const hasExternalLaunch = Boolean(liveUrl) && !project.redirect;
          return (
            <article
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 bg-card border border-edge p-6"
            >
              <Link
                href={`/portfolio/${project.id}`}
                className="block focus:outline-none self-start"
                aria-label={`Open ${project.title} detail page`}
              >
                <ProjectCover project={project} />
              </Link>
              <div className="flex flex-col gap-3 min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  <StatusDot status={project.status} />
                  <span className="text-edge">|</span>
                  <span className="text-muted">{project.category}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ProjectFavicon project={project} />
                  <Link href={`/portfolio/${project.id}`} className="focus:outline-none min-w-0">
                    <h3 className="font-display text-3xl text-bone hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {project.hook || project.tagline}
                </p>
                <div className="mt-auto pt-2">
                  {hasExternalLaunch ? (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-2.5 px-5 text-sm font-medium bg-accent text-ink hover:opacity-90 transition-colors"
                    >
                      {project.id === 'yuli' ? 'Open Yuli' : project.id === 'terminally-skilled' ? 'Enter the arena' : 'Open'}
                    </a>
                  ) : (
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="inline-block py-2.5 px-5 text-sm font-medium bg-accent text-ink hover:opacity-90 transition-colors"
                    >
                      Open
                    </Link>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
