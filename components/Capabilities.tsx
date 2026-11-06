"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Brain,
  MessageSquare,
  BarChart,
  Database,
  Server,
  ArrowUpRight,
} from "lucide-react";
import { CAPABILITIES } from "@/lib/capabilities-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

export function Capabilities() {
  const getIcon = (type: string) => {
    switch (type) {
      case "python":
        return <Code className="w-5 h-5 text-cyan-400" />;
      case "brain":
        return <Brain className="w-5 h-5 text-indigo-400" />;
      case "message":
        return <MessageSquare className="w-5 h-5 text-purple-400" />;
      case "chart":
        return <BarChart className="w-5 h-5 text-emerald-400" />;
      case "database":
        return <Database className="w-5 h-5 text-amber-400" />;
      case "server":
        return <Server className="w-5 h-5 text-blue-400" />;
      default:
        return <Code className="w-5 h-5 text-brand-primary" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Core Competencies"
          title="Technical Capabilities & Engineering Focus"
          subtitle="Areas of hands-on project exploration where I apply modern software engineering and data science principles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard
                glow="subtle"
                className="h-full flex flex-col justify-between group hover:border-brand-primary/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 transition-colors">
                      {getIcon(cap.icon)}
                    </div>
                    <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-5">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Key Practical Focus
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

