'use client';

export default function TEST() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  return (
    <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>✅ Environment Variable Test</h2>
      <p>Frontend API URL: {apiUrl}</p>
      <p>Server-side values are hidden (safe)!</p>
    </div>
  );
}
