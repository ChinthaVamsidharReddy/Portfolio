"use client";

import { motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { Mail, ArrowDown, Download, Sparkles } from "lucide-react";
import { siteConfig, heroStats, about } from "@/data/portfolio";

/* ── inline SVGs ── */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ── Particles ── */
interface Particle { id: number; x: number; y: number; size: number; duration: number; delay: number; color: string }
const COLORS = ["rgb(139,92,246)", "rgb(6,182,212)", "rgb(236,72,153)", "rgb(167,139,250)"];

function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    setParticles(Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    })));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: p.color, opacity: 0.4 }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.7, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ── Rotating roles ── */
const roles = ["Full-Stack Engineer", "AI / ML Engineer", "Backend Architect", "Published Researcher", "Flutter Developer"];

/* ── 3D tilt hook ── */
function use3DTilt(strength = 15) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useSpring(0, { stiffness: 200, damping: 30 });
  const rawY = useSpring(0, { stiffness: 200, damping: 30 });

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

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { ref, rotateX, rotateY } = use3DTilt(8);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030712]">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Deep glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-[300px] h-[300px] rounded-full bg-pink-500/6 blur-[80px] pointer-events-none" />

      <ParticleField />

      {/* 3D tilt container */}
      <div
        ref={ref}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center"
        style={{ perspective: "1200px" }}
      >
        <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>

          {/* Badge layer — translateZ 60px */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transform: "translateZ(60px)" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 glass border border-violet-500/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-sm text-violet-300 font-medium">Open to Full-Time Roles · 2 Peer-Reviewed Publications</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
          </motion.div>

          {/* Name — translateZ 40px */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{ transform: "translateZ(40px)" }}
          >
            <h1 className="text-6xl sm:text-8xl font-black tracking-tight mb-4 leading-none">
              <span className="text-gradient-hero">Vamsidhar</span>
              <br />
              <span className="text-white/90">Reddy</span>
            </h1>
          </motion.div>

          {/* Rotating role — translateZ 20px */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ transform: "translateZ(20px)" }}
            className="h-10 flex items-center justify-center mb-6"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl text-cyan-400 font-semibold"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            B.Tech CS graduate (2026) building production-grade backends, LLM observability platforms,
            and AI-powered applications. IEEE &amp; CRC Press published researcher.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ transform: "translateZ(30px)" }}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgb(139 92 246 / 0.6)" }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold transition-colors"
            >
              View Projects
            </motion.a>
            <motion.a
              href={siteConfig.resumeUrl}
              download="Vamsidhar-Reddy-Resume.pdf"
              whileHover={{ scale: 1.06, boxShadow: "0 0 24px rgb(6 182 212 / 0.5)" }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-bold transition-colors"
            >
              <Download className="w-4 h-4" /> Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-white/10 text-white/70 hover:text-white font-bold transition-colors"
            >
              <Mail className="w-4 h-4" /> Contact
            </motion.a>
            <div className="flex gap-3">
              {[
                { href: siteConfig.github, Icon: GithubIcon, label: "GitHub" },
                { href: siteConfig.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 16px rgb(139 92 246 / 0.4)" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 flex items-center justify-center rounded-xl glass border border-white/10 text-white/60 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Stats row — glass cards with Z depth */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            style={{ transform: "translateZ(10px)" }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.08, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.06, boxShadow: "0 0 24px rgb(139 92 246 / 0.3)" }}
                className="p-4 rounded-2xl glass border border-violet-500/20 text-center cursor-default"
              >
                <div className="text-2xl font-black text-gradient-hero mb-0.5">{stat.value}</div>
                <div className="text-xs text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
