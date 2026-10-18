import { Metadata } from 'next';
import { BLOG_POSTS, BlogListView, BlogListJsonLd } from '@/modules/blog';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Engineering Blog // Sovereign AI, WebGPU & Edge Systems',
  description:
    'Deep architectural writeups, zero-cloud-bill on-device AI engineering, WebGPU pipelines, and sovereign systems design by Michael Scott Hoyt.',
  keywords: [
    ...SITE_CONFIG.keywords,
    'Engineering Blog',
    'Tech Journal',
    'Edge AI',
    'WebGPU Compute',
    'Local Inference'
  ],
  openGraph: {
    title: `Engineering Blog // ${SITE_CONFIG.name}`,
    description:
      'Zero-to-App-Store architectural journals, sovereign edge AI deep dives, and WebGPU graphics engine systems by Michael Scott Hoyt.',
    url: `${SITE_CONFIG.url}/blog`,
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.coverImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Engineering Blog`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `Engineering Blog // ${SITE_CONFIG.name}`,
    description:
      'Deep architectural writeups, on-device AI models, WebGPU pipelines, and sovereign systems design.',
    creator: SITE_CONFIG.handle,
    images: [SITE_CONFIG.coverImage]
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
    types: {
      'application/rss+xml': `${SITE_CONFIG.url}/rss.xml`
    }
  }
};

interface BlogPageProps {
  searchParams?: Promise<{ tag?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const initialTag = resolvedSearchParams?.tag || null;

  return (
    <>
      <BlogListJsonLd posts={BLOG_POSTS} />
      <BlogListView posts={BLOG_POSTS} initialTag={initialTag} />
    </>
  );
}
