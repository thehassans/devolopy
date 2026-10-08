"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Github,
  Dribbble,
  Zap,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { SaudiCommercialRegisterCard } from "@/components/saudi-commercial-register";
import { COMPANY_REGISTRATION } from "@/lib/company-info";

export const TextHoverEffect = ({
  text = "DEVOLOPY",
  className,
}: {
  text?: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const rafId = useRef<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const clientX = e.clientX;
    const clientY = e.clientY;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (!svgRef.current) return;
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((clientX - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((clientY - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    });
  };

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center pt-6 pb-2 select-none">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 1400 160"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          if (rafId.current) cancelAnimationFrame(rafId.current);
        }}
        onMouseMove={handleMouseMove}
        className={cn("w-full h-auto max-h-[160px] overflow-hidden cursor-pointer max-w-7xl block", className)}
      >
        <defs>
          {/* Luminous multi-color brand gradient */}
          <linearGradient
            id="devolopyTextGradient"
            gradientUnits="userSpaceOnUse"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="25%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="75%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          {/* Smooth radial cursor reveal mask */}
          <motion.radialGradient
            id="devolopyRevealMask"
            gradientUnits="userSpaceOnUse"
            r="28%"
            initial={{ cx: "50%", cy: "50%" }}
            animate={maskPosition}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="60%" stopColor="white" stopOpacity="0.85" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>

          <mask id="devolopyTextMask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#devolopyRevealMask)"
            />
          </mask>
        </defs>

        {/* 1. Base Ultra-Minimalist Geometric Outline Text (Guaranteed 100% Complete DEVOLOPY on all screens) */}
        <text
          x="50%"
          y="56%"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.16em"
          strokeWidth="1.2"
          style={{
            fontFamily: "var(--font-space-grotesk), var(--font-inter), sans-serif",
            fontWeight: 900,
            textRendering: "geometricPrecision",
          }}
          className="fill-white/[0.02] stroke-white/25 dark:stroke-white/30 text-[115px] transition-all duration-300"
        >
          {text}
        </text>

        {/* 2. Distinct Animated Stroke Layer */}
        <motion.text
          x="50%"
          y="56%"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.16em"
          strokeWidth="1.4"
          style={{
            fontFamily: "var(--font-space-grotesk), var(--font-inter), sans-serif",
            fontWeight: 900,
            textRendering: "geometricPrecision",
          }}
          className="fill-transparent stroke-primary/45 dark:stroke-primary/50 text-[115px]"
          initial={{ strokeDashoffset: 3000, strokeDasharray: 3000 }}
          animate={{
            strokeDashoffset: 0,
            strokeDasharray: 3000,
          }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.text>

        {/* 3. Interactive Iridescent Hover Spotlight Layer */}
        <text
          x="50%"
          y="56%"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="0.16em"
          stroke="url(#devolopyTextGradient)"
          fill="url(#devolopyTextGradient)"
          strokeWidth="1.6"
          mask="url(#devolopyTextMask)"
          style={{
            fontFamily: "var(--font-space-grotesk), var(--font-inter), sans-serif",
            fontWeight: 900,
            opacity: hovered ? 0.95 : 0,
            textRendering: "geometricPrecision",
          }}
          className="text-[115px] transition-opacity duration-200"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-[120px]" />
      <div className="absolute -bottom-20 left-1/4 h-[350px] w-[500px] rounded-full bg-amber-600/10 blur-[140px]" />
      <div className="absolute -bottom-20 right-1/4 h-[350px] w-[500px] rounded-full bg-[#C0703C]/10 blur-[140px]" />
    </div>
  );
};

