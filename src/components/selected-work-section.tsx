"use client";

import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

interface CaseStudyItem {
  id: string;
  num: string;
  title: string;
  client: string;
  category: string;
  tagline: string;
  desc: string;
  impact: string;
  impactLabel: string;
  accent: string;
  techs: string[];
  features: string[];
  isOffset?: boolean;
}

const projects: CaseStudyItem[] = [
  {
    id: "nawa-fleet",
    num: "01",
    title: "Nawa Logistics Telematics OS",
    client: "Nawa Logistics GCC",
    category: "Operations & Fleet",
    tagline: "Enterprise Fleet Telematics & Driver Mobile Dispatch",
    desc: "Custom fleet dispatcher mobile application with live GPS geofencing, sub-second route telemetry, and automated driver WhatsApp/SMS alerts.",
    impact: "1,200+",
    impactLabel: "Fleet Vehicles Tracked (99.99% Uptime)",
    accent: "#2B5CFF",
    techs: ["Flutter", "FastAPI", "PostgreSQL", "Redis", "AWS IoT"],
    features: ["Sub-second GPS Polling", "Driver Route Geofencing", "Automated Waybill Dispatch"],
    isOffset: false,
  },
  {
    id: "tamkin-pos",
    num: "02",
    title: "Tamkin Multi-Branch ERP & POS",
    client: "Tamkin Retail Group",
    category: "Commerce & Retail",
    tagline: "Enterprise Odoo 18 Multi-Store Synchronization",
    desc: "Enterprise Odoo 18 implementation syncing 42 physical branch POS stations with real-time stock replenishment and ZATCA Phase 2 e-invoicing.",
    impact: "$48M+",
    impactLabel: "Annual GMV Synced Across 42 Branches",
    accent: "#C0703C",
    techs: ["Odoo 18", "Python", "PostgreSQL", "Docker", "ZATCA"],
    features: ["ZATCA Phase 2 E-Invoicing", "Multi-Store Inventory Sync", "Sub-second Cloud POS"],
    isOffset: true,
  },
  {
    id: "cura-health",
    num: "03",
    title: "Cura Health Patient & EHR Portal",
    client: "Cura Medical Centers",
    category: "Healthcare & Clinics",
    tagline: "HIPAA-Ready Telehealth & Electronic Health Records",
    desc: "HIPAA-ready digital health platform uniting electronic health records (EHR), multi-doctor scheduling, and automated patient WhatsApp reminders.",
    impact: "98%",
    impactLabel: "Reduction in Patient Appointment No-Shows",
    accent: "#10B981",
    techs: ["Next.js 15", "Node.js", "PostgreSQL", "HIPAA Vault", "Twilio"],
    features: ["HIPAA-Compliant EHR", "Live Doctor Shift Scheduler", "Automated WhatsApp Sequences"],
    isOffset: false,
  },
  {
    id: "souq-plus",
    num: "04",
    title: "SouqPlus Headless Storefront",
    client: "SouqPlus E-Commerce",
    category: "Headless Commerce",
    tagline: "Sub-Second Next.js Headless Checkout Funnel",
    desc: "Sub-second Next.js headless storefront with 1-click Mada and Stripe checkout, real-time stock sync, and localized Arabic/English interfaces.",
    impact: "+64%",
    impactLabel: "Mobile Checkout Conversion Rate Lift",
    accent: "#8B5CF6",
    techs: ["Next.js 15", "Shopify Plus", "Stripe", "Tailwind CSS", "Redis"],
    features: ["0.4s First Contentful Paint", "1-Click Mada & Stripe Rails", "Dynamic Multi-Currency"],
    isOffset: true,
  },
  {
    id: "autoflow-ai",
    num: "05",
    title: "AutoFlow Autonomous Document AI",
    client: "FinLease Financial",
    category: "AI & Automation",
    tagline: "Autonomous n8n OCR & pgvector RAG Pipeline",
    desc: "Intelligent document synthesis engine parsing multi-page supplier invoices and bank PDF statements with localized pgvector RAG search.",
    impact: "85K+",
    impactLabel: "Monthly Invoices Processed with Zero Manual Entry",
    accent: "#EC4899",
    techs: ["n8n", "OpenAI GPT-4o", "Claude 3.5", "pgvector", "Python"],
    features: ["Multi-Format Invoice OCR", "Localized Vector Embeddings", "Automated GL Ledger Posting"],
    isOffset: false,
  },
  {
    id: "apex-cloud",
    num: "06",
    title: "Apex Multi-Cloud CI/CD Architecture",
    client: "Apex Energy Holdings",
    category: "Cloud & Infrastructure",
    tagline: "Automated Terraform IaC & Zero-Downtime Blue/Green Pipelines",
    desc: "Multi-region cloud infrastructure migration across AWS and GCP with Kubernetes orchestration, automated failovers, and 40% compute bill reduction.",
    impact: "99.99%",
    impactLabel: "Production Uptime Across 14 Million Daily Requests",
    accent: "#0284C7",
    techs: ["Terraform", "Kubernetes", "AWS", "GitHub Actions", "Docker"],
    features: ["Zero-Downtime Deployments", "Automated Disaster Recovery", "-40% Cloud Bill Overhead"],
    isOffset: true,
  },
];

