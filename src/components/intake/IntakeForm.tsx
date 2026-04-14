'use client'

import { useActionState, useState } from 'react'
import { submitIntake, type ActionState } from '@/app/actions/intake'
import { SectionHeader } from './SectionHeader'
import { FormField } from './FormField'
import { RadioGroup } from './RadioGroup'
import { CheckboxGroup } from './CheckboxGroup'

// ── Option lists ────────────────────────────────────────────────────────────

const GOAL_OPTIONS = [
  { value: 'Performance / competition',        label: 'Performance / competition' },
  { value: 'Injury recovery / rehabilitation', label: 'Injury recovery / rehabilitation' },
  { value: 'Strength and conditioning',        label: 'Strength and conditioning' },
  { value: 'General fitness',                  label: 'General fitness' },
  { value: 'Return to sport',                  label: 'Return to sport' },
  { value: 'Other',                            label: 'Other' },
] as const

const EXPERIENCE_OPTIONS = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No',  label: 'No' },
] as const

const TIME_OPTIONS = [
  { value: '1 session per week',  label: '1x per week' },
  { value: '2 sessions per week', label: '2x per week' },
  { value: '3 sessions per week', label: '3x per week' },
  { value: '4 sessions per week', label: '4x per week' },
  { value: '5+ sessions per week', label: '5x or more per week' },
] as const

const LEVEL_OPTIONS = [
  { value: 'Less than 1 year', label: 'Less than 1 year' },
  { value: '1–3 years',        label: '1–3 years' },
  { value: '3–7 years',        label: '3–7 years' },
  { value: '7+ years',         label: '7+ years' },
] as const

const INJURY_OPTIONS = [
  { value: 'Yes',      label: 'Yes' },
  { value: 'No',       label: 'No' },
  { value: 'Not sure', label: 'Not sure' },
] as const

const INJURY_TIME_OPTIONS = [
  { value: 'Less than 1 month ago', label: 'Less than 1 month ago' },
  { value: '1–3 months ago',        label: '1–3 months ago' },
  { value: '3–6 months ago',        label: '3–6 months ago' },
  { value: '6–12 months ago',       label: '6–12 months ago' },
  { value: 'More than 1 year ago',  label: 'More than 1 year ago' },
] as const

const SUPPORT_OPTIONS = [
  { value: 'Regular check-ins / close guidance', label: 'Regular check-ins / close guidance' },
  { value: 'Moderate support',                   label: 'Moderate support' },
  { value: 'Independent approach',               label: 'Independent approach' },
  { value: 'Not sure yet',                       label: 'Not sure yet' },
] as const

const COMMUNICATION_OPTIONS = [
  { value: 'Email',     label: 'Email' },
  { value: 'Messaging', label: 'Messaging' },
  { value: 'Phone',     label: 'Phone' },
  { value: 'Mixed',     label: 'Mixed' },
] as const

// ── Initial state ───────────────────────────────────────────────────────────

const INITIAL_STATE: ActionState = { status: 'idle', message: '' }

// ── Component ───────────────────────────────────────────────────────────────

