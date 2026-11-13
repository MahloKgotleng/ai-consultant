import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Notice | Kgotla AI Solutions Architects',
  description: 'How Kgotla AI handles information submitted through its website and enquiry forms.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4">
      <article className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-7 sm:p-10">
        <a href="/" className="text-sm font-semibold text-emerald-700 hover:underline">← Back to Kgotla AI</a>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-6 mb-3">Privacy Notice</h1>
        <p className="text-sm text-slate-500 mb-8">Kgotla AI Solutions Architects · Last updated: 13 November 2026</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2>1. Who we are</h2>
            <p>Kgotla AI Solutions Architects (Pty) Ltd operates the website kgotlaai.co.za. For privacy questions or requests relating to information submitted through this website, contact <a href="mailto:mahlo@kgotlaai.co.za">mahlo@kgotlaai.co.za</a>.</p>
          </section>
          <section>
            <h2>2. Information we collect</h2>
            <p>When you request an assessment, demonstration or consultation, we may collect your name, organisation, work email address, telephone number, industry, business challenge, process volumes, estimated manual handling time and preferred implementation timeline. We may also receive basic technical information needed to operate and protect the website.</p>
          </section>
          <section>
            <h2>3. Why we use it</h2>
            <p>We use enquiry information to prepare the requested preliminary assessment, respond to your request, arrange a discovery discussion, manage prospective-client relationships and protect our services against misuse. We do not treat an assessment submission as permission for unrelated marketing.</p>
          </section>
          <section>
            <h2>4. Service providers and transfers</h2>
            <p>To operate our services, information submitted through enquiry forms may be processed by our website hosting provider, IBM Cloud infrastructure and Zoho CRM. These providers may process information in jurisdictions outside South Africa. We take reasonable steps to use service providers and safeguards appropriate to the purpose, and we do not intentionally collect special personal information through the opportunity assessment.</p>
          </section>
          <section>
            <h2>5. Consent and your choices</h2>
            <p>We ask you to actively consent before sending an enquiry to our CRM. You can use the initial opportunity calculator without submitting contact details. You may contact us to request access to, correction of or deletion of your personal information, or to withdraw consent where applicable. Withdrawal does not affect processing already lawfully carried out.</p>
          </section>
          <section>
            <h2>6. Retention and security</h2>
            <p>We retain enquiry information for as long as reasonably necessary to respond to the request, manage the prospective-client relationship, meet applicable legal obligations and resolve disputes. We use access controls and technical safeguards appropriate to the information, but no internet transmission or storage system can be guaranteed to be completely secure.</p>
          </section>
          <section>
            <h2>7. Automated assessments</h2>
            <p>The Agentic AI Opportunity Finder provides an initial planning estimate based on information you enter and clearly stated assumptions. It does not access your internal systems, make decisions about you, verify operational data or guarantee financial or operational outcomes. A Kgotla AI representative must validate any proposed solution, benefits and costs with you.</p>
          </section>
          <section>
            <h2>8. Contact and complaints</h2>
            <p>For privacy requests or concerns, email <a href="mailto:mahlo@kgotlaai.co.za">mahlo@kgotlaai.co.za</a>. You may also raise a complaint with the Information Regulator of South Africa where applicable.</p>
          </section>
        </div>
      </article>
    </main>
  )
}
