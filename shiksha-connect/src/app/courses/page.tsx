import CourseCard from "@/components/CourseCard";

export default async function CoursesPage() {
  const courses = await fetch("/api/courses").then(res => res.json());

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">

      {/* Floating Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 
        rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="absolute bottom-32 left-10 w-96 h-96 bg-purple-200 
        rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="absolute -top-10 left-1/2 w-64 h-64 bg-pink-200 
        rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        
        {/* Header */}
        <header className="text-center mb-16">

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Explore our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Learning Paths
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Choose from curated, offline-ready courses designed for students in low-bandwidth regions.
          </p>
        </header>

        {/* Courses Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {courses.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No courses available yet.
            </div>
          ) : (
            courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          )}
        </section>
      </div>
    </div>
  );
}
