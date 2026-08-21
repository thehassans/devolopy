"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface TrustedShowcaseProps {
  title?: string;
  className?: string;
}

export function TrustedShowcase({
  title = "Trusted by high-growth startups and enterprise teams.",
  className,
}: TrustedShowcaseProps) {
  return (
    <section className={cn("w-full py-16 px-4 sm:px-6 lg:px-8 bg-background text-foreground", className)}>
      <div className="max-w-6xl mx-auto space-y-8">
        <p className="font-space text-2xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent max-w-2xl leading-tight">
          {title}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center justify-center">
          <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
              alt="Analytics Dashboard Showcase"
              className="w-full h-64 sm:h-72 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="pt-4 flex items-center justify-between text-xs font-mono text-muted-foreground">
              <span>Telemetry & Performance Engine</span>
              <span className="text-primary font-bold">100% SLA</span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="Team Collaboration Showcase"
              className="w-full h-64 sm:h-72 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="pt-4 flex items-center justify-between text-xs font-mono text-muted-foreground">
              <span>Enterprise Permissions & RBAC</span>
              <span className="text-emerald-500 font-bold">Zero Trust</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedShowcase;
