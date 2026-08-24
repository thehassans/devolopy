import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import HoverFooter from "@/components/ui/hover-footer";
import { ALL_SERVICES } from "@/lib/services-data";
import { ServicesHubClient } from "@/components/services-hub-client";
import {
  ArrowRight,
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
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

          {/* Interactive Filter, Search & Capabilities Client Grid */}
          <ServicesHubClient />
        </div>
      </main>

      <HoverFooter />
    </div>
  );
}
