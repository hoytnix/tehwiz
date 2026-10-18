import { Metadata } from 'next';
import { HomeView } from '@/modules/home';
import { HomePageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: {
    absolute: 'TehWiz Productions // Michael Scott Hoyt'
  },
  description: 'Senior systems architect shipping sovereign edge AI models, computer vision tools, and high-performance applications since 2009.'
};

export default function HomePage() {
  return (
    <>
      <HomePageJsonLd />
      <HomeView />
    </>
  );
}
