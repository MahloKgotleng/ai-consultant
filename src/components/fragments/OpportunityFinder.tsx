'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock3, Cpu, Loader2, ShieldCheck, Sparkles, Workflow } from 'lucide-react'

const INDUSTRIES = [
  'Mining & Resources', 'Manufacturing', 'Energy & Utilities', 'Logistics & Transport',
  'Financial Services', 'Retail & Distribution', 'Government & Public Sector',
  'Education & Training', 'NPO & Community Development', 'Healthcare', 'Agriculture', 'Other'
]

const CHALLENGES = [
  { id: 'customer', label: 'Customer enquiries and service', agent: 'Customer Operations Agent', workflow: 'Classify incoming enquiries, retrieve approved answers, prepare responses and route complex cases to a person.' },
  { id: 'documents', label: 'Documents, forms and administration', agent: 'Document Operations Agent', workflow: 'Extract key fields, validate completeness, classify documents and prepare records for human approval.' },
  { id: 'reporting', label: 'Reporting and information gathering', agent: 'Reporting and Knowledge Agent', workflow: 'Gather approved source information, draft operational reports and flag missing or inconsistent data.' },
  { id: 'maintenance', label: 'Equipment and maintenance workflows', agent: 'Maintenance Coordination Agent', workflow: 'Summarise work orders, identify recurring patterns, prioritise follow-ups and escalate safety-critical cases.' },
  { id: 'safety', label: 'Safety, incidents and compliance', agent: 'Safety Triage Agent', workflow: 'Structure incident information, identify missing details, recommend escalation and prepare an auditable case summary.' },
  { id: 'sales', label: 'Sales leads and quotations', agent: 'Sales Operations Agent', workflow: 'Qualify enquiries, enrich CRM records, prepare quotation briefs and schedule human follow-up.' },
  { id: 'knowledge', label: 'Finding information across systems', agent: 'Enterprise Knowledge Agent', workflow: 'Search approved knowledge sources, retrieve relevant passages and answer with traceable references.' },
  { id: 'other', label: 'A different operational challenge', agent: 'Process Discovery Agent', workflow: 'Map the current process with your team, identify decision points and propose a small, measurable automation pilot.' },
]

type Assessment = {
  industry: string
  challenge: string
  volume: number
  minutes: number
  hoursLow: number
  hoursHigh: number
  recommendation: typeof CHALLENGES[number]
}

