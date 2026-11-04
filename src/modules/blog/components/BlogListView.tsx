'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogPost, TagCount } from '../types';
import { BlogCard } from './BlogCard';
import { TagCloud } from './TagCloud';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PermalinkButton } from '@/components/ui/PermalinkButton';
import { CyberButton } from '@/components/ui/CyberButton';

export interface BlogListViewProps {
  posts: BlogPost[];
  initialTag?: string | null;
}

export const BlogListView: React.FC<BlogListViewProps> = ({
  posts,
  initialTag = null
}) => {
  const searchParams = useSearchParams();
  const urlTag = searchParams?.get('tag') ?? null;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(initialTag || urlTag);

  // Compute tag counts dynamically
  const tagCounts: TagCount[] = useMemo(() => {
    const map: Record<string, number> = {};
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        map[tag] = (map[tag] || 0) + 1;
      });
    });
    return Object.entries(map)
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return posts.filter((post) => {
      // Tag filter
      if (
        selectedTag &&
        !post.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase())
      ) {
        return false;
      }

      // Search query
      if (q) {
        const matchesTitle = post.title.toLowerCase().includes(q);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(q);
        const matchesTags = post.tags.some((t) => t.toLowerCase().includes(q));
        const matchesAuthor = post.author.name.toLowerCase().includes(q);
        return matchesTitle || matchesExcerpt || matchesTags || matchesAuthor;
      }

      return true;
    });
  }, [posts, selectedTag, searchQuery]);

  return (
    <div className="h-full w-full flex flex-col p-4 sm:p-6 lg:p-8 overflow-y-auto pb-24 bg-transparent text-slate-100">
      {/* Breadcrumbs & Share Bar */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-shrink-0">
        <Breadcrumbs items={[{ label: 'Engineering Blog', icon: 'article' }]} />
        <div className="flex items-center gap-2">
          <CyberButton
            variant="secondary"
            size="sm"
            icon="rss_feed"
            href="/rss.xml"
            target="_blank"
          >
            RSS Feed
          </CyberButton>
          <PermalinkButton path="/blog" label="Share Blog" />
        </div>
      </div>

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-white/[0.08] flex-shrink-0">
        <div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <h1 className="text-2xl sm:text-3xl text-white font-extrabold tracking-tight">
              Engineering Blog
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Architecture Logs
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            Deep architectural essays, on-device AI engineering breakdowns, WebGPU breakthroughs, and sovereign system design reflections.
          </p>
        </div>

        {/* Quick Stats Pill */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <div className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{posts.length} {posts.length === 1 ? 'Article' : 'Articles'}</span>
            <span className="text-slate-600">|</span>
            <span>{tagCounts.length} Topics</span>
          </div>
        </div>
      </div>

      {/* Search & Tag Filter Controls */}
      <div className="flex flex-col gap-4 mb-8">
        {/* Search input */}
        <div className="relative max-w-md">
          <span className="material-icons absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-lg">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, topic, or keyword..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all font-mono"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
            >
              <span className="material-icons text-xs">close</span>
            </button>
          )}
        </div>

        {/* Tag Cloud Component */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
              <span className="material-icons text-xs text-emerald-400">label</span>
              Tag Cloud & Topics
            </span>
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="text-[11px] font-mono text-emerald-400 hover:underline cursor-pointer"
              >
                Clear Topic Filter
              </button>
            )}
          </div>

          <TagCloud
            tags={tagCounts}
            selectedTag={selectedTag}
            onSelectTag={(tag) => setSelectedTag(tag)}
            totalArticlesCount={posts.length}
            showCounts={true}
            size="md"
          />
        </div>
      </div>

      {/* Article Grid / Listing */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onTagClick={(tag) => setSelectedTag(tag)}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02]">
          <span className="material-icons text-4xl text-slate-500 mb-2">find_in_page</span>
          <h4 className="text-base font-bold text-white mb-1">No articles found</h4>
          <p className="text-xs text-slate-400 mb-4 max-w-sm mx-auto">
            No engineering logs match your current search query or topic filter.
          </p>
          <CyberButton
            variant="secondary"
            size="sm"
            onClick={() => {
              setSearchQuery('');
              setSelectedTag(null);
            }}
          >
            Reset Filters
          </CyberButton>
        </div>
      )}
    </div>
  );
};
