"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

const differentiators = [
  {
    title: "Business first",
    desc: "Technology architecture decisions are argued strictly against quantifiable business ROI, not developer trends.",
  },
  {
    title: "Engineering excellence",
    desc: "Clean, modular TypeScript systems that another team can easily read, extend, and maintain after handover.",
  },
  {
    title: "One accountable partner",
    desc: "Strategy, UI/UX design, full-stack engineering, and cloud DevOps unified in one senior team without handoff friction.",
  },
  {
    title: "Flexible engagement",
    desc: "Fixed milestone project, dedicated monthly team, or long-term technology partnership &mdash; whichever fits your workflow.",
  },
  {
    title: "Regional compliance",
    desc: "ZATCA Phase 2 e-invoicing, Arabic-first UX, Mada, and local payment rails natively integrated from day one.",
  },
  {
    title: "Long-term architecture",
    desc: "We engineer systems designed to adapt and scale, because the business operations they serve will grow.",
  },
];

export function WhyDevolopySection() {
  const { openConsultation } = useConsultation();

  return (
    <section id="why-devolopy" className="w-full py-20 sm:py-28 bg-background text-foreground border-b border-border transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Top: 6 Differentiators */}
        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
              Why Devolopy
            </span>
            <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              What actually changes when you partner with us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-card border border-border/80 dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg space-y-3"
              >
                <div className="size-8 rounded-xl bg-primary/15 text-primary flex items-center justify-center font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-space text-xl font-bold text-foreground">{diff.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: 3 Engagement Models */}
        <div className="space-y-10 pt-12 border-t border-border">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
              Engagement Models
            </span>
            <h2 className="font-space text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Three ways to work together.
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Transparent, milestone-based structures designed for early-stage builds through to enterprise transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Model 1 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border/80 dark:border-white/10 flex flex-col justify-between space-y-6 hover:border-border transition-all">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C]">
                  Defined Scope
                </span>
                <h3 className="font-space text-2xl font-bold text-foreground">Fixed Milestone Project</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Guaranteed timeline, fixed budget, explicit technical deliverables, and milestone payment schedules.
                </p>
                <ul className="space-y-2.5 pt-4 border-t border-border text-xs sm:text-sm text-foreground/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#C0703C] shrink-0" />
                    <span>Scope agreed in writing prior to build</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#C0703C] shrink-0" />
                    <span>Payments tied to testable milestone demos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#C0703C] shrink-0" />
                    <span>Complete IP handover &amp; team onboarding</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => openConsultation("custom-software")}
                className="w-full py-3.5 rounded-2xl bg-secondary hover:bg-secondary/80 text-foreground font-semibold text-sm transition-all text-center cursor-pointer border border-border"
              >
                Choose Fixed Scope
              </button>
            </div>

            {/* Model 2: Highlighted */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-primary/10 via-card to-primary/20 dark:from-[#16191E] dark:via-[#0E1013] dark:to-primary/20 border-2 border-primary shadow-xl flex flex-col justify-between space-y-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                Most Popular
              </div>

              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Continuous Capacity
                </span>
                <h3 className="font-space text-2xl font-bold text-foreground">Dedicated Team</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Monthly engineering retainer, your direct product backlog, senior dedicated developers, daily standups.
                </p>
                <ul className="space-y-2.5 pt-4 border-t border-border text-xs sm:text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>Named senior engineers (no rotating agency pool)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>Embedded in your Jira, Slack, and GitHub</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>Scale capacity up or down monthly</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => openConsultation("custom-software")}
                className="w-full py-3.5 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 transition-all text-center cursor-pointer"
              >
                Engage Dedicated Team
              </button>
            </div>

            {/* Model 3 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border/80 dark:border-white/10 flex flex-col justify-between space-y-6 hover:border-border transition-all">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C]">
                  Long-Term Ownership
                </span>
                <h3 className="font-space text-2xl font-bold text-foreground">Technology Partnership</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  End-to-end technical leadership, continuous feature releases, security audits, and guaranteed SLA response.
                </p>
                <ul className="space-y-2.5 pt-4 border-t border-border text-xs sm:text-sm text-foreground/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#C0703C] shrink-0" />
                    <span>Quarterly technology &amp; AI roadmap planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#C0703C] shrink-0" />
                    <span>Strict 1-hour SLA emergency response times</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#C0703C] shrink-0" />
                    <span>Single accountable engineering partner</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => openConsultation("custom-software")}
                className="w-full py-3.5 rounded-2xl bg-secondary hover:bg-secondary/80 text-foreground font-semibold text-sm transition-all text-center cursor-pointer border border-border"
              >
                Explore Partnership
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyDevolopySection;
