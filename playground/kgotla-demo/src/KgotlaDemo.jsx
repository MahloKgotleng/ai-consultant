import React, { useState, useEffect, useRef } from "react";
import styles from "./KgotlaDemo.module.css";

/* ─────────────────────────────────────────
   Knowledge base for the AI chat agent
───────────────────────────────────────── */
const KB = {
  watsonx:
    "IBM watsonx Orchestrate is an AI-powered platform for deploying intelligent business agents. These agents automate complex multi-step tasks — from processing invoices to managing HR requests — using natural language. At KGOTLA, we build and deploy these agents tailored to your specific business processes.",
  orchestrate:
    "IBM watsonx Orchestrate is an AI-powered platform for deploying intelligent business agents. These agents automate complex multi-step tasks — from processing invoices to managing HR requests — using natural language. At KGOTLA, we build and deploy these agents tailored to your specific business processes.",
  integration:
    "Our hybrid integration practice is built on webMethods — a market-leading platform that connects cloud apps, on-premise systems, APIs, and IoT devices into seamless real-time data flows. Whether connecting SAP to Salesforce or a legacy mainframe to a modern SaaS platform, we architect the right solution.",
  webmethod:
    "webMethods is Software AG's industry-leading hybrid integration platform. Our certified architects design managed API gateways, event-driven microservices flows, and real-time data pipelines that give your enterprise true system connectivity.",
  consult:
    "To book a consultation, use the Workflow Trigger form on this page or visit kgotlaai.co.za. A KGOTLA Solutions Architect will respond within 1 business day to discuss your requirements.",
  book: "Scroll down to the Workflow Trigger section, fill in your details, and hit Trigger Workflow. We'll route your request to the right architect and confirm a session within 24 hours.",
  industr:
    "KGOTLA serves clients across Financial Services, Government & Public Sector, Retail & E-Commerce, Healthcare, Telecoms, and Mining & Energy — primarily across Africa, with global standards and methodologies.",
  pric: "Our engagements are scoped and priced per project. Please book a consultation and we'll provide a detailed proposal tailored to your specific needs.",
  ibm: "KGOTLA holds IBM Silver Partner status with advanced certifications in watsonx Orchestrate and webMethods Hybrid Integration, plus IBM Bob Sales Foundation and Intermediate badges.",
  africa:
    "Proudly South African, rooted in Ubuntu — collective intelligence and shared growth. Our solutions are designed for African enterprise realities: infrastructure constraints, multilingual AI, and legacy environments.",
  default:
    "That's a great question. KGOTLA specialises in AI orchestration and hybrid integration. For a detailed answer in your specific context, I'd recommend booking a consultation — use the Workflow form below or visit kgotlaai.co.za.",
};

function getKBResponse(msg) {
  const lower = msg.toLowerCase();
  for (const [key, val] of Object.entries(KB)) {
    if (lower.includes(key)) return val;
  }
  return KB.default;
}

function nowTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/* ─────────────────────────────────────────
   Sub-components
───────────────────────────────────────── */

/** Inline SVG hex logo */
function HexLogo({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <polygon points="40,4 72,22 72,58 40,76 8,58 8,22" stroke="#e8547a" strokeWidth="1.5" fill="none" />
      <polygon points="40,14 64,28 64,52 40,66 16,52 16,28" stroke="#c94070" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="40" cy="40" r="10" stroke="#e8547a" strokeWidth="1.5" fill="none" />
      <text x="40" y="45" textAnchor="middle" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold" fill="#f5e6e8">K</text>
      {[[40,4],[72,22],[72,58],[40,76],[8,58],[8,22]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill="#e8547a" />
      ))}
    </svg>
  );
}

