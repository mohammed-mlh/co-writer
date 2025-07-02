import React from 'react';

interface Article {
  id: number;
  title: string;
  createdAt?: string;
  wordCount?: number;
}

interface ArticleTableProps {
  articles: Article[];
}

const ArticleTable: React.FC<ArticleTableProps> = ({ articles }) => (
  <div className="overflow-x-auto rounded-lg shadow border border-slate-100 bg-white">
    <table className="min-w-full divide-y divide-slate-200">
      <thead className="bg-slate-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Title</th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Created At</th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Word Count</th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-slate-100">
        {articles.length === 0 ? (
          <tr>
            <td colSpan={4} className="px-6 py-8 text-center text-slate-400">No articles found.</td>
          </tr>
        ) : (
          articles.map((article) => (
            <tr key={article.id} className="hover:bg-slate-50 transition">
              <td className="px-6 py-4 font-medium text-slate-900">{article.title}</td>
              <td className="px-6 py-4 text-slate-600">{article.createdAt ? new Date(article.createdAt).toLocaleDateString() : '-'}</td>
              <td className="px-6 py-4 text-slate-600">{article.wordCount || '-'}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <a href={`/dashboard/article/${article.id}`} className="px-3 py-1 text-xs bg-primary text-white rounded hover:bg-primary/90 transition">View</a>
                  <button className="px-3 py-1 text-xs bg-red-100 text-red-600 rounded hover:bg-red-200 transition">Delete</button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default ArticleTable; 