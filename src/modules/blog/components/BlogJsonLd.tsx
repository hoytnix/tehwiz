import React from 'react';
import { BlogPost } from '../types';
import { SITE_CONFIG } from '@/config/site';

export interface ArticleJsonLdProps {
  post: BlogPost;
}

export const ArticleJsonLd: React.FC<ArticleJsonLdProps> = ({ post }) => {
  const postUrl = `${SITE_CONFIG.url}/blog/${post.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['BlogPosting', 'TechArticle'],
    headline: post.title,
    name: post.title,
    description: post.excerpt,
    articleBody: post.content.replace(/\r\n/g, '\n').trim(),
    wordCount: post.wordCount,
    timeRequired: `PT${post.readingTime}M`,
    keywords: post.tags.join(', '),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    inLanguage: 'en-US',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl
    },
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      url: post.author.url || SITE_CONFIG.github,
      sameAs: [
        SITE_CONFIG.github,
        SITE_CONFIG.youtube
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/favicon.ico`
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export interface BlogListJsonLdProps {
  posts: BlogPost[];
}

export const BlogListJsonLd: React.FC<BlogListJsonLdProps> = ({ posts }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'TehWiz Engineering Blog',
    description:
      'Zero-to-App-Store architectural journals, sovereign edge AI deep dives, and WebGPU graphics engine systems by Michael Scott Hoyt.',
    url: `${SITE_CONFIG.url}/blog`,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url
    },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE_CONFIG.url}/blog/${p.slug}`,
      datePublished: p.publishedAt,
      description: p.excerpt,
      keywords: p.tags.join(', ')
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
