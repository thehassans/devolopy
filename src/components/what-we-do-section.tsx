"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Globe,
  Smartphone,
  ShoppingCart,
  Database,
  Bot,
  Layout,
  Cloud,
  Users,
  Compass,
} from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

interface ServiceItem {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  slug: string;
  tag: string;
}

const servicesData: ServiceItem[] = [
  {
    title: "Custom Software",
    desc: "Platforms and bespoke enterprise business applications engineered around your actual workflows.",
    icon: Code2,
    slug: "website-development",
    tag: "Core Engineering",
  },
  {
    title: "Web Development",
    desc: "Corporate web platforms, full-stack Next.js apps, and high-conversion portals with sub-second page loads.",
    icon: Globe,
    slug: "website-development",
    tag: "Next.js & React",
  },
  {
    title: "Mobile Applications",
    desc: "Native iOS, Android, and cross-platform Flutter/React Native apps built for high daily active engagement.",
    icon: Smartphone,
    slug: "mobile-app-development",
    tag: "iOS & Android",
  },
  {
    title: "Ecommerce Systems",
    desc: "Custom headless storefronts, marketplace engines, payment gateways, and automated inventory sync.",
    icon: ShoppingCart,
    slug: "e-commerce-solutions",
    tag: "Headless Commerce",
  },
  {
    title: "Odoo & ERP Systems",
    desc: "Enterprise Odoo 17/18 implementation, custom Python modules, financial accounting, and operational automation.",
    icon: Database,
    slug: "odoo-development",
    tag: "ERP Integration",
  },
  {
    title: "AI & Autonomous Automation",
    desc: "Practical AI copilots, intelligent OCR document extractors, and automated n8n business workflows.",
    icon: Bot,
    slug: "ai-agentic-automation",
    tag: "AI & Workflows",
  },
  {
    title: "UI/UX Design Systems",
    desc: "In-depth user research, interactive wireframing, high-fidelity prototypes, and scalable Figma design systems.",
    icon: Layout,
    slug: "ui-ux-design-systems",
    tag: "Product Design",
  },
  {
    title: "Cloud & DevOps Architecture",
    desc: "Scalable AWS & Docker infrastructure, Kubernetes clusters, automated CI/CD pipelines, and 99.99% uptime.",
    icon: Cloud,
    slug: "cloud-devops-architecture",
    tag: "AWS & Kubernetes",
  },
  {
    title: "Dedicated Engineering Teams",
    desc: "Senior full-stack developers and solutions architects embedded directly into your daily standups and roadmap.",
    icon: Users,
    slug: "custom-crm-client-portals",
    tag: "Staff Augmentation",
  },
  {
    title: "Technology Consulting",
    desc: "Enterprise system audits, scalable architectural roadmaps, security compliance, and vendor evaluations.",
    icon: Compass,
    slug: "conversion-rate-optimization-cro",
    tag: "Advisory",
  },
];

export function WhatWeDoSection() {
  const { openConsultation } = useConsultation();

  return (
    <section id="services" className="w-full py-20 sm:py-28 bg-[#08090B] text-[#F5F6F7] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
            What We Do
          </span>
          <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            From idea to scale. We build what your business needs.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Ten specialized engineering disciplines unified under a single, accountable development partner.
          </p>
        </div>

        {/* 10 Capability Cards + 1 CTA Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <Link
                key={idx}
                href={`/services/${svc.slug}`}
                className="group relative flex flex-col justify-between p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary/50 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="font-space text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-slate-400 group-hover:text-primary transition-colors">
                  <span>Explore Capabilities</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}

          {/* 11th CTA Card */}
          <div
            onClick={() => openConsultation("custom-software")}
            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-br from-[#16191E] via-[#0E1013] to-primary/20 border border-primary/30 hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-xl cursor-pointer"
          >
            <div className="space-y-4">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C]">
                Full Ecosystem
              </span>
              <h3 className="font-space text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Ten capabilities. One accountable team.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ready to architect or upgrade your digital stack? Talk directly with our senior engineering team.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-space font-semibold text-primary group-hover:text-white transition-colors">
              <span>Start Consultation</span>
              <ArrowRight className="size-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
