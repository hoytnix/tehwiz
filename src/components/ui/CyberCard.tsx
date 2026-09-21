import React from 'react';

export interface CyberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: 'indigo' | 'purple' | 'cyan' | 'emerald' | 'amber' | 'none';
  specular?: boolean;
}

export const CyberCard: React.FC<CyberCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  glowColor = 'indigo',
  specular = true,
  ...props
}) => {
  const glowStyles = {
    indigo: 'hover:border-indigo-500/40 hover:shadow-[0_12px_40px_-10px_rgba(99,102,241,0.2)]',
    purple: 'hover:border-purple-500/40 hover:shadow-[0_12px_40px_-10px_rgba(168,85,247,0.2)]',
    cyan: 'hover:border-cyan-500/40 hover:shadow-[0_12px_40px_-10px_rgba(6,182,212,0.2)]',
    emerald: 'hover:border-emerald-500/40 hover:shadow-[0_12px_40px_-10px_rgba(16,185,129,0.2)]',
    amber: 'hover:border-amber-500/40 hover:shadow-[0_12px_40px_-10px_rgba(245,158,11,0.2)]',
    none: ''
  };

  return (
    <div 
      className={`
        glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300
        border border-white/[0.08]
        ${specular ? 'specular-border' : ''}
        ${hoverEffect ? `${glowStyles[glowColor]} hover:-translate-y-0.5` : ''}
        ${className}
      `}
      {...props}
    >
      {/* Dynamic ambient highlight */}
      {hoverEffect && (
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-transparent to-white/[0.03] opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      {children}
    </div>
  );
};
