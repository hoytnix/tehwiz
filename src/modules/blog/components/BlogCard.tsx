'use client';

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '../types';
import { CyberCard } from '@/components/ui/CyberCard';

export interface BlogCardProps {
  post: BlogPost;
  onTagClick?: (tag: string) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onTagClick }) => {
  return (
    <CyberCard
      glowColor="emerald"
      className="flex flex-col justify-between p-6 bg-gradient-to-br from-[#0b101b] via-[#090d16] to-[#04060a] border border-white/[0.08] hover:border-emerald-500/40 group transition-all duration-300"
    >
      <div>
        {/* Card Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            {post.featured && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                FEATURED
              </span>
            )}
            <span className="text-xs font-mono text-slate-400">
              {post.publishedAt}
            </span>
          </div>

          {/* Reading Time Badge */}
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/[0.05] text-teal-300 border border-teal-500/20">
            <span className="material-icons text-[12px] text-teal-400">schedule</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
          <Link href={`/blog/${post.slug}`} className="hover:underline cursor-pointer">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6">
          {post.tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={(e) => {
                if (onTagClick) {
                  e.preventDefault();
                  onTagClick(tag);
                }
              }}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 hover:text-emerald-300 hover:bg-emerald-500/10 border border-white/[0.06] hover:border-emerald-500/30 transition-all cursor-pointer"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Footer Meta & Call-to-action */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
        {/* Author info */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-xs font-bold text-white shadow-sm border border-white/20">
            {post.author.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white leading-tight">
              {post.author.name}
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              {post.author.handle}
            </span>
          </div>
        </div>

        {/* Link Arrow */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-300 hover:text-emerald-200 transition-colors group-hover:translate-x-0.5 duration-200"
        >
          <span>Read Post</span>
          <span className="material-icons text-sm">arrow_forward</span>
        </Link>
      </div>
    </CyberCard>
  );
};
