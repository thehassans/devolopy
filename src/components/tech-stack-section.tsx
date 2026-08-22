"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

interface TechCategory {
  category: string;
  chips: Array<{ name: string; isLead?: boolean; note?: string }>;
}

const techCategories: TechCategory[] = [
  {
    category: "Frontend & Web Apps",
    chips: [
      {
        name: "Next.js 14/15",
        isLead: true,
        note: "Server-rendered React — why our clients' platforms rank #1",
      },
      { name: "React 18/19" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "React Native" },
      { name: "Flutter" },
    ],
  },
  {
    category: "Backend & Microservices",
    chips: [
      { name: "Node.js" },
      { name: "Python FastAPI" },
      { name: "PHP / Laravel" },
      { name: "REST & GraphQL APIs" },
      { name: "WebSocket Channels" },
    ],
  },
  {
    category: "Data & Caching Engines",
    chips: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis Cache" },
      { name: "Pinecone / pgvector" },
    ],
  },
  {
    category: "ERP & Business Backbones",
    chips: [
      { name: "Odoo 17 / 18" },
      { name: "Custom Python Modules" },
      { name: "Odoo Studio" },
      { name: "ZATCA Phase 2 E-Invoicing" },
      { name: "Stripe & Mada Webhooks" },
    ],
  },
  {
    category: "Cloud, CI/CD & DevOps",
    chips: [
      { name: "AWS Cloud" },
      { name: "Docker Containers" },
      { name: "Kubernetes" },
      { name: "Vercel Edge CDN" },
      { name: "GitHub Actions CI/CD" },
    ],
  },
  {
    category: "AI & Autonomous Workflows",
    chips: [
      { name: "n8n Enterprise" },
      { name: "OpenAI GPT-4o" },
      { name: "Anthropic Claude 3.5" },
      { name: "LangChain & LlamaIndex" },
      { name: "Local RAG Embeddings" },
    ],
  },
];

export function TechStackSection() {
  return (
    <section id="technology" className="w-full py-20 sm:py-28 bg-[#0E1013] text-[#F5F6F7] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
            The Stack We Build On
          </span>
          <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Modern stack. Chosen for the job, not for the trend.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Every technology decision is made against three rigorous criteria: what the system must accomplish, who maintains it, and total operational cost over five years.
          </p>
        </div>

        {/* Categories Stack Rows */}
        <div className="space-y-6 pt-6 border-t border-white/10">
          {techCategories.map((cat, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start py-5 border-b border-white/5"
            >
              <div className="lg:col-span-4 font-mono text-xs uppercase tracking-wider text-[#C0703C] font-semibold pt-2">
                {cat.category}
              </div>

              <div className="lg:col-span-8 flex flex-wrap gap-2.5">
                {cat.chips.map((chip, cIdx) => (
                  <span
                    key={cIdx}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 border ${
                      chip.isLead
                        ? "bg-primary/15 border-primary/40 text-white font-semibold shadow-md shadow-primary/10"
                        : "bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/25 hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="font-bold">{chip.name}</span>
                    {chip.note && (
                      <span className="text-[11px] text-primary-200 border-l border-primary/30 pl-2 hidden sm:inline">
                        {chip.note}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
