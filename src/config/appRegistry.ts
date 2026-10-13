import { AppView } from '../types';

export interface AppConfig {
  id: AppView;
  href: string;
  label: string;
  shortLabel?: string;
  description: string;
  badge?: string;
  icon: string;
  gradient: string;
  glowColor: 'indigo' | 'purple' | 'cyan' | 'emerald' | 'amber';
  textColor: string;
  glow: string;
  borderColor: string;
}

export const APP_REGISTRY: AppConfig[] = [
  { 
    id: AppView.HOME, 
    href: '/',
    label: 'Command Center', 
    shortLabel: 'Home',
    description: 'System overview, featured engineering artifacts, and primary navigation hub.',
    icon: 'dashboard',
    gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    glowColor: 'indigo',
    textColor: 'text-indigo-400',
    glow: 'shadow-[0_0_30px_rgba(99,102,241,0.3)]',
    borderColor: 'border-indigo-500/30'
  },
  { 
    id: AppView.PORTFOLIO, 
    href: '/portfolio',
    label: 'Engineering Projects', 
    shortLabel: 'Projects',
    description: '15 sovereign AI systems, edge-native engines, computer-vision scanners, and Web3 apps.',
    badge: '15 Active',
    icon: 'layers', 
    gradient: 'from-indigo-500 via-indigo-600 to-purple-700',
    glowColor: 'indigo',
    textColor: 'text-indigo-300',
    glow: 'shadow-[0_0_30px_rgba(99,102,241,0.3)]',
    borderColor: 'border-indigo-500/40'
  },
  { 
    id: AppView.PROMPTS, 
    href: '/prompts',
    label: 'Prompt Engineering Vault', 
    shortLabel: 'Prompts',
    description: 'Production cognitive recursion loops, self-correction scaffolds, and expert personas.',
    badge: 'Curated',
    icon: 'terminal', 
    gradient: 'from-amber-500 via-orange-600 to-rose-600',
    glowColor: 'amber',
    textColor: 'text-amber-400',
    glow: 'shadow-[0_0_30px_rgba(245,158,11,0.3)]',
    borderColor: 'border-amber-500/40'
  },
  { 
    id: AppView.BLOG, 
    href: '/blog',
    label: 'Engineering Blog', 
    shortLabel: 'Blog',
    description: 'Deep architectural writeups, sovereign AI systems analysis, and engineering reflections.',
    icon: 'article', 
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    glowColor: 'emerald',
    textColor: 'text-emerald-400',
    glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
    borderColor: 'border-emerald-500/40'
  },
  { 
    id: AppView.VLOG, 
    href: '/vlog',
    label: 'Engineering Vlogs', 
    shortLabel: 'Vlogs',
    description: 'Behind-the-scenes streams, architecture walkthroughs, and vibe-coding logs.',
    badge: 'Streams',
    icon: 'smart_display', 
    gradient: 'from-cyan-500 via-teal-600 to-emerald-600',
    glowColor: 'cyan',
    textColor: 'text-cyan-400',
    glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    borderColor: 'border-cyan-500/40'
  }
];

export const getNavItems = () => APP_REGISTRY;
