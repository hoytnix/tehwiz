import { SITE_CONFIG } from '@/config/site';
import { Project } from '@/types';

/**
 * Single source of truth for a project's display media.
 * Per-app URLs come from the live app's own metadata (its JSON-LD
 * image/logo and og:image / icon links); projects without a live app
 * (redirects, apps that declare no working assets) fall back to the
 * site-global cover and logo so cards and JSON-LD never break.
 */
export function getProjectCoverImage(project: Project): string {
  if (project.coverImage) return project.coverImage;
  return `${SITE_CONFIG.url}${SITE_CONFIG.coverImage}`;
}

export function getProjectFavicon(project: Project): string {
  if (project.favicon) return project.favicon;
  return `${SITE_CONFIG.url}${SITE_CONFIG.logoUrl}`;
}
