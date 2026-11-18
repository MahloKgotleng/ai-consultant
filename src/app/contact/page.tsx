import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support | Kgotla AI Tender Shield',
  description: 'Contact Kgotla AI for Tender Shield product enquiries, technical support and feedback.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4">
      <article className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-7 sm:p-10">
        <a href="/" className="text-sm font-semibold text-emerald-700 hover:underline">← Back to Kgotla AI</a>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-6 mb-3">Product Support</h1>
        <p className="text-sm text-slate-500 mb-8">Kgotla AI Tender Shield · Kgotla AI Solutions Architects (Pty) Ltd</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2>How we can help</h2>
            <p>Contact Kgotla AI for assistance with Tender Shield, technical questions, product feedback, access enquiries or information about the service.</p>
          </section>

          <section>
            <h2>Email support</h2>
            <p>Send your enquiry to <a href="mailto:mahlo@kgotlaai.co.za">mahlo@kgotlaai.co.za</a>.</p>
            <p>When reporting a technical issue, please include the approximate time, the action you were performing and the error message, if available. Do not email passwords, API tokens or other access credentials.</p>
          </section>

          <section>
            <h2>Telephone and WhatsApp</h2>
            <ul>
              <li><strong>Telephone:</strong> <a href="tel:+27626698650">062 669 8650</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/27736464935">073 646 4935</a></li>
            </ul>
          </section>

          <section>
            <h2>Company and website</h2>
            <p><strong>Provider:</strong> Kgotla AI Solutions Architects (Pty) Ltd</p>
            <p><strong>Website:</strong> <a href="https://kgotlaai.co.za">kgotlaai.co.za</a></p>
            <p><strong>Location:</strong> South Africa</p>
          </section>

          <section>
            <h2>Before using Tender Shield</h2>
            <p>Tender Shield provides preliminary, rules-based text screening. It does not authenticate documents or make final tender-compliance decisions. Please consult the <a href="/tender-shield/">product documentation</a> and <a href="/terms-and-conditions/">Terms and Conditions</a> for its intended use and limitations.</p>
          </section>

          <section>
            <h2>Privacy</h2>
            <p>Please avoid sending confidential tender documents or personal information unless it is necessary and you are authorised to share it. Read our <a href="/privacy/">Privacy Notice</a> for information about how website enquiries are handled.</p>
          </section>
        </div>
      </article>
    </main>
  )
}
