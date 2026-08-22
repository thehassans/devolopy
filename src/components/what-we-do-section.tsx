"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

interface ServiceItem {
  title: string;
  desc: string;
  iconPath: string;
  slug?: string;
}

const servicesData: ServiceItem[] = [
  {
    title: "Custom Software",
    desc: "Platforms and business applications built around your actual workflows.",
    iconPath: "M4 6h16v12H4z M8 10h8",
    slug: "website-development",
  },
  {
    title: "Web Development",
    desc: "Corporate sites, web apps and platforms that load fast and convert.",
    iconPath: "M3 12h18 M12 3a15 15 0 0 1 0 18 A15 15 0 0 1 12 3",
    slug: "website-development",
  },
  {
    title: "Mobile Applications",
    desc: "iOS, Android and cross-platform apps built for daily use.",
    iconPath: "M7 3h10v18H7z M11 18h2",
    slug: "mobile-app-development",
  },
  {
    title: "Ecommerce",
    desc: "Stores, marketplaces, integrations and custom commerce experiences.",
    iconPath: "M4 8h16l-2 12H6z M9 8a3 3 0 0 1 6 0",
    slug: "e-commerce-solutions",
  },
  {
    title: "Odoo & ERP",
    desc: "Implementation, customisation, integration and operational automation.",
    iconPath: "M4 5h7v7H4z M13 5h7v7h-7z M4 14h7v5H4z M13 14h7v5h-7z",
    slug: "odoo-development",
  },
  {
    title: "AI & Automation",
    desc: "Practical AI features and workflow automation that remove manual work.",
    iconPath: "M12 4v4 M12 16v4 M4 12h4 M16 12h4 M9 9h6v6H9z",
    slug: "ai-agentic-automation",
  },
  {
    title: "UI/UX Design",
    desc: "Research, UX strategy, interface design and design systems.",
    iconPath: "M4 5h16v10H4z M9 19h6",
    slug: "ui-ux-design-systems",
  },
  {
    title: "Cloud & DevOps",
    desc: "Infrastructure, CI/CD, monitoring and deployment you can rely on.",
    iconPath: "M6 15a4 4 0 1 1 1-7.9A5 5 0 0 1 17 8a3.5 3.5 0 0 1 .5 7z",
    slug: "cloud-devops-architecture",
  },
  {
    title: "Dedicated Teams",
    desc: "Engineers who work as an extension of your own team.",
    iconPath: "M9 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0 M4 20a6 6 0 0 1 16 0",
    slug: "custom-crm-client-portals",
  },
  {
    title: "Technology Consulting",
    desc: "Architecture decisions, technical audits and system planning.",
    iconPath: "M12 3l8 4v6c0 4-3.5 7-8 8-4.5-1-8-4-8-8V7z",
    slug: "conversion-rate-optimization-cro",
  },
];

export function WhatWeDoSection() {
  const { openConsultation } = useConsultation();

  return (
    <section id="services" className="dv-sec dv-sec--light" style={{ paddingTop: 0 }}>
      <div className="dv-wrap">
        <div style={{ maxWidth: "60ch" }}>
          <span className="dv-eyebrow">What we do</span>
          <h2 className="dv-h2">From idea to scale. We build what your business needs.</h2>
        </div>

        <div className="dv-svc">
          {servicesData.map((s, idx) => (
            <Link
              key={idx}
              href={s.slug ? `/services/${s.slug}` : "#"}
              className="dv-svc__card group"
            >
              <svg className="dv-svc__ico" width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path
                  d={s.iconPath}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="dv-svc__t group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="dv-svc__d">{s.desc}</p>
              <span className="dv-svc__go flex items-center gap-1">
                Explore <ArrowRight className="size-3.5" />
              </span>
            </Link>
          ))}

          {/* 11th CTA Card */}
          <div
            onClick={() => openConsultation("custom-software")}
            className="dv-svc__card dv-svc__card--cta cursor-pointer"
          >
            <h3 className="dv-svc__t">Ten capabilities. One accountable team.</h3>
            <span className="dv-link flex items-center gap-1.5" style={{ color: "var(--signal-400)" }}>
              All services <ArrowRight className="size-4" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
