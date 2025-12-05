"use client";

import { useState, useEffect } from "react";
import { Mail, Lock } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Redirect if already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('token='))
          ?.split('=')[1];

        if (token) {
          const response = await fetch("/api/me", {
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          });

          if (response.ok) {
            router.push("/dashboard/student");
          }
        }
      } catch (error) {
        console.log("No valid session found");
      }
    };

    checkAuth();
  }, [router]);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Login failed");
      }

      // Get redirect URL from search params or default
      const redirectParam = searchParams.get("redirect");
      const userRole = data.user?.role;
      
      let redirectUrl = "/dashboard/student"; // default
      
      if (redirectParam) {
        redirectUrl = decodeURIComponent(redirectParam);
      } else if (userRole === "admin") {
        redirectUrl = "/dashboard"; // admin dashboard
      }

      console.log("Login successful, redirecting to:", redirectUrl);

      // Wait a moment for the cookie to be set, then redirect
      setTimeout(() => {
        console.log("Performing redirect...");
        router.push(redirectUrl);
      }, 500);

    } catch (err: any) {
      setError(err.message || "Login failed");
      // Use console.log instead of console.error for TypeScript compatibility
      console.log("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-12">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Welcome Back
        </h1>
        <p className="text-gray-600 text-center mt-2 text-sm">
          Login to continue learning offline.
        </p>

        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl">
            <Mail className="w-5 h-5 text-gray-600 mr-3" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent flex-1 outline-none text-gray-800"
            />
          </div>

          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl">
            <Lock className="w-5 h-5 text-gray-600 mr-3" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-transparent flex-1 outline-none text-gray-800"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-xl shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline font-medium">
            Sign Up
          </a>
        </p>

        {/* Test credentials info */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700">
          <strong>Test Credentials:</strong><br />
          Email: test@example.com<br />
          Password: password123
        </div>
      </div>
    </div>
  );
}