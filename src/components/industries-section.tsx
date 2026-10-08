"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Store,
  Utensils,
  ShoppingBag,
  Truck,
  HeartPulse,
  GraduationCap,
  Building2,
  Hotel,
  Plane,
  Factory,
  Briefcase,
  Rocket,
} from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";
import Timeline, { type JourneyItem } from "@/components/ui/timeline";

interface IndustryItem {
  id: string;
  slug: string;
  num: string;
  name: string;
  badge: string;
  summary: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const industriesList: IndustryItem[] = [
  {
    id: "retail",
    slug: "retail-multibranch",
    num: "01",
    name: "Retail & Multi-Branch",
    badge: "POS & Multi-Store",
    summary: "Centralized Odoo POS, barcode telemetry, and automated stock replenishment across physical store networks.",
    tags: ["Odoo POS", "Barcode Telemetry", "ZATCA Phase 2"],
    icon: Store,
  },
  {
    id: "fnb",
    slug: "food-beverage",
    num: "02",
    name: "Food & Beverage",
    badge: "Aggregator Sync",
    summary: "Automated aggregator webhook routing, live Kitchen Display (KDS), and recipe batch cost ledgers.",
    tags: ["Webhook Router", "Kitchen Display", "Real-Time Ledger"],
    icon: Utensils,
  },
  {
    id: "ecommerce",
    slug: "ecommerce-brands",
    num: "03",
    name: "E-Commerce & Brands",
    badge: "Headless Commerce",
    summary: "Sub-second Next.js headless storefronts with 1-click Mada/Stripe checkout and automated dispatch.",
    tags: ["Next.js 15", "Stripe & Mada", "Shopify Plus"],
    icon: ShoppingBag,
  },
  {
    id: "logistics",
    slug: "logistics-fleet",
    num: "04",
    name: "Logistics & Fleet",
    badge: "Real-Time Telemetry",
    summary: "Custom driver dispatcher mobile apps, live GPS geofencing, and automated shipment tracking notifications.",
    tags: ["Flutter Driver App", "Live GPS Geofence", "WhatsApp Bot"],
    icon: Truck,
  },
  {
    id: "healthcare",
    slug: "healthcare-clinics",
    num: "05",
    name: "Healthcare & Clinics",
    badge: "Patient Portals",
    summary: "HIPAA-ready patient portal, doctor shift scheduling, and automated WhatsApp appointment reminders.",
    tags: ["HIPAA Ready", "Telehealth Portal", "WhatsApp Reminders"],
    icon: HeartPulse,
  },
  {
    id: "education",
    slug: "education-academies",
    num: "06",
    name: "Education & Academies",
    badge: "EdTech & LMS",
    summary: "Unified student lifecycle portal with automated fee installments and mobile parent communications.",
    tags: ["LMS Platform", "Automated Billing", "Parent Mobile App"],
    icon: GraduationCap,
  },
  {
    id: "realestate",
    slug: "real-estate-assets",
    num: "07",
    name: "Real Estate & Assets",
    badge: "Property & Lead Hub",
    summary: "Searchable property platform with interactive floorplans, 3D tours, and automated CRM lead capture.",
    tags: ["Searchable Engine", "Lead Capture", "Odoo CRM Sync"],
    icon: Building2,
  },
  {
    id: "hospitality",
    slug: "hospitality-resorts",
    num: "08",
    name: "Hospitality & Resorts",
    badge: "Direct Booking",
    summary: "High-converting direct booking engine with guest experience portal and zero OTA commissions.",
    tags: ["Direct Booking", "Channel Manager", "Guest Web App"],
    icon: Hotel,
  },
  {
    id: "travel",
    slug: "travel-tours",
    num: "09",
    name: "Travel & Custom Tours",
    badge: "Dynamic Itineraries",
    summary: "Dynamic visual itinerary builder integrated with live supplier flight and hotel API feeds.",
    tags: ["Supplier APIs", "Itinerary Builder", "Dynamic Pricing"],
    icon: Plane,
  },
  {
    id: "manufacturing",
    slug: "manufacturing-plants",
    num: "10",
    name: "Manufacturing Plants",
    badge: "Shop Floor IoT",
    summary: "IoT sensor telemetry dashboard, automated shop floor work orders, and predictive maintenance alerts.",
    tags: ["IoT Telemetry", "Odoo MRP", "Automated Work Orders"],
    icon: Factory,
  },
  {
    id: "proservices",
    slug: "professional-services",
    num: "11",
    name: "Professional Services",
    badge: "Agency Operations",
    summary: "Automated timesheet telemetry, client milestone invoicing, and real-time project margin analytics.",
    tags: ["Timesheet Tracking", "Milestone Billing", "Margin Analytics"],
    icon: Briefcase,
  },
  {
    id: "startups",
    slug: "venture-startups",
    num: "12",
    name: "Venture Startups",
    badge: "4-Week MVP Sprint",
    summary: "Rapid 4-week production MVP sprint with modular TypeScript codebase ready for venture scale.",
    tags: ["4-Week MVP Sprint", "TypeScript Stack", "Next.js + Postgres"],
    icon: Rocket,
  },
];

export function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("retail");
  const [activeTab, setActiveTab] = useState<"timeline" | "explorer">("timeline");
  const { openConsultation } = useConsultation();

