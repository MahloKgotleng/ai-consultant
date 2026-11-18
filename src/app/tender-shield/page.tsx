import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tender Shield Documentation | Kgotla AI',
  description: 'Product overview, assessment method, input format and technical information for Kgotla AI Tender Shield.',
}

export default function TenderShieldPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4">
      <article className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-7 sm:p-10">
        <a href="/" className="text-sm font-semibold text-emerald-700 hover:underline">← Back to Kgotla AI</a>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-6 mb-3">Kgotla AI Tender Shield</h1>
        <p className="text-sm text-slate-500 mb-8">Product documentation · Version 0.1.0 · Last updated: 18 November 2026</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2>1. Product overview</h2>
            <p>Kgotla AI Tender Shield is a preliminary tender-readiness screening service for South African businesses and suppliers. It helps users compare tender requirements with descriptions of the supporting evidence they have available.</p>
            <p>The current release is an early-stage, rules-based minimum viable product (MVP). It produces an explainable assessment report to support human review. It does not make final procurement or compliance decisions.</p>
          </section>

          <section>
            <h2>2. Intended use</h2>
            <ul>
              <li>Prepare an initial checklist of tender requirements.</li>
              <li>Compare requirements with descriptions of available supplier evidence.</li>
              <li>Highlight requirements for which related evidence wording was identified.</li>
              <li>Highlight requirements for which evidence wording was not identified.</li>
              <li>Support a human reviewer in deciding what needs further investigation.</li>
            </ul>
          </section>

          <section>
            <h2>3. Assessment method</h2>
            <p>The current MVP uses text normalisation, keyword matching and meaningful word overlap to compare each requirement with the evidence descriptions supplied in the request. It does not currently use an LLM to make the assessment.</p>
            <p>The service evaluates the text it receives. It does not read uploaded PDFs or other original documents, perform OCR, authenticate certificates, or query external government or procurement databases.</p>
          </section>

          <section>
            <h2>4. Input format</h2>
            <p>The assessment expects a JSON object with two lists: <strong>requirements</strong> and <strong>evidence</strong>. Each list contains text descriptions.</p>
            <pre><code>{`{
  "requirements": [
    "Valid tax compliance status",
    "Proof of business address",
    "Company registration documents"
  ],
  "evidence": [
    "Tax compliance pin supplied",
    "CIPC company registration certificate"
  ]
}`}</code></pre>
            <p>Requirements describe what the tender asks for. Evidence describes the documents or information the supplier believes are available. Do not include confidential information unless authorised to do so.</p>
          </section>

          <section>
            <h2>5. Assessment statuses</h2>
            <ul>
              <li><strong>POTENTIALLY PRESENT</strong> — related wording was identified in the supplied evidence descriptions. A human must inspect the original document and confirm that it meets the tender requirement.</li>
              <li><strong>NOT IDENTIFIED</strong> — the matching process did not identify related wording in the supplied evidence descriptions. This does not prove that the supplier lacks the document.</li>
              <li><strong>NOT ASSESSED</strong> — the available input was insufficient to assess the requirement.</li>
            </ul>
          </section>

          <section>
            <h2>6. Example interpretation</h2>
            <p>If the requirement is &quot;Valid tax compliance status&quot; and the evidence description says &quot;Tax compliance pin supplied&quot;, the service may return POTENTIALLY PRESENT. This is only a text-matching result. It does not verify the pin, the taxpayer&apos;s status or the validity of the underlying information.</p>
          </section>

          <section>
            <h2>7. Technical service information</h2>
            <ul>
              <li><strong>Service:</strong> Kgotla AI Tender Shield</li>
              <li><strong>Version:</strong> 0.1.0</li>
              <li><strong>Protocol:</strong> Agent2Agent (A2A)</li>
              <li><strong>Protocol version:</strong> 0.3</li>
              <li><strong>Transport:</strong> HTTPS</li>
              <li><strong>Agent endpoint:</strong> <a href="https://kgotla-tender-shield.2fpcbne8atou.eu-de.codeengine.appdomain.cloud/a2a">Tender Shield A2A endpoint</a></li>
              <li><strong>Agent Card:</strong> <a href="https://kgotla-tender-shield.2fpcbne8atou.eu-de.codeengine.appdomain.cloud/.well-known/agent-card.json">Agent Card JSON</a></li>
              <li><strong>Health endpoint:</strong> <a href="https://kgotla-tender-shield.2fpcbne8atou.eu-de.codeengine.appdomain.cloud/health">Service health</a></li>
            </ul>
            <p>The A2A endpoint requires bearer-token authentication. The Agent Card and health endpoint are publicly accessible. Never publish or share the bearer token.</p>
          </section>

          <section>
            <h2>8. Human review and limitations</h2>
            <p>Tender Shield is an aid to preliminary preparation, not a compliance certificate or legal opinion. Users must independently check the original tender documents, required forms, signatures, validity periods, submission instructions and deadlines. Final decisions remain with the supplier and the procuring institution.</p>
          </section>

          <section>
            <h2>9. Support</h2>
            <p>For product questions, technical support or feedback, email <a href="mailto:mahlo@kgotlaai.co.za">mahlo@kgotlaai.co.za</a> or visit our <a href="/contact/">Support page</a>.</p>
          </section>

          <section>
            <h2>10. Related information</h2>
            <ul>
              <li><a href="/terms-and-conditions/">Terms and Conditions</a></li>
              <li><a href="/privacy/">Privacy Notice</a></li>
              <li><a href="/contact/">Contact and Support</a></li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  )
}
