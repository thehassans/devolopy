import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import HoverFooter from "@/components/ui/hover-footer";
import { ALL_SERVICES } from "@/lib/services-data";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Full-Stack Software Engineering & Digital Capabilities | Devolopy",
  description:
    "Explore Devolopy's comprehensive engineering capabilities: Next.js 15 web applications, React Native & Flutter mobile apps, enterprise Odoo ERP customizations, n8n automations, AI agents, and cloud DevOps.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Engineering Services & Capabilities | Devolopy",
    description:
      "Full-stack digital engineering: Next.js Web Development, Mobile Apps, Odoo ERP, n8n Workflows, Technical SEO, and AI Agentic Automation.",
    url: "https://devolopy.com/services",
    siteName: "Devolopy",
    images: [
      {
        url: "/DevolopyDarkTheme.png",
        width: 1200,
        height: 630,
        alt: "Devolopy Engineering Capabilities",
      },
    ],
  },
};

export default function ServicesIndexPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devolopy.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/services#webpage`,
        url: `${siteUrl}/services`,
        name: "Enterprise Digital Engineering Capabilities & Services",
        description: "Full-stack software engineering, Odoo ERP, and AI automation capabilities.",
        publisher: {
          "@type": "Organization",
          name: "Devolopy",
          logo: `${siteUrl}/DevolopyDarkTheme.png`,
        },
      },
      {
        "@type": "ItemList",
        itemListElement: ALL_SERVICES.map((serv, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: serv.title,
          url: `${siteUrl}/services/${serv.slug}`,
          description: serv.shortDescription,
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
            name: "Services",
            item: `${siteUrl}/services`,
          },
        ],
      },
    ],
  };

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 shadow-xs">
              <Sparkles className="size-3.5" />
              Full-Spectrum Engineering Capabilities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-foreground leading-[1.08]">
              Mission-Critical Digital Engineering Engineered For Scale.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal">
              From sub-second Next.js 15 web applications and native cross-platform mobile apps to hardened enterprise Odoo ERP instances and autonomous AI agentic workflows.
            </p>
          </section>

          {/* Core Architectural Pillars */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-xs space-y-4">
              <div className="size-12 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-bold">
                <Code2 className="size-6" />
              </div>
              <h2 className="text-xl font-space font-bold text-foreground">
                Strict Type-Safe Codebases
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Zero disposable code. We engineer modular, self-documenting TypeScript and Python architectures designed for longevity and frictionless developer onboarding.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-xs space-y-4">
              <div className="size-12 rounded-2xl bg-[#C0703C]/10 text-[#C0703C] border border-[#C0703C]/20 flex items-center justify-center font-bold">
                <Cpu className="size-6" />
              </div>
              <h2 className="text-xl font-space font-bold text-foreground">
                Sub-Second Edge Latency
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every millisecond matters. We enforce partial prerendering, streaming Suspense, Redis query caching, and global CDN routing to achieve 100/100 Core Web Vitals.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-xs space-y-4">
              <div className="size-12 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center font-bold">
                <ShieldCheck className="size-6" />
              </div>
              <h2 className="text-xl font-space font-bold text-foreground">
                100% Code &amp; IP Ownership
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You own 100% of your Git repositories, cloud accounts, database instances, and intellectual property from day one with zero vendor lock-in.
              </p>
            </div>
          </section>

          {/* Complete 12 Capabilities Grid */}
          <section className="space-y-12">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                  Complete Capability Index
                </span>
                <h2 className="text-2xl sm:text-3xl font-space font-bold text-foreground">
                  Explore Specialized Engineering Disciplines
                </h2>
              </div>

              <span className="text-xs font-mono text-muted-foreground px-3 py-1 rounded-full bg-secondary">
                12 Production Disciplines
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {ALL_SERVICES.map((serv, index) => (
                <Link
                  key={serv.id}
                  href={`/services/${serv.slug}`}
                  className="group flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#C0703C] bg-[#C0703C]/10 px-3 py-1 rounded-full border border-[#C0703C]/20">
                        {serv.categoryLabel}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                        <Clock className="size-3 text-primary" />
                        {serv.timeline}
                      </span>
                    </div>

                    <h3 className="text-2xl font-space font-bold text-foreground group-hover:text-primary transition-colors">
                      {serv.title}
                    </h3>

                    <p className="text-xs font-medium text-primary font-mono">
                      {serv.tagline}
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {serv.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {serv.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-muted-foreground">
                      {serv.metrics[0].value} {serv.metrics[0].label}
                    </span>

                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-primary group-hover:underline">
                      <span>Explore Scope</span>
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
                Immediate Engineering Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl font-space font-extrabold text-foreground">
                Have a specialized engineering requirement?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Speak directly with our senior full-stack architects. We will conduct a technical feasibility review and outline a concrete execution roadmap.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/#newsletter"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base shadow-lg shadow-primary/25 transition-all hover:scale-[1.02]"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/industries"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-card hover:bg-secondary text-foreground font-semibold text-sm sm:text-base border border-border transition-all"
              >
                <span>View Industry Blueprints</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <HoverFooter />
    </div>
  );
}
