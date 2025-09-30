import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// 1. Configurez la police Poppins
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Start DRC',
  description: 'Macgenius Webdev Frontend',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* 2. Mettez à jour le className du body */}
      <body className={`font-sans ${poppins.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}