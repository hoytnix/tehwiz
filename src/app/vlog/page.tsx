import { Metadata } from 'next';
import { VlogView, MOCK_ENTRIES } from '@/modules/vlog';
import { VlogListJsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Engineering Vlogs // Live Streams & Tech Journals',
  description: 'Zero-to-App-Store architectural journals, vibe-coding sessions, and AI game development walkthroughs by Michael Scott Hoyt.',
  openGraph: {
    title: `Engineering Vlogs // ${SITE_CONFIG.name}`,
    description: 'Zero-to-App-Store architectural journals, vibe-coding sessions, and AI game development walkthroughs by Michael Scott Hoyt.',
    url: `${SITE_CONFIG.url}/vlog`,
    type: 'website',
    images: [
      {
        url: SITE_CONFIG.coverImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Engineering Vlogs`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `Engineering Vlogs // ${SITE_CONFIG.name}`,
    description: 'Zero-to-App-Store architectural journals, vibe-coding sessions, and AI game development walkthroughs.',
    creator: SITE_CONFIG.handle,
    images: [SITE_CONFIG.coverImage]
  }
};

export default function VlogPage() {
  return (
    <>
      <VlogListJsonLd entries={MOCK_ENTRIES} />
      <VlogView />
    </>
  );
}
