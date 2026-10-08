import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";
import HoverFooter from "@/components/ui/hover-footer";
import { COMPANY_REGISTRATION } from "@/lib/company-info";
import {
  ShieldCheck,
  Building2,
  FileCheck2,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Receipt,
  FileText,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Register & Legal Information | Devolopy",
  description:
    "Official Commercial Registration, Tax Identification, and Corporate Ownership details for Devolopy and Maqder ERP under Eastern WorkForce Solutions Establishment in Dammam, Saudi Arabia.",
  alternates: {
    canonical: "/legal",
  },
};

export default function LegalPage() {
  const reg = COMPANY_REGISTRATION;

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full space-y-12">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <ShieldCheck className="size-4" />
            <span>Official Commercial Registration &middot; السجل التجاري</span>
          </div>
          <h1 className="font-space text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            Corporate Licensing &amp; Entity Information
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Legal identity, commercial registration, tax compliance, and entity structure for{" "}
            <strong className="text-foreground">Devolopy</strong> and{" "}
            <strong className="text-foreground">Maqder ERP</strong> in the Kingdom of Saudi Arabia.
          </p>
        </div>

        {/* Official Entity Statement Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-card border border-border/80 dark:border-white/10 shadow-xl overflow-hidden backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="size-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-500">
                  {reg.statusEn} &middot; {reg.statusAr}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-space text-foreground mt-2">
                {reg.establishmentNameEn}
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground/80 font-arabic mt-1" dir="rtl">
                {reg.establishmentNameAr}
              </h3>
            </div>
            <div className="flex flex-col sm:items-end text-sm">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Entity Type / نوع الكيان
              </span>
              <span className="text-lg font-bold text-foreground">
                {reg.entityTypeEn} &middot; {reg.entityTypeAr}
              </span>
              <span className="text-xs text-muted-foreground font-mono mt-1">
                Commercially Registered in Dammam, KSA
              </span>
            </div>
          </div>

          <div className="py-6 space-y-4 text-base leading-relaxed text-muted-foreground border-b border-border">
            <p>
              <strong className="text-foreground">Devolopy</strong> is a specialized technology and digital engineering branch of{" "}
              <strong className="text-foreground">{reg.establishmentNameEn}</strong> (
              <span className="font-arabic font-semibold">{reg.establishmentNameAr}</span>), licensed and operating in the Kingdom of Saudi Arabia.
            </p>
            <p>
              <strong className="text-foreground">Maqder ERP</strong> is also owned and operated by{" "}
              <strong className="text-foreground">{reg.establishmentNameEn}</strong>, a commercially registered establishment in Dammam.
            </p>
            <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60 text-foreground/90 font-arabic text-sm leading-relaxed" dir="rtl">
              {reg.ownershipAr}
            </div>
          </div>

          {/* Detailed Registration Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground font-bold flex items-center gap-2">
                <FileCheck2 className="size-4 text-primary" /> Commercial Registry Credentials
              </h4>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-secondary/40 border border-border flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground block font-mono">National Number / CR</span>
                    <span className="text-xs font-arabic text-muted-foreground">الرقم الوطني الموحد / السجل التجاري</span>
                  </div>
                  <span className="text-lg font-mono font-bold text-foreground">{reg.crNumber}</span>
                </div>

                <div className="p-4 rounded-2xl bg-secondary/40 border border-border flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground block font-mono">VAT Registration Number</span>
                    <span className="text-xs font-arabic text-muted-foreground">الرقم الضريبي</span>
                  </div>
                  <span className="text-base font-mono font-bold text-foreground">{reg.vatNumber}</span>
                </div>

                <div className="p-4 rounded-2xl bg-secondary/40 border border-border flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground block font-mono">Tax Identification Number (TIN)</span>
                    <span className="text-xs font-arabic text-muted-foreground">الرقم المميز</span>
                  </div>
                  <span className="text-base font-mono font-bold text-foreground">{reg.tinNumber}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground font-bold flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> Registered National Address &middot; تفاصيل العنوان
              </h4>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-secondary/40 border border-border flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground block font-mono">Short Address</span>
                    <span className="text-xs font-arabic text-muted-foreground">العنوان المختصر</span>
                  </div>
                  <span className="text-lg font-mono font-bold text-emerald-500 tracking-widest">{reg.shortAddress}</span>
                </div>

                <div className="p-4 rounded-2xl bg-secondary/40 border border-border space-y-1">
                  <span className="text-xs text-muted-foreground block font-mono">Building &amp; Street &middot; رقم المبنى والشارع</span>
                  <div className="text-sm font-semibold text-foreground font-mono">{reg.buildingStreetEn}</div>
                  <div className="text-xs font-arabic text-muted-foreground" dir="rtl">{reg.buildingStreetAr}</div>
                </div>

                <div className="p-4 rounded-2xl bg-secondary/40 border border-border space-y-1">
                  <span className="text-xs text-muted-foreground block font-mono">District, City &amp; Country &middot; الحي والمدينة</span>
                  <div className="text-sm font-semibold text-foreground">{reg.districtCityEn}, {reg.countryEn}</div>
                  <div className="text-xs font-arabic text-muted-foreground" dir="rtl">
                    {reg.districtCityAr} &bull; {reg.countryAr}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Architecture & Affiliated Operations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-card border border-border space-y-4 hover:border-primary/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-primary bg-primary/10 border border-primary/20">
                <BadgeCheck className="size-3.5" /> Technology &amp; Engineering Division
              </div>
              <div className="relative h-7 w-28">
                <Image
                  src="/DevolopyDarkTheme.png"
                  alt="Devolopy"
                  width={112}
                  height={28}
                  className="h-full w-auto object-contain dark:block hidden"
                />
                <Image
                  src="/DevolopyLighttheme.png"
                  alt="Devolopy"
                  width={112}
                  height={28}
                  className="h-full w-auto object-contain dark:hidden block"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground font-space">Devolopy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The high-velocity digital product engineering division of Eastern WorkForce Solutions Establishment. Specializing in custom Next.js web applications, mobile apps, custom Odoo ERP integrations, n8n workflows, and AI agents for enterprise clients in Saudi Arabia and globally.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-card border border-border space-y-4 hover:border-[#C0703C]/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
                <Receipt className="size-3.5" /> Enterprise Systems &middot; نظام مقدر
              </div>
              <div className="relative size-8 rounded-lg overflow-hidden border border-border">
                <Image
                  src="/maqdericon.png"
                  alt="Maqder ERP"
                  width={32}
                  height={32}
                  className="size-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground font-space">Maqder ERP</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Maqder ERP is owned and operated by Eastern WorkForce Solutions Establishment, a commercially registered establishment in Dammam. Delivering enterprise resource planning, automated supply-chain, inventory, POS, and full ZATCA Phase 2 tax compliance.
            </p>
          </div>
        </div>

        {/* Contact & Verification Inquiries */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-background to-secondary/30 border border-border text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground font-space">
            Need Official Documentation or Contractual Verification?
          </h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            For legal inquiries, corporate contracts, RFPs, or official billing documentation, our compliance team is available directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="mailto:contact@devolopy.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <span>Email Compliance Team</span>
            </a>
            <a
              href="mailto:contact@devolopy.com?subject=CR%20Verification%20Request"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary border border-border text-foreground font-semibold text-sm hover:bg-secondary/80 transition-colors"
            >
              <span>Request CR Verification PDF</span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>
      </main>

      <HoverFooter />
    </div>
  );
}
