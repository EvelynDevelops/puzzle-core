const PIECES = [
  { label: "Strength",    filled: true },
  { label: "Movement",   filled: false },
  { label: "Recovery",   filled: false },
  { label: "Consistency", filled: false },
] as const;

export default function About() {
  return (
    <section id="about" className="bg-[#f5f3ef] py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Text */}
          <div>
            <p className="text-[#c8a97e] text-[11px] font-semibold tracking-[0.28em] uppercase mb-6">
              The Philosophy
            </p>
            <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold tracking-[-0.025em] text-[#0c0c0b] leading-[1.08] mb-10">
              Training Is<br />Not Random.
            </h2>
            <div className="space-y-5 text-[#3d3d3b] text-base md:text-[17px] leading-[1.8]">
              <p>
                Most people approach fitness by copying workouts, chasing trends,
                or following one-size-fits-all programmes. The results are
                inconsistent — because the approach is.
              </p>
              <p>
                Puzzle Core is different. Every programme begins with a deep
                assessment: your movement quality, training history, recovery
                capacity, lifestyle demands, and long-term goals.
              </p>
              <p>
                From there, we identify the gaps — the missing pieces. Then we
                build a complete, coherent system designed specifically around
                you. Nothing is left to chance.
              </p>
            </div>
          </div>

          {/* Visual: 2×2 puzzle grid */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="group grid grid-cols-2 gap-4 w-full max-w-[360px]">
              {PIECES.map((piece) => (
                <div
                  key={piece.label}
                  className={`
                    aspect-square flex items-end p-6 md:p-8 transition-colors duration-200 cursor-default
                    hover:bg-[#0c0c0b] hover:text-[#c8a97e]
                    ${piece.filled
                      ? "bg-[#0c0c0b] text-[#c8a97e] group-hover:bg-[#0c0c0b]/[0.07] group-hover:text-[#0c0c0b] hover:!bg-[#0c0c0b] hover:!text-[#c8a97e]"
                      : "bg-[#0c0c0b]/[0.07] text-[#0c0c0b]"
                    }
                  `}
                >
                  <span className="font-semibold text-sm tracking-wide">
                    {piece.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
