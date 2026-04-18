'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock, Award, Quote } from 'lucide-react'

const metrics = [
  { icon: Clock, value: '72hrs', label: 'Average PoC Delivery', subtext: 'From kickoff to production' },
  { icon: TrendingUp, value: '85%', label: 'Efficiency Gain', subtext: 'Average process improvement' },
  { icon: Users, value: '3', label: 'Solutions Architects', subtext: 'Dedicated to your success' },
  { icon: Award, value: 'IBM', label: 'Partner Plus', subtext: 'Registered tier, Silver track' },
]

const testimonials = [
  {
    quote: "Kgotla AI delivered a working predictive maintenance model in 3 days. It took our previous vendor 3 months to achieve less accurate results.",
    author: "Chief Operations Officer",
    company: "Top 40 Mining Group",
    metric: "3 days vs 3 months"
  },
  {
    quote: "The speed of execution is unmatched. They understood our enterprise constraints and delivered despite our complex legacy systems.",
    author: "Head of Digital Transformation",
    company: "Financial Services Leader",
    metric: "Zero downtime deployment"
  }
]

export default function ResultsSection() {
  return (
    <section id="results" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-white">Proven Results</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold mb-6">
            Metrics that matter to <span className="text-sky-400">enterprise executives</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div key={metric.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <Icon className="w-8 h-8 text-sky-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-slate-300 mb-1">{metric.label}</div>
                <div className="text-sm text-slate-400">{metric.subtext}</div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + index * 0.1 }} className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 relative">
              <Quote className="w-10 h-10 text-sky-400/30 absolute top-6 left-6" />
              <div className="relative z-10 pt-6">
                <p className="text-lg text-slate-300 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">{testimonial.company}</div>
                  </div>
                  <div className="px-4 py-2 bg-amber-500/20 rounded-lg">
                    <span className="text-amber-400 font-bold text-sm">{testimonial.metric}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
