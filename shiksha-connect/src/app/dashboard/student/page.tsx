"use client";

import { BookOpen, BadgeCheck, Clock, FolderOpen, Layers } from "lucide-react";
import Link from "next/link";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
      
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome, 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            {" "}Student
          </span>
        </h1>
        <p className="text-gray-600 mt-2">
          Continue your learning journey anywhere, even offline.
        </p>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">

        {/* Courses Enrolled */}
        <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100 hover:border-blue-300 hover:-translate-y-2">
          <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <Layers className="w-7 h-7 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">5 Courses</h2>
          <p className="text-gray-600 mt-2">You’re actively learning in 5 subjects.</p>
        </div>

        {/* Completed Lessons */}
        <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100 hover:border-green-300 hover:-translate-y-2">
          <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <BadgeCheck className="w-7 h-7 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">24 Completed</h2>
          <p className="text-gray-600 mt-2">Great job! Keep progressing.</p>
        </div>

        {/* Hours Spent */}
        <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100 hover:border-purple-300 hover:-translate-y-2">
          <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
            <Clock className="w-7 h-7 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">12+ Hours</h2>
          <p className="text-gray-600 mt-2">Time spent learning this month.</p>
        </div>

      </section>

      {/* Enrolled Courses */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Your Enrolled Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* List of Sample Courses */}
          {[
            { title: "Math Basics", progress: 75 },
            { title: "Science Level 1", progress: 40 },
            { title: "English Grammar", progress: 90 },
          ].map((course, idx) => (
            <div
              key={idx}
              className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100 hover:border-indigo-200 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="w-7 h-7 text-indigo-600" />
                <span className="text-sm text-gray-500">{course.progress}% complete</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
              <div className="mt-3 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 bg-indigo-600 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <Link href={`/dashboard/student/course/${idx}`}>
                <button className="mt-5 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition w-full">
                  Continue Learning
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Lessons */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Upcoming Lessons</h2>

        <div className="space-y-5">
          {[ 
            { title: "Fractions - Level 2", course: "Math Basics", date: "Tomorrow" },
            { title: "Nouns & Verbs", course: "English Grammar", date: "In 2 days" },
            { title: "Plants & Life", course: "Science Level 1", date: "Friday" },
          ].map((lesson, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-900">{lesson.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{lesson.course}</p>
              <p className="text-gray-700 font-medium mt-2">{lesson.date}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-10 mb-6">
        Keep learning. You're doing amazing! 🚀  
      </footer>

    </div>
  );
}
