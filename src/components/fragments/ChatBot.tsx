'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'bot' | 'user'
  quickReplies?: string[]
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Welcome to Kgotla AI. I'm your executive assistant. How can I help you today?",
    sender: 'bot',
    quickReplies: ['Request a PoC', 'View Solutions', 'Speak to Mahlo', 'Pricing Info']
  }
]

const botResponses: Record<string, Message> = {
  'Request a PoC': {
    id: Date.now(),
    text: "Excellent choice. Our 72-hour PoC process is designed for busy executives. What's your primary use case?",
    sender: 'bot',
    quickReplies: ['Process Automation', 'Predictive Analytics', 'Document AI', 'Custom Solution']
  },
  'View Solutions': {
    id: Date.now(),
    text: "We specialize in three core areas: Intelligent Process Automation, Predictive Analytics, and Executive Intelligence. Which interests you most?",
    sender: 'bot',
    quickReplies: ['Process Automation', 'Predictive Analytics', 'Executive Intelligence']
  },
  'Speak to Mahlo': {
    id: Date.now(),
    text: "Mahlo is available directly. You can WhatsApp him at 073 646 4935 or email mahlo@kgotlaai.co.za. Would you like to schedule a call?",
    sender: 'bot',
    quickReplies: ['WhatsApp Now', 'Email Instead', 'Schedule Call']
  },
  'Pricing Info': {
    id: Date.now(),
    text: "We offer fixed-price PoC engagements starting from R75,000. Full enterprise implementations are scoped after successful PoC. Want a custom quote?",
    sender: 'bot',
    quickReplies: ['Get Custom Quote', 'PoC Pricing', 'Enterprise Pricing']
  },
  'WhatsApp Now': {
    id: Date.now(),
    text: "Opening WhatsApp...",
    sender: 'bot',
    quickReplies: []
  },
  'Email Instead': {
    id: Date.now(),
    text: "You can reach Mahlo directly at mahlo@kgotlaai.co.za. We typically respond within 4 hours during business days.",
    sender: 'bot',
    quickReplies: ['Send Email Now', 'Back to Menu']
  },
  'Schedule Call': {
    id: Date.now(),
    text: "Please use the contact form on this page to schedule a call. Select 'Critical' priority for same-day scheduling.",
    sender: 'bot',
    quickReplies: ['Go to Contact Form', 'Back to Menu']
  },
  'default': {
    id: Date.now(),
    text: "I understand. For complex inquiries, I recommend speaking directly with Mahlo via WhatsApp (073 646 4935) or using the contact form below.",
    sender: 'bot',
    quickReplies: ['WhatsApp Mahlo', 'Contact Form', 'Back to Menu']
  }
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputText, setInputText] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleQuickReply = (reply: string) => {
    const userMessage: Message = { id: Date.now(), text: reply, sender: 'user' }
    const botResponse = botResponses[reply] || botResponses['default']
    const botMessage = { ...botResponse, id: Date.now() + 1 }
    setMessages(prev => [...prev, userMessage, botMessage])

    if (reply === 'WhatsApp Now' || reply === 'WhatsApp Mahlo') {
      setTimeout(() => window.open('https://wa.me/27736464935', '_blank'), 500)
    }
    if (reply === 'Send Email Now') {
      setTimeout(() => window.location.href = 'mailto:mahlo@kgotlaai.co.za?subject=Kgotla AI Inquiry', 500)
    }
    if (reply === 'Go to Contact Form' || reply === 'Contact Form') {
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 500)
    }
  }

  const handleSend = () => {
    if (!inputText.trim()) return
    handleQuickReply(inputText)
    setInputText('')
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary-600 text-white rounded-full shadow-xl shadow-primary-600/30 flex items-center justify-center hover:bg-primary-700 transition-colors">
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 100, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 100, scale: 0.9 }} className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-100px)] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Kgotla AI Assistant</div>
                  <div className="text-xs text-primary-200 flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    Online now
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'bot' ? 'bg-primary-100' : 'bg-slate-100'}`}>
                    {message.sender === 'bot' ? <Bot className="w-4 h-4 text-primary-600" /> : <User className="w-4 h-4 text-slate-600" />}
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${message.sender === 'bot' ? 'bg-slate-100 text-slate-900 rounded-tl-none' : 'bg-primary-600 text-white rounded-tr-none'}`}>
                    {message.text}
                  </div>
                </div>
              ))}
              
              {messages[messages.length - 1]?.quickReplies && messages[messages.length - 1].quickReplies!.length > 0 && (
                <div className="flex flex-wrap gap-2 pl-10">
                  {messages[messages.length - 1].quickReplies!.map((reply) => (
                    <button key={reply} onClick={() => handleQuickReply(reply)} className="px-3 py-2 bg-white border border-primary-200 text-primary-700 text-xs font-semibold rounded-full hover:bg-primary-50 hover:border-primary-300 transition-all">
                      {reply}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-slate-200">
              <div className="flex gap-2">
                <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Type your question..." className="flex-1 px-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                <button onClick={handleSend} className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-slate-400">Prefer human? <a href="https://wa.me/27736464935" target="_blank" className="text-primary-600 font-semibold">WhatsApp Mahlo</a></span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