export default function OpportunityFinder() {
  const [industry, setIndustry] = useState('')
  const [challenge, setChallenge] = useState('')
  const [volume, setVolume] = useState('250')
  const [minutes, setMinutes] = useState('12')
  const [timeline, setTimeline] = useState('Within 30 days')
  const [assessment, setAssessment] = useState<Assessment | null>(null)
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const selectedChallenge = CHALLENGES.find(item => item.id === challenge)

  const calculate = () => {
    const monthlyVolume = Number(volume)
    const manualMinutes = Number(minutes)
    if (!industry || !selectedChallenge || !Number.isFinite(monthlyVolume) || monthlyVolume < 1 || monthlyVolume > 1000000 || !Number.isFinite(manualMinutes) || manualMinutes < 1 || manualMinutes > 1440) return
    const hours = monthlyVolume * manualMinutes * 12 / 60
    setAssessment({
      industry,
      challenge,
      volume: monthlyVolume,
      minutes: manualMinutes,
      hoursLow: Math.round(hours * 0.2),
      hoursHigh: Math.round(hours * 0.4),
      recommendation: selectedChallenge,
    })
    setError('')
    setSubmitted(false)
  }

  const leadSummary = useMemo(() => {
    if (!assessment) return ''
    return [
      'Source: Kgotla AI Agentic Opportunity Finder',
      'Industry: ' + assessment.industry,
      'Operational challenge: ' + assessment.recommendation.label,
      'Monthly process volume: ' + assessment.volume,
      'Manual minutes per case: ' + assessment.minutes,
      'Indicative capacity opportunity: ' + assessment.hoursLow + '–' + assessment.hoursHigh + ' hours per year (20–40% time-reduction scenario; not a savings guarantee)',
      'Recommended agent: ' + assessment.recommendation.agent,
      'Suggested workflow: ' + assessment.recommendation.workflow,
      'Implementation timeline: ' + timeline,
      'Requested action: Follow up with a tailored discovery discussion.',
    ].join('\n')
  }, [assessment, timeline])

  const submitLead = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!assessment || !consent || submitting) return
    setSubmitting(true)
    setError('')
    try {
      const response = await fetch('https://kgotla-connector.2fpcbne8atou.eu-de.codeengine.appdomain.cloud/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          company_or_school: company.trim(),
          consent: true,
          need: leadSummary,
        }),
      })
      const result = await response.json()
      if (!response.ok || result.status !== 'success') {
        throw new Error(result.detail || result.message || 'We could not send your request. Please try again.')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="opportunity-finder" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-emerald-200 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-800">Kgotla AI Agentic Experience Centre</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            Find your next <span className="text-emerald-600">AI opportunity</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            Describe one repetitive or information-heavy process. Get an initial automation opportunity map based on your inputs, then request a tailored discovery discussion with Kgotla AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">Industry</label>
              <select value={industry} onChange={e => setIndustry(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="">Choose your industry</option>
                {INDUSTRIES.map(item => <option key={item}>{item}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">Which process creates the most friction?</label>
              <select value={challenge} onChange={e => setChallenge(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="">Choose a business challenge</option>
                {CHALLENGES.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">Cases / tasks per month</label>
                <input type="number" min="1" max="1000000" value={volume} onChange={e => setVolume(e.target.value)} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">Manual minutes per case</label>
                <input type="number" min="1" max="1440" value={minutes} onChange={e => setMinutes(e.target.value)} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">When would you like to act?</label>
              <select value={timeline} onChange={e => setTimeline(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Immediately</option>
                <option>Within 30 days</option>
                <option>Within 90 days</option>
                <option>Exploring / planning</option>
              </select>
            </div>
            <button type="button" onClick={calculate} disabled={!industry || !challenge || !volume || !minutes} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-4 font-bold text-white hover:bg-slate-800 disabled:opacity-40">
              <Sparkles className="w-5 h-5" /> Generate my opportunity map
            </button>
            <p className="text-xs text-slate-500">No contact details are needed to generate the initial estimate. Your inputs stay in this browser until you choose to submit an enquiry.</p>
          </div>

          <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 min-h-[480px]">
            {!assessment ? (
              <div className="h-full min-h-[420px] flex flex-col justify-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-6"><Workflow className="w-7 h-7 text-emerald-400" /></div>
                <h3 className="text-2xl font-bold mb-3">Your opportunity map will appear here</h3>
                <p className="text-slate-400">We'll translate your process challenge into a potential agent workflow, integration pattern and measurable discovery question.</p>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4"><CheckCircle2 className="w-4 h-4" /> Initial opportunity map</div>
                <h3 className="text-2xl font-bold mb-2">{assessment.recommendation.agent}</h3>
                <p className="text-sm text-slate-300 mb-6">{assessment.recommendation.workflow}</p>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5 mb-5">
                  <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-2"><Clock3 className="w-4 h-4" /> Potential staff capacity released</div>
                  <div className="text-3xl sm:text-4xl font-black">{assessment.hoursLow.toLocaleString('en-ZA')}–{assessment.hoursHigh.toLocaleString('en-ZA')} <span className="text-base font-semibold text-slate-300">hours / year</span></div>
                  <p className="text-xs text-slate-400 mt-2">Illustrative 20–40% reduction in manual handling time, calculated from your volume and time inputs. This is a scenario, not a promised saving or measured result.</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3"><Cpu className="w-5 h-5 text-sky-300 shrink-0" /><div><strong>Potential IBM-aligned architecture</strong><p className="text-slate-300 mt-1">watsonx.ai for AI reasoning; watsonx Orchestrate for agent coordination; webMethods for enterprise system integration where required; Zoho CRM for lead and customer operations.</p></div></div>
                  <div className="flex gap-3"><ShieldCheck className="w-5 h-5 text-emerald-300 shrink-0" /><div><strong>Human control</strong><p className="text-slate-300 mt-1">Sensitive decisions, external communications and operational actions should remain subject to permissions and human approval.</p></div></div>
                </div>
                <div className="mt-6 pt-5 border-t border-white/10">
                  {submitted ? (
                    <div className="flex gap-3 items-start text-emerald-300"><CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" /><div><strong>Enquiry received.</strong><p className="text-sm text-slate-300 mt-1">Your request was submitted to Kgotla AI. Our team can now review your opportunity and follow up.</p></div></div>
                  ) : (
                    <>
                      <h4 className="font-bold text-lg mb-1">Request your tailored discovery session</h4>
                      <p className="text-sm text-slate-400 mb-4">Your assessment summary will be included in the Zoho CRM enquiry.</p>
                      <form onSubmit={submitLead} className="space-y-3">
                        <div className="grid sm:grid-cols-2 gap-3">
                          <input required minLength={2} maxLength={100} value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" className="w-full rounded-xl bg-white/10 border border-white/15 px-3 py-3 text-sm text-white placeholder:text-slate-400" />
                          <input required minLength={2} maxLength={150} value={company} onChange={e => setCompany(e.target.value)} placeholder="Organisation" className="w-full rounded-xl bg-white/10 border border-white/15 px-3 py-3 text-sm text-white placeholder:text-slate-400" />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <input required type="email" maxLength={254} value={email} onChange={e => setEmail(e.target.value)} placeholder="Work email" className="w-full rounded-xl bg-white/10 border border-white/15 px-3 py-3 text-sm text-white placeholder:text-slate-400" />
                          <input required type="tel" minLength={5} maxLength={30} value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone number" className="w-full rounded-xl bg-white/10 border border-white/15 px-3 py-3 text-sm text-white placeholder:text-slate-400" />
                        </div>
                        <label className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                          <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} required className="mt-0.5 accent-emerald-500" />
                          I consent to Kgotla AI using these details to respond to this enquiry. I have read the <a href="/privacy" className="underline text-emerald-300" target="_blank" rel="noreferrer">Privacy Notice</a>.
                        </label>
                        <button type="submit" disabled={!consent || submitting} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 font-bold text-slate-950 hover:bg-emerald-400 disabled:opacity-40">
                          {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending securely...</> : <>Send assessment and request follow-up <ArrowRight className="w-4 h-4" /></>}
                        </button>
                        {error && <p role="alert" className="text-sm text-rose-300">{error}</p>}
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-6 max-w-4xl">This self-assessment is an initial planning aid. It does not access your internal systems, verify operational data, provide a financial guarantee or make safety-critical decisions. Any implementation architecture, benefits and costs require discovery and validation.</p>
      </div>
    </section>
  )
}
