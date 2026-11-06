"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Copy,
  CheckCircle,
  FileText,
  Phone,
  Mail,
  Linkedin,
  Github,
  MapPin,
  GraduationCap,
  Award,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (e) {
      // Decorative
    }

    const link = document.createElement("a");
    link.href = SITE_CONFIG.socials.resumeUrl;
    link.download = "Presitha_M_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopySummary = () => {
    const summary = `PRESITHA M
Phone: ${SITE_CONFIG.phone} | Email: ${SITE_CONFIG.socials.email}
LinkedIn: ${SITE_CONFIG.socials.linkedin}
GitHub: ${SITE_CONFIG.socials.github}

ABOUT ME:
${SITE_CONFIG.aboutText}

EDUCATION:
• Coimbatore Institute of Technology (2024 – 2029)
  M.Sc. Data Science (Integrated) | CGPA: 7.6 / 10
• SBOA Matric Hr. Sec. School (2024)
  Class 12: 88% | Class 10: 94%

FEATURED PROJECTS:
1. NetPulse: Large-Scale Internet Outage Detection & Early Warning System
   Tech: HDFS | Apache Pig | Apache Hive | Python | Scikit-learn | MongoDB
   • Analyzed 100K+ network telemetry records to spot internet outages & disruptions.
   • Utilized Isolation Forest to flag anomalies in latency, packet loss, throughput & DNS.
2. Resume Screening AI
   Tech: Python | NLP | Scikit-learn | Streamlit
   • Automated matching using TF-IDF, cosine similarity & Sentence Transformer embeddings.
3. MixSense: Multilingual Code-Mixed Text Analysis
   Tech: Python | PyTorch | Hugging Face | Streamlit | PostgreSQL
   • Multilingual models for Tamil-English, Hindi-English, and Malayalam-English sentiment & intent.

CERTIFICATIONS & ACHIEVEMENTS:
• HP LIFE – Data Science & Analytics (Serial: 8e916494-3b58-43ff-ad04-4f91c7d84b56)
• HackerRank – Problem Solving (Basic) (ID: 3EB74ECBE781)
• National Level 24-Hour Hackathon – HackSpora '25: Finalist (Karpagam Academy of Higher Education)`;

    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Frosted Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Elevated Heavy Frosted Glass Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel-elevated rounded-3xl shadow-2xl z-10 custom-scrollbar border border-white/20 glass-specular-top"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0a0f1d]/90 backdrop-blur-2xl border-b border-white/10">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-primary" />
              <span className="font-bold text-white text-sm sm:text-base">
                Curriculum Vitae — {SITE_CONFIG.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="glass"
                size="sm"
                onClick={handleCopySummary}
                icon={
                  copiedSummary ? (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )
                }
              >
                {copiedSummary ? "Copied Plain Text" : "Copy for ATS"}
              </Button>

              <Button
                variant="primary"
                size="sm"
                onClick={handleDownload}
                icon={<Download className="w-3.5 h-3.5" />}
              >
                Download PDF
              </Button>

              <button
                onClick={onClose}
                aria-label="Close"
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Formatted Resume Body */}
          <div className="p-6 sm:p-10 text-slate-200 font-sans space-y-8 bg-white/[0.02]">
            {/* Header info matching Presitha's actual resume */}
            <div className="border-b border-white/10 pb-6 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                    PRESITHA M
                  </h1>
                  <p className="text-sm font-medium text-cyan-400 mt-1">
                    Integrated MSc Data Science Student • AI & Machine Learning Enthusiast
                  </p>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-300 space-y-1 font-mono">
                  <div className="flex items-center gap-1.5 sm:justify-end">
                    <Phone className="w-3.5 h-3.5 text-brand-primary" />
                    <span>{SITE_CONFIG.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:justify-end">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <a
                      href={`mailto:${SITE_CONFIG.socials.email}`}
                      className="hover:text-white transition-colors"
                    >
                      {SITE_CONFIG.socials.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={SITE_CONFIG.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-white flex items-center gap-1"
                    >
                      <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                    </a>
                    <span>•</span>
                    <a
                      href={SITE_CONFIG.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-white flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* About Me */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-white/10 pb-1">
                About Me
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {SITE_CONFIG.aboutText}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-white/10 pb-1">
                Education
              </h3>

              <div className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="font-bold text-white text-base">
                    Coimbatore Institute of Technology
                  </div>
                  <span className="text-xs text-slate-400 font-mono">2024 – 2029</span>
                </div>
                <div className="text-xs text-cyan-300">
                  M.Sc. Data Science (Integrated) | CGPA:{" "}
                  <strong className="text-white">7.6 / 10</strong>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="font-bold text-white text-base">
                    SBOA Matric Hr. Sec. School
                  </div>
                  <span className="text-xs text-slate-400 font-mono">2024</span>
                </div>
                <div className="text-xs text-slate-300 flex items-center gap-3">
                  <span>
                    Class 12: <strong className="text-white">88%</strong>
                  </span>
                  <span>•</span>
                  <span>
                    Class 10: <strong className="text-white">94%</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Projects directly aligned with Presitha's Resume */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-white/10 pb-1">
                Featured Projects
              </h3>

              <div className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-bold text-white text-base">
                    NetPulse: Large-Scale Internet Outage Detection & Early Warning System
                  </h4>
                  <span className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    HDFS | Apache Pig | Apache Hive | Python | Scikit-learn | MongoDB
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    Built a big data system that analyzes <strong>100K+ network telemetry records</strong> to spot internet outages, unusual network behavior, and how disruptions spread.
                  </li>
                  <li>
                    Processed data with <strong>HDFS, Apache Pig, and Hive</strong>, and utilized <strong>Isolation Forest</strong> to flag anomalies in latency, packet loss, throughput, and DNS metrics.
                  </li>
                  <li>
                    Added network health scoring, outage severity assessment, spatial-temporal spread analysis, and early warnings, with MongoDB storing and serving results.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-bold text-white text-base">Resume Screening AI</h4>
                  <span className="text-[11px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    Python | NLP | Scikit-learn | Streamlit
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    Built an NLP tool that compares resumes with job descriptions and surfaces the best-matching candidates.
                  </li>
                  <li>
                    Used NLP to pull skills, education, experience, projects, and certifications out of unstructured resumes.
                  </li>
                  <li>
                    Ranked matches using <strong>TF-IDF, cosine similarity</strong>, and <strong>Sentence Transformer embeddings</strong>; an interactive Streamlit application shows ranked candidates along with matching and missing skill gap analysis.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-bold text-white text-base">
                    MixSense: Multilingual Code-Mixed Text Analysis
                  </h4>
                  <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                    Python | PyTorch | Hugging Face | Streamlit | PostgreSQL
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    Built an NLP system that analyzes <strong>Tamil-English, Hindi-English, and Malayalam-English</strong> conversations, including Romanized text.
                  </li>
                  <li>
                    Implemented multilingual models for language identification, code-switching detection, and sentiment, emotion, and intent classification.
                  </li>
                  <li>
                    Handled slang, emoji, sarcasm, and conversational context with interactive dashboards exploring language patterns.
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills & Area of Interest */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Technical Skills
                </h4>
                <div className="text-xs text-slate-300 space-y-1 leading-relaxed">
                  <div>
                    <strong className="text-white">Languages:</strong> Python, SQL (Basics), JavaScript, Java, HTML, CSS
                  </div>
                  <div>
                    <strong className="text-white">Technologies:</strong> Pandas, NumPy, Scikit-learn, Matplotlib, Power BI, OpenCV, Streamlit, Flask
                  </div>
                  <div>
                    <strong className="text-white">Soft Skills:</strong> Teamwork, Analytical Problem Solving
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Areas of Interest
                </h4>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {SITE_CONFIG.areasOfInterest.map((interest) => (
                    <span
                      key={interest}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.05] text-slate-200 border border-white/10"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Co-Curricular Activities */}
            <div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Co-Curricular Activities
              </h4>
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">
                  Media Team Member – Nature&apos;s Club, Coimbatore Institute of Technology
                </strong>
                <p className="mt-1">
                  Helped create and manage content for club events and prepared promotional
                  materials. Documented the club&apos;s environmental initiatives through photography
                  and social media to raise awareness about conservation and sustainability.
                </p>
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Certifications & Achievements
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                <li>
                  <strong className="text-white">HP LIFE – Data Science & Analytics:</strong>{" "}
                  Completed coursework on data science and analytics practices, tools, and using data to solve business problems (Serial: 8e916494-3b58-43ff-ad04-4f91c7d84b56).
                </li>
                <li>
                  <strong className="text-white">HackerRank – Problem Solving (Basic):</strong>{" "}
                  Certified in core problem-solving, logical thinking, and basic algorithmic reasoning (ID: 3EB74ECBE781).
                </li>
                <li>
                  <strong className="text-white">
                    National Level 24-Hour Hackathon – HackSpora &apos;25:
                  </strong>{" "}
                  Finalist at the national 24-hour hackathon hosted by the Department of AI & Data Science, Karpagam Academy of Higher Education.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
