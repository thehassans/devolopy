"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Globe,
  Smartphone,
  RefreshCw,
  ShoppingBag,
  Cloud,
  Layers,
  BarChart3,
  BookOpen,
  Store,
  Utensils,
  Truck,
  HeartPulse,
  GraduationCap,
  Building2,
  Hotel,
  Factory,
  Rocket,
  ShieldCheck,
  Zap,
  Network,
  CreditCard,
  Flame,
} from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";
import { MegaSidebarOverlay } from "@/components/mega-sidebar-overlay";

const servicesDropdownList = [
  {
    title: "AI & Automation",
    desc: "Autonomous LLM agents, RAG & OCR pipelines",
    slug: "ai-agentic-automation",
    icon: Bot,
    badge: "AI Frontier",
  },
  {
    title: "Web Development",
    desc: "Ultra-fast Next.js 15, React 19 & headless CMS",
    slug: "website-development",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    desc: "Native 60fps iOS & Android React Native apps",
    slug: "mobile-app-development",
    icon: Smartphone,
  },
  {
    title: "Odoo ERP Systems",
    desc: "Odoo 18 customization & certified ZATCA Phase 2",
    slug: "odoo-development",
    icon: RefreshCw,
  },
  {
    title: "n8n Automation",
    desc: "Zero-code business workflows & event hooks",
    slug: "n8n-development",
    icon: Zap,
  },
  {
    title: "E-Commerce Solutions",
    desc: "Headless storefronts, Shopify Plus & Mada/Stripe",
    slug: "e-commerce-solutions",
    icon: ShoppingBag,
  },
  {
    title: "Cloud & DevOps",
    desc: "AWS, GCP, Kubernetes & Terraform IaC",
    slug: "cloud-devops-architecture",
    icon: Cloud,
  },
  {
    title: "Product Design",
    desc: "Figma design tokens & WCAG design systems",
    slug: "ui-ux-design-systems",
    icon: Layers,
  },
  {
    title: "SEO & Growth",
    desc: "Technical SEO, Core Web Vitals & Schema",
    slug: "seo-optimization",
    icon: BarChart3,
  },
  {
    title: "Custom CRM & Portals",
    desc: "Bespoke operational dashboards & client portals",
    slug: "custom-crm-portals",
    icon: Store,
  },
  {
    title: "API & Microservices",
    desc: "High-throughput gRPC, GraphQL & event brokers",
    slug: "api-microservices",
    icon: Network,
  },
  {
    title: "Security & Auditing",
    desc: "OWASP penetration testing & SOC 2 hardening",
    slug: "security-compliance-audit",
    icon: ShieldCheck,
  },
];

