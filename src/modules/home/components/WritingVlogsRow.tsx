import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/modules/blog/data/blogData';
import { MOCK_ENTRIES } from '@/modules/vlog/data/vlogData';

export const WritingVlogsRow: React.FC = () => {
  const posts = BLOG_POSTS.slice(0, 2);
  const latestVlog = MOCK_ENTRIES[0];

  return (
    <section aria-label="Writing and vlogs">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-display text-4xl text-bone">Writing &amp; vlogs</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-card border border-edge p-6 focus:outline-none group"
          >
            <div className="text-xs text-muted mb-3">Essay</div>
            <h3 className="font-display text-2xl text-bone group-hover:text-accent transition-colors mb-3">
              {post.title}
            </h3>
            <p className="text-sm text-muted line-clamp-3">{post.excerpt}</p>
          </Link>
        ))}
        {latestVlog && (
          <a
            href={latestVlog.videoUri}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card border border-edge p-6 group"
          >
            <div className="text-xs text-muted mb-3">Latest build</div>
            <h3 className="font-display text-2xl text-bone group-hover:text-accent transition-colors mb-3">
              {latestVlog.title}
            </h3>
            <p className="text-sm text-muted line-clamp-3">{latestVlog.description}</p>
          </a>
        )}
      </div>
    </section>
  );
};
