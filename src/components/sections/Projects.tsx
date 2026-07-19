"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/ui/AnimationWrappers";
import { projects } from "@/data/portfolio";

function MetricBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center bg-white/10 dark:bg-white/5 rounded-xl px-3 py-2">
      <div className="text-lg font-bold text-white">{value}</div>
      <div className="text-xs text-white/60 mt-0.5">{label}</div>
    </div>
  );
}

function FeaturedProject() {
  const p = projects[0];
  const [tab, setTab] = useState<"problem" | "architecture" | "metrics">("problem");

  return (
    <ScaleIn className="mb-16">
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.gradient} p-px`}>
        <div className="relative rounded-[calc(1.5rem-1px)] bg-gray-950 overflow-hidden">
          {/* Top banner */}
          <div className={`bg-gradient-to-r ${p.gradient} p-8 sm:p-10`}>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/70 mb-2">
                  Flagship Project
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white">{p.title}</h3>
                <p className="text-white/80 mt-1 text-lg">{p.subtitle}</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-all"
                >
                  GitHub
                </a>
                {/* <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-white hover:bg-white/90 text-gray-900 transition-all"
                >
                  Live Demo →
                </a> */}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {p.metrics.map((m) => (
                <MetricBadge key={m.label} label={m.label} value={m.value} />
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-800 flex gap-0">
            {(["problem", "architecture", "metrics"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-3 text-sm font-semibold capitalize transition-colors relative ${
                  tab === t ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {t}
                {tab === t && (
                  <motion.div
                    layoutId="featured-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-500"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {tab === "problem" && (
                <motion.div
                  key="problem"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="space-y-4"
                >
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Problem</h4>
                    <p className="text-gray-300 leading-relaxed">{p.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Solution</h4>
                    <p className="text-gray-300 leading-relaxed">{p.solution}</p>
                  </div>
                </motion.div>
              )}
              {tab === "architecture" && (
                <motion.div
                  key="arch"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Architecture decisions</h4>
                  <div className="space-y-3">
                    {p.architecturePoints.map((point, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="w-5 h-5 rounded-full bg-violet-600/30 border border-violet-500/40 text-violet-400 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          {i + 1}
                        </span>
                        <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {tab === "metrics" && (
                <motion.div
                  key="metrics"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Tech stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium bg-violet-950/60 border border-violet-700/40 text-violet-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </ScaleIn>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
    >
      {/* Gradient top bar */}
      <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">{project.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{project.subtitle}</p>
          </div>
          <div className="flex gap-1.5">
            {project.category.map((c) => (
              <span key={c} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium">
                {c}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
          {project.solution}
        </p>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {project.metrics.slice(0, 3).map((m) => (
            <div key={m.label} className="text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-2">
              <div className="text-sm font-bold text-gray-900 dark:text-white">{m.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-medium">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-xl text-sm font-semibold border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
          >
            GitHub
          </a>
          {/* <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center py-2 rounded-xl text-sm font-semibold bg-gradient-to-r ${project.gradient} text-white transition-opacity hover:opacity-90`}
          >
            Live Demo →
          </a> */}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Backend", "Frontend", "AI/ML", "Infrastructure"];
  const filtered = filter === "All"
    ? projects.slice(1)
    : projects.slice(1).filter((p) => p.category.includes(filter));

  return (
    <Section
      id="projects"
      label="Portfolio"
      title="What I've Built"
      subtitle="Production systems, not tutorial projects."
      className="bg-gray-50 dark:bg-gray-900/40"
    >
      <FeaturedProject />

      {/* Filter */}
      <FadeIn className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              filter === c
                ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                : "border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600"
            }`}
          >
            {c}
          </button>
        ))}
      </FadeIn>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </AnimatePresence>
      </StaggerContainer>
    </Section>
  );
}
