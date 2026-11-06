"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Brain,
  BarChart3,
  Wrench,
  Database,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/skills-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

export function Skills() {
  const [filterLevel, setFilterLevel] = useState<string>("All");

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "programming-languages":
        return <Code className="w-5 h-5 text-indigo-400" />;
      case "python-libraries":
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case "ai-machine-learning":
        return <Brain className="w-5 h-5 text-purple-400" />;
      case "data-science-viz":
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      case "development-tools":
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case "big-data-tech":
        return <Database className="w-5 h-5 text-blue-400" />;
      case "ai-technologies":
        return <Sparkles className="w-5 h-5 text-pink-400" />;
      default:
        return <Code className="w-5 h-5 text-brand-primary" />;
    }
  };

  const getLevelBadgeVariant = (level: string) => {
    switch (level) {
      case "Core & Proficient":
        return "primary";
      case "Hands-on Applied":
        return "accent";
      case "Familiar & Exploring":
        return "secondary";
      default:
        return "outline";
    }
  };

  const filteredCategories =
    filterLevel === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.level === filterLevel);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technical Skills"
          title="Curated Technical Competencies"
          subtitle="Grouped honestly by practical familiarity and project application rather than arbitrary percentage bars."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {["All", "Core & Proficient", "Hands-on Applied", "Familiar & Exploring"].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setFilterLevel(lvl)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                filterLevel === lvl
                  ? "bg-brand-primary/20 text-white border-brand-primary shadow-glow-sm"
                  : "bg-white/[0.03] text-slate-400 border-white/10 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {lvl === "All" ? "All Skill Domains" : lvl}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <GlassCard
                glow="subtle"
                className="h-full flex flex-col justify-between hover:border-white/20 transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                        {getCategoryIcon(category.id)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white leading-tight">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">{category.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <Badge variant={getLevelBadgeVariant(category.level)} size="sm">
                      {category.level}
                    </Badge>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.03] border border-white/[0.08] text-slate-200 hover:border-brand-primary/40 hover:bg-white/[0.06] transition-colors"
                      >
                        {skill.name}
                        {skill.tag && (
                          <span className="text-[10px] text-cyan-400 font-sans opacity-80">
                            • {skill.tag}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    Applied in real projects
                  </span>
                  <span>{category.skills.length} competencies</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

