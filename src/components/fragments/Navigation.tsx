'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'

const navItems = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Industries', href: '#industries' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Results', href: '#results' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 text-lg leading-tight">Kgotla AI</span>
                <span className="text-xs text-slate-500">Enterprise Solutions</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href="https://wa.me/27736464935" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
                WhatsApp
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/25">
                Start PoC
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-slate-600">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden">
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-slate-900">
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 text-white text-lg font-semibold rounded-xl">
                Start Your PoC
                <ChevronRight className="w-5 h-5" />
              </a>
              <a href="https://wa.me/27736464935" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 text-white text-lg font-semibold rounded-xl">
                WhatsApp Mahlo
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
