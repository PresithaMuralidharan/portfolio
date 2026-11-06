"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Brain,
  Sparkles,
  Activity,
  Terminal,
  Zap,
} from "lucide-react";

export function HeroWorkspace() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none select-none">
      {/* Ambient background glow behind visual for frosted refraction */}
      <div className="absolute -inset-6 bg-gradient-to-r from-brand-primary/30 via-brand-secondary/25 to-brand-accent/25 rounded-3xl blur-3xl opacity-60 -z-10 animate-pulse-slow" />
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-500/20 rounded-full blur-2xl -z-10" />

      {/* Main Glassmorphism IDE / Workspace Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-2xl glass-panel-elevated shadow-glass overflow-hidden relative glass-specular-top"
      >
        {/* Terminal / Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/[0.12] backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
            <span className="text-xs font-mono text-slate-300 ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-brand-accent" />
              presitha_workspace.py — Python 3.11
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Kernel: Active
          </div>
        </div>

        {/* Workspace Code & Graph View */}
        <div className="p-5 font-mono text-xs text-slate-300 space-y-4">
          {/* Syntax highlighted Python code snippet inside frosted acrylic card */}
          <div className="space-y-1.5 leading-relaxed bg-[#060a14]/60 backdrop-blur-xl p-4 rounded-xl border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-white/[0.08] mb-2">
              <span className="flex items-center gap-1 text-indigo-300 font-semibold">
                <Code2 className="w-3.5 h-3.5" />
                resume_matcher.py
              </span>
              <span className="text-[10px] text-cyan-300 font-mono">transformer_pipeline v2.4</span>
            </div>

            <p className="text-purple-300">
              <span className="text-indigo-400 font-bold">from</span> sentence_transformers{" "}
              <span className="text-indigo-400 font-bold">import</span> SentenceTransformer
            </p>
            <p className="text-purple-300">
              <span className="text-indigo-400 font-bold">from</span> sklearn.metrics.pairwise{" "}
              <span className="text-indigo-400 font-bold">import</span> cosine_similarity
            </p>
            <p className="text-slate-400 italic"># Load dense semantic embedding model</p>
            <p>
              <span className="text-cyan-300 font-bold">encoder</span> = SentenceTransformer(
              <span className="text-amber-300">&apos;all-MiniLM-L6-v2&apos;</span>)
            </p>
            <p>
              <span className="text-cyan-300 font-bold">embeddings</span> = encoder.encode(
              <span className="text-slate-200">parsed_resumes</span>, convert_to_tensor=
              <span className="text-rose-400">True</span>)
            </p>
            <p className="text-emerald-300">
              <span className="text-indigo-400 font-bold">match_score</span> = cosine_similarity(
              <span className="text-cyan-300">embeddings</span>, jd_vec).max()
            </p>
            <div className="pt-1.5 flex items-center gap-2 text-emerald-400 text-[11px] font-semibold">
              <Zap className="w-3.5 h-3.5" />
              <span>&gt;&gt; Best candidate match confidence: 94.8%</span>
            </div>
          </div>

          {/* Interactive ML Telemetry & Attention Graph in Frosted Glass Tiles */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
              <div className="text-[10px] text-slate-300 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Model Loss</span>
                <Activity className="w-3 h-3 text-brand-primary" />
              </div>
              <div className="text-base font-bold text-white">0.0312</div>
              <div className="text-[10px] text-emerald-400 mt-0.5">↓ 14.2% converged</div>
              {/* Mini Sparkline Bar Chart */}
              <div className="flex items-end gap-1 h-5 mt-2">
                <span className="w-1.5 h-5 bg-indigo-500/60 rounded-sm" />
                <span className="w-1.5 h-4 bg-indigo-500/70 rounded-sm" />
                <span className="w-1.5 h-3.5 bg-indigo-500/80 rounded-sm" />
                <span className="w-1.5 h-2.5 bg-indigo-500/90 rounded-sm" />
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-sm shadow-glow-cyan" />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
              <div className="text-[10px] text-slate-300 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>NetPulse Acc</span>
                <Cpu className="w-3 h-3 text-cyan-400" />
              </div>
              <div className="text-base font-bold text-white">72.41%</div>
              <div className="text-[10px] text-cyan-300 mt-0.5">4-class vision</div>
              {/* Progress visual */}
              <div className="w-full bg-white/10 rounded-full h-1.5 mt-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-brand-primary h-1.5 rounded-full"
                  style={{ width: "72.41%" }}
                />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
              <div className="text-[10px] text-slate-300 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Big Data HDFS</span>
                <Database className="w-3 h-3 text-purple-400" />
              </div>
              <div className="text-base font-bold text-white">Pig / Hive</div>
              <div className="text-[10px] text-purple-300 mt-0.5">Distributed ETL</div>
              <div className="text-[10px] text-slate-400 font-mono mt-2 truncate">
                MapReduce batch
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Workspace Bottom Status Bar */}
        <div className="px-5 py-3 bg-white/[0.03] border-t border-white/[0.1] backdrop-blur-xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-slate-200 font-medium">NLP & Computer Vision Pipeline</span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-300 font-mono">
            <span className="hover:text-cyan-300 transition-colors cursor-pointer">
              #Transformers
            </span>
            <span className="hover:text-purple-300 transition-colors cursor-pointer">#PyTorch</span>
            <span className="hover:text-indigo-300 transition-colors cursor-pointer">#OpenCV</span>
            <span className="hover:text-emerald-300 transition-colors cursor-pointer">#Hadoop</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Badge 1: Top-Right Heavy Glass Badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-4 sm:-right-6 p-3 rounded-2xl glass-panel-elevated shadow-glow-sm flex items-center gap-2.5 z-20 border border-white/20"
      >
        <div className="w-8 h-8 rounded-xl bg-brand-primary/25 border border-brand-primary/40 flex items-center justify-center text-brand-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
          <Brain className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-white">NLP & AI Specialist</div>
          <div className="text-[10px] text-slate-300 font-medium">Semantic Transformers</div>
        </div>
      </motion.div>

      {/* Floating Badge 2: Bottom-Left Heavy Glass Profile Card */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 -left-4 sm:-left-6 p-3.5 rounded-2xl glass-panel-elevated shadow-glow-cyan flex items-center gap-3 z-20 border border-white/20"
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary via-brand-secondary to-brand-accent flex items-center justify-center font-bold text-white text-sm shadow-md border border-white/25">
            PM
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#101625]" />
        </div>
        <div>
          <div className="text-xs font-bold text-white flex items-center gap-1.5">
            Presitha M.
            <span className="text-[10px] font-medium text-emerald-300 bg-emerald-500/15 px-2 py-0.2 rounded-full border border-emerald-500/30">
              CIT 2024–2029
            </span>
          </div>
          <div className="text-[11px] text-slate-300">Integrated MSc Data Science • CGPA 7.6</div>
        </div>
      </motion.div>
    </div>
  );
}
