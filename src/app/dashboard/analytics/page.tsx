import React from 'react';
import { auth } from '@clerk/nextjs/server';
import { getArticlesByUserId } from '@/server/articles';

export default async function AnalyticsPage() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error('User not authenticated');
  }
  const articles = await getArticlesByUserId(userId);

  // Stats calculations
  const totalArticles = articles.length;
  const totalWords = articles.reduce((sum, a) => sum + (a.wordCount || 0), 0);
  const avgWordCount = totalArticles > 0 ? Math.round(totalWords / totalArticles) : 0;
  const typeCounts: Record<string, number> = {};
  articles.forEach(a => {
    if (a.contentType) {
      typeCounts[a.contentType] = (typeCounts[a.contentType] || 0) + 1;
    }
  });
  const mostCommonType = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || '-';

  // Top articles by word count
  const topArticles = [...articles]
    .sort((a, b) => (b.wordCount || 0) - (a.wordCount || 0))
    .slice(0, 5)
    .map(a => ({
      id: a.id,
      title: a.title,
      wordCount: a.wordCount,
      createdAt: a.createdAt ? a.createdAt.toISOString() : '',
    }));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2 text-slate-900">Analytics</h1>
      <p className="text-slate-600 mb-8">Gain insights into your content generation trends, productivity, and performance.</p>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-slate-500 text-sm font-medium mb-1">Total Articles</h3>
          <p className="text-2xl font-bold text-slate-900">{totalArticles}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-slate-500 text-sm font-medium mb-1">Total Words</h3>
          <p className="text-2xl font-bold text-slate-900">{totalWords.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-slate-500 text-sm font-medium mb-1">Avg. Word Count</h3>
          <p className="text-2xl font-bold text-slate-900">{avgWordCount}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-slate-500 text-sm font-medium mb-1">Most Common Type</h3>
          <p className="text-2xl font-bold text-slate-900">{mostCommonType}</p>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-10 flex flex-col items-center justify-center min-h-[260px]">
        <span className="text-slate-400 mb-2"><i className="fas fa-chart-line text-2xl"></i></span>
        <p className="text-slate-500">[Chart: Articles generated per week will appear here]</p>
        {/* Integrate a chart library like recharts, chart.js, or nivo here */}
      </div>

      {/* Top Articles Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Top Articles by Word Count</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Word Count</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Created At</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {topArticles.map(article => (
                <tr key={article.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-medium text-slate-900">{article.title}</td>
                  <td className="px-6 py-4 text-slate-600">{article.wordCount}</td>
                  <td className="px-6 py-4 text-slate-600">{article.createdAt ? new Date(article.createdAt).toLocaleDateString() : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 