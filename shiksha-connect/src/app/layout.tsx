import "../globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ShikshaConnect",
  description: "Fun, Offline Learning for Every Child",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-sky-50 to-pink-50 text-slate-800 font-sans min-h-screen flex flex-col">
        
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
