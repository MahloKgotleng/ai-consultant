'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Brain, LineChart, ChevronRight, Check } from 'lucide-react'

// REWRITTEN: All three solutions rebuilt with honest scope.
// Core principle: You build DEMOS and PILOTS using Claude + Make.com + Notion.
// You do NOT build "systems that think and act," "94% accuracy models," or "SAP/Oracle integration."

const solutions = [
  {
    id: 'intelligent-automation',
    icon: Bot,
    title: 'AI Workflow Automation',
    // CHANGED: "Intelligent Process Automation" → "AI Workflow Automation"
    // "Process Automation" implies enterprise-grade RPA (UiPath, Automation Anywhere).
    // "Workflow Automation" is honest about Make.com + Claude scope.
    shortDesc: 'Automate repetitive tasks with Claude-powered workflows',
    // CHANGED: "Eliminate repetitive tasks with AI-powered workflows" → 
    // "Automate repetitive tasks with Claude-powered workflows"
    // Names the actual tool. Honest about what you build with.
    fullDesc: 'Design intelligent workflows using Claude AI and Make.com that handle document processing, data routing, and notification triggers. Built for teams drowning in manual steps between existing tools.',
    // CHANGED: "Deploy intelligent agents that understand context, make decisions, and execute complex business processes autonomously" →
    // "Design intelligent workflows using Claude AI and Make.com..."
    // "Agents that make decisions autonomously" = overclaim for a 4-person team.
    // "Document processing to customer onboarding" = kept but scoped to workflow level.
    benefits: [
      'Reduce manual processing steps by 60–80% in demo scenarios',  // CHANGED: "85%" → "60–80% in demo scenarios". Honest range + context.
      'Connect existing tools (email, CRM, spreadsheets) via Make.com',  // CHANGED: "Eliminate human error" → "Connect existing tools". Honest capability.
      '24/7 automation of scheduled tasks and notifications',  // CHANGED: "24/7 operation without fatigue" → "24/7 automation of scheduled tasks". Less robotic, more accurate.
      'Claude-powered decision logic for routing and classification'  // CHANGED: "Seamless integration with SAP/Oracle" → REMOVED. You cannot integrate SAP/Oracle in 72 hours.
      // REPLACED with honest Claude capability: routing and classification.
    ],
    useCase: 'Invoice processing workflow demo for a mining group finance team'  // CHANGED: "Automated invoice processing for a Top 40 mining group" → "Invoice processing workflow demo..."
    // "Automated" implies deployed. "Demo" is honest. "Finance team" specifies who sees it.
  },
  {
    id: 'predictive-analytics',
    icon: Brain,
    title: 'AI-Powered Forecasting Pilot',
    // CHANGED: "Predictive Analytics Engine" → "AI-Powered Forecasting Pilot"
    // "Engine" implies production system. "Pilot" is honest about scope.
    shortDesc: 'Test demand forecasting with AI on your historical data',
    // CHANGED: "Forecast trends and optimize decisions with machine learning" →
    // "Test demand forecasting with AI on your historical data"
    // "Optimize decisions" = overclaim. "Test" = honest. "Your historical data" = requires client data (real PoC, not demo).
    fullDesc: 'Run a time-boxed pilot using Claude AI to analyze your historical data and generate demand forecasts, risk flags, and trend summaries. Output is validated against your actuals, not theoretical benchmarks.',
    // CHANGED: "Transform historical data into forward-looking intelligence. Our models predict demand..." →
    // "Run a time-boxed pilot using Claude AI to analyze your historical data..."
    // "Our models" implies proprietary ML. "Claude AI" = honest about the tool.
    // "Before humans recognize patterns" = removed. Arrogant and unprovable.
    benefits: [
      'Demand forecasting validated against your actual historical data',  // CHANGED: "94% accuracy" → REMOVED. No validated model accuracy.
      'Risk flag identification from pattern analysis',  // CHANGED: "Early warning systems for supply chain" → "Risk flag identification". Less infrastructure-heavy.
      'Executive summary generation from complex datasets',  // CHANGED: "Dynamic pricing optimization" → REMOVED. You don't build pricing engines.
      // REPLACED with honest Claude capability: summarization.
      'Trend analysis output in plain language for non-technical teams'  // CHANGED: "Churn prediction and prevention" → REMOVED. Requires labeled training data you don't have.
      // REPLACED with honest output format.
    ],
    useCase: '3-week pilot: demand pattern analysis for a retail procurement team'  // CHANGED: "Demand forecasting for a major retail chain" → "3-week pilot: demand pattern analysis..."
    // Added timeline. "Pattern analysis" is honest scope. "Procurement team" = specific audience.
  },
  {
    id: 'executive-intelligence',
    icon: LineChart,
    title: 'Executive Dashboard Demo',
    // CHANGED: "Executive Intelligence Dashboard" → "Executive Dashboard Demo"
    // "Intelligence" implies AI-generated insights. "Dashboard Demo" = honest about what you build.
    shortDesc: 'Consolidate scattered data into a unified view for leadership',
    // CHANGED: "Real-time insights tailored for C-suite decision making" →
    // "Consolidate scattered data into a unified view for leadership"
    // "Real-time" implies live data pipelines. "Unified view" = honest about visualization.
    fullDesc: 'Build a demo dashboard that pulls from your existing spreadsheets, databases, and reports into a single Notion or web-based command center. Natural language queries via Claude. Designed for executives who need the picture, not the plumbing.',
    // CHANGED: "Consolidate disparate data sources into a unified command center" →
    // "Build a demo dashboard that pulls from your existing spreadsheets, databases, and reports..."
    // "Command center" = overclaim. "Demo dashboard" = honest.
    // "Natural language queries, automated reporting, predictive scenarios" → "Natural language queries via Claude"
    // "Predictive scenarios" = removed. You don't build scenario models.
    benefits: [
      'Natural language queries via Claude AI',  // KEPT but scoped.
      'Automated summary reports from multiple data sources',  // CHANGED: "Automated board reporting" → "Automated summary reports". Less formal, more honest.
      'Single-view dashboard in Notion or web interface',  // CHANGED: "Scenario modeling" → REMOVED. Not your capability.
      // REPLACED with honest delivery format.
      'Mobile-friendly view for executive access'  // CHANGED: "Mobile-first design for execs" → "Mobile-friendly view". Less agency-speak.
    ],
    useCase: 'Demo dashboard: operational KPIs for a financial services leadership team'  // CHANGED: "Real-time operational dashboard for a financial services CEO" → "Demo dashboard: operational KPIs..."
    // "Real-time" removed. "CEO" = too specific for a demo. "Leadership team" = honest audience.
  }
]

