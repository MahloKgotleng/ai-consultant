import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import ConsentBanner from '@/components/fragments/ConsentBanner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Kgotla AI Consulting | Industrial Agentic AI — South Africa',
  description: 'IBM-endorsed AI consulting for mining, energy, power, water and government sectors. B-BBEE Level 1. 100% Black-owned. Serving Gauteng and all of South Africa.',
  keywords: 'AI consulting South Africa, agentic AI, IBM watsonx, mining AI, energy AI, B-BBEE Level 1, Gauteng AI consultant, industrial AI, government AI South Africa',
  openGraph: {
    title: 'Kgotla AI Consulting | Industrial Agentic AI',
    description: 'IBM-endorsed AI consulting for mining, energy, power, water and government. B-BBEE Level 1. 100% Black-owned.',
    url: 'https://kgotlaai.co.za',
    siteName: 'Kgotla AI Consulting',
    locale: 'en_ZA',
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
      <body className="antialiased font-sans">
        {children}
        <ConsentBanner />
      </body>
    </html>
  )
}
