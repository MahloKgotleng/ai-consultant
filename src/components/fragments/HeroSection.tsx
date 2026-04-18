'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Shield } from 'lucide-react'

const stats = [
  { value: '72hrs', label: 'PoC Delivery' },
  { value: '3', label: 'Solutions Architects' },
  { value: 'IBM', label: 'Partner Plus' },
  { value: 'Top 40', label: 'SA Enterprises' },
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
              <span className="text-sm font-semibold text-primary-700">IBM Partner Plus Registered</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              AI that delivers <span className="gradient-text">enterprise results</span> in 72 hours
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Kgotla AI builds production-ready proofs of concept for South Africa's Top 40 companies. No lengthy consultations. No theoretical frameworks. Just working AI, fast.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-600/25 hover:-translate-y-0.5">
                Start Your PoC
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#process" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
                <Play className="w-5 h-5" />
                See Our Process
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-emerald" />
                <span className="text-sm text-slate-600">Enterprise Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent-gold" />
                <span className="text-sm text-slate-600">Rapid Deployment</span>
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
              <div className="text-sm text-slate-400 mb-1">Target Market</div>
              <div className="text-2xl font-bold">JSE Top 40</div>
              <div className="text-sm text-slate-400 mt-1">South Africa's Elite</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
