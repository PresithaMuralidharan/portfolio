"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  ShieldCheck,
  Award,
  CheckCircle2,
  Calendar,
  Hash,
} from "lucide-react";
import { Certification } from "@/lib/certifications-data";
import { Button } from "@/components/ui/Button";

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export function CertificateModal({ cert, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (cert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto glass-panel-elevated rounded-3xl shadow-2xl z-10 custom-scrollbar border border-white/20 glass-specular-top"
        >
          {/* Top Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0a0f1d]/90 backdrop-blur-2xl border-b border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-white text-sm sm:text-base">
                Verified Credential Inspection
              </span>
            </div>

            <div className="flex items-center gap-2">
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="glass" size="sm" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                    Open Official Provider
                  </Button>
                </a>
              )}
              <button
                onClick={onClose}
                aria-label="Close"
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Visual Authentic Certificate Card */}
            {cert.type === "hp-life" && (
              <div className="relative rounded-2xl bg-white p-8 sm:p-12 text-[#1f2937] shadow-2xl border-8 border-[#f3f4f6] select-none font-sans overflow-hidden">
                {/* HP Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0096d6] flex items-center justify-center font-bold text-white text-lg italic shadow-md">
                      hp
                    </div>
                    <div className="text-xl font-bold tracking-tight text-slate-800">LIFE</div>
                  </div>
                  <div className="text-right text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    HP Foundation
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
                    Certificate of Completion
                  </h3>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold pt-1">
                    THIS CERTIFIES THAT
                  </p>
                  <div className="text-2xl sm:text-3xl font-bold text-[#0096d6] py-1 border-b-2 border-slate-200 max-w-md mx-auto">
                    {cert.recipientName}
                  </div>
                  <p className="text-sm text-slate-600">
                    has successfully completed the HP LIFE online course
                  </p>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">
                    {cert.title}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed pt-2">
                    By completing this course, the above-named student has learned about leading data
                    science and analytics practices, methodologies, and tools, examined the benefits
                    and challenges of a data-driven approach for businesses, and gained knowledge
                    about essential skills needed to pursue a career in the field.
                  </p>
                </div>

                {/* Footer Signatures & Serial */}
                <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-600">
                  <div>
                    <div className="text-slate-400">Presented</div>
                    <div className="font-semibold text-slate-800">{cert.issuedDate}</div>
                  </div>

                  <div className="text-center sm:text-right">
                    <div className="font-serif italic text-base text-slate-800 font-bold">
                      Stephanie Bormann
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Deputy Director, HP Foundation
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-mono text-center sm:text-left truncate">
                  Certificate serial number: {cert.serialNumber}
                </div>
              </div>
            )}

            {cert.type === "hackerrank" && (
              <div className="relative rounded-2xl bg-[#fafafa] p-8 sm:p-12 text-[#1f2937] shadow-2xl border-8 border-[#e5e7eb] select-none font-sans overflow-hidden">
                {/* HackerRank Header Badge */}
                <div className="flex flex-col items-center justify-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#111827] flex items-center justify-center shadow-lg border-2 border-white mb-4">
                    <span className="text-[#00EA64] font-black text-2xl font-mono">&lt;H&gt;</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-serif text-[#111827] font-normal tracking-tight text-center">
                    Certificate of Accomplishment
                  </h3>

                  <div className="mt-4 px-6 py-1.5 rounded-full bg-[#1e293b] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase">
                    Problem Solving (Basic)
                  </div>
                </div>

                <div className="text-center space-y-4 my-8">
                  <p className="text-[11px] tracking-widest text-slate-500 uppercase">
                    PRESENTED TO
                  </p>
                  <div className="text-2xl sm:text-4xl font-serif italic text-slate-900 border-b border-slate-300 pb-2 max-w-md mx-auto">
                    {cert.recipientName}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    The bearer of this certificate has passed the HackerRank skill certification test
                  </p>
                </div>

                {/* Footer with Harishankaran K signature & ID */}
                <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-600">
                  <div>
                    <div className="text-slate-400">Earned on:</div>
                    <div className="font-semibold text-slate-800">{cert.issuedDate}</div>
                    <div className="font-mono text-[11px] text-slate-500 mt-0.5">
                      ID: {cert.credentialId}
                    </div>
                  </div>

                  <div className="text-center sm:text-right">
                    <div className="font-serif italic text-base text-slate-800 font-bold">
                      Harishankaran K
                    </div>
                    <div className="text-[11px] text-slate-500">CTO, HackerRank</div>
                  </div>
                </div>
              </div>
            )}

            {cert.type === "hackspora" && (
              <div className="relative rounded-2xl bg-gradient-to-br from-[#0c1322] to-[#161f36] p-8 sm:p-12 text-white shadow-2xl border-4 border-indigo-500/30 select-none font-sans overflow-hidden">
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-indigo-300">
                        Karpagam Academy of Higher Education
                      </div>
                      <div className="text-xs text-slate-400">Department of AI & Data Science</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Finalist Distinction
                  </span>
                </div>

                <div className="text-center space-y-4 my-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    HackSpora &apos;25
                  </h3>
                  <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                    National Level 24-Hour Hackathon
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300 py-1">
                    {cert.recipientName}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                    Awarded for reaching the national finals in the rigorous 24-hour hackathon,
                    demonstrating innovative AI problem solving, algorithmic design, and rapid
                    end-to-end prototype delivery.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Distinction: National Finalist</span>
                  <span>Year: 2025</span>
                </div>
              </div>
            )}

            {/* Credential Details & Verification Info */}
            <div className="p-5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Official Verification & Credential Details
                </div>

                {cert.credentialId && (
                  <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-cyan-500/20">
                    ID: {cert.credentialId}
                  </span>
                )}
                {cert.serialNumber && (
                  <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-cyan-500/20">
                    Serial: {cert.serialNumber}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {cert.description}
              </p>

              <div className="pt-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Skills & Practices Assessed:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsVerified.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.05] text-slate-200 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="text-xs text-slate-400">
                Issued by: <strong className="text-white">{cert.issuer}</strong>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button
                    variant="primary"
                    size="md"
                    icon={<ExternalLink className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    Open Live Verification URL
                  </Button>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

