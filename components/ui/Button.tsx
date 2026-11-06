import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent" | "glass";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary:
        "bg-gradient-to-r from-brand-primary via-indigo-600 to-brand-secondary text-white shadow-glow-sm hover:shadow-glow-md hover:brightness-110 active:scale-[0.98] border border-white/20",
      secondary:
        "glass-button text-white hover:border-white/30 active:scale-[0.98]",
      glass:
        "bg-white/[0.08] backdrop-blur-xl border border-white/20 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)] hover:bg-white/[0.14] hover:border-white/30 active:scale-[0.98]",
      outline:
        "bg-transparent text-slate-200 border border-white/15 hover:border-brand-primary/50 hover:bg-brand-primary/10 active:scale-[0.98] backdrop-blur-sm",
      ghost:
        "bg-transparent text-slate-400 hover:text-white hover:bg-white/5 active:scale-[0.98]",
      accent:
        "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan hover:brightness-110 active:scale-[0.98] border border-cyan-300/30",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5",
      md: "text-sm px-5 py-2.5 rounded-xl gap-2",
      lg: "text-base px-6 py-3.5 rounded-xl gap-2.5 font-semibold",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {icon && iconPosition === "left" && <span>{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === "right" && <span>{icon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
