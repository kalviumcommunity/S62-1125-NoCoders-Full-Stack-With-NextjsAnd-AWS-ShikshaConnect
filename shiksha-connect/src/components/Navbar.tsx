'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState<"student" | "teacher" | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role") as "student" | "teacher" | null;

    setLoggedIn(!!token);
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setLoggedIn(false);
    setRole(null);
    router.push("/login");
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

          {/* STUDENT MENU */}
          {loggedIn && role === "student" && navItem("My Courses", "/my-courses")}

          {/* TEACHER MENU */}
          {loggedIn && role === "teacher" && navItem("Create Course", "/teacher/create")}

          {/* Common for both roles */}
          {loggedIn && navItem("Dashboard", "/dashboard")}

          {/* AUTH BUTTONS */}
          {!loggedIn ? (
            navItem("Login", "/login")
          ) : (
            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-100 transition"
            >
              Logout
            </button>
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

            {/* Student */}
            {loggedIn && role === "student" && navItem("My Courses", "/my-courses")}

            {/* Teacher */}
            {loggedIn && role === "teacher" && navItem("Create Course", "/teacher/create")}

            {loggedIn && navItem("Dashboard", "/dashboard")}

            {!loggedIn ? (
              navItem("Login", "/login")
            ) : (
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-100"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
