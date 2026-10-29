"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, BadgeCheck, Calendar, ChevronRight } from "lucide-react";
import { certifications, experience } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/AnimationWrappers";

const badgeColors: Record<string, { color: string; bg: string; border: string }> = {
  azure:       { color: "#06b6d4", bg: "rgb(6 182 212 / 0.12)",   border: "rgb(6 182 212 / 0.3)" },
  aws:         { color: "#f59e0b", bg: "rgb(245 158 11 / 0.12)",  border: "rgb(245 158 11 / 0.3)" },
  deeplearning:{ color: "#8b5cf6", bg: "rgb(139 92 246 / 0.12)",  border: "rgb(139 92 246 / 0.3)" },
  udemy:       { color: "#ec4899", bg: "rgb(236 72 153 / 0.12)",  border: "rgb(236 72 153 / 0.3)" },
};

export function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-violet-400 border border-violet-500/30 bg-violet-500/10 mb-4">
              Background
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Experience &amp; <span className="text-gradient-hero">Credentials</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT — Timeline */}
          <div>
            <FadeIn direction="left">
              <p className="text-xs font-bold uppercase tracking-widest text-white/25 mb-6">Timeline</p>
            </FadeIn>

            <div style={{ perspective: "800px" }}>
              {experience.map((item, i) => (
                <FadeIn key={i} direction="left" delay={i * 0.1}>
                  <motion.div
                    whileHover={{
                      rotateY: 2,
                      boxShadow: "0 16px 50px rgb(139 92 246 / 0.18), 0 0 0 1px rgb(139 92 246 / 0.2)",
                      translateZ: 8,
                    }}
                    className="relative mb-5 p-6 rounded-2xl glass border border-white/8 overflow-hidden group"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Side accent */}
                    <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-gradient-to-b from-violet-500 to-transparent" />

                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-violet-500/15 border border-violet-500/25 mt-0.5">
                        {item.role.includes("Intern") ? (
                          <Briefcase className="w-4 h-4 text-violet-400" />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-cyan-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-black text-white text-sm leading-tight">{item.role}</h3>
                        <p className="text-violet-400 text-xs font-semibold mt-0.5">{item.company}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Calendar className="w-3 h-3 text-white/25" />
                          <span className="text-xs text-white/30">{item.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-white/45 leading-relaxed mb-4 ml-12">{item.description}</p>

                    <div className="flex flex-wrap gap-1.5 ml-12">
                      {item.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/4 text-white/45 border border-white/6">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* RIGHT — Certifications */}
          <div>
            <FadeIn direction="right">
              <p className="text-xs font-bold uppercase tracking-widest text-white/25 mb-6">Certifications</p>
            </FadeIn>

            <div style={{ perspective: "800px" }} className="space-y-3">
              {certifications.map((cert, i) => {
                const theme = badgeColors[cert.badge] ?? badgeColors.udemy;
                return (
                  <FadeIn key={cert.name} direction="right" delay={i * 0.08}>
                    <motion.div
                      whileHover={{
                        x: 6,
                        rotateY: -2,
                        boxShadow: `0 12px 40px ${theme.color}22, 0 0 0 1px ${theme.border}`,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      className="flex items-center gap-4 p-4 rounded-2xl glass border border-white/8 group"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Badge circle */}
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-black text-base"
                        style={{ color: theme.color, background: theme.bg, border: `1px solid ${theme.border}` }}
                      >
                        {cert.code ? cert.code.split("-")[0] : cert.issuer.slice(0, 2).toUpperCase()}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-sm text-white/90 group-hover:text-white transition-colors truncate">
                          {cert.name}
                        </div>
                        <div className="text-xs text-white/35 mt-0.5">
                          {cert.issuer}
                          {cert.code && (
                            <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold"
                              style={{ color: theme.color, background: theme.bg }}>
                              {cert.code}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-white/25">{cert.year}</span>
                        <BadgeCheck className="w-4 h-4" style={{ color: theme.color }} />
                      </div>
                    </motion.div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
