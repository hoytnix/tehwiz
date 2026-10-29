import React from 'react';
import { SITE_CONFIG } from '@/config/site';
import { Project, VlogEntry, PromptItem } from '@/types';
import { getProjectCoverImage } from '@/modules/portfolio/utils/projectMedia';

// Helper to ensure full absolute URL
export function getFullUrl(pathOrUrl?: string): string {
  if (!pathOrUrl) return SITE_CONFIG.url;
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }
  return `${SITE_CONFIG.url}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

// Helper to sanitize and serialize JSON-LD safely
function renderJsonLd(data: object) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, process.env.NODE_ENV === 'development' ? 2 : 0)
      }}
    />
  );
}

// 1. Root / Global JSON-LD Schema (WebSite, Organization, Person, SiteNavigationElement)
export const RootJsonLd: React.FC = () => {
  const coverUrl = getFullUrl(SITE_CONFIG.coverImage);
  const logoUrl = getFullUrl(SITE_CONFIG.logoUrl);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        alternateName: ['TehWiz', 'TehWiz.com'],
        description: SITE_CONFIG.description,
        inLanguage: 'en-US',
        publisher: {
          '@id': `${SITE_CONFIG.url}/#organization`
        },
        author: {
          '@id': `${SITE_CONFIG.url}/#person`
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_CONFIG.url}/portfolio?query={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        logo: {
          '@type': 'ImageObject',
          url: logoUrl,
          width: 64,
          height: 64
        },
        image: {
          '@type': 'ImageObject',
          url: coverUrl,
          width: 1200,
          height: 630
        },
        description: SITE_CONFIG.description,
        founder: {
          '@id': `${SITE_CONFIG.url}/#person`
        },
        sameAs: [
          SITE_CONFIG.github,
          SITE_CONFIG.youtube,
          SITE_CONFIG.twitter
        ].filter(Boolean),
        knowsAbout: SITE_CONFIG.keywords
      },
      {
        '@type': 'Person',
        '@id': `${SITE_CONFIG.url}/#person`,
        name: SITE_CONFIG.author,
        alternateName: SITE_CONFIG.handle,
        jobTitle: 'Senior Systems Architect & Founder',
        url: SITE_CONFIG.url,
        image: coverUrl,
        worksFor: {
          '@id': `${SITE_CONFIG.url}/#organization`
        },
        sameAs: [
          SITE_CONFIG.github,
          SITE_CONFIG.youtube,
          SITE_CONFIG.twitter
        ].filter(Boolean),
        knowsAbout: [
          'Sovereign Edge AI',
          'WebGPU Compute',
          'Cognitive Architecture',
          'High-Performance Systems',
          'Local Inference Engines',
          'Pushdown Automata',
          'Computer Vision',
          'TypeScript',
          'Next.js'
        ]
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE_CONFIG.url}/#navigation`,
        name: 'Site Navigation',
        itemListElement: [
          {
            '@type': 'SiteNavigationElement',
            position: 1,
            name: 'Home',
            url: `${SITE_CONFIG.url}/`
          },
          {
            '@type': 'SiteNavigationElement',
            position: 2,
            name: 'Systems Directory',
            url: `${SITE_CONFIG.url}/portfolio`
          },
          {
            '@type': 'SiteNavigationElement',
            position: 3,
            name: 'Engineering Blog',
            url: `${SITE_CONFIG.url}/blog`
          },
          {
            '@type': 'SiteNavigationElement',
            position: 4,
            name: 'Live Streams & Vlogs',
            url: `${SITE_CONFIG.url}/vlog`
          },
          {
            '@type': 'SiteNavigationElement',
            position: 5,
            name: 'Prompt Vault',
            url: `${SITE_CONFIG.url}/prompts`
          },
          {
            '@type': 'SiteNavigationElement',
            position: 6,
            name: 'System Directory Menu',
            url: `${SITE_CONFIG.url}/menu`
          }
        ]
      }
    ]
  };

  return renderJsonLd(schema);
};

// 2. Generic Breadcrumb JSON-LD
export interface BreadcrumbEntry {
  name: string;
  item?: string;
}

