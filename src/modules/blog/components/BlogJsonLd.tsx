import React from 'react';
import { BlogPost } from '../types';
import { SITE_CONFIG } from '@/config/site';
import { CONTACT_EMAIL_BUTTON_MARKER } from './RevealEmailButton';

export interface ArticleJsonLdProps {
  post: BlogPost;
}

export const ArticleJsonLd: React.FC<ArticleJsonLdProps> = ({ post }) => {
  const postUrl = `${SITE_CONFIG.url}/blog/${post.slug}`;
  const coverUrl = `${SITE_CONFIG.url}${SITE_CONFIG.coverImage}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_CONFIG.url
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Engineering Blog',
            item: `${SITE_CONFIG.url}/blog`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: postUrl
          }
        ]
      },
      {
        '@type': ['BlogPosting', 'TechArticle'],
        '@id': `${postUrl}#article`,
        headline: post.title,
        name: post.title,
        description: post.excerpt,
        articleBody: post.content
          .replace(/\r\n/g, '\n')
          .split(CONTACT_EMAIL_BUTTON_MARKER)
          .join('')
          .trim(),
        wordCount: post.wordCount,
        timeRequired: `PT${post.readingTime}M`,
        keywords: post.tags.join(', '),
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        inLanguage: 'en-US',
        image: [coverUrl],
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': postUrl
        },
        isPartOf: {
          '@type': 'Blog',
          '@id': `${SITE_CONFIG.url}/blog#blog`,
          name: 'TehWiz Engineering Blog'
        },
        author: {
          '@type': 'Person',
          '@id': `${SITE_CONFIG.url}/#person`,
          name: post.author.name,
          jobTitle: post.author.role,
          url: post.author.url || SITE_CONFIG.github,
          sameAs: [
            SITE_CONFIG.github,
            SITE_CONFIG.youtube,
            SITE_CONFIG.twitter
          ].filter(Boolean)
        },
        publisher: {
          '@type': 'Organization',
          '@id': `${SITE_CONFIG.url}/#organization`,
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
          logo: {
            '@type': 'ImageObject',
            url: coverUrl,
            width: 1200,
            height: 630
          }
        }
      }
    ]
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
  const blogUrl = `${SITE_CONFIG.url}/blog`;
  const coverUrl = `${SITE_CONFIG.url}${SITE_CONFIG.coverImage}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_CONFIG.url
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Engineering Blog',
            item: blogUrl
          }
        ]
      },
      {
        '@type': ['Blog', 'CollectionPage'],
        '@id': `${blogUrl}#blog`,
        name: 'TehWiz Engineering Blog',
        description:
          'Zero-to-App-Store architectural journals, sovereign edge AI deep dives, and WebGPU graphics engine systems by Michael Scott Hoyt.',
        url: blogUrl,
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${SITE_CONFIG.url}/#website`
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: coverUrl,
          width: 1200,
          height: 630
        },
        publisher: {
          '@type': 'Organization',
          '@id': `${SITE_CONFIG.url}/#organization`,
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
          logo: {
            '@type': 'ImageObject',
            url: coverUrl,
            width: 1200,
            height: 630
          }
        },
        blogPost: posts.map((p) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          url: `${SITE_CONFIG.url}/blog/${p.slug}`,
          datePublished: p.publishedAt,
          dateModified: p.updatedAt || p.publishedAt,
          description: p.excerpt,
          keywords: p.tags.join(', '),
          image: coverUrl,
          author: {
            '@type': 'Person',
            '@id': `${SITE_CONFIG.url}/#person`,
            name: p.author.name
          }
        }))
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
