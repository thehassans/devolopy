"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Cpu,
  ChevronRight,
  ShieldCheck,
  Zap,
  Code2,
  Clock,
  Send,
  ArrowUpRight,
  Layers,
  Check,
  Sparkles,
  HelpCircle,
  Lock,
  Workflow,
  ChevronDown,
} from "lucide-react";
import { ServiceDetail } from "@/lib/services-data";
import { useConsultation } from "@/components/consultation-modal";

interface ServiceDetailClientProps {
  service: ServiceDetail;
  relatedServices: ServiceDetail[];
}

export function ServiceDetailClient({
  service,
  relatedServices,
}: ServiceDetailClientProps) {
  const { openConsultation } = useConsultation();
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", scope: "" });

  const toggleFaq = (index: number) => {
    setActiveFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* ── Breadcrumb & Clean Typographic Hero Banner ── */}
      <section className="relative py-16 sm:py-24 bg-card border-b border-border overflow-hidden">
        {/* Ambient subtle glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-[140px]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-mono text-muted-foreground flex-wrap"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-muted-foreground/50" />
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <ChevronRight className="size-3.5 text-muted-foreground/50" />
            <span className="text-primary font-semibold">{service.title}</span>
          </nav>

          {/* Header Content */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C0703C]/30 bg-[#C0703C]/10 px-4 py-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-[#C0703C] shadow-xs">
              <span className="size-2 rounded-full bg-[#C0703C] animate-pulse" />
              <span>{service.categoryLabel}</span>
            </div>

            <h1 className="font-space text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-primary font-mono">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl font-normal">
              {service.fullDescription}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openConsultation(service.slug)}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm sm:text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="size-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-secondary border border-border px-5 py-4 rounded-full shadow-xs">
                <Clock className="size-4 text-primary" />
                <span>
                  Sprint Delivery: <strong className="text-foreground">{service.timeline}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Impact Metrics Bar ── */}
      <section
        aria-label="Performance Metrics"
        className="border-b border-border bg-secondary/30 py-8 backdrop-blur-sm -mt-20 sm:-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center p-3">
                <span className="font-space text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  {metric.value}
                </span>
                <span className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium font-mono">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deep Architectural Capabilities & Tech Stack ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Features List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-primary">
              <Zap className="size-4" /> Capabilities Breakdown
            </div>
            <h2 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Engineered For Maximum Reliability &amp; Scale
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              We don&apos;t build disposable templates. Every system is architected with strict performance standards, maintainable modular abstractions, and bank-grade security.
            </p>

            <div className="space-y-4 pt-2">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-primary/40 transition-colors"
                >
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-medium text-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Deliverables Box */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tech Stack */}
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-md space-y-4">
              <h3 className="font-space text-base font-bold text-foreground flex items-center gap-2">
                <Code2 className="size-4 text-primary" /> Supported Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl bg-secondary border border-border text-xs sm:text-sm font-mono text-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="p-6 sm:p-8 rounded-3xl bg-primary/5 border border-primary/20 shadow-md space-y-4">
              <h3 className="font-space text-base font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" /> Guaranteed Deliverables
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="size-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Multi-Layer Architecture Breakdown (If Available) ── */}
      {service.architecturalLayers && service.architecturalLayers.length > 0 && (
        <section className="py-20 sm:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-2 border-b border-border pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                  System Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-space font-bold text-foreground">
                  Multi-Layer Architectural Blueprint
                </h2>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {service.architecturalLayers.length} Integrated Architectural Layers
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.architecturalLayers.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-background border border-border space-y-4 hover:border-primary/50 transition-all shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-bold px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                        {layer.layer}
                      </span>
                      <Layers className="size-4 text-muted-foreground" />
                    </div>
                    <h3 className="font-space text-lg font-bold text-foreground">
                      {layer.tech}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {layer.description}
                    </p>
                  </div>

                  {layer.capabilities && layer.capabilities.length > 0 && (
                    <div className="pt-4 border-t border-border/60 space-y-2">
                      <span className="text-[10px] font-mono text-muted-foreground font-bold block uppercase tracking-wider">
                        Layer Capabilities:
                      </span>
                      {layer.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-mono">
                          <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4-Phase Delivery Engineering Process ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-primary">
            <Workflow className="size-3.5" /> Engineering Methodology
          </span>
          <h2 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
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
              className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm relative overflow-hidden space-y-3 hover:border-primary/40 transition-colors"
            >
              <span className="font-mono text-3xl font-extrabold text-primary/30 block">
                {step.step}
              </span>
              <h3 className="font-space text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Security, Governance & Compliance (If Available) ── */}
      {service.securityAndCompliance && service.securityAndCompliance.length > 0 && (
        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-2 border-b border-border pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold">
                Security &amp; Hardening Rails
              </span>
              <h2 className="text-2xl sm:text-3xl font-space font-bold text-foreground">
                Security Protections Built Into {service.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.securityAndCompliance.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-background border border-border space-y-2.5 shadow-xs"
                >
                  <div className="flex items-center gap-2 text-sm font-space font-bold text-foreground">
                    <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
                    <span>{sec.standard}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {sec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Frequently Asked Questions Accordion ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#C0703C] font-bold">
            Technical Due Diligence
          </span>
          <h2 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Everything you need to know about our {service.title} engagement.
          </p>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq, i) => {
            const isOpen = activeFaqIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-card border border-border overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-space text-base sm:text-lg font-semibold text-foreground flex items-center gap-2.5">
                    <HelpCircle className="size-4 text-primary shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`size-4 text-muted-foreground transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pl-12">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Direct Service Inquiry Form ── */}
      <section id="inquiry" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C0703C] font-bold">
            Start Your Project
          </span>
          <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-foreground">
            Request Scope &amp; Estimate for {service.title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Fill in the details below and our lead engineer will get back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 shadow-xl">
            <div className="size-14 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="font-space text-2xl font-bold text-foreground">
              Inquiry Received!
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Thank you {formData.name || "there"}. Our lead solutions architect has received your briefing for {service.title} and will send a technical estimate to {formData.email || "your email"}.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleFormSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-xl space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Connor"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1.5">
                Project Scope &amp; Requirements
              </label>
              <textarea
                rows={4}
                required
                value={formData.scope}
                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                placeholder={`Describe your goals, requirements, or timeline for ${service.title}...`}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-muted-foreground font-mono">
                ⚡ Includes 30-min architecture consultation.
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>Submit Inquiry</span>
                <Send className="size-4" />
              </button>
            </div>
          </form>
        )}
      </section>

      {/* ── Explore Related Services ── */}
      <section className="py-20 bg-card border-t border-border -mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-space text-2xl font-bold text-foreground">
              Explore Other Solutions
            </h2>
            <Link
              href="/services"
              className="text-xs sm:text-sm text-primary hover:underline font-semibold font-mono"
            >
              View All 12 Capabilities &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                href={`/services/${rel.slug}`}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-mono text-[#C0703C] uppercase font-bold">
                    {rel.categoryLabel}
                  </span>
                  <h3 className="font-space text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{rel.title}</span>
                    <ArrowUpRight className="size-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </div>
                <span className="text-xs font-semibold text-primary mt-4 flex items-center gap-1 font-mono">
                  <span>Explore specification</span> &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetailClient;
