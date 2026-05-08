'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Radio, TrendingUp, AlertTriangle, Zap, RefreshCw, ExternalLink, Clock } from 'lucide-react'

type SectorBrief = {
  sector: string
  score: number
  headline: string
  insight: string
  signal: 'bullish' | 'caution' | 'critical'
  updated?: string
}

// Fallback data — shown while fetching or if swarm is offline
const FALLBACK: SectorBrief[] = [
  {
    sector: 'Mining & Resources',
    score: 87,
    headline: 'Load-shedding mitigation driving AI energy-switch adoption',
    insight: 'SA platinum and gold miners accelerating AI-based load forecasting to reduce Eskom dependency. Anglo American and Sibanye-Stillwater both cited operational AI pilots in Q1 2026 reports.',
    signal: 'bullish',
    updated: 'Today',
  },
  {
    sector: 'Financial Services',
    score: 79,
    headline: 'FSCA sandbox framework opens AI compliance automation window',
    insight: 'FSCA regulatory sandbox now accepting AI-based compliance monitoring applications. Banks are actively seeking B-BBEE Level 1 technology partners for procurement transformation scoring.',
    signal: 'bullish',
    updated: 'Today',
  },
  {
    sector: 'Government & Public Sector',
    score: 64,
    headline: 'SITA tender pipeline opens R2.1B AI modernisation track',
    insight: 'State IT Agency pre-qualifying vendors for the 2026-2027 AI modernisation programme. Preference scoring heavily weighted toward B-BBEE Level 1 and locally-owned providers.',
    signal: 'caution',
    updated: 'Today',
  },
  {
    sector: 'Energy & Utilities',
    score: 91,
    headline: 'Eskom AI integration programme accepting pilot applications',
    insight: 'Eskom Generation division piloting AI predictive maintenance on 4 power stations. Integration partners must hold IBM or equivalent enterprise AI certification. Window closes Q3 2026.',
    signal: 'bullish',
    updated: 'Today',
  },
  {
    sector: 'Healthcare & Life Sciences',
    score: 72,
    headline: 'NHI rollout creating urgent demand for clinical admin AI',
    insight: 'National Health Insurance implementation is forcing public hospitals to digitise patient records and automate administrative workflows. AI vendors with POPIA-compliant architectures have a clear entry point.',
    signal: 'bullish',
    updated: 'Today',
  },
  {
    sector: 'Agriculture & Agri-processing',
    score: 68,
    headline: 'Drought risk pushing precision agriculture AI uptake in Limpopo and Free State',
    insight: 'Commercial farmers facing water restrictions are piloting AI-driven irrigation and crop yield prediction models. AgriSETA and DALRRD are co-funding qualifying technology deployments.',
    signal: 'caution',
    updated: 'Today',
  },
  {
    sector: 'Retail & Consumer',
    score: 75,
    headline: 'Shoprite and Checkers AI inventory pilots signal sector-wide shift',
    insight: 'South Africa\'s top retailers are deploying AI-based demand forecasting to combat shrinkage and overstock losses. Smaller retail chains are now seeking affordable AI pilots to stay competitive.',
    signal: 'bullish',
    updated: 'Today',
  },
  {
    sector: 'Logistics & Transport',
    score: 81,
    headline: 'Transnet corridor delays creating R4.8B AI route optimisation opportunity',
    insight: 'Ongoing Transnet disruptions have accelerated road logistics growth, creating urgent demand for AI-based fleet and route optimisation tools across SA\'s freight sector.',
    signal: 'bullish',
    updated: 'Today',
  },
]

