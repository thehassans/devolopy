"use client";

import React from "react";
import { MessageSquareQuote, Sparkles } from "lucide-react";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full py-20 sm:py-28 bg-background text-foreground border-b border-border transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[300px] bg-primary/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/4 w-[500px] h-[300px] bg-[#C0703C]/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
            <MessageSquareQuote className="size-3.5" />
            <span>Client Feedback &middot; Social Proof</span>
          </span>
          <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Trusted by teams moving at high velocity.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            From venture-backed startups to enterprise operations across the GCC and globally, see how businesses scale with Devolopy engineering.
          </p>
        </div>

        {/* Interactive Stagger Testimonials Carousel */}
        <div className="rounded-3xl border border-border/80 dark:border-white/10 bg-card/40 backdrop-blur-md shadow-lg overflow-hidden">
          <StaggerTestimonials />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
