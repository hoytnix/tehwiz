import { Metadata } from 'next';
import { MenuView } from '@/modules/menu/MenuView';

export const metadata: Metadata = {
  title: 'System Index & Directory Navigation',
  description: 'Explore the complete index of sovereign edge AI systems, research repositories, prompt engineering vault, and architecture logs.'
};

export default function MenuPage() {
  return <MenuView />;
}