export const BreadcrumbJsonLd: React.FC<{ items: BreadcrumbEntry[] }> = ({ items }) => {
  const fullList: BreadcrumbEntry[] = [
    { name: 'Home', item: SITE_CONFIG.url },
    ...items
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullList.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      ...(entry.item ? { item: entry.item } : {})
    }))
  };

  return renderJsonLd(schema);
};

// 3. Home Page JSON-LD
export const HomePageJsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_CONFIG.url}/#webpage`,
    url: `${SITE_CONFIG.url}/`,
    name: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': `${SITE_CONFIG.url}/#website`
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}${SITE_CONFIG.coverImage}`,
      width: 1200,
      height: 630
    },
    about: [
      { '@id': `${SITE_CONFIG.url}/#person` },
      { '@id': `${SITE_CONFIG.url}/#organization` }
    ]
  };

  return renderJsonLd(schema);
};

// Category mapping helper for SoftwareApplication
function mapAppCategory(category: string): string {
  const lower = category.toLowerCase();
  if (lower.includes('ai') || lower.includes('architecture')) return 'DeveloperApplication';
  if (lower.includes('game') || lower.includes('media')) return 'GameApplication';
  if (lower.includes('vision') || lower.includes('asset') || lower.includes('protection')) return 'UtilitiesApplication';
  if (lower.includes('diagnostic') || lower.includes('health') || lower.includes('harm')) return 'HealthApplication';
  if (lower.includes('web3') || lower.includes('financial')) return 'FinanceApplication';
  return 'Application';
}

// 4. Portfolio Catalog Page JSON-LD
export const PortfolioCatalogJsonLd: React.FC<{ projects: Project[] }> = ({ projects }) => {
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
            name: 'Systems Directory',
            item: `${SITE_CONFIG.url}/portfolio`
          }
        ]
      },
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_CONFIG.url}/portfolio#collection`,
        url: `${SITE_CONFIG.url}/portfolio`,
        name: 'Systems Directory // 19 Production Projects',
        description: '19 sovereign systems, edge-native engines, games, security tools, and agent infrastructure developed by Michael Scott Hoyt.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${SITE_CONFIG.url}/#website`
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_CONFIG.url}${SITE_CONFIG.coverImage}`,
          width: 1200,
          height: 630
        },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: projects.length,
          itemListElement: projects.map((project, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': ['SoftwareApplication', 'WebApplication'],
              name: project.title,
              description: project.hook || project.tagline || project.description,
              url: `${SITE_CONFIG.url}/portfolio/${project.id}`,
              applicationCategory: mapAppCategory(project.category),
              operatingSystem: 'WebGPU, WebGL, Modern Web Browsers, Cross-Platform',
              image: getProjectCoverImage(project),
              author: {
                '@id': `${SITE_CONFIG.url}/#person`
              }
            }
          }))
        }
      }
    ]
  };

  return renderJsonLd(schema);
};

// 5. Individual Project JSON-LD
export const ProjectJsonLd: React.FC<{ project: Project }> = ({ project }) => {
  const projectUrl = `${SITE_CONFIG.url}/portfolio/${project.id}`;

  const offers = (project.pricing || []).map((p) => {
    const rawPrice = p.price.toUpperCase() === 'FREE' ? '0' : p.price.replace(/[^0-9.]/g, '');
    return {
      '@type': 'Offer',
      name: p.plan,
      price: rawPrice || '0',
      priceCurrency: 'USD',
      description: p.description,
      availability: 'https://schema.org/InStock',
      url: projectUrl
    };
  });

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
            name: 'Systems Directory',
            item: `${SITE_CONFIG.url}/portfolio`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: projectUrl
          }
        ]
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id': `${projectUrl}#software`,
        url: projectUrl,
        name: project.title,
        headline: project.tagline,
        description: project.hook || project.tagline || project.description,
        applicationCategory: mapAppCategory(project.category),
        operatingSystem: 'WebGPU, WebGL, Modern Web Browsers, Cross-Platform',
        image: {
          '@type': 'ImageObject',
          url: getProjectCoverImage(project)
        },
        inLanguage: 'en-US',
        keywords: project.tags.join(', '),
        featureList: project.highlights || [],
        author: {
          '@id': `${SITE_CONFIG.url}/#person`
        },
        publisher: {
          '@id': `${SITE_CONFIG.url}/#organization`
        },
        ...(project.license
          ? {
              license: project.license.url || project.license.name
            }
          : {}),
        ...(offers.length > 0 ? { offers } : {})
      }
    ]
  };

  return renderJsonLd(schema);
};

