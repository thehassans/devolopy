"use client";

import React, { useState, useMemo, useRef } from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Layers,
  ShoppingCart,
  Workflow,
  Search,
  Sparkles,
  Cloud,
  Palette,
  Server,
  Users,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  X,
  Code2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Cpu,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_SERVICES, ServiceDetail } from "@/lib/services-data";
import { useConsultation } from "./consultation-modal";

const CATEGORIES = [
  { id: "all", label: "All Capabilities" },
  { id: "engineering", label: "Web Applications" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "erp-automation", label: "Odoo ERP & N8N" },
  { id: "growth", label: "SEO & Growth" },
  { id: "ai-cloud", label: "AI & Cloud Systems" },
];

const ICONS_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "website-development": Globe,
  "mobile-app-development": Smartphone,
  "odoo-development": Layers,
  "e-commerce": ShoppingCart,
  "n8n-development": Workflow,
  "seo": Search,
  "ai-agentic-automation": Sparkles,
  "cloud-devops": Cloud,
  "ui-ux-design-systems": Palette,
  "api-microservices": Server,
  "custom-crm-portals": Users,
  "conversion-optimization": TrendingUp,
};

const STATS_MAP: Record<string, { label: string; value: string; badgeColor: string }> = {
  "website-development": { label: "Performance", value: "100/100 Vitals", badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
  "mobile-app-development": { label: "Engine", value: "60 FPS Native", badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
  "odoo-development": { label: "Compliance", value: "ZATCA Phase 2", badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10" },
  "e-commerce": { label: "Latency", value: "<800ms Checkout", badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
  "n8n-development": { label: "Automation", value: "-90% Manual Ops", badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
  "seo": { label: "Visibility", value: "+320% Traffic", badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
  "ai-agentic-automation": { label: "Copilots", value: "Custom LLMs", badgeColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10" },
  "cloud-devops": { label: "Reliability", value: "99.99% SLA", badgeColor: "text-sky-400 border-sky-500/30 bg-sky-500/10" },
  "ui-ux-design-systems": { label: "Accessibility", value: "WCAG AA Standard", badgeColor: "text-pink-400 border-pink-500/30 bg-pink-500/10" },
  "api-microservices": { label: "P99 Speed", value: "<15ms Edge", badgeColor: "text-teal-400 border-teal-500/30 bg-teal-500/10" },
  "custom-crm-portals": { label: "Efficiency", value: "Real-time Sync", badgeColor: "text-violet-400 border-violet-500/30 bg-violet-500/10" },
  "conversion-optimization": { label: "Growth", value: "+45% Conversion", badgeColor: "text-orange-400 border-orange-500/30 bg-orange-500/10" },
};

function ServiceCard({
  service,
  index,
  onQuickView,
}: {
  service: ServiceDetail;
  index: number;
  onQuickView: (service: ServiceDetail) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const Icon = ICONS_MAP[service.id] || Sparkles;
  const stat = STATS_MAP[service.id] || { label: "Tier", value: "Enterprise", badgeColor: "text-primary border-primary/30 bg-primary/10" };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.03 }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col justify-between rounded-3xl bg-[#090c13] border border-white/[0.08] p-7 sm:p-9 transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_45px_rgba(59,130,246,0.18)] min-h-[410px] overflow-hidden"
    >
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.16), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* Top Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/0 blur-3xl opacity-20 group-hover:opacity-75 transition-opacity duration-500"
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-space font-mono font-bold text-xs text-white/40 tracking-wider">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-semibold bg-primary/10 border border-primary/25 px-3 py-0.5 rounded-full backdrop-blur-md">
              {service.categoryLabel}
            </span>
          </div>

          <div className="flex size-11 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white/80 group-hover:bg-primary group-hover:text-white group-hover:border-primary/80 group-hover:scale-110 transition-all duration-300 shadow-md">
            <Icon className="size-5" />
          </div>
        </div>

        <Link href={`/services/${service.slug}`} className="block group/title pt-1">
          <h3 className="font-space text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover/title:text-primary transition-colors flex items-center justify-between">
            <span>{service.title}</span>
            <ArrowUpRight className="size-5 text-primary opacity-0 -translate-x-2 translate-y-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 group-hover/title:translate-y-0 transition-all duration-300 shrink-0" />
          </h3>
        </Link>

        <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
          {service.shortDescription}
        </p>

        {/* Live Metric / Benchmark Pill */}
        <div className="pt-1">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-semibold ${stat.badgeColor}`}>
            <span className="relative flex size-1.5">
              <span className="bg-current absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-current relative inline-flex size-1.5 rounded-full" />
            </span>
            <span>{stat.label}:</span>
            <strong className="text-white">{stat.value}</strong>
          </div>
        </div>
      </div>

      {/* Footer Area with Tech Badges and Direct Action */}
      <div className="relative z-10 pt-5 border-t border-white/[0.08] mt-6 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {service.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-white/60 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-lg"
            >
              {tech}
            </span>
          ))}
          {service.technologies.length > 3 && (
            <span className="text-[11px] font-mono text-white/40 self-center px-1">
              +{service.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-white transition-colors group/link"
          >
            <span>View Architecture</span>
            <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={() => onQuickView(service)}
            className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-all cursor-pointer"
            aria-label={`Quick scope overview for ${service.title}`}
          >
            Quick Scope
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const { openConsultation } = useConsultation();

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((service) => {
      const matchesCategory =
        activeCategory === "all" || service.category === activeCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="services"
      aria-labelledby="services-main-heading"
      className="relative w-full py-24 sm:py-32 bg-[#06080d] text-white overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18),transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-primary shadow-lg shadow-primary/10">
            <Cpu className="size-3.5" /> Capabilities
          </div>

          <h2
            id="services-main-heading"
            className="font-space text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-white"
          >
            Digital Dominance
          </h2>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl w-full lg:w-auto">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services or tech..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all backdrop-blur-md"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs font-mono"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 12 Services Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onQuickView={(s) => setSelectedService(s)}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20 space-y-4 rounded-3xl bg-white/[0.02] border border-white/10">
            <p className="text-white/60 text-lg">
              No engineering services matched your query &quot;{searchQuery}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="text-primary hover:underline text-sm font-semibold cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>

      {/* Quick Scope Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c1017] border border-white/20 p-6 sm:p-10 shadow-[0_0_50px_rgba(59,130,246,0.2)] z-10 text-white space-y-8"
            >
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-mono font-semibold text-primary">
                  {selectedService.categoryLabel}
                </div>
                <h3 className="font-space text-2xl sm:text-4xl font-extrabold text-white">
                  {selectedService.title}
                </h3>
                <p className="text-base text-white/70 leading-relaxed">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/50 flex items-center gap-2">
                  <Terminal className="size-4 text-primary" /> Supported Technologies & Stacks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Features & Deliverables Grid */}
              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-3 bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Zap className="size-4 text-amber-400" /> Architectural Features
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <ShieldCheck className="size-4 text-emerald-400" /> Standard Deliverables
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
                    {selectedService.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/50">
                    <span>Estimated Timeline:</span>
                    <span className="text-primary font-bold">{selectedService.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-primary/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-sm text-white">
                    Ready to build your {selectedService.title}?
                  </h4>
                  <p className="text-xs text-white/60">
                    Review the complete technical breakdown or schedule an architectural discovery call.
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    href={`/services/${selectedService.slug}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs sm:text-sm font-semibold text-white transition-all"
                  >
                    <span>Full Breakdown</span>
                    <ArrowUpRight className="size-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      const slug = selectedService.id;
                      setSelectedService(null);
                      openConsultation(slug);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all cursor-pointer shrink-0"
                  >
                    <span>Book Strategy Call</span>
                    <Sparkles className="size-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ServicesSection;
