import React from 'react';
import { AppView } from '../../types';
import { APP_REGISTRY } from '../../config/appRegistry';

interface HomeViewProps {
  onLaunchApp: (view: AppView) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onLaunchApp }) => {
  const displayApps = APP_REGISTRY.filter(app => app.id !== AppView.HOME);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden bg-transparent">
      
      {/* Hero Section */}
      <div className="text-center mb-12 animate-[float_6s_ease-in-out_infinite]">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-purple-200 drop-shadow-sm mb-2">
            Hello, World!
        </h1>
        <p className="text-slate-400 text-sm md:text-base font-light tracking-wide">
            Building what’s next since the App Store began: coding with prose since 2009.
        </p>
      </div>

      {/* App Grid */}
      <div className="z-10 grid grid-cols-2 md:grid-cols-4 gap-6 p-4 max-w-5xl">
        {displayApps.map((app) => (
          <button
            key={app.id}
            onClick={() => onLaunchApp(app.id)}
            className="group flex flex-col items-center gap-4 focus:outline-none transition-all duration-300 hover:-translate-y-2"
          >
            {/* App Icon Container */}
            <div className={`
              w-20 h-20 md:w-28 md:h-28
              rounded-2xl
              bg-white/5
              backdrop-blur-md
              border border-white/10
              flex items-center justify-center 
              relative 
              shadow-lg
              group-hover:shadow-indigo-500/20
              group-hover:bg-white/10
              group-hover:border-white/20
              transition-all duration-300
              overflow-hidden
            `}>
               {/* Subtle Gradient Background */}
               <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${app.gradient}`} />
               
               <span className={`material-icons text-4xl md:text-5xl text-white/80 group-hover:text-white transition-colors drop-shadow-lg`}>
                 {app.icon}
               </span>
            </div>
            
            {/* App Label */}
            <span className="text-xs md:text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
              {app.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};