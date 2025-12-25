import React from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className = "", ...props }, ref) => {
  return <input ref={ref} className={`w-full px-3 py-2 rounded-md ${className}`} {...props} />
})
Input.displayName = "Input"