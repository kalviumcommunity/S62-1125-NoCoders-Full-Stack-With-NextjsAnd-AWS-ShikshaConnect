// src/app/layout.tsx
import '../globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'ShikshaConnect',
  description: 'Fun, Offline Learning for Every Child',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-sky-50 to-pink-50 text-slate-800 font-sans">
        {children}
      </body>
    </html>
  )
}
