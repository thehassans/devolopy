"use client";

import React, { useState } from "react";
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
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

interface IndustryItem {
  id: string;
  num: string;
  name: string;
  category: string;
  badge: string;
  bottleneck: string;
  solution: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const industriesList: IndustryItem[] = [
  {
    id: "retail",
    num: "01",
    name: "Retail & Multi-Branch Chains",
    category: "Commerce",
    badge: "POS & Multi-Store",
    bottleneck: "Stock counts that never match legacy systems across multiple physical branches and warehouses.",
    solution: "Centralized Odoo ERP sync, automated reordering triggers, barcode telemetry, and unified cloud POS.",
    tags: ["Odoo POS", "Barcode Telemetry", "ZATCA Phase 2", "Multi-Store Sync"],
    icon: Store,
  },
  {
    id: "fnb",
    num: "02",
    name: "Food & Beverage Operations",
    category: "Commerce",
    badge: "Aggregator Sync",
    bottleneck: "Manual branch costing in spreadsheets and delivery aggregator orders re-keyed by hand.",
    solution: "Automated aggregator webhook routing, live Kitchen Display (KDS), and batch ingredient cost ledgers.",
    tags: ["Webhook Router", "Kitchen Display (KDS)", "Recipe Costing", "Real-Time Ledger"],
    icon: Utensils,
  },
  {
    id: "ecommerce",
    num: "03",
    name: "E-Commerce & Digital Brands",
    category: "Commerce",
    badge: "Headless Commerce",
    bottleneck: "Catalogue updates taking days to sync across channels and disconnected shipping fulfillment rails.",
    solution: "Sub-second Next.js headless storefronts with 1-click Mada and Stripe checkout and auto courier dispatch.",
    tags: ["Next.js 15", "Stripe & Mada", "Shopify Plus", "Redis Cache"],
    icon: ShoppingBag,
  },
  {
    id: "logistics",
    num: "04",
    name: "Logistics & Fleet Dispatch",
    category: "Operations",
    badge: "Real-Time Telemetry",
    bottleneck: "Driver dispatches coordinated over chat groups with zero end-to-end shipment visibility.",
    solution: "Custom mobile dispatcher app, live GPS geofencing, driver route telemetry, and automated customer SMS.",
    tags: ["Flutter Driver App", "Live GPS Geofence", "WhatsApp Bot", "Route Optimization"],
    icon: Truck,
  },
  {
    id: "healthcare",
    num: "05",
    name: "Healthcare & Specialized Clinics",
    category: "Services",
    badge: "Patient Portals",
    bottleneck: "Fragmented patient records across legacy tools and high appointment no-show rates.",
    solution: "Unified EHR portal, doctor shift scheduler, automated WhatsApp reminders, and secure telehealth.",
    tags: ["HIPAA Ready", "Telehealth Portal", "WhatsApp Reminders", "EHR Sync"],
    icon: HeartPulse,
  },
  {
    id: "education",
    num: "06",
    name: "Education, Schools & Academies",
    category: "Services",
    badge: "EdTech & LMS",
    bottleneck: "Student enrollment, LMS courses, and tuition fee ledgers disconnected across multiple silos.",
    solution: "Unified student lifecycle portal with automated fee installment plans and dedicated mobile parent app.",
    tags: ["LMS Platform", "Automated Billing", "Parent Mobile App", "Student CRM"],
    icon: GraduationCap,
  },
  {
    id: "realestate",
    num: "07",
    name: "Real Estate & Asset Developers",
    category: "Services",
    badge: "Lead & Property Hub",
    bottleneck: "Listings duplicated across five marketing portals and high lead slippage between broker spreadsheets.",
    solution: "Custom property search platform with interactive floorplans, 3D tours, and instant CRM lead capture.",
    tags: ["Searchable Engine", "Lead Capture", "Odoo CRM Sync", "Interactive Maps"],
    icon: Building2,
  },
  {
    id: "hospitality",
    num: "08",
    name: "Hospitality & Boutique Resorts",
    category: "Services",
    badge: "Direct Booking",
    bottleneck: "Direct room reservations losing out to heavy 25%+ third-party OTA commission fees.",
    solution: "High-converting direct booking engine with guest experience portal and localized payment rails.",
    tags: ["Direct Booking", "Channel Manager", "Guest Web App", "Mada Gateway"],
    icon: Hotel,
  },
  {
    id: "travel",
    num: "09",
    name: "Travel & Custom Tour Operators",
    category: "Services",
    badge: "Dynamic Itineraries",
    bottleneck: "Manual itinerary building in Word documents and seasonal rate updating friction.",
    solution: "Dynamic visual itinerary builder with live supplier flight and hotel API feeds.",
    tags: ["Supplier APIs", "Itinerary Builder", "Dynamic Pricing", "Multi-Currency"],
    icon: Plane,
  },
  {
    id: "manufacturing",
    num: "10",
    name: "Manufacturing & Industrial Plants",
    category: "Operations",
    badge: "Shop Floor IoT",
    bottleneck: "Paper-based shop floor logs and reactive machine maintenance downtime.",
    solution: "IoT sensor telemetry dashboard, automated work orders, and predictive maintenance alerts.",
    tags: ["IoT Telemetry", "Odoo MRP", "Automated Work Orders", "Predictive Maintenance"],
    icon: Factory,
  },
  {
    id: "proservices",
    num: "11",
    name: "Professional Services & Agencies",
    category: "Enterprise",
    badge: "Agency Operations",
    bottleneck: "Billable hours estimated at month-end and unmeasured project profitability margins.",
    solution: "Automated timesheet telemetry, client milestone invoicing, and real-time margin analytics.",
    tags: ["Timesheet Tracking", "Milestone Billing", "Margin Analytics", "Client Portals"],
    icon: Briefcase,
  },
  {
    id: "startups",
    num: "12",
    name: "High-Growth Venture Startups",
    category: "Enterprise",
    badge: "4-Week MVP Sprint",
    bottleneck: "Investor product timelines shorter than typical agency build estimates.",
    solution: "Rapid 4-week production MVP sprint with modular TypeScript codebase ready to scale.",
    tags: ["4-Week MVP Sprint", "TypeScript Stack", "Next.js + Postgres", "Scalable Schema"],
    icon: Rocket,
  },
];

export function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("retail");
  const { openConsultation } = useConsultation();

