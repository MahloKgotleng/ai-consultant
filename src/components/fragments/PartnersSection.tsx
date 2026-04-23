'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Shield, Cpu, Globe } from 'lucide-react'

// REWRITTEN: Partners array rebuilt with honest claims only.
// "Enterprise Ready / SOC 2 Compliant / Security First" = FAKE. You are not SOC 2 certified.
// "South Africa / JSE Focused / Deep understanding of Top 40" = implies existing clients.

const partners = [
  {
    name: 'IBM',
    tier: 'Partner Plus Registered',
    status: 'Silver Track',
    icon: Cpu,
    // CHANGED: "Enterprise-grade AI infrastructure and Watson integration" →
    // "Enterprise AI governance and model access via IBM Partner Plus"
    // "Watson integration" implies you have built with Watson. You have access, not integration experience yet.
    description: 'Enterprise AI governance and model access via IBM Partner Plus. watsonx.governance and Granite models available for regulated pilots.'
  },
  {
    name: 'POPIA Aligned',
    tier: 'Privacy by Design',
    status: 'SA Compliant',
    icon: Shield,
    // CHANGED: "Bank-level security standards and data protection" →
    // "South African privacy law built into every workflow design"
    // "Bank-level" = unprovable. "SA privacy law" = specific and honest.
    description: 'South African privacy law built into every workflow design. Data minimisation, purpose limitation, and zero unnecessary retention.'
  },
  {
    name: 'Johannesburg',
    tier: 'Local Operations',
    status: 'SADC Ready',
    icon: Globe,
    // CHANGED: "Deep understanding of Top 40 business landscape" →
    // "Built for African infrastructure constraints — load shedding, limited bandwidth, tight budgets"
    // "Deep understanding" = overclaim. "Built for constraints" = your actual differentiator.
    description: 'Built for African infrastructure constraints — load shedding, limited bandwidth, tight budgets. Maximum performance at minimum overhead.'
  }
]

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-200 rounded-full mb-6">
            <BadgeCheck className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-semibold text-sky-700">Our Positioning</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            {/* CHANGED: "Backed by enterprise-grade infrastructure" →
                "IBM-aligned governance, SA privacy law, African constraints"
                "Backed by" implies IBM endorses you. "IBM-aligned" = honest about access. */}
            IBM-aligned governance, <span className="gradient-text">SA privacy law, African constraints</span>
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
              {/* CHANGED: "As an IBM Partner Plus registered member on the Silver tier track, we combine 
                  Kgotla AI's rapid execution with IBM's enterprise infrastructure. This means 
                  your PoCs are built on technology trusted by Fortune 500 companies worldwide." →
                  
                  "As an IBM Partner Plus registered member, we have access to IBM's enterprise AI stack 
                  including watsonx.governance and Granite models. For clients who need it, we can upgrade 
                  from rapid demos to governed pilots on IBM infrastructure. For everyone else, we keep 
                  costs lean and delivery fast."
                  
                  The original implied ALL your PoCs use IBM infrastructure. This is false — you use 
                  Claude + Make.com for speed, IBM for governance when needed. The new version is honest 
                  about the dual-track approach. */}
              As an IBM Partner Plus registered member, we have access to IBM's enterprise AI stack 
              including watsonx.governance and Granite models. For clients who need it, we can upgrade 
              from rapid demos to governed pilots on IBM infrastructure. For everyone else, we keep 
              costs lean and delivery fast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* CHANGED: "Watson AI Integration" → "watsonx.governance"
                  "Cloud Pak for Data" → REMOVED. You do not have access to or experience with Cloud Pak.
                  "Enterprise Security" → "Granite Model Access"
                  
                  Only list IBM products you can actually speak to. */}
              <div className="px-6 py-3 bg-white/10 rounded-xl text-white font-semibold">
                watsonx.governance
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-xl text-white font-semibold">
                Granite Model Access
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-xl text-white font-semibold">
                IBM SkillsBuild Training
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
