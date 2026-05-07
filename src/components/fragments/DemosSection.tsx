'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Banknote, Pickaxe, ShoppingCart, Factory, Radio,
  ExternalLink, X, Play, ChevronRight, Zap
} from 'lucide-react'

const industries = [
  {
    id: 'financial',
    label: 'Financial Services',
    icon: Banknote,
    color: 'emerald',
    demos: [
      { id: 'kyc', title: 'KYC Document Processing', desc: 'AI-powered identity verification and document analysis', path: '/demos/financial/kyc-demo.html', roi: 'R4.2M savings' },
      { id: 'fraud', title: 'Fraud Detection System', desc: 'Real-time transaction anomaly detection at scale', path: '/demos/financial/fraud-detection.html', roi: 'R8.1M protected' },
      { id: 'credit', title: 'Credit Scoring Engine', desc: 'ML-based creditworthiness assessment pipeline', path: '/demos/financial/credit-scoring.html', roi: 'R3.5M efficiency' },
      { id: 'batch', title: 'Batch Processing Tool', desc: 'High-volume financial data processing automation', path: '/demos/financial/batch-processing.html', roi: 'R2.8M saved' },
      { id: 'chatbot', title: 'AI Banking Chatbot', desc: 'Intelligent customer service for financial queries', path: '/demos/financial/chatbot-demo.html', roi: 'R1.9M CX value' },
    ]
  },
  {
    id: 'mining',
    label: 'Mining Industry',
    icon: Pickaxe,
    color: 'amber',
    demos: [
      { id: 'maintenance', title: 'Predictive Maintenance', desc: 'AI-driven equipment failure prevention system', path: '/demos/mining/mining-operations.html', roi: 'R12.4M saved' },
      { id: 'safety', title: 'Safety Monitoring', desc: 'Real-time hazard detection and safety heatmaps', path: '/demos/mining/safety-heatmap.html', roi: 'Zero-harm target' },
      { id: 'resource', title: 'Resource Optimisation', desc: 'AI scheduling and production efficiency engine', path: '/demos/mining/production-optimizer.html', roi: 'R6.7M uplift' },
    ]
  },
  {
    id: 'retail',
    label: 'Retail',
    icon: ShoppingCart,
    color: 'blue',
    demos: [
      { id: 'inventory', title: 'Inventory Management', desc: 'AI-powered stock optimisation and demand forecasting', path: '/demos/financial/financial-services.html', roi: 'R2.1M reduction' },
      { id: 'analytics', title: 'Customer Analytics', desc: 'Behavioural analysis and segmentation engine', path: '/demos/financial/roi-calculator.html', roi: 'R1.8M revenue' },
    ]
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    icon: Factory,
    color: 'violet',
    demos: [
      { id: 'quality', title: 'Quality Control AI', desc: 'Computer vision defect detection system', path: '/demos/mining/mining-operations.html', roi: 'R3.2M scrap savings' },
      { id: 'supply', title: 'Supply Chain Optimisation', desc: 'End-to-end logistics intelligence platform', path: '/demos/mining/production-optimizer.html', roi: 'R4.5M logistics' },
    ]
  },
]

const colorMap: Record<string, { tab: string; active: string; badge: string; btn: string }> = {
  emerald: {
    tab: 'hover:text-emerald-600',
    active: 'text-emerald-600 border-emerald-500',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    btn: 'bg-emerald-600 hover:bg-emerald-700',
  },
  amber: {
    tab: 'hover:text-amber-600',
    active: 'text-amber-600 border-amber-500',
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    btn: 'bg-amber-600 hover:bg-amber-700',
  },
  blue: {
    tab: 'hover:text-blue-600',
    active: 'text-blue-600 border-blue-500',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    btn: 'bg-blue-600 hover:bg-blue-700',
  },
  violet: {
    tab: 'hover:text-violet-600',
    active: 'text-violet-600 border-violet-500',
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    btn: 'bg-violet-600 hover:bg-violet-700',
  },
}

export default function DemosSection() {
  const [activeIndustry, setActiveIndustry] = useState('financial')
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const industry = industries.find(i => i.id === activeIndustry)!
  const colors = colorMap[industry.color]
  const currentDemo = industry.demos.find(d => d.id === activeDemo)

  return (
    <section id="demos" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-white">16 AI Demo Scenarios — IBM Endorsed</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6">
            See enterprise AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">in action</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-xl text-slate-400">
            Real working demos across 5 industries. R45.8M total ROI modelled. Click any demo to explore the scenario.
          </motion.p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-700 pb-0">
          {industries.map((ind) => {
            const Icon = ind.icon
            const c = colorMap[ind.color]
            const isActive = activeIndustry === ind.id
            return (
              <button key={ind.id} onClick={() => { setActiveIndustry(ind.id); setActiveDemo(null) }}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-all duration-200 -mb-px
                  ${isActive ? `${c.active}` : `text-slate-400 border-transparent ${c.tab}`}`}>
                <Icon className="w-4 h-4" />
                {ind.label}
              </button>
            )
          })}
        </div>

        {/* Demo Cards */}
        <AnimatePresence mode="wait">
          <motion.div key={activeIndustry} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.demos.map((demo, idx) => (
              <motion.div key={demo.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.07 }}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-slate-500 transition-all duration-300 group cursor-pointer"
                onClick={() => setActiveDemo(demo.id)}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}>
                    {demo.roi}
                  </div>
                  <Play className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{demo.title}</h3>
                <p className="text-sm text-slate-400 mb-6">{demo.desc}</p>
                <button className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-colors ${colors.btn}`}>
                  <Play className="w-4 h-4" /> Explore Scenario
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-800 border border-slate-700 rounded-3xl p-8">
          <div>
            <div className="text-lg font-bold text-white mb-1">Want a custom demo for your industry?</div>
            <p className="text-slate-400">We build tailored AI pilots in 72 hours using your data and sector context.</p>
          </div>
          <a href="#contact" className="flex-shrink-0 flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
            Request Custom Demo <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {activeDemo && currentDemo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveDemo(null)}>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-6xl h-[85vh] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
                <div>
                  <h3 className="font-bold text-white">{currentDemo.title}</h3>
                  <p className="text-sm text-slate-400">{currentDemo.desc}</p>
                </div>
                <div className="flex items-center gap-3">
                  <a href={currentDemo.path} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white text-sm rounded-lg hover:bg-slate-600 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Open Full Screen
                  </a>
                  <button onClick={() => setActiveDemo(null)}
                    className="p-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {/* iFrame */}
              <iframe src={currentDemo.path} className="flex-1 w-full" title={currentDemo.title} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
