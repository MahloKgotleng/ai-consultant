'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Sparkles, Download, Loader2, CheckCircle, ChevronRight, Building2 } from 'lucide-react'

type FormData = {
  name: string
  company: string
  industry: string
  employees: string
  challenge: string
  timeline: string
}

const INDUSTRIES = ['Mining', 'Financial Services', 'Manufacturing', 'Telecommunications', 'Government / Public Sector', 'Energy & Utilities', 'Retail', 'Other']
const SIZES      = ['50–200', '200–500', '500–2 000', '2 000–10 000', '10 000+']
const TIMELINES  = ['ASAP (within 30 days)', 'Q3 2026', 'Q4 2026', '2027 planning cycle']

const SYSTEM = `You are a senior AI strategy consultant at Kgotla AI Consulting (South Africa). 
Write a professional 1-page AI strategy brief for a prospective client.

Structure EXACTLY as follows (use these exact headings):

## Executive Summary
2-3 sentences: acknowledge their challenge, position Kgotla AI as the solution.

## Your AI Opportunity
3 bullet points specific to their industry and challenge. Include one ZAR ROI figure.

## Recommended Solution Stack
3 bullet points naming specific AI approaches (RAG, agentic workflow, predictive model, etc.) appropriate to their context.

## Kgotla AI's Approach
2-3 sentences on the 72-hour demo sprint methodology, IBM endorsement, B-BBEE Level 1 advantage.

## Proposed Next Steps
3 numbered steps: (1) scoping call, (2) 72-hour demo build, (3) pilot proposal.

## Investment
One sentence referencing the Spark tier (R9,500) as the entry point for their organisation size.

Keep the entire document under 400 words. Be specific, avoid buzzwords. Write for a CFO or COO.`

function buildPrompt(f: FormData) {
  return `Client: ${f.name} at ${f.company}
Industry: ${f.industry}
Organisation size: ${f.employees} employees
Primary AI challenge: ${f.challenge}
Timeline: ${f.timeline}

Generate the strategy brief now.`
}

function PrintableProposal({ form, content }: { form: FormData; content: string }) {
  const lines = content.split('\n')
  return (
    <div id="proposal-print" className="hidden print:block p-12 max-w-3xl mx-auto font-serif text-slate-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-slate-900 pb-6 mb-8">
        <div>
          <div className="text-2xl font-bold tracking-tight">KGOTLA AI CONSULTING</div>
          <div className="text-sm text-slate-500">IBM Partner Plus · B-BBEE Level 1 · kgotlaai.co.za</div>
        </div>
        <div className="text-right text-sm text-slate-500">
          <div>AI Strategy Brief</div>
          <div>{new Date().toLocaleDateString('en-ZA')}</div>
          <div className="font-bold text-slate-900 mt-1">Prepared for {form.company}</div>
        </div>
      </div>
      {/* Content */}
      <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
        {lines.map((line, i) => {
          if (line.startsWith('## ')) return <h2 key={i} className="text-base font-bold mt-6 mb-2 text-slate-900">{line.replace('## ', '')}</h2>
          if (line.startsWith('- '))  return <div key={i} className="flex gap-2 ml-4"><span>•</span><span>{line.replace('- ', '')}</span></div>
          if (/^\d\./.test(line))      return <div key={i} className="flex gap-2 ml-4"><span className="font-bold">{line[0]}.</span><span>{line.slice(3)}</span></div>
          if (line.trim())             return <p key={i}>{line}</p>
          return null
        })}
      </div>
      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-400 flex justify-between">
        <span>mahlo@kgotlaai.co.za · 073 646 4935</span>
        <span>Reg. 2026/242882/07 · Evaton North, Gauteng</span>
      </div>
    </div>
  )
}

