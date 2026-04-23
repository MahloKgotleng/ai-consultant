'use client'

import { motion } from 'framer-motion'
import { Pickaxe, Landmark, ShoppingCart, Signal, Factory, Zap, Briefcase, Truck } from 'lucide-react'

// REWRITTEN: All industries kept but stats and descriptions made honest.
// "40% downtime reduction", "3x faster reporting", etc. = fabricated metrics with no validated clients.
// "JSE Top 40 mining giants" = implies existing clients.
// "Deep expertise" = overclaim for a 4-person team without sector veterans.

const industries = [
  {
    icon: Pickaxe,
    name: 'Mining & Resources',
    // CHANGED: "Predictive maintenance, safety compliance automation..." → 
    // "Equipment monitoring, compliance tracking, and logistics coordination."
    // Less AI-buzzword heavy. More honest about what workflows you can build.
    description: 'Equipment monitoring, compliance tracking, and logistics coordination. Built for the operational realities of African mining infrastructure.',
    // CHANGED: Use cases scoped to workflow-level, not ML-model-level.
    useCases: ['Maintenance schedule automation', 'Environmental report generation', 'Supply chain status tracking'],
    color: 'bg-amber-500',
    // CHANGED: "40% downtime reduction" → "Pilot-ready use cases identified"
    // No fabricated metric. Honest about what you offer: identifying where AI can help.
    stat: 'Pilot-ready use cases identified'
  },
  {
    icon: Landmark,
    name: 'Financial Services',
    description: 'Regulatory reporting, risk documentation, and client communication workflows. Designed for POPIA-sensitive financial environments.',
    useCases: ['Compliance report automation', 'Client onboarding documentation', 'Internal audit trail generation'],
    color: 'bg-blue-600',
    stat: 'Governance-aligned workflow design'
  },
  {
    icon: ShoppingCart,
    name: 'Retail & Consumer',
    description: 'Inventory tracking, demand documentation, and customer query handling. Workflow automation for retail operations under margin pressure.',
    useCases: ['Stock level alerts and reporting', 'Supplier communication automation', 'Customer query routing'],
    color: 'bg-emerald-600',
    stat: 'Rapid workflow prototyping'
  },
  {
    icon: Signal,
    name: 'Telecommunications',
    description: 'Network status monitoring, customer support triage, and service documentation. Automation for high-volume operational environments.',
    useCases: ['Fault ticket routing', 'Customer support documentation', 'Service level reporting'],
    color: 'bg-purple-600',
    stat: 'High-volume task automation'
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Production documentation, quality tracking, and supplier communication. Workflow automation for lean manufacturing teams.',
    useCases: ['Production log generation', 'Quality checklist automation', 'Supplier status updates'],
    color: 'bg-orange-600',
    stat: 'Process documentation automation'
  },
  {
    icon: Zap,
    name: 'Energy & Utilities',
    description: 'Load monitoring, maintenance scheduling, and regulatory reporting. Built for infrastructure teams managing constrained grids.',
    useCases: ['Maintenance schedule coordination', 'Regulatory filing assistance', 'Load status reporting'],
    color: 'bg-yellow-500',
    stat: 'Regulatory workflow support'
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    description: 'Document handling, client communication, and resource tracking. Automation for legal, accounting, and consulting practices.',
    useCases: ['Contract review workflow', 'Client communication templates', 'Project status tracking'],
    color: 'bg-indigo-600',
    stat: 'Document workflow automation'
  },
  {
    icon: Truck,
    name: 'Logistics & Transport',
    description: 'Route documentation, fleet status tracking, and delivery coordination. Workflow automation for logistics under tight margins.',
    useCases: ['Delivery status updates', 'Fleet maintenance alerts', 'Route documentation generation'],
    color: 'bg-red-600',
    stat: 'Coordination workflow automation'
  }
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Industries We Target</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            {/* CHANGED: "Deep expertise across South Africa's core industries" → 
                "Workflow automation for South Africa's core industries"
                "Deep expertise" = overclaim. "Workflow automation" = honest deliverable. */}
            Workflow automation for <span className="gradient-text">South Africa's core industries</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-slate-600">
            {/* CHANGED: "From JSE Top 40 mining giants to retail leaders, we understand..." →
                "From mining to retail, we design AI workflow pilots for data-rich operational environments."
                "JSE Top 40 mining giants" = implies existing clients. Removed.
                "We understand" = overclaim. "We design" = honest capability. */}
            From mining to retail, we design AI workflow pilots for data-rich operational environments. 
            Sector-agnostic tools. Industry-specific scoping.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div key={industry.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 transition-all cursor-pointer">
                <div className={`w-12 h-12 ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{industry.description}</p>
                <div className="space-y-2 mb-4">
                  {industry.useCases.map((useCase) => (
                    <div key={useCase} className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                      {useCase}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-100">
                  {/* CHANGED: "Typical Result" → "What We Build"
                      "Typical Result" implies these outcomes are normal/expected.
                      "What We Build" = honest about deliverable type. */}
                  <div className="text-xs font-semibold text-primary-600 uppercase tracking-wider">What We Build</div>
                  <div className="text-sm font-bold text-slate-900">{industry.stat}</div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center bg-white rounded-2xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Don't see your industry?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            {/* CHANGED: "Our solutions architects have cross-sector experience..." →
                "Our team builds workflow automation for any data-rich environment."
                "Solutions architects" = seniority inflation. "Team" = honest.
                "AI frameworks adapt" = implies proprietary tech. Removed. */}
            Our team builds workflow automation for any data-rich environment. 
            Let's discuss your specific operational challenge.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all">
            Discuss Your Industry
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
