export interface BlogAuthor {
  name: string;
  handle: string;
  avatar?: string;
  role: string;
  url?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  excerpt: string;
  content: string;
  author: BlogAuthor;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number; // in minutes
  wordCount: number;
  tags: string[];
  featured?: boolean;
  coverImage?: string;
  canonicalUrl?: string;
}

export interface TagCount {
  tag: string;
  count: number;
}
