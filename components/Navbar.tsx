"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { scrollToSection, cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent z-50 transition-all duration-150 origin-left shadow-glow-sm"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Main Glass Floating Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "py-2.5 bg-[#080B14]/75 backdrop-blur-2xl border-b border-white/[0.12] shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]"
            : "py-4 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Monogram */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-xl p-1"
              aria-label="Presitha M. Home"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-primary via-indigo-600 to-brand-accent flex items-center justify-center font-bold text-white text-sm shadow-glow-sm group-hover:scale-105 transition-transform border border-white/20">
                PM
              </div>
              <div className="text-left hidden sm:block">
                <span className="font-bold text-white text-sm tracking-tight group-hover:text-brand-accent transition-colors block">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">
                  MSc Data Science
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links — Floating Glass Island */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/[0.05] border border-white/[0.14] px-3 py-1.5 rounded-full backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_25px_rgba(0,0,0,0.3)]">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors",
                      isActive ? "text-white font-semibold" : "text-slate-300 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white/[0.12] rounded-full border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Desktop Actions: Glass Resume CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                icon={<FileText className="w-3.5 h-3.5 text-cyan-200" />}
                onClick={onOpenResume}
              >
                Resume
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                icon={<FileText className="w-3.5 h-3.5" />}
                onClick={onOpenResume}
                className="text-xs px-2.5 py-1"
              >
                Resume
              </Button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                className="p-2 rounded-xl bg-white/[0.06] border border-white/15 text-slate-200 hover:text-white backdrop-blur-xl transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-16 z-30 lg:hidden p-4 rounded-2xl glass-panel-elevated shadow-2xl"
          >
            <nav className="flex flex-col gap-1.5 py-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-left",
                      isActive
                        ? "bg-brand-primary/20 text-white border border-brand-primary/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                        : "text-slate-300 hover:bg-white/[0.06]"
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                    )}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
