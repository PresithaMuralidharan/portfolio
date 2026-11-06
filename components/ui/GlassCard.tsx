"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: "none" | "primary" | "secondary" | "accent" | "subtle";
  variant?: "standard" | "elevated" | "frosted";
  hoverEffect?: boolean;
  spotlight?: boolean;
}

export function GlassCard({
  children,
  className,
  glow = "none",
  variant = "standard",
  hoverEffect = true,
  spotlight = true,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !spotlight) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowStyles = {
    none: "",
    primary: "hover:border-brand-primary/50 hover:shadow-glow-md",
    secondary: "hover:border-brand-secondary/50 hover:shadow-glow-md",
    accent: "hover:border-brand-accent/50 hover:shadow-glow-cyan",
    subtle: "hover:border-white/25",
  };

  const variantStyles = {
    standard: "glass-panel",
    elevated: "glass-panel-elevated",
    frosted:
      "bg-white/[0.04] backdrop-blur-2xl border border-white/[0.14] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-2xl p-6 transition-all duration-300 glass-specular-top group overflow-hidden",
        variantStyles[variant],
        hoverEffect && "hover:-translate-y-1 hover:shadow-2xl",
        glowStyles[glow],
        className
      )}
      {...props}
    >
      {/* Specular Spotlight Reflection following cursor */}
      {spotlight && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300 -z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.12), transparent 80%)`,
          }}
        />
      )}

      {/* Subtle top edge specular highlight line */}
      <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
