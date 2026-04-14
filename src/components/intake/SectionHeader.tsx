interface SectionHeaderProps {
  number: string
  title: string
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 pb-6 border-b border-[#ede9e3]">
      <span className="text-[#c8a97e] text-[11px] font-mono tracking-[0.2em] shrink-0">
        {number}
      </span>
      <h2 className="text-[#0c0c0b] font-bold text-base tracking-wide uppercase text-[13px]">
        {title}
      </h2>
    </div>
  )
}
