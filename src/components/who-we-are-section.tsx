"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Award, Users } from "lucide-react";

export function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState({ projects: 0, years: 0, clients: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1400;
          const start = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              projects: Math.round(18 * easeOut),
              years: Math.round(5 * easeOut),
              clients: Math.round(12 * easeOut),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-20 sm:py-28 bg-[#0E1013] text-[#F5F6F7] border-b border-white/10 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 w-[500px] h-[300px] bg-primary/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Positioning Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
              Who We Are
            </span>
            <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Technology built around how your business actually works.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              Most software fails because it was designed around a demo, not around the people who use it every day.
              We start with the workflow &mdash; who does what, where it breaks, what it costs when it breaks &mdash; and build from there.
            </p>
            <p>
              Strategy, design, engineering and support sit in one team. You talk directly to the people building your system,
              not to an account manager relaying filtered messages.
            </p>
            <div className="pt-2">
              <Link
                href="#how-we-work"
                className="inline-flex items-center gap-2 font-space font-semibold text-primary hover:text-primary/80 transition-colors group"
              >
                <span>More about how we work</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Live Count-Up Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between text-slate-400 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider">Metric // 01</span>
              <TrendingUp className="size-5 text-[#C0703C]" />
            </div>
            <div className="font-space text-5xl sm:text-6xl font-black text-white tracking-tight">
              {counts.projects}
              <span className="text-[#C0703C]">+</span>
            </div>
            <div className="text-base font-semibold text-slate-200 mt-2">Projects delivered</div>
            <div className="text-xs font-mono text-[#C0703C]/80 mt-1 uppercase tracking-wider">
              Production Verified
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between text-slate-400 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider">Metric // 02</span>
              <Award className="size-5 text-[#2B5CFF]" />
            </div>
            <div className="font-space text-5xl sm:text-6xl font-black text-white tracking-tight">
              {counts.years}
              <span className="text-[#2B5CFF]">+</span>
            </div>
            <div className="text-base font-semibold text-slate-200 mt-2">Years building software</div>
            <div className="text-xs font-mono text-[#2B5CFF]/80 mt-1 uppercase tracking-wider">
              Engineering Depth
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between text-slate-400 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider">Metric // 03</span>
              <Users className="size-5 text-[#C0703C]" />
            </div>
            <div className="font-space text-5xl sm:text-6xl font-black text-white tracking-tight">
              {counts.clients}
              <span className="text-[#C0703C]">+</span>
            </div>
            <div className="text-base font-semibold text-slate-200 mt-2">Clients served</div>
            <div className="text-xs font-mono text-[#C0703C]/80 mt-1 uppercase tracking-wider">
              GCC &amp; Global Partners
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
