import { Metadata } from 'next';
import { VlogView } from '@/modules/vlog';

export const metadata: Metadata = {
  title: 'Engineering Vlogs // Live Streams & Tech Journals',
  description: 'Zero-to-App-Store architectural journals, vibe-coding sessions, and AI game development walkthroughs by Michael Scott Hoyt.'
};

export default function VlogPage() {
  return <VlogView />;
}
