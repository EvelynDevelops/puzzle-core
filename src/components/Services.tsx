const SERVICES = [
  {
    number: "01",
    title: "1:1 Personal Training",
    description:
      "In-person sessions built entirely around your goals, your body, and your schedule. Maximum precision, zero wasted effort.",
  },
  {
    number: "02",
    title: "Online Coaching",
    description:
      "Full remote programming with weekly check-ins, video form analysis, and direct messaging. Elite coaching with no geographic limits.",
  },
  {
    number: "03",
    title: "Strength & Conditioning",
    description:
      "Structured strength progressions backed by sport science. Built for sustainable performance over years, not weeks.",
  },
  {
    number: "04",
    title: "Mobility & Injury-Aware Training",
    description:
      "Movement-first programming that works with your history, not against it. Train smart, stay consistent, move pain-free.",
  },
  {
    number: "05",
    title: "Sports Performance",
    description:
      "Sport-specific conditioning for competitive athletes. Designed around your season, your sport, and your position.",
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#0c0c0b] py-28 md:py-40 border-t border-[#222220]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="text-[#c8a97e] text-[11px] font-semibold tracking-[0.28em] uppercase mb-4">
              What We Offer
            </p>
            <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold tracking-[-0.025em] text-[#f0ede8] leading-[1.08]">
              Services
            </h2>
          </div>
          <p className="text-[#5c5c59] max-w-sm text-base leading-relaxed md:text-right">
            Every service is built on the same foundation — understand what you
            need, then build the system to get you there.
          </p>
        </div>

        {/* Service list */}
        <div className="divide-y divide-[#222220]">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 md:py-10
                         hover:bg-[#141413] -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12
                         transition-colors duration-200 rounded-none"
            >
              <span className="text-[#c8a97e] text-[11px] font-mono tracking-[0.2em] w-8 shrink-0">
                {service.number}
              </span>
              <h3 className="text-[#f0ede8] font-semibold text-xl md:text-2xl md:w-72 shrink-0 leading-snug">
                {service.title}
              </h3>
              <p className="text-[#5c5c59] text-sm md:text-base leading-relaxed flex-1">
                {service.description}
              </p>
              <span className="text-[#c8a97e] text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 hidden md:block">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
