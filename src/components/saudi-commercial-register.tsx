"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  FileText,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { COMPANY_REGISTRATION } from "@/lib/company-info";

export function SaudiCommercialRegisterCard({
  variant = "footer",
}: {
  variant?: "footer" | "standalone" | "compact";
}) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCopy = (key: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const reg = COMPANY_REGISTRATION;

  if (variant === "compact") {
    return (
      <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center size-6 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="size-3.5" />
            </span>
            <span className="text-xs font-semibold text-white/90">
              Licensed in Saudi Arabia
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {reg.statusEn} · {reg.statusAr}
          </span>
        </div>
        <p className="text-xs text-white/70 leading-relaxed">
          <span className="font-semibold text-white">{reg.brandName}</span> is a technology branch of{" "}
          <span className="text-white font-medium">{reg.establishmentNameEn}</span> (
          <span className="font-arabic">{reg.establishmentNameAr}</span>).
        </p>
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
          <div className="p-2 rounded-lg bg-black/40 border border-white/5">
            <span className="text-white/40 block text-[10px]">CR / National No.</span>
            <span className="text-white/90 font-bold">{reg.crNumber}</span>
          </div>
          <div className="p-2 rounded-lg bg-black/40 border border-white/5">
            <span className="text-white/40 block text-[10px]">VAT Number</span>
            <span className="text-white/90 font-bold truncate block">{reg.vatNumber}</span>
          </div>
        </div>
        <Link
          href="/legal"
          className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors font-medium pt-1"
        >
          <span>View Commercial Register Details</span>
          <ExternalLink className="size-3" />
        </Link>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-6 sm:p-8 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/20">
      {/* Decorative ambient glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 size-64 bg-emerald-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 size-64 bg-primary/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      {/* Header Banner */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="size-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 shadow-inner">
            <ShieldCheck className="size-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Licensed in Saudi Arabia
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-white/70 bg-white/5 border border-white/10">
                المملكة العربية السعودية
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {reg.statusEn} · {reg.statusAr}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1 font-space">
              {reg.establishmentNameEn}
            </h3>
            <p className="text-sm font-arabic text-white/80 mt-0.5 font-medium" dir="rtl">
              {reg.establishmentNameAr}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/90 transition-all cursor-pointer"
          >
            <span>{isExpanded ? "Collapse Credentials" : "View Official Registry"}</span>
            {isExpanded ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
          </button>
          <Link
            href="/legal"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary/20 hover:bg-primary/30 border border-primary/40 text-xs font-semibold text-primary transition-all"
          >
            <span>Full Legal Entity</span>
            <ExternalLink className="size-3.5" />
          </Link>
        </div>
      </div>

      {/* Corporate Structure Statement */}
      <div className="relative z-10 py-5 space-y-2 text-sm leading-relaxed text-white/80">
        <p>
          <strong className="text-white">Devolopy</strong> is a specialized technology and software engineering branch of{" "}
          <strong className="text-white">{reg.establishmentNameEn}</strong>.{" "}
          <strong className="text-white">Maqder ERP</strong> is also owned and operated by{" "}
          <span className="text-white">{reg.establishmentNameEn}</span>, a commercially registered establishment in Dammam, Kingdom of Saudi Arabia.
        </p>
        <p className="text-xs sm:text-sm font-arabic text-white/70" dir="rtl">
          {reg.ownershipAr}
        </p>
      </div>

      {/* Registry Badges Grid (Visible or expandable) */}
      <div
        className={`relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-4 border-t border-white/10 transition-all duration-300 ${
          isExpanded ? "opacity-100 max-h-[800px]" : "opacity-95"
        }`}
      >
        {/* National Number / CR */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between group hover:border-emerald-500/40 transition-colors">
          <div>
            <div className="flex items-center justify-between text-white/50 text-xs font-mono mb-1">
              <span>National Number / CR</span>
              <span className="font-arabic text-[11px]">السجل التجاري</span>
            </div>
            <div className="text-base sm:text-lg font-bold font-mono text-white tracking-wider">
              {reg.crNumber}
            </div>
            <div className="text-[11px] text-emerald-400 font-mono mt-0.5">
              {reg.entityTypeEn} · {reg.entityTypeAr}
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleCopy("cr", reg.crNumber)}
            className="mt-3 flex items-center gap-1 text-[11px] text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            {copiedKey === "cr" ? (
              <>
                <Check className="size-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="size-3" />
                <span>Copy CR</span>
              </>
            )}
          </button>
        </div>

        {/* VAT Registration Number */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between group hover:border-emerald-500/40 transition-colors">
          <div>
            <div className="flex items-center justify-between text-white/50 text-xs font-mono mb-1">
              <span>VAT Number</span>
              <span className="font-arabic text-[11px]">الرقم الضريبي</span>
            </div>
            <div className="text-sm sm:text-base font-bold font-mono text-white tracking-wider break-all">
              {reg.vatNumber}
            </div>
            <div className="text-[11px] text-white/60 font-mono mt-0.5">
              ZATCA Tax Compliant
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleCopy("vat", reg.vatNumber)}
            className="mt-3 flex items-center gap-1 text-[11px] text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            {copiedKey === "vat" ? (
              <>
                <Check className="size-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="size-3" />
                <span>Copy VAT</span>
              </>
            )}
          </button>
        </div>

        {/* TIN Number */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between group hover:border-emerald-500/40 transition-colors">
          <div>
            <div className="flex items-center justify-between text-white/50 text-xs font-mono mb-1">
              <span>TIN (Tax ID)</span>
              <span className="font-arabic text-[11px]">الرقم المميز</span>
            </div>
            <div className="text-base sm:text-lg font-bold font-mono text-white tracking-wider">
              {reg.tinNumber}
            </div>
            <div className="text-[11px] text-white/60 font-mono mt-0.5">
              Status: {reg.statusEn} · {reg.statusAr}
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleCopy("tin", reg.tinNumber)}
            className="mt-3 flex items-center gap-1 text-[11px] text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            {copiedKey === "tin" ? (
              <>
                <Check className="size-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="size-3" />
                <span>Copy TIN</span>
              </>
            )}
          </button>
        </div>

        {/* Short Address & Location */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between group hover:border-emerald-500/40 transition-colors">
          <div>
            <div className="flex items-center justify-between text-white/50 text-xs font-mono mb-1">
              <span>National Short Address</span>
              <span className="font-arabic text-[11px]">العنوان المختصر</span>
            </div>
            <div className="text-base sm:text-lg font-bold font-mono text-emerald-400 tracking-widest">
              {reg.shortAddress}
            </div>
            <div className="text-[11px] text-white/70 mt-0.5 line-clamp-1">
              Dammam 32253, Saudi Arabia
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleCopy("address", reg.fullAddressEn)}
            className="mt-3 flex items-center gap-1 text-[11px] text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            {copiedKey === "address" ? (
              <>
                <Check className="size-3 text-emerald-400" />
                <span className="text-emerald-400">Copied Address</span>
              </>
            ) : (
              <>
                <Copy className="size-3" />
                <span>Copy Full Address</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Expanded Address Details */}
      {isExpanded && (
        <div className="relative z-10 mt-4 p-4 rounded-2xl bg-black/60 border border-white/10 text-xs space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="font-mono text-white/50 uppercase tracking-wider text-[10px]">
            Official Registered Address Details / تفاصيل العنوان
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/80">
            <div>
              <span className="text-white/40 block text-[11px]">Building &amp; Street / رقم المبنى والشارع:</span>
              <span className="font-mono text-white">{reg.buildingStreetEn}</span>
              <span className="block font-arabic text-white/70 mt-0.5" dir="rtl">{reg.buildingStreetAr}</span>
            </div>
            <div>
              <span className="text-white/40 block text-[11px]">District &amp; City / الحي والمدينة:</span>
              <span className="font-mono text-white">{reg.districtCityEn}</span>
              <span className="block font-arabic text-white/70 mt-0.5" dir="rtl">{reg.districtCityAr}</span>
            </div>
          </div>
          <div className="pt-1 text-[11px] text-white/60">
            {reg.countryEn} · {reg.countryAr} &bull; Postal Code: {reg.shortAddress.slice(4)}
          </div>
        </div>
      )}
    </div>
  );
}

export default SaudiCommercialRegisterCard;
