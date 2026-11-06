"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Send, Sparkles, Terminal, Code, Database, Brain } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroCanvas } from "@/components/HeroCanvas";
import { HeroWorkspace } from "@/components/HeroWorkspace";

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation for roles
  useEffect(() => {
    const roles = SITE_CONFIG.roles;
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Interactive Neural Network / Connected Nodes Canvas Background */}
      <HeroCanvas />

      {/* Ambient Radial Gradient Overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Role Typing, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 hover:border-brand-primary/30 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                {SITE_CONFIG.status.text}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              <span className="block text-slate-400 text-2xl sm:text-3xl font-medium tracking-normal mb-1">
                Hi, I&apos;m
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                {SITE_CONFIG.name}
              </span>
            </h1>

            {/* Looping Typing Role Animation */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                {displayedText}
              </span>
              <span className="inline-block w-0.5 h-6 sm:h-8 ml-1 bg-brand-accent animate-pulse" />
            </div>

            {/* Authentic Hero Description */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl mb-8 font-normal">
              {SITE_CONFIG.bio}
            </p>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="subtle" icon={<Code className="w-3 h-3 text-cyan-400" />}>
                Python
              </Badge>
              <Badge variant="subtle" icon={<Brain className="w-3 h-3 text-purple-400" />}>
                Machine Learning & NLP
              </Badge>
              <Badge variant="subtle" icon={<Database className="w-3 h-3 text-indigo-400" />}>
                Big Data & SQL
              </Badge>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                onClick={() => scrollToSection("projects")}
              >
                Explore My Projects
              </Button>

              <Button
                variant="secondary"
                size="lg"
                icon={<FileText className="w-4 h-4 text-cyan-400" />}
                onClick={onOpenResume}
              >
                View Resume
              </Button>

              <Button
                variant="outline"
                size="lg"
                icon={<Send className="w-4 h-4 text-slate-300" />}
                onClick={() => scrollToSection("contact")}
              >
                Let&apos;s Connect
              </Button>
            </div>
          </motion.div>

          {/* Right Column: 3D Developer Workspace Visual */}
          <div className="lg:col-span-6 xl:col-span-6 w-full">
            <HeroWorkspace />
          </div>
        </div>
      </div>
    </section>
  );
}

