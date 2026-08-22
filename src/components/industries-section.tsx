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
} from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

interface IndustryItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  isLive: boolean;
  points: string[];
}

const industries: IndustryItem[] = [
  {
    name: "Retail & Multi-Branch",
    icon: Store,
    isLive: true,
    points: [
      "Stock counts that never match the legacy system",
      "POS and multi-store inventory living in separate databases",
    ],
  },
  {
    name: "Food & Beverage",
    icon: Utensils,
    isLive: true,
    points: [
      "Branch-level costing manually handled in spreadsheets",
      "Aggregator delivery orders re-keyed by staff by hand",
    ],
  },
  {
    name: "E-Commerce & Brands",
    icon: ShoppingBag,
    isLive: true,
    points: [
      "Catalogue updates taking days to synchronize across channels",
      "Payment gateway & shipping fulfillment not communicating",
    ],
  },
  {
    name: "Logistics & Fleet",
    icon: Truck,
    isLive: true,
    points: [
      "Driver dispatches manually coordinated over chat",
      "Lack of unified real-time shipment visibility end-to-end",
    ],
  },
  {
    name: "Healthcare & Clinics",
    icon: HeartPulse,
    isLive: true,
    points: [
      "Patient records fragmented across legacy tools and paper",
      "Appointment cancellations without automated SMS/WhatsApp reminders",
    ],
  },
  {
    name: "Education & Academies",
    icon: GraduationCap,
    isLive: true,
    points: [
      "Student enrollment, LMS, and tuition fee ledgers disconnected",
      "Parent administrative communications entirely manual",
    ],
  },
  {
    name: "Real Estate & Assets",
    icon: Building2,
    isLive: true,
    points: [
      "Listings duplicated manually across five marketing portals",
      "Lead follow-up slipping between broker spreadsheets",
    ],
  },
  {
    name: "Hospitality & Resorts",
    icon: Hotel,
    isLive: true,
    points: [
      "Direct room reservations losing out to heavy OTA commissions",
      "Housekeeping & concierge status invisible to front desk",
    ],
  },
  {
    name: "Travel & Tours",
    icon: Plane,
    isLive: true,
    points: [
      "Custom itinerary creation manually assembled in Word documents",
      "Seasonal vendor contracts and rates updated manually",
    ],
  },
  {
    name: "Manufacturing & Plants",
    icon: Factory,
    isLive: true,
    points: [
      "Shop floor production logs written on paper before digital entry",
      "Equipment maintenance and parts reordering handled reactively",
    ],
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    isLive: true,
    points: [
      "Billable hours reconstructed at end of month from memory",
      "True project profitability discovered only post-delivery",
    ],
  },
  {
    name: "High-Growth Startups",
    icon: Rocket,
    isLive: true,
    points: [
      "Investor product timelines shorter than agency build estimates",
      "Initial MVP scope defined for demo optics rather than real users",
    ],
  },
];

export function IndustriesSection() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(0);
  const { openConsultation } = useConsultation();

  return (
    <section id="industries" className="w-full py-20 sm:py-28 bg-background text-foreground border-b border-border transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
            Industries
          </span>
          <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            We learn the operation before we build for it.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Every sector has its own operational bottleneck. These are the industries we have engineered solutions inside.
          </p>
        </div>

        {/* 12 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isSelected = selectedIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedIdx(isSelected ? null : idx)}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[170px] ${
                  isSelected
                    ? "bg-card border-primary shadow-lg ring-1 ring-primary/40 -translate-y-1"
                    : "bg-card/60 dark:bg-white/[0.02] border-border/80 dark:border-white/10 hover:border-border"
                }`}
              >
                <div>
                  <div className="p-3 rounded-2xl bg-secondary dark:bg-white/5 border border-border dark:border-white/10 text-[#C0703C] w-fit mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-space text-lg font-bold text-foreground mb-2">
                    {ind.name}
                  </h3>

                  {isSelected && (
                    <ul className="mt-3 space-y-2 text-xs text-muted-foreground pt-3 border-t border-border animate-in fade-in duration-200">
                      {ind.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-[#C0703C] font-bold">&bull;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                      <li className="pt-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openConsultation("custom-software");
                          }}
                          className="inline-flex items-center gap-1 text-xs font-mono font-bold text-primary hover:underline cursor-pointer"
                        >
                          <span>Explore Solutions</span>
                          <ArrowRight className="size-3" />
                        </button>
                      </li>
                    </ul>
                  )}
                </div>

                {!isSelected && (
                  <div className="text-[11px] font-mono text-muted-foreground mt-4 flex items-center justify-between">
                    <span>View Bottlenecks</span>
                    <ArrowRight className="size-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
