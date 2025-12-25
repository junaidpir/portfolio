import React from "react"

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className = "", ...props }, ref) => {
  return <textarea ref={ref} className={`w-full px-3 py-2 rounded-md ${className}`} {...props} />
})
Textarea.displayName = "Textarea"