'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock, Award, Quote } from 'lucide-react'

// REWRITTEN: All metrics made honest and defensible.
// "Average PoC Delivery" → "72hr Demo Sprint" (honest about what hours produces)
// "85% Efficiency Gain" → REMOVED. No validated client data to support this.
// "3 Solutions Architects" → "4-Person Team" (honest headcount, no seniority inflation)
// "IBM Partner Plus, Registered tier, Silver track" → kept, but "Silver track" implies trajectory, not status.
const metrics = [
  { icon: Clock, value: '72hrs', label: 'Demo Sprint', subtext: 'From scoping to working demo' },
  { icon: Users, value: '4', label: 'Team Members', subtext: 'Including 3 implementation specialists' },
  { icon: Award, value: 'IBM', label: 'Partner Plus', subtext: 'Registered tier · Silver track' },
]

// REWRITTEN: All testimonials removed.
// The previous testimonials were fabricated:
// - "Chief Operations Officer, Top 40 Mining Group" — no named person, no consent, no engagement
// - "Head of Digital Transformation, Financial Services Leader" — same issue
// 
// Fabricated testimonials are illegal under SA Consumer Protection Act and 
// will destroy credibility with Pinnacle Micro's channel team.
// 
// Replaced with: Pipeline status + live demo proof points.
const pipeline = [
  {
    status: "Scoping",
    description: "AI automation pilot discussions with SA enterprise clients",
    focus: "Mining & Financial Services"
  },
  {
    status: "In Build",
    description: "RAG knowledge base and workflow automation demos",
    focus: "Coming Soon on our Lab environment"
  }
]

export default function ResultsSection() {
  return (
    <section id="results" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-amber-500" />
            {/* CHANGED: "Proven Results" → "Building Momentum"
                "Proven Results" requires evidence. "Building Momentum" is honest about current stage. */}
            <span className="text-sm font-semibold text-white">Building Momentum</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold mb-6">
            {/* CHANGED: "Metrics that matter to enterprise executives" → "How we work with enterprise"
                You don't have enterprise metrics yet. You have a process. Sell the process. */}
            How we work with <span className="text-sky-400">South African enterprise</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto">
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

        {/* REWRITTEN: Testimonials grid replaced with Pipeline + Proof of Work section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pipeline Status Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <h3 className="text-xl font-semibold text-white">Current Pipeline</h3>
            </div>
            <div className="space-y-6">
              {pipeline.map((item, index) => (
                <div key={index} className="border-l-2 border-sky-400/30 pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-1 bg-sky-400/20 rounded text-xs font-semibold text-sky-300 uppercase tracking-wide">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  <p className="text-sm text-slate-500 mt-1">{item.focus}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-slate-400">
                First published case studies expected Q3 2026. 
                <a href="#contact" className="text-sky-400 hover:text-sky-300 ml-1">Be our first reference client.</a>
              </p>
            </div>
          </motion.div>

          {/* Live Demo Proof Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-amber-400 rounded-full" />
              <h3 className="text-xl font-semibold text-white">Live Proof of Work</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-sky-400/50 mt-1 shrink-0" />
                <div>
                  <p className="text-slate-300 leading-relaxed">
                    Not slides. Not theory. Actual AI systems running live.
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    No signup. No data stored. Try them now.
                  </p>
                </div>
              </div>
              <div className="space-y-3 pt-4">
                <a href="#" className="block p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">AI Business Chatbot</div>
                      <div className="text-sm text-slate-400">Claude API · Zero data retention</div>
                    </div>
                    <span className="text-emerald-400 text-sm font-semibold">Live →</span>
                  </div>
                </a>
                <a href="#" className="block p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">RAG Document Agent</div>
                      <div className="text-sm text-slate-400">Browser-only · POPIA aligned</div>
                    </div>
                    <span className="text-emerald-400 text-sm font-semibold">Live →</span>
                  </div>
                </a>
                <a href="#" className="block p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Document Summarizer</div>
                      <div className="text-sm text-slate-400">GDPR aligned · Enterprise privacy</div>
                    </div>
                    <span className="text-emerald-400 text-sm font-semibold">Live →</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
