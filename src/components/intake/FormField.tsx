interface FormFieldProps {
  label: string
  /** Set when the field is a single input/textarea with a matching id */
  htmlFor?: string
  required?: boolean
  hint?: string
  children: React.ReactNode
}

export function FormField({
  label,
  htmlFor,
  required,
  hint,
  children,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-3">
      {htmlFor ? (
        <label
          htmlFor={htmlFor}
          className="text-[13px] font-semibold text-[#1a1a19] tracking-wide leading-snug"
        >
          {label}
          {required && (
            <span className="text-[#c8a97e] ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>
      ) : (
        <p
          className="text-[13px] font-semibold text-[#1a1a19] tracking-wide leading-snug"
          id={`label-${label.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {label}
          {required && (
            <span className="text-[#c8a97e] ml-1" aria-hidden="true">
              *
            </span>
          )}
        </p>
      )}

      {hint && (
        <p className="text-xs text-[#5c5c59] -mt-1 leading-relaxed">{hint}</p>
      )}

      {children}
    </div>
  )
}
