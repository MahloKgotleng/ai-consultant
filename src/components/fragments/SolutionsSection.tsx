'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Brain, LineChart, ChevronRight, Check } from 'lucide-react'

const solutions = [
  {
    id: 'intelligent-automation',
    icon: Bot,
    title: 'Intelligent Process Automation',
    shortDesc: 'Eliminate repetitive tasks with AI-powered workflows',
    fullDesc: 'Deploy intelligent agents that understand context, make decisions, and execute complex business processes autonomously. From document processing to customer onboarding, we build systems that think and act.',
    benefits: ['Reduce processing time by 85%', 'Eliminate human error in data entry', '24/7 operation without fatigue', 'Seamless integration with SAP/Oracle'],
    useCase: 'Automated invoice processing for a Top 40 mining group'
  },
  {
    id: 'predictive-analytics',
    icon: Brain,
    title: 'Predictive Analytics Engine',
    shortDesc: 'Forecast trends and optimize decisions with machine learning',
    fullDesc: 'Transform historical data into forward-looking intelligence. Our models predict demand, identify risks, and recommend optimal actions before humans recognize the patterns.',
    benefits: ['Demand forecasting with 94% accuracy', 'Early warning systems for supply chain', 'Dynamic pricing optimization', 'Churn prediction and prevention'],
    useCase: 'Demand forecasting for a major retail chain'
  },
  {
    id: 'executive-intelligence',
    icon: LineChart,
    title: 'Executive Intelligence Dashboard',
    shortDesc: 'Real-time insights tailored for C-suite decision making',
    fullDesc: 'Consolidate disparate data sources into a unified command center. Natural language queries, automated reporting, and predictive scenarios give executives the full picture instantly.',
    benefits: ['Natural language queries', 'Automated board reporting', 'Scenario modeling', 'Mobile-first design for execs'],
    useCase: 'Real-time operational dashboard for a financial services CEO'
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
            <span className="text-sm font-semibold text-primary-700">Enterprise Solutions</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            AI solutions built for <span className="gradient-text">enterprise complexity</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-slate-600">
            Three proven frameworks. Customized to your data. Deployed in days.
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
                <h4 className="font-semibold text-slate-900">Key Benefits</h4>
                {currentSolution.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent-emerald/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent-emerald" />
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Real Use Case</div>
                <p className="text-slate-900 font-medium">{currentSolution.useCase}</p>
              </div>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Discuss this solution
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
