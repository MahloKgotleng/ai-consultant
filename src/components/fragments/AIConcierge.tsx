'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Bot, ChevronRight, Sparkles, TrendingUp } from 'lucide-react'

type Message = { role: 'user' | 'assistant'; content: string }

type ROI = {
  industry: string
  annualSavings: number
  roiPercent: number
  timeSavedHours: number
  paybackMonths: number
}

const SYSTEM = `You are Kgotla AI\'s enterprise discovery assistant. You are concise, sharp, and professional.
Your job: understand the visitor\'s industry and challenge in 2-3 questions, then recommend the most relevant Kgotla AI demo scenario and give a specific ZAR ROI estimate.

Industries served — ALL of these, no exceptions:
Mining, Financial Services, Manufacturing, Retail, Telecommunications, Government & Public Sector,
Energy & Utilities, Agriculture & Agri-processing, Healthcare & MedTech, Logistics & Transport,
Construction & Engineering, Education & EdTech, Legal & Professional Services, Hospitality & Tourism.

ROI by sector:
- Mining: Predictive Maintenance (R12.4M), Safety Monitoring (R4.8M), Resource Optimisation (R6.7M)
- Financial Services: Fraud Detection (R8.1M), KYC Processing (R4.2M), Credit Scoring (R3.5M)
- Manufacturing: Quality Control (R3.2M), Supply Chain (R4.5M), Production Optimisation (R5.1M)
- Retail: Inventory Management (R2.1M), Customer Analytics (R1.8M), Demand Forecasting (R3.4M)
- Telecoms: Network Optimisation (R7.2M), Customer Churn AI (R3.8M), Service AI (R2.9M)
- Government: Citizen Services AI (R3.1M), Document Automation (R2.4M), Compliance Monitoring (R2.7M)
- Energy & Utilities: Grid Fault Prediction (R9.3M), Load Forecasting (R5.6M), Asset Maintenance (R7.8M)
- Agriculture: Crop Yield Optimisation (R3.8M), Cold Chain AI (R2.9M), Livestock Monitoring (R2.1M)
- Healthcare: Patient Flow AI (R5.2M), Diagnostic Support (R4.1M), Admin Automation (R3.3M)
- Logistics: Route Optimisation (R6.8M), Fleet Maintenance (R4.9M), Warehouse AI (R3.7M)
- Construction: Project Risk AI (R5.6M), Safety Monitoring (R3.2M), Cost Estimation AI (R2.8M)
- Education: Learning Analytics (R1.8M), Admin Automation (R2.1M), Student Retention AI (R1.5M)
- Legal: Contract Analysis AI (R3.9M), Compliance AI (R2.7M), Document Automation (R2.3M)
- Hospitality: Revenue Optimisation AI (R2.6M), Guest Experience AI (R1.9M), Ops Automation (R2.2M)

Rules:
- Keep responses to 2-3 sentences max
- Always end with a specific demo recommendation and ZAR ROI figure relevant to their sector
- Be direct, not salesy
- When recommending a demo add: [DEMO: demo_name] at end (hidden tag)
- First message: introduce yourself briefly and ask their industry + biggest operational challenge in one question`

const QUICK_STARTERS: { label: string; value: string }[] = [
  { label: 'Mining & resources',         value: 'Mining & resources' },
  { label: 'Financial services',         value: 'Financial services' },
  { label: 'Government & public sector', value: 'Government & public sector' },
  { label: 'Healthcare',                 value: 'Healthcare' },
  { label: 'Logistics & transport',      value: 'Logistics & transport' },
  { label: 'Agriculture',                value: 'Agriculture' },
]

