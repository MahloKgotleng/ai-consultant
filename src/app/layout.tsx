import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Kgotla AI | Enterprise AI Solutions for South Africa Top 40',
  description: 'Transforming South Africa\'s largest enterprises with production-ready AI. IBM Partner Plus registered. Proofs of concept delivered in days, not months.',
  keywords: 'AI consulting, enterprise AI, South Africa, JSE Top 40, IBM Partner, AI solutions, digital transformation',
  openGraph: {
    title: 'Kgotla AI | Enterprise AI Solutions',
    description: 'Production-ready AI for South Africa\'s largest enterprises',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
