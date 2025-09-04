import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ThinkBackCode - Browser-based IDE with AI',
  description: 'Open-source browser-based IDE with AI-powered coding assistance',
  keywords: ['ide', 'browser', 'ai', 'coding', 'assistant', 'monaco', 'terminal'],
  authors: [{ name: 'ThinkBackCode Team' }],
  creator: 'ThinkBackCode Team',
  publisher: 'ThinkBackCode',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thinkbackcode.dev',
    title: 'ThinkBackCode - Browser-based IDE with AI',
    description: 'Open-source browser-based IDE with AI-powered coding assistance',
    siteName: 'ThinkBackCode',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThinkBackCode - Browser-based IDE with AI',
    description: 'Open-source browser-based IDE with AI-powered coding assistance',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
