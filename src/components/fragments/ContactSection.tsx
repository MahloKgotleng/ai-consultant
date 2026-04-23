'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    role: '',
    message: '',
    priority: 'standard'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-6">
              <Send className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">Start Your Demo</span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Ready for your <span className="gradient-text">72-hour transformation</span>?
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-slate-600 mb-12">
              Tell us about your highest-impact use case. We'll respond within 4 hours with a concrete Demo plan and timeline.
            </motion.p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email</div>
                  <a href="mailto:mahlo@kgotlaai.co.za" className="font-semibold text-slate-900 hover:text-primary-600 transition-colors">mahlo@kgotlaai.co.za</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Phone / WhatsApp</div>
                  <a href="tel:+27736464935" className="font-semibold text-slate-900 hover:text-primary-600 transition-colors block">073 646 4935</a>
                  <a href="tel:+27626698650" className="font-semibold text-slate-900 hover:text-primary-600 transition-colors block">062 669 8650</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">WhatsApp Business</div>
                  <a href="https://wa.me/27736464935" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 hover:text-primary-600 transition-colors">Chat on WhatsApp</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Location</div>
                  <div className="font-semibold text-slate-900">Johannesburg, South Africa</div>
                </div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-accent-emerald" />
                <span className="font-semibold text-slate-900">Executive Promise</span>
              </div>
              <p className="text-sm text-slate-600">
                No cost discovery call. Fixed-price Demo options. If we don't deliver measurable value in 72 hours, you don't pay.
              </p>
              <p className="text-xs text-slate-500 mt-2 italic">Ubuntu. Innovation. Collective Intelligence.</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-accent-emerald/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-accent-emerald" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">Mahlo will be in touch within 4 hours with your Demo plan.</p>
                <p className="text-sm text-slate-500 mt-2">Prefer faster? WhatsApp us at 073 646 4935</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="John Smith" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                    <input type="text" required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Company Name" value={formState.company} onChange={(e) => setFormState({...formState, company: e.target.value})} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                    <input type="email" required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="john@company.co.za" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Role</label>
                    <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" value={formState.role} onChange={(e) => setFormState({...formState, role: e.target.value})}>
                      <option value="">Select Role</option>
                      <option value="c-suite">C-Suite / Executive</option>
                      <option value="vp-director">VP / Director</option>
                      <option value="manager">Manager</option>
                      <option value="technical">Technical Lead</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Use Case / Challenge</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none" placeholder="Describe the process or decision you'd like to automate or enhance with AI..." value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Timeline Priority</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['standard', 'urgent', 'critical'].map((priority) => (
                      <button key={priority} type="button" onClick={() => setFormState({...formState, priority})} className={`px-4 py-3 rounded-xl text-sm font-semibold capitalize transition-all ${formState.priority === priority ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'}`}>
                        {priority}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-600/25">
                  Request PoC Discussion
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-xs text-center text-slate-500">Your information is secure. We never share executive contact details.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
