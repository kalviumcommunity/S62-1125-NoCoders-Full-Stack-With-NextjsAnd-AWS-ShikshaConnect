// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-4xl font-extrabold text-sky-700 mb-4">
        Welcome to ShikshaConnect! 🎒
      </h1>
      <p className="text-lg text-slate-700 max-w-xl mb-6">
        Learn anytime, anywhere — even without internet.  
        Fun lessons, colorful quizzes, and progress tracking made simple!
      </p>
      <button className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold px-6 py-3 rounded-xl shadow-md transition">
        Start Learning 🚀
      </button>
    </main>
  )
}
