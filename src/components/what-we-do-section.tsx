"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Smartphone,
  Cloud,
  Globe,
  RefreshCw,
  Bot,
  ShoppingBag,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

// Clean professional concentric design icon
function ConcentricDesignIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

interface ServiceCardItem {
  id: string;
  title: string;
  desc: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  isOffset?: boolean;
}

const serviceList: ServiceCardItem[] = [
  {
    id: "mobile-app",
    title: "Mobile App Development",
    desc: "We create mobile apps utilizing cutting-edge development tools like React Native and Flutter. End products are always top-notch applications that are fast, adaptable, and user-friendly.",
    slug: "mobile-app-development",
    icon: Smartphone,
    isOffset: false,
  },
  {
    id: "cloud-infra",
    title: "Cloud Infrastructure",
    desc: "We offer cloud infrastructure services that enable you to host your website, applications, and data in the cloud with zero downtime, automated scaling, and proactive telemetry.",
    slug: "cloud-devops-architecture",
    icon: Cloud,
    isOffset: true, // Clean staggered luxury masonry offset
  },
  {
    id: "web-dev",
    title: "Web Development",
    desc: "Crafting websites that cater to the specific needs of our clients. We employ the latest technologies, such as Next.js 15, React, and TypeScript, to create high-quality platforms that are fast, responsive, and SEO-optimized.",
    slug: "website-development",
    icon: Globe,
    isOffset: false,
  },
  {
    id: "ui-ux",
    title: "Product Experience Design",
    desc: "We specialize in UI/UX architecture and design systems that transform complex user journeys into intuitive, engaging, and high-converting digital product experiences.",
    slug: "ui-ux-design-systems",
    icon: ConcentricDesignIcon,
    isOffset: true,
  },
  {
    id: "erp",
    title: "Odoo & ERP Systems",
    desc: "Comprehensive enterprise ERP implementation, custom Python modules, inventory tracking, multi-branch POS, and certified ZATCA Phase 2 e-invoicing compliance.",
    slug: "odoo-development",
    icon: RefreshCw,
    isOffset: false,
  },
  {
    id: "ai",
    title: "AI & Autonomous Automation",
    desc: "Practical AI copilots, intelligent OCR document processors, localized vector RAG search, and automated n8n business workflows that reduce manual overhead.",
    slug: "ai-agentic-automation",
    icon: Bot,
    isOffset: true,
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    desc: "Headless storefronts, custom checkout funnels, automated inventory synchronization, and localized payment rails with Mada and Stripe.",
    slug: "e-commerce-solutions",
    icon: ShoppingBag,
    isOffset: false,
  },
  {
    id: "analytics",
    title: "Data & Telemetry Analytics",
    desc: "Transform raw database records into actionable real-time operational intelligence with high-throughput pipelines and live executive KPI dashboards.",
    slug: "custom-crm-client-portals",
    icon: BarChart3,
    isOffset: true,
  },
];

export function WhatWeDoSection() {
  const { openConsultation } = useConsultation();

  return (
    <section
      id="services"
      className="w-full py-24 sm:py-32 bg-background text-foreground border-b border-border transition-colors duration-300 relative"
    >
      {/* Anchor for #solutions */}
      <div id="solutions" className="absolute -top-24 left-0" />

      {/* Atmospheric Ambient Lighting Wrapper */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-10 w-[550px] h-[450px] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[400px] bg-[#C0703C]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start relative">
          {/* =========================================================
              LEFT COLUMN: Sticky Header & "Have a project?" Card
             ========================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-8 z-20">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20 shadow-xs">
                <span className="size-2 rounded-full bg-[#C0703C] animate-pulse" />
                Reimagining Brands with
              </span>

              <h2 className="font-space text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-foreground leading-[1.06]">
                Top-Notch Software Development Service
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                From <strong>Full Cycle Software development</strong> to <strong>Product Experience Design</strong> and <strong>Technology Consulting Services</strong>, We Help You Succeed!
              </p>
            </div>

            {/* Core Value Highlights */}
            <div className="p-5 rounded-2xl bg-card border border-border/80 dark:border-white/10 shadow-xs space-y-3">
              <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <CheckCircle2 className="size-4 text-primary shrink-0" />
                <span>100% Full Source Code &amp; IP Ownership</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <CheckCircle2 className="size-4 text-primary shrink-0" />
                <span>Senior Dedicated Engineers &mdash; No Junior Pools</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <CheckCircle2 className="size-4 text-primary shrink-0" />
                <span>Milestone-Based Transparent Delivery Sprints</span>
              </div>
            </div>

            {/* Luxury "Have a project?" CTA Card */}
            <div className="p-7 rounded-3xl bg-card border-2 border-border/90 dark:border-white/15 shadow-xl relative overflow-hidden group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative z-10">
                <div>
                  <h3 className="font-space text-2xl font-bold text-foreground">
                    Have a project?
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    Talk directly with our lead architects.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openConsultation("custom-software")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200 hover:scale-[1.03] shrink-0 cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Ultra-Clean Professional Service Cards
             ========================================================= */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {serviceList.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.id}
                    className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-card border border-border/80 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl dark:shadow-2xl backdrop-blur-md ${
                      svc.isOffset ? "sm:translate-y-8" : ""
                    }`}
                  >
                    <div>
                      {/* Clean Standalone Outline Icon */}
                      <div className="text-foreground/90 group-hover:text-primary transition-colors duration-300 mb-6">
                        <Icon className="size-7 stroke-[1.75]" />
                      </div>

                      {/* Title */}
                      <h3 className="font-space text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-3">
                        {svc.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>

                    {/* Action Button: Read more */}
                    <div className="pt-6 mt-6">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-foreground/30 dark:border-white/20 hover:border-primary hover:bg-primary hover:text-primary-foreground text-foreground font-semibold text-xs transition-all duration-200 group/btn cursor-pointer shadow-xs"
                      >
                        <span>Read more</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
