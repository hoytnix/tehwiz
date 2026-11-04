import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-static';

const COLLECTIONS: Record<string, string> = {
  blog: 'src/modules/blog/data/blogData.json',
  vlog: 'src/modules/vlog/data/vlogData.json',
  projects: 'src/modules/portfolio/data/portfolioData.json',
  prompts: 'src/modules/prompts/data/promptsData.json',
};

function isLocalhost(req: NextRequest): boolean {
  if (process.env.NODE_ENV === 'production') return false;
  const host = req.headers.get('host') || '';
  return host.startsWith('localhost') || host.startsWith('127.0.0.1') || host.startsWith('[::1]');
}

function getFilePath(collection: string): string | null {
  const rel = COLLECTIONS[collection.toLowerCase()];
  if (!rel) return null;
  return path.join(process.cwd(), rel);
}

// GET /api/admin?collection=blog
export async function GET(req: NextRequest) {
  // During static build, gracefully return empty static response
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ status: 'static-build' });
  }

  if (!isLocalhost(req)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const { searchParams } = new URL(req.url);
  const collection = searchParams.get('collection');

  if (!collection) {
    return NextResponse.json({ collections: Object.keys(COLLECTIONS) });
  }

  const filePath = getFilePath(collection);
  if (!filePath) {
    return NextResponse.json({ error: 'Unknown collection' }, { status: 404 });
  }

  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    const items = JSON.parse(raw);
    const id = searchParams.get('id');

    if (id) {
      const item = items.find((i: any) => i.id === id || i.slug === id);
      if (!item) return NextResponse.json({ error: 'Item not found' }, { status: 404 });
      return NextResponse.json({ item });
    }

    return NextResponse.json({ collection, count: items.length, items });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to read file', details: err.message }, { status: 500 });
  }
}

// POST /api/admin?collection=blog
export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV === 'production' || !isLocalhost(req)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const { searchParams } = new URL(req.url);
  const body = await req.json();
  const collection = searchParams.get('collection') || body.collection;

  if (!collection) {
    return NextResponse.json({ error: 'Missing collection' }, { status: 400 });
  }

  const filePath = getFilePath(collection);
  if (!filePath) {
    return NextResponse.json({ error: 'Unknown collection' }, { status: 404 });
  }

  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    const items: any[] = JSON.parse(raw);

    const newId = body.id || body.slug || `item-${Date.now()}`;
    const exists = items.some((i) => i.id === newId || (i.slug && i.slug === newId));
    if (exists) {
      return NextResponse.json({ error: `Item with id/slug "${newId}" already exists.` }, { status: 409 });
    }

    const itemToInsert = { ...body, id: newId };
    delete itemToInsert.collection;

    // Prepend so newest is at the top
    items.unshift(itemToInsert);

    await fs.writeFile(filePath, JSON.stringify(items, null, 2) + '\n', 'utf-8');
    return NextResponse.json({ success: true, item: itemToInsert });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to create item', details: err.message }, { status: 500 });
  }
}

// PUT /api/admin?collection=blog
export async function PUT(req: NextRequest) {
  if (process.env.NODE_ENV === 'production' || !isLocalhost(req)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const { searchParams } = new URL(req.url);
  const body = await req.json();
  const collection = searchParams.get('collection') || body.collection;

  if (!collection) {
    return NextResponse.json({ error: 'Missing collection' }, { status: 400 });
  }

  const filePath = getFilePath(collection);
  if (!filePath) {
    return NextResponse.json({ error: 'Unknown collection' }, { status: 404 });
  }

  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    const items: any[] = JSON.parse(raw);

    const itemId = body.id || body.slug;
    const index = items.findIndex((i) => i.id === itemId || i.slug === itemId);
    if (index === -1) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    const updated = { ...items[index], ...body };
    delete updated.collection;
    items[index] = updated;

    await fs.writeFile(filePath, JSON.stringify(items, null, 2) + '\n', 'utf-8');
    return NextResponse.json({ success: true, item: items[index] });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to update item', details: err.message }, { status: 500 });
  }
}

// DELETE /api/admin?collection=blog&id=...
export async function DELETE(req: NextRequest) {
  if (process.env.NODE_ENV === 'production' || !isLocalhost(req)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const { searchParams } = new URL(req.url);
  const collection = searchParams.get('collection');
  const id = searchParams.get('id');

  if (!collection || !id) {
    return NextResponse.json({ error: 'Missing collection or id' }, { status: 400 });
  }

  const filePath = getFilePath(collection);
  if (!filePath) {
    return NextResponse.json({ error: 'Unknown collection' }, { status: 404 });
  }

  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    const items: any[] = JSON.parse(raw);

    const initialLength = items.length;
    const filtered = items.filter((i) => i.id !== id && i.slug !== id);

    if (filtered.length === initialLength) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    await fs.writeFile(filePath, JSON.stringify(filtered, null, 2) + '\n', 'utf-8');
    return NextResponse.json({ success: true, deletedId: id, remaining: filtered.length });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to delete item', details: err.message }, { status: 500 });
  }
}
