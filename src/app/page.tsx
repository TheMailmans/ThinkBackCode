'use client'

import { useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            🚀 ThinkBackCode
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Open-source browser-based IDE with AI-powered coding assistance.
            Built from KiloCode, designed to work like Roo Code but in your browser.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">
              🏗️ Currently in Development
            </h2>
            <p className="text-gray-300 mb-6">
              We're building the future of browser-based development environments.
              ThinkBackCode will provide a complete IDE experience with:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center text-green-400">
                  <span className="mr-2">✅</span>
                  <span>VS Code-like Monaco Editor</span>
                </div>
                <div className="flex items-center text-green-400">
                  <span className="mr-2">✅</span>
                  <span>Integrated Terminal (xterm.js)</span>
                </div>
                <div className="flex items-center text-green-400">
                  <span className="mr-2">✅</span>
                  <span>Virtual File System</span>
                </div>
                <div className="flex items-center text-green-400">
                  <span className="mr-2">✅</span>
                  <span>AI Chat Interface</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-blue-400">
                  <span className="mr-2">🔑</span>
                  <span>Flexible API Key Integration</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <span className="mr-2">🤖</span>
                  <span>Multiple AI Provider Support</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <span className="mr-2">🔒</span>
                  <span>Secure Client-side Encryption</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <span className="mr-2">📱</span>
                  <span>Progressive Web App</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-500/20 rounded-lg">
              <p className="text-yellow-200">
                <strong>Target Launch:</strong> Q2 2025 | 
                <strong> Current Phase:</strong> Core Infrastructure Setup
              </p>
            </div>
          </div>
          
          <div className="mt-12 space-x-4">
            <a
              href="https://github.com/TheMailmans/ThinkBackCode"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
            <a
              href="/PROJECT_ROADMAP.md"
              className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              📋 View Roadmap
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
