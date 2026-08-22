"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function WhatWeBuildSection() {
  return (
    <section id="what-we-build" className="w-full py-20 sm:py-28 bg-background text-foreground border-b border-border transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
            What We Build
          </span>
          <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Systems, not staff hours.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
            We are hired to deliver a high-performance working system and keep it running smoothly &mdash; not to supply billable hours without accountability.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Business Platforms (Wide: span-2) */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-card border border-border/80 dark:border-white/10 p-8 sm:p-10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between min-h-[260px]">
            {/* Background Geometric Glyph */}
            <svg
              className="absolute -top-6 -right-6 w-48 h-48 opacity-10 dark:opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <rect x="14" y="14" width="72" height="18" rx="4" stroke="#2B5CFF" strokeWidth="2" />
              <rect x="14" y="41" width="72" height="18" rx="4" stroke="#C0703C" strokeWidth="2" />
              <rect x="14" y="68" width="72" height="18" rx="4" stroke="#3A4049" strokeWidth="2" />
            </svg>

            <div className="space-y-3 relative z-10 max-w-lg">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C]">
                Mission Critical Backbone
              </span>
              <h3 className="font-space text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                Business Platforms
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                ERP, CRM, HR, inventory telemetry, and internal operations systems &mdash; the unified digital backbone your entire team lives in all day.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-muted-foreground group-hover:text-foreground">
              <span>Next.js &middot; Odoo ERP &middot; PostgreSQL</span>
              <ArrowUpRight className="size-4 text-primary" />
            </div>
          </div>

          {/* Card 2: Customer Experiences */}
          <div className="group relative overflow-hidden rounded-3xl bg-card border border-border/80 dark:border-white/10 p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between min-h-[260px]">
            <svg
              className="absolute -top-4 -right-4 w-36 h-36 opacity-10 dark:opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <rect x="30" y="12" width="40" height="76" rx="7" stroke="#2B5CFF" strokeWidth="2" />
              <path d="M42 74h16" stroke="#C0703C" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <div className="space-y-3 relative z-10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                Touchpoints
              </span>
              <h3 className="font-space text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Customer Experiences
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Native apps, self-service portals, booking flows, and multi-tenant client interfaces.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-muted-foreground group-hover:text-foreground">
              <span>React Native &middot; Flutter</span>
              <ArrowUpRight className="size-4 text-primary" />
            </div>
          </div>

          {/* Card 3: Commerce */}
          <div className="group relative overflow-hidden rounded-3xl bg-card border border-border/80 dark:border-white/10 p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between min-h-[260px]">
            <svg
              className="absolute -top-4 -right-4 w-36 h-36 opacity-10 dark:opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <path d="M20 30h60l-7 46H27z" stroke="#2B5CFF" strokeWidth="2" />
              <path d="M38 30a12 12 0 0 1 24 0" stroke="#C0703C" strokeWidth="2" />
            </svg>

            <div className="space-y-3 relative z-10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C]">
                Monetization
              </span>
              <h3 className="font-space text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Commerce Engines
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Headless e-commerce, POS, marketplace checkout, and automated multi-currency payment rails.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-muted-foreground group-hover:text-foreground">
              <span>Stripe &middot; Mada &middot; Shopify</span>
              <ArrowUpRight className="size-4 text-primary" />
            </div>
          </div>

          {/* Card 4: Enterprise Systems */}
          <div className="group relative overflow-hidden rounded-3xl bg-card border border-border/80 dark:border-white/10 p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between min-h-[260px]">
            <svg
              className="absolute -top-4 -right-4 w-36 h-36 opacity-10 dark:opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r="9" stroke="#C0703C" strokeWidth="2" />
              <circle cx="22" cy="24" r="7" stroke="#2B5CFF" strokeWidth="2" />
              <circle cx="78" cy="24" r="7" stroke="#2B5CFF" strokeWidth="2" />
              <circle cx="22" cy="78" r="7" stroke="#2B5CFF" strokeWidth="2" />
              <circle cx="78" cy="78" r="7" stroke="#2B5CFF" strokeWidth="2" />
            </svg>

            <div className="space-y-3 relative z-10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                Integration
              </span>
              <h3 className="font-space text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Enterprise Systems
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Custom enterprise software, legacy migration, and zero-latency system-to-system microservices.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-muted-foreground group-hover:text-foreground">
              <span>Microservices &middot; REST &middot; GraphQL</span>
              <ArrowUpRight className="size-4 text-primary" />
            </div>
          </div>

          {/* Card 5: Intelligent Products */}
          <div className="group relative overflow-hidden rounded-3xl bg-card border border-border/80 dark:border-white/10 p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between min-h-[260px]">
            <svg
              className="absolute -top-4 -right-4 w-36 h-36 opacity-10 dark:opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <path d="M30 62V38l20-12 20 12v24L50 74z" stroke="#2B5CFF" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="50" cy="50" r="6" fill="#C0703C" />
            </svg>

            <div className="space-y-3 relative z-10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C]">
                Automation
              </span>
              <h3 className="font-space text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Intelligent Products
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Custom AI copilots, automated document extractors, vector embeddings, and agentic workflows.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-muted-foreground group-hover:text-foreground">
              <span>n8n &middot; OpenAI &middot; Vector DBs</span>
              <ArrowUpRight className="size-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeBuildSection;
