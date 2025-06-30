import { auth, currentUser } from '@clerk/nextjs/server'
import GenerateArticleForm from '@/components/GenerateArticleForm'
import { ensureUserExists, getUserById } from '@/server/users'

export default async function DashboardPage() { 
  const recentArticles = [
    {
      title: '10 SEO Trends to Watch in 2024',
      type: 'Blog Post',
      date: 'Oct 12, 2023',
      words: 842,
      status: 'Published',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      title: 'How AI is Transforming E-commerce',
      type: 'Article',
      date: 'Oct 10, 2023',
      words: 1240,
      status: 'Draft',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      title: 'Product Description - Smart Watch X3',
      type: 'Product Desc',
      date: 'Oct 8, 2023',
      words: 320,
      status: 'Pending',
      statusColor: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'Social Media Campaign for Holiday Season',
      type: 'Social Media',
      date: 'Oct 5, 2023',
      words: 580,
      status: 'Published',
      statusColor: 'bg-green-100 text-green-800'
    }
  ]

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
              <p className="text-2xl font-bold text-slate-900 mt-1">127</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <i className="fas fa-file-alt text-xl text-primary"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-green-500">
              <i className="fas fa-arrow-up mr-1"></i>
              <span>12% from last month</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <div>
              <h3 className="text-slate-500 text-sm font-medium">Words Used</h3>
              <p className="text-2xl font-bold text-slate-900 mt-1">45,200</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <i className="fas fa-font text-xl text-blue-500"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-slate-500">
              <span>18% of 250,000 limit</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <div>
              <h3 className="text-slate-500 text-sm font-medium">Time Saved</h3>
              <p className="text-2xl font-bold text-slate-900 mt-1">87 hours</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
              <i className="fas fa-clock text-xl text-green-500"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-green-500">
              <i className="fas fa-arrow-up mr-1"></i>
              <span>24 hours this week</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <div>
              <h3 className="text-slate-500 text-sm font-medium">Projects</h3>
              <p className="text-2xl font-bold text-slate-900 mt-1">8</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center">
              <i className="fas fa-folder text-xl text-purple-500"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-slate-500">
              <span>3 completed this month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Templates */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-900">Quick Templates</h2>
          {/* <a href="#" className="text-primary font-medium">See All</a> */}
        </div>

        <div className="grid grid-cols-5 gap-4">
          {templates.map((template, index) => (
            <div key={index} className="p-4 border border-slate-200 rounded-lg hover:border-primary transition cursor-pointer">
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
            <table className="w-full">
              <thead>
                <tr className="text-left text-slate-500 text-sm">
                  <th className="pb-3 font-medium">Title</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Words</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentArticles.map((article, index) => (
                  <tr key={index} className="border-b border-slate-100">
                    <td className="py-4">
                      <div className="font-medium">{article.title}</div>
                      <div className="text-sm text-slate-500">{article.type}</div>
                    </td>
                    <td className="py-4">{article.date}</td>
                    <td className="py-4">{article.words.toLocaleString()}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 ${article.statusColor} rounded-full text-xs`}>
                        {article.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="text-slate-500 hover:text-primary">
                        <i className="fas fa-ellipsis-h"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}
