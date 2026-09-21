import React from 'react';
import Link from 'next/link';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'emerald' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

export interface CyberButtonProps
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  href?: string;
  target?: string;
  rel?: string;
}

export const CyberButton: React.FC<CyberButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  icon, 
  iconPosition = 'left',
  children, 
  className = '', 
  href,
  target,
  rel,
  ...props 
}) => {
  const sizeStyles = {
    sm: "py-1.5 px-3 text-xs gap-1.5 rounded-lg",
    md: "py-2.5 px-4 text-xs font-semibold gap-2 rounded-xl",
    lg: "py-3.5 px-6 text-sm font-bold gap-2.5 rounded-xl"
  };

  const variants = {
    primary: "bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-indigo-400 hover:to-purple-500 border border-indigo-400/30",
    secondary: "bg-white/[0.06] text-slate-200 hover:bg-white/[0.12] hover:text-white backdrop-blur-md border border-white/[0.08] hover:border-white/20 shadow-sm",
    outline: "bg-transparent text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/10 hover:border-indigo-400/50 hover:text-white",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent",
    emerald: "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:from-emerald-400 hover:to-teal-500 border border-emerald-400/30",
    cyan: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:from-cyan-400 hover:to-blue-500 border border-cyan-400/30"
  };

  const combinedClasses = `
    inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200
    active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer
    ${sizeStyles[size]}
    ${variants[variant]} 
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="material-icons text-base leading-none shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="material-icons text-base leading-none shrink-0">{icon}</span>
      )}
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('//')) {
      return (
        <a 
          href={href} 
          target={target || '_blank'} 
          rel={rel || 'noopener noreferrer'} 
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
};
