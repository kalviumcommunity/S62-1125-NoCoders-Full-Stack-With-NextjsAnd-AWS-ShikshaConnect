"use client";

import { Clock, User, BookOpen } from "lucide-react";
import Link from "next/link";

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    image?: string;
    lessonCount: number;
    teacherName: string;
    category?: string;
    level?: string;
    duration?: string;
  };
  className?: string;
}

export default function CourseCard({ course, className = "" }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className={`block bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 
      shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer 
      overflow-hidden ${className}`}
    >
      {/* Header / Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-2" />
          <span className="text-sm font-medium text-blue-700">
            {course.category || "Course"}
          </span>
        </div>

        {/* Level Badge */}
        {course.level && (
          <div className="absolute top-3 right-3">
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                course.level === "Beginner"
                  ? "bg-green-100 text-green-800"
                  : course.level === "Intermediate"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {course.level}
            </span>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>{course.lessonCount} lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration || "Self-paced"}</span>
            </div>
          </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {course.teacherName}
              </p>
              <p className="text-xs text-gray-500">Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}