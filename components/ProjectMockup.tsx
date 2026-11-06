"use client";

import React from "react";
import {
  FileText,
  CheckCircle,
  AlertTriangle,
  Layers,
  Activity,
  Cpu,
  Database,
  BarChart2,
  Briefcase,
  TrendingDown,
  ShieldAlert,
  MapPin,
  Sparkles,
} from "lucide-react";

interface ProjectMockupProps {
  type: "nlp" | "screening" | "vision" | "threat" | "traffic" | "finance" | "portal";
  title: string;
}

export function ProjectMockup({ type, title }: ProjectMockupProps) {
  switch (type) {
    case "screening":
      return (
        <div className="w-full h-48 bg-[#090d1a] p-4 flex flex-col justify-between font-mono text-xs text-slate-300 select-none overflow-hidden border-b border-white/5 relative">
          <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10 text-slate-400">
            <span className="flex items-center gap-1.5 text-indigo-300 font-semibold">
              <FileText className="w-3.5 h-3.5" />
              NLP Screening Engine
            </span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Cosine: 0.948 Match
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Sentence Transformer:</span>
              <span className="text-cyan-400">all-MiniLM-L6-v2</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-2 rounded-full"
                style={{ width: "94.8%" }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
              <span>TF-IDF Score: 88.2%</span>
              <span className="text-emerald-400">✓ Skill Alignment Passed</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
            <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
              Python
            </span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
              Scikit-learn
            </span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
              NLP
            </span>
          </div>
        </div>
      );

    case "nlp":
      return (
        <div className="w-full h-48 bg-[#0a0c18] p-4 flex flex-col justify-between font-mono text-xs text-slate-300 select-none overflow-hidden border-b border-white/5 relative">
          <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10 text-slate-400">
            <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              MixSense • Code-Mixed Tamil-English
            </span>
            <span className="text-[10px] text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
              Hugging Face
            </span>
          </div>

          <div className="my-auto p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-1.5">
            <div className="text-[10px] text-slate-400 uppercase">Input Stream:</div>
            <div className="text-white font-sans text-xs italic">
              &quot;Intha model romba super ah predict pannuthu!&quot;
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[10px]">
              <span className="text-emerald-400 font-semibold">Sentiment: POSITIVE (97.4%)</span>
              <span className="text-cyan-400">Emotion: Joy</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>Tokenizer: Mixed-Script Subword</span>
            <span className="text-purple-400">PyTorch Core</span>
          </div>
        </div>
      );

    case "vision":
      return (
        <div className="w-full h-48 bg-[#081018] p-4 flex flex-col justify-between font-mono text-xs text-slate-300 select-none overflow-hidden border-b border-white/5 relative">
          <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10 text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              NetPulse Vision
            </span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
              72.41% Test Accuracy
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 my-auto text-center">
            <div className="p-1.5 rounded bg-emerald-500/15 border border-emerald-500/30">
              <div className="text-[9px] text-emerald-400">Good</div>
              <div className="text-xs font-bold text-white">AQI 0-50</div>
            </div>
            <div className="p-1.5 rounded bg-amber-500/15 border border-amber-500/30">
              <div className="text-[9px] text-amber-400">Moderate</div>
              <div className="text-xs font-bold text-white">51-100</div>
            </div>
            <div className="p-1.5 rounded bg-orange-500/15 border border-orange-500/30">
              <div className="text-[9px] text-orange-400">Unhealthy</div>
              <div className="text-xs font-bold text-white">101-200</div>
            </div>
            <div className="p-1.5 rounded bg-rose-500/15 border border-rose-500/30">
              <div className="text-[9px] text-rose-400">Severe</div>
              <div className="text-xs font-bold text-white">201+</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>OpenCV Haze & RGB Histogram Extraction</span>
            <span className="text-cyan-400">Random Forest + GBDT</span>
          </div>
        </div>
      );

    case "threat":
      return (
        <div className="w-full h-48 bg-[#12080e] p-4 flex flex-col justify-between font-mono text-xs text-slate-300 select-none overflow-hidden border-b border-white/5 relative">
          <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10 text-slate-400">
            <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
              <ShieldAlert className="w-3.5 h-3.5" />
              Cyber Threat Intelligence Platform
            </span>
            <span className="text-[10px] text-slate-400">Hadoop / HDFS</span>
          </div>

          <div className="my-auto space-y-1.5 bg-black/40 p-2.5 rounded border border-rose-500/20 text-[10px]">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-amber-400">&gt;&gt; Hive Query:</span>
              <span className="text-rose-400 font-bold">14 Anomalies Flagged</span>
            </div>
            <p className="text-slate-300 font-mono truncate">
              SELECT src_ip, count(*) FROM security_logs GROUP BY src_ip
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <span>HDFS Ingestion: OK</span>
              <span>•</span>
              <span>Pig Script: Executed</span>
              <span>•</span>
              <span className="text-emerald-400">MongoDB Synced</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>Distributed Security Telemetry</span>
            <span className="text-rose-400">Big Data ETL</span>
          </div>
        </div>
      );

    case "traffic":
      return (
        <div className="w-full h-48 bg-[#09111c] p-4 flex flex-col justify-between font-mono text-xs text-slate-300 select-none overflow-hidden border-b border-white/5 relative">
          <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10 text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Urban Mobility & Traffic Analytics
            </span>
            <span className="text-[10px] text-blue-400">Sqoop + HDFS</span>
          </div>

          <div className="my-auto space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Corridor Congestion Index:</span>
              <span className="text-amber-400 font-bold">High Density (82%)</span>
            </div>
            <div className="flex items-end gap-1.5 h-8 bg-white/[0.02] p-1 rounded border border-white/5">
              <span className="w-1/6 h-3 bg-cyan-500/40 rounded-sm" />
              <span className="w-1/6 h-5 bg-cyan-500/60 rounded-sm" />
              <span className="w-1/6 h-7 bg-amber-500/80 rounded-sm" />
              <span className="w-1/6 h-4 bg-cyan-500/50 rounded-sm" />
              <span className="w-1/6 h-6 bg-cyan-500/70 rounded-sm" />
              <span className="w-1/6 h-7 bg-rose-500/90 rounded-sm" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>PostgreSQL &lt;- Sqoop -&gt; HDFS Hive</span>
            <span className="text-cyan-400">Batch Analytics</span>
          </div>
        </div>
      );

    case "finance":
      return (
        <div className="w-full h-48 bg-[#0a1412] p-4 flex flex-col justify-between font-mono text-xs text-slate-300 select-none overflow-hidden border-b border-white/5 relative">
          <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10 text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <TrendingDown className="w-3.5 h-3.5" />
              Smart Expense Tracker
            </span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Flask / PostgreSQL
            </span>
          </div>

          <div className="my-auto grid grid-cols-2 gap-2">
            <div className="p-2 rounded bg-white/[0.03] border border-white/5">
              <div className="text-[10px] text-slate-400">Monthly Budget</div>
              <div className="text-sm font-bold text-white mt-0.5">$2,450.00</div>
              <div className="text-[9px] text-emerald-400">68% Utilized</div>
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/5">
              <div className="text-[10px] text-slate-400">Top Category</div>
              <div className="text-sm font-bold text-amber-300 mt-0.5">Education / Tech</div>
              <div className="text-[9px] text-slate-400">32 Transactions</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>Full-Stack MVC Architecture</span>
            <span className="text-emerald-400">PostgreSQL Schema</span>
          </div>
        </div>
      );

    case "portal":
      return (
        <div className="w-full h-48 bg-[#0e0e1a] p-4 flex flex-col justify-between font-mono text-xs text-slate-300 select-none overflow-hidden border-b border-white/5 relative">
          <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10 text-slate-400">
            <span className="flex items-center gap-1.5 text-indigo-300 font-semibold">
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              Smart Job & Career Portal
            </span>
            <span className="text-[10px] text-indigo-400">Role-Based Dual Portal</span>
          </div>

          <div className="my-auto space-y-2">
            <div className="flex items-center justify-between text-[11px] p-2 rounded bg-white/[0.03] border border-white/5">
              <div>
                <div className="text-white font-sans font-medium text-xs">
                  Data Science Intern Role
                </div>
                <div className="text-[10px] text-slate-400">12 Applicants • 3 Shortlisted</div>
              </div>
              <span className="text-xs font-bold text-emerald-400">92% Match</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-400">
              <span className="text-cyan-400">✓ Scikit-learn Match Engine</span>
              <span>•</span>
              <span>PostgreSQL Jobs DB</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>Recruiter & Candidate Modules</span>
            <span className="text-indigo-400">Flask REST</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

