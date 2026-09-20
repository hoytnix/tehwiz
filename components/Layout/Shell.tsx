import React, { useState, useEffect } from 'react';
import { AppView } from '../../types';
import { SYSTEM_NAME, APP_VERSION } from '../../constants';
import { APP_REGISTRY } from '../../config/appRegistry';

interface ShellProps {
  children: React.ReactNode;
  currentView: AppView;
  onChangeView: (view: AppView) => void;
}

export const Shell: React.FC<ShellProps> = ({ children, currentView, onChangeView }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-screen bg-deep-space text-slate-200 font-sans flex flex-col overflow-hidden relative selection:bg-indigo-500/30">
      
      {/* Ambient Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none"></div>

      {/* Top Bar - Glass */}
      <header className="h-16 flex items-center justify-between px-6 z-50 shrink-0 relative glass-panel border-b-0 border-b-white/5 mx-4 mt-4 rounded-2xl">
        <div className="flex items-center gap-4">
           {/* Logo / System Name */}
           <button 
             className="flex items-center gap-3 focus:outline-none group" 
             onClick={() => onChangeView(AppView.HOME)}
           >
             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <span className="material-icons text-white text-sm">terminal</span>
             </div>
             <div className="flex flex-col text-left">
                <h1 className="text-lg font-semibold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    {SYSTEM_NAME}
                </h1>
             </div>
           </button>

           {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center gap-1.5 ml-4">
             {APP_REGISTRY.map((item) => (
               <button
                 key={item.id}
                 onClick={() => onChangeView(item.id)}
                 className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                   currentView === item.id
                     ? 'bg-white/15 text-white border border-white/10 shadow-sm'
                     : 'text-slate-400 hover:bg-white/5 hover:text-white'
                 }`}
               >
                 <span className="material-icons text-sm opacity-70">{item.icon}</span>
                 <span>{item.label}</span>
               </button>
             ))}
           </nav>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center gap-6 text-xs font-medium text-slate-400">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
            <span>Online</span>
          </div>
          <div className="hidden sm:block font-mono opacity-70">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
          
          {/* Date with Calendar Icon */}
          <div className="hidden sm:flex items-center justify-center relative w-8 h-8" title={currentTime.toLocaleDateString()}>
            <span className="material-icons text-2xl text-slate-500">calendar_today</span>
            <span className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] font-bold text-slate-300 mt-px">
              {currentTime.getDate()}
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-200 p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-icons">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay - Glass */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute inset-0 z-40 bg-slate-900/60 backdrop-blur-xl pt-24 px-6">
            <div className="flex flex-col gap-3">
              {APP_REGISTRY.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onChangeView(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`p-4 rounded-xl text-left font-medium flex items-center gap-4 transition-all ${
                    currentView === item.id 
                      ? 'bg-white/10 text-white border border-white/10 shadow-lg' 
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="material-icons opacity-70">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative z-0 p-4">
         <div className="w-full h-full rounded-2xl overflow-hidden glass-panel relative shadow-2xl">
            {children}
         </div>
      </main>
    </div>
  );
};