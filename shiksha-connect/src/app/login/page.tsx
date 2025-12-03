"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    console.log("Logging in...");
    setTimeout(() => setLoading(false), 1200);
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

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl">
            <Mail className="w-5 h-5 text-gray-600 mr-3" />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="bg-transparent flex-1 outline-none text-gray-800"
            />
          </div>

          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl">
            <Lock className="w-5 h-5 text-gray-600 mr-3" />
            <input
              type="password"
              placeholder="Password"
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
      </div>
    </div>
  );
}
