import Link from 'next/link';
import { CyberButton } from '@/components/ui/CyberButton';

export default function NotFound() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center">

      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-3xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-2xl shadow-indigo-500/20">
          <span className="material-icons text-5xl">satellite_alt</span>
        </div>
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500"></span>
        </span>
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono font-semibold mb-4">
        <span>ERROR 404 • SECTOR NOT FOUND</span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
        Coordinate Mismatch
      </h1>

      <p className="text-slate-400 text-sm max-w-md mb-8 leading-relaxed">
        The requested neural memory sector or project does not exist in the active TehWiz database registry.
      </p>

      <div className="flex items-center gap-3">
        <CyberButton
          variant="primary"
          size="md"
          icon="home"
          href="/"
        >
          Return to Command Center
        </CyberButton>

        <CyberButton
          variant="secondary"
          size="md"
          icon="layers"
          href="/portfolio"
        >
          Browse 14 Systems
        </CyberButton>
      </div>
    </div>
  );
}
