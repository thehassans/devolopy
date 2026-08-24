"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Lock,
  Instagram,
  Facebook,
  Twitter,
  ChevronDown,
  Code2,
  Check,
  Zap,
} from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

export function HeroSection() {
  const { openConsultation } = useConsultation();

  return (
    <section className="relative min-h-[92vh] lg:min-h-[98vh] flex flex-col justify-between overflow-hidden bg-background text-foreground pt-28 sm:pt-32 pb-10 sm:pb-12 transition-colors duration-300">
      {/* ── Volumetric Golden Beam / Heavenly Spotlight Lighting (Top Right) ── */}
      <div
        className="pointer-events-none absolute -top-10 right-4 sm:right-16 lg:right-32 w-[380px] sm:w-[520px] lg:w-[680px] h-[550px] sm:h-[700px] z-0"
        aria-hidden="true"
      >
        {/* Intense Golden Focal Cone */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-60 dark:opacity-85"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 0%, rgba(255, 205, 110, 0.45) 0deg, rgba(234, 140, 46, 0.25) 25deg, transparent 55deg, transparent 305deg, rgba(234, 140, 46, 0.25) 335deg, rgba(255, 205, 110, 0.45) 360deg)",
            filter: "blur(20px)",
            maskImage: "radial-gradient(ellipse 65% 70% at 50% 15%, black 20%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 65% 70% at 50% 15%, black 20%, transparent 80%)",
          }}
        />

        {/* Ambient Amber Bloom */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] sm:w-[480px] h-[350px] bg-gradient-to-b from-amber-400/25 via-orange-500/15 to-transparent blur-[90px] rounded-full" />
      </div>

      {/* Subtle Left Side Ambient Glow */}
      <div
        className="pointer-events-none absolute top-1/3 -left-20 w-[450px] h-[450px] bg-orange-600/10 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto pt-4 sm:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* =========================================================
              LEFT COLUMN: Header Copy, Badges & Pill Action Buttons
             ========================================================= */}
          <div className="lg:col-span-6 space-y-7 sm:space-y-8">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide text-amber-800 dark:text-amber-200/90 bg-amber-500/10 dark:bg-white/[0.04] border border-amber-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(234,140,46,0.15)]">
              <Zap className="size-3.5 text-amber-500 dark:text-amber-400 fill-amber-500 dark:fill-amber-400" />
              <span>Empowering Global Startup Growth</span>
            </div>

            {/* Main Headline: FUTURE-DRIVEN SOFTWARE { DEVELOPMENT } */}
            <div className="space-y-1">
              <h1 className="font-space text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] font-black uppercase tracking-tight leading-[1.04] text-foreground">
                <span className="block">FUTURE-DRIVEN</span>
                <span className="block">SOFTWARE</span>
                <span className="inline-flex items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
                  {/* Pixel-Perfect Left Curved Bracket */}
                  <svg
                    className="h-[0.84em] w-auto text-amber-500/90 dark:text-amber-400/90 inline-block align-middle shrink-0"
                    viewBox="0 0 20 44"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M16 3C9 3 8 7 8 14C8 19 5 22 2 22C5 22 8 25 8 30C8 37 9 41 16 41" />
                  </svg>

                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-[#C0703C] dark:from-amber-200 dark:via-orange-300 dark:to-[#C0703C] drop-shadow-[0_0_25px_rgba(234,140,46,0.35)] tracking-tight">
                    DEVELOPMENT
                  </span>

                  {/* Pixel-Perfect Right Curved Bracket */}
                  <svg
                    className="h-[0.84em] w-auto text-amber-500/90 dark:text-amber-400/90 inline-block align-middle shrink-0"
                    viewBox="0 0 20 44"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 3C11 3 12 7 12 14C12 19 15 22 18 22C15 22 12 25 12 30C12 37 11 41 4 41" />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed font-normal">
              We craft high-quality digital solutions that help businesses grow, scale, and innovate in a fast-changing world.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1 sm:pt-2">
              <button
                type="button"
                onClick={() => openConsultation("custom-software")}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-[#121316] hover:bg-[#1e1f26] text-white font-semibold text-sm sm:text-base border border-neutral-800/80 shadow-xl shadow-black/20 hover:border-neutral-700 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-full bg-card hover:bg-secondary text-foreground font-semibold text-sm sm:text-base border border-border shadow-xs dark:bg-white/[0.05] dark:hover:bg-white/[0.1] dark:text-white/90 dark:border-white/15 backdrop-blur-md transition-all duration-200 hover:border-primary/40"
              >
                <span>See Our Projects</span>
              </Link>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Glass Code Editor + Floating CSS & Lock Card
             ========================================================= */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            {/* Ambient Backlight for IDE */}
            <div className="absolute -top-12 right-6 sm:right-14 w-64 sm:w-80 h-32 bg-amber-400/25 blur-3xl rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[540px]">
              
              {/* ── Main Glassmorphic Code Editor Window ── */}
              <div className="relative rounded-3xl bg-[#111217]/95 border border-white/[0.15] shadow-[0_20px_50px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden">
                {/* Editor Header Bar */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.03] border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-[#FF5F56] inline-block shadow-xs" />
                    <span className="size-3 rounded-full bg-[#FFBD2E] inline-block shadow-xs" />
                    <span className="size-3 rounded-full bg-[#27C93F] inline-block shadow-xs" />
                  </div>

                  <div className="flex items-center gap-2 text-white/40">
                    <span className="text-[11px] font-mono">index.ts</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-white/40 text-xs font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">⌥</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">+</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-white/80 overflow-x-auto space-y-1">
                  <div>
                    <span className="text-purple-400 font-semibold">document</span>
                    <span className="text-white/60">.</span>
                    <span className="text-blue-400 font-semibold">addEventListener</span>
                    <span className="text-white/60">(</span>
                    <span className="text-amber-300">&quot;DOMContentLoaded&quot;</span>
                    <span className="text-white/60">, () </span>
                    <span className="text-orange-400">=&gt;</span>
                    <span className="text-white/60"> &#123;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-orange-400">let </span>
                    <span className="text-white">count </span>
                    <span className="text-orange-400">= </span>
                    <span className="text-cyan-400">0</span>
                    <span className="text-white/60">;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-orange-400">const </span>
                    <span className="text-white">button </span>
                    <span className="text-orange-400">= </span>
                    <span className="text-purple-400">document</span>
                    <span className="text-white/60">.</span>
                    <span className="text-blue-400">createElement</span>
                    <span className="text-white/60">(</span>
                    <span className="text-amber-300">&quot;button&quot;</span>
                    <span className="text-white/60">);</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white">button</span>
                    <span className="text-white/60">.</span>
                    <span className="text-blue-400">textContent </span>
                    <span className="text-orange-400">= </span>
                    <span className="text-amber-300">`Click me: $&#123;count&#125;`</span>
                    <span className="text-white/60">;</span>
                  </div>
                  <div className="pl-4 pt-1">
                    <span className="text-white">button</span>
                    <span className="text-white/60">.</span>
                    <span className="text-blue-400">addEventListener</span>
                    <span className="text-white/60">(</span>
                    <span className="text-amber-300">&quot;click&quot;</span>
                    <span className="text-white/60">, () </span>
                    <span className="text-orange-400">=&gt;</span>
                    <span className="text-white/60"> &#123;</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-white">count</span>
                    <span className="text-orange-400">++</span>
                    <span className="text-white/60">;</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-white">button</span>
                    <span className="text-white/60">.</span>
                    <span className="text-blue-400">textContent </span>
                    <span className="text-orange-400">= </span>
                    <span className="text-amber-300">`Click me: $&#123;count&#125;`</span>
                    <span className="text-white/60">;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white/60">&#125;);</span>
                  </div>
                  <div className="pl-4 pt-1 opacity-70">
                    <span className="text-purple-400">document</span>
                    <span className="text-white/60">.</span>
                    <span className="text-white">body</span>
                    <span className="text-white/60">.</span>
                    <span className="text-blue-400">appendChild</span>
                    <span className="text-white/60">(</span>
                    <span className="text-white">button</span>
                    <span className="text-white/60">);</span>
                  </div>
                  <div>
                    <span className="text-white/60">&#125;);</span>
                  </div>
                </div>

                {/* Editor Bottom Format Toolbar */}
                <div className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.02] border-t border-white/[0.06] text-[11px] font-mono text-white/50">
                  <span className="px-2.5 py-0.5 rounded-md bg-white/5 text-white/70">Body</span>
                  <span className="px-2 py-0.5 rounded-md bg-white/5 hover:text-white transition-colors font-bold">B</span>
                  <span className="px-2 py-0.5 rounded-md bg-white/5 hover:text-white transition-colors italic">I</span>
                  <span className="px-2 py-0.5 rounded-md bg-white/5 hover:text-white transition-colors underline">U</span>
                  <span className="px-2 py-0.5 rounded-md bg-white/5 hover:text-white transition-colors">&lt;/&gt;</span>
                  <span className="ml-auto text-emerald-400 flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    UTF-8
                  </span>
                </div>
              </div>

              {/* ── Floating Overlapping CSS Style Card (Bottom Right) ── */}
              <div className="absolute -bottom-8 -right-2 sm:-right-6 w-[260px] sm:w-[290px] p-4 sm:p-5 rounded-2xl bg-[#14151b]/98 border border-white/[0.18] shadow-[0_15px_35px_rgba(0,0,0,0.35)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.7)] backdrop-blur-2xl z-20 transition-transform duration-300 hover:scale-[1.02]">
                <div className="font-mono text-[11px] sm:text-xs leading-relaxed text-white/80 space-y-0.5">
                  <div>
                    <span className="text-orange-400 font-bold">code </span>
                    <span className="text-white/60">&#123;</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-cyan-300">font-family</span>
                    <span className="text-white/60">: </span>
                    <span className="text-amber-300">&apos;Fira Code&apos;</span>
                    <span className="text-white/60">, monospace;</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-cyan-300">font-size</span>
                    <span className="text-white/60">: </span>
                    <span className="text-purple-300">14px</span>
                    <span className="text-white/60">;</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-cyan-300">background-color</span>
                    <span className="text-white/60">: </span>
                    <span className="text-amber-300">#f5f5f5</span>
                    <span className="text-white/60">;</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-cyan-300">padding</span>
                    <span className="text-white/60">: </span>
                    <span className="text-purple-300">4px</span>
                    <span className="text-white/60">;</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-cyan-300">border-radius</span>
                    <span className="text-white/60">: </span>
                    <span className="text-purple-300">4px</span>
                    <span className="text-white/60">;</span>
                  </div>
                  <div>
                    <span className="text-white/60">&#125;</span>
                  </div>
                </div>
              </div>

              {/* ── Glowing Amber Security Lock Token (Bottom Center-Left) ── */}
              <div className="absolute -bottom-6 left-6 sm:left-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#201912]/95 border border-amber-500/50 shadow-[0_0_20px_rgba(234,140,46,0.35)] backdrop-blur-xl z-30">
                <div className="size-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-inner">
                  <Lock className="size-3 text-neutral-950 stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-amber-300 uppercase">
                  WAAD // SECURE
                </span>
              </div>

              {/* Subtle connection line to code window */}
              <div className="absolute -bottom-1 left-24 w-12 h-[1px] bg-gradient-to-r from-amber-500/60 to-transparent pointer-events-none z-10" />
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          BOTTOM BAR: Follow Us Socials & Scroll Indicator
         ========================================================= */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-10 sm:pt-14 border-t border-border/70 dark:border-white/[0.06] mt-8">
        <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
          {/* Follow Us Socials */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-wider">Follow Us</span>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/devolopy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Devolopy on Instagram"
                className="p-1.5 rounded-lg bg-card hover:bg-muted text-foreground/80 hover:text-foreground border border-border/60 transition-colors"
              >
                <Instagram className="size-3.5" />
              </a>
              <a
                href="https://facebook.com/devolopy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Devolopy on Facebook"
                className="p-1.5 rounded-lg bg-card hover:bg-muted text-foreground/80 hover:text-foreground border border-border/60 transition-colors"
              >
                <Facebook className="size-3.5" />
              </a>
              <a
                href="https://twitter.com/devolopy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Devolopy on X"
                className="p-1.5 rounded-lg bg-card hover:bg-muted text-foreground/80 hover:text-foreground border border-border/60 transition-colors"
              >
                <Twitter className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Scroll To Explore */}
          <Link
            href="#services"
            className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="size-3.5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
