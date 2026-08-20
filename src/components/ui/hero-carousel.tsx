"use client";

import * as React from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

import { cn } from "@/lib/utils";

export interface HeroCarouselItem {
  id?: string | number;
  title: string;
  image: string;
  cardImage?: string;
  credit?: string;
  meta?: string[];
  accent?: string;
  noColorGrade?: boolean;
  objectPosition?: string;
  bgObjectPosition?: string;
  bgScale?: number;
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
const GAP_RATIO = 0.06; // gap ÷ card width
const STRIP_TOP = 0.60; // strip's top edge down the stage
const TITLE = 0.07; // headline size ÷ stage height
const PAD = 0.035; // page gutter ÷ stage width
const RAIL = 0.22; // progress rail width ÷ stage width

const WHEEL_THRESHOLD = 60;
const WHEEL_COOLDOWN = 420;

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

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
  autoplay = false,
  autoplayDelay = 6000,
  className,
}: HeroCarouselProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const [box, setBox] = React.useState({
    w: typeof window !== "undefined" ? window.innerWidth : 1280,
    h: typeof window !== "undefined" ? Math.max(620, window.innerHeight * 0.86) : 720,
  });
  const [uncontrolled, setUncontrolled] = React.useState(defaultIndex);
  const [dragging, setDragging] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const reduced = useReducedMotion();

  const last = items.length - 1;
  const index = clamp(controlled ?? uncontrolled, 0, Math.max(0, last));

  const go = React.useCallback(
    (next: number) => {
      const clamped = clamp(next, 0, Math.max(0, last));
      if (controlled === undefined) setUncontrolled(clamped);
      if (clamped !== index) onIndexChange?.(clamped);
    },
    [controlled, index, last, onIndexChange]
  );

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

  // Card dimensions: uniform width and height across active and inactive states
  const cardW = clamp(box.w * 0.13, 140, 190);
  const cardH = Math.round(cardW * 0.72); // Sleek 16:10 landscape proportion
  const gap = Math.max(12, Math.round(cardW * GAP_RATIO));
  const step = cardW + gap;
  const pad = Math.max(20, Math.round(box.w * PAD));

  // Centre the focused card
  const xFor = React.useCallback(
    (i: number) => (box.w > 0 ? box.w / 2 - (i * step + cardW / 2) : 0),
    [box.w, step, cardW]
  );
  const x = useMotionValue(xFor(index));
  const target = xFor(index);

  const spring = reduced
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 160, damping: 25, mass: 0.85 };

  React.useEffect(() => {
    if (dragging) return;
    const run = animate(x, target, spring);
    return () => run.stop();
  }, [target, dragging, reduced, x]); // eslint-disable-line react-hooks/exhaustive-deps

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

  React.useEffect(() => {
    if (!autoplay || paused || dragging || items.length < 2) return;
    const id = window.setTimeout(
      () => go(index === last ? 0 : index + 1),
      autoplayDelay
    );
    return () => window.clearTimeout(id);
  }, [autoplay, autoplayDelay, dragging, go, index, items.length, last, paused]);

  const active = items[index] || items[0];
  if (!active) return null;

  const lines = active.title.split("\n");
  const hasColorGrade =
    !active.noColorGrade &&
    active.accent &&
    active.accent !== "transparent" &&
    active.accent !== "none";
  const accent = active.accent ?? "#7b61ff";
  const bgScale = active.bgScale ?? (active.noColorGrade ? 1.0 : 1.10);

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
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className={cn(
        "relative h-full min-h-[34rem] sm:min-h-[40rem] md:min-h-[46rem] lg:min-h-[52rem] w-full overflow-hidden bg-[#07090e] text-white select-none",
        "outline-none focus-visible:ring-1 focus-visible:ring-white/40 focus-visible:ring-inset",
        className
      )}
    >
      {/* ── Background Image Layer with Ultra-Smooth Crossfade ── */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={active.image}
            alt={active.title.replace(/\n/g, " ")}
            aria-hidden
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: active.bgObjectPosition ?? "center center",
            }}
            initial={{ scale: reduced ? bgScale : bgScale * 1.03 }}
            animate={{ scale: bgScale }}
            transition={reduced ? { duration: 0 } : { duration: 6, ease: "easeOut" }}
          />

          {/* Accent Hue Color Blend only when enabled */}
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
            /* Subtle dark contrast mask for crystal-clear text readability */
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/90 via-black/25 to-black/60" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Legibility gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 pointer-events-none" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{ backgroundImage: GRAIN, backgroundSize: "180px 180px" }}
      />

      {/* ── Top Stage Bar ── */}
      {(onBack || brand || onMenu) && (
        <div
          className="absolute inset-x-0 flex items-center justify-center z-20 pointer-events-auto"
          style={{ top: Math.max(16, box.h * 0.02), gap: `${Math.max(20, box.w * 0.04)}px` }}
        >
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className="opacity-90 transition-opacity hover:opacity-100 flex items-center gap-1.5 font-mono text-xs uppercase"
            >
              <span aria-hidden>↖</span> Back
            </button>
          ) : null}
          {brand ? <div>{brand}</div> : null}
          {onMenu ? (
            <button
              type="button"
              onClick={onMenu}
              className="opacity-90 transition-opacity hover:opacity-100 flex items-center gap-1.5 font-mono text-xs uppercase"
            >
              Menu <span aria-hidden>☰</span>
            </button>
          ) : null}
        </div>
      )}

      {/* ── Headline Block: No cut-off descenders (p, g, y) with padded line frames ── */}
      <div
        className="absolute inset-x-0 top-0 flex flex-col justify-end pointer-events-none z-20"
        style={{
          height: `${STRIP_TOP * 100}%`,
          paddingLeft: pad,
          paddingRight: pad,
          paddingBottom: Math.round(box.h * 0.03),
        }}
      >
        <div className="flex w-full flex-wrap items-end justify-between gap-6 pointer-events-auto">
          {/* Left Title & Credit Area */}
          <div className="space-y-2.5 max-w-3xl">
            {active.credit ? (
              <motion.div
                key={`credit-${index}`}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.2em] text-[11px] sm:text-xs text-primary font-bold bg-primary/10 border border-primary/25 px-3.5 py-1 rounded-full backdrop-blur-xl shadow-lg"
              >
                <span>{active.credit}</span>
              </motion.div>
            ) : null}

            <AnimatePresence mode="popLayout" initial={false}>
              <motion.h1
                key={index}
                className="font-space font-extrabold leading-[1.04] sm:leading-[1.02] tracking-[-0.035em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] pb-1"
                style={{ fontSize: Math.max(32, Math.round(box.h * TITLE)) }}
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
          </div>

          {/* Right Meta Badges */}
          {active.meta?.length ? (
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {active.meta.map((fact, i) => (
                <motion.span
                  key={`${index}-${fact}`}
                  className="font-mono whitespace-nowrap uppercase tracking-[0.14em] text-[11px] sm:text-xs font-bold text-white/90 bg-black/60 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-xl shadow-xl"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    reduced ? { duration: 0 } : { duration: 0.45, delay: 0.12 + i * 0.06 }
                  }
                >
                  {fact}
                </motion.span>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* ── Filmstrip Container: Consistent Image and Aspect Ratio across Open/Close ── */}
      <div
        className="absolute inset-x-0 z-20 flex items-center"
        style={{ top: `${STRIP_TOP * 100}%`, height: cardH + 20 }}
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
            // Always consistent image (no sudden image swapping on focus)
            const cardImg = item.cardImage ?? item.image;

            return (
              <motion.button
                key={item.id ?? i}
                type="button"
                aria-label={item.title.replace(/\n/g, " ")}
                aria-current={isFocused}
                onClick={() => go(i)}
                className={cn(
                  "relative shrink-0 overflow-hidden rounded-2xl border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all duration-300 bg-[#090c12]",
                  isFocused
                    ? "border-primary/80 ring-2 ring-primary/40 shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                    : "border-white/20 hover:border-white/40 shadow-lg opacity-75 hover:opacity-95"
                )}
                style={{ width: cardW, height: cardH }}
                animate={{
                  scale: isFocused ? 1.05 : 0.97,
                  opacity: isFocused ? 1.0 : 0.7,
                }}
                transition={spring}
              >
                <img
                  src={cardImg}
                  alt={item.title.replace(/\n/g, " ")}
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-500"
                  style={{
                    objectPosition: item.objectPosition ?? "center center",
                  }}
                />
                <motion.span
                  aria-hidden
                  className="absolute inset-0 bg-black pointer-events-none"
                  animate={{ opacity: isFocused ? 0 : 0.25 }}
                  transition={spring}
                />
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* ── Bottom Position Progress Rail ── */}
      <div
        className="absolute z-20"
        style={{ left: pad, bottom: Math.max(16, box.h * 0.03), width: Math.max(150, box.w * RAIL) }}
      >
        <div className="flex justify-between font-mono tabular-nums text-xs font-semibold text-white/80">
          <span className="text-primary font-bold">{String(index + 1).padStart(2, "0")}</span>
          <span>{String(items.length).padStart(2, "0")}</span>
        </div>
        <div className="relative mt-2 h-1.5 w-full bg-white/20 rounded-full overflow-hidden backdrop-blur-md">
          <motion.div
            className="absolute inset-y-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-md"
            style={{ width: `${100 / items.length}%` }}
            animate={{ left: `${(index / items.length) * 100}%` }}
            transition={spring}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
