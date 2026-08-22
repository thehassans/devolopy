"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

interface CaseStudy {
  num: string;
  client: string;
  category: string;
  title: string;
  outcome: string;
  tags: string[];
  metrics: string;
}

const workItems: CaseStudy[] = [
  {
    num: "01",
    client: "Oakland Greens",
    category: "Real Estate & Communities",
    title: "High-Conversion Searchable Property Platform",
    outcome: "Replaced a static brochure site with an automated property listings engine and lead management portal that the sales team updates in real-time.",
    tags: ["Next.js App Router", "Odoo CRM Sync", "Technical SEO", "Lead Engine"],
    metrics: "+340% Qualified Inquiries",
  },
  {
    num: "02",
    client: "Radisson Blu Murree",
    category: "Hospitality & Tourism",
    title: "Direct Hotel Booking Engine & Channel Manager",
    outcome: "Engineered a high-speed direct reservation engine with localized payment gateways, slashing OTA commission dependency by 45%.",
    tags: ["Custom Booking Flow", "Stripe & Mada", "Multi-Currency", "99.9% Uptime"],
    metrics: "45% Lower OTA Commission",
  },
  {
    num: "03",
    client: "Vispur Enterprise",
    category: "SaaS & Workflow Orchestration",
    title: "Autonomous Content & Operations Dashboard",
    outcome: "Architected a full-stack SaaS platform replacing manual spreadsheet scheduling and multi-level approvals with automated n8n pipelines.",
    tags: ["Node.js Microservices", "n8n Automation", "RBAC Permissions", "Real-Time Telemetry"],
    metrics: "120+ Hours Saved / Month",
  },
];

export function SelectedWorkSection() {
  const { openConsultation } = useConsultation();

  return (
    <section id="work" className="w-full py-20 sm:py-28 bg-[#0E1013] text-[#F5F6F7] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
            Selected Work
          </span>
          <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Systems we designed, built and shipped.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real enterprise case studies engineered for performance, scale, and operational ROI.
          </p>
        </div>

        {/* Case Study Rows */}
        <div className="space-y-12">
          {workItems.map((w, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl backdrop-blur-sm"
            >
              {/* Media / Browser Simulation Frame */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-2xl bg-[#16191E] border border-white/15 overflow-hidden shadow-2xl">
                  {/* Browser top chrome */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#0E1013] border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="size-2.5 rounded-full bg-red-500/80" />
                      <div className="size-2.5 rounded-full bg-amber-500/80" />
                      <div className="size-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      {w.client.toLowerCase().replace(/\s+/g, "")}.devolopy.io
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      LIVE
                    </span>
                  </div>

                  {/* Mock dashboard canvas */}
                  <div className="p-6 space-y-4 bg-gradient-to-br from-[#16191E] to-[#0E1013]">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-28 bg-white/20 rounded" />
                      <div className="h-3 w-16 bg-primary/40 rounded" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                        <div className="h-2 w-12 bg-slate-500 rounded" />
                        <div className="h-4 w-16 bg-white/80 rounded font-mono text-xs" />
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                        <div className="h-2 w-12 bg-slate-500 rounded" />
                        <div className="h-4 w-16 bg-[#C0703C] rounded font-mono text-xs" />
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                        <div className="h-2 w-12 bg-slate-500 rounded" />
                        <div className="h-4 w-16 bg-primary rounded font-mono text-xs" />
                      </div>
                    </div>
                    <div className="h-24 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-xs font-mono text-slate-400">
                      High-Throughput Production Architecture
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#C0703C] uppercase tracking-wider">
                    Case Study // {w.num}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary/10 border border-primary/20 text-primary">
                    {w.metrics}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {w.client} &middot; {w.category}
                </div>

                <h3 className="font-space text-2xl sm:text-3xl font-bold text-white">
                  {w.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {w.outcome}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {w.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => openConsultation("custom-software")}
                    className="inline-flex items-center gap-2 font-space font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer"
                  >
                    <span>Request Architecture Blueprint</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWorkSection;
