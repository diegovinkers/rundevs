import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react"
import { Slot } from "@radix-ui/react-slot" // si quieres usar asChild

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  asChild?: boolean
}

const Button = forwardRef<ElementRef<"button">, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 ${className || ""}`}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
