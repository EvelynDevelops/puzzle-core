import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import { IntakeForm } from '@/components/intake/IntakeForm'

export const metadata: Metadata = {
  title: 'Intake Form — Puzzle Core',
  description:
    'Tell us about your goals, training background, and current situation. We review every submission personally.',
}

export default function IntakePage() {
  return (
    <>
      <Nav />

      {/* Page background */}
      <div className="min-h-svh bg-[#f5f3ef]">
        <div className="max-w-[660px] mx-auto px-5 sm:px-6 pt-32 pb-24">

          {/* ── Page header ──────────────────────────────────────────────── */}
          <div className="mb-12">
            <p className="text-[#c8a97e] text-[11px] font-semibold tracking-[0.28em] uppercase mb-4">
              Puzzle Core
            </p>
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.025em] text-[#0c0c0b] leading-[1.1] mb-4">
              Start Your Training Journey
            </h1>
            <p className="text-[#5c5c59] text-base md:text-[17px] leading-[1.75] max-w-lg">
              Tell us about your goals, training background, and current
              situation. We review every submission personally.
            </p>
          </div>

          {/* ── Form card ────────────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#ede9e3] px-6 sm:px-10 py-10 sm:py-12">
            <IntakeForm />
          </div>

          {/* ── Footer note ──────────────────────────────────────────────── */}
          <p className="text-center text-xs text-[#aaa8a4] mt-8 leading-relaxed">
            Your information is handled with complete confidentiality and will
            never be shared or used for marketing.
          </p>
        </div>
      </div>
    </>
  )
}
