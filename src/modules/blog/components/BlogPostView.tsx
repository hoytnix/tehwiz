'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { BlogPost } from '../types';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { PermalinkButton } from '@/components/ui/PermalinkButton';
import { ReadingProgressBar } from './ReadingProgressBar';

export interface BlogPostViewProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({ post }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <article
      ref={containerRef}
      className="h-full w-full overflow-y-auto bg-[#070b12] text-slate-200 selection:bg-cyan-500/30 selection:text-white"
    >
      <ReadingProgressBar
        readingTimeMinutes={post.readingTime}
        articleTitle={post.title}
        containerRef={containerRef}
      />

      {/* Top Breadcrumb Nav Bar */}
      <div className="border-b border-cyan-500/10 bg-[#0a0f18]/90 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between text-xs font-mono">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>←</span> Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-slate-400">
            <span>{post.readingTime} min read</span>
            <span className="text-cyan-500/40">|</span>
            <span>{post.wordCount} words</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Post Metadata Card */}
        <header className="mb-10 pb-8 border-b border-cyan-500/20">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider uppercase border border-cyan-500/30 bg-cyan-950/30 text-cyan-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-cyan-500/15 bg-slate-900/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-cyan-400/40 bg-cyan-950/80 flex items-center justify-center font-mono font-bold text-cyan-300 text-sm">
                MSH
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-200">
                  {post.author?.name || 'Michael Scott Hoyt'}
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  {post.publishedAt}
                </p>
              </div>
            </div>
            <PermalinkButton path={`/blog/${post.slug}`} />
          </div>
        </header>

        {/* Post Content */}
        <main className="text-slate-300">
          <MarkdownRenderer content={post.content} />
        </main>

        {/* Article Footer Navigation */}
        <footer className="mt-14 pt-8 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>←</span> Back to All Articles
          </Link>
          <PermalinkButton
            path={`/blog/${post.slug}`}
            label="Share Article"
            copiedLabel="Link Copied!"
          />
        </footer>
      </div>
    </article>
  );
};
