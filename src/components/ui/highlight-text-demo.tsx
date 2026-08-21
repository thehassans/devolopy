"use client";

import React from "react";
import { HighlightText } from "@/components/ui/highlight-text";
import { Sparkles, ArrowRight, Zap, Code2 } from "lucide-react";
import Link from "next/link";
import { useConsultation } from "@/components/consultation-modal";

export function HighlightTextDemo() {
  const { openConsultation } = useConsultation();

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-background via-secondary/20 to-background border-y border-border relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
          <Zap className="size-3.5" /> High-Impact Engineering
        </div>

        <h2 className="font-space text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.2] max-w-4xl mx-auto">
          Build interfaces that feel{" "}
          <HighlightText variant="lime">effortless</HighlightText> and stay{" "}
          <HighlightText variant="yellow">delightful</HighlightText> for every{" "}
          <HighlightText variant="cyan">enterprise</HighlightText>{" "}
          <HighlightText variant="pink">user</HighlightText>.
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          From micro-interactions to distributed architectures, Devolopy delivers ultra-high-velocity digital experiences tailored for market leaders.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => openConsultation("website-development")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all cursor-pointer"
          >
            <span>Start Your Build</span>
            <ArrowRight className="size-4" />
          </button>

          <Link
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-secondary/80 hover:bg-secondary text-foreground font-semibold text-sm sm:text-base border border-border transition-all"
          >
            <Code2 className="size-4 text-primary" />
            <span>Explore Stack</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HighlightTextDemo;
