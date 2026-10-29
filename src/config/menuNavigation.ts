export interface NavSectionItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  isExternal?: boolean;
  icon: string;
  badge?: string;
  badgeColor?: string;
  category?: string;
}

export interface NavSection {
  title: string;
  description: string;
  icon: string;
  tagline: string;
  accentColor: 'indigo' | 'purple' | 'amber' | 'cyan' | 'emerald' | 'rose';
  viewAllHref?: string;
  viewAllLabel?: string;
  items: NavSectionItem[];
}

export const MENU_SECTIONS: NavSection[] = [
  {
    title: 'Core Engine & Command Hubs',
    tagline: 'Primary Workspaces & Interactive Portals',
    description: 'Direct gateways into TehWiz system architecture, engineering archives, and media channels.',
    icon: 'dashboard_customize',
    accentColor: 'indigo',
    items: [
      {
        id: 'home',
        title: 'Command Center',
        subtitle: 'Root Overview',
        description: 'Executive system summary, tech arsenal breakdown, architectural pillars, and flagship highlights.',
        href: '/',
        icon: 'dashboard',
        badge: 'Core Hub',
        badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
      },
      {
        id: 'portfolio',
        title: 'Engineering Projects',
        subtitle: 'Sovereign Systems',
        description: 'Production catalog of sovereign on-device AI engines, WebGPU apps, diagnostic tools, games, and agent infrastructure.',
        href: '/portfolio',
        icon: 'layers',
        badge: 'Catalog',
        badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
      },
      {
        id: 'prompts',
        title: 'Prompt Engineering Vault',
        subtitle: 'Cognitive Recursion Library',
        description: 'Curated collection of production system prompts, recursive self-correction scaffolds, and role personas.',
        href: '/prompts',
        icon: 'terminal',
        badge: 'Vault',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
      },
      {
        id: 'blog',
        title: 'Engineering Blog',
        subtitle: 'Architecture & Edge AI Essays',
        description: 'Deep-dive architectural essays, on-device AI engineering breakdowns, WebGPU pipelines, and sovereign systems.',
        href: '/blog',
        icon: 'article',
        badge: 'Articles',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
      },
      {
        id: 'vlog',
        title: 'Engineering Vlogs',
        subtitle: 'Streams & Architecture Logs',
        description: 'Behind-the-scenes streams, architecture breakdown videos, live builds, and vibe-coding sessions.',
        href: '/vlog',
        icon: 'smart_display',
        badge: 'Streams',
        badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
      }
    ]
  },
  {
    title: 'Flagship Production Systems',
    tagline: '100% Sovereign On-Device Implementations',
    description: 'Direct access to flagship applications deployed and running 100% on edge hardware.',
    icon: 'rocket_launch',
    accentColor: 'purple',
    viewAllHref: '/portfolio',
    viewAllLabel: 'View all projects',
    items: [
      {
        id: 'yuli-live',
        title: 'Yuli Cognitive Engine',
        subtitle: 'F_2^4 Hypercube Cognitive Model',
        description: 'Live autonomous cognitive companion running on WebGPU with real-time Myers-Briggs (MBTI) detection.',
        href: 'https://yuli.tehwiz.com',
        isExternal: true,
        icon: 'psychology',
        badge: 'WebGPU 110 TPS',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
      },
      {
        id: 'purple-canary-live',
        title: 'Purple Canary',
        subtitle: 'Forensic Reagent Analysis Scanner',
        description: 'Objective computer vision forensic scanner detecting adulterants in substances with ambient-lighting compensation.',
        href: 'https://purplecanarylab.com',
        isExternal: true,
        icon: 'medical_services',
        badge: 'Zero-Telemetry',
        badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
      },
      {
        id: 'aevloc-live',
        title: 'Aevloc Reputation Firewall',
        subtitle: 'Local Business Maps Booster',
        description: 'Automated positive review routing and negative feedback firewall increasing Google Maps rank by +40%.',
        href: 'https://aevloc.com',
        isExternal: true,
        icon: 'shield',
        badge: 'SaaS Engine',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
      },
      {
        id: 'vibe-code-live',
        title: 'Ramen Nights & Budget Bites',
        subtitle: 'Tokyo Economics Capstone Sim',
        description: 'Found, operate, and scale a ramen franchise across five iconic Tokyo districts in a brutal culinary management challenge.',
        href: 'https://tehwiz.itch.io/ramen-nights-and-budget-bites',
        isExternal: true,
        icon: 'sports_esports',
        badge: 'Itch.io Live',
        badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30'
      }
    ]
  },
  {
    title: 'Developer Network & Social Nodes',
    tagline: 'Code Repositories & Communications',
    description: 'Connect directly with Michael Scott Hoyt (@hoytnix) across open-source and social platforms.',
    icon: 'share',
    accentColor: 'cyan',
    items: [
      {
        id: 'github',
        title: 'GitHub Organization',
        subtitle: 'Source Code & Repositories',
        description: 'Open-source repositories, cognitive models, WebGPU implementations, and documentation.',
        href: 'https://github.com/hoytnix',
        isExternal: true,
        icon: 'code',
        badge: '@hoytnix',
        badgeColor: 'bg-white/10 text-slate-200 border-white/20'
      },
      {
        id: 'youtube',
        title: 'YouTube Channel',
        subtitle: 'Engineering Streams & Tutorials',
        description: 'Deep-dive architectural breakdowns, system walkthroughs, and technical development vlogs.',
        href: 'https://www.youtube.com/@MichaelHoyt',
        isExternal: true,
        icon: 'play_circle',
        badge: '@MichaelHoyt',
        badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30'
      },
      {
        id: 'huggingface',
        title: 'Hugging Face Hub',
        subtitle: 'Model Weights & Checkpoints',
        description: 'Custom fine-tuned GGUF checkpoints, tokenizer configs, and quantized edge cognitive models.',
        href: 'https://huggingface.co/economyofdreams/',
        isExternal: true,
        icon: 'hub',
        badge: 'Weights',
        badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      }
    ]
  }
];