export default function ProposalGenerator() {
  const [form, setForm]       = useState<FormData>({ name: '', company: '', industry: '', employees: '', challenge: '', timeline: '' })
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('')
  const [done, setDone]       = useState(false)

  const set = (k: keyof FormData, v: string) => setForm(p => ({ ...p, [k]: v }))
  const valid = form.name && form.company && form.industry && form.employees && form.challenge && form.timeline

  const generate = async () => {
    if (!valid) return
    setLoading(true)
    setDone(false)
    const res = await fetch('/api/groq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system: SYSTEM,
        messages: [{ role: 'user', content: buildPrompt(form) }],
        max_tokens: 700,
      }),
    })
    const data = await res.json()
    setContent(data.content ?? 'Generation failed — please email mahlo@kgotlaai.co.za directly.')
    setLoading(false)
    setDone(true)
  }

  const downloadPDF = () => {
    const printEl = document.getElementById('proposal-print')
    if (printEl) printEl.classList.remove('hidden')
    window.print()
    if (printEl) printEl.classList.add('hidden')
  }

  const parseContent = (raw: string) => raw.split('\n').filter(Boolean).map((line, i) => {
    if (line.startsWith('## ')) return <h3 key={i} className="text-lg font-bold text-white mt-6 mb-2">{line.replace('## ','')}</h3>
    if (line.startsWith('- '))  return <div key={i} className="flex gap-2 text-slate-300 text-sm ml-2"><span className="text-cyan-400 shrink-0">•</span><span>{line.replace('- ','')}</span></div>
    if (/^\d\./.test(line))      return <div key={i} className="flex gap-2 text-slate-300 text-sm ml-2"><span className="text-cyan-400 font-bold shrink-0">{line[0]}.</span><span>{line.slice(3)}</span></div>
    return <p key={i} className="text-slate-300 text-sm leading-relaxed">{line}</p>
  })

  return (
    <section id="proposal" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-white">AI Proposal Generator · Free · Instant</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get your custom AI{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">strategy brief</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl">
            Tell us about your operation. Our AI writes a tailored 1-page brief in 10 seconds — download as PDF and share with your leadership team.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Form */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 space-y-5">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-5 h-5 text-yellow-400" />
              <span className="font-bold text-white">Your details</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Your name</label>
                <input value={form.name} onChange={e => set('name', e.target.value)}
                  placeholder="Sipho Dlamini"
                  className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-yellow-400 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Company</label>
                <input value={form.company} onChange={e => set('company', e.target.value)}
                  placeholder="Anglo American"
                  className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-yellow-400 transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Industry</label>
              <select value={form.industry} onChange={e => set('industry', e.target.value)}
                className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400 transition-colors">
                <option value="">Select industry</option>
                {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Organisation size</label>
                <select value={form.employees} onChange={e => set('employees', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400 transition-colors">
                  <option value="">Employees</option>
                  {SIZES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Timeline</label>
                <select value={form.timeline} onChange={e => set('timeline', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400 transition-colors">
                  <option value="">When to start</option>
                  {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Primary challenge / use case</label>
              <textarea value={form.challenge} onChange={e => set('challenge', e.target.value)}
                rows={3} placeholder="e.g. We lose 8% of production time to unplanned equipment failure and manual shift reporting takes 3 hours per supervisor..."
                className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none" />
            </div>

            <button onClick={generate} disabled={!valid || loading}
              className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 font-bold rounded-xl hover:from-yellow-400 hover:to-orange-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-yellow-500/25">
              {loading
                ? <><Loader2 className="w-5 h-5 animate-spin" /> Generating your brief...</>
                : <><Sparkles className="w-5 h-5" /> Generate My AI Strategy Brief</>}
            </button>
            <p className="text-xs text-slate-600 text-center">Powered by IBM watsonx · Generated in ~10 seconds · No account needed</p>
          </div>

          {/* Output */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 flex flex-col">
            <AnimatePresence mode="wait">
              {!done && !loading && (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center py-12">
                  <FileText className="w-16 h-16 text-slate-700 mb-4" />
                  <div className="text-slate-500 font-medium">Your brief will appear here</div>
                  <div className="text-slate-600 text-sm mt-2">Fill in your details and click Generate</div>
                </motion.div>
              )}
              {loading && (
                <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center py-12">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                    </div>
                  </div>
                  <div className="text-white font-bold mb-2">Writing your strategy brief...</div>
                  <div className="text-slate-400 text-sm">Analysing {form.industry} sector benchmarks</div>
                </motion.div>
              )}
              {done && content && (
                <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold text-sm">Brief ready — {form.company}</span>
                    </div>
                    <button onClick={downloadPDF}
                      className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 text-sm font-bold rounded-xl hover:bg-slate-100 transition-colors">
                      <Download className="w-4 h-4" /> Download PDF
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-1 pr-1 max-h-[420px]">
                    {parseContent(content)}
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-700">
                    <a href="#contact" className="flex items-center justify-center gap-2 w-full py-3 bg-yellow-500 text-slate-900 font-bold rounded-xl hover:bg-yellow-400 transition-colors text-sm">
                      Book a scoping call to action this <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Hidden printable version */}
      {done && <PrintableProposal form={form} content={content} />}

      <style jsx global>{`
        @media print {
          body > *:not(#proposal-print) { display: none !important; }
          #proposal-print { display: block !important; }
        }
      `}</style>
    </section>
  )
}