  return (
    <section
      id="industries"
      className="w-full py-20 sm:py-28 bg-background text-foreground border-b border-border transition-colors duration-300 relative"
    >
      {/* Atmospheric Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-primary/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split-Screen Master Layout Matching Services & How We Work */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start relative">
          {/* =========================================================
              LEFT COLUMN: Truly Sticky Header & Quick Sector Selector
             ========================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6 z-20">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20 shadow-xs">
                <span className="size-2 rounded-full bg-[#C0703C] animate-pulse" />
                Industries &amp; Domain Expertise
              </span>

              <h2 className="font-space text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-foreground leading-[1.1]">
                We learn the operation before we build for it.
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Every sector has its own operational bottleneck. Here is how we engineer custom software and ERP workflows around your exact domain.
              </p>
            </div>

            {/* Quick Interactive Sector Selector List */}
            <div className="hidden lg:block space-y-1.5 p-3 rounded-2xl bg-card border border-border/80 dark:border-white/10 shadow-xs max-h-[300px] overflow-y-auto">
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
                    {ind.name.split(" ")[0]} {ind.name.split(" ")[1]}
                  </span>
                </button>
              ))}
            </div>

            {/* CTA Trigger */}
            <button
              type="button"
              onClick={() => openConsultation("custom-software")}
              className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-2xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-semibold text-sm transition-all duration-200 cursor-pointer border border-border group"
            >
              <span>Build For Your Industry</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Full-Width Luxury Industry Cards Stack
             ========================================================= */}
          <div className="lg:col-span-7 space-y-6">
            {industriesList.map((ind) => {
              const Icon = ind.icon;
              const isSelected = selectedIndustry === ind.id;
              return (
                <div
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-2xl cursor-pointer ${
                    isSelected
                      ? "bg-card border-primary ring-1 ring-primary/40 -translate-y-1"
                      : "bg-card/70 dark:bg-white/[0.02] border-border/80 dark:border-white/10 hover:border-border"
                  }`}
                >
                  {/* Top Bar: Icon + Number + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shadow-xs">
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold text-[#C0703C] uppercase tracking-wider block">
                          Sector // {ind.category}
                        </span>
                        <h3 className="font-space text-2xl font-bold text-foreground">
                          {ind.name}
                        </h3>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#C0703C] uppercase tracking-wider bg-[#C0703C]/10 px-3 py-1 rounded-full border border-[#C0703C]/20 hidden sm:inline">
                      {ind.badge}
                    </span>
                  </div>

                  {/* Bottleneck vs Solution 2-Column Comparison */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-5">
                    {/* The Bottleneck */}
                    <div className="p-4 rounded-2xl bg-destructive/5 dark:bg-destructive/10 border border-destructive/15 flex flex-col justify-start">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-destructive mb-1.5">
                        <AlertCircle className="size-3.5 shrink-0" />
                        <span>The Bottleneck</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {ind.bottleneck}
                      </p>
                    </div>

                    {/* Our Engineered System */}
                    <div className="p-4 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/15 flex flex-col justify-start">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-primary mb-1.5">
                        <CheckCircle2 className="size-3.5 shrink-0" />
                        <span>Our Engineered System</span>
                      </div>
                      <p className="text-xs text-foreground/90 leading-relaxed font-medium">
                        {ind.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech & Compliance Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/60 dark:border-white/10 items-center justify-between">
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

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openConsultation("custom-software");
                      }}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-primary hover:underline cursor-pointer pt-2 sm:pt-0"
                    >
                      <span>Explore Architecture</span>
                      <ArrowUpRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
