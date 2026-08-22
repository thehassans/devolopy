"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TechCategory {
  category: string;
  chips: Array<{ name: string; isLead?: boolean; note?: string }>;
}

const techCategories: TechCategory[] = [
  {
    category: "Frontend",
    chips: [
      {
        name: "Next.js",
        isLead: true,
        note: "Server-rendered React — the reason our clients' pages rank",
      },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Flutter" },
    ],
  },
  {
    category: "Backend",
    chips: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "PHP / Laravel" },
      { name: "REST & GraphQL APIs" },
    ],
  },
  {
    category: "Database",
    chips: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
  {
    category: "ERP & Business Systems",
    chips: [
      { name: "Odoo" },
      { name: "Odoo Studio" },
      { name: "Custom modules" },
      { name: "Third-party integrations" },
    ],
  },
  {
    category: "Cloud & DevOps",
    chips: [
      { name: "AWS" },
      { name: "Azure" },
      { name: "DigitalOcean" },
      { name: "Vercel" },
      { name: "Docker" },
      { name: "GitHub Actions" },
    ],
  },
  {
    category: "AI & Automation",
    chips: [
      { name: "OpenAI API" },
      { name: "Anthropic API" },
      { name: "Vector databases" },
      { name: "n8n" },
      { name: "Workflow automation" },
    ],
  },
];

export function TechStackSection() {
  return (
    <section id="technology" className="dv-sec dv-sec--dark">
      <div className="dv-wrap">
        <div style={{ maxWidth: "58ch" }}>
          <span className="dv-eyebrow">The stack we build on</span>
          <h2 className="dv-h2">Modern stack. Chosen for the job, not for the trend.</h2>
          <p className="dv-lead dv-muted-d">
            Every technology decision is made against three things: what the system has to do, who has to maintain it, and what
            it costs to run in five years.
          </p>
        </div>

        <div className="dv-tech">
          {techCategories.map((cat, idx) => (
            <div key={idx} className="dv-tech__row">
              <div className="dv-tech__cat">{cat.category}</div>
              <div className="dv-tech__chips">
                {cat.chips.map((chip, cIdx) => (
                  <span
                    key={cIdx}
                    className={`dv-chip ${chip.isLead ? "dv-chip--lead" : ""}`}
                  >
                    {chip.isLead ? (
                      <>
                        <b>{chip.name}</b>
                        {chip.note && <em>{chip.note}</em>}
                      </>
                    ) : (
                      chip.name
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "var(--s7)" }}>
          <Link href="#services" className="dv-link">
            See how we choose a stack
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