const signalConfig = {
  bullish:  { icon: TrendingUp,    color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20', label: 'Opportunity'  },
  caution:  { icon: AlertTriangle, color: 'text-amber-400',   bg: 'bg-amber-400/10 border-amber-400/20',     label: 'Watch'        },
  critical: { icon: Zap,           color: 'text-red-400',     bg: 'bg-red-400/10 border-red-400/20',          label: 'Urgent'       },
}

function ScoreRing({ score, color }: { score: number; color: string }) {
  const r   = 20
  const circ = 2 * Math.PI * r
  const dash = (score / 100) * circ
  return (
    <svg width="56" height="56" className="shrink-0">
      <circle cx="28" cy="28" r={r} fill="none" stroke="#1e293b" strokeWidth="4" />
      <circle cx="28" cy="28" r={r} fill="none" stroke="currentColor"
        strokeWidth="4" strokeLinecap="round" strokeDasharray={`${dash} ${circ}`}
        strokeDashoffset={circ / 4} className={color} style={{ transition: 'stroke-dasharray 1s ease' }} />
      <text x="28" y="32" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">{score}</text>
    </svg>
  )
}

export default function IntelligenceFeed() {
  const [briefs, setBriefs]       = useState<SectorBrief[]>(FALLBACK)
  const [loading, setLoading]     = useState(true)
  const [lastFetch, setLastFetch] = useState<string>('')
  const [live, setLive]           = useState(false)
  const [showAll, setShowAll]     = useState(false)

  const fetchBriefs = async () => {
    setLoading(true)
    try {
      // Try to pull from Kgotla Intelligence Swarm GitHub Actions output
      const res = await fetch(
        'https://raw.githubusercontent.com/MahloKgotleng/kgotla-intelligence-swarm/main/briefs/latest.json',
        { next: { revalidate: 3600 } }
      )
      if (res.ok) {
        const data = await res.json()
        if (Array.isArray(data) && data.length) {
          setBriefs(data)
          setLive(true)
        }
      }
    } catch {
      // Stay on fallback — already set
    }
    setLastFetch(new Date().toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit' }))
    setLoading(false)
  }

  useEffect(() => { fetchBriefs() }, [])

  return (
    <section id="intelligence" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <Radio className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-white">Kgotla Intelligence Swarm</span>
              <span className={`w-2 h-2 rounded-full ${live ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className={`text-xs font-medium ${live ? 'text-emerald-400' : 'text-amber-400'}`}>
                {live ? 'Live' : 'Cached'}
              </span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-4">
              SA sector intelligence,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">updated daily</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-slate-400 max-w-xl">
              Our AI swarm monitors mining, financial services, government and energy sectors every 24 hours — surfacing the highest-value AI opportunities for SA enterprise. Powered by IBM watsonx.
            </motion.p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {lastFetch && <span className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {lastFetch}</span>}
            <button onClick={fetchBriefs} disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white text-sm rounded-xl hover:bg-white/20 transition-colors disabled:opacity-50">
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>

        {/* Brief Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {briefs.slice(0, showAll ? briefs.length : 4).map((brief, i) => {
            const sig = signalConfig[brief.signal]
            const SigIcon = sig.icon
            return (
              <motion.div key={brief.sector}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all group">

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <ScoreRing score={brief.score} color={
                      brief.score >= 80 ? 'text-emerald-400' : brief.score >= 65 ? 'text-amber-400' : 'text-red-400'
                    } />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-0.5">{brief.sector}</div>
                      <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${sig.bg} ${sig.color}`}>
                        <SigIcon className="w-3 h-3" />
                        {sig.label}
                      </div>
                    </div>
                  </div>
                  {brief.updated && (
                    <span className="text-xs text-slate-600 shrink-0">{brief.updated}</span>
                  )}
                </div>

                <h3 className="font-bold text-white text-base mb-3 leading-snug group-hover:text-cyan-400 transition-colors">
                  {brief.headline}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{brief.insight}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Show More / Less toggle */}
        {briefs.length > 4 && (
          <div className="flex justify-center mt-8">
            <button onClick={() => setShowAll(p => !p)}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-colors">
              {showAll ? 'Show fewer sectors ↑' : `Show all ${briefs.length} sectors ↓`}
            </button>
          </div>
        )}

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl px-8 py-6">
          <div>
            <div className="text-white font-bold mb-1">Want this intelligence in your inbox every morning?</div>
            <div className="text-slate-400 text-sm">The Kgotla Intelligence Swarm runs at 06:00 SAST daily. Sector briefs, opportunity signals, tender alerts.</div>
          </div>
          <a href="mailto:mahlo@kgotlaai.co.za?subject=Intelligence%20Brief%20Subscription"
            className="shrink-0 flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-900 font-bold rounded-xl hover:bg-cyan-400 transition-colors whitespace-nowrap">
            Subscribe Free <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
