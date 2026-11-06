"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#070910] text-slate-400 py-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/[0.06]">
          {/* Left Column: Brand & Tagline */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center font-bold text-white text-xs">
                PM
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Integrated MSc Data Science Student at Coimbatore Institute of Technology (2024–2029).
              Focused on applied Machine Learning, NLP, and Big Data technologies.
            </p>
          </div>

          {/* Center Column: Quick Nav Links */}
          <div className="md:col-span-4">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
              {NAV_LINKS.slice(0, 6).map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.replace("#", ""))}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Social Links & Back-to-Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={SITE_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${SITE_CONFIG.socials.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-brand-primary/15 hover:bg-brand-primary/25 border border-brand-primary/30 text-indigo-300 hover:text-white transition-all hover:-translate-y-0.5"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© 2026 {SITE_CONFIG.name} All rights reserved.</div>
          <div className="flex items-center gap-1">
            Designed & Engineered with Next.js, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}

