"use client";

// A full-bleed editorial hero/showcase driven by a filmstrip.
//
// Every card shares one top edge. The focused card unfurls to full height while
// its neighbours stay clipped to half, so the strip reads as a row of cropped
// heads with one complete portrait standing in the middle of it. Changing the
// focus re-grades the whole background to that image.
//
// Geometry is measured, never hard-coded: one ResizeObserver reads the stage and
// every size below is a ratio of it, so the same component is pixel-identical in
// a 600px preview box and on a 4K display.
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
  /** Stable key; falls back to the index. @default undefined */
  id?: string | number;
  /** Headline for the active slide. Newlines become separate reveal lines. */
  title: string;
  /** Image URL, used both in the card and as the graded background. */
  image: string;
  /** Byline printed beside the headline, e.g. "BY AURELIA STUDIO." @default undefined */
  credit?: string;
  /** Right-aligned facts, e.g. ["SAT NOV 15", "5-10 PM", "MIAMI"]. @default undefined */
  meta?: string[];
  /**
   * CSS colour the background is graded to. The photo keeps its luminance and
   * takes this hue, which is what makes the backdrop swing on every change.
   * @default "#8a8a8a"
   */
  accent?: string;
}

export interface HeroCarouselProps {
  /** Slides, in strip order. */
  items: HeroCarouselItem[];
  /** Focused slide when controlled. Leave unset for internal state. @default undefined */
  index?: number;
  /** Focused slide on mount when uncontrolled. @default 0 */
  defaultIndex?: number;
  /** Fires on every focus change, from any input. @default undefined */
  onIndexChange?: (index: number) => void;
  /** Wordmark in the middle of the top bar. @default undefined */
  brand?: React.ReactNode;
  /** Renders the "Back" control when provided. @default undefined */
  onBack?: () => void;
  /** Renders the "Menu" control when provided. @default undefined */
  onMenu?: () => void;
  /** Advance on a timer. Pauses on hover, drag and focus. @default false */
  autoplay?: boolean;
  /** Milliseconds between autoplay steps. @default 4000 */
  autoplayDelay?: number;
  /** Extra classes for the stage. @default undefined */
  className?: string;
}

/* Ratios lifted from the reference layout, all relative to the stage box. */
const CARD_H = 0.32; // active card height ÷ stage height
const CARD_AR = 0.75; // active card is 3:4
const GAP = 0.038; // gap ÷ card width
const STRIP_TOP = 0.48; // strip's shared top edge, down the stage
const TITLE = 0.067; // headline cap size ÷ stage height
const LABEL = 0.013; // small mono label ÷ stage height
const PAD = 0.024; // page gutter ÷ stage width
const RAIL = 0.22; // progress rail width ÷ stage width

/** Wheel distance that commits to a step, and the lockout after one. */
const WHEEL_THRESHOLD = 60;
const WHEEL_COOLDOWN = 420;

