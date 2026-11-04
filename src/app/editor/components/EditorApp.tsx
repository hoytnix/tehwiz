'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/modules/blog/types';
import { Project, VlogEntry, PromptItem } from '@/types';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

type CollectionType = 'blog' | 'projects' | 'vlog' | 'prompts';

interface CollectionMeta {
  id: CollectionType;
  label: string;
  icon: string;
  route: string;
}

const COLLECTIONS: CollectionMeta[] = [
  { id: 'blog', label: 'Engineering Blog', icon: '📝', route: '/blog' },
  { id: 'projects', label: 'Portfolio Projects', icon: '🚀', route: '/portfolio' },
  { id: 'vlog', label: 'Vlog Entries', icon: '🎥', route: '/vlog' },
  { id: 'prompts', label: 'System Prompts', icon: '🧠', route: '/prompts' },
];

export function EditorApp() {
  const [activeTab, setActiveTab] = useState<CollectionType>('blog');
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [notification, setNotification] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Editing state
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [previewMarkdown, setPreviewMarkdown] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Load items when active tab changes
  useEffect(() => {
    fetchItems(activeTab);
  }, [activeTab]);

  const showNotification = (text: string, type: 'success' | 'error' = 'success') => {
    setNotification({ text, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const fetchItems = async (collection: CollectionType) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin?collection=${collection}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setItems(data.items || []);
    } catch (err: any) {
      showNotification(`Failed to load ${collection}: ${err.message}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  // Filtered items
  const filteredItems = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return items;
    return items.filter((item) => {
      const title = (item.title || item.name || '').toLowerCase();
      const slug = (item.slug || item.id || '').toLowerCase();
      const desc = (item.description || item.excerpt || '').toLowerCase();
      const tags = Array.isArray(item.tags) ? item.tags.join(' ').toLowerCase() : '';
      return title.includes(q) || slug.includes(q) || desc.includes(q) || tags.includes(q);
    });
  }, [items, search]);

  const handleCreateNew = () => {
    setIsNew(true);
    setPreviewMarkdown(false);
    const nowStr = new Date().toISOString().split('T')[0];

    if (activeTab === 'blog') {
      const newPost: Partial<BlogPost> = {
        id: `post-${Date.now()}`,
        slug: 'new-blog-post',
        title: 'New Engineering Post',
        tagline: 'Short architectural tagline',
        excerpt: 'Brief overview of this post.',
        author: {
          name: 'Michael Scott Hoyt',
          handle: '@hoytnix',
          role: 'Founder & Systems Architect',
          url: 'https://github.com/hoytnix',
        },
        publishedAt: nowStr,
        readingTime: 4,
        wordCount: 500,
        tags: ['Engineering', 'Architecture'],
        featured: false,
        content: '# New Post\n\nWrite your content here...',
      };
      setEditingItem(newPost);
    } else if (activeTab === 'projects') {
      const newProject: Partial<Project> = {
        id: `project-${Date.now()}`,
        title: 'New Sovereign Project',
        tagline: 'Autonomous AI engine on device',
        description: 'Comprehensive project description and technical achievements.',
        category: 'AI & Cognitive Architecture',
        tags: ['AI', 'WebGPU', 'Edge AI'],
        status: 'Beta',
        url: 'https://tehwiz.com',
        links: {
          liveUrl: 'https://tehwiz.com',
        },
        license: {
          name: 'MIT',
          summary: 'Permissive open source.',
        },
        pricing: [],
        highlights: ['100% on-device inference', 'Zero cloud dependencies'],
        specs: [],
      };
      setEditingItem(newProject);
    } else if (activeTab === 'vlog') {
      const newVlog: Partial<VlogEntry> = {
        id: `vlog-${Date.now()}`,
        title: 'New Vlog Episode',
        description: 'Development log breakdown and architecture journey.',
        videoUri: 'https://www.youtube.com/watch?v=',
        thumbnailUrl: '',
        timestamp: Date.now(),
      };
      setEditingItem(newVlog);
    } else if (activeTab === 'prompts') {
      const newPrompt: Partial<PromptItem> = {
        id: `${items.length + 1}`,
        title: 'New Cognitive Prompt',
        description: 'Recursive persona prompt for high-fidelity reasoning.',
        tags: ['PERSONA', 'REASONING'],
        content: '# System Prompt\n\nDefine persona and directives here...',
      };
      setEditingItem(newPrompt);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    setIsSaving(true);

    try {
      // Auto-compute blog word count & reading time
      let payload = { ...editingItem };
      if (activeTab === 'blog' && payload.content) {
        const words = payload.content.trim().split(/\s+/).filter(Boolean).length;
        payload.wordCount = words;
        payload.readingTime = Math.max(1, Math.ceil(words / 200));
      }

      // Auto-thumbnail for vlogs from youtube if left blank
      if (activeTab === 'vlog' && payload.videoUri && !payload.thumbnailUrl) {
        const ytMatch = payload.videoUri.match(/(?:v=|shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        if (ytMatch && ytMatch[1]) {
          payload.thumbnailUrl = `https://i.ytimg.com/vi/${ytMatch[1]}/hqdefault.jpg`;
        }
      }

      const method = isNew ? 'POST' : 'PUT';
      const res = await fetch(`/api/admin?collection=${activeTab}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || `HTTP ${res.status}`);
      }

      showNotification(`Saved "${payload.title || payload.id}" to ${activeTab} on disk!`);
      setEditingItem(null);
      setIsNew(false);
      fetchItems(activeTab);
    } catch (err: any) {
      showNotification(`Save failed: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin?collection=${activeTab}&id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
      showNotification(`Deleted item "${id}" from disk.`);
      setDeleteConfirmId(null);
      fetchItems(activeTab);
    } catch (err: any) {
      showNotification(`Delete failed: ${err.message}`, 'error');
    }
  };

  return (
    <div className="h-full w-full flex flex-col overflow-y-auto bg-ink text-muted p-4 sm:p-6 lg:p-8 pb-32">
      {/* Top Breadcrumb & Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 shrink-0 border-b border-edge pb-4">
        <Breadcrumbs items={[{ label: 'Localhost Studio' }]} />
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 text-[11px] font-mono rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Local Node.js Live · Writes to JSON
          </span>
          <Link
            href="/"
            className="text-xs text-muted hover:text-bone px-3 py-1 rounded border border-edge hover:border-accent transition-colors"
          >
            Exit to Site ↗
          </Link>
        </div>
      </div>

      {/* Notifications */}
      {notification && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-lg border shadow-2xl text-xs font-mono transition-all duration-300 ${
            notification.type === 'error'
              ? 'bg-rose-950/90 text-rose-200 border-rose-500/40'
              : 'bg-emerald-950/90 text-emerald-200 border-emerald-500/40'
          }`}
        >
          {notification.text}
        </div>
      )}

      {/* Main Studio Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-edge pb-4 mb-6 shrink-0">
        <nav className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {COLLECTIONS.map((c) => {
            const active = activeTab === c.id;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setActiveTab(c.id);
                  setSearch('');
                  setEditingItem(null);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                  active
                    ? 'bg-accent text-ink font-bold shadow-sm'
                    : 'bg-white/[0.03] text-muted hover:text-bone hover:bg-white/[0.06] border border-edge'
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.label}</span>
                {active && !loading && (
                  <span className="ml-1 px-1.5 py-0.2 rounded bg-black/20 text-[10px]">
                    {items.length}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Link
            href={COLLECTIONS.find((c) => c.id === activeTab)?.route || '/'}
            target="_blank"
            className="text-xs font-mono text-muted hover:text-bone px-3 py-2 rounded border border-edge hover:border-accent transition-colors"
          >
            Preview Route ↗
          </Link>
          <button
            onClick={handleCreateNew}
            className="px-3.5 py-2 rounded-lg bg-accent text-ink text-xs font-mono font-bold hover:opacity-90 transition-opacity flex items-center gap-1.5 cursor-pointer shadow"
          >
            <span className="text-sm font-bold">+</span>
            <span>New Entry</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 shrink-0">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search ${COLLECTIONS.find((c) => c.id === activeTab)?.label.toLowerCase()} by title, slug, tag...`}
          className="w-full sm:max-w-md px-3.5 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs font-mono text-bone placeholder:text-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30"
        />
      </div>

      {/* Items List (Scrollable Area) */}
      <div className="flex-1">
        {loading ? (
          <div className="py-20 text-center text-xs font-mono text-muted">
            Loading collection from disk...
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="p-12 text-center rounded-xl border border-dashed border-edge bg-white/[0.01]">
            <p className="text-sm text-muted mb-3 font-mono">No items found in {activeTab}.</p>
            <button
              onClick={handleCreateNew}
              className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/15 text-xs font-mono text-bone transition-colors cursor-pointer"
            >
              Create the first entry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {filteredItems.map((item) => {
              const id = item.id || item.slug;
              const title = item.title || item.name || id;
              const subtitle = item.tagline || item.excerpt || item.description || '';
              const date = item.publishedAt || (item.timestamp ? new Date(item.timestamp).toISOString().split('T')[0] : '');
              const tags = item.tags || [];

              return (
                <div
                  key={id}
                  className="p-4 rounded-xl border border-edge bg-card hover:border-accent/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm text-bone truncate group-hover:text-accent transition-colors">
                        {title}
                      </h3>
                      {item.featured && (
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          Featured
                        </span>
                      )}
                      {item.status && (
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-white/[0.06] text-muted">
                          {item.status}
                        </span>
                      )}
                    </div>
                    {subtitle && (
                      <p className="text-xs text-muted line-clamp-1 mb-2">
                        {subtitle}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-muted/70">
                      <span className="text-bone/80">ID: {id}</span>
                      {date && (
                        <>
                          <span>•</span>
                          <span>{date}</span>
                        </>
                      )}
                      {item.wordCount && (
                        <>
                          <span>•</span>
                          <span>{item.wordCount} words ({item.readingTime}m read)</span>
                        </>
                      )}
                      {tags.length > 0 && (
                        <>
                          <span>•</span>
                          <span className="text-muted truncate max-w-xs">
                            {tags.slice(0, 4).join(', ')}
                            {tags.length > 4 ? ` +${tags.length - 4}` : ''}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    {/* View Link */}
                    {activeTab === 'blog' && (
                      <Link
                        href={`/blog/${item.slug || item.id}`}
                        target="_blank"
                        className="px-2.5 py-1.5 rounded text-xs font-mono text-muted hover:text-bone hover:bg-white/[0.05] transition-colors"
                      >
                        View ↗
                      </Link>
                    )}
                    {activeTab === 'projects' && (
                      <Link
                        href={`/portfolio/${item.id}`}
                        target="_blank"
                        className="px-2.5 py-1.5 rounded text-xs font-mono text-muted hover:text-bone hover:bg-white/[0.05] transition-colors"
                      >
                        View ↗
                      </Link>
                    )}

                    {/* Edit button */}
                    <button
                      onClick={() => {
                        setIsNew(false);
                        setPreviewMarkdown(false);
                        setEditingItem(JSON.parse(JSON.stringify(item)));
                      }}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-xs font-mono text-bone transition-colors cursor-pointer"
                    >
                      Edit
                    </button>

                    {/* Delete button */}
                    {deleteConfirmId === id ? (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleDelete(id)}
                          className="px-2 py-1.5 rounded bg-rose-600 hover:bg-rose-500 text-xs font-mono text-white transition-colors cursor-pointer"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(null)}
                          className="px-2 py-1.5 rounded bg-white/10 hover:bg-white/20 text-xs font-mono text-muted transition-colors cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirmId(id)}
                        className="px-2 py-1.5 rounded text-xs font-mono text-muted hover:text-rose-400 hover:bg-rose-950/20 transition-colors cursor-pointer"
                        title="Delete"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Edit / Create Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-[#12141C] border border-white/15 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in fade-in duration-200">
            {/* Modal Header (Pinned Top) */}
            <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between shrink-0 bg-[#0E1017]">
              <div>
                <h2 className="text-base font-bold text-bone flex items-center gap-2">
                  <span>{isNew ? 'New' : 'Edit'} {COLLECTIONS.find((c) => c.id === activeTab)?.label} Entry</span>
                  <span className="text-xs font-mono font-normal text-muted">
                    ({editingItem.id || editingItem.slug})
                  </span>
                </h2>
                <p className="text-xs text-muted/80 font-mono mt-0.5">
                  Saving writes directly to local JSON source on disk in real time.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEditingItem(null)}
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-muted hover:text-bone flex items-center justify-center text-sm font-mono transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSave} className="flex-1 min-h-0 flex flex-col overflow-hidden">
              {/* Scrollable Form Body */}
              <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 space-y-5">
                {/* Common Fields: ID / Slug / Title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted mb-1">
                      {activeTab === 'blog' ? 'Slug (URL path)' : 'ID'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingItem.slug || editingItem.id || ''}
                      onChange={(e) => {
                        const val = e.target.value;
                        setEditingItem({
                          ...editingItem,
                          id: val,
                          ...(activeTab === 'blog' ? { slug: val } : {}),
                        });
                      }}
                      disabled={!isNew}
                      className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs font-mono text-bone focus:outline-none focus:border-accent disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted mb-1">
                      Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingItem.title || ''}
                      onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs text-bone focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                {/* BLOG Specific Fields */}
                {activeTab === 'blog' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-muted mb-1">
                          Tagline / Subheading
                        </label>
                        <input
                          type="text"
                          value={editingItem.tagline || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, tagline: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs text-bone focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-muted mb-1">
                          Published Date (YYYY-MM-DD)
                        </label>
                        <input
                          type="date"
                          value={editingItem.publishedAt || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, publishedAt: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs font-mono text-bone focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-muted mb-1">
                        Excerpt / Summary
                      </label>
                      <textarea
                        rows={2}
                        value={editingItem.excerpt || ''}
                        onChange={(e) => setEditingItem({ ...editingItem, excerpt: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs text-bone focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-muted mb-1">
                          Tags (comma separated)
                        </label>
                        <input
                          type="text"
                          value={Array.isArray(editingItem.tags) ? editingItem.tags.join(', ') : ''}
                          onChange={(e) =>
                            setEditingItem({
                              ...editingItem,
                              tags: e.target.value
                                .split(',')
                                .map((t) => t.trim())
                                .filter(Boolean),
                            })
                          }
                          className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs font-mono text-bone focus:outline-none focus:border-accent"
                        />
                      </div>

                      <div className="flex items-center gap-4 pt-5">
                        <label className="flex items-center gap-2 cursor-pointer text-xs font-mono text-muted hover:text-bone">
                          <input
                            type="checkbox"
                            checked={!!editingItem.featured}
                            onChange={(e) => setEditingItem({ ...editingItem, featured: e.target.checked })}
                            className="rounded border-edge bg-white/5 text-accent focus:ring-0"
                          />
                          <span>Featured Article</span>
                        </label>
                      </div>
                    </div>

                    {/* Content Editor with Preview Tabs */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-mono uppercase text-muted">
                          Markdown Content *
                        </label>
                        <div className="flex items-center gap-1 bg-white/[0.05] p-0.5 rounded-lg text-[11px] font-mono">
                          <button
                            type="button"
                            onClick={() => setPreviewMarkdown(false)}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              !previewMarkdown ? 'bg-accent text-ink font-bold' : 'text-muted hover:text-bone'
                            }`}
                          >
                            Write
                          </button>
                          <button
                            type="button"
                            onClick={() => setPreviewMarkdown(true)}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              previewMarkdown ? 'bg-accent text-ink font-bold' : 'text-muted hover:text-bone'
                            }`}
                          >
                            Preview
                          </button>
                        </div>
                      </div>

                      {previewMarkdown ? (
                        <div className="p-4 rounded-xl border border-edge bg-[#0A0B10] min-h-[350px] max-h-[500px] overflow-y-auto">
                          <MarkdownRenderer content={editingItem.content || ''} />
                        </div>
                      ) : (
                        <textarea
                          rows={16}
                          required
                          value={editingItem.content || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })}
                          placeholder="Write markdown content here..."
                          className="w-full p-3 rounded-xl bg-[#0A0B10] border border-edge text-xs font-mono text-bone focus:outline-none focus:border-accent leading-relaxed"
                        />
                      )}
                    </div>
                  </>
                )}

                {/* PROJECTS Specific Fields */}
                {activeTab === 'projects' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-muted mb-1">
                          Category
                        </label>
                        <input
                          type="text"
                          value={editingItem.category || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs text-bone focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-muted mb-1">
                          Status
                        </label>
                        <select
                          value={editingItem.status || 'Live'}
                          onChange={(e) => setEditingItem({ ...editingItem, status: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-[#0E1017] border border-edge text-xs font-mono text-bone focus:outline-none focus:border-accent"
                        >
                          <option value="Live">Live</option>
                          <option value="Beta">Beta</option>
                          <option value="MVP">MVP</option>
                          <option value="Alpha">Alpha</option>
                          <option value="POC">POC</option>
                          <option value="Deprecated">Deprecated</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-muted mb-1">
                          Live App URL
                        </label>
                        <input
                          type="url"
                          value={editingItem.url || editingItem.links?.liveUrl || ''}
                          onChange={(e) =>
                            setEditingItem({
                              ...editingItem,
                              url: e.target.value,
                              links: { ...editingItem.links, liveUrl: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs font-mono text-bone focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-muted mb-1">
                        Tagline
                      </label>
                      <input
                        type="text"
                        value={editingItem.tagline || ''}
                        onChange={(e) => setEditingItem({ ...editingItem, tagline: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs text-bone focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-muted mb-1">
                        Full Description
                      </label>
                      <textarea
                        rows={3}
                        value={editingItem.description || ''}
                        onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs text-bone focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-muted mb-1">
                          Cover Image URL
                        </label>
                        <input
                          type="text"
                          value={editingItem.coverImage || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, coverImage: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs font-mono text-bone focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-muted mb-1">
                          Favicon / Icon URL
                        </label>
                        <input
                          type="text"
                          value={editingItem.favicon || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, favicon: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs font-mono text-bone focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-muted mb-1">
                        Unique Mechanism
                      </label>
                      <textarea
                        rows={2}
                        value={editingItem.uniqueMechanism || ''}
                        onChange={(e) => setEditingItem({ ...editingItem, uniqueMechanism: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs text-bone focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-muted mb-1">
                        Tags (comma separated)
                      </label>
                      <input
                        type="text"
                        value={Array.isArray(editingItem.tags) ? editingItem.tags.join(', ') : ''}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            tags: e.target.value
                              .split(',')
                              .map((t) => t.trim())
                              .filter(Boolean),
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs font-mono text-bone focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-muted mb-1">
                        Key Highlights (one per line)
                      </label>
                      <textarea
                        rows={3}
                        value={Array.isArray(editingItem.highlights) ? editingItem.highlights.join('\n') : ''}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            highlights: e.target.value.split('\n').filter((l) => l.trim()),
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs text-bone focus:outline-none focus:border-accent"
                      />
                    </div>
                  </>
                )}

                {/* VLOG Specific Fields */}
                {activeTab === 'vlog' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-muted mb-1">
                          YouTube Video URI *
                        </label>
                        <input
                          type="url"
                          required
                          value={editingItem.videoUri || ''}
                          onChange={(e) => {
                            const url = e.target.value;
                            const ytMatch = url.match(/(?:v=|shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                            const thumb = ytMatch ? `https://i.ytimg.com/vi/${ytMatch[1]}/hqdefault.jpg` : editingItem.thumbnailUrl;
                            setEditingItem({
                              ...editingItem,
                              videoUri: url,
                              thumbnailUrl: thumb,
                            });
                          }}
                          placeholder="https://www.youtube.com/watch?v=..."
                          className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs font-mono text-bone focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-muted mb-1">
                          Thumbnail URL (Auto from YouTube)
                        </label>
                        <input
                          type="url"
                          value={editingItem.thumbnailUrl || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, thumbnailUrl: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs font-mono text-bone focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-muted mb-1">
                        Description
                      </label>
                      <textarea
                        rows={3}
                        value={editingItem.description || ''}
                        onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs text-bone focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-muted mb-1">
                        Publish Date
                      </label>
                      <input
                        type="date"
                        value={editingItem.timestamp ? new Date(editingItem.timestamp).toISOString().split('T')[0] : ''}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            timestamp: new Date(e.target.value).getTime(),
                          })
                        }
                        className="w-full sm:w-60 px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs font-mono text-bone focus:outline-none focus:border-accent"
                      />
                    </div>
                  </>
                )}

                {/* PROMPTS Specific Fields */}
                {activeTab === 'prompts' && (
                  <>
                    <div>
                      <label className="block text-xs font-mono uppercase text-muted mb-1">
                        Description / Cognitive Objective
                      </label>
                      <input
                        type="text"
                        value={editingItem.description || ''}
                        onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs text-bone focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-muted mb-1">
                        Tags (comma separated)
                      </label>
                      <input
                        type="text"
                        value={Array.isArray(editingItem.tags) ? editingItem.tags.join(', ') : ''}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            tags: e.target.value
                              .split(',')
                              .map((t) => t.trim())
                              .filter(Boolean),
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-edge text-xs font-mono text-bone focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-mono uppercase text-muted">
                          Prompt Content *
                        </label>
                        <div className="flex items-center gap-1 bg-white/[0.05] p-0.5 rounded-lg text-[11px] font-mono">
                          <button
                            type="button"
                            onClick={() => setPreviewMarkdown(false)}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              !previewMarkdown ? 'bg-accent text-ink font-bold' : 'text-muted hover:text-bone'
                            }`}
                          >
                            Raw
                          </button>
                          <button
                            type="button"
                            onClick={() => setPreviewMarkdown(true)}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              previewMarkdown ? 'bg-accent text-ink font-bold' : 'text-muted hover:text-bone'
                            }`}
                          >
                            Preview
                          </button>
                        </div>
                      </div>

                      {previewMarkdown ? (
                        <div className="p-4 rounded-xl border border-edge bg-[#0A0B10] min-h-[300px] max-h-[450px] overflow-y-auto">
                          <MarkdownRenderer content={editingItem.content || ''} />
                        </div>
                      ) : (
                        <textarea
                          rows={14}
                          required
                          value={editingItem.content || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })}
                          placeholder="Write prompt instructions or markdown..."
                          className="w-full p-3 rounded-xl bg-[#0A0B10] border border-edge text-xs font-mono text-bone focus:outline-none focus:border-accent leading-relaxed"
                        />
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Pinned Form Action Buttons (Fixed Bottom) */}
              <div className="p-4 sm:px-6 border-t border-white/[0.08] flex items-center justify-end gap-3 shrink-0 bg-[#0E1017]">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-mono text-muted hover:text-bone transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-5 py-2 rounded-lg bg-accent hover:opacity-90 text-ink text-xs font-mono font-bold transition-opacity cursor-pointer disabled:opacity-50"
                >
                  {isSaving ? 'Writing to Disk...' : isNew ? 'Create & Save' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
