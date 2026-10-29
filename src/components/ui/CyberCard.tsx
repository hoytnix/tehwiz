import React from 'react';

export interface CyberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  /** @deprecated Ignored. Kept so secondary pages compile unchanged. */
  glowColor?: string;
  /** @deprecated Ignored. Kept so secondary pages compile unchanged. */
  hoverEffect?: boolean;
  /** @deprecated Ignored. Kept so secondary pages compile unchanged. */
  specular?: boolean;
}

/** Quiet flat card: #12141C surface, 1px #232633 border. No glow, no lift. */
export const CyberCard: React.FC<CyberCardProps> = ({
  children,
  className = '',
  glowColor,
  hoverEffect,
  specular,
  ...props
}) => {
  return (
    <div
      className={`bg-card border border-edge ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