export function IntakeForm() {
  const [state, formAction, pending] = useActionState(submitIntake, INITIAL_STATE)
  // Track injury answer locally so we can conditionally reveal follow-up fields
  const [injuryValue, setInjuryValue] = useState<string>('')
  const showInjuryDetails = injuryValue === 'Yes' || injuryValue === 'Not sure'

  // ── Success screen ──────────────────────────────────────────────────────
  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center text-center py-20 px-6">
        {/* Gold check icon */}
        <div className="w-16 h-16 rounded-full bg-[#c8a97e]/10 border border-[#c8a97e]/30 flex items-center justify-center mb-6">
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-[#c8a97e]">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#0c0c0b] mb-3 tracking-tight">
          Submission received.
        </h2>
        <p className="text-[#5c5c59] text-base leading-relaxed max-w-sm">
          {state.message}
        </p>
      </div>
    )
  }

  // ── Form ────────────────────────────────────────────────────────────────
  return (
    <form action={formAction} noValidate className="flex flex-col gap-12">

      {/* ── SECTION 1: Goals ─────────────────────────────────────────────── */}
      <section className="flex flex-col gap-7">
        <SectionHeader number="01" title="Goals" />

        <FormField label="What is your main goal?" required>
          <RadioGroup
            name="goal"
            options={GOAL_OPTIONS}
            required
          />
        </FormField>

        <FormField
          label="What sport or activity do you currently do?"
          htmlFor="sport"
          hint="E.g. football, running, CrossFit, gym training, yoga — or none."
        >
          <input
            id="sport"
            name="sport"
            type="text"
            placeholder="Type your answer"
            className={inputClass}
          />
        </FormField>
      </section>

      {/* ── SECTION 2: Training Background ───────────────────────────────── */}
      <section className="flex flex-col gap-7">
        <SectionHeader number="02" title="Training Background" />

        <FormField label="Have you trained with a partner or in a group before?">
          <RadioGroup name="experience" options={EXPERIENCE_OPTIONS} />
        </FormField>

        <FormField label="Each session is approximately 1–2 hours. How many times per week can you train?">
          <RadioGroup name="weeklyTime" options={TIME_OPTIONS} />
        </FormField>

        <FormField label="How many years of weightlifting experience do you have?">
          <RadioGroup name="trainingLevel" options={LEVEL_OPTIONS} />
        </FormField>
      </section>

      {/* ── SECTION 3: Injury / Physical Status ──────────────────────────── */}
      <section className="flex flex-col gap-7">
        <SectionHeader number="03" title="Injury / Physical Status" />

        <FormField label="Are you currently dealing with any injury, pain, or limitation?">
          <RadioGroup
            name="injury"
            options={INJURY_OPTIONS}
            onChange={setInjuryValue}
          />
        </FormField>

        {/* Conditional follow-up fields */}
        {showInjuryDetails && (
          <>
            <FormField label="When did it start?">
              <RadioGroup name="injuryTime" options={INJURY_TIME_OPTIONS} />
            </FormField>

            <FormField
              label="What is the current status?"
              htmlFor="injuryStatus"
              hint="Describe your pain, limitation, or what you've already tried."
            >
              <textarea
                id="injuryStatus"
                name="injuryStatus"
                rows={4}
                placeholder="Describe your current situation..."
                className={`${inputClass} resize-none`}
              />
            </FormField>
          </>
        )}
      </section>

      {/* ── SECTION 4: Communication Preferences ─────────────────────────── */}
      <section className="flex flex-col gap-7">
        <SectionHeader number="04" title="Communication Preferences" />

        <FormField label="What kind of support do you prefer?">
          <RadioGroup name="support" options={SUPPORT_OPTIONS} />
        </FormField>

        <FormField
          label="Preferred communication method"
          hint="Select all that apply."
        >
          <CheckboxGroup name="communication" options={COMMUNICATION_OPTIONS} />
        </FormField>

        <FormField
          label="Contact details"
          htmlFor="communicationDetail"
          hint="E.g. WhatsApp +61 400 000 000"
        >
          <input
            id="communicationDetail"
            name="communicationDetail"
            type="text"
            placeholder="E.g. WhatsApp +61 400 000 000"
            className={inputClass}
          />
        </FormField>
      </section>

      {/* ── SECTION 5: Final ──────────────────────────────────────────────── */}
      <section className="flex flex-col gap-7">
        <SectionHeader number="05" title="About You" />

        <FormField
          label="Anything else you'd like us to know?"
          htmlFor="notes"
          hint="Questions, concerns, context — anything relevant."
        >
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Optional..."
            className={`${inputClass} resize-none`}
          />
        </FormField>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="Name" htmlFor="name" required>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              required
              autoComplete="name"
              className={inputClass}
            />
          </FormField>

          <FormField label="Email" htmlFor="email" required>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
              className={inputClass}
            />
          </FormField>
        </div>
      </section>

      {/* ── Error message ─────────────────────────────────────────────────── */}
      {state.status === 'error' && (
        <p
          role="alert"
          className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
        >
          {state.message}
        </p>
      )}

      {/* ── Submit ────────────────────────────────────────────────────────── */}
      <div className="flex flex-col items-start gap-4 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="
            inline-flex items-center justify-center h-14 px-10
            bg-[#0c0c0b] text-[#f0ede8] font-semibold text-sm tracking-wide
            hover:bg-[#c8a97e] hover:text-[#0c0c0b]
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a97e] focus-visible:ring-offset-2
          "
        >
          {pending ? (
            <span className="flex items-center gap-2.5">
              <Spinner />
              Submitting…
            </span>
          ) : (
            'Submit Application'
          )}
        </button>

        <p className="text-xs text-[#5c5c59] leading-relaxed">
          We review every submission personally and reply within 24 hours.
        </p>
      </div>
    </form>
  )
}

// ── Helpers ─────────────────────────────────────────────────────────────────

const inputClass = `
  w-full px-4 py-3 rounded-lg
  bg-white border border-[#e0ddd9] text-[#0c0c0b] text-sm
  placeholder:text-[#aaa8a4]
  focus:outline-none focus:border-[#c8a97e] focus:ring-2 focus:ring-[#c8a97e]/20
  transition-colors duration-150
`.trim()

function Spinner() {
  return (
    <svg
      className="w-4 h-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}
