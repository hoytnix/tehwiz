import React from 'react';
import { Header } from './Header';
import { TelemetryFooter } from './TelemetryFooter';

interface ShellProps {
  children: React.ReactNode;
}

export const Shell: React.FC<ShellProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-ink text-muted font-sans flex flex-col overflow-hidden relative">
      <Header />

      {/* Main Content Viewport */}
      <main className="flex-1 overflow-hidden relative px-4 sm:px-6 pt-4 pb-3">
        <div className="w-full h-full max-w-magazine mx-auto overflow-hidden bg-ink border border-edge flex flex-col">
          {children}
        </div>
      </main>

      <TelemetryFooter />
    </div>
  );
};
