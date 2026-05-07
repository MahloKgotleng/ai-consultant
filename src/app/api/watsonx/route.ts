import { NextRequest, NextResponse } from 'next/server'

const ROI_PARAMETERS: Record<string, {
  label: string
  timeSaved: number
  costPerHour: number
  appsPerMonth: number
  implementationCost: number
}> = {
  financial: {
    label: 'Financial Services',
    timeSaved: 0.83,
    costPerHour: 500,
    appsPerMonth: 100,
    implementationCost: 50000,
  },
  retail: {
    label: 'Retail',
    timeSaved: 0.75,
    costPerHour: 350,
    appsPerMonth: 200,
    implementationCost: 40000,
  },
  manufacturing: {
    label: 'Manufacturing',
    timeSaved: 0.80,
    costPerHour: 450,
    appsPerMonth: 80,
    implementationCost: 60000,
  },
  telecommunications: {
    label: 'Telecommunications',
    timeSaved: 0.78,
    costPerHour: 400,
    appsPerMonth: 150,
    implementationCost: 55000,
  },
  mining: {
    label: 'Mining',
    timeSaved: 0.82,
    costPerHour: 600,
    appsPerMonth: 60,
    implementationCost: 80000,
  },
  government: {
    label: 'Government',
    timeSaved: 0.70,
    costPerHour: 350,
    appsPerMonth: 120,
    implementationCost: 45000,
  },
}

function detectIndustry(text: string): string | null {
  const t = text.toLowerCase()
  if (t.match(/financ|bank|insurance|fsca|kyc|credit|fraud/)) return 'financial'
  if (t.match(/retail|shop|consumer|ecommerce|store/)) return 'retail'
  if (t.match(/manufactur|factory|production|quality control|supply chain/)) return 'manufacturing'
  if (t.match(/telecom|network|mobile|carrier|mtl|vodacom/)) return 'telecommunications'
  if (t.match(/mining|mineral|extraction|anglo|gold fields|exxaro/)) return 'mining'
  if (t.match(/government|public sector|municipality|eskom|transnet/)) return 'government'
  return null
}

function calculateROI(industry: string) {
  const p = ROI_PARAMETERS[industry]
  if (!p) return null
  const hoursPerMonth = p.appsPerMonth * 2
  const monthlySavings = hoursPerMonth * p.timeSaved * p.costPerHour
  const annualSavings = monthlySavings * 12
  const paybackMonths = Math.ceil(p.implementationCost / monthlySavings)
  const roiPercent = Math.round(((annualSavings - p.implementationCost) / p.implementationCost) * 100)
  return {
    annualSavings: Math.round(annualSavings),
    monthlySavings: Math.round(monthlySavings),
    timeSavedHours: Math.round(hoursPerMonth * p.timeSaved),
    paybackMonths,
    roiPercent,
    industry: p.label,
  }
}

async function getWatsonxToken(apiKey: string): Promise<string> {
  const res = await fetch('https://iam.cloud.ibm.com/identity/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${apiKey}`,
  })
  const data = await res.json()
  if (!data.access_token) throw new Error('Failed to get IBM IAM token')
  return data.access_token
}

async function callWatsonx(token: string, projectId: string, url: string, messages: {role: string, content: string}[], system: string) {
  const baseUrl = url.includes('ml.cloud.ibm.com') ? url : 'https://eu-de.ml.cloud.ibm.com'
  
  const formattedMessages = [
    { role: 'system', content: system },
    ...messages
  ]

  const res = await fetch(`${baseUrl}/ml/v1/text/chat?version=2024-05-13`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model_id: 'meta-llama/llama-3-2-11b-vision-instruct',
      project_id: projectId,
      messages: formattedMessages,
      parameters: {
        max_new_tokens: 400,
        temperature: 0.7,
        repetition_penalty: 1.1,
      },
    }),
  })
  const data = await res.json()
  return data?.choices?.[0]?.message?.content?.trim() ?? null
}

async function callGroqFallback(messages: {role: string, content: string}[], system: string, apiKey: string) {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 400,
      messages: [
        { role: 'system', content: system },
        ...messages,
      ],
    }),
  })
  const data = await res.json()
  return data?.choices?.[0]?.message?.content ?? null
}

export async function POST(req: NextRequest) {
  const { messages, system } = await req.json()

  const watsonxKey = process.env.WATSONX_API_KEY
  const watsonxProject = process.env.WATSONX_PROJECT_ID
  const watsonxUrl = process.env.WATSONX_URL || 'https://us-south.ml.cloud.ibm.com'
  const groqKey = process.env.GROQ_API_KEY

  // Detect industry from conversation for ROI
  const allText = messages.map((m: {content: string}) => m.content).join(' ')
  const detectedIndustry = detectIndustry(allText)
  const roi = detectedIndustry && messages.length >= 4 ? calculateROI(detectedIndustry) : null

  let content: string | null = null
  let model = 'groq'

  // Try watsonx first
  if (watsonxKey && watsonxProject) {
    try {
      const token = await getWatsonxToken(watsonxKey)
      content = await callWatsonx(token, watsonxProject, watsonxUrl, messages, system)
      model = 'watsonx'
    } catch {
      // Fall through to Groq
    }
  }

  // Groq fallback
  if (!content && groqKey) {
    try {
      content = await callGroqFallback(messages, system, groqKey)
    } catch {
      content = "Let me connect you with Mahlo directly — mahlo@kgotlaai.co.za or call 062 669 8650"
    }
  }

  if (!content) {
    return NextResponse.json({ error: 'No AI service available' }, { status: 500 })
  }

  return NextResponse.json({
    content,
    model: 'watsonx',
    roi,
    detectedIndustry,
  })
}
