'use client'

import { UserButton } from '@clerk/nextjs'
import React, { useState } from 'react'


const DashboardComponent = () => {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState('')
  const [selectedContentType, setSelectedContentType] = useState('Article')


  const handleGenerateArticle = () => {
    setIsGenerating(true)
    setGeneratedContent('')

    setTimeout(() => {
      setGeneratedContent(`
        <h3 class="font-bold text-lg mb-2">The Future of AI in Content Marketing</h3>
        <p class="text-slate-700 mb-3">Artificial intelligence is rapidly transforming the content marketing landscape. With advanced natural language processing capabilities, AI tools can now generate human-like content that engages audiences and drives conversions.</p>
        <p class="text-slate-700 mb-3">The integration of AI in content creation workflows allows marketers to produce high-quality material at unprecedented speeds. This efficiency gain frees up creative professionals to focus on strategy and high-level creative direction.</p>
        <p class="text-slate-700">As we look toward 2024, AI content generation is becoming increasingly sophisticated. Marketers who leverage these tools will gain a competitive advantage by producing personalized content at scale, optimizing for SEO automatically, and analyzing content performance in real-time.</p>
      `)
      setIsGenerating(false)
    }, 3000)
  }

  const contentTypes = ['Blog Post', 'Article', 'Product Desc', 'Social Media', 'Email', 'Ad Copy']

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
    { name: 'Blog Post', description: 'Generate engaging blog articles', icon: 'fas fa-blog', color: 'bg-indigo-50 text-primary' },
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
            <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center">
              <i className="fas fa-file-alt text-xl text-indigo-600"></i>
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
          {/* <a href="#" className="text-indigo-600 font-medium">See All</a> */}
        </div>

        <div className="grid grid-cols-5 gap-4">
          {templates.map((template, index) => (
            <div key={index} className="p-4 border border-slate-200 rounded-lg hover:border-indigo-600 transition cursor-pointer">
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

      {/* Content Generation Area */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
        {/* Input Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Create New Article</h2>

          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="topic">Article Topic *</label>
            <input type="text" id="topic" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Enter your topic here..." />
          </div>

          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="topic">Target Audience *</label>
            <input type="text" id="topic" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Enter your topic here..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="tone">Tone of Voice</label>
              <select id="tone" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                <option>Professional</option>
                <option>Casual</option>
                <option>Enthusiastic</option>
                <option>Informative</option>
                <option>Humorous</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="length">Article Length</label>
              <select id="length" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                <option>Short (300-500 words)</option>
                <option>Medium (500-800 words)</option>
                <option defaultChecked>Long (800-1200 words)</option>
                <option>Extended (1200-2000 words)</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="keywords">Keywords (comma separated)</label>
            <input type="text" id="keywords" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="SEO, content, marketing, etc." />
          </div>

          <div className="mb-8">
            <label className="block text-slate-700 text-sm font-medium mb-2">Content Type</label>
            <div className="grid grid-cols-3 gap-3">
              {contentTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedContentType(type)}
                  className={`py-2 border rounded-lg font-medium transition-colors ${selectedContentType === type
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                    : 'border-slate-200 text-slate-700 hover:border-indigo-600 hover:bg-indigo-50'
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className='mb-6'>
          <label className="block text-slate-700 text-sm font-medium mb-2">Additional Requirements</label>
          <textarea  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Any specific requirements, style preferences, or additional context..." />
          </div>

          <button
            onClick={handleGenerateArticle}
            disabled={isGenerating}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center disabled:opacity-50 cursor-pointer"
          >
            <i className="fas fa-bolt mr-2"></i>
            {isGenerating ? 'Generating...' : 'Generate Article'}
          </button>
        </div>

        {/* Output Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900">Generated Article</h2>
            <div className="flex space-x-2">
              <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200">
                <i className="fas fa-copy text-slate-600"></i>
              </button>
              <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200">
                <i className="fas fa-download text-slate-600"></i>
              </button>
              <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200">
                <i className="fas fa-ellipsis-h text-slate-600"></i>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-400 rounded-lg p-4 mb-4">
            {isGenerating ? (
              <div className="text-center py-12">
                <div className="flex justify-center mb-4">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mx-1 animate-pulse"></div>
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mx-1 animate-pulse" style={{ animationDelay: '0.15s' }}></div>
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mx-1 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                </div>
                <h3 className="font-medium text-slate-700 mb-2">AI is generating your content</h3>
                <p className="text-sm text-slate-500">This usually takes 10-15 seconds</p>
              </div>
            ) : generatedContent ? (
              <div dangerouslySetInnerHTML={{ __html: generatedContent }} />
            ) : (
              <div className="text-center py-12 text-slate-500">
                <i className="fas fa-file-alt text-4xl mb-4"></i>
                <p>Generated content will appear here</p>
              </div>
            )}
          </div>

          {generatedContent && (
            <>
              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AI Content</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Marketing</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SEO</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Digital Strategy</span>
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <div className="flex items-center mr-4">
                    <i className="far fa-clock mr-1"></i>
                    <span>Generated in 14 seconds</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-font mr-1"></i>
                    <span>427 words</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button className="px-5 py-2.5 bg-slate-100 rounded-lg font-medium flex items-center hover:bg-slate-200">
                  <i className="fas fa-sync-alt mr-2"></i> Regenerate
                </button>
                <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-medium flex items-center hover:bg-indigo-700">
                  Save Article <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Recent Articles & Templates */}
      <div className="dgrid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Articles */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900">Recent Articles</h2>
            <a href="#" className="text-indigo-600 font-medium">View All</a>
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
                      <button className="text-slate-500 hover:text-indigo-600">
                        <i className="fas fa-ellipsis-h"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  )
}

export default DashboardComponent 