import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import HoverFooter from "@/components/ui/hover-footer";
import { industriesData } from "@/lib/industries-data";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  Building2,
  CheckCircle2,
  Cpu,
  Workflow,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Domain Specializations & Enterprise Software Engineering | Devolopy",
  description:
    "Explore how Devolopy architects and engineers mission-critical software, Odoo ERP implementations, automated workflow telemetry, and high-concurrency digital platforms across 12 major industry verticals.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industry Domain Specializations | Devolopy",
    description:
      "Enterprise software architecture, Odoo ERP customization, and automated telemetry engineered for Retail, Logistics, Healthcare, Food & Beverage, Manufacturing, and Scale Startups.",
    url: "https://devolopy.com/industries",
    siteName: "Devolopy",
    images: [
      {
        url: "/DevolopyDarkTheme.png",
        width: 1200,
        height: 630,
        alt: "Devolopy Industry Blueprints",
      },
    ],
  },
};

export default function IndustriesIndexPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devolopy.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/industries#webpage`,
        url: `${siteUrl}/industries`,
        name: "Industry Domain Specializations & Enterprise Software Engineering",
        description: "Enterprise software architecture engineered for 12 major commercial industries.",
        publisher: {
          "@type": "Organization",
          name: "Devolopy",
          logo: `${siteUrl}/DevolopyDarkTheme.png`,
        },
      },
      {
        "@type": "ItemList",
        itemListElement: industriesData.map((ind, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: ind.name,
          url: `${siteUrl}/industries/${ind.slug}`,
          description: ind.summary,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Industries",
            item: `${siteUrl}/industries`,
          },
        ],
      },
    ],
  };

  const categories = Array.from(new Set(industriesData.map((d) => d.category)));

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {/* Header Section */}
          <section className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20 shadow-xs">
              <Sparkles className="size-3.5" />
              Domain Architecture &amp; Execution
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-foreground leading-[1.08]">
              We Learn Your Operation Before We Write A Single Line of Code.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal">
              Every commercial industry operates on distinct physical and digital telemetry rails. Devolopy eliminates operational bottlenecks by designing unified systems — from shop-floor and point-of-sale hardware integration to automated cloud ledgers.
            </p>
          </section>

          {/* Core Architectural Tenets Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-xs space-y-4">
              <div className="size-12 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-bold">
                <Workflow className="size-6" />
              </div>
              <h2 className="text-xl font-space font-bold text-foreground">
                Domain-Driven Schema Design
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We model database schemas, state machines, and ERP workflows around your real-world operations rather than forcing generic templates.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-xs space-y-4">
              <div className="size-12 rounded-2xl bg-[#C0703C]/10 text-[#C0703C] border border-[#C0703C]/20 flex items-center justify-center font-bold">
                <Cpu className="size-6" />
              </div>
              <h2 className="text-xl font-space font-bold text-foreground">
                Offline-First Reliability
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cash registers, driver apps, and factory tablets maintain zero-latency local caching during network outages, auto-syncing seamlessly on reconnect.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-xs space-y-4">
              <div className="size-12 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center font-bold">
                <ShieldCheck className="size-6" />
              </div>
              <h2 className="text-xl font-space font-bold text-foreground">
                Regulatory &amp; Fiscal Compliance
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Native integrations with ZATCA Phase 2 cryptographic e-invoicing, HIPAA health data encryption, and Wasl transport telemetry standards.
              </p>
            </div>
          </section>

          {/* Industry Vertical Hub Grid */}
          <section className="space-y-12">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#C0703C] font-bold">
                  12 Core Commercial Domains
                </span>
                <h2 className="text-2xl sm:text-3xl font-space font-bold text-foreground">
                  Explore Specialized Sector Blueprints
                </h2>
              </div>

              <span className="text-xs font-mono text-muted-foreground px-3 py-1 rounded-full bg-secondary">
                12 Production Blueprints Live
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {industriesData.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        Sector // {ind.num}
                      </span>
                      <span className="text-[11px] font-mono text-[#C0703C] font-bold">
                        {ind.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-space font-bold text-foreground group-hover:text-primary transition-colors">
                      {ind.name}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ind.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {ind.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border/60"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-muted-foreground">
                      {ind.metrics[0].metric} {ind.metrics[0].label.split(" ")[0]}
                    </span>

                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-primary group-hover:underline">
                      <span>View Blueprint</span>
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Discovery Consultation Section */}
          <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 text-center space-y-6 shadow-xl">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                Immediate Engineering Discovery
              </span>
              <h2 className="text-3xl sm:text-4xl font-space font-extrabold text-foreground">
                Building custom software for your domain?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Speak directly with our senior systems architects. We will conduct an operational review and provide an actionable architectural blueprint for your organization.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/#newsletter"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base shadow-lg shadow-primary/25 transition-all hover:scale-[1.02]"
              >
                <span>Request Discovery Briefing</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-card hover:bg-secondary text-foreground font-semibold text-sm sm:text-base border border-border transition-all"
              >
                <span>Explore Core Capabilities</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <HoverFooter />
    </div>
  );
}
