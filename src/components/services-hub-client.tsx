"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  Cpu,
  Clock,
  CheckCircle2,
  Search,
  SlidersHorizontal,
  ChevronRight,
  Server,
  Bot,
  Globe,
  Database,
  Smartphone,
} from "lucide-react";
import { ALL_SERVICES, ServiceDetail } from "@/lib/services-data";
import { useConsultation } from "@/components/consultation-modal";

export function ServicesHubClient() {
  const { openConsultation } = useConsultation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All 12 Capabilities", icon: Sparkles },
    { id: "Engineering & Web", label: "Web & Full-Stack", icon: Globe },
    { id: "Mobile & Apps", label: "Mobile Platforms", icon: Smartphone },
    { id: "ERP & Automation", label: "ERP & Workflows", icon: Database },
    { id: "AI & Cloud", label: "AI & Cloud Infra", icon: Bot },
    { id: "Growth & SEO", label: "SEO & Growth", icon: Zap },
  ];

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((svc) => {
      // Category match
      const categoryMatch =
        selectedCategory === "all" || svc.categoryLabel === selectedCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      if (!query) return categoryMatch;

      const titleMatch = svc.title.toLowerCase().includes(query);
      const taglineMatch = svc.tagline.toLowerCase().includes(query);
      const descMatch = svc.shortDescription.toLowerCase().includes(query);
      const techMatch = svc.technologies.some((t) =>
        t.toLowerCase().includes(query)
      );

      return categoryMatch && (titleMatch || taglineMatch || descMatch || techMatch);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* ── Search & Filter Controls Bar ── */}
      <section className="p-4 sm:p-6 rounded-3xl bg-card border border-border shadow-md space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech (e.g. Next.js, Odoo, AI, React)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-secondary/70 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all font-mono"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-muted-foreground hover:text-foreground px-2 py-0.5 rounded bg-muted"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results count & quick reset */}
          <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground w-full md:w-auto justify-between md:justify-end">
            <span>
              Showing <strong className="text-foreground">{filteredServices.length}</strong> of{" "}
              <strong>{ALL_SERVICES.length}</strong> services
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]"
                    : "bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/80"
                }`}
              >
                <Icon className={`size-3.5 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="space-y-8">
        {filteredServices.length === 0 ? (
          <div className="p-16 rounded-3xl bg-card border border-dashed border-border text-center space-y-4">
            <Search className="size-10 text-muted-foreground mx-auto" />
            <h3 className="font-space text-xl font-bold text-foreground">
              No matching capabilities found
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              We couldn&apos;t find any service matching &quot;{searchQuery}&quot;. Try selecting a different category or clearing your search.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-mono font-bold shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((serv, index) => {
              const numStr = (index + 1).toString().padStart(2, "0");
              return (
                <div
                  key={serv.id}
                  className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                >
                  {/* Ambient Hover Glow */}
                  <div className="pointer-events-none absolute -top-24 -right-24 size-48 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="space-y-5 relative z-10">
                    {/* Header bar with number & category */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-primary px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20">
                          {numStr}
                        </span>
                        <span className="text-xs font-mono font-bold text-[#C0703C]">
                          {serv.categoryLabel}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1 bg-secondary/80 px-2.5 py-1 rounded-full border border-border/60">
                        <Clock className="size-3 text-primary" />
                        {serv.timeline}
                      </span>
                    </div>

                    {/* Service Title */}
                    <Link href={`/services/${serv.slug}`}>
                      <h3 className="font-space text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {serv.title}
                      </h3>
                    </Link>

                    {/* Tagline */}
                    <p className="text-xs font-mono font-semibold text-primary/90 leading-relaxed">
                      {serv.tagline}
                    </p>

                    {/* Short Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {serv.shortDescription}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {serv.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-secondary text-muted-foreground border border-border/70 group-hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {serv.technologies.length > 4 && (
                        <span className="text-[10px] font-mono px-2 py-1 rounded-lg bg-secondary/50 text-muted-foreground/70">
                          +{serv.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom: Metric & Direct Action Link */}
                  <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between relative z-10">
                    <div>
                      <span className="font-space text-sm font-bold text-foreground block">
                        {serv.metrics[0]?.value}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground block">
                        {serv.metrics[0]?.label}
                      </span>
                    </div>

                    <Link
                      href={`/services/${serv.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-mono font-bold transition-all duration-200 shadow-xs"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ── Architecture Blueprint Banner ── */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-card via-secondary/30 to-card border border-border shadow-xl space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-primary">
            <Cpu className="size-4" /> Production Architecture Standard
          </div>
          <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-foreground">
            Zero Throwaway Code. 100% Architecture Guarantees.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Every engagement delivers fully documented, unit-tested, and containerized software backbones with direct CI/CD deployment pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-card border border-border/80 space-y-2">
            <span className="font-mono text-xl font-bold text-primary block">100% IP</span>
            <h4 className="font-space text-sm font-bold text-foreground">Full Codebase Transfer</h4>
            <p className="text-xs text-muted-foreground">Direct repository transfer to your GitHub/GitLab org.</p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-border/80 space-y-2">
            <span className="font-mono text-xl font-bold text-emerald-500 block">&lt; 100ms</span>
            <h4 className="font-space text-sm font-bold text-foreground">Edge Latency SLA</h4>
            <p className="text-xs text-muted-foreground">Global CDN edge routing and partial prerendered streams.</p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-border/80 space-y-2">
            <span className="font-mono text-xl font-bold text-[#C0703C] block">OWASP Top 10</span>
            <h4 className="font-space text-sm font-bold text-foreground">Hardened Security</h4>
            <p className="text-xs text-muted-foreground">Penetration tested APIs, RBAC, and encryption at rest.</p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-border/80 space-y-2">
            <span className="font-mono text-xl font-bold text-blue-500 block">24/7 SLA</span>
            <h4 className="font-space text-sm font-bold text-foreground">Mission Uptime</h4>
            <p className="text-xs text-muted-foreground">Automated Sentry alerting, health checks, and backups.</p>
          </div>
        </div>
      </section>

      {/* ── Discovery Consultation Trigger ── */}
      <section className="p-8 sm:p-12 rounded-3xl bg-primary/10 border border-primary/20 text-center space-y-6 shadow-xl">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
            Direct Architecture Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-space font-extrabold text-foreground">
            Have a specialized engineering requirement?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Speak directly with our senior systems architects. We will conduct a technical feasibility review and outline a concrete execution roadmap.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={() => openConsultation("custom-software")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Request Technical Briefing</span>
            <ArrowRight className="size-4" />
          </button>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-card hover:bg-secondary text-foreground font-semibold text-sm sm:text-base border border-border transition-all"
          >
            <span>View 12 Industry Blueprints</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ServicesHubClient;
