import { BlogPost } from '../types';
import blogData from './blogData.json';

export const BLOG_POSTS: BlogPost[] = blogData as BlogPost[];

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  BLOG_POSTS.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export function getTagCounts(): { tag: string; count: number }[] {
  const countMap: Record<string, number> = {};
  BLOG_POSTS.forEach((post) => {
    post.tags.forEach((tag) => {
      countMap[tag] = (countMap[tag] || 0) + 1;
    });
  });

  return Object.entries(countMap)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  // Support both current slug and legacy/convenience redirect aliases
  return BLOG_POSTS.find(
    (post) =>
      post.slug === slug ||
      post.id === slug ||
      (slug === 'hello-world' && post.id === 'it-started-with-goombas') ||
      (post.id === 'blocking-the-skiddies-cloudflare-waf' &&
        (slug === 'blocking-the-skiddies' ||
          slug === '600000-robots-1-human' ||
          slug === '600k-robots-1-human' ||
          slug === 'blocking-the-skiddies-with-a-single-cloudflare-waf-rule'))
  );
}
