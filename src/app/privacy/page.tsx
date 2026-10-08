import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import HoverFooter from "@/components/ui/hover-footer";
import { COMPANY_REGISTRATION } from "@/lib/company-info";
import Link from "next/link";
import { Shield, Lock, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Devolopy",
  description:
    "Privacy Policy for Devolopy, operated by Eastern WorkForce Solutions Establishment, Dammam, Kingdom of Saudi Arabia.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  const reg = COMPANY_REGISTRATION;

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
            <Lock className="size-3.5" />
            <span>Legal Governance</span>
          </div>
          <h1 className="font-space text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last Updated: September 2026 &middot; Governed by Eastern WorkForce Solutions Establishment
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-secondary/50 border border-border text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Devolopy</strong> is a technology and software engineering branch of{" "}
          <strong className="text-foreground">{reg.establishmentNameEn}</strong> ({reg.establishmentNameAr}),
          commercially registered in Dammam, Kingdom of Saudi Arabia under CR / National Unified Number{" "}
          <span className="font-mono text-foreground font-semibold">{reg.crNumber}</span>. For full commercial registration details, please review our{" "}
          <Link href="/legal" className="text-primary hover:underline font-medium">
            Commercial Register Information
          </Link>.
        </div>

        <div className="prose dark:prose-invert max-w-none space-y-8 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-space text-foreground">1. Introduction and Scope</h2>
            <p>
              Eastern WorkForce Solutions Establishment (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal data of clients, partners, and visitors interacting with the Devolopy platform and its associated services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-space text-foreground">2. Data We Collect</h2>
            <p>
              We collect information you provide directly, such as contact names, business email addresses, phone numbers, and project specifications submitted via our consultation request forms, technical inquiries, or communications. We also collect technical telemetry (browser, device type, IP address) for site performance, analytics, and security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-space text-foreground">3. How We Use Information</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To provide, engineer, maintain, and support custom software and technology solutions.</li>
              <li>To facilitate project scoping, contracting, milestone reviews, and technical communication.</li>
              <li>To comply with legal obligations in the Kingdom of Saudi Arabia, including ZATCA tax rules and Ministry of Commerce regulations.</li>
              <li>To protect against fraudulent, unauthorized, or illegal activities.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-space text-foreground">4. Data Protection &amp; Confidentiality</h2>
            <p>
              We implement industry-standard encryption, strict access control policies, and zero-knowledge storage protocols for proprietary customer information. We do not sell or monetize client data. Any NDAs signed between Eastern WorkForce Solutions Establishment and clients supersede standard web terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-space text-foreground">5. Contact &amp; Inquiries</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise data rights, please contact our compliance team:
            </p>
            <div className="p-4 rounded-xl bg-card border border-border text-xs sm:text-sm font-mono space-y-1">
              <div>Eastern WorkForce Solutions Establishment</div>
              <div>CR: {reg.crNumber} | VAT: {reg.vatNumber}</div>
              <div>Address: {reg.fullAddressEn}</div>
              <div>Email: <a href="mailto:contact@devolopy.com" className="text-primary hover:underline">contact@devolopy.com</a></div>
            </div>
          </section>
        </div>
      </main>

      <HoverFooter />
    </div>
  );
}
