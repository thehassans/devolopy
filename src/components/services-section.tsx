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
  Bot,
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
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ALL_SERVICES, ServiceDetail } from "@/lib/services-data";
import { useConsultation } from "./consultation-modal";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "engineering", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "erp-automation", label: "Odoo & N8N" },
  { id: "growth", label: "SEO & Growth" },
  { id: "ai-cloud", label: "AI & Cloud" },
];

const ICONS_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "website-development": Globe,
  "mobile-app-development": Smartphone,
  "odoo-development": Layers,
  "e-commerce": ShoppingCart,
  "n8n-development": Workflow,
  "seo": Search,
  "ai-agentic-automation": Bot,
  "cloud-devops": Cloud,
  "ui-ux-design-systems": Palette,
  "api-microservices": Server,
  "custom-crm-portals": Users,
  "conversion-optimization": TrendingUp,
};

const STATS_MAP: Record<string, { label: string; value: string; badgeColor: string }> = {
  "website-development": { label: "Performance", value: "100/100 Vitals", badgeColor: "text-blue-600 dark:text-cyan-400 border-blue-500/20 dark:border-cyan-500/30 bg-blue-500/10" },
  "mobile-app-development": { label: "Engine", value: "60 FPS Native", badgeColor: "text-emerald-600 dark:text-emerald-400 border-emerald-500/20 dark:border-emerald-500/30 bg-emerald-500/10" },
  "odoo-development": { label: "Architecture", value: "Multi-Entity ERP", badgeColor: "text-purple-600 dark:text-purple-400 border-purple-500/20 dark:border-purple-500/30 bg-purple-500/10" },
  "e-commerce": { label: "Speed", value: "<800ms Checkout", badgeColor: "text-sky-600 dark:text-blue-400 border-sky-500/20 dark:border-blue-500/30 bg-sky-500/10" },
  "n8n-development": { label: "Automation", value: "-90% Manual Ops", badgeColor: "text-amber-600 dark:text-amber-400 border-amber-500/20 dark:border-amber-500/30 bg-amber-500/10" },
  "seo": { label: "Visibility", value: "+320% Traffic", badgeColor: "text-emerald-600 dark:text-emerald-400 border-emerald-500/20 dark:border-emerald-500/30 bg-emerald-500/10" },
  "ai-agentic-automation": { label: "Copilots", value: "Custom LLMs", badgeColor: "text-indigo-600 dark:text-indigo-400 border-indigo-500/20 dark:border-indigo-500/30 bg-indigo-500/10" },
  "cloud-devops": { label: "Reliability", value: "99.99% SLA", badgeColor: "text-blue-600 dark:text-sky-400 border-blue-500/20 dark:border-sky-500/30 bg-blue-500/10" },
  "ui-ux-design-systems": { label: "Standards", value: "100% WCAG AA", badgeColor: "text-pink-600 dark:text-pink-400 border-pink-500/20 dark:border-pink-500/30 bg-pink-500/10" },
  "api-microservices": { label: "P99 Speed", value: "<15ms Edge", badgeColor: "text-teal-600 dark:text-teal-400 border-teal-500/20 dark:border-teal-500/30 bg-teal-500/10" },
  "custom-crm-portals": { label: "Architecture", value: "Real-time Sync", badgeColor: "text-violet-600 dark:text-violet-400 border-violet-500/20 dark:border-violet-500/30 bg-violet-500/10" },
  "conversion-optimization": { label: "Growth", value: "+45% Conversion", badgeColor: "text-orange-600 dark:text-orange-400 border-orange-500/20 dark:border-orange-500/30 bg-orange-500/10" },
};

/**
 * Ultra-Premium Minimalist 3D Tilt Card
 */
