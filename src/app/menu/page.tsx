import { Metadata } from 'next';
import { MenuView } from '@/modules/menu/MenuView';
import { MenuJsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'System Index & Directory Navigation',
  description: 'Explore the complete index of sovereign edge AI systems, research repositories, prompt engineering vault, and architecture logs.',
  openGraph: {
    title: `System Index & Directory Navigation // ${SITE_CONFIG.name}`,
    description: 'Explore the complete index of sovereign edge AI systems, research repositories, prompt engineering vault, and architecture logs.',
    url: `${SITE_CONFIG.url}/menu`,
    type: 'website',
    images: [
      {
        url: SITE_CONFIG.coverImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Directory Menu`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `System Index & Directory Navigation // ${SITE_CONFIG.name}`,
    description: 'Explore the complete index of sovereign edge AI systems, research repositories, prompt engineering vault, and architecture logs.',
    creator: SITE_CONFIG.handle,
    images: [SITE_CONFIG.coverImage]
  }
};

export default function MenuPage() {
  return (
    <>
      <MenuJsonLd />
      <MenuView />
    </>
  );
}