/* Film grain, as a self-contained SVG so the component carries no assets. */
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
  autoplayDelay = 4000,
  className,
}: HeroCarouselProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const [box, setBox] = React.useState({ w: 0, h: 0 });
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

  // One observer feeds every measurement below.
  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const read = () =>
      setBox({ w: stage.clientWidth, h: stage.clientHeight });
    read();
    const ro = new ResizeObserver(read);
    ro.observe(stage);
    return () => ro.disconnect();
  }, []);

  const fullH = clamp(box.h * CARD_H, 140, 380);
  const halfH = fullH / 2;
  const cardW = fullH * CARD_AR;
  const gap = Math.max(8, Math.round(cardW * GAP));
  const step = cardW + gap;
  const pad = Math.max(20, Math.round(box.w * PAD));
  const label = Math.max(11, Math.round(box.h * LABEL));

  // Centre the focused card: the track slides, the card never moves itself.
  const xFor = React.useCallback(
    (i: number) => box.w / 2 - (i * step + cardW / 2),
    [box.w, step, cardW]
  );
  const x = useMotionValue(0);
  const target = xFor(index);

  const swing = reduced
    ? { duration: 0 }
    : { duration: 0.7, ease: "easeOut" as const };
  const spring = reduced
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 260, damping: 34, mass: 0.9 };

  // The track is driven by a motion value rather than an `animate` prop
  React.useEffect(() => {
    if (dragging) return;
    const run = animate(x, target, spring);
    return () => run.stop();
  }, [target, dragging, reduced, x]); // eslint-disable-line react-hooks/exhaustive-deps

  // Wheel and trackpad. Both axes step the strip.
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

  const active = items[index];
  if (!active) return null;

  const lines = active.title.split("\n");
  const accent = active.accent ?? "#8a8a8a";

  return (
    <div
      ref={stageRef}
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label="Selected Work & Case Studies"
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
        "relative h-full min-h-[32rem] sm:min-h-[38rem] lg:min-h-[42rem] w-full overflow-hidden bg-black text-white select-none rounded-3xl border border-border/60 shadow-2xl",
        "outline-none focus-visible:ring-1 focus-visible:ring-white/40 focus-visible:ring-inset",
        className
      )}
    >
      {/* ── Background: the focused photo, blown up and re-hued to its accent ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={swing}
        >
          <motion.img
            src={active.image}
            alt=""
            aria-hidden
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ scale: reduced ? 1.28 : 1.42 }}
            animate={{ scale: 1.28 }}
            transition={reduced ? { duration: 0 } : { duration: 6, ease: "linear" }}
          />
          {/* Keep the photo's luminance, take the accent's hue. */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: accent, mixBlendMode: "color" }}
          />
          <div
            className="absolute inset-0 opacity-60"
            style={{ backgroundColor: accent, mixBlendMode: "multiply" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Legibility wash + grain, above the swap so they never flicker. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/75" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.25] mix-blend-overlay"
        style={{ backgroundImage: GRAIN, backgroundSize: "180px 180px" }}
      />

      {/* ── Top bar: Centred branding or section descriptor ── */}
      <div
        className="absolute inset-x-0 flex items-center justify-between px-6 sm:px-10 z-20"
        style={{ top: Math.max(18, box.h * 0.035) }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono tracking-wider uppercase text-white/90">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          <span>Case Studies</span>
        </div>

        {brand ? (
          <div
            className="font-space font-bold tracking-[0.08em] text-white/90 text-sm sm:text-base uppercase"
          >
            {brand}
          </div>
        ) : null}

        <div className="text-xs font-mono text-white/60 hidden sm:block">
          DRAG OR CLICK TO EXPLORE ↔
        </div>
      </div>

      {/* ── Headline block, sitting just above the strip's top edge ── */}
      <div
        className="absolute inset-x-0 top-0 flex flex-col justify-end z-20"
        style={{
          height: `${STRIP_TOP * 100}%`,
          paddingLeft: pad,
          paddingRight: pad,
          paddingBottom: Math.round(box.h * 0.035),
        }}
      >
        <div className="flex w-full flex-wrap items-end gap-x-[5vw] gap-y-3">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.h2
              key={index}
              className="font-space font-extrabold leading-[0.92] tracking-[-0.03em] text-white"
              style={{ fontSize: Math.max(26, Math.round(box.h * TITLE)) }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.18 } }}
            >
              {lines.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { duration: 0.62, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }
                    }
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h2>
          </AnimatePresence>

          {active.credit ? (
            <motion.p
              key={`credit-${index}`}
              className="font-mono uppercase tracking-[0.14em] text-white/80 text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {active.credit}
            </motion.p>
          ) : null}

          {active.meta?.length ? (
            <div
              className="ml-auto flex items-end flex-wrap gap-2 sm:gap-4"
            >
              {active.meta.map((fact, i) => (
                <motion.span
                  key={`${index}-${fact}`}
                  className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em] px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15 text-white/90"
                  initial={{ opacity: 0, y: 6 }}
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

      {/* ── The strip: one shared top edge, the focused card twice as tall ── */}
      <div
        className="absolute inset-x-0 z-20"
        style={{ top: `${STRIP_TOP * 100}%`, height: fullH }}
      >
        <motion.div
          className="flex items-start"
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
          {items.map((item, i) => (
            <motion.button
              key={item.id ?? i}
              type="button"
              aria-label={item.title.replace(/\n/g, " ")}
              aria-current={i === index}
              onClick={() => go(i)}
              className="relative shrink-0 overflow-hidden rounded-2xl bg-white/5 border border-white/15 shadow-xl transition-all"
              style={{ width: cardW }}
              animate={{ height: i === index ? fullH : halfH }}
              transition={spring}
            >
              <img
                src={item.image}
                alt=""
                draggable={false}
                className="h-full w-full object-cover"
                style={{ objectPosition: "50% 30%" }}
              />
              <motion.span
                aria-hidden
                className="absolute inset-0 bg-black"
                animate={{ opacity: i === index ? 0 : 0.35 }}
                transition={spring}
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* ── Position rail ── */}
      <div
        className="absolute z-20"
        style={{ left: pad, bottom: Math.max(16, box.h * 0.03), width: Math.max(180, box.w * RAIL) }}
      >
        <div
          className="flex justify-between font-mono tabular-nums text-white/80"
          style={{ fontSize: label }}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{String(items.length).padStart(2, "0")}</span>
        </div>
        <div className="relative mt-2 h-1 w-full bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 bg-primary rounded-full"
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
