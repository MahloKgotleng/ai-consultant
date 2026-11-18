import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Kgotla AI Tender Shield',
  description: 'Terms governing access to and use of Kgotla AI Tender Shield.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4">
      <article className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-7 sm:p-10">
        <a href="/" className="text-sm font-semibold text-emerald-700 hover:underline">← Back to Kgotla AI</a>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-6 mb-3">Terms and Conditions</h1>
        <p className="text-sm text-slate-500 mb-8">Kgotla AI Solutions Architects (Pty) Ltd · Last updated: 18 November 2026</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2>1. About these terms</h2>
            <p>These terms govern access to and use of Kgotla AI Tender Shield, a preliminary tender-readiness screening service provided by Kgotla AI Solutions Architects (Pty) Ltd (&quot;Kgotla AI&quot;, &quot;we&quot; or &quot;us&quot;). By accessing or using the service, you agree to these terms. If you do not agree, do not use the service.</p>
          </section>

          <section>
            <h2>2. What the service does</h2>
            <p>Tender Shield is an early-stage, rules-based screening tool. It compares tender requirements supplied by a user with descriptions of supplier evidence supplied by that user. It identifies text that may indicate the presence of evidence, requirements for which evidence was not identified, and items that could not be assessed.</p>
            <p>The service is intended to support preliminary preparation and document review. It is not a tender submission platform, procurement authority, legal adviser, auditor or certification service.</p>
          </section>

          <section>
            <h2>3. Important limitations</h2>
            <p>Tender Shield uses keyword and text-matching logic. It does not independently inspect original document files, perform optical character recognition, authenticate documents, verify information against CIPC, SARS, the Central Supplier Database or other external registers, or establish whether a document is current, genuine or legally sufficient.</p>
            <p>A result marked &quot;POTENTIALLY PRESENT&quot; means only that related wording was identified in the evidence text supplied. It does not establish that the required document exists or satisfies a tender condition. &quot;NOT IDENTIFIED&quot; means that matching evidence was not identified in the supplied text; it is not a definitive finding that the supplier lacks the document. &quot;NOT ASSESSED&quot; means that the available input was insufficient for the relevant assessment.</p>
          </section>

          <section>
            <h2>4. Your responsibilities</h2>
            <p>You remain responsible for checking the original tender pack, understanding all mandatory and returnable requirements, confirming document authenticity and validity, and ensuring that your final submission complies with the procuring institution&apos;s rules and deadlines.</p>
            <p>You must arrange appropriate human review of every result. Do not rely on Tender Shield as the sole basis for deciding whether to submit a bid, exclude a supplier or represent that a tender requirement has been met.</p>
          </section>

          <section>
            <h2>5. Acceptable use and submitted information</h2>
            <p>You must use the service lawfully and only for legitimate business and procurement-preparation purposes. Do not submit information that you are not authorised to share, unlawful material, malicious code or another person&apos;s confidential or personal information without an appropriate lawful basis.</p>
            <p>You are responsible for the accuracy, completeness and lawfulness of the requirements and evidence descriptions you provide. You must not attempt to disrupt, reverse engineer or gain unauthorised access to the service or its infrastructure.</p>
          </section>

          <section>
            <h2>6. Intellectual property</h2>
            <p>The Tender Shield name, software, service design and associated materials are owned by or licensed to Kgotla AI, except for third-party materials and content supplied by users. These terms do not transfer ownership of the service or grant rights beyond the limited permission to use it for its intended purpose.</p>
          </section>

          <section>
            <h2>7. Availability and changes</h2>
            <p>We may update, suspend or discontinue features to maintain, improve or protect the service. As an evolving service, Tender Shield may contain errors or experience interruptions. We will take reasonable steps to maintain availability but do not guarantee uninterrupted or error-free operation.</p>
          </section>

          <section>
            <h2>8. No guarantee of tender outcomes</h2>
            <p>Tender Shield does not guarantee eligibility, compliance, shortlisting, appointment, contract award or any other procurement outcome. Procuring institutions make their own decisions under their applicable procurement rules.</p>
          </section>

          <section>
            <h2>9. Limitation of liability</h2>
            <p>To the extent permitted by applicable law, Kgotla AI is not liable for tender disqualification, missed deadlines, procurement decisions, losses arising from inaccurate user inputs, reliance on automated screening results, or failure to conduct independent human verification.</p>
            <p>Nothing in these terms excludes or limits liability where doing so would be unlawful, including any rights or remedies that cannot lawfully be excluded under South African law.</p>
          </section>

          <section>
            <h2>10. Privacy</h2>
            <p>Information submitted through Kgotla AI services is handled in accordance with our <a href="/privacy/">Privacy Notice</a>. Do not submit sensitive, confidential or personal information unless you are authorised to do so and have considered the relevant privacy and security requirements.</p>
          </section>

          <section>
            <h2>11. Governing law</h2>
            <p>These terms are governed by the laws of the Republic of South Africa. Any dispute will be subject to the jurisdiction of the competent courts of South Africa, subject to applicable law.</p>
          </section>

          <section>
            <h2>12. Contact</h2>
            <p>For questions about these terms or the service, contact <a href="mailto:mahlo@kgotlaai.co.za">mahlo@kgotlaai.co.za</a> or call <a href="tel:+27626698650">062 669 8650</a>.</p>
          </section>
        </div>
      </article>
    </main>
  )
}
