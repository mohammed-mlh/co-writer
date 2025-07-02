import { getArticleById } from '@/server/articles';
import ArticleDetail from './ArticleDetail';
import React from 'react';

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return <div className="max-w-3xl mx-auto py-12 text-center text-red-500">Invalid article ID.</div>;
  }

  const article = await getArticleById(id);
  if (!article) {
    return <div className="max-w-3xl mx-auto py-12 text-center text-slate-500">Article not found.</div>;
  }

  const detailArticle = {
    ...article,
    createdAt: article.createdAt ? article.createdAt.toISOString() : undefined,
  };

  return <ArticleDetail article={detailArticle} />;
}
