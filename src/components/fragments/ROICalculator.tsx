'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, TrendingUp, Zap, ChevronRight, Info } from 'lucide-react'

const industries = [
  { id: 'mining',    label: 'Mining',             color: 'amber'  },
  { id: 'financial', label: 'Financial Services',  color: 'emerald'},
  { id: 'manufacturing', label: 'Manufacturing',   color: 'blue'   },
  { id: 'telecom',   label: 'Telecommunications',  color: 'violet' },
]

const sizes = [
  { id: 'small',  label: '50–500 employees',   multiplier: 1   },
  { id: 'medium', label: '500–2 000 employees', multiplier: 3.2 },
  { id: 'large',  label: '2 000+ employees',    multiplier: 8.5 },
]

const challenges: Record<string, { id: string; label: string; baseROI: number; driver: string }[]> = {
  mining: [
    { id: 'maintenance', label: 'Predictive Maintenance',  baseROI: 12400000, driver: 'Unplanned downtime reduction'   },
    { id: 'safety',      label: 'Safety & Compliance',     baseROI: 4800000,  driver: 'Incident cost avoidance'         },
    { id: 'resource',    label: 'Resource Optimisation',   baseROI: 6700000,  driver: 'Extraction yield improvement'    },
  ],
  financial: [
    { id: 'fraud',  label: 'Fraud Detection',         baseROI: 8100000, driver: 'Transaction loss prevention'    },
    { id: 'kyc',    label: 'KYC Document Processing', baseROI: 4200000, driver: 'Manual review hour reduction'   },
    { id: 'credit', label: 'Credit Scoring Engine',   baseROI: 3500000, driver: 'Default rate improvement'       },
  ],
  manufacturing: [
    { id: 'quality',  label: 'Quality Control AI',         baseROI: 3200000, driver: 'Scrap & rework reduction'      },
    { id: 'supply',   label: 'Supply Chain Optimisation',  baseROI: 4500000, driver: 'Logistics cost reduction'       },
    { id: 'production', label: 'Production Optimisation',  baseROI: 5100000, driver: 'OEE improvement'               },
  ],
  telecom: [
    { id: 'network',  label: 'Network Optimisation',   baseROI: 7200000, driver: 'Downtime & SLA penalty reduction'},
    { id: 'churn',    label: 'Customer Churn AI',      baseROI: 3800000, driver: 'Subscriber retention value'      },
    { id: 'service',  label: 'Customer Service AI',    baseROI: 2900000, driver: 'Call centre cost reduction'      },
  ],
}

const colorMap: Record<string, { tab: string; active: string; pill: string; glow: string; num: string }> = {
  amber:   { tab: 'hover:text-amber-600',   active: 'text-amber-600 border-amber-500',   pill: 'bg-amber-50 text-amber-700 border-amber-200',   glow: 'shadow-amber-500/20',   num: 'text-amber-500'   },
  emerald: { tab: 'hover:text-emerald-600', active: 'text-emerald-600 border-emerald-500', pill: 'bg-emerald-50 text-emerald-700 border-emerald-200', glow: 'shadow-emerald-500/20', num: 'text-emerald-400' },
  blue:    { tab: 'hover:text-blue-600',    active: 'text-blue-600 border-blue-500',     pill: 'bg-blue-50 text-blue-700 border-blue-200',     glow: 'shadow-blue-500/20',    num: 'text-blue-400'    },
  violet:  { tab: 'hover:text-violet-600',  active: 'text-violet-600 border-violet-500', pill: 'bg-violet-50 text-violet-700 border-violet-200', glow: 'shadow-violet-500/20',  num: 'text-violet-400'  },
}

function formatROI(n: number) {
  if (n >= 1_000_000) return `R${(n / 1_000_000).toFixed(1)}M`
  return `R${(n / 1_000).toFixed(0)}K`
}

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    let start = 0
    const end   = value
    const steps = 40
    const inc   = end / steps
    const timer = setInterval(() => {
      start += inc
      if (start >= end) { setDisplay(end); clearInterval(timer) }
      else setDisplay(Math.round(start))
    }, 28)
    return () => clearInterval(timer)
  }, [value])
  return <>{formatROI(display)}</>
}

