"use client";

import React, { useState } from "react";
import { Search, Compass, Palette, Code2, Rocket, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

interface ProcessStep {
  num: string;
  stage: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
}

const steps: ProcessStep[] = [
  {
    num: "01",
    stage: "Discover",
    title: "Understand the business & operations",
    desc: "Workflows, users, goals, and the actual financial cost of the current bottleneck. We write down what success looks like before opening design software.",
    icon: Search,
    deliverables: ["Workflow Bottleneck Audit", "Core KPIs Definition", "User Personas"],
  },
  {
    num: "02",
    stage: "Define",
    title: "Scope, architecture, roadmap",
    desc: "Detailed technical specification, cloud data architecture, and a phased milestone plan with commitments you can hold us to.",
    icon: Compass,
    deliverables: ["Technical Architecture Document", "Milestone Roadmap", "Fixed Price & Timeline"],
  },
  {
    num: "03",
    stage: "Design",
    title: "Product experience & design system",
    desc: "UX wireflows first, visual design second. You interact with working prototypes and design tokens, not static mockups.",
    icon: Palette,
    deliverables: ["Figma Design Tokens", "Interactive Prototype", "Design System"],
  },
  {
    num: "04",
    stage: "Build",
    title: "Engineering & continuous integration",
    desc: "Two-week sprints, live staging deployment you can test anytime, and system integrations handled continuously throughout the build.",
    icon: Code2,
    deliverables: ["Modular TypeScript Codebase", "Continuous CI/CD Staging", "API Microservices"],
  },
  {
    num: "05",
    stage: "Launch",
    title: "Deploy, migrate data & train",
    desc: "Production deployment on Edge CDN, automated data migration, load testing, and hands-on training for your operational team.",
    icon: Rocket,
    deliverables: ["Edge CDN Deployment", "Data Migration Runbook", "Team Onboarding Training"],
  },
  {
    num: "06",
    stage: "Scale",
    title: "Proactive support & continuous scale",
    desc: "Guaranteed SLA response times, proactive monitoring, security updates, and quarterly feature iterations that keep moving after launch.",
    icon: TrendingUp,
    deliverables: ["SLA Response Agreement", "Automated Monitoring & Backups", "Quarterly Roadmap"],
  },
];

export function HowWeWorkSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const { openConsultation } = useConsultation();

  return (
    <section id="how-we-work" className="w-full py-20 sm:py-28 bg-background text-foreground border-b border-border transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start relative">
          {/* =========================================================
              LEFT COLUMN: Truly Sticky Left Header & Stage Nav
             ========================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6 z-20">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20 shadow-xs">
                <span className="size-2 rounded-full bg-[#C0703C] animate-pulse" />
                How We Work
              </span>

              <h2 className="font-space text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-foreground leading-[1.1]">
                Six stages. No surprises in the middle.
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                You know what is happening, what is next, and what it depends on &mdash; with complete transparency at every sprint.
              </p>
            </div>

            {/* Quick Interactive Stage Selector */}
            <div className="hidden lg:block space-y-2 p-3 rounded-2xl bg-card border border-border/80 dark:border-white/10 shadow-xs">
              {steps.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    activeIdx === idx
                      ? "bg-primary text-primary-foreground border-primary font-bold shadow-xs"
                      : "bg-transparent border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <span className="font-mono text-xs uppercase tracking-wider">
                    {s.num} // {s.stage}
                  </span>
                  <span className="text-xs font-space font-medium truncate max-w-[190px]">
                    {s.title.split("&")[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Start Project Trigger */}
            <button
              type="button"
              onClick={() => openConsultation("custom-software")}
              className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-2xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-semibold text-sm transition-all duration-200 cursor-pointer border border-border group"
            >
              <span>Explore Our Project Methodology</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* =========================================================
              RIGHT COLUMN: 6 Interactive Process Stage Cards
             ========================================================= */}
          <div className="lg:col-span-7 space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-8 rounded-3xl border transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer ${
                    isSelected
                      ? "bg-card border-primary ring-1 ring-primary/40 -translate-y-1"
                      : "bg-card/70 dark:bg-white/[0.02] border-border/80 dark:border-white/10 hover:border-border"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="size-11 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-[#C0703C] uppercase tracking-wider block">
                          Stage {step.num} &mdash; {step.stage}
                        </span>
                        <h3 className="font-space text-2xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground/60 font-bold hidden sm:inline">
                      {step.num}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3">
                    {step.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-border/60 dark:border-white/10 flex flex-wrap gap-2">
                    {step.deliverables.map((deliv, dIdx) => (
                      <span
                        key={dIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-secondary/80 dark:bg-white/5 border border-border/60 dark:border-white/10 text-foreground/85 font-medium"
                      >
                        <CheckCircle2 className="size-3 text-primary shrink-0" />
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWorkSection;
