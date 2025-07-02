import { getArticleById } from '@/server/articles';
import ArticleDetail from './ArticleDetail';
import React from 'react';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const numId = Number(id)

  if (isNaN(numId)) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center text-red-500">
        Invalid article ID.
      </div>
    );
  }

  const article = await getArticleById(numId);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center text-slate-500">
        Article not found.
      </div>
    );
  }

  const detailArticle = {
    ...article,
    createdAt: article.createdAt?.toISOString(),
  };

  return <ArticleDetail article={detailArticle} />;
}
