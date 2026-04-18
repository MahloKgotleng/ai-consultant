'use client'

import { motion } from 'framer-motion'
import { Pickaxe, Landmark, ShoppingCart, Signal, Factory, Zap, Briefcase, Truck } from 'lucide-react'

const industries = [
  {
    icon: Pickaxe,
    name: 'Mining & Resources',
    description: 'Predictive maintenance, safety compliance automation, and mineral processing optimization.',
    useCases: ['Equipment failure prediction', 'Environmental compliance monitoring', 'Supply chain logistics'],
    color: 'bg-amber-500',
    stat: '40% downtime reduction'
  },
  {
    icon: Landmark,
    name: 'Financial Services',
    description: 'Risk modeling, automated compliance reporting, and customer intelligence platforms.',
    useCases: ['Credit risk scoring', 'Fraud detection', 'Regulatory reporting automation'],
    color: 'bg-blue-600',
    stat: '3x faster reporting'
  },
  {
    icon: ShoppingCart,
    name: 'Retail & Consumer',
    description: 'Demand forecasting, inventory optimization, and personalized customer experiences.',
    useCases: ['Dynamic pricing', 'Stock level prediction', 'Customer churn prevention'],
    color: 'bg-emerald-600',
    stat: '25% waste reduction'
  },
  {
    icon: Signal,
    name: 'Telecommunications',
    description: 'Network optimization, predictive maintenance, and customer service automation.',
    useCases: ['Network fault prediction', 'Customer support AI', 'Revenue assurance'],
    color: 'bg-purple-600',
    stat: '60% support automation'
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Quality control, production line optimization, and predictive supply chain management.',
    useCases: ['Defect detection', 'Production scheduling', 'Supplier risk assessment'],
    color: 'bg-orange-600',
    stat: '30% efficiency gain'
  },
  {
    icon: Zap,
    name: 'Energy & Utilities',
    description: 'Grid optimization, demand response, and renewable energy forecasting.',
    useCases: ['Load forecasting', 'Smart grid analytics', 'Maintenance scheduling'],
    color: 'bg-yellow-500',
    stat: '20% cost savings'
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    description: 'Document automation, client intelligence, and resource optimization.',
    useCases: ['Contract analysis', 'Talent matching', 'Project risk prediction'],
    color: 'bg-indigo-600',
    stat: '50% admin reduction'
  },
  {
    icon: Truck,
    name: 'Logistics & Transport',
    description: 'Route optimization, fleet management, and predictive delivery scheduling.',
    useCases: ['Route optimization', 'Fuel consumption prediction', 'Delivery ETA accuracy'],
    color: 'bg-red-600',
    stat: '15% fuel savings'
  }
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Industries We Serve</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Deep expertise across <span className="gradient-text">South Africa's core industries</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-slate-600">
            From JSE Top 40 mining giants to retail leaders, we understand the regulatory, operational, and competitive pressures unique to each sector.
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
                  <div className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Typical Result</div>
                  <div className="text-sm font-bold text-slate-900">{industry.stat}</div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center bg-white rounded-2xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Don't see your industry?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Our solutions architects have cross-sector experience. The underlying AI frameworks adapt to any data-rich environment. Let's discuss your specific challenge.
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
