
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-orange-50 to-orange-100 dark:from-zinc-800 dark:to-black px-6 py-16 font-sans text-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-50">
          ShikshaConnect
        </h1>
        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Empowering Rural Education through Offline-First Learning
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <a
          href="#"
          className="rounded-full bg-orange-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-orange-700"
        >
          Get Started
        </a>
        <a
          href="#"
          className="rounded-full border border-orange-600 px-6 py-3 text-lg font-semibold text-orange-600 transition hover:bg-orange-100 dark:hover:bg-zinc-800"
        >
          Learn More
        </a>
      </div>

      <footer className="mt-20 text-sm text-zinc-500 dark:text-zinc-500">
        © {new Date().getFullYear()} ShikshaConnect — Built with Next.js & ❤️
      </footer>
    </div>
  );
}
