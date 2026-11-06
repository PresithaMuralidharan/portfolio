"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, ExternalLink, ShieldCheck, Eye } from "lucide-react";
import { CERTIFICATIONS, Certification } from "@/lib/certifications-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CertificateModal } from "@/components/CertificateModal";

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Verified Credentials & Honors"
          title="Certifications & Hackathon Achievements"
          subtitle="Officially verified credentials in Data Science, Algorithmic Problem Solving, and National Hackathon distinction. Click any credential to view the authentic certificate."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                glow="primary"
                variant="standard"
                spotlight={true}
                className="h-full flex flex-col justify-between p-6 sm:p-7 hover:border-brand-primary/50 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/15 border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                      <Award className="w-6 h-6" />
                    </div>
                    <Badge variant="emerald" size="sm">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                      Verified
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-400 mb-3">{cert.issuer}</div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5 line-clamp-3">
                    {cert.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Competencies Assessed:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsVerified.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2.5 py-0.5 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">{cert.issuedDate}</span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:text-white transition-colors group-hover:translate-x-0.5 duration-200"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Certificate Inspection Modal */}
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}
