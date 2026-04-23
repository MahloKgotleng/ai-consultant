'use client'

import { motion } from 'framer-motion'
import { Target, Users, Rocket, Award, Building2, TrendingUp } from 'lucide-react'

// REWRITTEN: Values completely rebuilt.
// "Mission-Driven" → kept concept but honest about stage
// "Speed First" → removed "72-hour PoC delivery isn't a marketing claim" (it was exactly that)
// "Deep Expertise" → removed "Three dedicated solutions architects" (implies seniority) and "Enterprise infrastructure built into every solution" (you don't build infrastructure)
const values = [
  {
    icon: Target,
    title: 'Enterprise Focus',
    // CHANGED: "Democratizing enterprise AI... No enterprise left behind" → 
    // "Targeting South Africa's largest enterprises with rapid AI pilots."
    // "Democratizing" is NGO language. "Targeting" is honest business language.
    // "No enterprise left behind" is unprovable aspiration.
    desc: 'Targeting South Africa\'s largest enterprises with rapid AI pilots and automation demos. From mining to financial services, we scope fast and build faster.'
  },
  {
    icon: Rocket,
    title: 'Rapid Validation',
    // CHANGED: "72-hour PoC delivery isn't a marketing claim—it's our operating model" → 
    // "72-hour demo sprints to validate AI use cases before major investment."
    // The original was defensive and dishonest. This is honest about what 72 hours produces.
    // "Prove value before asking for commitment" → kept concept but honest framing.
    desc: '72-hour demo sprints to validate AI use cases before major investment. See a working prototype in your browser before signing a pilot contract.'
  },
  {
    icon: Users,
    title: 'Lean Team',
    // CHANGED: "Three dedicated solutions architects. IBM Partner Plus registered. Enterprise infrastructure built into every solution." →
    // "4-person team including implementation specialists. IBM SkillsBuild-trained. Partner Plus registered, Silver tier track."
    // "Solutions Architects" → "implementation specialists" (honest about current seniority)
    // "Enterprise infrastructure built into every solution" → REMOVED. You build workflows, not infrastructure.
    desc: '4-person team including implementation specialists. IBM SkillsBuild-trained in AI Fundamentals, Generative AI, and Granite. Partner Plus registered, Silver tier track.'
  }
]

// REWRITTEN: Stats grid rebuilt.
// "40+ Target Enterprises" → "SA Enterprise & Mining" (you don't have 40+ clients)
// "3 Solutions Architects" → "4 Team Members" (honest headcount)
// "IBM Partner Plus, Silver Track" → kept but accurate
// "72hrs PoC Delivery" → "72hr Demo Sprint" (honest label)
const stats = [
  { icon: Building2, value: 'SA', label: 'Enterprise Focus', sub: 'Mining & Financial Services' },
  { icon: Users, value: '4', label: 'Team Members', sub: 'Implementation Specialists' },
  { icon: Award, value: 'IBM', label: 'Partner Plus', sub: 'Registered · Silver Track' },
  { icon: TrendingUp, value: '72hrs', label: 'Demo Sprint', sub: 'Scoping to Prototype' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-6">
              <Award className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">About Kgotla AI</span>
            </motion.div>
            
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              {/* KEPT: "Built by South Africans, for South African enterprise" — this is strong and honest. */}
              Built by South Africans, <span className="gradient-text">for South African enterprise</span>
            </motion.h2>
          </div>
          
          <div className="flex items-center">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-slate-600 leading-relaxed">
              {/* CHANGED: Complete rewrite of founder narrative.
                  "South Africa's largest enterprises deserve access to world-class AI without the enterprise bloat" → 
                  "Kgotla AI is a Johannesburg-based consultancy designing rapid AI pilots for enterprise."
                  
                  "Bootstrapped, lean, and laser-focused" → kept but honest about what that means.
                  "Delivering measurable AI value in 72 hours" → "Delivering working AI demos in 72 hours, scoped pilots in 2–4 weeks."
                  
                  The original implied you skip process. Enterprise buyers need process. */}
              Kgotla AI is a Johannesburg-based consultancy designing rapid AI pilots and automation demos for South African enterprise. We are bootstrapped, lean, and focused on one thing — reducing the time from "AI idea" to "working prototype" without skipping governance or scoping.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                  <Icon className="w-8 h-8 text-primary-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-slate-300 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-500">{stat.sub}</div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 italic mb-6">
            {/* CHANGED: "We don't sell AI. We deliver business outcomes that happen to use AI." →
                "We don't sell AI slides. We deliver working systems that happen to use AI."
                "Business outcomes" implies guaranteed ROI. "Working systems" is honest about deliverables. */}
            "We don't sell AI slides. We deliver working systems that happen to use AI."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <div className="text-left">
              <div className="font-bold text-slate-900">Mahlo Kgotleng</div>
              {/* CHANGED: "Director & Founder, Kgotla AI Pty Ltd" → 
                  "Founder & AI Strategist, Kgotla AI Pty Ltd"
                  "Director" is a legal title but sounds corporate for a 4-person team.
                  "AI Strategist" is honest about your role (strategy + client-facing build). */}
              <div className="text-sm text-slate-500">Founder & AI Strategist, Kgotla AI Pty Ltd</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
