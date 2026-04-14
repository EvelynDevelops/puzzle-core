const PILLARS = [
  {
    number: "01",
    name: "Strength",
    description:
      "The foundation of everything. Strength training is the single highest-leverage tool in fitness — improving body composition, bone density, injury resilience, and long-term performance.",
  },
  {
    number: "02",
    name: "Movement",
    description:
      "Quality before quantity. We prioritise movement patterns — ensuring you move well before adding load. Poor patterns under load entrench bad habits, not fitness.",
  },
  {
    number: "03",
    name: "Recovery",
    description:
      "Progress is built during rest, not sessions. Sleep, nutrition, and strategic deloads are as important as the training itself. They are part of the programme.",
  },
  {
    number: "04",
    name: "Consistency",
    description:
      "The one variable that matters most. A sustainable plan executed consistently will always outperform a perfect plan done occasionally. We build for the long game.",
  },
] as const;

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="bg-[#0c0c0b] py-28 md:py-40 border-t border-[#222220]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="text-[#c8a97e] text-[11px] font-semibold tracking-[0.28em] uppercase mb-4">
              Training Philosophy
            </p>
            <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold tracking-[-0.025em] text-[#f0ede8] leading-[1.08]">
              The Four Pillars
            </h2>
          </div>
          <p className="text-[#a8a8a5] max-w-sm text-base leading-relaxed md:text-right">
            Every programme is built on this framework. The pillars are not
            sequential — they work together, always.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#222220]">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-[#0c0c0b] p-8 md:p-10 flex flex-col group hover:bg-[#141413] transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[#c8a97e] text-[11px] font-mono tracking-[0.2em]">
                  {pillar.number}
                </span>
              </div>
              <div className="w-8 h-px bg-[#c8a97e] mb-8" />
              <h3 className="text-[#f0ede8] font-bold text-2xl md:text-3xl mb-5 tracking-tight">
                {pillar.name}
              </h3>
              <p className="text-[#a8a8a5] text-sm leading-[1.85] mt-auto">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
