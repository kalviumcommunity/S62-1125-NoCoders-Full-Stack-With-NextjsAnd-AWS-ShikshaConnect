'use client';

import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    console.log('✅ API Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Env Test Page</h1>
      <p>Check the console to see your API Base URL 👇</p>
    </div>
  );
}