export function SelectedWorkSection() {
  const { openConsultation } = useConsultation();

  return (
    <section
      id="selected-work"
      className="w-full py-24 sm:py-32 bg-background text-foreground border-b border-border transition-colors duration-300 relative"
    >
      {/* Atmospheric Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-10 w-[550px] h-[450px] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/3 right-10 w-[500px] h-[400px] bg-[#C0703C]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start relative">
          {/* =========================================================
              LEFT COLUMN: Sticky Header & "Have a project?" Card
             ========================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-8 z-20">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20 shadow-xs">
                <span className="size-2 rounded-full bg-[#C0703C] animate-pulse" />
                Selected Work &amp; Case Studies
              </span>

              <h2 className="font-space text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-foreground leading-[1.06]">
                Engineered for Measurable Business Impact
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Explore how we design, build, and deploy production systems that eliminate bottlenecks, automate workflows, and drive revenue.
              </p>
            </div>

            {/* Core Value Highlights */}
            <div className="p-5 rounded-2xl bg-card border border-border/80 dark:border-white/10 shadow-xs space-y-3">
              <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <ShieldCheck className="size-4 text-primary shrink-0" />
                <span>100% Real Production Deployments</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <TrendingUp className="size-4 text-primary shrink-0" />
                <span>Proven ROI &amp; Quantified Performance Metrics</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <Zap className="size-4 text-primary shrink-0" />
                <span>Enterprise Scalability &amp; SLA Guarantees</span>
              </div>
            </div>

            {/* Luxury "Have a project?" CTA Card */}
            <div className="p-7 rounded-3xl bg-card border-2 border-border/90 dark:border-white/15 shadow-xl relative overflow-hidden group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative z-10">
                <div>
                  <h3 className="font-space text-2xl font-bold text-foreground">
                    Have a project?
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    Talk directly with our lead architects.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openConsultation("custom-software")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200 hover:scale-[1.03] shrink-0 cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Ultra-Clean Project Case Study Cards
             ========================================================= */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-card border border-border/80 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl dark:shadow-2xl backdrop-blur-md ${
                    project.isOffset ? "sm:translate-y-8" : ""
                  }`}
                >
                  <div>
                    {/* Top Meta: Number + Category */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-xs"
                        style={{
                          borderColor: `${project.accent}40`,
                          backgroundColor: `${project.accent}15`,
                          color: project.accent,
                        }}
                      >
                        {project.category}
                      </span>
                      <span className="font-mono text-xs font-bold text-muted-foreground/60">
                        {project.num}
                      </span>
                    </div>

                    {/* Client Name */}
                    <span className="text-[11px] font-mono text-muted-foreground block mb-1 font-medium">
                      Client // {project.client}
                    </span>

                    {/* Title */}
                    <h3 className="font-space text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs font-mono text-[#C0703C] font-semibold mb-3">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.desc}
                    </p>

                    {/* Core Features */}
                    <div className="space-y-1.5 pt-1 mb-5">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                          <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Quantified Impact + Action Button */}
                  <div className="pt-4 border-t border-border/70 mt-auto flex items-end justify-between gap-3">
                    <div>
                      <span
                        className="font-space text-2xl font-black tracking-tight block"
                        style={{ color: project.accent }}
                      >
                        {project.impact}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-medium leading-tight block">
                        {project.impactLabel}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => openConsultation("custom-software")}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-foreground/30 dark:border-white/20 hover:border-primary hover:bg-primary hover:text-primary-foreground text-foreground font-semibold text-xs transition-all duration-200 group/btn cursor-pointer shadow-xs shrink-0"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="size-3.5 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedWorkSection;
