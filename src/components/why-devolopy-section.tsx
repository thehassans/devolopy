"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

const differentiators = [
  {
    title: "Business first",
    desc: "Technology decisions are argued against business outcomes, not against developer preference.",
  },
  {
    title: "Engineering excellence",
    desc: "Systems that another team can read, extend and maintain after we hand them over.",
  },
  {
    title: "One technology partner",
    desc: "Strategy, design, development and support in one team. No handoff gaps to manage.",
  },
  {
    title: "Flexible engagement",
    desc: "Fixed project, dedicated team or long-term partnership — whichever fits how you work.",
  },
  {
    title: "Regional understanding",
    desc: "ZATCA e-invoicing, Arabic-first interfaces, Mada and local payment rails — handled, not discovered late.",
  },
  {
    title: "Long-term thinking",
    desc: "We build systems designed to change, because the business they serve will change.",
  },
];

export function WhyDevolopySection() {
  const { openConsultation } = useConsultation();

  return (
    <section id="why-devolopy" className="dv-sec dv-sec--light">
      <div className="dv-wrap">
        <div style={{ maxWidth: "54ch" }}>
          <span className="dv-eyebrow">Why Devolopy</span>
          <h2 className="dv-h2">What actually changes when you work with us.</h2>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="dv-diff">
          {differentiators.map((diff, idx) => (
            <div key={idx} className="dv-diff__i">
              <h3>{diff.title}</h3>
              <p>{diff.desc}</p>
            </div>
          ))}
        </div>

        {/* Engagement Models */}
        <div className="dv-eng">
          <div>
            <span className="dv-eyebrow">Engagement models</span>
            <h2 className="dv-h2" style={{ fontSize: "clamp(26px, 2.4vw, 36px)" }}>
              Three ways to work together.
            </h2>
          </div>

          <div className="dv-eng__grid">
            {/* Model 1 */}
            <article className="dv-eng__c">
              <span className="dv-eng__tag">For defined scope</span>
              <h3>Fixed Project</h3>
              <p>Fixed timeline and cost, agreed deliverables, milestone-based delivery.</p>
              <ul>
                <li>Scope agreed in writing before build</li>
                <li>Milestone payments tied to demos</li>
                <li>Handover and training included</li>
              </ul>
            </article>

            {/* Model 2: Highlighted */}
            <article className="dv-eng__c dv-eng__c--mid">
              <span className="dv-eng__tag">For continuous capacity</span>
              <h3>Dedicated Team</h3>
              <p>Monthly engagement, your roadmap, our engineers, direct communication.</p>
              <ul>
                <li>Named engineers, not a rotating pool</li>
                <li>Your tools, your standups</li>
                <li>Scale up or down monthly</li>
              </ul>
            </article>

            {/* Model 3 */}
            <article className="dv-eng__c">
              <span className="dv-eng__tag">For long-term ownership</span>
              <h3>Technology Partnership</h3>
              <p>Ongoing strategy, development and support across multiple systems.</p>
              <ul>
                <li>Quarterly technology roadmap</li>
                <li>Agreed SLA response times</li>
                <li>Single point of accountability</li>
              </ul>
            </article>
          </div>

          <div style={{ marginTop: "var(--s6)" }}>
            <button
              type="button"
              onClick={() => openConsultation("custom-software")}
              className="dv-link cursor-pointer"
            >
              Find the right engagement model
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyDevolopySection;
