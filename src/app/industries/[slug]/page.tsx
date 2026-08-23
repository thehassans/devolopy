import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import HoverFooter from "@/components/ui/hover-footer";
import {
  industriesData,
  getIndustryBySlug,
} from "@/lib/industries-data";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  HelpCircle,
  PhoneCall,
  Terminal,
  Workflow,
  Clock,
  Lock,
  ChevronRight,
} from "lucide-react";

interface IndustryPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const allSlugs = industriesData.flatMap((ind) => [
    { slug: ind.slug },
    { slug: ind.id },
  ]);
  return allSlugs;
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    return {
      title: "Industry Not Found | Devolopy",
      description: "The requested industry domain could not be found.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devolopy.com";
  const canonicalUrl = `${siteUrl}/industries/${industry.slug}`;

  return {
    title: `${industry.name} Enterprise Software Architecture & ERP | Devolopy`,
    description: `${industry.summary} Explore Devolopy's production blueprints, technology stack, and compliance frameworks for ${industry.name}.`,
    keywords: [
      industry.name,
      `${industry.name} Software Engineering`,
      `${industry.name} Odoo ERP`,
      `${industry.name} Automation Workflows`,
      ...industry.tags,
      "Devolopy Industry Blueprints",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${industry.name} Enterprise Architecture | Devolopy`,
      description: industry.summary,
      url: canonicalUrl,
      type: "website",
      siteName: "Devolopy",
      images: [
        {
          url: "/DevolopyDarkTheme.png",
          width: 1200,
          height: 630,
          alt: `${industry.name} - Devolopy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.name} Enterprise Architecture | Devolopy`,
      description: industry.summary,
      images: ["/DevolopyDarkTheme.png"],
    },
  };
}

export default function IndustryDetailPage({ params }: IndustryPageProps) {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devolopy.com";
  const canonicalUrl = `${siteUrl}/industries/${industry.slug}`;

  // JSON-LD Structured Data Schema for Google SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: `${industry.name} Digital Engineering & Technology Solutions`,
        description: industry.summary,
        provider: {
          "@type": "Organization",
          name: "Devolopy",
          url: siteUrl,
          logo: `${siteUrl}/DevolopyDarkTheme.png`,
        },
        areaServed: [
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "GCC" },
          { "@type": "Country", name: "Global" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${industry.name} Deliverables`,
          itemListElement: industry.deliverables.map((item, index) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item,
            },
            position: index + 1,
          })),
        },
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
          {
            "@type": "ListItem",
            position: 3,
            name: industry.name,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: industry.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Schema.org Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Header */}
      <Navbar />

      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="size-3 text-muted-foreground/50" />
              <Link href="/industries" className="hover:text-foreground">Industries</Link>
              <ChevronRight className="size-3 text-muted-foreground/50" />
              <span className="text-primary font-bold">{industry.name}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C0703C] uppercase tracking-wider bg-[#C0703C]/10 border border-[#C0703C]/20 px-3 py-1 rounded-full">
                Sector // {industry.num}
              </span>
              <span className="text-xs font-mono text-muted-foreground px-3 py-1 rounded-full bg-secondary">
                {industry.badge}
              </span>
            </div>
          </div>

          {/* Section 1: Hero Editorial Header (Pure Clean Typography) */}
          <section className="space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-primary">
                <Sparkles className="size-3.5" /> Domain Architecture &amp; Execution
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-foreground leading-[1.1]">
                {industry.headline}
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-4xl font-normal">
              {industry.overview}
            </p>

            {/* Quick Keyword Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {industry.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-secondary/80 text-foreground/80 border border-border"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </section>

          {/* Section 2: Quantified Performance & Production Metrics */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {industry.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-card border border-border/80 shadow-xs space-y-2 hover:border-primary/40 transition-colors"
              >
                <div className="text-2xl sm:text-4xl font-space font-extrabold text-foreground tracking-tight">
                  {m.metric}
                </div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </section>

          {/* Section 3: Operational Context & Domain Realities */}
          {industry.operationalContext && industry.operationalContext.length > 0 && (
            <section className="p-8 sm:p-10 rounded-3xl bg-card border border-border/80 space-y-6 shadow-xs">
              <div className="space-y-2 border-b border-border/70 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C0703C] font-bold">
                  Operational Context
                </span>
                <h2 className="text-2xl sm:text-3xl font-space font-bold text-foreground">
                  The Engineering Reality of {industry.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground leading-relaxed">
                {industry.operationalContext.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <span className="font-mono text-xs font-bold text-primary">
                      [0{idx + 1} // Core Dynamic]
                    </span>
                    <p className="text-foreground/90">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 4: Operational Challenges & Devolopy Resolutions */}
          <section className="space-y-8">
            <div className="space-y-2 border-b border-border/80 pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C0703C] font-bold">
                Operational Friction &amp; Remediation
              </span>
              <h2 className="text-2xl sm:text-3xl font-space font-bold text-foreground">
                Domain Bottlenecks We Eliminate
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.challenges.map((c, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-xs space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="size-7 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="font-space text-lg font-bold text-foreground">
                        {c.problem}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        <strong className="text-foreground/90 font-semibold">Impact: </strong>
                        {c.impact}
                      </p>
                      <div className="mt-3 p-3.5 rounded-2xl bg-secondary/80 border border-border text-xs text-foreground/90 leading-relaxed">
                        <strong className="text-primary font-bold">Devolopy Resolution: </strong>
                        {c.resolution}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Multi-Layer Architectural Blueprint */}
          <section className="space-y-8">
            <div className="space-y-2 border-b border-border/80 pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                Unified Stack Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-space font-bold text-foreground">
                How We Architect for {industry.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industry.architecturalStack.map((stack, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-card border border-border/80 space-y-4 hover:border-primary/40 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-bold">
                        {stack.layer}
                      </span>
                      <Layers className="size-4 text-muted-foreground" />
                    </div>
                    <h3 className="font-space text-base font-bold text-foreground">
                      {stack.tech}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {stack.description}
                    </p>
                  </div>

                  {stack.capabilities && stack.capabilities.length > 0 && (
                    <div className="pt-3 border-t border-border/60 space-y-1.5">
                      <span className="text-[10px] font-mono text-muted-foreground font-bold block uppercase">
                        Key Capabilities:
                      </span>
                      {stack.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-1.5 text-xs text-foreground/90">
                          <CheckCircle2 className="size-3 text-emerald-500 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: 5-Stage Step-by-Step Implementation Pipeline */}
          {industry.implementationStages && industry.implementationStages.length > 0 && (
            <section className="space-y-8">
              <div className="space-y-2 border-b border-border/80 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C0703C] font-bold">
                  Implementation Roadmap
                </span>
                <h2 className="text-2xl sm:text-3xl font-space font-bold text-foreground">
                  Step-by-Step Deployment Pipeline
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {industry.implementationStages.map((stg, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-card border border-border/80 space-y-3 shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                        {stg.stage}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                        <Clock className="size-3" />
                        {stg.duration}
                      </span>
                    </div>

                    <h3 className="font-space text-base font-bold text-foreground">
                      {stg.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {stg.details}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 7: Regulatory Compliance & Security Standards */}
          {industry.complianceAndSecurity && industry.complianceAndSecurity.length > 0 && (
            <section className="p-8 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-xs space-y-6">
              <div className="space-y-2 border-b border-border/70 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold">
                  Security &amp; Regulatory Governance
                </span>
                <h2 className="text-2xl sm:text-3xl font-space font-bold text-foreground">
                  Compliance Rails Built Directly Into the Architecture
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {industry.complianceAndSecurity.map((comp, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-secondary/70 border border-border space-y-2">
                    <div className="flex items-center gap-2 text-sm font-space font-bold text-foreground">
                      <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
                      <span>{comp.standard}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 8: Production Deliverables Checklist */}
          <section className="p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-md space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C0703C] font-bold">
                Engagement Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-space font-bold text-foreground">
                What We Deploy For Your Organization
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {industry.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 9: Frequently Asked Questions */}
          {industry.faqs.length > 0 && (
            <section className="space-y-6">
              <div className="space-y-2 border-b border-border/80 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-bold">
                  Technical Due Diligence
                </span>
                <h2 className="text-2xl sm:text-3xl font-space font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {industry.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-card border border-border/80 space-y-2"
                  >
                    <h3 className="font-space text-base font-bold text-foreground flex items-center gap-2">
                      <HelpCircle className="size-4 text-primary shrink-0" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 10: Final Consultation Call to Action */}
          <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 text-center space-y-6 shadow-xl">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                Immediate Engineering Kickoff
              </span>
              <h2 className="text-3xl sm:text-4xl font-space font-extrabold text-foreground">
                Ready to engineer modern systems for {industry.name}?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Schedule a discovery briefing with our principal systems engineers. We will analyze your operational bottlenecks, database schema, and deployment timeline.
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
                href="/industries"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-card hover:bg-secondary text-foreground font-semibold text-sm sm:text-base border border-border transition-all"
              >
                <span>Explore All 12 Industries</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <HoverFooter />
    </div>
  );
}