  const topIndustriesData: JourneyItem[] = [
    {
      id: "retail",
      year: "Retail",
      month: "Multi-Store",
      badge: "POS & Inventory",
      content: "Centralized Odoo POS, barcode telemetry & replenishment across physical store networks.",
      metric: "42+ Stores",
      metricLabel: "ZATCA Phase 2 E-Invoicing Compliant",
    },
    {
      id: "ecommerce",
      year: "Commerce",
      month: "Headless",
      badge: "Storefronts",
      content: "Sub-second Next.js headless storefronts with 1-click checkout and automated fulfillment.",
      metric: "0.4s FCP",
      metricLabel: "+64% Mobile Conversion Rate Lift",
    },
    {
      id: "healthcare",
      year: "Healthcare",
      month: "Clinical EHR",
      badge: "Patient Portals",
      content: "HIPAA-ready patient portal, doctor scheduling & automated patient WhatsApp sequences.",
      metric: "98% Retained",
      metricLabel: "Appointment No-Show Elimination",
    },
    {
      id: "realestate",
      year: "Real Estate",
      month: "Asset Portals",
      badge: "3D Virtual Hub",
      content: "Searchable property engine with interactive floorplans & automated CRM lead routing.",
      metric: "Sub-Second",
      metricLabel: "Automated Lead To CRM Ingestion",
    },
  ];

  const bottomIndustriesData: JourneyItem[] = [
    {
      id: "fnb",
      year: "Food & Beverage",
      month: "Aggregator Sync",
      badge: "Kitchen Display",
      content: "Automated aggregator webhook routing, live Kitchen Display (KDS) & batch recipe ledgers.",
      metric: "100ms Sync",
      metricLabel: "Webhook Routing Across Deliveries",
    },
    {
      id: "logistics",
      year: "Logistics",
      month: "Fleet Telematics",
      badge: "Route Dispatch",
      content: "Custom driver dispatcher mobile apps, live GPS geofencing & automated waybill dispatch.",
      metric: "1,200+ Fleets",
      metricLabel: "Real-Time Telemetry Under 99.99% SLA",
    },
    {
      id: "manufacturing",
      year: "Manufacturing",
      month: "IoT MRP",
      badge: "Shop Floor IoT",
      content: "IoT sensor telemetry dashboard, automated shop floor work orders & predictive maintenance.",
      metric: "Zero Downtime",
      metricLabel: "Automated Work Order Triggers",
    },
  ];

