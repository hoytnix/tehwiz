import { Metadata } from 'next';
import { PromptsView } from '@/modules/prompts';

export const metadata: Metadata = {
  title: 'Prompt Engineering Vault // Cognitive Architectures',
  description: 'Battle-tested cognitive recursion loops, Casper memory bank schemas, and expert persona instructions.'
};

export default function PromptsPage() {
  return <PromptsView />;
}
