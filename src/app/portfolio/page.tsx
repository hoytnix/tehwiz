import { Metadata } from 'next';
import { PortfolioCatalog, MOCK_PROJECTS } from '@/modules/portfolio';
import { PortfolioCatalogJsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Systems Directory // 19 Production Projects',
  description: '19 sovereign systems, edge-native engines, games, security tools, and agent infrastructure developed by Michael Scott Hoyt.',
  openGraph: {
    title: `Systems Directory // 19 Production Projects // ${SITE_CONFIG.name}`,
    description: '19 sovereign systems, edge-native engines, games, security tools, and agent infrastructure developed by Michael Scott Hoyt.',
    url: `${SITE_CONFIG.url}/portfolio`,
    type: 'website',
    images: [
      {
        url: SITE_CONFIG.coverImage,
        width: 1200,
        height: 630,
        alt: 'TehWiz Systems Directory'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `Systems Directory // 19 Production Projects // ${SITE_CONFIG.name}`,
    description: '19 sovereign systems, edge-native engines, games, security tools, and agent infrastructure developed by Michael Scott Hoyt.',
    images: [SITE_CONFIG.coverImage]
  }
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioCatalogJsonLd projects={MOCK_PROJECTS} />
      <PortfolioCatalog />
    </>
  );
}
