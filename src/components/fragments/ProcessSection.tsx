'use client'

import { motion } from 'framer-motion'
import { Search, FileText, Hammer, HandshakeIcon, ArrowRight, Clock, Shield, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'AI Business Audit',
    timeline: 'Day 1–2',
    description: '60–90 minute diagnostic session. We map your current operations, identify the highest-ROI automation opportunity, and deliver a written prioritised roadmap.',
    deliverable: 'Prioritised AI opportunity report',
    governance: 'POPIA-aligned scoping checklist',
    color: 'bg-sky-50 border-sky-200 text-sky-700',
    iconColor: 'text-sky-600',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Scope & Proposal',
    timeline: 'Day 3–5',
    description: 'Fixed-scope proposal with clear deliverables, timeline, and pricing. No vague retainers. No surprise costs. You decide exactly what gets built.',
    deliverable: 'Signed proposal with fixed deliverables',
    governance: 'Data handling agreement (if client data required)',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
    iconColor: 'text-amber-600',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Demo Sprint',
    timeline: 'Day 6–8 (72 hours)',
    description: 'Sandboxed demo built with representative data. Visual proof of concept in your browser — not integrated into your systems. Validates the use case before major investment.',
    deliverable: 'Working demo + walkthrough session',
    governance: 'Zero client data retention in demo environment',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    iconColor: 'text-emerald-600',
  },
  {
    number: '04',
    icon: Shield,
    title: 'Pilot Build',
    timeline: 'Week 2–5',
    description: 'Real PoC with your actual data, integrated into one workflow or data source. Time-boxed with weekly check-ins. Go/No-Go decision at week 5.',
    deliverable: 'Deployed pilot + validation report',
    governance: 'IBM-aligned governance layer (if regulated)',
    color: 'bg-violet-50 border-violet-200 text-violet-700',
    iconColor: 'text-violet-600',
  },
  {
    number: '05',
    icon: HandshakeIcon,
    title: 'Handover & Scale',
    timeline: 'Week 6+',
    description: 'You own the tools, workflows, and accounts from day one. Optional retainer for optimisation. We make ourselves unnecessary — that is how we know the job was done right.',
    deliverable: 'Full ownership transfer + documentation',
    governance: 'Ongoing POPIA compliance monitoring (optional)',
    color: 'bg-slate-50 border-slate-200 text-slate-700',
    iconColor: 'text-slate-600',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-6">
            <Clock className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">How We Work</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            From first call to <span className="gradient-text">working prototype</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-slate-600">
            A five-step engagement model built for enterprise procurement cycles. Speed where it matters. Rigour where it counts.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-slate-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`rounded-2xl border-2 p-6 h-full ${step.color} hover:shadow-lg transition-all`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm`}>
                        <Icon className={`w-6 h-6 ${step.iconColor}`} />
                      </div>
                      <span className="text-2xl font-bold opacity-20">{step.number}</span>
                    </div>

                    <div className="mb-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-white/60`}>
                        <Clock className="w-3 h-3" />
                        {step.timeline}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{step.description}</p>

                    <div className="space-y-2 pt-4 border-t border-black/10">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-700 font-medium">{step.deliverable}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-500">{step.governance}</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow connector for mobile */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-4 lg:hidden">
                      <ArrowRight className="w-5 h-5 text-slate-300 rotate-90" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-16 text-center">
          <p className="text-slate-500 mb-6">Not sure which step fits your situation? Start with the Audit.</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-600/25">
            Book Your AI Business Audit
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
