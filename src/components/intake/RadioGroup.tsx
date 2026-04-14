interface RadioOption {
  value: string
  label: string
}

interface RadioGroupProps {
  name: string
  options: readonly RadioOption[]
  required?: boolean
  /** Called with the selected value whenever the user changes selection */
  onChange?: (value: string) => void
}

export function RadioGroup({
  name,
  options,
  required,
  onChange,
}: RadioGroupProps) {
  return (
    <div
      role="radiogroup"
      aria-label={name}
      className="flex flex-col gap-2.5"
    >
      {options.map((opt) => (
        <label
          key={opt.value}
          className="group flex items-center gap-3 cursor-pointer select-none"
        >
          {/* Native input — hidden but keyboard/screen-reader accessible */}
          <input
            type="radio"
            name={name}
            value={opt.value}
            required={required}
            onChange={() => onChange?.(opt.value)}
            className="sr-only"
          />

          {/* Custom radio indicator — uses group-has-[:checked] so inner dot works */}
          <span
            className="
              shrink-0 w-[18px] h-[18px] rounded-full border-2
              border-[#ccc8c2]
              group-has-[input:checked]:border-[#c8a97e]
              flex items-center justify-center
              transition-colors duration-150
            "
          >
            <span
              className="
                w-2 h-2 rounded-full bg-[#c8a97e]
                scale-0 group-has-[input:checked]:scale-100
                transition-transform duration-150
              "
            />
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
