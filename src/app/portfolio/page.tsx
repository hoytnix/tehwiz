import { Metadata } from 'next';
import { PortfolioCatalog } from '@/modules/portfolio';

export const metadata: Metadata = {
  title: 'Systems Directory // 15 Production Projects',
  description: '15 sovereign AI systems, edge-native engines, computer-vision scanners, and Web3 apps developed by Michael Scott Hoyt.'
};

export default function PortfolioPage() {
  return <PortfolioCatalog />;
}
