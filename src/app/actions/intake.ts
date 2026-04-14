'use server'

import { Resend } from 'resend'

export type ActionState =
  | { status: 'idle'; message: '' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string }

export async function submitIntake(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  // ── Extract fields ────────────────────────────────────────────────────────
  const name           = (formData.get('name')          as string | null)?.trim() ?? ''
  const email          = (formData.get('email')         as string | null)?.trim() ?? ''
  const goal           = (formData.get('goal')          as string | null) ?? ''
  const sport          = (formData.get('sport')         as string | null)?.trim() ?? ''
  const experience     = (formData.get('experience')    as string | null) ?? ''
  const weeklyTime     = (formData.get('weeklyTime')    as string | null) ?? ''
  const trainingLevel  = (formData.get('trainingLevel') as string | null) ?? ''
  const injury         = (formData.get('injury')        as string | null) ?? ''
  const injuryTime     = (formData.get('injuryTime')    as string | null) ?? ''
  const injuryStatus   = (formData.get('injuryStatus')  as string | null)?.trim() ?? ''
  const support        = (formData.get('support')       as string | null) ?? ''
  const communication       = formData.getAll('communication').join(', ')
  const communicationDetail = (formData.get('communicationDetail') as string | null)?.trim() ?? ''
  const notes          = (formData.get('notes')         as string | null)?.trim() ?? ''

  // ── Validate required fields ──────────────────────────────────────────────
  if (!name) return { status: 'error', message: 'Name is required.' }
  if (!email) return { status: 'error', message: 'Email is required.' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }
  if (!goal) return { status: 'error', message: 'Please select a main goal.' }

  // ── Compose email body ────────────────────────────────────────────────────
  const body = `
New PuzzleCore Intake Submission
=================================

Name:    ${name}
Email:   ${email}

─── SECTION 1 — GOALS ───────────────────────────────────
Main Goal:  ${goal || '—'}
Sport:      ${sport || '—'}

─── SECTION 2 — TRAINING BACKGROUND ─────────────────────
Experience:      ${experience || '—'}
Weekly Time:     ${weeklyTime || '—'}
Training Level:  ${trainingLevel || '—'}

─── SECTION 3 — INJURY / PHYSICAL STATUS ────────────────
Currently injured / limited:  ${injury || '—'}
When it started:              ${injuryTime || '—'}
Current status:
${injuryStatus || '—'}

─── SECTION 4 — COMMUNICATION PREFERENCES ───────────────
Support preference:  ${support || '—'}
Communication:       ${communication || '—'}
Contact details:     ${communicationDetail || '—'}

─── NOTES ───────────────────────────────────────────────
${notes || '—'}
`.trim()

  // ── Send via Resend ───────────────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[Intake] RESEND_API_KEY is not configured.')
    return {
      status: 'error',
      message: 'Email service is not configured. Please contact us directly.',
    }
  }

  const resend = new Resend(apiKey)
  const toEmail   = process.env.INTAKE_EMAIL_TO   ?? 'yinyuchen2000@gmail.com'
  const fromEmail = process.env.INTAKE_EMAIL_FROM ?? 'intake@puzzlecore.co'

  try {
    await resend.emails.send({
      from:    fromEmail,
      to:      toEmail,
      replyTo: email,
      subject: `New PuzzleCore Intake — ${name}`,
      text:    body,
    })

    return {
      status: 'success',
      message: "Thanks! We'll be in touch soon.",
    }
  } catch (err) {
    console.error('[Intake] Resend error:', err)
    return {
      status: 'error',
      message: 'Something went wrong sending your form. Please try again.',
    }
  }
}
