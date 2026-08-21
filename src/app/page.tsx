import React from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import LandingAccordionItem from "@/components/ui/interactive-image-accordion";
import DevolopyBelieve from "@/components/ui/devolopy-believe";
import HighlightTextDemo from "@/components/ui/highlight-text-demo";
import Integrations from "@/components/ui/integrations-4-2";
import GridFeatureCardsSection from "@/components/ui/grid-feature-cards";
import FeatureSections from "@/components/ui/feature-sections";
import { MarqueeDemo } from "@/components/ui/marquee";
import HomeFAQ from "@/components/home-faq";
import FooterNewsletter from "@/components/ui/footer-newsletter";
import HoverFooter from "@/components/ui/hover-footer";
import { CheckCircle2, ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://devolopy.com/#webpage",
      url: "https://devolopy.com",
      name: "Devolopy - Full-Spectrum Digital Engineering Studio",
      description:
        "High-performance website development, mobile apps, Odoo ERP customization, autonomous n8n workflows, and SEO dominance.",
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://devolopy.com/#website",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What makes Devolopy different from standard web agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Devolopy is a full-spectrum digital engineering studio. We architect end-to-end ecosystems comprising custom Next.js web applications, native mobile apps, enterprise Odoo ERP backbones with financial automation, and autonomous n8n workflows.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can you deliver an enterprise-grade web or ERP project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our modular architecture and CI/CD pipelines allow us to deploy production-ready MVP websites in 2 to 3 weeks, complex custom web platforms in 4 to 6 weeks, and full-scale Odoo ERP deployments in 6 to 10 weeks.",
          },
        },
        {
          "@type": "Question",
          name: "Do you guarantee 100/100 Google Lighthouse and Core Web Vitals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every web platform we build undergoes strict performance audits on Edge networks, ensuring sub-second First Contentful Paint (FCP), zero Cumulative Layout Shift (CLS < 0.05), and perfect SEO accessibility scores.",
          },
        },
        {
          "@type": "Question",
          name: "Can you customize Odoo ERP for complex multi-entity business operations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We engineer custom Odoo 17 & 18 modules, multi-currency accounting engines, real-time inventory synchronization, automated PDF report generators, and secure payment and bank reconciliation APIs.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* JSON-LD Rich Snippet for FAQ & WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 flex flex-col">
        {/* 1. Hero Section with Filmstrip Carousel */}
        <HeroSection />

        {/* 2. Comprehensive Services Section (With 12 detailed dedicated pages) */}
        <ServicesSection />

        {/* 3. Interactive AI & Autonomous Systems Accordion Showcase */}
        <LandingAccordionItem />

        {/* 4. Devolopy Believes Manifesto Section */}
        <DevolopyBelieve />

        {/* 5. Highlight Text Philosophy Banner */}
        <HighlightTextDemo />

        {/* 6. Seamless Integrations Section */}
        <Integrations />

        {/* 7. Grid Feature Cards Section */}
        <div id="features">
          <GridFeatureCardsSection />
        </div>

        {/* 8. Enterprise Architecture & Interactive Solutions Highlights */}
        <section id="solutions" aria-labelledby="solutions-title" className="py-24 bg-secondary/20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-mono font-semibold text-primary">
                  <Code2 className="size-3.5" /> High-Performance Standards
                </div>
                <h2 id="solutions-title" className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                  Architected For High-Impact Digital Products
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Every project at Devolopy is built using modular TypeScript architecture, strict design system tokens, automated CI/CD pipelines, and deep SEO infrastructure.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Custom Website & Full-Stack Next.js App Router Architecture",
                    "Native Cross-Platform iOS & Android Mobile Engineering",
                    "Enterprise Odoo 17/18 ERP Customization & Financial Automation",
                    "High-Conversion Headless & Shopify E-Commerce Storefronts",
                    "Autonomous N8N & AI Agentic Workflow Automations",
                    "Aggressive Technical SEO, Core Web Vitals & Schema.org Rich Snippets",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="#services"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 text-sm sm:text-base font-semibold hover:bg-primary/90 transition-all shadow-md"
                  >
                    <span>Browse All Services</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl border border-border bg-card/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full bg-red-500/80" />
                      <div className="size-3 rounded-full bg-amber-500/80" />
                      <div className="size-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">devolopy.enterprise.ts</span>
                  </div>

                  <pre className="font-mono text-xs sm:text-sm text-foreground/90 overflow-x-auto leading-relaxed bg-background/70 p-5 rounded-2xl border border-border/50">
{`// Devolopy Enterprise Stack Manifest
export const servicesArchitecture = {
  web: ["Next.js 14/15", "React", "TypeScript", "Tailwind CSS"],
  mobile: ["React Native", "Flutter", "iOS Swift", "Android Kotlin"],
  erp: ["Odoo 17/18", "Python", "PostgreSQL", "API Microservices"],
  ecommerce: ["Next.js Commerce", "Shopify Plus", "Stripe", "Apple Pay"],
  automation: ["n8n Enterprise", "Webhooks", "AI Agent Copilots"],
  growth: {
    seo: "Schema.org Rich Snippets + 100 Core Web Vitals",
    cro: "A/B Multivariate Testing & Funnel Optimization",
  },
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Tech Stack Infinite Marquee Showcase */}
        <section aria-label="Enterprise Technologies" className="border-t border-border bg-background">
          <MarqueeDemo />
        </section>

        {/* 10. Powerful Feature Sections (Positioned directly above FAQ) */}
        <FeatureSections />

        {/* 11. Comprehensive FAQ Section */}
        <HomeFAQ />

        {/* 12. Newsletter & Call to Action */}
        <div id="about">
          <FooterNewsletter />
        </div>
      </main>

      {/* 13. Devolopy Interactive Hover Footer */}
      <HoverFooter />
    </div>
  );
}
