// Built using Hyperiux Vault: https://vault.hyperiux.com
"use client";

import {
  type CSSProperties,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* Inline stand-in for @gsap/react's useGSAP. Mirrors its default
   `revertOnUpdate: false`: one gsap.context lives for the component's
   lifetime, the callback is re-added when dependencies change, and the
   context is reverted only on unmount. A callback may return its own
   cleanup, which runs before the next re-add and on unmount. */
function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

const monthOrder = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
} as const;

export type Month = keyof typeof monthOrder;

export type JourneyItem = {
  id: string;
  year: string;
  month: Month | string;
  content: string;
  badge?: string;
  category?: string;
  metric?: string;
  metricLabel?: string;
  techs?: string[];
  link?: string;
  actionText?: string;
};

export type TimelineProps = {
  id?: string;
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  duration?: number;
  scrollDuration?: number;
  topData?: JourneyItem[];
  bottomData?: JourneyItem[];
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);

  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;

  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

const defaultTopJourneyData: JourneyItem[] = [
  {
    id: "2020-march",
    year: "2020",
    month: "March",
    content: "Signal research turns scattered notes into a clear product thesis",
  },
  {
    id: "2021-july",
    year: "2021",
    month: "July",
    content: "Founding release ships with the first live customer journeys",
  },
  {
    id: "2023-april",
    year: "2023",
    month: "April",
    content: "Automation layer connects insight, publishing, and sales motion",
  },
  {
    id: "2026-may",
    year: "2026",
    month: "May",
    content: "New markets open with localized launches and faster onboarding",
  },
];

const defaultBottomJourneyData: JourneyItem[] = [
  {
    id: "2020-november",
    year: "2020",
    month: "November",
    content: "Prototype sprint validates the experience with real operators",
  },
  {
    id: "2022-october",
    year: "2022",
    month: "October",
    content: "Community feedback reshapes the roadmap into sharper releases",
  },
  {
    id: "2025-september",
    year: "2025",
    month: "September",
    content: "Companion mobile workflows make the timeline travel-ready",
  },
];

