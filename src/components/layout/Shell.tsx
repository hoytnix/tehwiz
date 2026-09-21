import React from 'react';
import { Header } from './Header';
import { TelemetryFooter } from './TelemetryFooter';

interface ShellProps {
  children: React.ReactNode;
}

export const Shell: React.FC<ShellProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-void text-slate-100 font-sans flex flex-col overflow-hidden relative selection:bg-indigo-500/30 selection:text-white">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-30 z-0"></div>

      {/* Luminous Ambient Background Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/15 blur-[140px] pointer-events-none animate-slow-glow"></div>
      <div className="absolute top-1/4 -right-40 w-[550px] h-[550px] rounded-full bg-purple-600/12 blur-[150px] pointer-events-none"></div>
      <div className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] rounded-full bg-cyan-600/10 blur-[160px] pointer-events-none"></div>

      {/* Top Navigation Bar */}
      <Header />

      {/* Main Content Viewport */}
      <main className="flex-1 overflow-hidden relative z-10 px-3 sm:px-4 pt-3 pb-2">
        <div className="w-full h-full rounded-2xl overflow-hidden glass-panel relative shadow-2xl specular-border flex flex-col">
          {children}
        </div>
      </main>

      {/* Micro Telemetry Footer */}
      <TelemetryFooter />
    </div>
  );
};
