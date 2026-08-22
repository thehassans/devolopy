"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

interface IndustryItem {
  name: string;
  iconPath: string;
  isLive: boolean;
  points: string[];
}

const industries: IndustryItem[] = [
  {
    name: "Retail",
    iconPath: "M5 8h14l-1.4 11H6.4z M9 8a3 3 0 0 1 6 0",
    isLive: true,
    points: [
      "Stock counts that never match the system",
      "POS and inventory living in separate worlds",
    ],
  },
  {
    name: "Food & Beverage",
    iconPath: "M7 3v8a3 3 0 0 0 6 0V3 M18 3v18 M10 11v10",
    isLive: true,
    points: [
      "Branch-level costing done in spreadsheets",
      "Delivery aggregator orders re-keyed by hand",
    ],
  },
  {
    name: "Ecommerce",
    iconPath: "M4 7h16l-1.5 12h-13z M9 11V7a3 3 0 0 1 6 0v4",
    isLive: true,
    points: [
      "Catalogue updates take days to go live",
      "Payment and shipping rails not talking to each other",
    ],
  },
  {
    name: "Logistics",
    iconPath:
      "M3 8h10v8H3z M13 11h4l3 3v2h-7 M6.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3 M17.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3",
    isLive: true,
    points: [
      "Driver status tracked over WhatsApp",
      "No single view of a shipment end to end",
    ],
  },
  {
    name: "Healthcare",
    iconPath: "M12 6v12 M6 12h12",
    isLive: false,
    points: [
      "Patient records split across paper and software",
      "Appointment no-shows with no reminder system",
    ],
  },
  {
    name: "Education",
    iconPath: "M3 8l9-4 9 4-9 4z M7 11v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5",
    isLive: false,
    points: [
      "Enrolment and fees handled in separate tools",
      "Parent communication entirely manual",
    ],
  },
  {
    name: "Real Estate",
    iconPath: "M4 10l8-6 8 6v10H4z M10 20v-6h4v6",
    isLive: false,
    points: [
      "Listings duplicated across five portals",
      "Lead follow-up depends on one person remembering",
    ],
  },
  {
    name: "Hospitality",
    iconPath: "M4 18V9a8 8 0 0 1 16 0v9 M2 18h20",
    isLive: false,
    points: [
      "Direct bookings losing to OTA commission",
      "Housekeeping status not visible to front desk",
    ],
  },
  {
    name: "Travel",
    iconPath: "M2 12l20-7-7 20-3-8z",
    isLive: false,
    points: [
      "Itinerary building done in Word documents",
      "Supplier rates updated manually every season",
    ],
  },
  {
    name: "Manufacturing",
    iconPath: "M4 20V10l5 3V10l5 3V10l6 4v6z",
    isLive: false,
    points: [
      "Production data captured on paper first",
      "Maintenance scheduled reactively",
    ],
  },
  {
    name: "Professional Services",
    iconPath: "M4 7h16v13H4z M9 7V5h6v2 M4 12h16",
    isLive: false,
    points: [
      "Billable hours reconstructed at month end",
      "Project profitability known only after delivery",
    ],
  },
  {
    name: "Startups",
    iconPath: "M12 3l2.4 5.6L20 11l-5.6 2.4L12 19l-2.4-5.6L4 11l5.6-2.4z",
    isLive: false,
    points: [
      "Investor timeline shorter than the build plan",
      "Scope defined by what a demo needs, not users",
    ],
  },
];

export function IndustriesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { openConsultation } = useConsultation();

  return (
    <section id="industries" className="dv-sec dv-sec--ink800">
      <div className="dv-wrap">
        <div style={{ maxWidth: "56ch" }}>
          <span className="dv-eyebrow">Industries</span>
          <h2 className="dv-h2">We learn the operation before we build for it.</h2>
          <p className="dv-lead dv-muted-d">
            Every sector has its own bottleneck. These are the ones we have worked inside.
          </p>
        </div>

        <div className="dv-ind">
          {industries.map((ind, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                tabIndex={0}
                data-soon={!ind.isLive ? "1" : undefined}
                className={`dv-ind__c ${isOpen ? "is-open" : ""}`}
                onClick={() => {
                  if (ind.isLive) {
                    setOpenIndex(isOpen ? null : idx);
                  }
                }}
              >
                <svg className="dv-ind__ico" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d={ind.iconPath}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="dv-ind__n">{ind.name}</span>

                {ind.isLive ? (
                  <ul className="dv-ind__x">
                    {ind.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                    <li className="pt-1">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openConsultation("custom-software");
                        }}
                        className="text-signal-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        See solutions <ArrowRight className="size-3" />
                      </button>
                    </li>
                  </ul>
                ) : (
                  <span className="dv-ind__soon">Coming soon</span>
                )}
              </div>
            );
          })}
        </div>

        <p className="dv-ind__note">
          Industry pages marked <em>Coming soon</em> are not yet published. Live sector configurations ship in Phase 2.
        </p>
      </div>
    </section>
  );
}

export default IndustriesSection;
