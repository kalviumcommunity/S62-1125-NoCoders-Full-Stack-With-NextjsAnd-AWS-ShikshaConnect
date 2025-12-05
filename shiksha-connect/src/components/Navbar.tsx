'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, LogOut } from "lucide-react";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('token='))
        ?.split('=')[1];

      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      const response = await fetch("/api/me", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    // Clear the token cookie
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setUser(null);
    
    // Force a page reload to clear any cached state
    window.location.href = "/";
  };

  const navItem = (label: string, href: string) => (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition
        ${pathname === href
          ? "text-blue-600 bg-blue-100"
          : "text-gray-700 hover:bg-gray-100"}`}
    >
      {label}
    </Link>
  );

  if (loading) {
    return (
      <nav className="sticky top-0 z-30 bg-white/70 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="animate-pulse bg-gray-200 rounded h-8 w-32"></div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-30 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-700">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center">
            S
          </div>
          <span>ShikshaConnect</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">

          {navItem("Home", "/")}
          {navItem("Courses", "/courses")}

          {/* AUTHENTICATED USER MENU */}
          {user && navItem("Dashboard", "/dashboard")}

          {/* AUTH BUTTONS */}
          {!user ? (
            navItem("Login", "/login")
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Welcome, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-100 transition"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(!open)}
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur-md py-3">
          <div className="flex flex-col gap-2 px-6">

            {navItem("Home", "/")}
            {navItem("Courses", "/courses")}

            {user && navItem("Dashboard", "/dashboard")}

            {!user ? (
              navItem("Login", "/login")
            ) : (
              <div className="pt-2 border-t">
                <p className="text-sm text-gray-600 mb-2">
                  Welcome, {user.name}
                </p>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-100"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
