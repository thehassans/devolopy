"use client";

import React from "react";
import { HeroCarousel, type HeroCarouselItem } from "@/components/ui/hero-carousel";
import { ArrowUpRight } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

const caseStudies: HeroCarouselItem[] = [
  {
    id: "nawa-fleet",
    title: "Nawa Logistics Telematics OS",
    client: "Nawa Transport GCC",
    category: "Logistics & Fleet",
    desc: "Custom fleet dispatcher mobile application with live GPS geofencing, sub-second route telemetry, and automated driver SMS alerts.",
    impact: "1,200+ Fleet Vehicles Tracked with 99.99% Uptime",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    accent: "#2B5CFF",
    meta: ["Flutter Driver App", "Live GPS Geofencing", "WhatsApp Bot"],
    techs: ["Flutter", "FastAPI", "PostgreSQL", "Redis", "AWS IoT"],
  },
  {
    id: "tamkin-pos",
    title: "Tamkin Multi-Branch ERP & POS",
    client: "Tamkin Retail Group",
    category: "Commerce & Retail",
    desc: "Enterprise Odoo 18 implementation syncing 42 physical branch POS stations with real-time stock replenishment and ZATCA Phase 2 e-invoicing.",
    impact: "$48M+ Annual GMV Synced with Zero Downtime",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    accent: "#C0703C",
    meta: ["42 Branches", "ZATCA Phase 2", "Odoo 18"],
    techs: ["Odoo 18", "Python", "PostgreSQL", "Docker", "ZATCA"],
  },
  {
    id: "cura-health",
    title: "Cura Health Patient & EHR Portal",
    client: "Cura Medical Centers",
    category: "Healthcare & Clinics",
    desc: "HIPAA-ready digital health platform uniting electronic health records (EHR), multi-doctor scheduling, and automated patient WhatsApp reminders.",
    impact: "98% Reduction in Patient Appointment No-Shows",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    accent: "#10B981",
    meta: ["EHR Sync", "Doctor Scheduler", "Telehealth"],
    techs: ["Next.js 15", "Node.js", "PostgreSQL", "HIPAA Vault", "Twilio"],
  },
  {
    id: "souq-plus",
    title: "SouqPlus Headless Storefront",
    client: "SouqPlus E-Commerce",
    category: "Headless Commerce",
    desc: "Sub-second Next.js headless storefront with 1-click Mada and Stripe checkout, real-time stock sync, and localized Arabic/English interfaces.",
    impact: "+64% Mobile Checkout Conversion Rate Lift",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    accent: "#8B5CF6",
    meta: ["0.4s FCP Speed", "Mada / Stripe", "Shopify Plus"],
    techs: ["Next.js 15", "Shopify Plus", "Stripe", "Tailwind CSS", "Redis"],
  },
  {
    id: "autoflow-ai",
    title: "AutoFlow Autonomous Document AI",
    client: "FinLease Financial",
    category: "AI & Automation",
    desc: "Intelligent document synthesis engine parsing multi-page supplier invoices and bank PDF statements with localized pgvector RAG search.",
    impact: "Zero Manual Data Entry across 85,000+ Monthly Invoices",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    accent: "#EC4899",
    meta: ["n8n Pipeline", "Claude 3.5 Sonnet", "pgvector"],
    techs: ["n8n", "OpenAI GPT-4o", "Claude 3.5", "pgvector", "Python"],
  },
];

export function SelectedWorkSection() {
  const { openConsultation } = useConsultation();

  return (
    <section
      id="selected-work"
      className="w-full py-20 sm:py-28 bg-background text-foreground border-b border-border transition-colors duration-300 relative"
    >
      {/* Subtle background ambient mesh */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 blur-[160px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20 shadow-xs">
              <span className="size-2 rounded-full bg-[#C0703C] animate-pulse" />
              Selected Work &amp; Case Studies
            </span>
            <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Engineered for measurable business impact.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
              Explore how we design, build, and deploy production systems that eliminate bottlenecks and drive revenue.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openConsultation("custom-software")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-semibold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer self-start md:self-end border border-border shadow-xs group"
          >
            <span>Start Your Build</span>
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Ultra-Premium Editorial Filmstrip Showcase */}
        <div className="w-full">
          <HeroCarousel
            items={caseStudies}
            defaultIndex={0}
            autoplay={true}
            autoplayDelay={5500}
          />
        </div>
      </div>
    </section>
  );
}

export default SelectedWorkSection;