function formatRand(n: number) {
  if (n >= 1_000_000) return `R${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `R${(n / 1_000).toFixed(0)}k`
  return `R${n}`
}

function ROICard({ roi }: { roi: ROI }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-2 my-2 rounded-2xl bg-gradient-to-br from-emerald-900/60 to-slate-800 border border-emerald-500/30 p-4"
    >
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className="w-4 h-4 text-emerald-400" />
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Your ROI Estimate · {roi.industry}</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-slate-900/60 rounded-xl p-3 text-center">
          <div className="text-lg font-black text-white">{formatRand(roi.annualSavings)}</div>
          <div className="text-xs text-slate-400 mt-0.5">Annual savings</div>
        </div>
        <div className="bg-slate-900/60 rounded-xl p-3 text-center">
          <div className="text-lg font-black text-emerald-400">{roi.roiPercent}%</div>
          <div className="text-xs text-slate-400 mt-0.5">ROI</div>
        </div>
        <div className="bg-slate-900/60 rounded-xl p-3 text-center">
          <div className="text-lg font-black text-white">{roi.timeSavedHours}hrs</div>
          <div className="text-xs text-slate-400 mt-0.5">Saved / month</div>
        </div>
        <div className="bg-slate-900/60 rounded-xl p-3 text-center">
          <div className="text-lg font-black text-white">{roi.paybackMonths}mo</div>
          <div className="text-xs text-slate-400 mt-0.5">Payback period</div>
        </div>
      </div>
      <a
        href="#contact"
        className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-sm rounded-xl transition-colors"
      >
        Book a demo call <ChevronRight className="w-4 h-4" />
      </a>
    </motion.div>
  )
}

export default function AIConcierge() {
  const [open, setOpen]         = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput]       = useState('')
  const [loading, setLoading]   = useState(false)
  const [started, setStarted]   = useState(false)
  const [model, setModel]       = useState<'groq' | 'watsonx'>('groq')
  const [roi, setRoi]           = useState<ROI | null>(null)
  const bottomRef               = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, roi])

  const callAI = async (msgs: Message[]) => {
    const res = await fetch('/api/watsonx', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ system: SYSTEM, messages: msgs }),
    })
    return await res.json()
  }

  const startChat = async () => {
    setStarted(true)
    setLoading(true)
    const data = await callAI([{ role: 'user', content: 'Hello' }])
    setModel(data.model ?? 'groq')
    const content = data.content ?? "Hi! I'm Kgotla AI's enterprise assistant. What industry are you in and what's your biggest operational challenge?"
    setMessages([{ role: 'assistant', content }])
    setLoading(false)
  }

  const sendMessage = async (text?: string) => {
    const userText = text ?? input.trim()
    if (!userText || loading) return
    setInput('')

    const newMessages: Message[] = [...messages, { role: 'user', content: userText }]
    setMessages(newMessages)
    setLoading(true)

    const data = await callAI(newMessages)
    const content = data.content ?? "Let me connect you with Mahlo — mahlo@kgotlaai.co.za"
    setModel(data.model ?? 'groq')
    if (data.roi) setRoi(data.roi)
    setMessages([...newMessages, { role: 'assistant', content }])
    setLoading(false)
  }

  const handleOpen = () => {
    setOpen(true)
    if (!started) startChat()
  }

  const modelLabel = 'IBM Granite · watsonx.ai'
  const modelColor = 'text-blue-400'
  const dotColor   = 'bg-blue-400'

  return (
    <>
      <motion.button
        onClick={handleOpen}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-2xl shadow-violet-600/40 hover:shadow-violet-600/60 hover:-translate-y-1 transition-all"
      >
        <Sparkles className="w-5 h-5" />
        <span className="text-sm">Ask Kgotla AI</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[370px] max-h-[580px] flex flex-col bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700 bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Kgotla AI Assistant</div>
                  <div className={`text-xs ${modelColor} flex items-center gap-1`}>
                    <span className={`w-1.5 h-1.5 rounded-full inline-block animate-pulse ${dotColor}`} />
                    {modelLabel}
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[300px]">
              {messages.length === 0 && loading && (
                <div className="flex gap-2 items-end">
                  <div className="w-7 h-7 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-violet-400" />
                  </div>
                  <div className="bg-slate-800 rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <motion.div key={i} animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                          className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 items-end ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-violet-400" />
                    </div>
                  )}
                  <div className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed
                    ${msg.role === 'user'
                      ? 'bg-violet-600 text-white rounded-br-sm'
                      : 'bg-slate-800 text-slate-200 rounded-bl-sm'}`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {loading && messages.length > 0 && (
                <div className="flex gap-2 items-end">
                  <div className="w-7 h-7 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-violet-400" />
                  </div>
                  <div className="bg-slate-800 rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <motion.div key={i} animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                          className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {messages.length === 1 && !loading && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_STARTERS.map(s => (
                    <button key={s.value} onClick={() => sendMessage(s.value)}
                      className="px-3 py-1.5 bg-slate-800 border border-slate-600 rounded-full text-xs text-slate-300 hover:border-violet-500 hover:text-violet-300 transition-colors flex items-center gap-1">
                      {s.label} <ChevronRight className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              )}

              {roi && <ROICard roi={roi} />}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-slate-700 bg-slate-900">
              <div className="flex items-center gap-2 bg-slate-800 rounded-xl px-3 py-2 border border-slate-700 focus-within:border-violet-500 transition-colors">
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your challenge..."
                  className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none"
                />
                <button onClick={() => sendMessage()} disabled={!input.trim() || loading}
                  className="p-1.5 bg-violet-600 text-white rounded-lg hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-xs text-slate-600 text-center mt-2">{modelLabel} · No data stored</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