export default function Timeline({
  id = "journey",
  title = "Product Storyline",
  periodLabel = "2020 — 2026",
  textColor = "currentColor",
  mutedTextColor = "var(--color-muted-foreground, #71717a)",
  activeColor = "#ff5f00",
  backgroundColor = "transparent",
  imageUrl = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Modern office workspace",
  topData = defaultTopJourneyData,
  bottomData = defaultBottomJourneyData,
}: TimelineProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const trackLineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
  };
  const activeStyle: CSSProperties = {
    backgroundColor: activeColor,
  };
  const activeTextStyle: CSSProperties = {
    color: activeColor,
  };
  const mutedTextStyle: CSSProperties = {
    color: mutedTextColor,
  };

  useGSAP(() => {
    const section = sectionRef.current;
    const slider = wholeSliderRef.current;
    const trackLine = trackLineRef.current;

    if (!section || !slider) return;

    const allItems = [...topData, ...bottomData];

    if (reducedMotion) {
      if (trackLine) gsap.set(trackLine, { width: "100%" });
      allItems.forEach((item) => {
        gsap.set(section.querySelectorAll(`.jl-${item.id}`), { scaleY: 1 });
        gsap.set(section.querySelectorAll(`.jd-${item.id}`), { scale: 1 });
        gsap.set(section.querySelectorAll(`.content-${item.id}`), { opacity: 1 });
      });
      return;
    }

    // Set initial element states
    if (trackLine) gsap.set(trackLine, { width: "0%" });
    allItems.forEach((item) => {
      const isTop = topData.some((t) => t.id === item.id);
      gsap.set(section.querySelectorAll(`.jl-${item.id}`), {
        scaleY: 0,
        transformOrigin: isTop ? "bottom center" : "top center",
      });
      gsap.set(section.querySelectorAll(`.jd-${item.id}`), { scale: 0.6 });
      gsap.set(section.querySelectorAll(`.content-${item.id}`), {
        opacity: 0.75,
        y: 0,
      });
    });

    const getDistance = () => Math.max(0, slider.scrollWidth - window.innerWidth + 160);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center center",
        end: () => `+=${getDistance()}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Horizontal slider track scrub
    tl.to(slider, {
      x: () => -getDistance(),
      ease: "none",
    }, 0);

    // Main horizontal glowing axis scrub
    if (trackLine) {
      tl.to(trackLine, {
        width: "100%",
        ease: "none",
      }, 0);
    }

    // Scrub milestone pins & texts in sequence as slider moves
    const totalCount = allItems.length;
    allItems.forEach((item, index) => {
      const startProgress = Math.min(0.85, (index / totalCount) * 0.9);
      const isTop = topData.some((t) => t.id === item.id);

      tl.to(
        section.querySelectorAll(`.jl-${item.id}`),
        {
          scaleY: 1,
          duration: 0.15,
          ease: "power2.out",
        },
        startProgress
      )
        .to(
          section.querySelectorAll(`.jd-${item.id}`),
          {
            scale: 1,
            duration: 0.12,
            ease: "back.out(2)",
          },
          startProgress + 0.05
        )
        .to(
          section.querySelectorAll(`.content-${item.id}`),
          {
            opacity: 1,
            y: 0,
            duration: 0.18,
            ease: "power2.out",
          },
          startProgress + 0.05
        );
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, { dependencies: [reducedMotion, topData, bottomData], scope: sectionRef });

  return (
    <div
      ref={sectionRef}
      id={id}
      className="relative w-full overflow-hidden flex flex-col justify-center select-none bg-background text-foreground py-10"
      style={sectionStyle}
    >
      {/* Horizontal Slider Area */}
      <div className="w-full relative flex items-center overflow-hidden py-6">
        <div
          ref={wholeSliderRef}
          className="flex items-center gap-16 px-10 will-change-transform"
          style={{ width: "max-content" }}
        >
          {/* Leading Showcase Card */}
          <div className="w-[360px] sm:w-[420px] h-[480px] rounded-3xl overflow-hidden shadow-2xl relative border border-border/80 dark:border-white/10 shrink-0 group bg-card">
            <img
              src={imageUrl}
              alt={imageAlt}
              draggable={false}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-7">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold mb-2">
                Featured Blueprint
              </span>
              <p className="font-space text-xl font-bold text-white leading-tight">
                Devolopy High-Velocity System Architecture
              </p>
              <p className="text-xs text-white/70 mt-2 line-clamp-2">
                Production-proven blueprints engineered for resilience, speed, and real enterprise scale.
              </p>
            </div>
          </div>

          {/* Central Milestones Container with Axis Line */}
          <div className="relative h-[620px] flex flex-col justify-between" style={{ width: "max-content" }}>
            {/* The Horizontal Line Track (Precisely Centered at 50%) */}
            <div className="w-full absolute left-0 top-1/2 -translate-y-1/2 flex items-center z-10 pointer-events-none">
              <div
                className="size-3 rounded-full shrink-0 shadow-lg ring-4 ring-background"
                style={activeStyle}
              />
              <div className="relative flex-1 h-[2px] bg-border/60 overflow-hidden mx-1">
                <div
                  ref={trackLineRef}
                  className="absolute left-0 top-0 bottom-0 w-0 rounded-full"
                  style={activeStyle}
                />
              </div>
              <div
                className="size-3 rounded-full shrink-0 shadow-lg ring-4 ring-background"
                style={activeStyle}
              />
            </div>

            {/* TOP ROW MILESTONES (Above Horizontal Axis) */}
            <div className="flex items-end gap-x-24 pl-6 pb-[60px] z-20">
              {/* Section Main Title Card */}
              <div className="w-[240px] shrink-0 pr-6 space-y-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary">
                  Interactive Track
                </span>
                <h3 className="font-space text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-[1.08]">
                  {title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block font-medium">
                  Scroll To Explore &rarr;
                </span>
              </div>

              {topData.map((item) => (
                <div
                  key={`top-${item.id}`}
                  className="relative w-[360px] shrink-0 p-6 rounded-2xl bg-card/90 dark:bg-card/75 border border-border/80 dark:border-white/10 shadow-lg backdrop-blur-md flex flex-col justify-between transition-all hover:border-primary/50"
                >
                  {/* Text / Card Content */}
                  <div className={`content-${item.id} space-y-3`}>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-space text-2xl font-black text-foreground tracking-tight leading-none">
                        {item.year}{" "}
                        <span style={mutedTextStyle} className="font-medium text-base ml-1">
                          {item.month}
                        </span>
                      </h4>
                      {item.badge && (
                        <span
                          className="inline-flex items-center text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-xs"
                          style={{
                            borderColor: `${activeColor}40`,
                            backgroundColor: `${activeColor}15`,
                            color: activeColor,
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {item.content}
                    </p>

                    {item.metric && (
                      <div className="pt-2 border-t border-border/50">
                        <span
                          className="font-space text-2xl font-black tracking-tight block"
                          style={activeTextStyle}
                        >
                          {item.metric}
                        </span>
                        {item.metricLabel && (
                          <span className="text-[11px] font-mono text-muted-foreground block font-medium">
                            {item.metricLabel}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Vertical Connector Line from Card Down to Center Axis Dot */}
                  <div className="absolute left-10 bottom-[-60px] h-[60px] flex flex-col items-center">
                    <div
                      className={`h-full w-[2px] jl-${item.id}`}
                      style={activeStyle}
                    />
                    <div
                      className={`size-3.5 rounded-full jd-${item.id} -translate-y-1.5 shadow-md ring-4 ring-background`}
                      style={activeStyle}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM ROW MILESTONES (Below Horizontal Axis) */}
            <div className="flex items-start gap-x-24 pl-6 pt-[60px] z-20">
              {/* Period Label Badge */}
              <div className="w-[240px] shrink-0 pr-6 pt-3">
                <span className="font-mono text-xs tracking-wider font-semibold px-3 py-1.5 rounded-full border border-border/80 bg-muted/40 text-muted-foreground inline-block">
                  {periodLabel}
                </span>
              </div>

              {bottomData.map((item) => (
                <div
                  key={`bottom-${item.id}`}
                  className="relative w-[360px] shrink-0 p-6 rounded-2xl bg-card/90 dark:bg-card/75 border border-border/80 dark:border-white/10 shadow-lg backdrop-blur-md flex flex-col justify-between transition-all hover:border-primary/50"
                >
                  {/* Vertical Connector Line from Center Axis Dot Down to Card */}
                  <div className="absolute left-10 top-[-60px] h-[60px] flex flex-col items-center">
                    <div
                      className={`size-3.5 rounded-full jd-${item.id} translate-y-[-7px] shadow-md ring-4 ring-background`}
                      style={activeStyle}
                    />
                    <div
                      className={`h-full w-[2px] jl-${item.id}`}
                      style={activeStyle}
                    />
                  </div>

                  {/* Text / Card Content */}
                  <div className={`content-${item.id} space-y-3`}>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-space text-2xl font-black text-foreground tracking-tight leading-none">
                        {item.year}{" "}
                        <span style={mutedTextStyle} className="font-medium text-base ml-1">
                          {item.month}
                        </span>
                      </h4>
                      {item.badge && (
                        <span
                          className="inline-flex items-center text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-xs"
                          style={{
                            borderColor: `${activeColor}40`,
                            backgroundColor: `${activeColor}15`,
                            color: activeColor,
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {item.content}
                    </p>

                    {item.metric && (
                      <div className="pt-2 border-t border-border/50">
                        <span
                          className="font-space text-2xl font-black tracking-tight block"
                          style={activeTextStyle}
                        >
                          {item.metric}
                        </span>
                        {item.metricLabel && (
                          <span className="text-[11px] font-mono text-muted-foreground block font-medium">
                            {item.metricLabel}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

