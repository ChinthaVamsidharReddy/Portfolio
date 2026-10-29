"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Copy, Check } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/AnimationWrappers";

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

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  };

  const socials = [
    { href: siteConfig.github,   Icon: GithubIcon,   label: "GitHub",   color: "#8b5cf6" },
    { href: siteConfig.linkedin, Icon: LinkedinIcon,  label: "LinkedIn", color: "#06b6d4" },
    { href: `mailto:${siteConfig.email}`, Icon: Mail, label: "Email",    color: "#ec4899" },
  ];

  return (
    <section id="contact" className="relative py-28 bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/6 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <FadeIn>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-pink-400 border border-pink-500/30 bg-pink-500/10 mb-6">
            Contact
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Let&apos;s <span className="text-gradient-hero">Connect</span>
          </h2>

          <p className="text-white/45 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            I&apos;m actively looking for full-time roles in Software Engineering, Full-Stack, or AI Engineering.
            Drop me a line — I usually reply within 24 hours.
          </p>
        </FadeIn>

        {/* Main CTA card */}
        <FadeIn delay={0.1}>
          <motion.div
            whileHover={{ boxShadow: "0 30px 80px rgb(139 92 246 / 0.2), 0 0 0 1px rgb(139 92 246 / 0.2)" }}
            style={{ perspective: "800px", transformStyle: "preserve-3d" }}
            className="relative rounded-3xl glass-strong border border-violet-500/20 p-10 mb-8"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

            {/* Email display */}
            <motion.div
              style={{ transform: "translateZ(16px)" }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <Mail className="w-6 h-6 text-violet-400 shrink-0" />
              <span className="text-xl font-bold text-white">{siteConfig.email}</span>
              <motion.button
                onClick={copyEmail}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg glass border border-white/10 text-white/50 hover:text-white transition-colors"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </motion.button>
            </motion.div>

            {/* Primary email button */}
            <motion.a
              href={`mailto:${siteConfig.email}`}
              style={{ transform: "translateZ(20px)" }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgb(139 92 246 / 0.55)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-lg transition-colors mb-6"
            >
              <Send className="w-5 h-5" />
              Send a Message
            </motion.a>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-sm text-white/30">
              <MapPin className="w-4 h-4" />
              <span>India · Open to Remote</span>
            </div>
          </motion.div>
        </FadeIn>

        {/* Social links */}
        <FadeIn delay={0.2}>
          <p className="text-xs text-white/25 uppercase tracking-widest mb-5">Find me on</p>
          <div className="flex justify-center gap-4">
            {socials.map(({ href, Icon, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -3, boxShadow: `0 12px 30px ${color}44` }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl glass border border-white/8 text-white/50 hover:text-white transition-colors min-w-[80px]"
                aria-label={label}
              >
                <Icon className="w-5 h-5" style={{ color }} />
                <span className="text-xs font-medium">{label}</span>
              </motion.a>
            ))}
          </div>
        </FadeIn>

        {/* Availability badge */}
        <FadeIn delay={0.3}>
          <motion.div
            className="inline-flex items-center gap-2.5 mt-10 px-5 py-3 rounded-full glass border border-green-500/25"
            animate={{ boxShadow: ["0 0 0px rgb(74 222 128 / 0)", "0 0 20px rgb(74 222 128 / 0.2)", "0 0 0px rgb(74 222 128 / 0)"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-semibold text-green-400">Available for full-time roles</span>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