/** Sticky navigation */
function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navBrand}>
        <HexLogo />
        <div>
          <div className={styles.navTitle}>KGOTLA</div>
          <div className={styles.navSub}>AI Solutions Architects</div>
        </div>
      </div>
      <div className={styles.navLinks}>
        {["capabilities","integration","assistant","workflow","clients"].map((id) => (
          <a key={id} href={`#${id}`} className={styles.navLink}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

/** Hero section */
function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroBadge}>● Live Capability Demo · kgotlaai.co.za</div>
      <h1 className={styles.heroH1}>
        Intelligent Integration.<br />
        <span className={styles.heroAccent}>Powered by AI.</span>
      </h1>
      <p className={styles.heroP}>
        We architect end-to-end AI and hybrid integration solutions that connect your enterprise,
        automate your workflows, and amplify your human capital.
      </p>
      <div className={styles.motto}>
        Ubuntu <span className={styles.mottoDot}>·</span> Innovation <span className={styles.mottoDot}>·</span> Collective Intelligence
      </div>
      <div className={styles.btnRow}>
        <a href="#assistant" className={`${styles.btn} ${styles.btnPrimary}`}>Try the AI Agent →</a>
        <a href="#workflow"  className={`${styles.btn} ${styles.btnOutline}`}>Trigger a Workflow</a>
      </div>
    </section>
  );
}

/** Capabilities cards */
const CAPS = [
  { icon: "🤖", title: "watsonx AI Orchestration", body: "Deploy AI agents that understand natural language, automate multi-step tasks, and integrate seamlessly with your existing business systems — without replacing them.", tag: "IBM watsonx Orchestrate" },
  { icon: "⚡", title: "Hybrid Integration Platform", body: "Connect cloud and on-premise systems through managed APIs, event-driven flows, and real-time data pipelines. Built on webMethods — proven at enterprise scale.", tag: "webMethods HIP" },
  { icon: "🏗️", title: "AI Solutions Architecture", body: "End-to-end design and delivery of enterprise AI strategies — from requirements through deployment, governance, and continuous optimisation at scale.", tag: "IBM Partner · Silver" },
];

