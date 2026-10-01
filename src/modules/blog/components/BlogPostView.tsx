'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { BlogPost } from '../types';
import { ReadingProgressBar } from './ReadingProgressBar';
import { TagCloud } from './TagCloud';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PermalinkButton } from '@/components/ui/PermalinkButton';
import { CyberButton } from '@/components/ui/CyberButton';
import { CyberCard } from '@/components/ui/CyberCard';

export interface BlogPostViewProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({
  post,
  relatedPosts = []
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="h-full w-full flex flex-col overflow-y-auto pb-32 bg-transparent text-slate-100 relative"
    >
      {/* Medium-style Reading Progress Bar Sticky at Top */}
      <ReadingProgressBar
        readingTimeMinutes={post.readingTime}
        articleTitle={post.title}
        containerRef={containerRef}
      />

      <div className="max-w-4xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-8">
        {/* Navigation & Breadcrumbs Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <CyberButton
              variant="secondary"
              size="sm"
              icon="arrow_back"
              href="/blog"
            >
              All Articles
            </CyberButton>

            <Breadcrumbs
              items={[
                { label: 'Engineering Blog', href: '/blog', icon: 'article' },
                { label: post.title }
              ]}
              className="hidden sm:flex"
            />
          </div>

          <div className="flex items-center gap-2">
            <PermalinkButton
              path={`/blog/${post.slug}`}
              label="Share Article"
              copiedLabel="Link Copied!"
            />
          </div>
        </div>

        {/* Article Header */}
        <header className="flex flex-col gap-4">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors cursor-pointer"
              >
                #{tag}
              </Link>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Tagline */}
          {post.tagline && (
            <p className="text-sm sm:text-lg text-slate-300 font-light leading-relaxed">
              {post.tagline}
            </p>
          )}

          {/* Author & Telemetry Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06] mt-2">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md border border-white/20">
                {post.author.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {post.author.name}
                  </span>
                  <a
                    href={post.author.url || 'https://github.com/hoytnix'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {post.author.handle}
                  </a>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">
                  {post.author.role}
                </span>
              </div>
            </div>

            {/* Publication Details */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="material-icons text-sm text-slate-500">calendar_today</span>
                <span>{post.publishedAt}</span>
              </div>
              <span className="text-slate-600">|</span>
              <div className="flex items-center gap-1.5 text-teal-300">
                <span className="material-icons text-sm text-teal-400">schedule</span>
                <span>{post.readingTime} min read</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="hidden sm:inline text-slate-400">
                {post.wordCount} words
              </span>
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <article className="py-4 border-t border-b border-white/[0.06]">
          <MarkdownRenderer>{post.content}</MarkdownRenderer>
        </article>

        {/* Article Footer & Topics */}
        <footer className="flex flex-col gap-6 pt-2">
          {/* Topic Cloud for this Post */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
              <span className="material-icons text-sm text-emerald-400">local_offer</span>
              Article Topics & Tags
            </span>
            <TagCloud
              tags={post.tags}
              asLinks={true}
              showCounts={false}
              showAllOption={false}
              size="sm"
            />
          </div>

          {/* Author Showcase Card */}
          <CyberCard
            glowColor="emerald"
            className="p-6 bg-gradient-to-br from-indigo-950/20 via-slate-950/60 to-black/80 border border-white/10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-600 to-indigo-600 flex items-center justify-center text-lg font-bold text-white shadow-lg border border-white/20 shrink-0">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    Written by {post.author.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                    Shipping 100% on-device AI models, sovereign cognitive architectures, and high-performance WebGPU systems.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                <CyberButton
                  variant="secondary"
                  size="sm"
                  icon="code"
                  href="https://github.com/hoytnix"
                >
                  GitHub
                </CyberButton>
                <CyberButton
                  variant="emerald"
                  size="sm"
                  icon="smart_display"
                  href="/vlog"
                >
                  Watch Vlogs
                </CyberButton>
              </div>
            </div>
          </CyberCard>

          {/* Back to Blog CTA */}
          <div className="flex items-center justify-between pt-4">
            <CyberButton
              variant="outline"
              size="md"
              icon="arrow_back"
              href="/blog"
            >
              Back to Blog Index
            </CyberButton>

            <PermalinkButton
              path={`/blog/${post.slug}`}
              label="Share This Article"
              copiedLabel="Link Copied!"
            />
          </div>
        </footer>
      </div>
    </div>
  );
};
