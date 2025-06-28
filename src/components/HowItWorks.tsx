// src/components/HowItWorks.js
import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-slate-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">How ArticleForge AI Works</h2>
          <p className="text-lg text-slate-600">Create professional content in three simple steps</p>
        </div>
        
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
          <div className="flex-1">
            <div className="bg-white p-1 rounded-full w-12 h-12 flex items-center justify-center mb-6 text-primary font-bold text-lg">1</div>
            <h3 className="text-2xl font-bold text-dark mb-4">Enter Your Topic</h3>
            <p className="text-slate-600 mb-4">Provide a topic, keyword, or brief description of what you want to write about. You can also specify tone, length, and keywords to include.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gradient-to-br from-primary to-secondary p-1 rounded-2xl w-full max-w-md">
              <div className="bg-white rounded-xl p-6">
                <div className="font-medium mb-2">Topic:</div>
                <div className="bg-slate-50 rounded-lg p-3 mb-4">How to start a successful e-commerce business in 2023</div>
                <div className="font-medium mb-2">Keywords to include:</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">dropshipping</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">shopify</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">digital marketing</span>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded-lg font-medium">Generate Content</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 mb-20">
          <div className="flex-1">
            <div className="bg-white p-1 rounded-full w-12 h-12 flex items-center justify-center mb-6 text-primary font-bold text-lg">2</div>
            <h3 className="text-2xl font-bold text-dark mb-4">AI Generates Content</h3>
            <p className="text-slate-600 mb-4">Our advanced AI analyzes millions of data points to create original, well-structured content tailored to your specifications in seconds.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gradient-to-br from-primary to-secondary p-1 rounded-2xl w-full max-w-md">
              <div className="bg-white rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-bold">Generating Content...</div>
                  <div className="flex">
                    <div className="w-2 h-2 bg-primary rounded-full mx-1 animate-pulse"></div>
                    <div className="w-2 h-2 bg-primary rounded-full mx-1 animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-primary rounded-full mx-1 animate-pulse delay-200"></div>
                  </div>
                </div>
                <div className="h-64 bg-slate-50 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <i className="fas fa-robot text-4xl text-primary mb-4"></i>
                    <p className="font-medium">AI is crafting your content</p>
                    <p className="text-sm text-slate-500">Estimated time: 15 seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex-1">
            <div className="bg-white p-1 rounded-full w-12 h-12 flex items-center justify-center mb-6 text-primary font-bold text-lg">3</div>
            <h3 className="text-2xl font-bold text-dark mb-4">Edit & Publish</h3>
            <p className="text-slate-600 mb-4">Review and refine the generated content using our built-in editor. Then publish directly to your blog, CMS, or download as HTML, PDF, or Word.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gradient-to-br from-primary to-secondary p-1 rounded-2xl w-full max-w-md">
              <div className="bg-white rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-bold">Generated Content</div>
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                      <i className="fas fa-copy text-sm text-slate-600"></i>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                      <i className="fas fa-download text-sm text-slate-600"></i>
                    </button>
                  </div>
                </div>
                <div className="h-64 bg-slate-50 rounded-lg p-4 overflow-y-auto">
                  <h4 className="font-bold mb-2">Starting an E-commerce Business in 2023</h4>
                  <p className="text-sm mb-3">The e-commerce landscape continues to evolve rapidly, with global sales projected to reach $6.3 trillion by 2024. Starting an online store has never been more accessible...</p>
                  <p className="text-sm mb-3">When choosing your business model, consider options like dropshipping, which requires minimal upfront investment. Platforms like Shopify make store setup simple...</p>
                  <p className="text-sm">Effective digital marketing through social media and SEO is crucial. Focus on building trust through customer reviews and secure payment options...</p>
                </div>
                <div className="flex justify-between mt-4">
                  <button className="px-4 py-2 bg-slate-100 rounded-lg font-medium">Regenerate</button>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium">Publish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;