import React from 'react';
import { VlogEntry } from '@/types';
import { CyberCard } from '@/components/ui/CyberCard';

interface VlogCardProps {
  entry: VlogEntry;
}

export const VlogCard: React.FC<VlogCardProps> = ({ entry }) => {
  return (
    <CyberCard 
      glowColor="cyan"
      className="flex flex-col p-5 bg-slate-950/70 border border-white/[0.08]"
    >
      <div className="flex items-start gap-4 mb-4">
        <a
          href={entry.videoUri}
          target="_blank"
          rel="noopener noreferrer"
          className="w-32 aspect-video rounded-xl overflow-hidden relative group shrink-0 bg-black border border-white/10"
        >
          {entry.thumbnailUrl ? (
            <img
              src={entry.thumbnailUrl}
              alt={entry.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="material-icons text-xl text-cyan-400">smart_display</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all flex items-center justify-center">
            <span className="material-icons text-xl text-white drop-shadow">play_circle</span>
          </div>
        </a>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1 text-[11px] text-slate-400 font-mono">
            <span className="material-icons text-xs">calendar_today</span>
            <span>{new Date(entry.timestamp).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          </div>
          <a
            href={entry.videoUri}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <h4 className="text-sm font-bold text-white leading-tight line-clamp-2 mb-1.5">
              {entry.title}
            </h4>
          </a>
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {entry.description}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
        <span className="text-[10px] font-mono text-cyan-400 font-medium">YouTube Video Archive</span>
        <a
          href={entry.videoUri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 hover:text-white font-semibold flex items-center gap-1"
        >
          <span>Watch</span>
          <span className="material-icons text-xs">arrow_forward</span>
        </a>
      </div>
    </CyberCard>
  );
};
