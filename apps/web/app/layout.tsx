import type { Metadata } from 'next'
import { IBM_Plex_Sans_KR, Space_Grotesk } from 'next/font/google'

import './globals.css'

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

const bodyFont = IBM_Plex_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'CHASM',
  description:
    'Character-IP monetization dashboard for trend discovery, competitor benchmarking, and Japan market expansion.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  )
}
