"use client";

import {
  Play,
  Pause,
  Clock,
  ArrowLeft,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  WifiOff,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";

export default function LessonClient({
  course,
  lesson,
  courseId,
}: any) {
  const [completed, setCompleted] = useState(lesson.progress?.completed || false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Flatten all lessons from all modules
  const lessons = course.modules.flatMap((m) => m.lessons);

  const currentIndex = lessons.findIndex((l) => l.id === lesson.id);

  const prevLesson = lessons[currentIndex - 1];
  const nextLesson = lessons[currentIndex + 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      {/* TOP NAV */}
      <div className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            href={`/courses/${course.id}`}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </Link>

          <div>
            <h1 className="font-semibold text-gray-900">{course.title}</h1>
            <p className="text-sm text-gray-600">{lesson.title}</p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex gap-6">

        {/* LEFT CONTENT */}
        <div className="flex-1">

          {/* HEADER */}
          <div className="bg-white/80 border rounded-2xl p-6 mb-6">
            <div className="flex gap-2 mb-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                Lesson
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                {lesson.duration}
              </span>
              {lesson.downloadable && (
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full flex items-center gap-1">
                  <WifiOff className="w-4 h-4" /> Offline available
                </span>
              )}
            </div>

            <h1 className="text-2xl font-bold">{lesson.title}</h1>
            <p className="text-gray-600 mt-2">{lesson.summary}</p>

            <button
              onClick={() => setCompleted(true)}
              className={`mt-4 px-4 py-2 rounded-lg flex items-center gap-2 ${
                completed
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <CheckCircle className="w-5 h-5" />
              {completed ? "Completed" : "Mark Complete"}
            </button>
          </div>

          {/* VIDEO */}
          <div className="bg-white/80 border rounded-2xl p-6 mb-6">
            <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center relative">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-white" />
                  ) : (
                    <Play className="w-10 h-10 text-white" />
                  )}
                </div>
              </button>

              <p className="absolute bottom-4 left-4 text-white text-sm opacity-60">
                Video unavailable (demo)
              </p>
            </div>
          </div>

          {/* NOTES */}
          {lesson.notes && (
            <Section title="Notes">
              <p className="text-gray-700">{lesson.notes}</p>
            </Section>
          )}

          {/* TRANSCRIPT */}
          {lesson.transcript && (
            <Section title="Transcript">
              <div className="max-h-60 overflow-y-auto text-sm text-gray-700">
                {lesson.transcript}
              </div>
            </Section>
          )}

          {/* NAVIGATION */}
          <div className="flex justify-between mt-8">
            <LessonNav
              disabled={!prevLesson}
              href={`/courses/${courseId}/lessons/${prevLesson?.id}`}
              label="Previous"
              iconLeft
            />
            <LessonNav
              disabled={!nextLesson}
              href={`/courses/${courseId}/lessons/${nextLesson?.id}`}
              label="Next"
            />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-72 hidden lg:block">
          <div className="bg-white/80 border rounded-2xl p-5 sticky top-6 max-h-[80vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">All Lessons</h3>

            {lessons.map((l) => (
              <Link
                key={l.id}
                href={`/courses/${courseId}/lessons/${l.id}`}
                className={`block p-3 rounded-lg mb-2 ${
                  l.id === lesson.id
                    ? "bg-blue-50 border border-blue-200"
                    : "hover:bg-gray-50"
                }`}
              >
                <p className="font-medium">{l.title}</p>
                <p className="text-sm text-gray-500">{l.duration}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

/* --- REUSABLE COMPONENTS --- */

function Section({ title, children }: any) {
  return (
    <div className="bg-white/80 border rounded-2xl p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
}

function LessonNav({ disabled, href, label, iconLeft = false }: any) {
  const base = "px-6 py-3 rounded-lg flex items-center gap-2 font-medium";

  if (disabled)
    return (
      <button className={`${base} opacity-40 bg-gray-200 cursor-not-allowed`}>
        {iconLeft && <ChevronLeft className="w-5 h-5" />}
        {label}
      </button>
    );

  return (
    <Link href={href} className={`${base} bg-blue-600 text-white hover:bg-blue-700`}>
      {iconLeft && <ChevronLeft className="w-5 h-5" />}
      {label}
      {!iconLeft && <ChevronRight className="w-5 h-5" />}
    </Link>
  );
}
