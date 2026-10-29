"use client";

import { motion } from "framer-motion";
import { Code2, BookOpen, Award, Layers, Download, ArrowRight, ChevronRight } from "lucide-react";
import { about, siteConfig } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrappers";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Code2, BookOpen, Award, Layers,
};

const whatIBuild = [
  { title: "Production Backends", desc: "Spring Boot, Django, FastAPI — auth, queues, CI/CD", color: "#8b5cf6", glow: "rgb(139 92 246 / 0.3)" },
  { title: "Full-Stack Web Apps", desc: "React + Next.js frontends connected to scalable APIs", color: "#06b6d4", glow: "rgb(6 182 212 / 0.3)" },
  { title: "AI-Powered Systems", desc: "LLM integrations, semantic search, on-device ML inference", color: "#ec4899", glow: "rgb(236 72 153 / 0.3)" },
  { title: "Mobile Applications", desc: "Flutter cross-platform apps with offline-first AI capabilities", color: "#a3e635", glow: "rgb(163 230 53 / 0.3)" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Section glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Heading */}
        <FadeIn>
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-violet-400 border border-violet-500/30 bg-violet-500/10 mb-4"
            >
              About Me
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Who I <span className="text-gradient-hero">Am</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT — bio */}
          <FadeIn direction="left">
            <div className="space-y-1 mb-8">
              <h3 className="text-2xl font-black text-white">{about.greeting}</h3>
              <p className="text-cyan-400 font-semibold text-lg">{about.headline}</p>
            </div>

            <div className="space-y-4 mb-8">
              {about.bio.map((para, i) => (
                <p key={i} className="text-white/55 leading-relaxed text-[15px]">{para}</p>
              ))}
            </div>

            {/* Availability pill */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgb(139 92 246 / 0.25)" }}
              className="p-4 rounded-2xl border border-violet-500/25 bg-violet-500/8 mb-8"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-green-400 shrink-0 animate-pulse" />
                <p className="text-sm text-violet-300 font-medium leading-relaxed">{about.currentFocus}</p>
              </div>
            </motion.div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href={siteConfig.resumeUrl}
                download="Vamsidhar-Reddy-Resume.pdf"
                whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgb(139 92 246 / 0.55)" }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgb(6 182 212 / 0.35)" }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/30 bg-cyan-500/8 text-cyan-300 font-bold transition-colors"
              >
                See My Work <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </FadeIn>

          {/* RIGHT — 3D highlights + what I build */}
          <div>
            {/* Perspective highlight tiles */}
            <FadeIn direction="right">
              <div style={{ perspective: "800px" }} className="mb-10">
                <motion.div
                  initial={{ rotateX: 15, opacity: 0 }}
                  whileInView={{ rotateX: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="grid grid-cols-2 gap-3"
                >
                  {about.highlights.map((item, i) => {
                    const Icon = iconMap[item.icon] || Code2;
                    const colors = ["#8b5cf6", "#06b6d4", "#ec4899", "#a3e635"];
                    const col = colors[i % colors.length];
                    return (
                      <motion.div
                        key={item.label}
                        whileHover={{
                          scale: 1.06,
                          rotateY: 4,
                          boxShadow: `0 0 28px ${col}55`,
                          translateZ: 16,
                        }}
                        className="p-5 rounded-2xl glass-strong border border-white/8 text-center cursor-default"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                          style={{ background: `${col}22`, border: `1px solid ${col}44` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: col }} />
                        </div>
                        <div className="font-black text-white text-sm">{item.label}</div>
                        <div className="text-xs text-white/40 mt-0.5">{item.sub}</div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </FadeIn>

            {/* What I build */}
            <FadeIn direction="right" delay={0.15}>
              <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">What I Build</p>
              <div className="space-y-2">
                {whatIBuild.map(item => (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      x: 6,
                      boxShadow: `0 0 20px ${item.glow}`,
                      borderColor: `${item.color}55`,
                    }}
                    className="flex items-center gap-3 p-3.5 rounded-xl glass border border-white/6 transition-colors group"
                  >
                    <div
                      className="w-2 h-8 rounded-full shrink-0"
                      style={{ background: `linear-gradient(to bottom, ${item.color}, transparent)` }}
                    />
                    <div>
                      <div className="font-semibold text-sm text-white/90 group-hover:text-white transition-colors">{item.title}</div>
                      <div className="text-xs text-white/40">{item.desc}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 ml-auto group-hover:text-white/50 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
