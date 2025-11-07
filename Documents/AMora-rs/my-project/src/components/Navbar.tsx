import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'  // ✅ import kiểu Metadata từ Next.js
import React from 'react'             // ✅ để nhận dạng kiểu React.ReactNode

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Lotte Hotel Saigon Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode  // ✅ Khai báo kiểu rõ ràng cho children
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
