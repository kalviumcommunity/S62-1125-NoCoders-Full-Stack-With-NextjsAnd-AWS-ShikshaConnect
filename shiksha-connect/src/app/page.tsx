'use client';

import { useEffect } from 'react';
import { WifiOff, ShieldCheck, BookOpen, Database, Smartphone, Battery } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    console.log('✅ API Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      <div className="relative">
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
      
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Learn Without
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mt-2">
                Internet Limitations
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              ShikshaConnect delivers quality education to rural areas with our lightweight, 
              offline-first Progressive Web App.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/signup">
                <button className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 active:scale-95 transition-all focus:ring-2 focus:ring-blue-300 focus:outline-none">
                  Start Learning Free
                </button>
              </Link>
              <Link href="/demo">
                <button className="px-8 py-3.5 border-2 border-blue-200 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Try Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid - */}
        <section className="py-2 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Reliability</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Designed specifically for areas with limited or no internet connectivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Offline First */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-4">
                <WifiOff className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Works Offline</h3>
              <p className="text-gray-600">
                Full functionality without internet. Content syncs automatically when connection is restored.
              </p>
            </div>

            {/* Lightweight */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 mb-4">
                <Battery className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Low Data Usage</h3>
              <p className="text-gray-600">
                Optimized assets and efficient caching. Uses minimal mobile data when online.
              </p>
            </div>

            {/* PWA */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                <Smartphone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Installable App</h3>
              <p className="text-gray-600">
                Install on any device. Works like a native app without app store downloads.
              </p>
            </div>

            {/* Multilingual */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-100 mb-4">
                <BookOpen className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bilingual Interface</h3>
              <p className="text-gray-600">
                Full English and Hindi support. Switch languages anytime.
              </p>
            </div>

            {/* Secure */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-100 mb-4">
                <ShieldCheck className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Sync</h3>
              <p className="text-gray-600">
                Encrypted data synchronization. Your progress is safe and private.
              </p>
            </div>

            {/* Caching */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 mb-4">
                <Database className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Caching</h3>
              <p className="text-gray-600">
                Intelligent cache management. Automatically prioritizes essential content.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Learn Without Limits?
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of students and teachers already using ShikshaConnect in low-connectivity areas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <button className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
                  Create Free Account
                </button>
              </Link>
              <Link href="/features">
                <button className="px-10 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}