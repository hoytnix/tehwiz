import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/modules/blog/data/blogData';
import { SITE_CONFIG } from '@/config/site';
import { MOCK_PROJECTS } from '@/modules/portfolio/data/portfolioData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-10-02'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-10-02'),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date('2026-10-02'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vlog`,
      lastModified: new Date('2026-10-02'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/prompts`,
      lastModified: new Date('2026-10-02'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date('2026-10-02'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = MOCK_PROJECTS.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
    lastModified: new Date('2026-10-01'),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...portfolioRoutes];
}
