'use client';

import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { RotateCcw } from 'lucide-react';

type CodeDisplayProps = {
  markdown: string;
  language?: string;
};

const SyntaxHighlighter = dynamic(
  async () => {
    const mod = await import('react-syntax-highlighter');
    return mod.Prism;
  },
  {
    ssr: false,
    loading: () => (
      <div className='w-full rounded-lg border border-slate-800 bg-slate-900/70 p-4'>
        <div className='space-y-2'>
          <div className='h-3 w-3/4 animate-pulse rounded bg-slate-700/60' />
          <div className='h-3 w-full animate-pulse rounded bg-slate-700/60' />
          <div className='h-3 w-5/6 animate-pulse rounded bg-slate-700/60' />
          <div className='h-3 w-2/3 animate-pulse rounded bg-slate-700/60' />
        </div>
      </div>
    ),
  },
);

const CodeDisplay = ({
  markdown,
  language: defaultLanguage,
}: CodeDisplayProps) => {
  const [highlighterFailed, setHighlighterFailed] = useState(false);

  // Memoize the markdown components to prevent recreating on every render
  const markdownComponents = useMemo(
    () => ({
      p: ({
        children,
        ...props
      }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
          className='mb-4 last:mb-0 text-lg leading-relaxed text-slate-100'
          {...props}
        >
          {children}
        </p>
      ),
      code: ({
        inline,
        className,
        children,
        ...props
      }: any): React.ReactNode => {
        const match = /language-(\w+)/.exec(className ?? '');
        const language = match?.[1] ?? defaultLanguage;
        if (inline || !language) {
          return (
            <code
              className='rounded bg-slate-800/80 px-1.5 py-0.5 text-sm text-slate-100'
              {...props}
            >
              {children}
            </code>
          );
        }

        // Fallback to plain text if syntax highlighter failed
        if (highlighterFailed) {
          return (
            <div className='my-4 overflow-hidden rounded-lg border border-slate-800 bg-slate-900/80'>
              <pre className='p-4 overflow-x-auto text-sm font-mono text-slate-100 bg-slate-900 leading-relaxed code-scrollbar'>
                {String(children).replace(/\n$/, '')}
              </pre>
              <div className='px-4 py-2 border-t border-slate-800 bg-slate-900/50 flex items-center gap-2'>
                <button
                  onClick={() => {
                    setHighlighterFailed(false);
                    window.location.reload();
                  }}
                  className='flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors'
                >
                  <RotateCcw size={14} />
                  Retry syntax highlighting
                </button>
              </div>
            </div>
          );
        }

        return (
          <div className='my-4 overflow-hidden rounded-lg border border-slate-800 bg-slate-900/80 code-block-wrapper code-scrollbar'>
            <SyntaxHighlighter
              language={language}
              style={oneDark}
              PreTag='div'
              customStyle={{
                margin: 0,
                padding: '1rem',
                background: '#0f172a',
                fontSize: '0.9rem',
                lineHeight: '1.6',
                overflowX: 'auto',
              }}
              {...props}
              onError={() => setHighlighterFailed(true)}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
            {/* :global(code) means: Do NOT add scope hash (e.g. class-name.jsx-abc123) but target actual code elements globally inside this component, so that the styles apply to the code elements used in the syntax highlighter library, since those won't have the scope hash.*/}
            <style jsx>{`
              .code-block-wrapper :global(code) {
                background: transparent !important;
              }
              .code-scrollbar ::-webkit-scrollbar {
                height: 6px;
              }
              .code-scrollbar ::-webkit-scrollbar-track {
                background: rgba(0, 0, 0, 0.1);
                border-radius: 10px;
              }
              .code-scrollbar ::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 10px;
                cursor: grab;
              }
              .code-scrollbar ::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 255, 255, 0.3);
                cursor: grab;
              }
              .code-scrollbar ::-webkit-scrollbar-thumb:active {
                cursor: grabbing;
              }
            `}</style>
          </div>
        );
      },
    }),
    [defaultLanguage, highlighterFailed],
  );

  return (
    <ReactMarkdown components={markdownComponents}>{markdown}</ReactMarkdown>
  );
};

export default React.memo(CodeDisplay);