export default function ROICalculator() {
  const [industry,  setIndustry]  = useState('mining')
  const [size,      setSize]      = useState('medium')
  const [challenge, setChallenge] = useState('maintenance')

  const ind      = industries.find(i => i.id === industry)!
  const colors   = colorMap[ind.color]
  const sizeObj  = sizes.find(s => s.id === size)!
  const cList    = challenges[industry]
  const cObj     = cList.find(c => c.id === challenge) ?? cList[0]

  // Auto-select first challenge when industry changes
  useEffect(() => { setChallenge(cList[0].id) }, [industry])

  const roi         = Math.round(cObj.baseROI * sizeObj.multiplier)
  const roiYear1    = Math.round(roi * 0.35)
  const deployWeeks = 12
  const pilotCost   = size === 'small' ? 9500 : size === 'medium' ? 28500 : 65000

  return (
    <section id="roi-calculator" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full mb-6">
            <Calculator className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-semibold text-slate-700">ROI Calculator — Your Numbers</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            What does AI actually <span className="gradient-text">save your operation?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-xl text-slate-500">
            Select your industry, size and challenge. Get a real rand figure — not a made-up percentage.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Controls — left 3 cols */}
          <div className="lg:col-span-3 space-y-8">

            {/* Industry */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">1. Your industry</label>
              <div className="flex flex-wrap gap-2">
                {industries.map(ind => {
                  const c = colorMap[ind.color]
                  const active = industry === ind.id
                  return (
                    <button key={ind.id} onClick={() => setIndustry(ind.id)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all
                        ${active ? `border-current bg-slate-900 text-white` : `border-slate-200 text-slate-600 hover:border-slate-400`}`}>
                      {ind.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">2. Organisation size</label>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map(s => (
                  <button key={s.id} onClick={() => setSize(s.id)}
                    className={`p-4 rounded-xl border-2 text-center transition-all
                      ${size === s.id ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 text-slate-600 hover:border-slate-400'}`}>
                    <div className="text-sm font-semibold leading-tight">{s.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Challenge */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">3. Primary AI use case</label>
              <AnimatePresence mode="wait">
                <motion.div key={industry} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                  {cList.map(c => (
                    <button key={c.id} onClick={() => setChallenge(c.id)}
                      className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 transition-all text-left
                        ${challenge === c.id ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-300'}`}>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{c.label}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{c.driver}</div>
                      </div>
                      <div className={`text-sm font-bold ${challenge === c.id ? colors.num : 'text-slate-400'}`}>
                        {formatROI(c.baseROI)} base
                      </div>
                    </button>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ROI Output — right 2 cols */}
          <motion.div layout className={`lg:col-span-2 bg-slate-900 rounded-3xl p-8 text-white shadow-2xl ${colors.glow}`}>
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-semibold text-slate-400">Your estimated annual ROI</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={`${industry}-${size}-${challenge}`}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <div className={`text-5xl font-bold mb-2 ${colors.num}`}>
                  <AnimatedNumber value={roi} />
                </div>
                <div className="text-slate-400 text-sm mb-8">
                  Modelled for {sizeObj.label} · {cObj.label}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-slate-400 text-sm">Year 1 realised (conservative 35%)</span>
                    <span className="font-bold text-white">{formatROI(roiYear1)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-slate-400 text-sm">Pilot deployment</span>
                    <span className="font-bold text-white">{deployWeeks} weeks</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-slate-400 text-sm">Starting investment</span>
                    <span className="font-bold text-white">R{pilotCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-400 text-sm">ROI multiple (Year 1)</span>
                    <span className={`font-bold text-xl ${colors.num}`}>
                      {(roiYear1 / pilotCost).toFixed(1)}×
                    </span>
                  </div>
                </div>

                <a href="#contact"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                  Book a scoping call around this <ChevronRight className="w-5 h-5" />
                </a>

                <p className="text-xs text-slate-600 text-center mt-4 flex items-start gap-1 justify-center">
                  <Info className="w-3 h-3 mt-0.5 shrink-0" />
                  Estimates powered by IBM watsonx · Based on published industry benchmarks. Actual results depend on baseline data quality and implementation scope.
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
