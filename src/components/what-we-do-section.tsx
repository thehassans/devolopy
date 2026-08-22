"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Cloud,
  Globe,
  Database,
  Bot,
  Layout,
  ShoppingCart,
  LineChart,
  Users,
  ShieldCheck,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

interface ServiceCard {
  title: string;
  category: string;
  desc: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  techs: string[];
  isOffset?: boolean;
}

const serviceCards: ServiceCard[] = [
  {
    title: "Mobile App Development",
    category: "iOS & Android",
    desc: "We engineer native and cross-platform mobile apps utilizing React Native and Flutter with offline sync, sub-second latency, and fluid 60 FPS animations.",
    slug: "mobile-app-development",
    icon: Smartphone,
    techs: ["Flutter", "React Native", "Swift", "Kotlin"],
    isOffset: false,
  },
  {
    title: "Cloud Infrastructure",
    category: "DevOps & AWS",
    desc: "Scalable, secure, and cost-efficient cloud architecture on AWS and Docker containers with automated CI/CD pipelines and 99.99% high-availability uptime.",
    slug: "cloud-devops-architecture",
    icon: Cloud,
    techs: ["AWS", "Docker", "Kubernetes", "Vercel"],
    isOffset: true, // Staggered downward for high-end masonry layout
  },
  {
    title: "Web Platform Development",
    category: "Next.js & Full-Stack",
    desc: "Enterprise web platforms and high-conversion portals crafted with Next.js 15, React, and TypeScript for world-class speed, security, and top SEO rankings.",
    slug: "website-development",
    icon: Globe,
    techs: ["Next.js", "React", "TypeScript", "Tailwind"],
    isOffset: false,
  },
  {
    title: "Product Experience Design",
    category: "UI/UX & Design Systems",
    desc: "Creative UI/UX architectures, user journey mapping, high-fidelity interactive prototypes, and scalable Figma design token systems that maximize conversion.",
    slug: "ui-ux-design-systems",
    icon: Layout,
    techs: ["Figma", "Design Tokens", "Wireframing", "WCAG AA"],
    isOffset: true,
  },
  {
    title: "Odoo & ERP Systems",
    category: "Enterprise Operations",
    desc: "Full-scale Odoo 17/18 implementation, custom Python business modules, multi-branch POS, financial accounting, and official ZATCA Phase 2 e-invoicing.",
    slug: "odoo-development",
    icon: Database,
    techs: ["Odoo 18", "Python", "ZATCA Phase 2", "PostgreSQL"],
    isOffset: false,
  },
  {
    title: "AI & Autonomous Workflows",
    category: "Agentic AI & n8n",
    desc: "Practical enterprise AI copilots, intelligent OCR document processors, localized vector RAG systems, and automated n8n business pipelines.",
    slug: "ai-agentic-automation",
    icon: Bot,
    techs: ["n8n", "OpenAI GPT-4o", "Claude 3.5", "pgvector"],
    isOffset: true,
  },
  {
    title: "E-Commerce Solutions",
    category: "Headless Commerce",
    desc: "Headless storefronts, custom checkout funnels, automated inventory synchronization, and localized payment gateway rails with Stripe and Mada.",
    slug: "e-commerce-solutions",
    icon: ShoppingCart,
    techs: ["Shopify Plus", "Stripe", "Mada", "Redis"],
    isOffset: false,
  },
  {
    title: "Data & Telemetry Analytics",
    category: "Business Intelligence",
    desc: "Transform raw transactional records into real-time operational intelligence with high-throughput database pipelines and custom executive dashboards.",
    slug: "custom-crm-client-portals",
    icon: LineChart,
    techs: ["PostgreSQL", "Redis", "GraphQL", "Python"],
    isOffset: true,
  },
];

export function WhatWeDoSection() {
  const { openConsultation } = useConsultation();

  return (
    <section
      id="services"
      className="w-full py-24 sm:py-32 bg-background text-foreground border-b border-border transition-colors duration-300 relative overflow-hidden"
    >
      {/* Target anchor for #solutions */}
      <div id="solutions" className="absolute -top-24 left-0" />

      {/* Atmospheric Mesh Lighting */}
      <div
        className="pointer-events-none absolute top-1/4 left-10 w-[550px] h-[450px] bg-primary/10 blur-[150px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-10 w-[500px] h-[400px] bg-[#C0703C]/10 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* =========================================================
              LEFT COLUMN: Sticky Title, Value Proposition & CTA Card
             ========================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20 shadow-xs">
                <span className="size-2 rounded-full bg-[#C0703C] animate-pulse" />
                Reimagining Brands with Technology
              </span>

              <h2 className="font-space text-4xl sm:text-5xl lg:text-[50px] font-extrabold tracking-tight text-foreground leading-[1.08]">
                Top-Notch Software Development Services
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pt-2">
                From <strong>full-cycle software development</strong> to <strong>product experience design</strong> and <strong>technology consulting</strong>, we engineer the systems that power your business growth.
              </p>
            </div>

            {/* Value Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                <CheckCircle2 className="size-4 text-primary shrink-0" />
                <span>100% Full Source Code &amp; IP Ownership</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                <CheckCircle2 className="size-4 text-primary shrink-0" />
                <span>Senior Dedicated Engineers &mdash; No Rotating Pools</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                <CheckCircle2 className="size-4 text-primary shrink-0" />
                <span>Milestone-Based Transparent Delivery Sprints</span>
              </div>
            </div>

            {/* Luxury "Have a project?" CTA Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-card border-2 border-border dark:border-white/15 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              {/* Background subtle gradient sheen */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#C0703C]/5 group-hover:from-primary/10 transition-colors pointer-events-none" />

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <h3 className="font-space text-2xl font-bold text-foreground">
                    Have a project?
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Talk directly with our solutions architects.
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
              RIGHT COLUMN: Staggered Masonry Grid of Ultra-Premium Cards
             ========================================================= */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {serviceCards.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-card border border-border/80 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl dark:shadow-2xl backdrop-blur-md ${
                      service.isOffset ? "sm:translate-y-6" : ""
                    }`}
                  >
                    <div>
                      {/* Top Bar: Icon + Category Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="size-13 rounded-2xl bg-secondary dark:bg-white/5 border border-border dark:border-white/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center shadow-xs">
                          <Icon className="size-6" />
                        </div>
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 px-2.5 py-1 rounded-full border border-[#C0703C]/20">
                          {service.category}
                        </span>
                      </div>

                      {/* Service Title */}
                      <h3 className="font-space text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mt-3.5 leading-relaxed">
                        {service.desc}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {service.techs.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button: Read More / View Details */}
                    <div className="pt-6 mt-6 border-t border-border/60 dark:border-white/10">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-semibold text-xs uppercase tracking-wider transition-all duration-200 group/btn shadow-xs"
                      >
                        <span>View Details</span>
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
