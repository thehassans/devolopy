"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Smartphone,
  Cloud,
  Globe,
  Database,
  Bot,
  Layout,
  ShoppingCart,
  LineChart,
  CheckCircle2,
} from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  category: string;
  tagline: string;
  desc: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  techs: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: "mobile-app",
    num: "01",
    title: "Mobile App Development",
    category: "iOS & Android",
    tagline: "High-performance native & cross-platform apps",
    desc: "We build intuitive mobile apps designed for high daily retention, offline data synchronization, and frictionless biometric checkout.",
    slug: "mobile-app-development",
    icon: Smartphone,
    features: ["Sub-second 60 FPS UI", "Biometric Auth & Local Encrypted DB", "Push Notification Pipelines"],
    techs: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    id: "cloud-infra",
    num: "02",
    title: "Cloud Infrastructure & DevOps",
    category: "Cloud Architecture",
    tagline: "Zero-downtime, scalable AWS & Docker systems",
    desc: "Bespoke cloud orchestration engineered for 99.99% uptime, automated CI/CD deployment pipelines, and proactive security monitoring.",
    slug: "cloud-devops-architecture",
    icon: Cloud,
    features: ["Automated CI/CD Pipelines", "Kubernetes Auto-Scaling", "DDoS & WAF Protection"],
    techs: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    id: "web-dev",
    num: "03",
    title: "Web Platform Development",
    category: "Full-Stack Web",
    tagline: "Enterprise Next.js platforms with sub-second speed",
    desc: "Custom web applications and client portals crafted with Next.js 15, React 19, and TypeScript for high search engine visibility and conversion.",
    slug: "website-development",
    icon: Globe,
    features: ["Server-Side Rendering (SSR)", "Sub-Second Page Loads", "Technical SEO Architecture"],
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "ui-ux-design",
    num: "04",
    title: "Product Experience Design",
    category: "UI/UX & Systems",
    tagline: "Design systems engineered for conversion",
    desc: "User research, interactive wireframing, high-fidelity clickable prototypes, and Figma design token systems built for frictionless developer handoff.",
    slug: "ui-ux-design-systems",
    icon: Layout,
    features: ["Design Token Architecture", "Clickable High-Fi Prototypes", "WCAG 2.1 AA Accessibility"],
    techs: ["Figma", "Design Tokens", "Wireframing", "WCAG"],
  },
  {
    id: "odoo-erp",
    num: "05",
    title: "Odoo & ERP Systems",
    category: "Enterprise Operations",
    tagline: "Full-scale Odoo 18 & ZATCA e-invoicing",
    desc: "Complete enterprise ERP implementations, custom Python modules, accounting workflows, multi-store POS, and certified ZATCA Phase 2 compliance.",
    slug: "odoo-development",
    icon: Database,
    features: ["ZATCA Phase 2 E-Invoicing", "Custom Python Business Modules", "Multi-Branch Inventory Sync"],
    techs: ["Odoo 18", "Python", "ZATCA Phase 2", "PostgreSQL"],
  },
  {
    id: "ai-automation",
    num: "06",
    title: "AI & Autonomous Workflows",
    category: "Agentic AI & n8n",
    tagline: "Practical AI copilots & document intelligence",
    desc: "Custom AI assistants, automated n8n business pipelines, OCR document extractors, and domain-specific vector search embeddings.",
    slug: "ai-agentic-automation",
    icon: Bot,
    features: ["n8n Multi-App Orchestration", "Local RAG Vector Embeddings", "Automated OCR & Data Extraction"],
    techs: ["n8n", "OpenAI GPT-4o", "Claude 3.5", "pgvector"],
  },
  {
    id: "ecommerce",
    num: "07",
    title: "E-Commerce Solutions",
    category: "Headless Commerce",
    tagline: "Custom checkout engines & multi-currency rails",
    desc: "High-throughput headless storefronts, custom checkout funnels, automated inventory synchronization, and localized payment rails with Mada and Stripe.",
    slug: "e-commerce-solutions",
    icon: ShoppingCart,
    features: ["Headless Checkout Funnel", "Mada & Stripe Integration", "Real-Time Stock Synchronization"],
    techs: ["Shopify Plus", "Stripe", "Mada", "Redis"],
  },
  {
    id: "data-analytics",
    num: "08",
    title: "Data & Telemetry Analytics",
    category: "Business Intelligence",
    tagline: "Real-time reporting & business intelligence",
    desc: "Transform transactional database logs into real-time operational intelligence with high-throughput streaming pipelines and executive KPI dashboards.",
    slug: "custom-crm-client-portals",
    icon: LineChart,
    features: ["Real-Time Telemetry Streaming", "Executive KPI Dashboards", "Automated Ledger Reconciliations"],
    techs: ["PostgreSQL", "Redis", "GraphQL", "Python"],
  },
];

