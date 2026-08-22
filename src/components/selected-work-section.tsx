"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

interface CaseStudy {
  id: string;
  num: string;
  title: string;
  client: string;
  category: string;
  tagline: string;
  desc: string;
  impact: string;
  impactLabel: string;
  image: string;
  accent: string;
  techs: string[];
  features: string[];
}

const projects: CaseStudy[] = [
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
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    accent: "#2B5CFF",
    techs: ["Flutter", "FastAPI", "PostgreSQL", "Redis", "AWS IoT"],
    features: ["Sub-second GPS Polling", "Driver Route Geofencing", "Automated Waybill Dispatch"],
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
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    accent: "#C0703C",
    techs: ["Odoo 18", "Python", "PostgreSQL", "Docker", "ZATCA"],
    features: ["ZATCA Phase 2 E-Invoicing", "Multi-Store Inventory Sync", "Sub-second Cloud POS"],
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
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    accent: "#10B981",
    techs: ["Next.js 15", "Node.js", "PostgreSQL", "HIPAA Vault", "Twilio"],
    features: ["HIPAA-Compliant EHR", "Live Doctor Shift Scheduler", "Automated WhatsApp Sequences"],
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    accent: "#8B5CF6",
    techs: ["Next.js 15", "Shopify Plus", "Stripe", "Tailwind CSS", "Redis"],
    features: ["0.4s First Contentful Paint", "1-Click Mada & Stripe Rails", "Dynamic Multi-Currency"],
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
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    accent: "#EC4899",
    techs: ["n8n", "OpenAI GPT-4o", "Claude 3.5", "pgvector", "Python"],
    features: ["Multi-Format Invoice OCR", "Localized Vector Embeddings", "Automated GL Ledger Posting"],
  },
];

export function SelectedWorkSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { openConsultation } = useConsultation();

  // Track vertical scroll within this section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the spring scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.5,
  });

  // Translate horizontally from 0% to -68% across all cards
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-68%"]);

  return (
    <section
      id="selected-work"
      ref={targetRef}
      className="relative w-full h-[320vh] bg-background text-foreground border-b border-border transition-colors duration-300"
    >
      {/* Sticky Full-Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-8 sm:py-10">
        {/* ── Background Ambient Radial Glow ── */}
        <div
          className="pointer-events-none absolute top-1/3 left-1/4 w-[700px] h-[500px] bg-primary/5 blur-[160px] rounded-full"
          aria-hidden="true"
        />

        {/* ── Section Header ── */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 shrink-0 z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20 shadow-xs">
                <span className="size-2 rounded-full bg-[#C0703C] animate-pulse" />
                Selected Work &amp; Case Studies
              </span>
              <h2 className="font-space text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Engineered for measurable business impact.
              </h2>
            </div>

            {/* Scroll Indicator Prompt */}
            <div className="flex items-center gap-3 self-start sm:self-end text-xs font-mono text-muted-foreground bg-secondary/80 border border-border px-4 py-2 rounded-full shadow-xs">
              <span className="animate-pulse">SCROLL DOWN TO EXPLORE PROJECTS</span>
              <ArrowRight className="size-3.5 text-primary" />
            </div>
          </div>
        </div>

        {/* ── Horizontal Scrolling Track of Project Cards ── */}
        <div className="w-full overflow-hidden my-auto py-4 z-10">
          <motion.div
            style={{ x }}
            className="flex items-center gap-8 pl-4 sm:pl-12 lg:pl-20 pr-4 sm:pr-12 lg:pr-20"
          >
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="w-[88vw] sm:w-[580px] lg:w-[680px] h-[460px] sm:h-[480px] shrink-0 rounded-3xl bg-card border border-border/90 hover:border-primary/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl relative overflow-hidden group backdrop-blur-md"
              >
                {/* Top Ambient Card Glow */}
                <div
                  className="pointer-events-none absolute -top-20 -right-20 w-52 h-52 rounded-full blur-3xl opacity-15 transition-opacity group-hover:opacity-25"
                  style={{ backgroundColor: project.accent }}
                />

                {/* Card Top: Number + Client & Category */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-xs"
                        style={{
                          borderColor: `${project.accent}40`,
                          backgroundColor: `${project.accent}15`,
                          color: project.accent,
                        }}
                      >
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground uppercase font-medium">
                        {project.client}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-bold text-muted-foreground/60">
                      {project.num} // 05
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-space text-2xl sm:text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#C0703C] font-semibold mb-3">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-3 mb-4">
                    {project.desc}
                  </p>

                  {/* Core Features List */}
                  <div className="space-y-1.5 pt-2 mb-4">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Metrics + Tech Stack + Action CTA */}
                <div className="pt-4 border-t border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                  {/* Quantified Metric Badge */}
                  <div className="flex items-center gap-2.5">
                    <span
                      className="font-space text-2xl font-black tracking-tight"
                      style={{ color: project.accent }}
                    >
                      {project.impact}
                    </span>
                    <span className="text-[11px] text-muted-foreground font-medium leading-tight max-w-[170px]">
                      {project.impactLabel}
                    </span>
                  </div>

                  {/* Action Button */}
                  <button
                    type="button"
                    onClick={() => openConsultation("custom-software")}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-semibold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs group/btn shrink-0"
                  >
                    <span>Request Blueprint</span>
                    <ArrowUpRight className="size-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom Progress Indicator Track ── */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 shrink-0 z-10">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground pb-2">
            <span>01 // Nawa Logistics</span>
            <span>05 // AutoFlow AI</span>
          </div>
          <div className="relative h-1.5 w-full bg-secondary rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: smoothProgress, transformOrigin: "left" }}
              className="absolute inset-y-0 left-0 right-0 bg-primary rounded-full shadow-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedWorkSection;