export default function SolutionsSection() {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id)
  const currentSolution = solutions.find(s => s.id === activeSolution)!

  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-3xl mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-6">
            {/* CHANGED: "Enterprise Solutions" → "AI Pilot Services"
                "Enterprise Solutions" implies full delivery. "AI Pilot Services" = honest about scope. */}
            <span className="text-sm font-semibold text-primary-700">AI Pilot Services</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            {/* CHANGED: "AI solutions built for enterprise complexity" → 
                "AI demos and pilots built for enterprise evaluation"
                "Solutions" = production-ready. "Demos and pilots" = honest.
                "Complexity" = buzzword. "Evaluation" = honest about the buyer's stage. */}
            AI demos and pilots <span className="gradient-text">built for enterprise evaluation</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-slate-600">
            {/* CHANGED: "Three proven frameworks. Customized to your data. Deployed in days." →
                "Three service lines. Scoped to your data. Demo in 72 hours, pilot in 2–4 weeks."
                "Proven frameworks" = unproven at scale. "Service lines" = honest.
                "Deployed in days" = implies production. "Demo in 72 hours, pilot in 2–4 weeks" = honest timeline ladder. */}
            Three service lines. Scoped to your data. Demo in 72 hours, pilot in 2–4 weeks.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              const isActive = activeSolution === solution.id
              return (
                <motion.button key={solution.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} onClick={() => setActiveSolution(solution.id)} className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${isActive ? 'bg-white border-primary-500 shadow-lg shadow-primary-500/10' : 'bg-white border-slate-200 hover:border-slate-300'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${isActive ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-600'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{solution.title}</h3>
                      <p className="text-sm text-slate-600">{solution.shortDesc}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'rotate-90 text-primary-600' : 'text-slate-400'}`} />
                  </div>
                </motion.button>
              )
            })}
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div key={activeSolution} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <currentSolution.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{currentSolution.title}</h3>
                </div>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{currentSolution.fullDesc}</p>
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-slate-900">What You Get</h4>
                  {/* CHANGED: "Key Benefits" → "What You Get"
                      "Benefits" implies guaranteed outcomes. "What You Get" = honest deliverables. */}
                  {currentSolution.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  {/* CHANGED: "Real Use Case" → "Example Scope"
                      "Real Use Case" implies delivered client work. "Example Scope" = honest about being illustrative. */}
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Example Scope</div>
                  <p className="text-slate-900 font-medium">{currentSolution.useCase}</p>
                </div>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  {/* CHANGED: "Discuss this solution" → "Scope this pilot"
                      "Discuss" = vague. "Scope this pilot" = specific, action-oriented, honest about next step. */}
                  Scope this pilot
                  <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
