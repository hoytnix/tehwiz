'use client';

import React, { useState } from 'react';

interface PermalinkButtonProps {
  path?: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  size?: 'sm' | 'md';
}

export const PermalinkButton: React.FC<PermalinkButtonProps> = ({
  path,
  label = 'Permalink',
  copiedLabel = 'Permalink Copied!',
  className = '',
  size = 'sm'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    let url = '';
    if (typeof window !== 'undefined') {
      if (path) {
        url = path.startsWith('http') ? path : `${window.location.origin}${path.startsWith('/') ? '' : '/'}${path}`;
      } else {
        url = window.location.href;
      }
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const sizeClasses = size === 'sm'
    ? 'px-2.5 py-1.5 text-xs'
    : 'px-3 py-2 text-xs';

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`rounded-xl border font-medium font-mono flex items-center gap-1.5 transition-all cursor-pointer ${sizeClasses} ${
        copied
          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-500/20'
          : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-slate-300 hover:text-white'
      } ${className}`}
      title="Copy permalink to clipboard"
    >
      <span className="material-icons text-sm">
        {copied ? 'check' : 'link'}
      </span>
      <span>{copied ? copiedLabel : label}</span>
    </button>
  );
};
