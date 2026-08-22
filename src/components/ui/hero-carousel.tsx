"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useConsultation } from "@/components/consultation-modal";

export interface HeroCarouselItem {
  id?: string | number;
  title: string;
  client: string;
  category: string;
  desc: string;
  impact: string;
  image: string;
  accent: string;
  meta: string[];
  techs: string[];
}

export interface HeroCarouselProps {
  items: HeroCarouselItem[];
  defaultIndex?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
}

export function HeroCarousel({
  items,
  defaultIndex = 0,
  autoplay = true,
  autoplayDelay = 5000,
  className,
}: HeroCarouselProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const [index, setIndex] = React.useState(defaultIndex);
  const [paused, setPaused] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const reduced = useReducedMotion();
  const { openConsultation } = useConsultation();

  const last = items.length - 1;

  const go = React.useCallback(
    (next: number) => {
      const clamped = Math.min(last, Math.max(0, next));
      setIndex(clamped);
    },
    [last]
  );

  const prev = () => go(index === 0 ? last : index - 1);
  const next = () => go(index === last ? 0 : index + 1);

  // Autoplay timer
  React.useEffect(() => {
    if (!autoplay || paused || dragging) return;
    const id = window.setTimeout(next, autoplayDelay);
    return () => window.clearTimeout(id);
  }, [autoplay, autoplayDelay, dragging, index, last, paused]);

  const active = items[index];
  if (!active) return null;

  return (
    <div
      ref={stageRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={cn(
        "relative w-full rounded-3xl overflow-hidden bg-card text-foreground shadow-xl dark:shadow-2xl border border-border transition-colors duration-300",
        className
      )}
    >
      {/* ── Ambient Soft Glow (Adaptive across Light/Dark) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id ?? index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <div
              className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 dark:opacity-25"
              style={{ backgroundColor: active.accent }}
            />
            <div
              className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 dark:opacity-20"
              style={{ backgroundColor: active.accent }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Top Bar ── */}
      <div className="relative z-10 flex items-center justify-between px-6 sm:px-10 pt-6 sm:pt-8 border-b border-border pb-5">
        <div className="flex items-center gap-3">
          <span
            className="size-2.5 rounded-full animate-pulse shadow-xs"
            style={{ backgroundColor: active.accent }}
          />
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground">
            Featured System // {String(index + 1).padStart(2, "0")} of {String(items.length).padStart(2, "0")}
          </span>
        </div>

        {/* Carousel Navigation Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="size-9 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground border border-border flex items-center justify-center text-foreground transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95"
            aria-label="Previous Case Study"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={next}
            className="size-9 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground border border-border flex items-center justify-center text-foreground transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95"
            aria-label="Next Case Study"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* ── Main Showcase Stage: 2-Column Split View ── */}
      <div className="relative z-10 p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative, Outcomes & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id ?? index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="space-y-5"
              >
                {/* Client & Category Badge */}
                <div className="flex items-center gap-2.5">
                  <span
                    className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-xs"
                    style={{
                      borderColor: `${active.accent}40`,
                      backgroundColor: `${active.accent}15`,
                      color: active.accent,
                    }}
                  >
                    {active.category}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground uppercase font-medium">
                    Client // {active.client}
                  </span>
                </div>

                {/* Main Headline */}
                <h3 className="font-space text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-foreground leading-[1.1] tracking-tight">
                  {active.title}
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {active.desc}
                </p>

                {/* Quantified Production Result Card */}
                <div className="p-4 rounded-2xl bg-secondary/80 dark:bg-white/[0.03] border border-border flex items-center gap-3.5 shadow-xs">
                  <div
                    className="size-8 rounded-xl flex items-center justify-center shrink-0 shadow-xs"
                    style={{ backgroundColor: `${active.accent}20`, color: active.accent }}
                  >
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground block">
                      Production Result
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {active.impact}
                    </span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {active.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-3 py-1 rounded-md bg-secondary text-muted-foreground border border-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => openConsultation("custom-software")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200 hover:scale-[1.03] cursor-pointer group"
                  >
                    <span>Request Architecture Blueprint</span>
                    <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: High-Fidelity UI Frame & Filmstrip Selector */}
          <div className="lg:col-span-6 space-y-5">
            {/* Main Interactive Screen Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg bg-card aspect-[16/10] group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id ?? index}
                  src={active.image}
                  alt={active.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>

              {/* Glass Header Bar on Image Frame */}
              <div className="absolute top-0 inset-x-0 p-3 bg-background/85 dark:bg-black/75 backdrop-blur-md border-b border-border flex items-center justify-between text-[11px] font-mono text-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-red-500/80" />
                  <span className="size-2 rounded-full bg-amber-500/80" />
                  <span className="size-2 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-muted-foreground font-mono">devolopy.internal/{active.id}</span>
                </div>
                <span className="px-2 py-0.5 rounded-sm bg-secondary text-[10px] text-foreground font-semibold border border-border/60">
                  Live Production
                </span>
              </div>
            </div>

            {/* Filmstrip Interactive Thumbnail Rail */}
            <div className="grid grid-cols-5 gap-2.5 pt-1">
              {items.map((item, i) => (
                <button
                  key={item.id ?? i}
                  type="button"
                  onClick={() => go(i)}
                  className={`relative rounded-xl overflow-hidden aspect-[4/3] border transition-all duration-300 cursor-pointer ${
                    i === index
                      ? "ring-2 ring-primary border-transparent scale-105 shadow-md opacity-100"
                      : "border-border opacity-50 hover:opacity-90"
                  }`}
                  aria-label={`Select ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <span className="absolute bottom-1 left-1.5 text-[9px] font-mono font-bold text-foreground truncate max-w-[90%]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Progress Bar ── */}
      <div className="relative h-1 w-full bg-secondary">
        <motion.div
          className="absolute inset-y-0 bg-primary"
          style={{ width: `${100 / items.length}%` }}
          animate={{ left: `${(index / items.length) * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
    </div>
  );
}

export default HeroCarousel;
