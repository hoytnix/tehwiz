import React, { useState } from 'react';
import { VlogEntry } from '../../types';
import { MOCK_ENTRIES } from '../../data/vlogData';

export const VlogView: React.FC = () => {
  const [entries] = useState<VlogEntry[]>(MOCK_ENTRIES);

  return (
    <div className="h-full flex flex-col p-6 bg-black/90 font-mono overflow-y-auto">
        <div className="flex justify-between items-center mb-6 border-b border-leet-cyan/30 pb-4">
            <h2 className="text-2xl text-leet-cyan font-bold flex items-center gap-2">
                <span className="material-icons text-2xl">videocam</span>
                VLOG_ARCHIVE
            </h2>
            <div className="text-xs text-leet-cyan/50">
                /var/www/vlogs
            </div>
        </div>

        <div className="space-y-4">
            {entries.map((entry) => (
                <div key={entry.id} className="bg-gray-900/50 border border-gray-800 p-4 rounded hover:border-leet-cyan/50 transition-all group flex gap-4 items-start relative overflow-hidden">
                    {/* Thumbnail */}
                    <a 
                        href={entry.videoUri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-40 h-24 bg-black border border-leet-cyan/20 rounded flex items-center justify-center group-hover:bg-leet-cyan/10 transition-colors flex-shrink-0 relative overflow-hidden"
                    >
                        {entry.thumbnailUrl ? (
                            <>
                                <img 
                                    src={entry.thumbnailUrl} 
                                    alt={entry.title} 
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-transparent transition-all">
                                     <span className="material-icons text-4xl text-leet-cyan/80 drop-shadow-lg">play_arrow</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-scanline opacity-0 group-hover:opacity-100" />
                                <span className="material-icons text-4xl text-leet-cyan/50 group-hover:text-leet-cyan">play_arrow</span>
                            </>
                        )}
                    </a>

                    <div className="flex-1 min-w-0 flex flex-col h-full justify-between py-1">
                        <div>
                            <div className="flex justify-between items-start">
                                <a href={entry.videoUri} target="_blank" rel="noopener noreferrer" className="group-hover:underline decoration-leet-cyan underline-offset-4">
                                    <h3 className="font-bold text-lg text-gray-200 group-hover:text-leet-cyan truncate pr-4 leading-tight">
                                        {entry.title}
                                    </h3>
                                </a>
                            </div>
                            <p className="text-sm text-gray-400 mt-2 line-clamp-2 font-light">
                                {entry.description}
                            </p>
                        </div>
                        
                        <div className="flex justify-between items-end mt-2">
                             <div className="flex gap-4 text-xs text-leet-cyan/60 font-mono">
                                <span className="flex items-center gap-1">
                                    <span className="material-icons text-xs">calendar_today</span>
                                    {new Date(entry.timestamp).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                </span>
                            </div>
                            
                            <a 
                                href={entry.videoUri} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-xs text-leet-cyan border border-leet-cyan/30 px-3 py-1 rounded hover:bg-leet-cyan hover:text-black transition-colors flex items-center gap-1 uppercase tracking-wider"
                            >
                                Watch Stream <span className="material-icons text-xs">open_in_new</span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};
