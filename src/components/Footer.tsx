// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <i className="fas fa-robot text-white text-xl"></i>
              </div>
              <span className="text-xl font-bold text-white">Article<span className="text-primary">Forge</span></span>
            </div>
            <p className="text-slate-400 mb-6">The most advanced AI content generator for marketers, bloggers, and businesses.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-slate-400 hover:text-white"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-slate-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-slate-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition">Features</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Use Cases</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Integrations</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Guides</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Partners</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
          <p>&copy; 2023 CoWriter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;