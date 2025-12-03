'use client';

import { useEffect } from 'react';
import { Cloud, WifiOff, ShieldCheck, BookOpen, Users, Database } from 'lucide-react';

export default function Page() {
  useEffect(() => {
    console.log('✅ API Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative flex flex-col items-center px-6 py-12">
        {/* Header */}
        <header className="w-full max-w-4xl text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-700 text-sm font-medium">Offline-First Learning Platform</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Shiksha<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span>
          </h1>
          <p className="text-gray-600 text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
            Empowering Rural Education through Offline-First Learning
          </p>
        </header>

        {/* Info Cards - Grid 1 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-8">
          {/* Offline Feature */}
          <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 hover:-translate-y-2">
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <WifiOff className="w-7 h-7 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Offline-First PWA</h2>
            <p className="text-gray-600 leading-relaxed">
              Lessons load even without internet using service workers & IndexedDB.
            </p>
          </div>

          {/* Caching */}
          <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Database className="w-7 h-7 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Smart Caching</h2>
            <p className="text-gray-600 leading-relaxed">
              Intelligent caching keeps courses & progress synced seamlessly.
            </p>
          </div>

          {/* Teacher Dashboard */}
          <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-2">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-7 h-7 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Teacher & Student Dashboards</h2>
            <p className="text-gray-600 leading-relaxed">
              Simple, accessible dashboards for tracking learning and performance.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mb-16">
          {/* Multilingual */}
          <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-2">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-7 h-7 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">English + Hindi Support</h2>
            <p className="text-gray-600 leading-relaxed">
              Built for inclusivity with multilingual content support.
            </p>
          </div>

          {/* Secure Auth */}
          <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-7 h-7 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Secure Authentication</h2>
            <p className="text-gray-600 leading-relaxed">
              JWT-based auth ensures safe and reliable access for all users.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <div className="inline-block p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-700 text-lg font-medium mb-2">
              Built with <span className="text-red-500 animate-pulse">❤️</span> for rural learners across India
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}