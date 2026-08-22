"use client";

import React, { useState } from "react";
import { Search, Compass, Palette, Code2, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";

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
    title: "Understand the business",
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
    title: "Product experience",
    desc: "UX wireflows first, visual design second. You interact with working prototypes and design tokens, not static mockups.",
    icon: Palette,
    deliverables: ["Figma Design Tokens", "Interactive Prototype", "Design System"],
  },
  {
    num: "04",
    stage: "Build",
    title: "Engineering and integration",
    desc: "Two-week sprints, live staging deployment you can test anytime, and system integrations handled continuously throughout the build.",
    icon: Code2,
    deliverables: ["Modular TypeScript Codebase", "Continuous CI/CD Staging", "API Microservices"],
  },
  {
    num: "05",
    stage: "Launch",
    title: "Deploy and train",
    desc: "Production deployment on Edge CDN, automated data migration, load testing, and hands-on training for your operational team.",
    icon: Rocket,
    deliverables: ["Edge CDN Deployment", "Data Migration Runbook", "Team Onboarding Training"],
  },
  {
    num: "06",
    stage: "Scale",
    title: "Support and improve",
    desc: "Guaranteed SLA response times, proactive monitoring, security updates, and quarterly feature iterations that keep moving after launch.",
    icon: TrendingUp,
    deliverables: ["SLA Response Agreement", "Automated Monitoring & Backups", "Quarterly Roadmap"],
  },
];

export function HowWeWorkSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="how-we-work" className="w-full py-20 sm:py-28 bg-[#08090B] text-[#F5F6F7] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
              How We Work
            </span>
            <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Six stages. No surprises in the middle.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              You know what is happening, what is next, and what it depends on &mdash; with complete transparency at every stage.
            </p>

            <div className="hidden lg:block pt-4 space-y-2">
              {steps.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left px-4 py-3 rounded-2xl border transition-all flex items-center justify-between ${
                    activeIdx === idx
                      ? "bg-white/10 border-primary text-white font-bold"
                      : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="font-mono text-xs uppercase tracking-wider">
                    {s.num} // {s.stage}
                  </span>
                  <span className="text-sm font-space">{s.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Process Cards Roadmap */}
          <div className="lg:col-span-7 space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-8 rounded-3xl border transition-all duration-300 shadow-lg cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.06] border-primary shadow-primary/10 -translate-y-1"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#C0703C] uppercase tracking-wider">
                        Stage {step.num} &mdash; {step.stage}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-bold">{step.num}</span>
                  </div>

                  <h3 className="font-space text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
                    {step.deliverables.map((deliv, dIdx) => (
                      <span
                        key={dIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
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