const industriesDropdownList = [
  {
    title: "Retail & Multi-Branch",
    desc: "Centralized Odoo POS & barcode telemetry",
    slug: "retail-multibranch",
    icon: Store,
  },
  {
    title: "Food & Beverage",
    desc: "Aggregator webhooks & live Kitchen Display",
    slug: "food-beverage",
    icon: Utensils,
  },
  {
    title: "E-Commerce Brands",
    desc: "Headless sub-second checkout & 3PL dispatch",
    slug: "ecommerce-brands",
    icon: ShoppingBag,
  },
  {
    title: "Logistics & Fleet",
    desc: "Driver dispatch app & live GPS geofencing",
    slug: "logistics-fleet",
    icon: Truck,
  },
  {
    title: "Healthcare & Clinics",
    desc: "HIPAA-ready patient portal & WhatsApp alerts",
    slug: "healthcare-clinics",
    icon: HeartPulse,
  },
  {
    title: "Education & Academies",
    desc: "Student portal & automated fee installments",
    slug: "education-academies",
    icon: GraduationCap,
  },
  {
    title: "Real Estate & Assets",
    desc: "Interactive 3D tours & automated CRM leads",
    slug: "real-estate-assets",
    icon: Building2,
  },
  {
    title: "Hospitality & Resorts",
    desc: "Direct booking engine & zero OTA commission",
    slug: "hospitality-resorts",
    icon: Hotel,
  },
  {
    title: "Manufacturing Plants",
    desc: "Shop floor IoT telemetry & Odoo MRP ledgers",
    slug: "manufacturing-plants",
    icon: Factory,
  },
  {
    title: "Venture Startups",
    desc: "Rapid 4-week production MVP sprint in TS",
    slug: "venture-startups",
    icon: Rocket,
    badge: "4-Wk MVP",
  },
  {
    title: "FinTech & Banking",
    desc: "PCI-DSS payment gateways & multi-currency ledger",
    slug: "fintech-payments",
    icon: CreditCard,
  },
  {
    title: "Energy & Utilities",
    desc: "SCADA telemetry & predictive asset maintenance",
    slug: "energy-utilities",
    icon: Flame,
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaSidebarOpen, setMegaSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement | null>(null);
  const industriesDropdownRef = useRef<HTMLDivElement | null>(null);
  const { openConsultation } = useConsultation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        industriesDropdownRef.current &&
        !industriesDropdownRef.current.contains(e.target as Node)
      ) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "How We Work", href: "/#how-we-work" },
    { label: "Why Us", href: "/#why-devolopy" },
  ];

  return (
    <>
      {/* ── Ultra-Premium Fullscreen Mega-Sidebar Overlay ── */}
      <MegaSidebarOverlay
        isOpen={megaSidebarOpen}
        onClose={() => setMegaSidebarOpen(false)}
      />

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-md py-3"
            : "bg-background/80 backdrop-blur-md border-b border-border/50 py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Main Navigation" className="flex items-center justify-between">
            
            {/* Left Brand Cluster: Circular Hamburger Toggle + Brand Logo */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Circular Hamburger Outline Button */}
              <button
                type="button"
                onClick={() => setMegaSidebarOpen(true)}
                className="group relative size-10 sm:size-11 rounded-full border border-border/90 dark:border-white/20 bg-card/80 dark:bg-white/[0.06] backdrop-blur-md flex flex-col items-center justify-center gap-1.5 transition-all duration-200 hover:scale-105 hover:border-primary/50 hover:bg-card shadow-sm cursor-pointer"
                aria-label="Open Fullscreen Navigation Sidebar"
                title="Open Navigation Menu"
              >
                <span className="w-4 h-[1.5px] bg-foreground/80 group-hover:bg-primary transition-all duration-200 group-hover:w-5" />
                <span className="w-5 h-[1.5px] bg-foreground/80 group-hover:bg-primary transition-all duration-200" />
              </button>

              {/* Brand Logo with automatic Light/Dark mode switching */}
              <Link
                href="/"
                className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl transition-transform hover:scale-[1.02]"
                aria-label="Devolopy Home"
              >
                <div className="relative h-11 w-40 sm:h-14 sm:w-52 lg:h-16 lg:w-60">
                  <Image
                    src="/DevolopyLighttheme.png"
                    alt="Devolopy Logo"
                    width={288}
                    height={80}
                    className="h-full w-auto object-contain dark:hidden"
                    priority
                  />
                  <Image
                    src="/DevolopyDarkTheme.png"
                    alt="Devolopy Logo Dark"
                    width={288}
                    height={80}
                    className="hidden h-full w-auto object-contain dark:block"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {/* 1. Services Mega Dropdown (3 Items Per Line Grid) */}
              <div
                ref={servicesDropdownRef}
                className="relative"
                onMouseEnter={() => {
                  setServicesOpen(true);
                  setIndustriesOpen(false);
                }}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`inline-flex items-center gap-1.5 text-sm lg:text-base font-medium transition-colors cursor-pointer py-1 ${
                    servicesOpen ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary"
                  }`}
                  aria-expanded={servicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`size-4 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full -left-56 lg:-left-72 w-[860px] lg:w-[940px] pt-3 z-50"
                    >
                      <div className="rounded-3xl bg-card border border-border p-6 sm:p-7 shadow-2xl backdrop-blur-2xl space-y-4">
                        <div className="flex items-center justify-between border-b border-border/70 pb-3.5">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C]">
                            Enterprise Engineering Capabilities // 12 Disciplines
                          </span>
                          <Link
                            href="/services"
                            onClick={() => setServicesOpen(false)}
                            className="text-xs font-bold text-[#C0703C] hover:underline flex items-center gap-1"
                          >
                            <span>View All 12 Services</span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>

                        {/* 3 Items Per Line Grid */}
                        <div className="grid grid-cols-3 gap-3">
                          {servicesDropdownList.map((svc) => {
                            const Icon = svc.icon;
                            return (
                              <Link
                                key={svc.slug}
                                href={`/services/${svc.slug}`}
                                onClick={() => setServicesOpen(false)}
                                className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-secondary/70 transition-all duration-200 border border-transparent hover:border-border/80"
                              >
                                <div className="size-9 rounded-xl bg-secondary group-hover:bg-[#121316] group-hover:text-amber-400 text-foreground border border-border flex items-center justify-center shrink-0 transition-colors shadow-xs">
                                  <Icon className="size-4.5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="font-space text-sm font-bold text-foreground group-hover:text-[#C0703C] transition-colors block truncate">
                                      {svc.title}
                                    </span>
                                    {svc.badge && (
                                      <span className="px-1.5 py-0.2 rounded-sm bg-[#C0703C]/15 text-[#C0703C] font-mono text-[9px] font-bold shrink-0">
                                        {svc.badge}
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-[11px] text-muted-foreground line-clamp-1 block mt-0.5">
                                    {svc.desc}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. Industries Mega Dropdown (3 Items Per Line Grid) */}
              <div
                ref={industriesDropdownRef}
                className="relative"
                onMouseEnter={() => {
                  setIndustriesOpen(true);
                  setServicesOpen(false);
                }}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                  className={`inline-flex items-center gap-1.5 text-sm lg:text-base font-medium transition-colors cursor-pointer py-1 ${
                    industriesOpen ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary"
                  }`}
                  aria-expanded={industriesOpen}
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={`size-4 transition-transform duration-200 ${
                      industriesOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full -left-64 lg:-left-80 w-[880px] lg:w-[960px] pt-3 z-50"
                    >
                      <div className="rounded-3xl bg-card border border-border p-6 sm:p-7 shadow-2xl backdrop-blur-2xl space-y-4">
                        <div className="flex items-center justify-between border-b border-border/70 pb-3.5">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C]">
                            Domain Specialization &amp; Architecture // 12 Sectors
                          </span>
                          <Link
                            href="/industries"
                            onClick={() => setIndustriesOpen(false)}
                            className="text-xs font-bold text-[#C0703C] hover:underline flex items-center gap-1"
                          >
                            <span>All 12 Industries</span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>

                        {/* 3 Items Per Line Grid */}
                        <div className="grid grid-cols-3 gap-3">
                          {industriesDropdownList.map((ind) => {
                            const Icon = ind.icon;
                            return (
                              <Link
                                key={ind.slug}
                                href={`/industries/${ind.slug}`}
                                onClick={() => setIndustriesOpen(false)}
                                className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-secondary/70 transition-all duration-200 border border-transparent hover:border-border/80"
                              >
                                <div className="size-9 rounded-xl bg-secondary group-hover:bg-[#121316] group-hover:text-amber-400 text-foreground border border-border flex items-center justify-center shrink-0 transition-colors shadow-xs">
                                  <Icon className="size-4.5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="font-space text-sm font-bold text-foreground group-hover:text-[#C0703C] transition-colors block truncate">
                                      {ind.title}
                                    </span>
                                    {ind.badge && (
                                      <span className="px-1.5 py-0.2 rounded-sm bg-[#C0703C]/15 text-[#C0703C] font-mono text-[9px] font-bold shrink-0">
                                        {ind.badge}
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-[11px] text-muted-foreground line-clamp-1 block mt-0.5">
                                    {ind.desc}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. Blogs Link with Clean Icon */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm lg:text-base font-medium text-foreground/80 hover:text-primary transition-colors group"
              >
                <BookOpen className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span>Blogs</span>
              </Link>

              {/* 4. Standard Navlinks */}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm lg:text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Get Started CTA: Luxury Matte Black Pill */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => openConsultation()}
                className="group relative inline-flex items-center justify-center gap-2 h-9 sm:h-10 px-5 sm:px-6 rounded-full bg-[#121316] hover:bg-[#1e1f26] text-white font-semibold text-xs sm:text-sm border border-neutral-800/90 shadow-md shadow-black/20 hover:border-neutral-700 transition-all duration-200 hover:scale-[1.03] cursor-pointer"
                aria-label="Get Started with Devolopy"
              >
                <span>Get Started</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
