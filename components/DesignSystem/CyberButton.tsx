import React from 'react';

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: string;
  children: React.ReactNode;
}

export const CyberButton: React.FC<CyberButtonProps> = ({ 
  variant = 'primary', 
  icon, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "py-2.5 px-5 rounded-xl font-medium tracking-wide flex items-center justify-center gap-2 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/30",
    secondary: "bg-white/10 text-slate-200 hover:bg-white/20 hover:text-white backdrop-blur-md",
    outline: "bg-transparent text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/10 hover:border-indigo-500/50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="material-icons text-sm">{icon}</span>}
      {children}
    </button>
  );
};