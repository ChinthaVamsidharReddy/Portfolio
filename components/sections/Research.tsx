"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, BarChart2, Quote } from "lucide-react";
import { publications } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/AnimationWrappers";

const publisherColors: Record<string, { color: string; bg: string; border: string }> = {
  "IEEE":                    { color: "#06b6d4", bg: "rgb(6 182 212 / 0.08)", border: "rgb(6 182 212 / 0.25)" },
  "CRC Press / Taylor & Francis": { color: "#8b5cf6", bg: "rgb(139 92 246 / 0.08)", border: "rgb(139 92 246 / 0.25)" },
};

export function Research() {
  return (
    <section id="research" className="relative py-28 bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 mb-4">
              Research
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Peer-Reviewed <span className="text-gradient-hero">Publications</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Published in IEEE Xplore and CRC Press / Taylor & Francis.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {publications.map((pub, idx) => {
            const theme = publisherColors[pub.publisher] ?? { color: "#8b5cf6", bg: "rgb(139 92 246 / 0.08)", border: "rgb(139 92 246 / 0.25)" };
            return (
              <FadeIn key={pub.doi} direction="up" delay={idx * 0.12}>
                <motion.div
                  whileHover={{
                    y: -4,
                    boxShadow: `0 24px 60px ${theme.color}22, 0 0 0 1px ${theme.border}`,
                  }}
                  style={{ perspective: "800px", transformStyle: "preserve-3d" }}
                  className="relative rounded-3xl glass-strong border border-white/8 overflow-hidden"
                >
                  {/* Publisher stripe */}
                  <div className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, ${theme.color}, transparent)` }} />

                  <div className="p-8">
                    {/* Publisher badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                        style={{ color: theme.color, background: theme.bg, border: `1px solid ${theme.border}` }}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        {pub.publisher}
                      </span>
                      <span className="text-xs text-white/30 font-medium">{pub.year}</span>
                    </div>

                    {/* Title */}
                    <motion.h3
                      style={{ transform: "translateZ(12px)" }}
                      className="text-xl sm:text-2xl font-black text-white mb-2 leading-snug"
                    >
                      {pub.title}
                    </motion.h3>

                    {/* Journal */}
                    <p className="text-sm font-medium mb-5" style={{ color: theme.color }}>
                      {pub.journal}
                    </p>

                    {/* Abstract */}
                    <div className="relative mb-6 pl-4">
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                        style={{ background: `linear-gradient(to bottom, ${theme.color}, transparent)` }} />
                      <p className="text-sm text-white/45 leading-relaxed">{pub.abstract}</p>
                    </div>

                    {/* Metrics */}
                    {pub.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                        {Object.entries(pub.metrics).map(([key, val]) => (
                          <motion.div
                            key={key}
                            whileHover={{ scale: 1.04 }}
                            className="p-3 rounded-xl text-center"
                            style={{ background: theme.bg, border: `1px solid ${theme.border}` }}
                          >
                            <div className="font-black text-base" style={{ color: theme.color }}>{val}</div>
                            <div className="text-[10px] text-white/35 mt-0.5 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Tags + link */}
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex flex-wrap gap-2 flex-1">
                        {pub.tags.map(t => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium text-white/50 border border-white/8 bg-white/4"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <motion.a
                        href={pub.link} target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: `0 0 18px ${theme.color}55` }}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-colors shrink-0"
                        style={{ color: theme.color, background: theme.bg, border: `1px solid ${theme.border}` }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Paper
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
