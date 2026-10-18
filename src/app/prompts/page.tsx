import { Metadata } from 'next';
import { PromptsView, MOCK_PROMPTS } from '@/modules/prompts';
import { PromptsListJsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Prompt Engineering Vault // Cognitive Architectures',
  description: 'Battle-tested cognitive recursion loops, Casper memory bank schemas, and expert persona instructions.',
  openGraph: {
    title: `Prompt Engineering Vault // ${SITE_CONFIG.name}`,
    description: 'Battle-tested cognitive recursion loops, Casper memory bank schemas, and expert persona instructions.',
    url: `${SITE_CONFIG.url}/prompts`,
    type: 'website',
    images: [
      {
        url: SITE_CONFIG.coverImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Prompt Engineering Vault`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `Prompt Engineering Vault // ${SITE_CONFIG.name}`,
    description: 'Battle-tested cognitive recursion loops, Casper memory bank schemas, and expert persona instructions.',
    creator: SITE_CONFIG.handle,
    images: [SITE_CONFIG.coverImage]
  }
};

export default function PromptsPage() {
  return (
    <>
      <PromptsListJsonLd prompts={MOCK_PROMPTS} />
      <PromptsView />
    </>
  );
}
