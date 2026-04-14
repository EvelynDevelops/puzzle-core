const AUDIENCES = [
  {
    title: "Beginners",
    description:
      "No experience needed — just readiness. We build the foundation correctly from day one so you never have to undo bad habits later.",
  },
  {
    title: "Athletes",
    description:
      "Structured, sport-specific training designed to close the gap between where you are and where your performance needs to be.",
  },
  {
    title: "Busy Professionals",
    description:
      "Intelligent programming that respects your schedule. No wasted sessions, no filler work — every minute earns its place.",
  },
  {
    title: "Rebuilding After Injury",
    description:
      "Careful, progressive work that rebuilds strength and confidence without aggravating old problems. We work with your body, not against it.",
  },
] as const;

export default function WhoItsFor() {
  return (
    <section id="who" className="bg-[#f5f3ef] py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 mb-16 md:mb-20">
          <div>
            <p className="text-[#c8a97e] text-[11px] font-semibold tracking-[0.28em] uppercase mb-4">
              Who It&apos;s For
            </p>
            <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold tracking-[-0.025em] text-[#0c0c0b] leading-[1.08]">
              Built for<br />Every Athlete.
            </h2>
          </div>
          <p className="text-[#5c5c59] text-base md:text-[17px] leading-[1.8] self-end max-w-md">
            Puzzle Core works with clients at every level. The common thread
            is not where you start — it is the commitment to building something
            complete.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {AUDIENCES.map((item, i) => (
            <div
              key={item.title}
              className="bg-white p-8 md:p-10 flex flex-col gap-4 group hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-[#0c0c0b] text-xl md:text-2xl leading-snug">
                  {item.title}
                </h3>
                <span className="text-[#c8a97e] text-lg mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </div>
              <p className="text-[#5c5c59] text-sm md:text-base leading-[1.8]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
