"use client";

import { BookOpen, Users, Plus, BarChart3, FolderOpen, Settings } from "lucide-react";
import Link from "next/link";

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
      
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Teacher</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Manage your classes, lessons, and student progress with ease.
        </p>
      </header>

      {/* Action Buttons */}
      <div className="max-w-6xl mx-auto mb-10 flex gap-4 flex-wrap">
        
        <Link href="/dashboard/teacher/create-course">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition flex items-center gap-2">
            <Plus className="w-5 h-5" /> Create New Course
          </button>
        </Link>

        <Link href="/dashboard/teacher/settings">
          <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-2">
            <Settings className="w-5 h-5 text-gray-700" /> Settings
          </button>
        </Link>
      </div>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">

        {/* Total Students */}
        <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100 hover:border-green-300 hover:-translate-y-2">
          <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <Users className="w-7 h-7 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">120 Students</h2>
          <p className="text-gray-600 mt-2">Students enrolled across your courses.</p>
        </div>

        {/* Total Courses */}
        <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100 hover:border-blue-300 hover:-translate-y-2">
          <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <BookOpen className="w-7 h-7 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">8 Courses</h2>
          <p className="text-gray-600 mt-2">Manage, edit and update different lessons.</p>
        </div>

        {/* Progress Analytics */}
        <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100 hover:border-purple-300 hover:-translate-y-2">
          <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
            <BarChart3 className="w-7 h-7 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
          <p className="text-gray-600 mt-2">Track student performance and course completion.</p>
        </div>

      </section>

      {/* Courses Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Your Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Each Course Card */}
          {["Math Basics", "English Grammar", "Science Level 1"].map((course, idx) => (
            <div
              key={idx}
              className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <FolderOpen className="w-7 h-7 text-blue-600" />
                <span className="text-sm text-gray-500">Updated 3 days ago</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">{course}</h3>
              <p className="text-gray-600 mt-2 text-sm">
                24 Students · 12 Lessons
              </p>

              <Link href={`/dashboard/teacher/course/${idx}`}>
                <button className="mt-5 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition w-full">
                  Open Course
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-10 mb-6">
        Built with ❤️ for teachers at ShikshaConnect.
      </footer>

    </div>
  );
}
