"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, ChevronRight, BarChart2 } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrappers";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

/* ── 3D tilt hook (reused) ── */
function use3DTilt(strength = 10) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useSpring(0, { stiffness: 250, damping: 28 });
  const rawY = useSpring(0, { stiffness: 250, damping: 28 });
  const rotateX = useTransform(rawY, v => -v * strength);
  const rotateY = useTransform(rawX, v => v * strength);

  const onMouseMove = useCallback((e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    rawX.set((e.clientX - left - width / 2) / (width / 2));
    rawY.set((e.clientY - top - height / 2) / (height / 2));
  }, [rawX, rawY]);

  const onMouseLeave = useCallback(() => { rawX.set(0); rawY.set(0); }, [rawX, rawY]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);
    return () => { el.removeEventListener("mousemove", onMouseMove); el.removeEventListener("mouseleave", onMouseLeave); };
  }, [onMouseMove, onMouseLeave]);

  return { ref, rotateX, rotateY };
}

/* ── Featured card ── */
function FeaturedCard({ project }: { project: Project }) {
  const { ref, rotateX, rotateY } = use3DTilt(6);
  return (
    <div ref={ref} style={{ perspective: "1200px" }} className="mb-12">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-3xl overflow-hidden glass-strong border border-violet-500/20"
        whileHover={{ boxShadow: "0 30px 80px rgb(139 92 246 / 0.25), 0 0 0 1px rgb(139 92 246 / 0.2)" }}
      >
        {/* Gradient bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

        <div className="p-8 lg:p-10">
          <div className="flex flex-wrap items-start gap-4 mb-6">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-violet-500/20 text-violet-300 border border-violet-500/25">
                  <Star className="w-3 h-3" /> Featured Project
                </span>
              </div>
              <motion.h3
                style={{ transform: "translateZ(20px)" }}
                className="text-3xl font-black text-white mb-1"
              >
                {project.title}
              </motion.h3>
              <p className="text-cyan-400 font-medium">{project.tagline}</p>
            </div>
            <div className="flex gap-2">
              {project.links.github && (
                <motion.a
                  href={project.links.github} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 16px rgb(139 92 246 / 0.4)" }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl glass border border-white/10 text-white/60 hover:text-white"
                >
                  <GithubIcon className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>

          <p className="text-white/50 leading-relaxed mb-6 max-w-3xl">{project.description}</p>

          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {project.metrics.map(m => (
                <motion.div
                  key={m.label}
                  style={{ transform: "translateZ(10px)" }}
                  className="p-3 rounded-xl glass border border-violet-500/15 text-center"
                >
                  <div className="text-lg font-black text-gradient-hero">{m.value}</div>
                  <div className="text-xs text-white/35 mt-0.5">{m.label}</div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tags.map(t => (
              <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-white/50 border border-white/8">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Regular card ── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        rotateY: 2,
        boxShadow: "0 20px 50px rgb(0 0 0 / 0.4), 0 0 30px rgb(139 92 246 / 0.15)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative flex flex-col rounded-2xl glass border border-white/8 overflow-hidden cursor-default"
    >
      {/* Gradient top stripe */}
      <div className={`h-0.5 bg-gradient-to-r ${project.gradient}`} />

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-black text-white text-lg leading-tight mb-0.5">{project.title}</h3>
            <p className="text-xs text-cyan-400/80 font-medium line-clamp-1">{project.tagline}</p>
          </div>
          <div className="flex gap-1.5 shrink-0">
            {project.links.github && (
              <motion.a
                href={project.links.github} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="w-8 h-8 flex items-center justify-center rounded-lg glass border border-white/10 text-white/50 hover:text-white transition-colors"
                onClick={e => e.stopPropagation()}
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </motion.a>
            )}
            {project.links.live && (
              <motion.a
                href={project.links.live} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="w-8 h-8 flex items-center justify-center rounded-lg glass border border-white/10 text-white/50 hover:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-sm text-white/45 leading-relaxed mb-4 line-clamp-3 flex-1">{project.description}</p>

        {project.metrics && (
          <div className="grid grid-cols-2 gap-1.5 mb-4">
            {project.metrics.slice(0, 2).map(m => (
              <div key={m.label} className="p-2 rounded-lg bg-white/3 border border-white/5 text-center">
                <div className="text-sm font-black text-white/80">{m.value}</div>
                <div className="text-[10px] text-white/30">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map(t => (
            <span key={t} className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/4 text-white/45 border border-white/6">
              {t}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-[11px] text-white/30">+{project.tags.length - 4}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const ALL_CATEGORIES = ["All", "AI/ML", "Backend", "Frontend", "Mobile", "Infrastructure"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const featured = projects.find(p => p.featured)!;
  const rest = projects.filter(p => !p.featured);
  const filtered = filter === "All" ? rest : rest.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="relative py-28 bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-violet-400 border border-violet-500/30 bg-violet-500/10 mb-4">
              Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Featured <span className="text-gradient-hero">Projects</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Production-grade systems built end-to-end — from database schema to deployed frontend.
            </p>
          </div>
        </FadeIn>

        {/* Featured */}
        <FadeIn delay={0.1}>
          <FeaturedCard project={featured} />
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {ALL_CATEGORIES.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  filter === cat
                    ? "bg-violet-600 text-white shadow-[0_0_20px_rgb(139_92_246/0.4)]"
                    : "glass border border-white/10 text-white/50 hover:text-white"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div style={{ perspective: "1000px" }}>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, i) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} index={i} />
                </StaggerItem>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
