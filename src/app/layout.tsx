import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Kgotla AI | Enterprise AI Solutions · South Africa',
  description: 'South African AI consultancy designing rapid pilots and automation demos for enterprise. IBM Partner Plus registered. Built for the constraints of African infrastructure.',
  keywords: 'AI consulting, enterprise AI, South Africa, IBM Partner Plus, AI pilot, automation demo, AI proof of concept, intelligent automation',
  openGraph: {
    title: 'Kgotla AI | Enterprise AI Solutions',
    description: 'Rapid AI pilots and automation demos for South African enterprise. IBM Partner Plus registered.',
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
