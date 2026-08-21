"use client";

import * as React from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Play,
  Pause,
  Layers,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useConsultation } from "@/components/consultation-modal";

export interface HeroCarouselItem {
  id?: string | number;
  title: string;
  subtitle?: string;
  image: string;
  cardImage?: string;
  credit?: string;
  meta?: string[];
  accent?: string;
  noColorGrade?: boolean;
  objectPosition?: string;
  bgObjectPosition?: string;
  bgScale?: number;
  slug?: string;
}

export interface HeroCarouselProps {
  items: HeroCarouselItem[];
  index?: number;
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
  brand?: React.ReactNode;
  onBack?: () => void;
  onMenu?: () => void;
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
}

/* Precise layout ratios */
const GAP_RATIO = 0.08;
const STRIP_TOP = 0.62;
const TITLE_SCALE = 0.075;
const PAD_RATIO = 0.04;

const WHEEL_THRESHOLD = 50;
const WHEEL_COOLDOWN = 380;

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

export function HeroCarousel({
  items,
  index: controlled,
  defaultIndex = 0,
  onIndexChange,
  brand,
  onBack,
  onMenu,
  autoplay = true,
  autoplayDelay = 6000,
  className,
}: HeroCarouselProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const [box, setBox] = React.useState({
    w: typeof window !== "undefined" ? window.innerWidth : 1280,
    h: typeof window !== "undefined" ? Math.max(640, window.innerHeight * 0.88) : 740,
  });
  const [uncontrolled, setUncontrolled] = React.useState(defaultIndex);
  const [dragging, setDragging] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const reduced = useReducedMotion();
  const { openConsultation } = useConsultation();

  const last = items.length - 1;
  const index = clamp(controlled ?? uncontrolled, 0, Math.max(0, last));

  const go = React.useCallback(
    (next: number) => {
      const clamped = clamp(next, 0, Math.max(0, last));
      if (controlled === undefined) setUncontrolled(clamped);
      if (clamped !== index) {
        onIndexChange?.(clamped);
        setProgress(0);
      }
    },
    [controlled, index, last, onIndexChange]
  );

  const prev = React.useCallback(() => {
    go(index === 0 ? last : index - 1);
  }, [go, index, last]);

  const next = React.useCallback(() => {
    go(index === last ? 0 : index + 1);
  }, [go, index, last]);

  // ResizeObserver observes the stage box
  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const read = () => {
      if (stage.clientWidth && stage.clientHeight) {
        setBox({ w: stage.clientWidth, h: stage.clientHeight });
      }
    };
    read();
    const ro = new ResizeObserver(read);
    ro.observe(stage);
    return () => ro.disconnect();
  }, []);

  // Card dimensions: uniform width and height
  const cardW = clamp(box.w * 0.14, 140, 200);
  const cardH = Math.round(cardW * 0.68);
  const gap = Math.max(12, Math.round(cardW * GAP_RATIO));
  const step = cardW + gap;
  const pad = Math.max(20, Math.round(box.w * PAD_RATIO));

  // Centre the focused card
  const xFor = React.useCallback(
    (i: number) => (box.w > 0 ? box.w / 2 - (i * step + cardW / 2) : 0),
    [box.w, step, cardW]
  );
  const x = useMotionValue(xFor(index));
  const target = xFor(index);

  const spring = reduced
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 180, damping: 26, mass: 0.8 };

  React.useEffect(() => {
    if (dragging) return;
    const run = animate(x, target, spring);
    return () => run.stop();
  }, [target, dragging, reduced, x]); // eslint-disable-line react-hooks/exhaustive-deps

  // Autoplay countdown timer
  React.useEffect(() => {
    if (!autoplay || paused || dragging || items.length < 2) return;
    const stepInterval = 50;
    const totalSteps = autoplayDelay / stepInterval;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      setProgress(Math.min(100, (stepCount / totalSteps) * 100));

      if (stepCount >= totalSteps) {
        stepCount = 0;
        setProgress(0);
        go(index === last ? 0 : index + 1);
      }
    }, stepInterval);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, dragging, go, index, items.length, last, paused]);

  // Wheel and trackpad horizontal scrolling
  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let acc = 0;
    let until = 0;

    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const stuck = (delta > 0 && index === last) || (delta < 0 && index === 0);
      if (stuck) {
        acc = 0;
        return;
      }
      e.preventDefault();
      const now = e.timeStamp;
      if (now < until) return;
      acc += delta;
      if (Math.abs(acc) < WHEEL_THRESHOLD) return;
      go(index + Math.sign(acc));
      acc = 0;
      until = now + WHEEL_COOLDOWN;
    };

    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [go, index, last]);

  const active = items[index] || items[0];
  if (!active) return null;

  const lines = active.title.split("\n");
  const hasColorGrade =
    !active.noColorGrade &&
    active.accent &&
    active.accent !== "transparent" &&
    active.accent !== "none";
  const accent = active.accent ?? "#3b82f6";
  const bgScale = active.bgScale ?? (active.noColorGrade ? 1.0 : 1.08);

  return (
    <div
      ref={stageRef}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured Showcases"
      onKeyDown={(e) => {
        const keys: Record<string, number> = {
          ArrowLeft: index - 1,
          ArrowRight: index + 1,
          Home: 0,
          End: last,
        };
        if (!(e.key in keys)) return;
        e.preventDefault();
        go(keys[e.key]!);
      }}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      className={cn(
        "relative h-full min-h-[36rem] sm:min-h-[42rem] md:min-h-[48rem] lg:min-h-[54rem] w-full overflow-hidden bg-[#04060a] text-white select-none",
        "outline-none focus-visible:ring-1 focus-visible:ring-primary/40 focus-visible:ring-inset",
        className
      )}
    >
      {/* ── Background Image Layer with Ultra-Smooth Crossfade & Dynamic Zoom ── */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            src={active.image}
            alt={active.title.replace(/\n/g, " ")}
            aria-hidden
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: active.bgObjectPosition ?? "center center",
            }}
            initial={{ scale: reduced ? bgScale : bgScale * 1.04 }}
            animate={{ scale: bgScale }}
            transition={reduced ? { duration: 0 } : { duration: 7, ease: "easeOut" }}
          />

          {/* Accent Hue Color Blend or Deep Cinematic Vignette */}
          {hasColorGrade ? (
            <>
              <div
                className="absolute inset-0 w-full h-full"
                style={{ backgroundColor: accent, mixBlendMode: "color" }}
              />
              <div
                className="absolute inset-0 w-full h-full opacity-60"
                style={{ backgroundColor: accent, mixBlendMode: "multiply" }}
              />
            </>
          ) : (
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#04060a] via-black/35 to-black/65" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Vignette Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04060a] via-transparent to-black/70 pointer-events-none" />

      {/* ── Headline Block & Meta Badges ── */}
      <div
        className="absolute inset-x-0 top-0 flex flex-col justify-end pointer-events-none z-20"
        style={{
          height: `${STRIP_TOP * 100}%`,
          paddingLeft: pad,
          paddingRight: pad,
          paddingBottom: Math.round(box.h * 0.025),
        }}
      >
        <div className="flex w-full flex-wrap items-end justify-between gap-6 pointer-events-auto">
          {/* Left Title & Interactive CTAs */}
          <div className="space-y-3.5 max-w-3xl">
            {/* Top Project Tagline Pill */}
            <motion.div
              key={`credit-${index}`}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.2em] text-[11px] sm:text-xs text-primary font-bold bg-black/60 border border-primary/40 px-3.5 py-1 rounded-full backdrop-blur-2xl shadow-xl"
            >
              <span className="relative flex size-2">
                <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-primary relative inline-flex size-2 rounded-full" />
              </span>
              <span>Case Study {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
            </motion.div>

            {/* Giant Crisp Title */}
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.h1
                key={index}
                className="font-space font-black leading-[1.02] tracking-[-0.035em] text-white drop-shadow-[0_8px_32px_rgba(0,0,0,0.9)] pb-1 flex flex-wrap items-center gap-4"
                style={{ fontSize: Math.max(34, Math.round(box.h * TITLE_SCALE)) }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.18 } }}
              >
                {lines.map((line, i) => (
                  <span key={i} className="block overflow-hidden py-1.5 -my-1.5 px-1 -mx-1">
                    <motion.span
                      className="block pb-2 -mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/95 to-white/80"
                      initial={{ y: "115%" }}
                      animate={{ y: 0 }}
                      transition={
                        reduced
                          ? { duration: 0 }
                          : { duration: 0.65, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }
                      }
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>

            {/* Subtitle / 1-liner Description if present */}
            {active.subtitle && (
              <motion.p
                key={`subtitle-${index}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="text-sm sm:text-base text-white/70 font-medium max-w-xl line-clamp-2 leading-relaxed"
              >
                {active.subtitle}
              </motion.p>
            )}

            {/* Direct Interactive CTA */}
            <div className="pt-1 flex items-center gap-3">
              <button
                type="button"
                onClick={() => openConsultation(active.slug || "website-development")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all cursor-pointer group"
              >
                <span>Explore Project Scope</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Meta Capsules */}
          {active.meta?.length ? (
            <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap max-w-md justify-start lg:justify-end">
              {active.meta.map((fact, i) => (
                <motion.span
                  key={`${index}-${fact}`}
                  className="font-mono whitespace-nowrap uppercase tracking-[0.14em] text-[10px] sm:text-[11px] font-bold text-white/90 bg-black/70 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-2xl shadow-xl"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    reduced ? { duration: 0 } : { duration: 0.45, delay: 0.12 + i * 0.05 }
                  }
                >
                  {fact}
                </motion.span>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* ── Filmstrip Carousel Container ── */}
      <div
        className="absolute inset-x-0 z-20 flex items-center"
        style={{ top: `${STRIP_TOP * 100}%`, height: cardH + 24 }}
      >
        <motion.div
          className="flex items-center"
          style={{ gap, x, cursor: dragging ? "grabbing" : "grab" }}
          drag="x"
          dragMomentum={false}
          dragElastic={0.08}
          dragConstraints={{ left: xFor(last), right: xFor(0) }}
          onDragStart={() => setDragging(true)}
          onDragEnd={(_, info) => {
            setDragging(false);
            const thrown = x.get() + info.velocity.x * 0.12;
            go(Math.round((box.w / 2 - thrown - cardW / 2) / step));
          }}
        >
          {items.map((item, i) => {
            const isFocused = i === index;
            const cardImg = item.cardImage ?? item.image;

            return (
              <motion.button
                key={item.id ?? i}
                type="button"
                aria-label={item.title.replace(/\n/g, " ")}
                aria-current={isFocused}
                onClick={() => go(i)}
                className={cn(
                  "relative shrink-0 overflow-hidden rounded-2xl border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300 bg-[#090c12]",
                  isFocused
                    ? "border-primary ring-2 ring-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.5)] scale-105"
                    : "border-white/15 hover:border-white/40 shadow-lg opacity-70 hover:opacity-95 scale-95"
                )}
                style={{ width: cardW, height: cardH }}
                animate={{
                  scale: isFocused ? 1.06 : 0.96,
                  opacity: isFocused ? 1.0 : 0.65,
                }}
                transition={spring}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cardImg}
                  alt={item.title.replace(/\n/g, " ")}
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-500"
                  style={{
                    objectPosition: item.objectPosition ?? "center center",
                  }}
                />

                {/* Dark Vignette on Inactive */}
                <motion.span
                  aria-hidden
                  className="absolute inset-0 bg-black pointer-events-none"
                  animate={{ opacity: isFocused ? 0 : 0.35 }}
                  transition={spring}
                />

                {/* Live active indicator glow bar */}
                {isFocused && (
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-sm" />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* ── Bottom Controls & Progress Dock ── */}
      <div
        className="absolute z-20 flex items-center justify-between pointer-events-auto"
        style={{
          left: pad,
          right: pad,
          bottom: Math.max(16, box.h * 0.03),
        }}
      >
        {/* Left: Progress Indicator & Autoplay Countdown Bar */}
        <div className="flex items-center gap-4 bg-black/60 border border-white/15 rounded-2xl px-4 py-2 backdrop-blur-2xl shadow-xl">
          <div className="flex items-center gap-2 font-mono tabular-nums text-xs font-semibold text-white/90">
            <span className="text-primary font-bold text-sm">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-white/40">/</span>
            <span className="text-white/60">{String(items.length).padStart(2, "0")}</span>
          </div>

          <div className="relative h-1.5 w-24 sm:w-36 bg-white/15 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="text-white/60 hover:text-white transition-colors cursor-pointer p-1"
            aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
          >
            {paused ? <Play className="size-3.5 text-primary" /> : <Pause className="size-3.5" />}
          </button>
        </div>

        {/* Right: Glassmorphic Prev / Next Arrow Controls */}
        <div className="flex items-center gap-2 bg-black/60 border border-white/15 rounded-2xl p-1.5 backdrop-blur-2xl shadow-xl">
          <button
            type="button"
            onClick={prev}
            className="size-9 rounded-xl flex items-center justify-center bg-white/5 hover:bg-white/20 text-white/80 hover:text-white transition-all cursor-pointer border border-white/5 active:scale-95"
            aria-label="Previous showcase"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={next}
            className="size-9 rounded-xl flex items-center justify-center bg-white/5 hover:bg-white/20 text-white/80 hover:text-white transition-all cursor-pointer border border-white/5 active:scale-95"
            aria-label="Next showcase"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
