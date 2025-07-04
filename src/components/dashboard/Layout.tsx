'use client'

import { UserButton } from '@clerk/nextjs';
import React, { useState } from 'react';

interface User {
  id: string;
  credits: number | null;
  plan: 'free' | 'premium' | 'supremium';
}

const DashboardLayout = ({
  user,
  children,
}: {
  user: User;
  children: React.ReactNode;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-full md:w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <i className="fas fa-robot text-white text-xl"></i>
            </div>
            <span className="text-xl font-bold text-white">Co<span className="text-primary">Writer</span></span>
          </div>
          <button 
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <div className="p-4 flex-1 overflow-y-auto hide-scrollbar">
          <div className="mb-8">
            <h3 className="text-xs uppercase text-slate-400 font-semibold mb-3 px-3">
              Main
            </h3>
            <ul>
              <li className="mb-1">
                <a
                  href="/dashboard/"
                  className="bg-primary/15 border-l-[3px] border-primary flex items-center p-3 rounded-lg text-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fas fa-home mr-3 text-slate-300"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="/dashboard/my-articles"
                  className="flex items-center p-3 rounded-lg text-slate-300 hover:bg-slate-800"
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fas fa-file-alt mr-3"></i>
                  <span>My Articles</span>
                </a>
              </li>
              <li className="mb-1 hidden">
                <a
                  href="#"
                  className="flex items-center p-3 rounded-lg text-slate-300 hover:bg-slate-800"
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fas fa-bolt mr-3"></i>
                  <span>Templates</span>
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="/dashboard/analytics"
                  className="flex items-center p-3 rounded-lg text-slate-300 hover:bg-slate-800"
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fas fa-chart-line mr-3"></i>
                  <span>Analytics</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-8 hidden">
            <h3 className="text-xs uppercase text-slate-400 font-semibold mb-3 px-3">
              Tools
            </h3>
            <ul>
              <li className="mb-1">
                <a
                  href="/dashboard/seo-optimizer"
                  className="flex items-center p-3 rounded-lg text-slate-300 hover:bg-slate-800"
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fas fa-search mr-3"></i>
                  <span>SEO Optimizer</span>
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="flex items-center p-3 rounded-lg text-slate-300 hover:bg-slate-800"
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fas fa-globe mr-3"></i>
                  <span>Language Translator</span>
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="flex items-center p-3 rounded-lg text-slate-300 hover:bg-slate-800"
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fas fa-sync-alt mr-3"></i>
                  <span>Content Rewriter</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 hidden">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold mr-3">
                JD
              </div>
              <div>
                <h4 className="font-bold text-white"></h4>
                <p className="text-slate-400 text-sm">Pro Plan</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Word Usage</span>
                <span className="text-white">45,000 / 250,000</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '18%' }}
                ></div>
              </div>
              <p className="text-xs text-slate-400 mt-2">Resets in 12 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Always visible */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
          {/* Top Navigation */}
          <header className="bg-white border-b border-slate-200">
            <div className="flex items-center justify-between px-4 md:px-6 py-4">
              <div className="flex items-center">
                <button 
                  className="md:hidden mr-4 text-slate-600"
                  onClick={() => setSidebarOpen(true)}
                >
                  <i className="fas fa-bars text-xl"></i>
                </button>
                <h1 className="text-lg md:text-xl font-bold text-slate-900">Dashboard</h1>
              </div>

              <div className="flex items-center space-x-3 md:space-x-6">
                <div className="relative hidden md:block">
                  <button className="text-slate-500 hover:text-slate-700">
                    <i className="fas fa-bell text-xl"></i>
                  </button>
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>

                <div className="relative hidden md:block">
                  <button className="text-slate-500 hover:text-slate-700">
                    <i className="fas fa-envelope text-xl"></i>
                  </button>
                  <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-orange-200 px-2 md:px-4 py-1 text-xs md:text-sm rounded-2xl">
                    {user.credits ?? 0} Credits
                  </div>
                  <UserButton />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
