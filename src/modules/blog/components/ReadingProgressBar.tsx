'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { formatRemainingTime } from '../utils/readingTime';

export interface ReadingProgressBarProps {
  readingTimeMinutes: number;
  articleTitle?: string;
  containerRef?: React.RefObject<HTMLElement | null>;
  className?: string;
  showBackLink?: boolean;
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({
  readingTimeMinutes,
  articleTitle,
  containerRef,
  className = '',
  showBackLink = true
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const barWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Locate scrollable target: containerRef -> parent overflow container -> window
    let scrollTarget: HTMLElement | Window | null = containerRef?.current || null;

    if (!scrollTarget && barWrapperRef.current) {
      // Find nearest scrollable parent
      let parent = barWrapperRef.current.parentElement;
      while (parent) {
        const style = window.getComputedStyle(parent);
        if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
          scrollTarget = parent;
          break;
        }
        parent = parent.parentElement;
      }
    }

    if (!scrollTarget) {
      scrollTarget = window;
    }

    const calculateProgress = () => {
      let currentScroll = 0;
      let maxScroll = 1;

      if (scrollTarget instanceof Window) {
        currentScroll = window.scrollY || document.documentElement.scrollTop;
        maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      } else if (scrollTarget instanceof HTMLElement) {
        currentScroll = scrollTarget.scrollTop;
        maxScroll = scrollTarget.scrollHeight - scrollTarget.clientHeight;
      }

      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = Math.min(1, Math.max(0, currentScroll / maxScroll));
      setScrollProgress(progress);
    };

    // Calculate initial progress
    calculateProgress();

    // Attach scroll listener
    const targetElement = scrollTarget;
    targetElement.addEventListener('scroll', calculateProgress, { passive: true });
    window.addEventListener('resize', calculateProgress, { passive: true });

    return () => {
      targetElement.removeEventListener('scroll', calculateProgress);
      window.removeEventListener('resize', calculateProgress);
    };
  }, [containerRef]);

  const { label, isComplete } = formatRemainingTime(readingTimeMinutes, scrollProgress);
  const percent = Math.round(scrollProgress * 100);

  return (
    <div
      ref={barWrapperRef}
      className={`sticky top-0 z-30 w-full backdrop-blur-xl bg-[#090d16]/85 border-b border-white/[0.08] transition-all duration-200 ${className}`}
    >
      {/* Visual Progress Bar Strip (Like Medium at top) */}
      <div className="h-1 w-full bg-white/[0.06] overflow-hidden relative">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(52,211,153,0.8)]"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Reading Telemetry Readout */}
      <div className="px-4 py-2 sm:px-6 flex items-center justify-between gap-4 text-xs font-mono">
        {/* Left: Back to blog link & title preview */}
        <div className="flex items-center gap-3 min-w-0">
          {showBackLink && (
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
              title="Return to Engineering Blog"
            >
              <span className="material-icons text-sm">arrow_back</span>
              <span className="hidden sm:inline font-medium">Blog</span>
            </Link>
          )}

          {articleTitle && (
            <>
              <span className="hidden sm:inline text-slate-600 select-none">/</span>
              <span
                className="truncate font-medium text-slate-300 max-w-[180px] sm:max-w-md"
                title={articleTitle}
              >
                {articleTitle}
              </span>
            </>
          )}
        </div>

        {/* Right: Medium-style time left indicator & percentage */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border transition-colors ${
              isComplete
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                : 'bg-white/[0.06] text-slate-300 border-white/10'
            }`}
          >
            <span
              className={`material-icons text-xs ${
                isComplete ? 'text-emerald-400' : 'text-teal-400 animate-pulse'
              }`}
            >
              {isComplete ? 'check_circle' : 'schedule'}
            </span>
            <span>{label}</span>
          </div>

          <span className="text-[10px] text-slate-400 font-bold w-9 text-right">
            {percent}%
          </span>
        </div>
      </div>
    </div>
  );
};
