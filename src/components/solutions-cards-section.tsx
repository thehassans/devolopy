"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

export interface SolutionCardItem {
  id: string;
  title: string;
  desc: string;
  slug: string;
  techStack: Array<{ name: string; bg: string; color: string; label: string }>;
}

const solutionsList: SolutionCardItem[] = [
  {
    id: "product-dev",
    title: "Product Development",
    desc: "End-to-end creation of scalable, resilient, and user-driven digital platforms built for long-term growth.",
    slug: "website-development",
    techStack: [
      { name: "Next.js", bg: "bg-slate-900 text-white", color: "#000000", label: "N" },
      { name: "React", bg: "bg-sky-500/20 text-sky-400", color: "#0ea5e9", label: "Re" },
      { name: "TypeScript", bg: "bg-blue-600/20 text-blue-400", color: "#2563eb", label: "TS" },
      { name: "Tailwind", bg: "bg-teal-500/20 text-teal-400", color: "#14b8a6", label: "TW" },
    ],
  },
  {
    id: "design-dept",
    title: "Design Department",
    desc: "Creative UI/UX architectures and accessible design systems that elevate user retention and conversion.",
    slug: "ui-ux-design-systems",
    techStack: [
      { name: "Figma", bg: "bg-purple-500/20 text-purple-400", color: "#a855f7", label: "Fg" },
      { name: "Tokens", bg: "bg-amber-500/20 text-amber-400", color: "#f59e0b", label: "Tk" },
      { name: "Prototyping", bg: "bg-pink-500/20 text-pink-400", color: "#ec4899", label: "Pr" },
      { name: "WCAG AA", bg: "bg-emerald-500/20 text-emerald-400", color: "#10b981", label: "AA" },
    ],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    desc: "Flexible, zero-downtime, and cost-efficient cloud infrastructure with automated CI/CD deployment pipelines.",
    slug: "cloud-devops-architecture",
    techStack: [
      { name: "AWS", bg: "bg-amber-600/20 text-amber-400", color: "#d97706", label: "AWS" },
      { name: "Docker", bg: "bg-blue-500/20 text-blue-400", color: "#3b82f6", label: "Dk" },
      { name: "Kubernetes", bg: "bg-indigo-500/20 text-indigo-400", color: "#6366f1", label: "K8s" },
      { name: "Vercel", bg: "bg-slate-800 text-slate-200", color: "#334155", label: "Vc" },
    ],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    desc: "Transform raw telemetry into actionable business intelligence with high-throughput reporting pipelines.",
    slug: "custom-crm-client-portals",
    techStack: [
      { name: "PostgreSQL", bg: "bg-blue-700/20 text-blue-400", color: "#1d4ed8", label: "PG" },
      { name: "Redis", bg: "bg-red-500/20 text-red-400", color: "#ef4444", label: "Rd" },
      { name: "Python", bg: "bg-yellow-500/20 text-yellow-400", color: "#eab308", label: "Py" },
      { name: "GraphQL", bg: "bg-pink-600/20 text-pink-400", color: "#db2777", label: "GQL" },
    ],
  },
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    desc: "Autonomous workflow copilots, fine-tuned domain LLMs, and intelligent OCR data extraction systems.",
    slug: "ai-agentic-automation",
    techStack: [
      { name: "OpenAI", bg: "bg-emerald-600/20 text-emerald-400", color: "#059669", label: "AI" },
      { name: "Claude", bg: "bg-amber-500/20 text-amber-400", color: "#d97706", label: "Cl" },
      { name: "n8n", bg: "bg-orange-500/20 text-orange-400", color: "#f97316", label: "n8n" },
      { name: "RAG", bg: "bg-cyan-500/20 text-cyan-400", color: "#06b6d4", label: "RAG" },
    ],
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    desc: "Custom headless online storefronts engineered to convert, handle massive flash sales, and scale seamlessly.",
    slug: "e-commerce-solutions",
    techStack: [
      { name: "Shopify Plus", bg: "bg-emerald-500/20 text-emerald-400", color: "#10b981", label: "Sh" },
      { name: "Stripe", bg: "bg-indigo-600/20 text-indigo-400", color: "#4f46e5", label: "St" },
      { name: "Mada", bg: "bg-teal-600/20 text-teal-400", color: "#0d9488", label: "Mada" },
      { name: "Odoo Commerce", bg: "bg-purple-600/20 text-purple-400", color: "#9333ea", label: "Od" },
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile & IoT Solutions",
    desc: "Native cross-platform mobile apps for iOS and Android delivering 60 FPS performance and offline sync.",
    slug: "mobile-app-development",
    techStack: [
      { name: "Flutter", bg: "bg-sky-500/20 text-sky-400", color: "#0284c7", label: "Fl" },
      { name: "React Native", bg: "bg-blue-500/20 text-blue-400", color: "#3b82f6", label: "RN" },
      { name: "iOS Swift", bg: "bg-orange-600/20 text-orange-400", color: "#ea580c", label: "iOS" },
      { name: "Kotlin", bg: "bg-violet-600/20 text-violet-400", color: "#7c3aed", label: "Kt" },
    ],
  },
  {
    id: "technical-support",
    title: "Technical Support & ERP",
    desc: "Enterprise Odoo ERP customization, guaranteed SLA support contracts, and continuous proactive monitoring.",
    slug: "odoo-development",
    techStack: [
      { name: "Odoo 18", bg: "bg-purple-500/20 text-purple-400", color: "#a855f7", label: "Odoo" },
      { name: "ZATCA", bg: "bg-emerald-600/20 text-emerald-400", color: "#059669", label: "ZAT" },
      { name: "1h SLA", bg: "bg-blue-600/20 text-blue-400", color: "#2563eb", label: "SLA" },
      { name: "Linux", bg: "bg-amber-500/20 text-amber-400", color: "#d97706", label: "Tux" },
    ],
  },
];

export function SolutionsCardsSection() {
  const { openConsultation } = useConsultation();

  return (
    <section id="solutions-grid" className="w-full py-20 sm:py-28 bg-secondary/30 dark:bg-[#08090B] text-foreground border-b border-border transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
            Our Solutions
          </div>
          <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Powerful Digital Services That Drive Results
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            From cutting-edge development to intelligent automation, we offer a full suite of services designed to fuel your business growth and future-proof your operations.
          </p>
        </div>

        {/* 8-Card Responsive Grid (4 columns x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionsList.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-card border border-border/80 dark:border-white/10 hover:border-primary/60 dark:hover:border-primary/60 transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl dark:shadow-2xl backdrop-blur-md"
            >
              <div>
                {/* Title */}
                <h3 className="font-space text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Tech Stack Avatar Badges Row */}
                <div className="flex items-center gap-1.5 mt-4 mb-4">
                  {item.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      title={tech.name}
                      className={`size-7 rounded-full flex items-center justify-center text-[10px] font-mono font-bold border border-border/60 dark:border-white/10 shadow-xs ${tech.bg}`}
                    >
                      {tech.label}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* View Details Action Button */}
              <div className="pt-6 mt-6 border-t border-border/60 dark:border-white/10">
                <Link
                  href={`/services/${item.slug}`}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm group/btn"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="size-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionsCardsSection;
