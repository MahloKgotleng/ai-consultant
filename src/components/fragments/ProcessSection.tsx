'use client'

import { motion } from 'framer-motion'
import { Clock, Search, Code, Rocket, MessageSquare } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery Call',
    duration: 'Hour 0-2',
    description: '30-minute strategic alignment. We identify your highest-impact use case and define success metrics.',
    color: 'bg-blue-500'
  },
  {
    icon: Search,
    title: 'Data Assessment',
    duration: 'Hour 2-8',
    description: 'Our architects analyze your data infrastructure, security requirements, and integration points.',
    color: 'bg-indigo-500'
  },
  {
    icon: Code,
    title: 'Rapid Build',
    duration: 'Hour 8-48',
    description: 'Intensive development sprint. AI models trained, workflows automated, interfaces built.',
    color: 'bg-purple-500'
  },
  {
    icon: Rocket,
    title: 'Deployment',
    duration: 'Hour 48-72',
    description: 'Production deployment in your environment. Security validation. User training. Go-live.',
    color: 'bg-accent-emerald'
  }
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/10 border border-accent-gold/20 rounded-full mb-6">
            <Clock className="w-4 h-4 text-accent-gold" />
            <span className="text-sm font-semibold text-accent-gold">72-Hour Delivery Guarantee</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            From concept to <span className="gradient-text">production in 72 hours</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-slate-600">
            No lengthy RFPs. No months of planning. We prove value first, then scale.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 to-emerald-500 hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="relative">
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 h-full">
                    <div className="text-sm font-bold text-primary-600 mb-2">{step.duration}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
          <p className="text-slate-500 mb-4">Have a specific timeline requirement?</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            Let's discuss your project
            <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