function Capabilities() {
  return (
    <section id="capabilities">
      <div className={styles.section}>
        <div className={styles.sectionLabel}>What We Do</div>
        <div className={styles.sectionTitle}>Our Core Capabilities</div>
        <p className={styles.sectionDesc}>Three interconnected disciplines powering enterprise AI transformation.</p>
        <div className={styles.cardGrid}>
          {CAPS.map((c) => (
            <div key={c.title} className={styles.capCard}>
              <div className={styles.capIcon}>{c.icon}</div>
              <h3 className={styles.capCardTitle}>{c.title}</h3>
              <p className={styles.capCardBody}>{c.body}</p>
              <span className={styles.capTag}>{c.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Integration flow — animates node highlight */
const FLOW_NODES = [
  { icon: "🏢", label: "Source",      name: "ERP / CRM" },
  { icon: "🔌", label: "API Gateway", name: "webMethods" },
  { icon: "⚙️", label: "Transform",  name: "Orchestration" },
  { icon: "🤖", label: "AI Layer",    name: "watsonx" },
  { icon: "📊", label: "Output",      name: "Dashboard" },
];

function IntegrationFlow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % FLOW_NODES.length), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="integration">
      <div className={styles.section}>
        <div className={styles.sectionLabel}>webMethods Hybrid Integration</div>
        <div className={styles.sectionTitle}>Real-Time Integration Architecture</div>
        <p className={styles.sectionDesc}>How we connect disparate enterprise systems through managed, event-driven pipelines — live, secure, and observable.</p>

        <div className={styles.flowBg}>
          <div className={styles.flowDiagram}>
            {FLOW_NODES.map((n, i) => (
              <React.Fragment key={n.name}>
                <div className={`${styles.flowNode} ${active === i ? styles.flowNodeLit : ""}`}>
                  <div className={styles.fnIcon}>{n.icon}</div>
                  <div className={styles.fnLabel}>{n.label}</div>
                  <div className={styles.fnName}>{n.name}</div>
                </div>
                {i < FLOW_NODES.length - 1 && <div className={styles.flowArrow} />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className={styles.flowStats}>
          {[["99.9%","Uptime SLA"],["<80ms","Avg Latency"],["240+","Connectors"]].map(([num, label]) => (
            <div key={label} className={styles.flowStat}>
              <div className={styles.fsNum}>{num}</div>
              <div className={styles.fsLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Chat message shape: { id, sender: "bot"|"user", text, time } */
const INITIAL_MESSAGES = [
  {
    id: 0,
    sender: "bot",
    text: "Hello! I'm your KGOTLA AI Agent — powered by IBM watsonx Orchestrate.\n\nI can help you explore our AI & integration capabilities, explain our solutions, or connect you with our team. What can I help you achieve today?",
    time: nowTime(),
  },
];

const SUGGESTIONS = [
  "What is watsonx Orchestrate?",
  "Tell me about your integration capabilities",
  "I want to book a consultation",
  "What industries do you serve?",
];

function ChatBot() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showChips, setShowChips] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function send(text) {
    if (!text.trim()) return;
    setInput("");
    setShowChips(false);
    setMessages((m) => [...m, { id: Date.now(), sender: "user", text, time: nowTime() }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        { id: Date.now() + 1, sender: "bot", text: getKBResponse(text), time: nowTime() },
      ]);
    }, 1000 + Math.random() * 700);
  }

  return (
    <section id="assistant">
      <div className={styles.section}>
        <div className={styles.sectionLabel}>watsonx Orchestrate</div>
        <div className={styles.sectionTitle}>Meet Your AI Business Agent</div>
        <p className={styles.sectionDesc}>Interact with a demonstration of our watsonx-powered AI assistant. Ask about our services, request a workflow, or book a consultation.</p>

        <div className={styles.chatContainer}>
          <div className={styles.chatWindow}>
            {/* Header */}
            <div className={styles.chatHeader}>
              <div className={styles.chatAvatar}>🤖</div>
              <div>
                <div className={styles.chatName}>KGOTLA AI Agent</div>
                <div className={styles.chatStatus}>
                  <span className={styles.statusDot} />Online · Ready
                </div>
              </div>
              <div className={styles.chatPowered}>Powered by watsonx</div>
            </div>

            {/* Messages */}
            <div className={styles.chatMessages}>
              {messages.map((m) => (
                <div key={m.id} className={`${styles.msg} ${m.sender === "user" ? styles.msgUser : styles.msgBot}`}>
                  <div className={styles.msgAv}>{m.sender === "bot" ? "🤖" : "👤"}</div>
                  <div>
                    <div className={styles.msgBubble}>{m.text}</div>
                    <div className={styles.msgTime}>{m.time}</div>
                  </div>
                </div>
              ))}
              {typing && (
                <div className={`${styles.msg} ${styles.msgBot}`}>
                  <div className={styles.msgAv}>🤖</div>
                  <div>
                    <div className={styles.msgBubble}>
                      <div className={styles.typingIndicator}>
                        <span /><span /><span />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick-reply chips */}
            {showChips && (
              <div className={styles.chatSuggestions}>
                {SUGGESTIONS.map((s) => (
                  <button key={s} className={styles.chip} onClick={() => send(s)}>{s}</button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className={styles.chatInputRow}>
              <input
                className={styles.chatInput}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Ask me anything about KGOTLA..."
              />
              <button className={styles.chatSend} onClick={() => send(input)}>➤</button>
            </div>
          </div>

          {/* Info panel */}
          <div className={styles.chatInfo}>
            <div className={styles.infoCard}>
              <h4 className={styles.infoCardTitle}>What This Agent Can Do</h4>
              <ul className={styles.capList}>
                {["Answer questions about our services","Explain AI & integration concepts","Recommend the right solution for you","Qualify your business use case","Trigger workflow simulations","Connect you with our team"].map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className={styles.infoCard}>
              <h4 className={styles.infoCardTitle}>Credentials Behind This</h4>
              <p className={styles.infoCardBody}>
                IBM watsonx Orchestrate Advanced · webMethods Hybrid Integration Advanced · IBM Silver Partner · IBM Bob Sales Foundation &amp; Intermediate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Workflow trigger + animated pipeline */
const STEP_NAMES = ["Intake & Validation","API Gateway Routing","AI Classification","CRM Record Created","Notification Dispatched"];

function buildDetail(step, name, company, useCase) {
  const uc = useCase.replace(/-/g, " ");
  const ref = `KG-${Math.floor(1000 + Math.random() * 9000)}`;
  return [
    `Validating request from ${name} at ${company}`,
    `Routing to ${uc} pipeline via webMethods`,
    `watsonx classifying as ${uc} opportunity`,
    `CRM record created — ${name} · ${company} assigned to Solutions team`,
    `Email + Slack notification sent · Ref: ${ref}`,
  ][step];
}

const DEFAULT_DETAILS = [
  "Form data captured and validated",
  "webMethods routes to correct service",
  "watsonx enriches and classifies request",
  "Lead logged and assigned automatically",
  "Confirmation sent to client + team",
];

function WorkflowTrigger() {
  const [name, setName]       = useState("");
  const [company, setCompany] = useState("");
  const [useCase, setUseCase] = useState("");
  const [priority, setPriority] = useState("standard");
  const [steps, setSteps]     = useState(Array(5).fill({ status: "pending", detail: null }));
  const [running, setRunning] = useState(false);

  function trigger() {
    if (running) return;
    const n = name.trim()    || "Prospect";
    const c = company.trim() || "Your Organisation";
    const u = useCase        || "ai-strategy";
    setSteps(Array(5).fill({ status: "pending", detail: null }));
    setRunning(true);
    runStep(0, n, c, u);
  }

  function runStep(i, n, c, u) {
    if (i >= 5) { setRunning(false); return; }
    setSteps((prev) => prev.map((s, idx) => idx === i ? { status: "active", detail: buildDetail(i, n, c, u) } : s));
    setTimeout(() => {
      setSteps((prev) => prev.map((s, idx) => idx === i ? { ...s, status: "done" } : s));
      runStep(i + 1, n, c, u);
    }, 950 + i * 180);
  }

  return (
    <section id="workflow">
      <div className={styles.section}>
        <div className={styles.sectionLabel}>Workflow Automation</div>
        <div className={styles.sectionTitle}>Trigger a Live Workflow</div>
        <p className={styles.sectionDesc}>Experience how our integration platform processes a real business event — from intake through AI enrichment to delivery in real time.</p>

        <div className={styles.workflowGrid}>
          {/* Form */}
          <div className={styles.wfForm}>
            <h3 className={styles.wfTitle}>▶ Business Request Intake</h3>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Your Name</label>
              <input className={styles.formInput} value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Lerato Dlamini" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Company</label>
              <input className={styles.formInput} value={company} onChange={(e) => setCompany(e.target.value)} placeholder="e.g. Nedbank, Eskom, Telkom" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Use Case</label>
              <select className={styles.formSelect} value={useCase} onChange={(e) => setUseCase(e.target.value)}>
                <option value="">— Select a use case —</option>
                <option value="ai-agent">Deploy an AI Agent</option>
                <option value="api-integration">API &amp; System Integration</option>
                <option value="workflow-automation">Workflow Automation</option>
                <option value="data-pipeline">Real-Time Data Pipeline</option>
                <option value="ai-strategy">AI Strategy &amp; Architecture</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Priority</label>
              <select className={styles.formSelect} value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="standard">Standard (5–7 days)</option>
                <option value="high">High (2–3 days)</option>
                <option value="critical">Critical (Same day)</option>
              </select>
            </div>
            <button className={styles.wfSubmit} onClick={trigger} disabled={running}>
              {running ? "Processing..." : "▶ Trigger Workflow"}
            </button>
          </div>

          {/* Pipeline */}
          <div className={styles.wfStatus}>
            <h3 className={styles.wfTitle}>Pipeline Status</h3>
            <div className={styles.pipelineSteps}>
              {STEP_NAMES.map((sName, i) => {
                const s = steps[i];
                return (
                  <div key={sName} className={styles.pipStep}>
                    <div className={`${styles.stepDot} ${styles["stepDot_" + s.status]}`}>
                      {s.status === "done" ? "✓" : s.status === "active" ? "↻" : i + 1}
                    </div>
                    <div className={styles.stepBody}>
                      <div className={styles.stepName}>{sName}</div>
                      <div className={styles.stepDetail}>{s.detail || DEFAULT_DETAILS[i]}</div>
                      <span className={`${styles.stepBadge} ${styles["stepBadge_" + s.status]}`}>
                        {s.status === "done" ? "Complete" : s.status === "active" ? "Processing" : "Waiting"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Target clients */
const CLIENTS = [
  { sector: "Financial Services",      name: "Banks & Insurers",         need: "Automate compliance workflows, connect legacy core banking to modern AI layers" },
  { sector: "Retail & E-Commerce",     name: "Omnichannel Retailers",    need: "Real-time inventory sync, AI-driven customer service agents, order orchestration" },
  { sector: "Government & Public Sector", name: "Departments & SOEs",    need: "Citizen service automation, cross-department data integration, AI-assisted decisions" },
  { sector: "Healthcare",              name: "Hospitals & Clinics",      need: "Patient data pipelines, AI-powered triage support, system interoperability (HL7/FHIR)" },
  { sector: "Telecoms & Media",        name: "Network Operators",        need: "API monetisation, event-driven provisioning, AI-powered churn prediction" },
  { sector: "Mining & Energy",         name: "Industrial Operators",     need: "IoT integration, predictive maintenance AI, operational workflow automation" },
];

function Clients() {
  return (
    <section id="clients">
      <div className={styles.section}>
        <div className={styles.sectionLabel}>Who We Serve</div>
        <div className={styles.sectionTitle}>Target Client Profiles</div>
        <p className={styles.sectionDesc}>We partner with forward-thinking organisations across Africa ready to transform through AI and intelligent integration.</p>
        <div className={styles.clientsGrid}>
          {CLIENTS.map((c) => (
            <div key={c.name} className={styles.clientCard}>
              <div className={styles.clientSector}>{c.sector}</div>
              <div className={styles.clientName}>{c.name}</div>
              <div className={styles.clientNeed}>{c.need}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** CTA banner */
function CTA() {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.ctaH2}>Ready to build something powerful?</h2>
      <p className={styles.ctaP}>Let's architect your AI and integration strategy together. Our team is ready to move from vision to production.</p>
      <div className={styles.btnRow}>
        <a href="https://kgotlaai.co.za" className={`${styles.btn} ${styles.btnPrimary}`}>Visit kgotlaai.co.za</a>
        <a href="#workflow"              className={`${styles.btn} ${styles.btnOutline}`}>Request a Demo</a>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Root component — compose everything
───────────────────────────────────────── */
export default function KgotlaDemo() {
  return (
    <div className={styles.root}>
      <NavBar />
      <Hero />
      <hr className={styles.divider} />
      <Capabilities />
      <hr className={styles.divider} />
      <IntegrationFlow />
      <hr className={styles.divider} />
      <ChatBot />
      <hr className={styles.divider} />
      <WorkflowTrigger />
      <hr className={styles.divider} />
      <Clients />
      <CTA />
      <footer className={styles.footer}>
        <p>© 2025 KGOTLA AI Solutions Architects &nbsp;·&nbsp; <a href="https://kgotlaai.co.za">kgotlaai.co.za</a> &nbsp;·&nbsp; Ubuntu · Innovation · Collective Intelligence</p>
        <p className={styles.footerMade}>Made with IBM Bob</p>
      </footer>
    </div>
  );
}
