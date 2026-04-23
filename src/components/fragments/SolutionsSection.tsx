'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Brain, LineChart, ChevronRight, Check } from 'lucide-react'

const solutions = [
  {
    id: 'intelligent-automation',
    icon: Bot,
    title: 'AI Workflow Automation',
    shortDesc: 'Automate repetitive tasks with intelligent process flows',
    fullDesc: 'Design intelligent workflows that handle document processing, data routing, and notification triggers. Built for teams drowning in manual steps between existing tools. IBM-aligned governance available for regulated environments.',
    benefits: [
      'Reduce manual processing steps by 60–80% in demo scenarios',
      'Connect existing tools via API and webhook automation',
      '24/7 automation of scheduled tasks and notifications',
      'Governance-layer integration for POPIA-sensitive workflows'
    ],
    useCase: 'Invoice processing workflow demo for a mining group finance team'
  },
  {
    id: 'predictive-analytics',
    icon: Brain,
    title: 'AI-Powered Forecasting Pilot',
    shortDesc: 'Test demand forecasting with AI on your historical data',
    fullDesc: 'Run a time-boxed pilot using enterprise AI to analyze your historical data and generate demand forecasts, risk flags, and trend summaries. Output is validated against your actuals, not theoretical benchmarks. IBM Granite models available for regulated sectors.',
    benefits: [
      'Demand forecasting validated against your actual historical data',
      'Risk flag identification from pattern analysis',
      'Executive summary generation from complex datasets',
      'Trend analysis output in plain language for non-technical teams'
    ],
    useCase: '3-week pilot: demand pattern analysis for a retail procurement team'
  },
  {
    id: 'executive-intelligence',
    icon: LineChart,
    title: 'Executive Dashboard Pilot',
    shortDesc: 'Consolidate scattered data into a unified view for leadership',
    fullDesc: 'Build a pilot dashboard that pulls from your existing spreadsheets, databases, and reports into a single command center. Natural language queries for executive access. Designed for leadership who need the picture, not the plumbing.',
    benefits: [
      'Natural language queries for executive users',
      'Automated summary reports from multiple data sources',
      'Single-view dashboard in your preferred interface',
      'Mobile-friendly view for leadership access'
    ],
    useCase: 'Pilot dashboard: operational KPIs for a financial services leadership team'
  }
]

export default function SolutionsSection() {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id)
  const currentSolution = solutions.find(s => s.id === activeSolution)!

  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-3xl mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary-700">AI Pilot Services</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            AI demos and pilots <span className="gradient-text">built for enterprise evaluation</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-slate-600">
            Three service lines. Scoped to your data. Demo in 72 hours, pilot in 2–4 weeks.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              const isActive = activeSolution === solution.id
              return (
                <motion.button key={solution.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} onClick={() => setActiveSolution(solution.id)} className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${isActive ? 'bg-white border-primary-500 shadow-lg shadow-primary-500/10' : 'bg-white border-slate-200 hover:border-slate-300'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${isActive ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-600'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{solution.title}</h3>
                      <p className="text-sm text-slate-600">{solution.shortDesc}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'rotate-90 text-primary-600' : 'text-slate-400'}`} />
                  </div>
                </motion.button>
              )
            })}
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div key={activeSolution} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <currentSolution.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{currentSolution.title}</h3>
                </div>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{currentSolution.fullDesc}</p>
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-slate-900">What You Get</h4>
                  {currentSolution.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Example Scope</div>
                  <p className="text-slate-900 font-medium">{currentSolution.useCase}</p>
                </div>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  Scope this pilot
                  <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
