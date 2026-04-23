'use client'

import { Linkedin,Facebook, Github, Mail, MessageCircle } from 'lucide-react'

const footerLinks = {
  solutions: [
    { name: 'Process Automation', href: '#solutions' },
    { name: 'Predictive Analytics', href: '#solutions' },
    { name: 'Executive Intelligence', href: '#solutions' },
  ],
  industries: [
    { name: 'Mining & Resources', href: '#industries' },
    { name: 'Financial Services', href: '#industries' },
    { name: 'Retail & Consumer', href: '#industries' },
    { name: 'Telecommunications', href: '#industries' },
  ],
  company: [
    { name: 'About Kgotla AI', href: '#about' },
    { name: 'IBM Partnership', href: '#partners' },
    { name: 'Our Process', href: '#process' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/mahlo-kgotleng', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com/kgotlaai', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/kgotla-ai', label: 'GitHub' },
  { icon: Mail, href: 'mailto:mahlo@kgotlaai.co.za', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-tight">Kgotla AI</span>
                <span className="text-xs text-slate-400">Ubuntu. Innovation. Collective Intelligence.</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Transforming South Africa's largest enterprises with production-ready AI. 
              IBM Partner Plus registered.Demos Coming Shortly.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <a href="tel:+27736464935" className="text-sm text-slate-400 hover:text-white transition-colors">Whatsapp: 073 646 4935</a>
              <a href="tel:+27626698650" className="text-sm text-slate-400 hover:text-white transition-colors">Cell: 062 669 8650</a>
              <a href="mailto:mahlo@kgotlaai.co.za" className="text-sm text-slate-400 hover:text-white transition-colors">mahlo@kgotlaai.co.za</a>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors" aria-label={social.label}>
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
              <a href="https://wa.me/27736464935" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center hover:bg-emerald-500/30 transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Kgotla AI Pty Ltd. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
