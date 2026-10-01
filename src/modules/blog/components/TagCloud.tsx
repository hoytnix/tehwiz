'use client';

import React from 'react';
import Link from 'next/link';
import { TagCount } from '../types';

export interface TagCloudProps {
  tags: TagCount[] | string[];
  selectedTag?: string | null;
  onSelectTag?: (tag: string | null) => void;
  showCounts?: boolean;
  showAllOption?: boolean;
  totalArticlesCount?: number;
  asLinks?: boolean;
  className?: string;
  size?: 'sm' | 'md';
}

export const TagCloud: React.FC<TagCloudProps> = ({
  tags,
  selectedTag = null,
  onSelectTag,
  showCounts = true,
  showAllOption = true,
  totalArticlesCount,
  asLinks = false,
  className = '',
  size = 'md'
}) => {
  // Normalize tags to { tag, count }
  const normalizedTags: TagCount[] = tags.map((t) => {
    if (typeof t === 'string') {
      return { tag: t, count: 1 };
    }
    return t;
  });

  const totalCount =
    totalArticlesCount ??
    normalizedTags.reduce((acc, curr) => acc + curr.count, 0);

  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-1 gap-1.5',
    md: 'text-xs px-3 py-1.5 gap-2'
  };

  const renderTagPill = (
    label: string,
    count: number | null,
    isSelected: boolean,
    onClick?: () => void,
    href?: string
  ) => {
    const pillClasses = `
      inline-flex items-center rounded-xl font-mono font-medium transition-all duration-200 cursor-pointer select-none border
      ${sizeClasses[size]}
      ${
        isSelected
          ? 'bg-gradient-to-r from-emerald-500/25 to-teal-500/25 text-emerald-300 border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
          : 'bg-white/[0.04] text-slate-300 border-white/[0.08] hover:bg-white/[0.09] hover:text-white hover:border-white/20'
      }
    `;

    const content = (
      <>
        <span className="opacity-70 text-[10px]">#</span>
        <span>{label}</span>
        {showCounts && count !== null && (
          <span
            className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
              isSelected
                ? 'bg-emerald-400/20 text-emerald-200'
                : 'bg-white/10 text-slate-400'
            }`}
          >
            {count}
          </span>
        )}
      </>
    );

    if (asLinks && href) {
      return (
        <Link key={label} href={href} className={pillClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        key={label}
        type="button"
        onClick={onClick}
        className={pillClasses}
        aria-pressed={isSelected}
      >
        {content}
      </button>
    );
  };

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {/* "All" Filter Button */}
      {showAllOption &&
        renderTagPill(
          'All Topics',
          totalCount,
          selectedTag === null || selectedTag === undefined,
          () => onSelectTag?.(null),
          '/blog'
        )}

      {/* Tag List */}
      {normalizedTags.map(({ tag, count }) => {
        const isSelected = selectedTag?.toLowerCase() === tag.toLowerCase();
        const href = `/blog?tag=${encodeURIComponent(tag)}`;

        return renderTagPill(
          tag,
          count,
          isSelected,
          () => onSelectTag?.(isSelected ? null : tag),
          href
        );
      })}
    </div>
  );
};
