"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useConsultation } from "./consultation-modal";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Globe,
  Smartphone,
  RefreshCw,
  Bot,
  ShoppingBag,
  Cloud,
  Layers,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const servicesDropdownList = [
  {
    title: "AI & Autonomous Automation",
    desc: "Custom LLM agents, RAG pipelines & document OCR",
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
    desc: "Odoo 18 customization & ZATCA e-invoicing",
    slug: "odoo-development",
    icon: RefreshCw,
  },
  {
    title: "E-Commerce Solutions",
    desc: "Headless commerce, Shopify Plus & Mada/Stripe",
    slug: "e-commerce-solutions",
    icon: ShoppingBag,
  },
  {
    title: "Cloud & DevOps Architecture",
    desc: "AWS, GCP, Kubernetes & Terraform IaC",
    slug: "cloud-devops-architecture",
    icon: Cloud,
  },
  {
    title: "Product Experience Design",
    desc: "Figma design tokens & WCAG design systems",
    slug: "ui-ux-design-systems",
    icon: Layers,
  },
  {
    title: "Custom CRM & Portals",
    desc: "Bespoke operational dashboards & client portals",
    slug: "custom-crm-portals",
    icon: BarChart3,
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { openConsultation } = useConsultation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "How We Work", href: "/#how-we-work" },
    { label: "Industries", href: "/#industries" },
    { label: "Why Us", href: "/#why-devolopy" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-md py-3"
          : "bg-background/80 backdrop-blur-md border-b border-border/50 py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Main Navigation" className="flex items-center justify-between">
          {/* Brand Logo with automatic Light/Dark mode switching */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl transition-transform hover:scale-[1.02]"
            aria-label="Devolopy Home"
          >
            <div className="relative h-12 w-44 sm:h-14 sm:w-52 lg:h-16 lg:w-60">
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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            {/* Services Mega Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`inline-flex items-center gap-1.5 text-sm lg:text-base font-medium transition-colors cursor-pointer ${
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

              {/* Dropdown Menu Panel */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-28 w-[640px] pt-3 z-50"
                  >
                    <div className="rounded-3xl bg-card border border-border p-6 shadow-2xl backdrop-blur-2xl space-y-4">
                      {/* Top Header */}
                      <div className="flex items-center justify-between border-b border-border/70 pb-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C]">
                          Enterprise Engineering Capabilities
                        </span>
                        <Link
                          href="/#services"
                          onClick={() => setServicesOpen(false)}
                          className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                        >
                          <span>View All Services</span>
                          <ArrowRight className="size-3" />
                        </Link>
                      </div>

                      {/* 2-Column Services Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {servicesDropdownList.map((svc) => {
                          const Icon = svc.icon;
                          return (
                            <Link
                              key={svc.slug}
                              href={`/services/${svc.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-secondary/70 transition-all duration-200 border border-transparent hover:border-border/80"
                            >
                              <div className="size-9 rounded-xl bg-secondary group-hover:bg-primary group-hover:text-primary-foreground text-foreground border border-border flex items-center justify-center shrink-0 transition-colors shadow-xs">
                                <Icon className="size-4.5" />
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-space text-sm font-bold text-foreground group-hover:text-primary transition-colors block truncate">
                                    {svc.title}
                                  </span>
                                  {svc.badge && (
                                    <span className="px-1.5 py-0.2 rounded-sm bg-primary/10 text-primary font-mono text-[9px] font-bold shrink-0">
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

            {/* Standard Navlinks */}
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

          {/* Get Started CTA */}
          <div className="hidden sm:flex items-center">
            <button
              type="button"
              onClick={() => openConsultation()}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-primary/20 hover:shadow-primary/35 cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full animate-pulse" />
              <span className="relative flex items-center gap-2 h-9 px-5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 group-hover:from-blue-500 group-hover:to-indigo-500 shadow-inner">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] rounded-full" />
                <span>Get Started</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-foreground hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl bg-background/95 backdrop-blur-xl border border-border p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            {/* Mobile Services Accordion */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-[#C0703C] tracking-wider px-2 block">
                Services &amp; Solutions
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {servicesDropdownList.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted text-foreground transition-colors"
                    >
                      <Icon className="size-4 text-primary shrink-0" />
                      <span className="text-sm font-semibold">{svc.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Other Mobile Links */}
            <div className="pt-2 border-t border-border flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultation();
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all cursor-pointer"
              >
                <span>Get Started with Devolopy</span>
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
