'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Shield, Cpu, Globe } from 'lucide-react'

const partners = [
  {
    name: 'IBM',
    tier: 'Partner Plus Registered',
    status: 'Silver Track',
    icon: Cpu,
    description: 'Enterprise-grade AI infrastructure and Watson integration'
  },
  {
    name: 'Enterprise Ready',
    tier: 'SOC 2 Compliant',
    status: 'Security First',
    icon: Shield,
    description: 'Bank-level security standards and data protection'
  },
  {
    name: 'South Africa',
    tier: 'Local Presence',
    status: 'JSE Focused',
    icon: Globe,
    description: 'Deep understanding of Top 40 business landscape'
  }
]

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-200 rounded-full mb-6">
            <BadgeCheck className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-semibold text-sky-700">Trusted Partnerships</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Backed by <span className="gradient-text">enterprise-grade</span> infrastructure
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon
            return (
              <motion.div key={partner.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 text-center group hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-100 to-sky-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{partner.name}</h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 rounded-full mb-4">
                  <span className="text-sm font-semibold text-sky-700">{partner.tier}</span>
                </div>
                <div className="text-sm font-medium text-amber-500 mb-4">{partner.status}</div>
                <p className="text-slate-600">{partner.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              IBM Partner Plus: Registered Tier
            </h3>
            <p className="text-slate-400 mb-8">
              As an IBM Partner Plus registered member on the Silver tier track, we combine 
              Kgotla AI's rapid execution with IBM's enterprise infrastructure. This means 
              your PoCs are built on technology trusted by Fortune 500 companies worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-white/10 rounded-xl text-white font-semibold">
                Watson AI Integration
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-xl text-white font-semibold">
                Cloud Pak for Data
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-xl text-white font-semibold">
                Enterprise Security
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
