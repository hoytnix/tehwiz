import React from 'react';
import { VlogEntry } from '@/types';

interface FeaturedStreamProps {
  entry: VlogEntry;
}

export const FeaturedStream: React.FC<FeaturedStreamProps> = ({ entry }) => {
  return (
    <div className="mb-10">
      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 block">
        Featured Stream Broadcast
      </span>

      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 via-slate-900/80 to-black/90 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl">
        {/* Ambient Cyan Glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
          
          {/* Video Thumbnail with Play Button Overlay */}
          <a
            href={entry.videoUri}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-96 aspect-video rounded-2xl overflow-hidden relative group border border-white/10 shadow-xl shrink-0 cursor-pointer block bg-black"
          >
            {entry.thumbnailUrl ? (
              <img
                src={entry.thumbnailUrl}
                alt={entry.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                <span className="material-icons text-5xl text-cyan-400">smart_display</span>
              </div>
            )}

            {/* Dark Overlay with Glowing Play Beacon */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/40 group-hover:scale-110 transition-transform">
                <span className="material-icons text-2xl ml-0.5">play_arrow</span>
              </div>
            </div>

            <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-white font-semibold">
              Vlog
            </div>
          </a>

          {/* Video Information */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  LATEST
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <span className="material-icons text-xs">calendar_today</span>
                  {new Date(entry.timestamp).toLocaleDateString(undefined, { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
              </div>

              <a 
                href={entry.videoUri}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
                  {entry.title}
                </h3>
              </a>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {entry.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={entry.videoUri}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-600/30 flex items-center gap-2"
              >
                <span>Watch Full Stream</span>
                <span className="material-icons text-xs">open_in_new</span>
              </a>

              <span className="text-xs text-slate-400 font-mono">
                Zero-to-App-Store AI Workflows
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
