export default function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col justify-center bg-[#0c0c0b] overflow-hidden">
      {/* Decorative puzzle grid — right side */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none
                   opacity-[0.065] pr-6 md:pr-16 lg:pr-28"
        aria-hidden="true"
      >
        <PuzzleDecor />
      </div>

      {/* Gradient fade from left so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0b] via-[#0c0c0b]/85 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-28">
        <div className="max-w-2xl lg:max-w-[720px]">
          <p
            className="text-[#c8a97e] text-[11px] font-semibold tracking-[0.28em] uppercase mb-10 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            Elite Personal Training
          </p>

          <h1
            className="text-[clamp(3rem,7vw,5.75rem)] font-bold leading-[1.03] tracking-[-0.03em] text-[#f0ede8] mb-8 animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            Build the<br />Complete<br />Picture.
          </h1>

          <p
            className="text-[#a8a8a5] text-lg md:text-xl leading-[1.75] max-w-[480px] mb-12 animate-fade-up"
            style={{ animationDelay: "280ms" }}
          >
            Puzzle Core is precision personal training — built around
            identifying your missing pieces and constructing a complete system
            for long-term performance.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "380ms" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-14 px-8 bg-[#c8a97e] text-[#0c0c0b] font-semibold text-sm tracking-wide hover:bg-[#dfc49a] transition-colors duration-200"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center h-14 px-8 border border-[#ffffff18] text-[#f0ede8] font-medium text-sm tracking-wide hover:border-[#ffffff35] hover:bg-[#ffffff06] transition-all duration-200"
            >
              View Coaching&nbsp;&nbsp;→
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25 animate-fade-in"
        style={{ animationDelay: "900ms" }}
        aria-hidden="true"
      >
        <span className="text-[#f0ede8] text-[9px] tracking-[0.28em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#f0ede8] to-transparent" />
      </div>
    </section>
  );
}

function PuzzleDecor() {
  return (
    <svg
      width="560"
      height="560"
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top-left square */}
      <rect x="1" y="1" width="254" height="254" stroke="#c8a97e" strokeWidth="1.5" />
      {/* Top-right square */}
      <rect x="305" y="1" width="254" height="254" stroke="#c8a97e" strokeWidth="1.5" />
      {/* Bottom-left square */}
      <rect x="1" y="305" width="254" height="254" stroke="#c8a97e" strokeWidth="1.5" />
      {/* Bottom-right — slightly displaced, suggesting the missing piece sliding in */}
      <rect x="321" y="321" width="254" height="254" stroke="#ffffff" strokeWidth="1" opacity="0.45" />
      {/* Corner dots */}
      <circle cx="280" cy="140" r="3.5" fill="#c8a97e" opacity="0.7" />
      <circle cx="280" cy="280" r="3.5" fill="#c8a97e" opacity="0.7" />
      <circle cx="140" cy="280" r="3.5" fill="#c8a97e" opacity="0.7" />
      {/* Center cross */}
      <line x1="258" y1="280" x2="303" y2="280" stroke="#c8a97e" strokeWidth="1" opacity="0.4" />
      <line x1="280" y1="258" x2="280" y2="303" stroke="#c8a97e" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