export function HoverFooter() {
  const serviceLinks = [
    { label: "Website Development", href: "/services/website-development" },
    { label: "Mobile App Development", href: "/services/mobile-app-development" },
    { label: "Odoo ERP Solutions", href: "/services/odoo-development" },
    { label: "E-Commerce Systems", href: "/services/e-commerce-solutions" },
    { label: "AI & Automation", href: "/services/ai-agentic-automation" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops-architecture" },
  ];

  const industryLinks = [
    { label: "Retail & Multi-Branch", href: "/industries/retail-multibranch" },
    { label: "Food & Beverage", href: "/industries/food-beverage" },
    { label: "Logistics & Fleet", href: "/industries/logistics-fleet" },
    { label: "Healthcare & Clinics", href: "/industries/healthcare-clinics" },
    { label: "Venture Startups", href: "/industries/venture-startups" },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} className="text-primary shrink-0" />,
      text: "contact@devolopy.com",
      href: "mailto:contact@devolopy.com",
    },
    {
      icon: <MapPin size={16} className="text-primary shrink-0" />,
      text: "8328 Street 18, Sec. 3844, Madinat Al Ummal Dist., Dammam 32253, Saudi Arabia (EDMA8328)",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, label: "Facebook", href: "https://facebook.com/devolopy" },
    { icon: <Instagram size={18} />, label: "Instagram", href: "https://instagram.com/devolopy" },
    { icon: <Twitter size={18} />, label: "Twitter", href: "https://twitter.com/devolopy" },
    { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/devolopy" },
    { icon: <Dribbble size={18} />, label: "Dribbble", href: "https://dribbble.com/devolopy" },
  ];

  return (
    <footer
      id="contact"
      aria-label="Devolopy Platform Footer"
      className="relative bg-[#07090e] text-white border-t border-white/10 overflow-hidden mt-20 pt-16 sm:pt-20 pb-4"
    >
      <FooterBackgroundGradient />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
              <div className="relative h-14 w-52 sm:h-16 sm:w-60">
                <Image
                  src="/DevolopyDarkTheme.png"
                  alt="Devolopy Logo"
                  width={288}
                  height={80}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Devolopy is the specialized technology division of Eastern WorkForce Solutions Establishment. We build high-performance websites, mobile applications, enterprise Odoo ERP, and AI systems.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full w-fit">
                <Zap className="size-3.5" /> High-Performance Engineering
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
                <ShieldCheck className="size-3.5" /> Licensed in Saudi Arabia
              </div>
            </div>
          </div>

          {/* Solutions Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-wider text-white/90 font-bold">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/65 hover:text-primary transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-wider text-white/90 font-bold">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/65 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-wider text-white/90 font-bold">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white/70 text-xs sm:text-sm leading-snug">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-white/5 border border-white/10 hover:border-primary/50 px-3.5 py-2 rounded-xl transition-all"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Official Saudi Commercial Registration & Licensing Card */}
        <div className="py-10 border-b border-white/10">
          <SaudiCommercialRegisterCard />
        </div>

        {/* Bottom Bar with Socials and Copyright */}
        <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-white/50 border-b border-white/5">
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Devolopy on ${label}`}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-primary hover:border-primary/50 transition-all"
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="text-center lg:text-left max-w-xl leading-relaxed">
            &copy; {new Date().getFullYear()} Devolopy &middot; A branch of{" "}
            <strong className="text-white/80 font-medium">Eastern WorkForce Solutions Establishment</strong> (CR: 7043399216 &middot; VAT: 312781371600003). All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-5 text-white/50">
            <Link href="/legal" className="text-emerald-400/90 hover:text-emerald-300 font-semibold transition-colors">
              Commercial Register (السجل التجاري)
            </Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/sitemap.xml" className="hover:underline">Sitemap</Link>
          </div>
        </div>

        {/* ── Ultra-Premium Minimalist Centerpiece Brandmark (100% Complete DEVOLOPY) ── */}
        <div className="pt-4 flex justify-center items-center w-full overflow-hidden">
          <TextHoverEffect text="DEVOLOPY" />
        </div>
      </div>
    </footer>
  );
}

export default HoverFooter;
