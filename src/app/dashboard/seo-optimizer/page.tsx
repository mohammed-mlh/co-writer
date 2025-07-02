import React from 'react';

export default function SeoOptimizerPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-2 text-slate-900">SEO Optimizer</h1>
      <p className="text-slate-600 mb-8">Analyze and optimize your articles for better search engine performance. Paste your content or provide a URL to get actionable SEO insights.</p>

      {/* SEO Input Form */}
      <form className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-8">
        <div className="mb-4">
          <label htmlFor="content" className="block text-slate-700 text-sm font-medium mb-2">Article Content</label>
          <textarea
            id="content"
            name="content"
            rows={8}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Paste your article content here..."
          />
        </div>
        <div className="mb-4 text-center text-slate-500">or</div>
        <div className="mb-6">
          <label htmlFor="url" className="block text-slate-700 text-sm font-medium mb-2">Article URL</label>
          <input
            type="url"
            id="url"
            name="url"
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="https://example.com/article"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
        >
          Analyze SEO
        </button>
      </form>

      {/* SEO Analysis Results Placeholder */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 min-h-[120px] flex items-center justify-center text-slate-400">
        [SEO analysis results will appear here]
      </div>
    </div>
  );
} 