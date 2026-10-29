"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Download, Menu, X, ExternalLink } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { siteConfig } from "@/data/portfolio";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-500 ${
          scrolled
            ? "bg-[#030712]/90 backdrop-blur-2xl border-b border-white/8 shadow-[0_4px_30px_rgba(139,92,246,0.12)]"
            : "bg-[#030712]/70 backdrop-blur-xl border-b border-white/5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="font-black text-xl tracking-tight shrink-0 group">
            <span className="text-gradient-hero">V</span>
            <span className="text-white/90 group-hover:text-white transition-colors">amsidhar</span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/5 group"
              >
                {link.label}
                <span className="absolute bottom-0.5 left-3 right-3 h-px bg-gradient-to-r from-violet-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Navbar Resume — opens in new tab, no download */}
            <div className="hidden sm:block relative group">
              <motion.a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgb(139 92 246 / 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Resume
              </motion.a>
              {/* Tooltip */}
              <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 rounded-lg text-[11px] font-medium text-white/80 bg-[#0f0f1a] border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                Opens in new tab
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0f0f1a] border-l border-t border-white/10 rotate-45" />
              </div>
            </div>
            <ThemeToggle />
            <button
              className="md:hidden p-2 text-white/70 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-16 inset-x-0 z-40 bg-[#030712]/95 backdrop-blur-2xl border-b border-white/5 md:hidden"
        >
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center gap-2 px-4 py-3 bg-violet-600 text-white rounded-xl font-semibold"
            >
              <ExternalLink className="w-4 h-4" /> View Resume
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
}
