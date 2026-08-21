"use client";

import React from "react";
import DotPattern from "@/components/ui/dot-pattern-1";
import { Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function DevolopyBelieve() {
  return (
    <section
      id="manifesto"
      aria-label="Devolopy Core Philosophy"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative flex flex-col items-start sm:items-center border border-primary/40 dark:border-primary/50 bg-card/60 dark:bg-card/40 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 lg:p-20 shadow-2xl overflow-hidden">
          {/* Subtle Dot Pattern Background */}
          <DotPattern
            width={20}
            height={20}
            cx={1.5}
            cy={1.5}
            cr={1}
            className="fill-primary/20 dark:fill-primary/25"
          />

          {/* Architectural corner markers */}
          <div className="absolute -left-1.5 -top-1.5 h-3.5 w-3.5 bg-primary text-white shadow-sm" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3.5 w-3.5 bg-primary text-white shadow-sm" />
          <div className="absolute -right-1.5 -top-1.5 h-3.5 w-3.5 bg-primary text-white shadow-sm" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 bg-primary text-white shadow-sm" />

          {/* Content Block */}
          <div className="relative z-20 w-full max-w-4xl space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-primary" />
              <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-primary font-bold flex items-center gap-1.5">
                <Zap className="size-3.5" /> Devolopy Believes
              </p>
            </div>

            <div className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.08] text-foreground">
              <div className="flex flex-wrap gap-x-2 sm:gap-x-4 items-baseline">
                <span className="font-bold text-foreground">&ldquo;Design should be</span>
                <span className="font-light text-muted-foreground">easy to</span>
              </div>
              <div className="flex flex-wrap gap-x-2 sm:gap-x-4 items-baseline">
                <span className="font-light text-muted-foreground">understand</span>
                <span className="font-bold text-foreground">because</span>
                <span className="font-light text-muted-foreground">simple</span>
              </div>
              <div className="flex flex-wrap gap-x-2 sm:gap-x-4 items-baseline">
                <span className="font-light text-muted-foreground">ideas</span>
                <span className="font-bold text-foreground">are quicker to</span>
              </div>
              <div>
                <span className="font-bold text-primary">grasp...&rdquo;</span>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
                We craft clarity from complexity. Every web application, ERP workflow, and digital interface is engineered to be intuitive, fast, and remarkably effective.
              </p>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
              >
                <span>Partner with Devolopy</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevolopyBelieve;
