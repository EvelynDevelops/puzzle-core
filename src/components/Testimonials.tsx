const TESTIMONIALS = [
  {
    quote:
      "I've trained with multiple coaches over the years. What sets Puzzle Core apart is how methodical it is. Every session connects to a bigger picture. I'm stronger and more mobile than I've ever been.",
    name: "James R.",
    detail: "Amateur Powerlifter — 18 months",
  },
  {
    quote:
      "I came in recovering from a shoulder injury and not knowing where to start. The approach was careful, methodical, and actually enjoyable. Six months later I'm back to full training with zero issues.",
    name: "Priya M.",
    detail: "Office Professional — 8 months",
  },
  {
    quote:
      "The online coaching is the best investment I've made in my training. Real feedback, real programming, real results — and it fits around a demanding work schedule.",
    name: "Tom K.",
    detail: "Online Coaching Client — 1 year",
  },
] as const;

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f5f3ef] py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-[#c8a97e] text-[11px] font-semibold tracking-[0.28em] uppercase mb-4">
            Client Results
          </p>
          <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold tracking-[-0.025em] text-[#0c0c0b] leading-[1.08]">
            What Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 md:p-10 flex flex-col justify-between gap-10"
            >
              {/* Quote mark */}
              <div>
                <span
                  className="block text-5xl text-[#c8a97e] font-serif leading-none mb-5 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="text-[#3d3d3b] text-base leading-[1.8]">
                  {t.quote}
                </blockquote>
              </div>

              {/* Author */}
              <div className="border-t border-[#e8e5e0] pt-6">
                <p className="font-bold text-[#0c0c0b] text-sm tracking-wide">
                  {t.name}
                </p>
                <p className="text-[#5c5c59] text-xs mt-1 tracking-wide">
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
