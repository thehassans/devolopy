"use client";

import React from "react";
import { FAQSection, type FAQItem } from "@/components/ui/faqsection";
import { useConsultation } from "./consultation-modal";

export function HomeFAQ() {
  const { openConsultation } = useConsultation();

  const faqsLeft: FAQItem[] = [
    {
      question: "What makes Devolopy different from standard web agencies?",
      answer:
        "Devolopy is a full-spectrum digital engineering studio. We don't just build frontend templates; we architect end-to-end ecosystems comprising custom Next.js web applications, native mobile apps, enterprise Odoo ERP backbones with ZATCA Phase 2 compliance, and autonomous n8n workflows.",
    },
    {
      question: "How fast can you deliver an enterprise-grade web or ERP project?",
      answer:
        "Our modular architecture and CI/CD pipelines allow us to deploy production-ready MVP websites in 2 to 3 weeks, complex custom web platforms in 4 to 6 weeks, and full-scale Odoo ERP deployments with custom modules in 6 to 10 weeks.",
    },
    {
      question: "Do you guarantee 100/100 Google Lighthouse and Core Web Vitals?",
      answer:
        "Yes. Every web platform we build undergoes strict performance audits on Edge networks, ensuring sub-second First Contentful Paint (FCP), zero Cumulative Layout Shift (CLS < 0.05), and perfect SEO accessibility scores.",
    },
    {
      question: "Can you integrate Saudi ZATCA Phase 2 e-Invoicing with our Odoo ERP?",
      answer:
        "Absolutely. We specialize in Saudi ZATCA Phase 2 compliance, implementing cryptographic stamps, QR codes, XML UBL 2.1 formats, and automated real-time API clearance/reporting directly inside Odoo 17 & 18.",
    },
    {
      question: "How do your n8n and AI agent automations work?",
      answer:
        "We build self-hosted or cloud n8n automation pipelines that connect your CRM, ERP, e-commerce storefronts, payment gateways, and custom LLM copilots to eliminate repetitive data entry and automate business workflows 24/7.",
    },
  ];

  const faqsRight: FAQItem[] = [
    {
      question: "What technology stack do you use for development?",
      answer:
        "Our primary stack includes Next.js 14/15, React 19, TypeScript, Tailwind CSS, Framer Motion, React Native, Flutter, Python, PostgreSQL, Odoo 17/18, Docker, Kubernetes, AWS, and Cloudflare Edge.",
    },
    {
      question: "Do you offer post-launch maintenance and 24/7 SLA monitoring?",
      answer:
        "Yes, we provide dedicated Site Reliability Engineering (SRE) support with 99.99% uptime guarantees, real-time error telemetry, automated security patching, and regular feature updates.",
    },
    {
      question: "Who owns the code and intellectual property after completion?",
      answer:
        "You retain 100% ownership of all source code, design assets, databases, and intellectual property. We provide full repository access and comprehensive architectural documentation upon deployment.",
    },
    {
      question: "How do we get started and what is the onboarding process?",
      answer:
        "Click the 'Schedule Strategy Session' button to book an initial technical discovery call. We analyze your requirements, provide an interactive scope and fixed quote within 24 hours, and kick off development immediately upon alignment.",
    },
    {
      question: "Do you provide custom UI/UX design in Figma before development?",
      answer:
        "Yes, our design team produces high-fidelity interactive Figma prototypes, comprehensive design tokens, and WCAG AA compliant design systems before our engineers write the first line of code.",
    },
  ];

  return (
    <FAQSection
      title="Frequently Asked Questions"
      subtitle="Engineering & Delivery Standards"
      description="Everything you need to know about partnering with Devolopy, from technical architecture and ERP integrations to delivery timelines."
      buttonLabel="Schedule Free Consultation →"
      onButtonClick={() => openConsultation()}
      faqsLeft={faqsLeft}
      faqsRight={faqsRight}
    />
  );
}

export default HomeFAQ;
