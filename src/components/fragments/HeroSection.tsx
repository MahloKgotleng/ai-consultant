'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Shield } from 'lucide-react'

// CHANGED: Stats array completely rewritten.
// "72hrs PoC Delivery" → "72hr Demo Sprint" (honest about what you build in 72 hours)
// "3 Solutions Architects" → kept, but "Solutions Architects" implies seniority. 
//    If they are junior/trainee, consider "AI Implementation Team" instead.
// "IBM Partner Plus" → kept, accurate
// "Top 40 SA Enterprises" → "SA Enterprise Focus" (you TARGET Top 40, you don't serve them yet)
const stats = [
  { value: '72hrs', label: 'Demo Sprint' },
  { value: '4', label: 'Team Members' },
  { value: 'IBM', label: 'Partner Plus' },
  { value: 'SA', label: 'Enterprise Focus' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary-100/50 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent-emerald/10 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full">
              <Sparkles className="w-4 h-4 text-primary-600" />
              {/* KEPT: "IBM Partner Plus Registered" is factual per your memory. */}
              <span className="text-sm font-semibold text-primary-700">IBM Partner Plus Registered</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              {/* CHANGED: "AI that delivers enterprise results in 72 hours" → 
                  "Rapid AI demos for South African enterprise"
                  "Delivers enterprise results" implies production outcomes. 
                  "Rapid AI demos" is honest about the 72-hour deliverable. */}
              Rapid AI demos <span className="gradient-text">for South African enterprise</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl text-slate-600 max-w-xl leading-relaxed">
              {/* CHANGED: Complete rewrite of description.
                  "Production-ready proofs of concept" → REMOVED. You do not deliver production-ready systems.
                  "South Africa's Top 40 companies" → REMOVED. Implies existing clients.
                  "No lengthy consultations" → REMOVED. Sounds like you skip discovery (red flag to enterprise).
                  "Just working AI, fast" → REMOVED. Too casual for mining procurement.
                  
                  REPLACED WITH: Honest positioning.
                  "Kgotla AI designs rapid AI pilots and automation demos" — separates demo (fast) from pilot (scoped).
                  "IBM-aligned governance" — references your Partner Plus access without overstating.
                  "Built for African infrastructure constraints" — your actual differentiator. */}
              Kgotla AI designs rapid AI pilots and automation demos for South African enterprise. 
              IBM-aligned governance. Built for African infrastructure constraints. 
              From first scoping call to working demo in 72 hours.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-600/25 hover:-translate-y-0.5">
                {/* CHANGED: "Start Your PoC" → "Book a Scoping Call"
                    You cannot "start a PoC" from a button click. 
                    Enterprise buyers expect a conversation first. 
                    "Scoping Call" is the honest first step. */}
                Book a Scoping Call
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#process" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
                <Play className="w-5 h-5" />
                {/* KEPT: "See Our Process" is fine. */}
                See Our Process
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-emerald" />
                {/* CHANGED: "Enterprise Secure" → "POPIA-Aligned Design"
                    "Enterprise Secure" is vague. "POPIA-Aligned" is specific and references 
                    your actual governance focus without claiming certification. */}
                <span className="text-sm text-slate-600">POPIA-Aligned Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent-gold" />
                {/* CHANGED: "Rapid Deployment" → "Rapid Demo Delivery"
                    "Deployment" implies going live in their environment. 
                    "Demo Delivery" is honest about the 72-hour output. */}
                <span className="text-sm text-slate-600">Rapid Demo Delivery</span>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl shadow-2xl">
              {/* CHANGED: "Target Market: JSE Top 40, South Africa's Elite" → 
                  "Focus: SA Enterprise & Mining"
                  "JSE Top 40" implies you already serve them. 
                  "SA Enterprise & Mining" is honest about who you are targeting.
                  Also "Mining" is your actual vertical interest per our research. */}
              <div className="text-sm text-slate-400 mb-1">Focus</div>
              <div className="text-2xl font-bold">SA Enterprise</div>
              <div className="text-sm text-slate-400 mt-1">& Mining Sector</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