  return (
    <section
      id="industries"
      className="w-full py-20 sm:py-28 bg-background text-foreground border-b border-border transition-colors duration-300 relative"
    >
      {/* Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-primary/5 blur-[140px] rounded-full" />
      </div>

      {/* Header Container with Switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#ff5f00] bg-[#ff5f00]/10 border border-[#ff5f00]/20 shadow-xs">
              <span className="size-2 rounded-full bg-[#ff5f00] animate-pulse" />
              Industries &amp; Domain Expertise
            </span>
            <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              We Learn the Operation Before We Build for It
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Every sector has its own operational workflow. Here is how we engineer software around your exact domain.
            </p>
          </div>

          {/* Interactive View Toggle */}
          <div className="flex items-center p-1.5 rounded-2xl bg-muted/40 border border-border/80 dark:border-white/10 shrink-0 self-start md:self-end shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab("timeline")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === "timeline"
                  ? "bg-background text-foreground shadow-sm border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Horizontal Timeline
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("explorer")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === "explorer"
                  ? "bg-background text-foreground shadow-sm border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Domain Explorer
            </button>
          </div>
        </div>
      </div>

      {/* Main Content: Full-Bleed Timeline or Domain Explorer */}
      {activeTab === "timeline" ? (
        <div className="w-full relative">
          <Timeline
            id="industries-timeline"
            title="Domain Blueprints"
            periodLabel="Sectors 01 — 12"
            backgroundColor="transparent"
            textColor="currentColor"
            mutedTextColor="var(--color-muted-foreground, #71717a)"
            activeColor="#ff5f00"
            imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            imageAlt="Modern Architecture and Industry Innovation"
            topData={topIndustriesData}
            bottomData={bottomIndustriesData}
          />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start relative">
            {/* Left Column: Sector Selector */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6 z-20">
              <div className="space-y-1.5 p-3 rounded-2xl bg-card border border-border/80 dark:border-white/10 shadow-xs max-h-[360px] overflow-y-auto">
                {industriesList.map((ind) => (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      selectedIndustry === ind.id
                        ? "bg-primary text-primary-foreground border-primary font-bold shadow-xs"
                        : "bg-transparent border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span className="font-mono text-xs uppercase tracking-wider">
                      {ind.num} // {ind.badge}
                    </span>
                    <span className="text-xs font-space font-medium truncate max-w-[180px]">
                      {ind.name.split(" ")[0]} {ind.name.split(" ")[1] || ""}
                    </span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => openConsultation("custom-software")}
                className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-2xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-semibold text-sm transition-all duration-200 cursor-pointer border border-border group"
              >
                <span>Build For Your Industry</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Column: Industry Cards */}
            <div className="lg:col-span-7 space-y-5">
              {industriesList.map((ind) => {
                const Icon = ind.icon;
                const isSelected = selectedIndustry === ind.id;
                return (
                  <Link
                    key={ind.id}
                    href={`/industries/${ind.slug}`}
                    onMouseEnter={() => setSelectedIndustry(ind.id)}
                    className={`block p-6 sm:p-7 rounded-3xl border transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-2xl cursor-pointer group ${
                      isSelected
                        ? "bg-card border-primary ring-1 ring-primary/40 -translate-y-1"
                        : "bg-card/70 dark:bg-white/[0.02] border-border/80 dark:border-white/10 hover:border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="size-11 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center shadow-xs transition-colors">
                          <Icon className="size-5" />
                        </div>
                        <h3 className="font-space text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {ind.name}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#ff5f00] uppercase tracking-wider bg-[#ff5f00]/10 px-3 py-1 rounded-full border border-[#ff5f00]/20 hidden sm:inline">
                        {ind.badge}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 pl-0 sm:pl-14">
                      {ind.summary}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/60 dark:border-white/10 pl-0 sm:pl-14">
                      <div className="flex flex-wrap gap-1.5">
                        {ind.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-primary group-hover:underline">
                        <span>Explore Blueprint</span>
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default IndustriesSection;
