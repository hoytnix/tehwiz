'use client';

import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

declare global {
  interface Window {
    Prism?: any;
  }
}

interface CodeBlockProps {
  isBlock?: boolean;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  node?: any;
}

const PreBlock: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { isBlock: true });
        }
        return child;
      })}
    </>
  );
};

const CodeBlock: React.FC<CodeBlockProps> = ({ isBlock, inline, className, children, node, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : 'text';
  const codeText = String(children).replace(/\n$/, '');
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current && isBlock && typeof window !== 'undefined' && window.Prism) {
      window.Prism.highlightElement(codeRef.current);
    }
  }, [codeText, isBlock, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isBlock) {
    return (
      <code 
        className="bg-white/10 px-1.5 py-0.5 rounded-md text-indigo-200 text-sm font-mono border border-white/5 mx-0.5 align-middle break-words" 
        {...props}
      >
        {children}
      </code>
    );
  }

  return (
    <div className="relative group rounded-xl overflow-hidden border border-white/10 my-6 bg-[#272822] shadow-2xl max-w-full">
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/5 select-none">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50 shadow-[0_0_8px_rgba(239,68,68,0.2)]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 shadow-[0_0_8px_rgba(234,179,8,0.2)]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50 shadow-[0_0_8px_rgba(34,197,94,0.2)]"></div>
          </div>
          <div className="h-4 w-px bg-white/10 mx-1"></div>
          <span className="text-[10px] text-slate-400 font-mono font-medium uppercase tracking-widest flex items-center gap-1">
            <span className="material-icons text-[10px] opacity-50">code</span>
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 px-2.5 py-1 rounded-md border ${
            copied 
              ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' 
              : 'text-slate-500 border-transparent hover:text-white hover:bg-white/10 hover:border-white/10'
          }`}
          title="Copy to Clipboard"
        >
          <span className="material-icons text-[14px]">
            {copied ? 'check' : 'content_copy'}
          </span>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      
      <div className="overflow-x-auto custom-scrollbar p-4">
        <pre className={`!m-0 !p-0 !bg-transparent language-${language}`} style={{ margin: 0, padding: 0, background: 'transparent' }}>
          <code 
            ref={codeRef}
            className={`language-${language} text-sm font-mono leading-relaxed block`}
            style={{ textShadow: 'none', background: 'transparent' }}
            {...props}
          >
            {codeText}
          </code>
        </pre>
      </div>
    </div>
  );
};

export const MarkdownRenderer: React.FC<{ children: string }> = ({ children }) => {
  return (
    <div className="prose prose-invert prose-p:text-slate-300 prose-headings:text-white prose-strong:text-indigo-300 prose-a:text-indigo-400 hover:prose-a:text-indigo-300 max-w-none break-words">
      <ReactMarkdown 
        components={{ 
          pre: PreBlock as any,
          code: CodeBlock as any
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};
