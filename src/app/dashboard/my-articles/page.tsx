import { currentUser } from "@clerk/nextjs/server";
import { getArticlesByUserId } from "@/server/articles";
import ArticleTable from "./ArticleTable";

export default async function MyArticles() {
  const user = await currentUser();
  const articles = await getArticlesByUserId(user?.id || "");
  // Map createdAt to string for the table component
  const tableArticles = articles.map(a => ({
    ...a,
    createdAt: a.createdAt ? a.createdAt.toISOString() : undefined,
  }));
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2 text-slate-900">My Articles</h1>
      <p className="text-slate-600 mb-8">Check all your articles below.</p>
      
      <ArticleTable articles={tableArticles} />
    </div>
  );
}