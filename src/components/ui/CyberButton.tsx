import React from 'react';
import Link from 'next/link';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'emerald' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  /** @deprecated Ignored. Kept so secondary pages compile unchanged. */
  icon?: string;
  /** @deprecated Ignored. Kept so secondary pages compile unchanged. */
  iconPosition?: 'left' | 'right';
}

export interface CyberButtonProps
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  href?: string;
  target?: string;
  rel?: string;
}

/** Quiet buttons: solid violet primary, hairline secondary. No gradients, no glows. */
export const CyberButton: React.FC<CyberButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  target,
  rel,
  icon,
  iconPosition,
  ...props
}) => {
  const sizeStyles = {
    sm: "py-1.5 px-3 text-xs gap-1.5",
    md: "py-2.5 px-4 text-sm font-medium gap-2",
    lg: "py-3 px-6 text-base font-medium gap-2"
  };

  const variants = {
    primary: "bg-accent text-ink hover:opacity-90",
    secondary: "bg-transparent text-bone border border-edge hover:border-accent",
    outline: "bg-transparent text-accent border border-accent hover:opacity-90",
    ghost: "bg-transparent text-muted hover:text-bone",
    emerald: "bg-transparent text-bone border border-edge hover:border-accent",
    cyan: "bg-transparent text-bone border border-edge hover:border-accent",
  };

  const combinedClasses = `
    inline-flex items-center justify-center font-medium tracking-wide transition-colors
    disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer
    ${sizeStyles[size]}
    ${variants[variant]}
    ${className}
  `;

  const content = <>{children}</>;

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