function Card3D({
  service,
  index,
  onQuickView,
}: {
  service: ServiceDetail;
  index: number;
  onQuickView: (service: ServiceDetail) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [0, 1], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-7, 7]), springConfig);

  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spotOpacity = useSpring(0, { damping: 20, stiffness: 200 });

  const Icon = ICONS_MAP[service.id] || Zap;
  const stat = STATS_MAP[service.id] || {
    label: "Tier",
    value: "Enterprise",
    badgeColor: "text-primary border-primary/30 bg-primary/10",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
    spotX.set(mouseX);
    spotY.set(mouseY);
    spotOpacity.set(1);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
    spotOpacity.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        ref={cardRef}
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.03 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative flex h-full flex-col justify-between rounded-3xl bg-card border border-border/70 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl min-h-[390px] will-change-transform text-card-foreground"
      >
        {/* Layer 0: Specular Reflection Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl z-10 transition-opacity duration-300"
          style={{
            opacity: spotOpacity,
            background: useTransform(
              [spotX, spotY],
              ([latestX, latestY]) =>
                `radial-gradient(350px circle at ${latestX}px ${latestY}px, rgba(59, 130, 246, 0.12), transparent 75%)`
            ),
          }}
          aria-hidden="true"
        />

        {/* Ambient Corner Glow */}
        <div
          className="pointer-events-none absolute -top-10 -right-10 size-32 rounded-full bg-primary/10 blur-3xl opacity-20 group-hover:opacity-75 transition-opacity duration-500"
          aria-hidden="true"
        />

        {/* Layer 1: Top Information */}
        <div style={{ transform: "translateZ(25px)" }} className="relative z-20 space-y-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-xs text-muted-foreground tracking-wider">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-semibold bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                {service.categoryLabel}
              </span>
            </div>

            {/* 3D Floating Icon Capsule */}
            <div
              style={{ transform: "translateZ(35px)" }}
              className="flex size-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <Icon className="size-4.5" />
            </div>
          </div>

          {/* Title */}
          <Link
            href={`/services/${service.slug}`}
            style={{ transform: "translateZ(30px)" }}
            className="block group/title pt-0.5"
          >
            <h3 className="font-space text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover/title:text-primary transition-colors flex items-center justify-between">
              <span>{service.title}</span>
              <ArrowUpRight className="size-4.5 text-primary opacity-0 -translate-x-1.5 translate-y-1.5 group-hover/title:opacity-100 group-hover/title:translate-x-0 group-hover/title:translate-y-0 transition-all duration-300 shrink-0" />
            </h3>
          </Link>

          {/* Short Description */}
          <p
            style={{ transform: "translateZ(15px)" }}
            className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal"
          >
            {service.shortDescription}
          </p>

          {/* Live Benchmark SLA Pill */}
          <div style={{ transform: "translateZ(30px)" }} className="pt-0.5">
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-medium ${stat.badgeColor}`}>
              <span className="relative flex size-1.5">
                <span className="bg-current absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-current relative inline-flex size-1.5 rounded-full" />
              </span>
              <span>{stat.label}:</span>
              <strong className="text-foreground font-semibold">{stat.value}</strong>
            </div>
          </div>
        </div>

        {/* Layer 2: Footer Tech Stack & Actions */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="relative z-20 pt-4 border-t border-border/70 mt-5 space-y-3.5"
        >
          <div className="flex flex-wrap gap-1.5">
            {service.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono text-muted-foreground bg-secondary/70 border border-border/60 px-2 py-0.5 rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {service.technologies.length > 3 && (
              <span className="text-[10px] font-mono text-muted-foreground self-center px-0.5">
                +{service.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-1">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline transition-colors group/link"
            >
              <span>View Specs</span>
              <ArrowRight className="size-3 transition-transform group-hover/link:translate-x-1" />
            </Link>

            <button
              type="button"
              onClick={() => onQuickView(service)}
              className="px-3 py-1 rounded-lg bg-secondary/80 hover:bg-secondary border border-border text-[11px] font-mono text-foreground transition-all cursor-pointer shadow-sm"
              aria-label={`Quick scope overview for ${service.title}`}
            >
              Quick Scope
            </button>
          </div>
        </div>
      </motion.div>
    </div>
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
      className="relative w-full py-12 sm:py-16 bg-background text-foreground overflow-hidden border-t border-border"
    >
      {/* Background 3D Ambient Blur */}
      <div
        className="pointer-events-none absolute -top-40 left-1/3 -translate-x-1/2 w-[1200px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.07),transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Ultra-Minimalist Single-Deck Header & Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-border/50">
          {/* Left Title & Micro-Badge */}
          <div className="flex items-center gap-3">
            <h2
              id="services-main-heading"
              className="font-space text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
            >
              Digital Dominance
            </h2>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground bg-secondary/70 border border-border/70 px-2.5 py-0.5 rounded-full">
              <Cpu className="size-3 text-primary" /> 12 Capabilities
            </span>
          </div>

          {/* Right Filter Pills & Search */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-secondary/50 border border-border/70 backdrop-blur-md">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm scale-[1.02]"
                        : "text-muted-foreground hover:text-foreground hover:bg-background/60"
                    )}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* Compact Search Input */}
            <div className="relative w-full sm:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-8 pr-7 py-1.5 rounded-xl bg-background border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1.5 focus:ring-primary transition-all shadow-sm h-8.5"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-[10px] font-mono"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 12 Interactive 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-2">
          {filteredServices.map((service, index) => (
            <Card3D
              key={service.id}
              service={service}
              index={index}
              onQuickView={(s) => setSelectedService(s)}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 space-y-3 rounded-2xl bg-card border border-border">
            <p className="text-muted-foreground text-sm">
              No engineering services matched your query &quot;{searchQuery}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="text-primary hover:underline text-xs font-semibold cursor-pointer"
            >
              Reset filters
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
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border p-6 sm:p-10 shadow-2xl z-10 text-card-foreground space-y-8"
            >
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-mono font-semibold text-primary">
                  {selectedService.categoryLabel}
                </div>
                <h3 className="font-space text-2xl sm:text-4xl font-extrabold text-foreground">
                  {selectedService.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <Terminal className="size-4 text-primary" /> Supported Technologies & Stacks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-xl bg-secondary/70 border border-border text-xs sm:text-sm font-mono text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Features & Deliverables Grid */}
              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-3 bg-secondary/40 p-5 rounded-2xl border border-border">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Zap className="size-4 text-amber-500" /> Architectural Features
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 bg-secondary/40 p-5 rounded-2xl border border-border">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <ShieldCheck className="size-4 text-emerald-500" /> Standard Deliverables
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                    {selectedService.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span>Estimated Timeline:</span>
                    <span className="text-primary font-bold">{selectedService.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-5 rounded-2xl bg-secondary/60 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground">
                    Ready to build your {selectedService.title}?
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Review the complete technical breakdown or schedule an architectural discovery call.
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    href={`/services/${selectedService.slug}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-background hover:bg-secondary border border-border text-xs sm:text-sm font-semibold text-foreground transition-all"
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
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md transition-all cursor-pointer shrink-0"
                  >
                    <span>Book Strategy Call</span>
                    <ArrowRight className="size-4" />
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
