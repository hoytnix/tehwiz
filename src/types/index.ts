export enum AppView {
  HOME = 'HOME',
  PORTFOLIO = 'PORTFOLIO',
  PROMPTS = 'PROMPTS',
  BLOG = 'BLOG',
  VLOG = 'VLOG',
  MENU = 'MENU'
}

export interface VlogEntry {
  id: string;
  title: string;
  videoUri?: string;
  thumbnailUrl?: string;
  timestamp: number;
  description: string;
}

export interface PricingTier {
  plan: string;
  price: string;
  period?: string;
  description: string;
  badge?: string;
  highlighted?: boolean;
}

export interface ProjectLicense {
  name: string;
  url?: string;
  summary: string;
}

export interface ProjectLinks {
  liveUrl?: string;
  githubUrl?: string;
  githubUrls?: { label: string; url: string }[];
  huggingFaceUrl?: string;
  itchIoUrl?: string;
  licenseUrl?: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  links: ProjectLinks;
  license: ProjectLicense;
  pricing: PricingTier[];
  status: 'LIVE' | 'ARCHIVED' | 'CLASSIFIED' | 'ALPHA' | 'BETA' | 'PRE-ALPHA' | 'POC' | 'MVP';
  url?: string;
  hook?: string;
  agitation?: string;
  enemyFriction?: string;
  uniqueMechanism?: string;
  transformation?: string;
  highlights?: string[];
  specs?: ProjectSpec[];
  architectureNotes?: string;
}

export type PortfolioItem = Project;

export interface ThreatItem {
  title: string;
  url: string;
  source?: string;
  severity?: 'low' | 'medium' | 'high' | 'critical';
}

export interface PromptItem {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
}
