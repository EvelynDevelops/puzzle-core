export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-[#0c0c0b] border-t border-[#222220]"
    >
      {/* Main CTA block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-40 text-center">
        <p className="text-[#c8a97e] text-[11px] font-semibold tracking-[0.28em] uppercase mb-8">
          Get Started
        </p>

        <h2 className="text-[clamp(2.5rem,6.5vw,5.25rem)] font-bold tracking-[-0.03em] text-[#f0ede8] leading-[1.04] mb-8 max-w-4xl mx-auto">
          Ready to put the<br />pieces together?
        </h2>

        <p className="text-[#5c5c59] text-lg md:text-xl max-w-xl mx-auto leading-[1.75] mb-14">
          Every client starts with a free consultation. We&apos;ll map your missing
          pieces and build a plan from there. No obligation.
        </p>

        <a
          href="/intake"
          className="inline-flex items-center justify-center h-16 px-14 bg-[#c8a97e] text-[#0c0c0b] font-bold text-sm tracking-[0.12em] uppercase hover:bg-[#dfc49a] transition-colors duration-200"
        >
          Book Your Free Consultation
        </a>

      </div>

      {/* Footer */}
      <div className="border-t border-[#1a1a19]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LogoMark />
            <span className="text-[#f0ede8] font-bold tracking-[0.14em] text-sm uppercase">
              Puzzle Core
            </span>
          </div>
          <p className="text-[#3a3a38] text-sm">
            &copy; {new Date().getFullYear()} Puzzle Core. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

function LogoMark() {
  return (
    <div className="relative w-[22px] h-[22px] shrink-0">
      <div className="absolute top-0 left-0 w-[9px] h-[9px] border border-[#c8a97e]" />
      <div className="absolute top-0 right-0 w-[9px] h-[9px] border border-[#c8a97e]" />
      <div className="absolute bottom-0 left-0 w-[9px] h-[9px] border border-[#c8a97e]" />
      <div className="absolute bottom-[1px] right-[1px] w-[9px] h-[9px] bg-[#c8a97e]" />
    </div>
  );
}