// 6. Vlog Catalog Page JSON-LD
export const VlogListJsonLd: React.FC<{ entries: VlogEntry[] }> = ({ entries }) => {
  const vlogUrl = `${SITE_CONFIG.url}/vlog`;

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
            name: 'Engineering Vlogs',
            item: vlogUrl
          }
        ]
      },
      {
        '@type': 'CollectionPage',
        '@id': `${vlogUrl}#collection`,
        url: vlogUrl,
        name: 'Engineering Vlogs // Live Streams & Tech Journals',
        description: 'Zero-to-App-Store architectural journals, vibe-coding sessions, and AI game development walkthroughs by Michael Scott Hoyt.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${SITE_CONFIG.url}/#website`
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_CONFIG.url}${SITE_CONFIG.coverImage}`,
          width: 1200,
          height: 630
        },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: entries.length,
          itemListElement: entries.map((entry, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'VideoObject',
              name: entry.title,
              description: entry.description,
              thumbnailUrl: [entry.thumbnailUrl || `${SITE_CONFIG.url}${SITE_CONFIG.coverImage}`],
              uploadDate: new Date(entry.timestamp).toISOString(),
              contentUrl: entry.videoUri,
              embedUrl: entry.videoUri,
              author: {
                '@id': `${SITE_CONFIG.url}/#person`
              },
              publisher: {
                '@id': `${SITE_CONFIG.url}/#organization`
              }
            }
          }))
        }
      }
    ]
  };

  return renderJsonLd(schema);
};

// 7. Prompt Vault JSON-LD
export const PromptsListJsonLd: React.FC<{ prompts: PromptItem[] }> = ({ prompts }) => {
  const promptsUrl = `${SITE_CONFIG.url}/prompts`;

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
            name: 'Prompt Engineering Vault',
            item: promptsUrl
          }
        ]
      },
      {
        '@type': 'CollectionPage',
        '@id': `${promptsUrl}#collection`,
        url: promptsUrl,
        name: 'Prompt Engineering Vault // Cognitive Architectures',
        description: 'Battle-tested cognitive recursion loops, Casper memory bank schemas, and expert persona instructions.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${SITE_CONFIG.url}/#website`
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_CONFIG.url}${SITE_CONFIG.coverImage}`,
          width: 1200,
          height: 630
        },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: prompts.length,
          itemListElement: prompts.map((prompt, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'DigitalDocument',
              name: prompt.title,
              description: prompt.description,
              keywords: prompt.tags.join(', '),
              inLanguage: 'en-US',
              author: {
                '@id': `${SITE_CONFIG.url}/#person`
              },
              publisher: {
                '@id': `${SITE_CONFIG.url}/#organization`
              }
            }
          }))
        }
      }
    ]
  };

  return renderJsonLd(schema);
};

// 8. Menu / Site Index JSON-LD
export const MenuJsonLd: React.FC = () => {
  const menuUrl = `${SITE_CONFIG.url}/menu`;

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
            name: 'System Directory Menu',
            item: menuUrl
          }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': `${menuUrl}#webpage`,
        url: menuUrl,
        name: 'System Directory Menu // TehWiz Productions',
        description: 'Quick access terminal navigation and site index across TehWiz systems, architectures, and publications.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${SITE_CONFIG.url}/#website`
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_CONFIG.url}${SITE_CONFIG.coverImage}`,
          width: 1200,
          height: 630
        }
      }
    ]
  };

  return renderJsonLd(schema);
};