export function WhatWeDoSection() {
  const { openConsultation } = useConsultation();
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="w-full py-20 sm:py-28 bg-background text-foreground border-b border-border transition-colors duration-300 relative"
    >
      {/* Anchor for #solutions */}
      <div id="solutions" className="absolute -top-24 left-0" />

      {/* Atmospheric Ambient Lighting Wrapper (Overflow Clipped Locally) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-10 w-[550px] h-[450px] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[400px] bg-[#C0703C]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: Left Column Truly Sticky / Right Column Scrolling Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start relative">
          {/* =========================================================
              LEFT COLUMN: Truly Sticky Header & Floating CTA Card
             ========================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-8 z-20">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20 shadow-xs">
                <span className="size-2 rounded-full bg-[#C0703C] animate-pulse" />
                Reimagining Brands with Technology
              </span>

              <h2 className="font-space text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-foreground leading-[1.1]">
                Top-Notch Software Development Services
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                From <strong>full-cycle custom software development</strong> to <strong>product experience design</strong> and <strong>enterprise cloud systems</strong>, we engineer solutions that power measurable business growth.
              </p>
            </div>

            {/* Value Guarantees Checklist */}
            <div className="p-5 rounded-2xl bg-card border border-border/80 dark:border-white/10 shadow-xs space-y-3">
              <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <div className="size-5 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-3.5" />
                </div>
                <span>100% Full Source Code &amp; IP Ownership</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <div className="size-5 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-3.5" />
                </div>
                <span>Senior Dedicated Engineers &mdash; No Junior Pools</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <div className="size-5 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-3.5" />
                </div>
                <span>Milestone-Based Transparent Delivery Sprints</span>
              </div>
            </div>

            {/* Bespoke "Have a project?" CTA Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-card via-card to-primary/10 border-2 border-primary/40 shadow-xl relative overflow-hidden group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C0703C]">
                    Ready to Build?
                  </span>
                  <h3 className="font-space text-2xl font-bold text-foreground">
                    Have a project?
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Direct access to senior solutions architects.
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
              RIGHT COLUMN: Ultra-Premium Luxury Cards (2 Columns)
             ========================================================= */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {servicesData.map((svc) => {
                const Icon = svc.icon;
                const isHovered = activeCard === svc.id;
                return (
                  <div
                    key={svc.id}
                    onMouseEnter={() => setActiveCard(svc.id)}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-card border transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl dark:shadow-2xl backdrop-blur-md ${
                      isHovered
                        ? "border-primary ring-1 ring-primary/40"
                        : "border-border/90 dark:border-white/10"
                    }`}
                  >
                    <div>
                      {/* Top Row: Icon + Number & Category */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="size-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center shadow-xs">
                          <Icon className="size-6" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-[#C0703C] uppercase tracking-wider bg-[#C0703C]/10 px-2.5 py-1 rounded-full border border-[#C0703C]/20">
                            {svc.category}
                          </span>
                          <span className="font-mono text-xs font-bold text-muted-foreground/60">
                            {svc.num}
                          </span>
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="font-space text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {svc.title}
                      </h3>
                      <p className="text-xs font-mono font-semibold text-[#C0703C] mt-1 mb-3">
                        {svc.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {svc.desc}
                      </p>

                      {/* Key Engineering Features */}
                      <div className="space-y-2 mb-6 pt-4 border-t border-border/60 dark:border-white/10">
                        {svc.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                            <span className="size-1.5 rounded-full bg-primary shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {svc.techs.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Details Action Button */}
                    <div className="pt-4 border-t border-border/60 dark:border-white/10">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-semibold text-xs uppercase tracking-wider transition-all duration-200 group/btn shadow-xs"
                      >
                        <span>Explore Architecture</span>
                        <ArrowUpRight className="size-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
