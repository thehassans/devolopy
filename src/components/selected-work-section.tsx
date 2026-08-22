"use client";

import React from "react";
import { HeroCarousel, type HeroCarouselItem } from "@/components/ui/hero-carousel";
import { ArrowUpRight } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

const caseStudies: HeroCarouselItem[] = [
  {
    id: "nawa-fleet",
    title: "Nawa Logistics\nTelematics OS",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    credit: "ENTERPRISE FLEET PLATFORM",
    meta: ["DISPATCH APP", "GPS GEOFENCING", "1,200+ FLEET VEHICLES"],
    accent: "#2B5CFF",
  },
  {
    id: "tamkin-pos",
    title: "Tamkin Retail\nMulti-Store ERP",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    credit: "ODOO 18 & ZATCA PHASE 2",
    meta: ["42 BRANCHES", "SUB-SECOND SYNC", "$48M ANNUAL GMV"],
    accent: "#C0703C",
  },
  {
    id: "cura-health",
    title: "Cura Healthcare\nPatient Portal",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    credit: "HIPAA SECURE TELEHEALTH",
    meta: ["EHR INTEGRATION", "DOCTOR SCHEDULER", "98% NO-SHOW DROP"],
    accent: "#10B981",
  },
  {
    id: "souq-plus",
    title: "SouqPlus Commerce\nHeadless Engine",
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1600&q=80",
    credit: "NEXT.js 15 & MADA/STRIPE",
    meta: ["0.4s FCP SPEED", "1-CLICK CHECKOUT", "+64% MOBILE CONVERSION"],
    accent: "#8B5CF6",
  },
  {
    id: "auto-flow",
    title: "AutoFlow AI\nDocument Copilot",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    credit: "AUTONOMOUS N8N PIPELINE",
    meta: ["OCR EXTRACTION", "pgvector RAG", "24/7 AUTONOMOUS"],
    accent: "#EC4899",
  },
];

export function SelectedWorkSection() {
  const { openConsultation } = useConsultation();

  return (
    <section
      id="selected-work"
      className="w-full py-20 sm:py-28 bg-background text-foreground border-b border-border transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
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

        {/* Editorial Filmstrip Carousel Showcase */}
        <div className="w-full">
          <HeroCarousel
            items={caseStudies}
            defaultIndex={0}
            brand="DEVOLOPY // CASE STUDIES"
            autoplay={true}
            autoplayDelay={5000}
          />
        </div>
      </div>
    </section>
  );
}

export default SelectedWorkSection;
