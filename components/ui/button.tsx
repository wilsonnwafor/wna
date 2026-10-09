import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-growth-ink text-white hover:bg-growth-ink/90",
        navy: "bg-navy text-white hover:bg-navy-soft",
        gold: "bg-gold text-navy hover:bg-gold/90",
        outline: "border border-line bg-white text-navy hover:bg-paper",
        "outline-light": "border border-white/30 bg-transparent text-white hover:bg-white/10",
      },
      size: {
        md: "h-11 px-5",
        lg: "h-12 px-6 text-[15px]",
        sm: "h-9 px-4",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
);
Button.displayName = "Button";
