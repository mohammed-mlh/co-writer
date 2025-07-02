import { auth } from '@clerk/nextjs/server'
import GenerateArticleForm from '@/components/GenerateArticleForm'
import { getArticlesByUserId } from '@/server/articles'
import ArticleTable from './my-articles/ArticleTable';

export default async function DashboardPage() { 
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }
  const recentArticles = await getArticlesByUserId(userId);
  const tableArticles = recentArticles.map(a => ({
    ...a,
    createdAt: a.createdAt ? a.createdAt.toISOString() : undefined,
  }));

  // Dynamic stats
  const totalArticles = recentArticles.length;
  const totalWords = recentArticles.reduce((sum, a) => sum + (a.wordCount || 0), 0);
  // Estimate: 1 min saved per 100 words
  const timeSavedMinutes = Math.round(totalWords / 50);
  const timeSavedHours = Math.floor(timeSavedMinutes / 60);
  const timeSavedMinutesRemainder = timeSavedMinutes % 60;
  // Projects: count unique topics (or contentType if you prefer)
  const uniqueProjects = new Set(recentArticles.map(a => a.topic)).size;

  const templates = [
    { name: 'Blog Post', description: 'Generate engaging blog articles', icon: 'fas fa-blog', color: 'bg-primary/10 text-primary' },
    { name: 'Product Description', description: 'Create compelling product details', icon: 'fas fa-shopping-bag', color: 'bg-blue-50 text-blue-500' },
    { name: 'Social Media Post', description: 'Craft posts for all platforms', icon: 'fas fa-hashtag', color: 'bg-purple-50 text-purple-500' },
    { name: 'Email Newsletter', description: 'Write engaging email content', icon: 'fas fa-envelope', color: 'bg-green-50 text-green-500' },
    { name: 'Ad Copy', description: 'Generate conversion-focused ads', icon: 'fas fa-ad', color: 'bg-amber-50 text-amber-500' }
  ]

  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <div>
              <h3 className="text-slate-500 text-sm font-medium">Articles Generated</h3>
              <p className="text-2xl font-bold text-slate-900 mt-1">{totalArticles}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <i className="fas fa-file-alt text-xl text-primary"></i>
            </div>
          </div>
          {/* You can add a trend indicator here if you have historical data */}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <div>
              <h3 className="text-slate-500 text-sm font-medium">Words Used</h3>
              <p className="text-2xl font-bold text-slate-900 mt-1">{totalWords.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <i className="fas fa-font text-xl text-blue-500"></i>
            </div>
          </div>
          {/* You can add a progress bar or limit info here if needed */}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <div>
              <h3 className="text-slate-500 text-sm font-medium">Time Saved</h3>
              <p className="text-2xl font-bold text-slate-900 mt-1">{timeSavedHours}h {timeSavedMinutesRemainder}m</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
              <i className="fas fa-clock text-xl text-green-500"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-green-500">
              <i className="fas fa-arrow-up mr-1"></i>
              <span>Estimated</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <div>
              <h3 className="text-slate-500 text-sm font-medium">Projects</h3>
              <p className="text-2xl font-bold text-slate-900 mt-1">{uniqueProjects}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center">
              <i className="fas fa-folder text-xl text-purple-500"></i>
            </div>
          </div>
          {/* You can add more project info here if needed */}
        </div>
      </div>

      {/* Quick Templates */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-900">Quick Templates</h2>
          {/* <a href="#" className="text-primary font-medium">See All</a> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {templates.map((template, index) => (
            <div key={index} className={`p-4 border border-slate-200 rounded-lg hover:border-primary transition cursor-pointer ${index==4 && 'col-span-2 md:col-span-1'}`}>
              <div className="flex flex-col text-center items-center gap-2">
                <div className={`w-10 h-10 rounded-lg ${template.color} flex items-center justify-center mr-3`}>
                  <i className={template.icon}></i>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800">{template.name}</h3>
                  <p className="text-sm text-slate-500">{template.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Generate Article Form */}
      <GenerateArticleForm />

        {/* Recent Articles */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900">Recent Articles</h2>
            <a href="/dashboard/my-articles" className="text-primary font-medium">View All</a>
          </div>

          <div className="overflow-x-auto">
          <ArticleTable articles={tableArticles} />
          </div>
        </div>
    </>
  )
}
