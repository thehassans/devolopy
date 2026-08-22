"use client";

import React, { useState } from "react";
import {
  ArrowRight,
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
  Sparkles,
} from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

interface IndustryItem {
  id: string;
  name: string;
  category: "commerce" | "operations" | "services" | "enterprise";
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  bottleneck: string;
  solution: string;
  tags: string[];
}

const allIndustries: IndustryItem[] = [
  {
    id: "retail",
    name: "Retail & Multi-Branch",
    category: "commerce",
    icon: Store,
    badge: "POS & Multi-Store",
    bottleneck: "Stock counts that never match legacy systems across multiple physical branches.",
    solution: "Centralized Odoo ERP sync, automated reordering triggers, and unified cloud POS.",
    tags: ["Odoo POS", "Barcode Telemetry", "ZATCA Phase 2"],
  },
  {
    id: "fnb",
    name: "Food & Beverage",
    category: "commerce",
    icon: Utensils,
    badge: "Aggregator Sync",
    bottleneck: "Manual branch costing in spreadsheets & delivery orders re-keyed by staff.",
    solution: "Automated aggregator webhook routing, live KDS, and batch ingredient cost ledgers.",
    tags: ["Webhook Router", "Kitchen Display", "Real-Time Ledger"],
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Brands",
    category: "commerce",
    icon: ShoppingBag,
    badge: "Headless Commerce",
    bottleneck: "Catalogue updates taking days to sync across channels & broken shipping rails.",
    solution: "Sub-second Next.js headless storefronts with 1-click Mada/Stripe checkout & auto fulfillment.",
    tags: ["Next.js 15", "Stripe & Mada", "Shopify Plus"],
  },
  {
    id: "logistics",
    name: "Logistics & Fleet",
    category: "operations",
    icon: Truck,
    badge: "Real-Time Telemetry",
    bottleneck: "Driver dispatches coordinated over chat & zero end-to-end shipment visibility.",
    solution: "Custom mobile dispatcher app, live GPS geofencing, and automated customer tracking SMS.",
    tags: ["Flutter Driver App", "Live GPS Geofence", "WhatsApp Bot"],
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    category: "services",
    icon: HeartPulse,
    badge: "Patient Portals",
    bottleneck: "Fragmented records across paper tools and high appointment no-show rates.",
    solution: "Unified EHR portal, doctor shift scheduler, and automated multi-channel appointment reminders.",
    tags: ["HIPAA Ready", "Telehealth Portal", "WhatsApp Reminders"],
  },
  {
    id: "education",
    name: "Education & Academies",
    category: "services",
    icon: GraduationCap,
    badge: "EdTech & LMS",
    bottleneck: "Student enrollment, LMS courses, and tuition fee ledgers disconnected.",
    solution: "Unified student lifecycle portal with automated fee installments and mobile parent app.",
    tags: ["LMS Platform", "Automated Billing", "Parent Mobile App"],
  },
  {
    id: "realestate",
    name: "Real Estate & Assets",
    category: "services",
    icon: Building2,
    badge: "Lead & Property Hub",
    bottleneck: "Listings duplicated across five marketing portals & lost broker leads.",
    solution: "Custom property search platform with interactive floorplans & instant CRM lead capture.",
    tags: ["Searchable Engine", "Lead Capture", "Odoo CRM Sync"],
  },
  {
    id: "hospitality",
    name: "Hospitality & Resorts",
    category: "services",
    icon: Hotel,
    badge: "Direct Booking",
    bottleneck: "Direct room reservations losing out to heavy 25%+ OTA commissions.",
    solution: "High-converting direct booking engine with guest experience portal and local payment rails.",
    tags: ["Direct Booking", "Channel Manager", "Guest Web App"],
  },
  {
    id: "travel",
    name: "Travel & Tours",
    category: "services",
    icon: Plane,
    badge: "Dynamic Itineraries",
    bottleneck: "Manual itinerary building in Word documents & seasonal rate updating friction.",
    solution: "Dynamic visual itinerary builder with live supplier flight & hotel API feeds.",
    tags: ["Supplier APIs", "Itinerary Builder", "Dynamic Pricing"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Plants",
    category: "operations",
    icon: Factory,
    badge: "Shop Floor IoT",
    bottleneck: "Paper-based shop floor logs and reactive machine maintenance downtime.",
    solution: "IoT sensor telemetry dashboard, automated work orders, and predictive maintenance alerts.",
    tags: ["IoT Telemetry", "Odoo MRP", "Automated Work Orders"],
  },
  {
    id: "proservices",
    name: "Professional Services",
    category: "enterprise",
    icon: Briefcase,
    badge: "Agency Operations",
    bottleneck: "Billable hours estimated at month-end & unmeasured project profitability margins.",
    solution: "Automated timesheet telemetry, client milestone invoicing, and real-time margin analytics.",
    tags: ["Timesheet Tracking", "Milestone Billing", "Margin Analytics"],
  },
  {
    id: "startups",
    name: "High-Growth Startups",
    category: "enterprise",
    icon: Rocket,
    badge: "4-Week MVP Sprint",
    bottleneck: "Investor product timelines shorter than typical agency build estimates.",
    solution: "Rapid 4-week production MVP sprint with modular TypeScript codebase ready to scale.",
    tags: ["4-Week MVP Sprint", "TypeScript Stack", "Next.js + Postgres"],
  },
];

const categories = [
  { id: "all", label: "All Sectors" },
  { id: "commerce", label: "Commerce & Retail" },
  { id: "operations", label: "Operations & Logistics" },
  { id: "services", label: "Services & Healthcare" },
  { id: "enterprise", label: "Enterprise & Startups" },
];

export function IndustriesSection() {
  const [activeTab, setActiveTab] = useState("all");
  const { openConsultation } = useConsultation();

  const filteredIndustries =
    activeTab === "all"
      ? allIndustries
      : allIndustries.filter((item) => item.category === activeTab);

  return (
    <section id="industries" className="w-full py-20 sm:py-28 bg-background text-foreground border-b border-border transition-colors duration-300 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-primary/5 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
              Industries &amp; Domain Expertise
            </span>
            <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              We learn the operation before we build for it.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Every sector has its own operational bottleneck. Here is how we engineer software around your exact industry workflow.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-secondary/60 dark:bg-card border border-border">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 scale-[1.02]"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Ultra-Premium Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndustries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-card border border-border/80 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl dark:shadow-2xl backdrop-blur-md"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center shadow-xs">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#C0703C] uppercase tracking-wider bg-[#C0703C]/10 px-3 py-1 rounded-full border border-[#C0703C]/20">
                      {ind.badge}
                    </span>
                  </div>

                  {/* Industry Title */}
                  <h3 className="font-space text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                    {ind.name}
                  </h3>

                  {/* Bottleneck vs Solution Section */}
                  <div className="space-y-3.5 mb-6">
                    {/* Bottleneck */}
                    <div className="p-3.5 rounded-2xl bg-destructive/5 dark:bg-destructive/10 border border-destructive/15 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-destructive">
                        <AlertCircle className="size-3.5" />
                        The Bottleneck
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {ind.bottleneck}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-3.5 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/15 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                        <CheckCircle2 className="size-3.5" />
                        Our Engineered System
                      </div>
                      <p className="text-xs text-foreground/90 leading-relaxed font-medium">
                        {ind.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {ind.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action CTA */}
                <div className="pt-4 border-t border-border/80 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => openConsultation("custom-software")}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-semibold text-xs transition-all duration-200 cursor-pointer group/btn"
                  >
                    <span>Build For {ind.name.split(" ")[0]}</span>
                    <ArrowRight className="size-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
