import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q3CP1ZXGD2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q3CP1ZXGD2');
          `}
        </Script>
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
