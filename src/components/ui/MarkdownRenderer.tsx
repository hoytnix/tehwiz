import React from 'react';

export interface MarkdownRendererProps {
  content?: string;
  children?: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  children,
  className = ''
}) => {
  const rawContent = content ?? (typeof children === 'string' ? children : '') ?? '';

  const formatInline = (text: string) => {
    return text
      // Markdown links [label](url)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, href) => {
        const isExternal = href.startsWith('http://') || href.startsWith('https://');
        const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `<a href="${href}" class="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-500/40 hover:decoration-cyan-400 transition-colors font-medium cursor-pointer"${target}>${label}</a>`;
      })
      // Bold **text**
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      // Inline code `code`
      .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 font-mono text-xs">$1</code>')
      // Italics *text*
      .replace(/(^|[^*])\*([^*]+)\*([^*]|$)/g, '$1<em class="text-cyan-200/90 italic font-mono text-sm sm:text-base">$2</em>$3')
      // Soft line breaks
      .replace(/\n/g, '<br />');
  };

  const renderFormattedText = (raw: string) => {
    const blocks = raw.split(/\n\n+/);

    return blocks.map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Heading 1
      if (trimmed.startsWith('# ')) {
        return (
          <h1
            key={idx}
            className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono tracking-tight mt-10 mb-4 pb-2 border-b border-cyan-500/20"
          >
            {trimmed.replace('# ', '')}
          </h1>
        );
      }

      // Heading 2
      if (trimmed.startsWith('## ')) {
        return (
          <h2
            key={idx}
            className="text-xl sm:text-2xl font-bold text-cyan-300 font-mono tracking-tight mt-8 mb-4 flex items-center gap-2"
          >
            <span className="text-cyan-500 font-normal">#</span>
            {trimmed.replace('## ', '')}
          </h2>
        );
      }

      // Heading 3
      if (trimmed.startsWith('### ')) {
        return (
          <h3
            key={idx}
            className="text-lg sm:text-xl font-bold text-slate-100 font-mono tracking-wide mt-8 mb-4 flex items-center gap-2 border-l-2 border-cyan-400/50 pl-3"
          >
            {trimmed.replace('### ', '')}
          </h3>
        );
      }

      // Horizontal Rule
      if (trimmed === '---' || trimmed === '***') {
        return (
          <hr
            key={idx}
            className="my-8 border-t border-cyan-500/20"
          />
        );
      }

      // Blockquotes / Callouts
      if (trimmed.startsWith('>')) {
        const quoteText = trimmed.replace(/^>\s*/gm, '');
        return (
          <blockquote
            key={idx}
            className="my-6 border-l-2 border-cyan-400 bg-cyan-950/20 px-5 py-3 rounded-r-lg text-cyan-200/90 italic font-mono text-sm sm:text-base leading-relaxed"
          >
            <span dangerouslySetInnerHTML={{ __html: formatInline(quoteText) }} />
          </blockquote>
        );
      }

      // Code blocks
      if (trimmed.startsWith('```')) {
        const lines = trimmed.split('\n');
        const firstLine = lines[0] || '';
        const langMatch = firstLine.match(/^```(\w+)?/);
        const language = langMatch?.[1] || 'bash';
        const code = lines.slice(1, lines[lines.length - 1].startsWith('```') ? -1 : undefined).join('\n');
        return (
          <div
            key={idx}
            className="my-6 rounded-lg border border-cyan-500/20 bg-slate-950/80 p-4 font-mono text-xs text-cyan-300 overflow-x-auto shadow-inner"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-cyan-500/10 text-[10px] text-cyan-500/60 uppercase tracking-wider select-none">
              <span>{language}</span>
            </div>
            <pre className="leading-relaxed"><code>{code}</code></pre>
          </div>
        );
      }

      // Unordered lists
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const items = trimmed.split('\n').filter((l) => l.trim().length > 0);
        return (
          <ul key={idx} className="my-5 space-y-3 pl-2">
            {items.map((item, itemIdx) => {
              const text = item.replace(/^[-*]\s*/, '');
              return (
                <li
                  key={itemIdx}
                  className="flex items-start gap-2.5 text-slate-300 leading-relaxed font-sans text-base sm:text-lg"
                >
                  <span className="text-cyan-400 font-mono select-none mt-1 shrink-0 text-sm">▸</span>
                  <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
                </li>
              );
            })}
          </ul>
        );
      }

      // Ordered lists (1. , 2. )
      if (/^\d+\.\s/.test(trimmed)) {
        const items = trimmed.split('\n').filter((l) => l.trim().length > 0);
        return (
          <ol key={idx} className="my-5 space-y-3 pl-2">
            {items.map((item, itemIdx) => {
              const numMatch = item.match(/^(\d+)\.\s*/);
              const num = numMatch ? numMatch[1] : `${itemIdx + 1}`;
              const text = item.replace(/^\d+\.\s*/, '');
              return (
                <li
                  key={itemIdx}
                  className="flex items-start gap-2.5 text-slate-300 leading-relaxed font-sans text-base sm:text-lg"
                >
                  <span className="text-cyan-400 font-mono font-bold select-none mt-0.5 shrink-0 text-sm">
                    {num}.
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
                </li>
              );
            })}
          </ol>
        );
      }

      // Default paragraph with bold, links, inline code, italics
      return (
        <p
          key={idx}
          className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6 font-normal tracking-wide"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
        />
      );
    });
  };

  return (
    <div className={`prose-cyber max-w-none ${className}`}>
      {renderFormattedText(rawContent)}
    </div>
  );
};
