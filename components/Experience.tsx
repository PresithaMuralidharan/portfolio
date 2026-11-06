"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Camera,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  const experiences = [
    {
      role: "Academic Project Development & AI Exploration",
      organization: "Coimbatore Institute of Technology",
      period: "2024 – Present",
      type: "Academic & Hands-on R&D",
      description:
        "Actively developing end-to-end data science systems, machine learning models, and Big Data pipelines as part of the Integrated MSc curriculum and personal technical initiatives.",
      highlights: [
        "Developed practical applications using Python and machine learning pipelines",
        "Applied modern NLP techniques to text-processing, screening, and code-mixed dialogues",
        "Designed relational database schemas and developed full-stack web applications",
        "Explored data visualization, statistical storytelling, and analytical reporting",
        "Implemented distributed Big Data concepts using Hadoop, HDFS, Hive, and Pig",
      ],
      icon: <GraduationCap className="w-5 h-5 text-brand-primary" />,
      accent: "primary",
    },
    {
      role: "Media Team Member — Nature's Club",
      organization: "Coimbatore Institute of Technology",
      period: "2024 – Present",
      type: "Co-curricular Leadership",
      description:
        "Contributing to environmental awareness initiatives, digital storytelling, content creation, and creative event media coordination across campus campaigns.",
      highlights: [
        "Collaborated on creative media production, graphic assets, and social outreach",
        "Documented club environmental workshops, campus events, and tree-plantation drives",
        "Fostered cross-functional teamwork, event management, and collaborative communication",
      ],
      icon: <Camera className="w-5 h-5 text-brand-accent" />,
      accent: "accent",
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Experience & Involvement"
          title="Practical Development & Campus Leadership"
          subtitle="Honest representation of academic project development, student leadership, and extracurricular initiatives at CIT."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                glow="subtle"
                className="p-6 sm:p-8 hover:border-brand-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-cyan-400 font-medium mt-0.5">
                        {exp.organization}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <Badge variant="outline" size="sm">
                      <Calendar className="w-3 h-3 mr-1 text-slate-400" />
                      {exp.period}
                    </Badge>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Key Contributions & Practical Milestones
                  </div>
                  {exp.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

