'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Shield } from 'lucide-react'

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
              <span className="text-sm font-semibold text-primary-700">IBM Partner Plus Registered</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Rapid AI demos <span className="gradient-text">for South African enterprise</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Kgotla AI designs rapid AI pilots and automation demos for South African enterprise. IBM-aligned governance. Built for African infrastructure constraints. From first scoping call to working demo in 72 hours.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-600/25 hover:-translate-y-0.5">
                Book a Scoping Call
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
                <span className="text-sm text-slate-600">POPIA-Aligned Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent-gold" />
                <span className="text-sm text-slate-600">Rapid Demo Delivery</span>
              </div>
            </motion.div>
          </div>
