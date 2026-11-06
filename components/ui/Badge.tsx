import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "emerald" | "outline" | "subtle" | "glass";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "glass",
  size = "sm",
  className,
  icon,
}: BadgeProps) {
  const variantStyles = {
    primary:
      "bg-brand-primary/15 text-indigo-300 border-brand-primary/30 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
    secondary:
      "bg-brand-secondary/15 text-purple-300 border-brand-secondary/30 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
    accent:
      "bg-brand-accent/15 text-cyan-300 border-brand-accent/30 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
    emerald:
      "bg-brand-emerald/15 text-emerald-300 border-brand-emerald/30 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
    outline:
      "bg-transparent text-slate-300 border-white/15 hover:border-white/25 backdrop-blur-sm",
    subtle:
      "bg-white/[0.05] text-slate-300 border-white/10 hover:bg-white/[0.08] backdrop-blur-md",
    glass: "glass-pill text-slate-200",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-1",
    md: "text-sm px-3.5 py-1.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full border transition-all duration-200 select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="w-3.5 h-3.5 inline-flex items-center justify-center">{icon}</span>}
      {children}
    </span>
  );
}
