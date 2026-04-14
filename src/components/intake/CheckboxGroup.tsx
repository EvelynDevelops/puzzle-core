interface CheckboxOption {
  value: string
  label: string
}

interface CheckboxGroupProps {
  name: string
  options: readonly CheckboxOption[]
}

export function CheckboxGroup({ name, options }: CheckboxGroupProps) {
  return (
    <div className="flex flex-col gap-2.5">
      {options.map((opt) => (
        <label
          key={opt.value}
          className="group flex items-center gap-3 cursor-pointer select-none"
        >
          {/* Native checkbox — hidden but keyboard/screen-reader accessible */}
          <input
            type="checkbox"
            name={name}
            value={opt.value}
            className="sr-only"
          />

          {/* Custom checkbox indicator */}
          <span
            className="
              shrink-0 w-[18px] h-[18px] rounded-[4px] border-2
              border-[#ccc8c2]
              group-has-[input:checked]:border-[#c8a97e]
              group-has-[input:checked]:bg-[#c8a97e]
              flex items-center justify-center
              transition-all duration-150
            "
          >
            {/* Checkmark SVG */}
            <svg
              viewBox="0 0 10 8"
              fill="none"
              className="
                w-[10px] h-[8px] text-[#0c0c0b]
                opacity-0 group-has-[input:checked]:opacity-100
                scale-75 group-has-[input:checked]:scale-100
                transition-all duration-150
              "
              aria-hidden="true"
            >
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          {/* Label text */}
          <span className="text-sm text-[#2a2a28] leading-snug group-has-[input:checked]:text-[#0c0c0b] group-has-[input:checked]:font-medium transition-colors">
            {opt.label}
          </span>
        </label>
      ))}
    </div>
  )
}
