'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';
import { getProjectCoverImage, getProjectFavicon } from '../utils/projectMedia';

/** Single status dot: amber for Live, quiet gray for everything else. */
export const StatusDot: React.FC<{ status: string; className?: string }> = ({
  status,
  className = '',
}) => {
  const isLive = status === 'Live';
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span
        className={`inline-block w-1.5 h-1.5 rounded-full ${isLive ? 'bg-live' : 'bg-muted'}`}
        aria-hidden="true"
      />
      <span className="text-xs text-muted">{status}</span>
    </span>
  );
};

/**
 * The live app's own cover art (its JSON-LD image / og:image), in a quiet
 * flat frame. A failed remote asset hides itself instead of leaving a
 * broken-image glyph.
 */
export const ProjectCover: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden bg-ink border-b border-edge">
      <img
        src={getProjectCoverImage(project)}
        alt={`${project.title} cover art`}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
};

/** The live app's own favicon. Hidden when the remote asset fails. */
export const ProjectFavicon: React.FC<{ project: Project; className?: string }> = ({
  project,
  className = '',
}) => {
  return (
    <img
      src={getProjectFavicon(project)}
      alt=""
      aria-hidden="true"
      loading="lazy"
      referrerPolicy="no-referrer"
      className={`h-5 w-5 shrink-0 rounded-[4px] object-contain ${className}`}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  );
};

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const liveUrl = project.links?.liveUrl || project.url;
  const hasExternalLaunch = Boolean(liveUrl) && !project.redirect;

  return (
    <article className="flex flex-col bg-card border border-edge">
      <Link
        href={`/portfolio/${project.id}`}
        className="block focus:outline-none"
        aria-label={`Open ${project.title} detail page`}
      >
        <ProjectCover project={project} />
      </Link>

      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-center gap-2.5">
          <ProjectFavicon project={project} />
          <Link href={`/portfolio/${project.id}`} className="block focus:outline-none min-w-0">
            <h3 className="font-display text-2xl leading-tight text-bone hover:text-accent transition-colors">
              {project.title}
            </h3>
          </Link>
        </div>

        <p className="text-sm text-muted leading-relaxed line-clamp-2">
          {project.tagline || project.description}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <StatusDot status={project.status} />
          <span className="text-edge">|</span>
          <span className="text-muted">{project.category || 'System'}</span>
          <span className="text-edge">|</span>
          <span className="text-muted truncate">{project.license?.name || 'Proprietary'}</span>
        </div>

        <div className="mt-auto pt-2">
          {project.redirect ? (
            <Link
              href={`/portfolio/${project.id}`}
              className="text-sm text-accent hover:opacity-90 transition-colors"
            >
              Redirect →
            </Link>
          ) : hasExternalLaunch ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:opacity-90 transition-colors"
            >
              Open →
            </a>
          ) : (
            <Link
              href={`/portfolio/${project.id}`}
              className="text-sm text-accent hover:opacity-90 transition-colors"
            >
              Open →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
