export default function Footer() {
  return (
    <footer className="relative w-full mt-20 pb-10 flex flex-col items-center">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative inline-block px-10 py-6 bg-white/80 backdrop-blur-md 
        rounded-2xl shadow-md border border-gray-200 text-center">
        
        <p className="text-gray-700 text-lg font-medium">
          Built with <span className="text-red-500 animate-pulse">❤️</span> for rural learners across India
        </p>

        <p className="text-sm text-gray-500 mt-2">
          © {new Date().getFullYear()} ShikshaConnect — Empowering Offline Education
        </p>
      </div>
    </footer>
  );
}
