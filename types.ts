
export enum AppView {
  HOME = 'HOME',
  CHAT = 'CHAT',
  VLOG = 'VLOG',
  PORTFOLIO = 'PORTFOLIO',
  PROMPTS = 'PROMPTS'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: number;
  isError?: boolean;
  images?: { data: string; mimeType: string }[];
  image?: string; // Legacy support
  mimeType?: string; // Legacy support
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
  licenseUrl?: string;
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