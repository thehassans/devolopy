"use client";

import React, { useRef, useState } from "react";
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
} from "lucide-react";

export const TextHoverEffect = ({
  text = "DEVOLOPY",
  className,
}: {
  text?: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCursor(null);
      }}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative w-full py-8 sm:py-12 flex items-center justify-center overflow-hidden select-none group cursor-pointer",
        className
      )}
    >
      {/* Background Interactive Luminescence Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isHovered && cursor ? 1 : 0,
          background: cursor
            ? `radial-gradient(500px circle at ${cursor.x}px ${cursor.y}px, rgba(59, 130, 246, 0.16), rgba(168, 85, 247, 0.08), transparent 70%)`
            : "none",
        }}
      />

      {/* Base Ultra-Minimalist Geometric Outline Text (100% Un-distorted Proportions) */}
      <div className="relative z-10 w-full text-center px-2 sm:px-4">
        <span
          className="font-space text-[12.5vw] sm:text-[13.5vw] md:text-[14.5vw] font-black uppercase tracking-[0.14em] sm:tracking-[0.18em] leading-none inline-block transition-all duration-300"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.18)",
            color: "transparent",
            textRendering: "geometricPrecision",
          }}
        >
          {text}
        </span>
      </div>

      {/* Iridescent Cursor Spotlight Reveal Layer */}
      {isHovered && cursor && (
        <div
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-200"
          style={{
            maskImage: `radial-gradient(350px circle at ${cursor.x}px ${cursor.y}px, black 30%, transparent 75%)`,
            WebkitMaskImage: `radial-gradient(350px circle at ${cursor.x}px ${cursor.y}px, black 30%, transparent 75%)`,
          }}
        >
          <div className="w-full text-center px-2 sm:px-4">
            <span
              className="font-space text-[12.5vw] sm:text-[13.5vw] md:text-[14.5vw] font-black uppercase tracking-[0.14em] sm:tracking-[0.18em] leading-none inline-block bg-gradient-to-r from-blue-400 via-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              style={{
                WebkitTextStroke: "1.2px rgba(96, 165, 250, 0.85)",
                textRendering: "geometricPrecision",
              }}
            >
              {text}
            </span>
          </div>
        </div>
      )}
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
      <div className="absolute -bottom-20 left-1/4 h-[350px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute -bottom-20 right-1/4 h-[350px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />
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
      icon: <Phone size={16} className="text-primary shrink-0" />,
      text: "+1 (555) 234-5678",
      href: "tel:+15552345678",
    },
    {
      icon: <MapPin size={16} className="text-primary shrink-0" />,
      text: "Tech Innovation Hub, Silicon Avenue",
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
              Devolopy builds lightning-fast websites, native mobile applications, enterprise Odoo ERP integrations, n8n automations, and search engine optimization.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full w-fit">
              <Zap className="size-3.5" /> Ultra-High-Performance Engineering
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

        {/* Bottom Bar with Socials and Copyright */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 border-b border-white/5">
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

          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Devolopy, Inc. All rights reserved. Architected with Next.js & Tailwind CSS.
          </p>

          <div className="flex items-center gap-5 text-white/50">
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/sitemap.xml" className="hover:underline">Sitemap</Link>
          </div>
        </div>

        {/* ── Ultra-Premium Minimalist Centerpiece Brandmark (Natural Space Grotesk Lettering) ── */}
        <div className="pt-2 flex justify-center items-center w-full overflow-hidden">
          <TextHoverEffect text="DEVOLOPY" />
        </div>
      </div>
    </footer>
  );
}

export default HoverFooter;
