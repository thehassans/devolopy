import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import HoverFooter from "@/components/ui/hover-footer";
import { COMPANY_REGISTRATION } from "@/lib/company-info";
import Link from "next/link";
import { FileText, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Devolopy",
  description:
    "Terms of Service for Devolopy, operated by Eastern WorkForce Solutions Establishment, Dammam, Kingdom of Saudi Arabia.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfServicePage() {
  const reg = COMPANY_REGISTRATION;

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
            <Scale className="size-3.5" />
            <span>Terms &amp; Conditions</span>
          </div>
          <h1 className="font-space text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground">
            Last Updated: September 2026 &middot; Governed under the Laws of the Kingdom of Saudi Arabia
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-secondary/50 border border-border text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Devolopy</strong> is operated by{" "}
          <strong className="text-foreground">{reg.establishmentNameEn}</strong> ({reg.establishmentNameAr}),
          an establishment commercially registered in Dammam, Kingdom of Saudi Arabia (CR: {reg.crNumber}, VAT: {reg.vatNumber}). For complete corporate verification, please consult our{" "}
          <Link href="/legal" className="text-primary hover:underline font-medium">
            Commercial Registration Records
          </Link>.
        </div>

        <div className="prose dark:prose-invert max-w-none space-y-8 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-space text-foreground">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by Devolopy or Eastern WorkForce Solutions Establishment, you agree to be bound by these Terms. If you are entering into an agreement on behalf of a company, you represent that you have the authority to bind such entity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-space text-foreground">2. Services &amp; Products</h2>
            <p>
              Devolopy provides custom software engineering, website development, mobile application builds, Odoo ERP integrations, n8n automation workflows, and digital consultancy. Maqder ERP is a proprietary enterprise software solution owned and operated by Eastern WorkForce Solutions Establishment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-space text-foreground">3. Intellectual Property &amp; Code Ownership</h2>
            <p>
              Upon receipt of final contractual payment under an agreed project scope, ownership of custom source code, repositories, configuration files, and deliverables created specifically for the client is transferred to the client. Eastern WorkForce Solutions Establishment retains ownership of pre-existing core libraries, boilerplates, and proprietary systems such as Maqder ERP unless specifically licensed under separate commercial agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-space text-foreground">4. Invoicing &amp; Tax Compliance</h2>
            <p>
              All commercial engagements are executed in accordance with regulations enforced by the Zakat, Tax and Customs Authority (ZATCA) of Saudi Arabia. Invoices include standard Value Added Tax (VAT 15%) where applicable and reflect our registered VAT number <span className="font-mono text-foreground font-semibold">{reg.vatNumber}</span>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-space text-foreground">5. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws and regulations of the Kingdom of Saudi Arabia, and the competent courts of Dammam shall have jurisdiction.
            </p>
          </section>
        </div>
      </main>

      <HoverFooter />
    </div>
  );
}
