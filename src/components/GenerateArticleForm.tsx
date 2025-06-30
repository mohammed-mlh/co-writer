'use client'

import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const GenerateArticleForm = () => {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [generationTime, setGenerationTime] = useState(0)
  const [error, setError] = useState('')
  
  // Form state
  const [formData, setFormData] = useState({
    topic: '',
    audience: '',
    tone: 'Professional',
    length: 'Long (800-1200 words)',
    keywords: '',
    contentType: 'Article',
    additionalRequirements: ''
  })

  const contentTypes = ['Blog Post', 'Article', 'Product Desc', 'Social Media', 'Email', 'Ad Copy']

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleGenerateArticle = async () => {
    // Validate required fields
    if (!formData.topic.trim() || !formData.audience.trim()) {
      setError('Please fill in both topic and target audience')
      return
    }

    console.log('Starting article generation with data:', formData)

    setIsGenerating(true)
    setGeneratedContent('')
    setError('')
    setWordCount(0)
    setGenerationTime(0)

    const startTime = Date.now()

    try {
      console.log('Making API request to /api/generate-article')
      
      const response = await fetch('/api/generate-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('API response status:', response.status)
      
      const data = await response.json()
      console.log('API response data:', data)

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate article')
      }

      setGeneratedContent(data.content)
      setWordCount(data.wordCount)
      setGenerationTime(Math.round((Date.now() - startTime) / 1000))
      console.log('Article generated successfully')

    } catch (err) {
      console.error('Error generating article:', err)
      setError(err instanceof Error ? err.message : 'Failed to generate article')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopyContent = async () => {
    try {
      // Remove HTML tags for plain text copy
      const plainText = generatedContent.replace(/<[^>]*>/g, '')
      await navigator.clipboard.writeText(plainText)
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy content:', err)
    }
  }


  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
      {/* Input Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Create New Article</h2>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <div className="mb-6">
          <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="topic">Article Topic *</label>
          <input 
            type="text" 
            id="topic" 
            value={formData.topic}
            onChange={(e) => handleInputChange('topic', e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
            placeholder="Enter your topic here..." 
          />
        </div>

        <div className="mb-6">
          <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="audience">Target Audience *</label>
          <input 
            type="text" 
            id="audience" 
            value={formData.audience}
            onChange={(e) => handleInputChange('audience', e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
            placeholder="e.g., Marketing professionals, Small business owners..." 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="tone">Tone of Voice</label>
            <select 
              id="tone" 
              value={formData.tone}
              onChange={(e) => handleInputChange('tone', e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option>Professional</option>
              <option>Casual</option>
              <option>Enthusiastic</option>
              <option>Informative</option>
              <option>Humorous</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="length">Article Length</label>
            <select 
              id="length" 
              value={formData.length}
              onChange={(e) => handleInputChange('length', e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option>Short (300-500 words)</option>
              <option>Medium (500-800 words)</option>
              <option>Long (800-1200 words)</option>
              <option>Extended (1200-2000 words)</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-slate-700 text-sm font-medium mb-2" htmlFor="keywords">Keywords (comma separated)</label>
          <input 
            type="text" 
            id="keywords" 
            value={formData.keywords}
            onChange={(e) => handleInputChange('keywords', e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
            placeholder="SEO, content, marketing, etc." 
          />
        </div>

        <div className="mb-8">
          <label className="block text-slate-700 text-sm font-medium mb-2">Content Type</label>
          <div className="grid grid-cols-3 gap-3">
            {contentTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => handleInputChange('contentType', type)}
                className={`py-2 border rounded-lg font-medium transition-colors ${formData.contentType === type
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-slate-200 text-slate-700 hover:border-primary hover:bg-primary/10'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className='mb-6'>
        <label className="block text-slate-700 text-sm font-medium mb-2">Additional Requirements</label>
        <textarea 
          value={formData.additionalRequirements}
          onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
          placeholder="Any specific requirements, style preferences, or additional context..." 
        />
        </div>

        <button
          onClick={handleGenerateArticle}
          disabled={isGenerating}
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center disabled:opacity-50 cursor-pointer"
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
            <button 
              onClick={handleCopyContent}
              disabled={!generatedContent}
              className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 disabled:opacity-50"
            >
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

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-l-4 border-primary rounded-lg p-4 mb-4">
          {isGenerating ? (
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <div className="w-2 h-2 bg-primary rounded-full mx-1 animate-pulse"></div>
                <div className="w-2 h-2 bg-primary rounded-full mx-1 animate-pulse" style={{ animationDelay: '0.15s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full mx-1 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              </div>
              <h3 className="font-medium text-slate-700 mb-2">AI is generating your content</h3>
              <p className="text-sm text-slate-500">This usually takes 10-15 seconds</p>
            </div>
          ) : generatedContent ? (
            <div className="prose prose-slate max-w-none">
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
                {generatedContent}
              </ReactMarkdown>
            </div>
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
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">AI Content</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">{formData.contentType}</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">{formData.tone}</span>
                {formData.keywords && (
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">SEO Optimized</span>
                )}
              </div>
              <div className="flex items-center text-sm text-slate-500">
                <div className="flex items-center mr-4">
                  <i className="far fa-clock mr-1"></i>
                  <span>Generated in {generationTime} seconds</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-font mr-1"></i>
                  <span>{wordCount} words</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button 
                onClick={handleGenerateArticle}
                className="px-5 py-2.5 bg-slate-100 rounded-lg font-medium flex items-center hover:bg-slate-200"
              >
                <i className="fas fa-sync-alt mr-2"></i> Regenerate
              </button>
              <button className="px-5 py-2.5 bg-primary text-white rounded-lg font-medium flex items-center hover:bg-primary/90">
                Save Article <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default GenerateArticleForm 