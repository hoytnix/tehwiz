import { notFound } from 'next/navigation';
import { EditorApp } from './components/EditorApp';

export const dynamic = 'force-static';

export default function EditorPage() {
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }

  return <EditorApp />;
}
