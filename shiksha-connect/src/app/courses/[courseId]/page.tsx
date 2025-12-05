'use client';

import {
  BookOpen,
  Clock,
  Users,
  Star,
  WifiOff,
  ArrowLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function CourseDetailPage({ params }: { params: { id: string } }) {

  const course = {
    id: params.id,
    title: "Fundamentals of Mathematics",
    description:
      "A comprehensive mathematics course for Classes 6–10 with offline-ready lessons.",
    category: "Mathematics",
    level: "Beginner",
    duration: "8 weeks",
    lessonCount: 12,
    enrolledStudents: 1250,
    rating: 4.8,
    offlineAvailable: true,
    teacherName: "Mr. Arun Sharma",
    teacherBio:
      "15+ years teaching in rural schools, known for simplifying complex concepts.",

    requirements: [
      "Basic understanding of numbers",
      "No prior training required",
    ],

    whatYouLearn: [
      "Perform arithmetic confidently",
      "Solve algebra equations",
      "Understand geometric properties",
      "Interpret basic data",
    ],

    modules: [
      {
        id: "1",
        title: "Introduction to Numbers",
        duration: "45 min",
        lessons: [
          { id: "1", title: "Whole Numbers", duration: "10 min" },
          { id: "2", title: "Fractions", duration: "12 min" },
          { id: "3", title: "Decimals", duration: "23 min" },
        ],
      },
      {
        id: "2",
        title: "Arithmetic Operations",
        duration: "60 min",
        lessons: [
          { id: "4", title: "Addition Basics", duration: "20 min" },
          { id: "5", title: "Subtraction Basics", duration: "18 min" },
          { id: "6", title: "Multiplication Intro", duration: "22 min" },
          { id: "7", title: "Division Basics", duration: "25 min" },
        ],
      },
    ]
  };

  const [openModule, setOpenModule] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <Link href="/courses" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600">
          <ArrowLeft className="w-4 h-4" /> Back to Courses
        </Link>
      </div>

      {/* Main Wrapper */}
      <div className="max-w-6xl mx-auto px-6 pb-12">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT COLUMN (2/3 width) */}
          <div className="lg:col-span-2 space-y-10">

            {/* Course Summary */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border shadow-sm">
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">{course.category}</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">{course.level}</span>
                {course.offlineAvailable && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full flex items-center gap-1">
                    <WifiOff className="w-3 h-3" /> Offline
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
              <p className="text-gray-600 mb-4">{course.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4">
                <Stat label="Lessons" value={course.lessonCount} icon={<BookOpen className="w-5 h-5 text-blue-600" />} />
                <Stat label="Duration" value={course.duration} icon={<Clock className="w-5 h-5 text-green-600" />} />
                <Stat label="Students" value={course.enrolledStudents} icon={<Users className="w-5 h-5 text-purple-600" />} />
                <Stat label="Rating" value={course.rating} icon={<Star className="w-5 h-5 text-amber-600" />} />
              </div>
            </div>

            {/* Modules (Accordion) */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Course Modules</h2>

              <div className="space-y-3">
                {course.modules.map((module) => {
                  const isOpen = openModule === module.id;

                  return (
                    <div key={module.id} className="border border-gray-200 rounded-xl overflow-hidden">

                      <button
                        onClick={() => setOpenModule(isOpen ? null : module.id)}
                        className="w-full flex justify-between items-center p-4 hover:bg-gray-50"
                      >
                        <div>
                          <h3 className="font-semibold text-gray-900">{module.title}</h3>
                          <p className="text-sm text-gray-600">
                            {module.lessons.length} lessons • {module.duration}
                          </p>
                        </div>
                        <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-90" : ""}`} />
                      </button>

                      {/* Lessons inside dropdown */}
                      {isOpen && (
                        <div className="bg-gray-50 border-t">
                          {module.lessons.map((lesson) => (
                            <Link
                              key={lesson.id}
                              href={`/courses/${course.id}/lessons/${lesson.id}`}
                              className="flex justify-between items-center p-4 pl-8 hover:bg-white border-b last:border-0"
                            >
                              <p className="text-gray-900">{lesson.title}</p>
                              <p className="text-sm text-gray-500 flex items-center gap-1">
                                <Clock className="w-4 h-4" /> {lesson.duration}
                              </p>
                            </Link>
                          ))}
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Sidebar) */}
          <div className="space-y-8">

            {/* Instructor Card */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Instructor</h2>

              <p className="text-lg font-semibold text-gray-900">{course.teacherName}</p>
              <p className="text-sm text-gray-600 mb-3">Mathematics Teacher</p>

              <p className="text-gray-700 leading-relaxed">{course.teacherBio}</p>
            </div>

            {/* Requirements Card */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-2">
                {course.requirements.map((req, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You'll Learn Card */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What You’ll Learn</h2>
              <ul className="space-y-2">
                {course.whatYouLearn.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* Small Stat Component */
function Stat({ label, value, icon }: any) {
  return (
    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-lg font-bold text-gray-900">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
}
