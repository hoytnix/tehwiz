import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  BLOG_POSTS,
  getPostBySlug,
  BlogPostView,
  ArticleJsonLd
} from '@/modules/blog';
import { SITE_CONFIG } from '@/config/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = BLOG_POSTS.map((post) => ({
    slug: post.slug
  }));
  // Include legacy and friendly aliases
  if (!slugs.some((s) => s.slug === 'hello-world')) {
    slugs.push({ slug: 'hello-world' });
  }
  if (!slugs.some((s) => s.slug === 'blocking-the-skiddies')) {
    slugs.push({ slug: 'blocking-the-skiddies' });
  }
  if (!slugs.some((s) => s.slug === 'blocking-the-skiddies-with-a-single-cloudflare-waf-rule')) {
    slugs.push({ slug: 'blocking-the-skiddies-with-a-single-cloudflare-waf-rule' });
  }
  return slugs;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found // TehWiz'
    };
  }

  const title = post.title;
  const description = post.excerpt;
  const url = `${SITE_CONFIG.url}/blog/${post.slug}`;

  return {
    title: `${title} // TehWiz Blog`,
    description,
    keywords: [...post.tags, ...SITE_CONFIG.keywords],
    authors: [{ name: post.author.name, url: post.author.url || SITE_CONFIG.github }],
    creator: post.author.name,
    publisher: SITE_CONFIG.name,
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url,
      title,
      description,
      siteName: SITE_CONFIG.name,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: SITE_CONFIG.coverImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SITE_CONFIG.handle,
      images: [SITE_CONFIG.coverImage]
    },
    alternates: {
      canonical: url
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag))
  );

  return (
    <>
      <ArticleJsonLd post={post} />
      <BlogPostView post={post} relatedPosts={relatedPosts} />
    </>
  );
}
