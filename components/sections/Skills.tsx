"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrappers";

const categoryColors: Record<string, { color: string; glow: string; bg: string }> = {
  "Frontend":       { color: "#06b6d4", glow: "rgb(6 182 212 / 0.35)",   bg: "rgb(6 182 212 / 0.08)" },
  "Backend":        { color: "#8b5cf6", glow: "rgb(139 92 246 / 0.35)",  bg: "rgb(139 92 246 / 0.08)" },
  "Databases":      { color: "#ec4899", glow: "rgb(236 72 153 / 0.35)",  bg: "rgb(236 72 153 / 0.08)" },
  "AI / ML":        { color: "#f59e0b", glow: "rgb(245 158 11 / 0.35)",  bg: "rgb(245 158 11 / 0.08)" },
  "DevOps & Cloud": { color: "#10b981", glow: "rgb(16 185 129 / 0.35)",  bg: "rgb(16 185 129 / 0.08)" },
  "Tools":          { color: "#a3e635", glow: "rgb(163 230 53 / 0.35)",  bg: "rgb(163 230 53 / 0.08)" },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 mb-4">
              Technical Stack
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Skills &amp; <span className="text-gradient-hero">Technologies</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              A curated stack built through production projects, internships, and published research.
            </p>
          </div>
        </FadeIn>

        <div style={{ perspective: "1000px" }}>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {skillCategories.map((cat, ci) => {
              const theme = categoryColors[cat.category] ?? { color: "#8b5cf6", glow: "rgb(139 92 246 / 0.35)", bg: "rgb(139 92 246 / 0.08)" };
              return (
                <StaggerItem key={cat.category}>
                  <motion.div
                    whileHover={{
                      rotateY: 3,
                      rotateX: -2,
                      translateZ: 20,
                      boxShadow: `0 20px 60px ${theme.glow}, 0 0 0 1px ${theme.color}33`,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="group relative p-6 rounded-2xl glass border border-white/8 cursor-default overflow-hidden"
                  >
                    {/* Glow sweep on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                      style={{ background: `radial-gradient(circle at 30% 30%, ${theme.bg}, transparent 70%)` }}
                    />

                    {/* Header */}
                    <div className="relative flex items-center gap-3 mb-5">
                      <div
                        className="w-2 h-8 rounded-full"
                        style={{ background: `linear-gradient(to bottom, ${theme.color}, transparent)` }}
                      />
                      <div>
                        <h3 className="font-black text-sm text-white">{cat.category}</h3>
                        <p className="text-xs text-white/30">{cat.skills.length} techs</p>
                      </div>
                    </div>

                    {/* Skill pills */}
                    <div className="relative flex flex-wrap gap-2">
                      {cat.skills.map((skill, si) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: ci * 0.05 + si * 0.03 }}
                          whileHover={{ scale: 1.08, color: theme.color }}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium text-white/60 transition-colors"
                          style={{ background: `${theme.color}12`, border: `1px solid ${theme.color}22` }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
