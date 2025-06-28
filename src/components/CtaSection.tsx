// src/components/CtaSection.js
import React from 'react';

const CtaSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Content Creation?</h2>
        <p className="text-indigo-100 text-xl mb-10">Join thousands of marketers, writers, and businesses using ArticleForge AI to create amazing content faster.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#pricing" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition shadow-lg">
            Get Started Now
          </a>
          <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">
            <i className="fas fa-comment-alt mr-2"></i>Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;