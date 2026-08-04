"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrappers";
import { publications } from "@/data/portfolio";

const publisherStyles: Record<string, { bg: string; badge: string; border: string; btn: string }> = {
  IEEE: {
    bg: "from-indigo-600 via-violet-600 to-purple-700",
    badge: "bg-white/20 border-white/30 text-white",
    border: "border-indigo-200 dark:border-indigo-800/50",
    btn: "bg-indigo-600 hover:bg-indigo-700",
  },
  CRC: {
    bg: "from-emerald-600 via-teal-600 to-cyan-700",
    badge: "bg-white/20 border-white/30 text-white",
    border: "border-emerald-200 dark:border-emerald-800/50",
    btn: "bg-emerald-600 hover:bg-emerald-700",
  },
};

function PublicationCard({ pub, index }: { pub: typeof publications[0]; index: number }) {
  const [tab, setTab] = useState<"abstract" | "metrics" | "authors">("abstract");
  const style = publisherStyles[pub.publisherBadge] ?? publisherStyles.IEEE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Coloured header */}
      <div className={`bg-gradient-to-br ${style.bg} p-7 sm:p-8`}>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold tracking-wide ${style.badge}`}>
            {pub.publisherBadge === "IEEE" ? (
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.994 0C5.367 0 0 5.367 0 11.994S5.367 23.99 11.994 23.99 23.99 18.62 23.99 11.994 18.62 0 11.994 0zm0 2.4c5.29 0 9.594 4.303 9.594 9.594s-4.304 9.594-9.594 9.594-9.594-4.304-9.594-9.594S6.703 2.4 11.994 2.4zm-3.6 4.797v9.594h2.397V7.197H8.394zm4.795 0v9.594H15.6v-3.598h1.198v-2.398H15.6V7.197h-2.41z"/></svg>
            ) : (
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-1 3v2H9v2h2v4H9v2h6v-2h-2v-4h2V9h-2V7h-2z"/></svg>
            )}
            {pub.publisher}
          </span>
          <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${style.badge}`}>
            {pub.year} · Peer Reviewed
          </span>
          {pub.pages && (
            <span className={`px-3 py-1 rounded-full border text-xs font-medium ${style.badge} opacity-80`}>
              {pub.pages}
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-1">
          {pub.title}
        </h3>
        {pub.book && (
          <p className="text-white/70 text-sm mt-2 italic">
            In: <span className="text-white/90 not-italic font-medium">{pub.book}</span>
          </p>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-100 dark:border-gray-800 flex">
        {(["abstract", "metrics", "authors"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`relative px-5 py-3 text-sm font-semibold capitalize transition-colors ${tab === t ? "text-gray-900 dark:text-white" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}>
            {t}
            {tab === t && (
              <motion.div layoutId={`tab-${pub.id}`}
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${style.bg}`} />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-7 sm:p-8">
        <AnimatePresence mode="wait">
          {tab === "abstract" && (
            <motion.div key="abstract" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">{pub.abstract}</p>
              <div className="flex flex-wrap gap-2">
                {pub.keywords.map((kw) => (
                  <span key={kw} className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                    pub.publisherBadge === "IEEE"
                      ? "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300"
                      : "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300"
                  }`}>{kw}</span>
                ))}
              </div>
            </motion.div>
          )}
          {tab === "metrics" && (
            <motion.div key="metrics" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {pub.metrics.map((m) => (
                  <div key={m.label} className="bg-gray-50 dark:bg-gray-800/60 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{m.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          {tab === "authors" && (
            <motion.div key="authors" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Author List</h4>
              <div className="flex flex-wrap gap-2">
                {"authors" in pub && Array.isArray(pub.authors) ? pub.authors.map((author: string) => {
                  const isMe = author.includes("Vamsidhar");
                  return (
                    <span key={author}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${isMe
                        ? pub.publisherBadge === "IEEE"
                          ? "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 font-semibold"
                          : "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 font-semibold"
                        : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                      }`}>
                      {author}{isMe ? " ✦" : ""}
                    </span>
                  );
                }) : (
                  <span className="text-sm text-gray-500 dark:text-gray-400">C. Vamsidhar Reddy, et al.</span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
          <a href={pub.doi} target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors ${style.btn}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {pub.publisherBadge === "IEEE" ? "View on IEEE Xplore" : "View on Taylor & Francis"}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Research() {
  return (
    <Section id="research" label="Research & Publications" title="Published Research"
      subtitle="Two peer-reviewed publications across mobile AI and IoT sustainability — a rare distinction for a new graduate.">

      {/* Credibility banner */}
      <FadeIn className="mb-10">
        <div className="rounded-2xl border border-amber-200 dark:border-amber-800/50 bg-amber-50 dark:bg-amber-950/20 px-6 py-4 flex flex-wrap items-center gap-4">
          <span className="text-2xl">🏆</span>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white text-sm">2 peer-reviewed publications before graduation</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">IEEE Xplore (2025) · CRC Press / Taylor &amp; Francis (2026) — spanning mobile ML and IoT sustainability</div>
          </div>
          <div className="ml-auto flex gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">IEEE Xplore</span>
            <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">CRC Press</span>
          </div>
        </div>
      </FadeIn>

      {/* Publication cards */}
      <div className="grid lg:grid-cols-2 gap-8">
        {publications.map((pub, i) => (
          <PublicationCard key={pub.id} pub={pub} index={i} />
        ))}
      </div>

      {/* Research themes */}
      <FadeIn delay={0.2} className="mt-10">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Research themes</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🤖", label: "Edge AI", desc: "On-device inference with TensorFlow Lite — no cloud dependency" },
              { icon: "♻️", label: "IoT & Sustainability", desc: "Hardware-software systems aligned with UN Sustainable Development Goals" },
              { icon: "📱", label: "Mobile Engineering", desc: "Flutter applications bridging ML models and end users in low-connectivity environments" },
            ].map((t) => (
              <div key={t.label} className="flex gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60">
                <span className="text-xl shrink-0">{t.icon}</span>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{t.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
