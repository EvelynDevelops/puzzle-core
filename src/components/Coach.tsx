const STATS = [
  { value: "10+",  label: "Years Experience" },
  { value: "200+", label: "Clients Trained" },
  { value: "CSCS", label: "Certified" },
] as const;

export default function Coach() {
  return (
    <section
      id="coach"
      className="bg-[#0c0c0b] py-28 md:py-40 border-t border-[#222220]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: label + headline */}
          <div>
            <p className="text-[#c8a97e] text-[11px] font-semibold tracking-[0.28em] uppercase mb-6">
              The Coaches
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.025em] text-[#f0ede8] leading-[1.08]">
              Precision Over<br />Popularity.
            </h2>

            {/* Stats */}
            <div className="mt-12 flex gap-10 md:gap-14 border-t border-[#222220] pt-10">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[#f0ede8] text-3xl font-bold tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[#a8a8a5] text-xs mt-1.5 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: bio */}
          <div className="space-y-5 text-[#a8a8a5] text-base md:text-[17px] leading-[1.8]">
            <p>
              We built Puzzle Core because we kept seeing the same pattern:
              smart, motivated people training hard but getting nowhere —
              because they were missing pieces they didn&apos;t know about.
            </p>
            <p>
              With a background in strength and conditioning and years of
              working with clients across every level — from first-timers to
              competitive athletes — we&apos;ve developed a system that accounts for
              the full picture.
            </p>
            <p>
              Our approach is evidence-based, methodical, and deeply
              individual. No templates. No trends. Just a complete programme
              built specifically around you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
