import { AppView } from '../types';

export interface AppConfig {
  id: AppView;
  label: string;
  icon: string;
  gradient: string;
  textColor: string;
  glow: string;
  borderColor: string;
}

export const APP_REGISTRY: AppConfig[] = [
  { 
    id: AppView.HOME, 
    label: 'HOME', 
    icon: 'home',
    gradient: 'from-gray-800 to-black',
    textColor: 'text-gray-400',
    glow: '',
    borderColor: 'border-gray-800'
  },
  { 
    id: AppView.VLOG, 
    label: 'VLOGS', 
    icon: 'videocam', 
    gradient: 'from-leet-cyan to-[#008f8f]',
    textColor: 'text-leet-cyan',
    glow: 'shadow-[0_0_30px_rgba(0,255,255,0.3)]',
    borderColor: 'border-leet-cyan/50'
  },
  { 
    id: AppView.PORTFOLIO, 
    label: 'PROJECTS', 
    icon: 'folder_special', 
    gradient: 'from-leet-purple to-[#7f00aa]',
    textColor: 'text-leet-purple',
    glow: 'shadow-[0_0_30px_rgba(191,0,255,0.3)]',
    borderColor: 'border-leet-purple/50'
  },
  { 
    id: AppView.PROMPTS, 
    label: 'PROMPTS', 
    icon: 'integration_instructions', 
    gradient: 'from-yellow-400 to-[#aa7700]',
    textColor: 'text-yellow-400',
    glow: 'shadow-[0_0_30px_rgba(250,204,21,0.3)]',
    borderColor: 'border-yellow-400/50'
  }
];

export const getNavItems = () => APP_REGISTRY;