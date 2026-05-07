'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, ChevronRight, Sparkles } from 'lucide-react'

type Message = { role: 'user' | 'assistant'; content: string }

const SYSTEM = `You are Kgotla AI's enterprise discovery assistant. You are concise, sharp, and professional.
Your job: understand the visitor's industry and challenge in 2-3 questions, then recommend the most relevant Kgotla AI demo scenario and give a specific ZAR ROI estimate.

Industries served: Mining, Financial Services, Manufacturing, Retail, Telecommunications, Government.

Demo scenarios available:
- Mining: Predictive Maintenance (R12.4M ROI), Safety Monitoring, Resource Optimisation (R6.7M ROI)
- Financial: KYC Document Processing (R4.2M), Fraud Detection (R8.1M), Credit Scoring (R3.5M)
- Manufacturing: Quality Control (R3.2M), Supply Chain Optimisation (R4.5M)
- Telecoms: Network Optimisation, Customer Service AI

Rules:
- Keep responses to 2-3 sentences max
- Always end with a specific demo recommendation and rand ROI figure
- Be direct, not salesy
- When you recommend a demo, add: [DEMO: demo_name] at the end of your message (hidden tag)
- First message: introduce yourself briefly and ask their industry + biggest operational challenge in one question`

const QUICK_STARTERS = [
  'Mining operations',
  'Financial services',
  'Manufacturing plant',
  'Government / Public sector',
]

export default function AIConcierge() {
  const [open, setOpen]       = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const [started, setStarted] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const startChat = async () => {
    setStarted(true)
    setLoading(true)
    const res = await fetch('/api/groq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system: SYSTEM,
        messages: [{ role: 'user', content: 'Hello' }],
        max_tokens: 200,
      }),
    })
    const data = await res.json()
    const content = data.content?.replace(/\[DEMO:[^\]]+\]/g, '').trim() ?? 
      "Hi! I'm Kgotla AI's enterprise assistant. What industry are you in and what's your biggest operational challenge?"
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

    const res = await fetch('/api/groq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system: SYSTEM,
        messages: newMessages,
        max_tokens: 300,
      }),
    })
    const data = await res.json()
    const raw = data.content ?? "Let me connect you with Mahlo directly — mahlo@kgotlaai.co.za"
    const clean = raw.replace(/\[DEMO:[^\]]+\]/g, '').trim()
    setMessages([...newMessages, { role: 'assistant', content: clean }])
    setLoading(false)
  }

  const handleOpen = () => {
    setOpen(true)
    if (!started) startChat()
  }

  return (
    <>
      {/* Floating Button */}
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

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[520px] flex flex-col bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700 bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Kgotla AI Assistant</div>
                  <div className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse" />
                    Powered by Llama 3.3 · Free
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[280px]">
              {messages.length === 0 && loading && (
                <div className="flex gap-2 items-end">
                  <div className="w-7 h-7 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-violet-400" />
                  </div>
                  <div className="bg-slate-800 rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      {[0,1,2].map(i => (
                        <motion.div key={i} animate={{ y: [0,-4,0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i*0.15 }}
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
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed
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
                      {[0,1,2].map(i => (
                        <motion.div key={i} animate={{ y: [0,-4,0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i*0.15 }}
                          className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Quick start chips — only before first user message */}
              {messages.length === 1 && !loading && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_STARTERS.map(s => (
                    <button key={s} onClick={() => sendMessage(s)}
                      className="px-3 py-1.5 bg-slate-800 border border-slate-600 rounded-full text-xs text-slate-300 hover:border-violet-500 hover:text-violet-300 transition-colors flex items-center gap-1">
                      {s} <ChevronRight className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              )}
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
              <p className="text-xs text-slate-600 text-center mt-2">Groq · Llama 3.3 · No data stored</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
