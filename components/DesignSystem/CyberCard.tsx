import React from 'react';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const CyberCard: React.FC<CyberCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true 
}) => {
  return (
    <div className={`
        glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300
        ${hoverEffect ? 'hover:bg-white/10 hover:shadow-xl hover:shadow-indigo-500/10' : ''}
        ${className}
    `}>
        {/* Subtle highlight gradient on hover */}
        {hoverEffect && (
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/5 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
        )}
        {children}
    </div>
  );
};