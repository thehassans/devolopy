import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import HoverFooter from "@/components/ui/hover-footer";
import { ALL_SERVICES, getServiceBySlug } from "@/lib/services-data";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Zap,
  Code2,
  Clock,
  Send,
  ArrowUpRight,
  Layers,
} from "lucide-react";

export async function generateStaticParams() {
  return ALL_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Devolopy Digital Engineering`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} - Devolopy`,
      description: service.shortDescription,
      images: [{ url: service.heroImage }],
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    notFound();
  }

  const relatedServices = ALL_SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* ── Breadcrumb & Hero Banner ── */}
        <section className="relative py-16 sm:py-24 bg-[#090b10] text-white border-b border-white/10 overflow-hidden">
          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-[140px]"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-white/50 mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="size-3.5" />
              <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
              <ChevronRight className="size-3.5" />
              <span className="text-primary font-semibold">{service.title}</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-primary">
                  <Sparkles className="size-3.5" /> {service.categoryLabel}
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                  {service.title}
                </h1>

                <p className="text-lg sm:text-xl font-medium text-primary/90">
                  {service.tagline}
                </p>

                <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
                  {service.fullDescription}
                </p>

                {/* Quick actions */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="#inquiry"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    <span>Request Project Proposal</span>
                    <ArrowRight className="size-4" />
                  </Link>

                  <div className="flex items-center gap-2 text-xs font-mono text-white/60 bg-white/5 border border-white/10 px-4 py-3.5 rounded-xl">
                    <Clock className="size-4 text-primary" />
                    <span>Estimated Timeline: <strong className="text-white">{service.timeline}</strong></span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-card">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    width={800}
                    height={520}
                    className="w-full h-80 sm:h-96 object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono text-white/80">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">Enterprise Production Grade</span>
                    <span className="bg-primary/80 backdrop-blur-md px-3 py-1 rounded-md font-bold text-white">Devolopy Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Impact Metrics Bar ── */}
        <section aria-label="Performance Metrics" className="border-b border-border bg-secondary/30 py-8 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {service.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center p-3">
                  <span className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                    {metric.value}
                  </span>
                  <span className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Deep Architectural Capabilities & Tech Stack ── */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Features List */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-primary">
                  <Zap className="size-4" /> Capabilities Breakdown
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Engineered For Maximum Reliability
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  We don&apos;t build disposable templates. Every system is architected with strict performance standards, maintainable modular abstractions, and bank-grade security.
                </p>

                <div className="space-y-4 pt-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3.5 p-4 rounded-2xl bg-card border border-border">
                      <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Deliverables Box */}
              <div className="lg:col-span-5 space-y-6">
                {/* Tech Stack */}
                <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-lg space-y-4">
                  <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                    <Code2 className="size-4 text-primary" /> Supported Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-xl bg-secondary/80 border border-border text-xs sm:text-sm font-mono text-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="p-6 sm:p-8 rounded-3xl bg-primary/5 border border-primary/20 shadow-lg space-y-4">
                  <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                    <ShieldCheck className="size-4 text-primary" /> Guaranteed Deliverables
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-foreground/90 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4-Phase Delivery Engineering Process ── */}
        <section className="py-20 sm:py-28 bg-secondary/20 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-primary">
                <Layers className="size-3.5" /> Engineering Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                How We Deliver Your Project
              </h2>
              <p className="text-muted-foreground text-base">
                A transparent, agile workflow that eliminates guesswork and ensures zero delivery friction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm relative overflow-hidden space-y-3"
                >
                  <span className="font-mono text-3xl font-extrabold text-primary/40 block">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Frequently Asked Questions ── */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Everything you need to know about our {service.title} engagement.
              </p>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-border space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-2">
                    <span className="text-primary font-mono text-sm">Q:</span> {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Direct Service Inquiry Form ── */}
        <section id="inquiry" className="py-20 sm:py-28 bg-[#090b10] text-white border-t border-white/10 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                Start Your Project
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Request Scope & Estimate for {service.title}
              </h2>
              <p className="text-white/70 text-sm sm:text-base">
                Fill in the details below and our lead engineer will get back to you within 24 hours.
              </p>
            </div>

            <form className="p-8 sm:p-10 rounded-3xl bg-[#111318] border border-white/15 shadow-2xl space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5">Project Scope & Requirements</label>
                <textarea
                  rows={4}
                  required
                  placeholder={`Describe your goals, requirements, or timeline for ${service.title}...`}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-white/50">⚡ Includes 30-min architecture consultation.</span>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-primary/90 transition-all cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="size-4" />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ── Explore Related Services ── */}
        <section className="py-20 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Explore Other Solutions</h2>
              <Link href="/#services" className="text-xs sm:text-sm text-primary hover:underline font-semibold">
                View All 12 Services &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/services/${rel.slug}`}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono text-primary uppercase">{rel.categoryLabel}</span>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                      <span>{rel.title}</span>
                      <ArrowUpRight className="size-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{rel.shortDescription}</p>
                  </div>
                  <span className="text-xs font-semibold text-primary mt-4 flex items-center gap-1">
                    <span>Learn more</span> &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <HoverFooter />
    </div>
  );
}
