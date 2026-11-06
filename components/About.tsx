"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  Code2,
  Brain,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  School,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

export function About() {
  const highlights = [
    {
      title: "Integrated MSc Data Science",
      desc: "5-year rigorous curriculum bridging mathematics, computer science & applied AI at CIT.",
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: "Python & SQL Core",
      desc: "Writing modular scripts, pandas transformations, and database queries for data pipelines.",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: "Machine Learning & Isolation Forest",
      desc: "Supervised models, anomaly detection, regression, and model evaluation techniques.",
      icon: <Brain className="w-5 h-5 text-purple-400" />,
    },
    {
      title: "Natural Language Processing",
      desc: "Sentence Transformers, TF-IDF, Cosine Similarity, and multilingual code-mixed text analysis.",
      icon: <Sparkles className="w-5 h-5 text-pink-400" />,
    },
    {
      title: "Practical Big Data Analytics",
      desc: "Telemetry log processing using Apache Hadoop, HDFS, Pig, Hive, and MongoDB.",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: "HackSpora '25 Finalist",
      desc: "Distinction as National Finalist at the 24-hour hackathon by Dept. of AI & Data Science, KAHE.",
      icon: <Award className="w-5 h-5 text-amber-400" />,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About Me"
          title="Bridging Theoretical Foundations & Applied AI"
          subtitle="A snapshot of my academic journey, technical orientation, and commitment to building practical data-driven systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative & Education Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Biography Glass Card */}
            <GlassCard glow="primary" variant="standard" spotlight={true} className="p-7">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
                Background & Approach
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal mb-5">
                {SITE_CONFIG.aboutText}
              </p>
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Status: Available for Internships
                </span>
                <span className="font-mono text-cyan-400">Coimbatore, India</span>
              </div>
            </GlassCard>

            {/* Education Glass Card: CIT */}
            <GlassCard glow="accent" variant="standard" spotlight={true} className="p-7 space-y-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-brand-accent shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Coimbatore Institute of Technology
                    </h4>
                    <p className="text-xs text-slate-400">{SITE_CONFIG.education.degree}</p>
                  </div>
                </div>
                <Badge variant="outline">{SITE_CONFIG.education.period}</Badge>
              </div>

              {/* CGPA Display */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    Cumulative Grade Point Average
                  </div>
                  <div className="text-2xl font-black text-white mt-0.5">
                    {SITE_CONFIG.education.cgpa}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-emerald-300 bg-emerald-500/15 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    Strong Academic Standing
                  </span>
                </div>
              </div>

              {/* Schooling card */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="flex items-center justify-between mb-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-200 font-semibold">
                    <School className="w-4 h-4 text-indigo-400" />
                    <span>{SITE_CONFIG.education.school.name}</span>
                  </div>
                  <span className="text-slate-400 font-mono">{SITE_CONFIG.education.school.year}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] text-slate-400">Class 12 (Higher Sec)</div>
                    <div className="text-base font-bold text-white mt-0.5">
                      {SITE_CONFIG.education.school.class12}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] text-slate-400">Class 10 (Secondary)</div>
                    <div className="text-base font-bold text-white mt-0.5">
                      {SITE_CONFIG.education.school.class10}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: 6 Core Highlight Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard
                  glow="subtle"
                  variant="standard"
                  spotlight={true}
                  className="h-full p-5 hover:border-brand-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
