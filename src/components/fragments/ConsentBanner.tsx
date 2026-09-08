'use client'

import { useEffect, useState } from 'react'

const GA_ID = 'G-Q3CP1ZXGD2'
const CONSENT_KEY = 'kgotla_analytics_consent'

function loadGoogleAnalytics() {
  if (document.getElementById('ga-script')) return

  const script = document.createElement('script')
  script.id = 'ga-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  const inline = document.createElement('script')
  inline.id = 'ga-inline'
  inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `
  document.head.appendChild(inline)
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY)
    if (stored === 'granted') {
      loadGoogleAnalytics()
    } else if (stored === null) {
      setVisible(true)
    }
    // stored === 'denied' → do nothing, no scripts load
  }, [])

  const accept = () => {
    window.localStorage.setItem(CONSENT_KEY, 'granted')
    loadGoogleAnalytics()
    setVisible(false)
  }

  const decline = () => {
    window.localStorage.setItem(CONSENT_KEY, 'denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-slate-900 border-t border-slate-700 px-4 py-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-slate-300 leading-relaxed">
          We don't track visitors by default. If you'd like to help us understand which pages are
          useful (anonymised, aggregate usage only — never tied to who you are), you can opt in below.
          Declining changes nothing about your experience on this site.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium text-slate-300 border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
