import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticleDetailProps {
  article: {
    title: string;
    createdAt?: string;
    wordCount?: number;
    tone?: string;
    contentType?: string;
    content: string;
  };
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => (
  <>
    <h1 className="text-3xl font-bold mb-2 text-slate-900">{article.title}</h1>
    <div className="flex items-center flex-wrap gap-4 text-sm text-slate-500 mb-6">
      <span>Created: {article.createdAt ? new Date(article.createdAt).toLocaleString() : '-'}</span>
      <span>Word Count: {article.wordCount || '-'}</span>
      <span className="bg-primary/10 text-primary px-2 py-1 rounded">{article.tone}</span>
      <span className="bg-primary/10 text-primary px-2 py-1 rounded">{article.contentType}</span>
    </div>
    <div className="prose prose-slate max-w-none bg-white rounded-xl p-6 border border-slate-100">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="text-3xl font-bold text-slate-900 mb-4 mt-6 first:mt-0">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-bold text-slate-900 mb-3 mt-5">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-semibold text-slate-900 mb-2 mt-4">{children}</h3>,
          h4: ({ children }) => <h4 className="text-lg font-semibold text-slate-900 mb-2 mt-3">{children}</h4>,
          p: ({ children }) => <p className="text-slate-700 mb-4 leading-relaxed">{children}</p>,
          ul: ({ children }) => <ul className="list-disc list-inside text-slate-700 mb-4 space-y-1">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside text-slate-700 mb-4 space-y-1">{children}</ol>,
          li: ({ children }) => <li className="text-slate-700">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
          em: ({ children }) => <em className="italic text-slate-600">{children}</em>,
          blockquote: ({ children }) => <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600 mb-4">{children}</blockquote>,
          code: ({ children }) => <code className="bg-slate-100 px-2 py-1 rounded text-slate-800 font-mono text-sm">{children}</code>,
          pre: ({ children }) => <pre className="bg-slate-100 p-4 rounded-lg overflow-x-auto mb-4 text-slate-800">{children}</pre>,
          a: ({ href, children }) => <a href={href} className="text-blue-600 hover:text-blue-800 underline">{children}</a>,
          table: ({ children }) => <div className="overflow-x-auto mb-4"><table className="min-w-full border border-slate-300">{children}</table></div>,
          th: ({ children }) => <th className="border border-slate-300 px-4 py-2 text-left text-slate-900 font-semibold">{children}</th>,
          td: ({ children }) => <td className="border border-slate-300 px-4 py-2 text-slate-700">{children}</td>,
        }}
      >
        {article.content}
      </ReactMarkdown>
    </div>
  </>
);

export default ArticleDetail; 