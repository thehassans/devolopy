"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  Globe,
  Smartphone,
  RefreshCw,
  Bot,
  ShoppingBag,
  Cloud,
  Layers,
  BarChart3,
  BookOpen,
  Sparkles,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Github,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";
import { ALL_SERVICES } from "@/lib/services-data";
import { industriesData } from "@/lib/industries-data";
import { blogPosts } from "@/lib/blog-data";

interface MegaSidebarOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaSidebarOverlay({ isOpen, onClose }: MegaSidebarOverlayProps) {
  // Right panel is ONLY visible when a user clicks the '+' icon on a category!
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const { openConsultation } = useConsultation();

  // Reset expanded category on open/close
  useEffect(() => {
    if (!isOpen) {
      setExpandedCategory(null);
    }
  }, [isOpen]);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const navCategories = [
    {
      id: 0,
      num: "01",
      label: "Services",
      href: "/services",
      description: "Full-spectrum digital engineering, ERP, and AI architecture.",
    },
    {
      id: 1,
      num: "02",
      label: "Portfolio",
      href: "/#selected-work",
      description: "Proven case studies and quantified production systems.",
    },
    {
      id: 2,
      num: "03",
      label: "Industries",
      href: "/industries",
      description: "Domain-driven blueprints across 12 commercial sectors.",
    },
    {
      id: 3,
      num: "04",
      label: "Blogs & Insights",
      href: "/blog",
      description: "Engineering journals, Next.js 15 PPR, and ZATCA Phase 2 guides.",
    },
    {
      id: 4,
      num: "05",
      label: "About Devolopy",
      href: "/#why-devolopy",
      description: "Our philosophy, engineering team, and infrastructure standards.",
    },
    {
      id: 5,
      num: "06",
      label: "Contact & Briefing",
      href: "/#contact",
      description: "Direct technical consultations with senior systems architects.",
    },
  ];

  const portfolioHighlights = [
    {
      title: "Nawa Logistics Telematics OS",
      client: "Nawa Logistics GCC",
      category: "Operations & Fleet",
      metric: "1,200+ Vehicles Tracked",
      href: "/#selected-work",
    },
    {
      title: "Tamkin Multi-Branch ERP & POS",
      client: "Tamkin Retail Group",
      category: "Commerce & Retail",
      metric: "$48M+ Annual GMV Synced",
      href: "/#selected-work",
    },
    {
      title: "Cura Health Patient & EHR Portal",
      client: "Cura Medical Centers",
      category: "Healthcare & Clinics",
      metric: "98% No-Show Reduction",
      href: "/#selected-work",
    },
    {
      title: "SouqPlus Headless Storefront",
      client: "SouqPlus E-Commerce",
      category: "Headless Commerce",
      metric: "+64% Checkout Conversion",
      href: "/#selected-work",
    },
    {
      title: "AutoFlow Autonomous Document AI",
      client: "FinLease Financial",
      category: "AI & Automation",
      metric: "85K+ Monthly Invoices",
      href: "/#selected-work",
    },
  ];

  const handleToggleCategory = (catId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedCategory((prev) => (prev === catId ? null : catId));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-background/98 text-foreground backdrop-blur-3xl overflow-y-auto"
        >
          {/* Ambient Lighting Accents */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-primary/15 via-orange-500/10 to-transparent blur-[160px] rounded-full" />
            <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
          </div>

          {/* Top Bar: Close Button, Logo & Quick Action */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-8 flex items-center justify-between">
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="group flex items-center gap-3 px-4 py-2 rounded-full bg-card hover:bg-secondary border border-border text-foreground transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.03]"
              aria-label="Close navigation sidebar"
            >
              <div className="size-6 rounded-full bg-muted flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                <X className="size-3.5 text-foreground" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider uppercase">Close Menu</span>
            </button>

            {/* Brand Logo with automatic Dark/Light Theme Switching */}
            <Link href="/" onClick={onClose} className="transition-transform hover:scale-[1.02]">
              <div className="relative h-12 w-44 sm:h-14 sm:w-52">
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

            {/* Direct Consultation Trigger */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  openConsultation("custom-software");
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs sm:text-sm shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Request Briefing</span>
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>

          {/* Main Navigation Matrix */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-10 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* =========================================================
                  LEFT COLUMN: High-Impact Categories with '+' Toggle Buttons
                 ========================================================= */}
              <div
                className={`transition-all duration-500 ${
                  expandedCategory !== null
                    ? "lg:col-span-5"
                    : "lg:col-span-8 max-w-2xl"
                } space-y-2 sm:space-y-3`}
              >
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C0703C] block mb-4">
                  Navigation Architecture // Click &apos;+&apos; to Explore
                </span>

                {navCategories.map((cat) => {
                  const isExpanded = expandedCategory === cat.id;
                  return (
                    <div
                      key={cat.id}
                      className="group flex items-center justify-between gap-4 py-2 sm:py-2.5 border-b border-border/50"
                    >
                      {/* Category Label Link */}
                      <Link
                        href={cat.href}
                        onClick={onClose}
                        className={`flex items-baseline gap-4 sm:gap-6 transition-all duration-300 ${
                          isExpanded
                            ? "text-foreground font-bold translate-x-2"
                            : "text-foreground/50 hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`font-mono text-xs sm:text-sm font-bold transition-colors ${
                            isExpanded ? "text-[#C0703C]" : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          {cat.num}
                        </span>

                        <span className="font-space text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight transition-all leading-none">
                          {cat.label}
                        </span>
                      </Link>

                      {/* Explicit Interactive '+' / '✕' Circular Toggle Button */}
                      <button
                        type="button"
                        onClick={(e) => handleToggleCategory(cat.id, e)}
                        className={`size-9 sm:size-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shrink-0 shadow-md ${
                          isExpanded
                            ? "bg-primary text-primary-foreground scale-110 shadow-primary/40 ring-4 ring-primary/20 rotate-90"
                            : "bg-card hover:bg-secondary text-foreground border border-border hover:border-primary/40"
                        }`}
                        aria-label={`Toggle sub-menu for ${cat.label}`}
                        title={isExpanded ? "Close sub-menu" : "Expand sub-menu"}
                      >
                        {isExpanded ? (
                          <X className="size-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="size-4 stroke-[2.5]" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* =========================================================
                  RIGHT COLUMN: Only Rendered / Visible When A Category '+' is Clicked!
                 ========================================================= */}
              <AnimatePresence mode="wait">
                {expandedCategory !== null && (
                  <motion.div
                    key={`submenu-${expandedCategory}`}
                    initial={{ opacity: 0, x: 25, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-7 bg-card border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-2xl min-h-[380px] sm:min-h-[440px] flex flex-col justify-between shadow-2xl relative"
                  >
                    {/* Close Submenu Button */}
                    <button
                      type="button"
                      onClick={() => setExpandedCategory(null)}
                      className="absolute top-4 right-4 size-7 rounded-full bg-secondary hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      title="Hide sub-panel"
                    >
                      <X className="size-3.5" />
                    </button>

                    {/* ── Sub-Nav 0: Services Sub-Links ── */}
                    {expandedCategory === 0 && (
                      <div className="space-y-5">
                        <div className="flex items-center justify-between border-b border-border pb-3.5 pr-8">
                          <div>
                            <span className="text-xs font-mono text-[#C0703C] uppercase font-bold tracking-wider">
                              Engineering Disciplines
                            </span>
                            <h3 className="font-space text-xl sm:text-2xl font-bold text-foreground mt-0.5">
                              Full-Stack &amp; Enterprise Services
                            </h3>
                          </div>
                          <Link
                            href="/services"
                            onClick={onClose}
                            className="text-xs font-mono font-semibold text-primary hover:underline flex items-center gap-1"
                          >
                            <span>All 12</span> &rarr;
                          </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[320px] overflow-y-auto pr-1">
                          {ALL_SERVICES.slice(0, 8).map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/services/${svc.slug}`}
                              onClick={onClose}
                              className="group/item flex items-center justify-between p-3 rounded-2xl bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/40 transition-all duration-200"
                            >
                              <div className="min-w-0 pr-2">
                                <span className="font-space text-sm font-bold text-foreground group-hover/item:text-primary transition-colors block truncate">
                                  {svc.title}
                                </span>
                                <span className="text-[11px] text-muted-foreground block truncate mt-0.5 font-mono">
                                  {svc.tagline}
                                </span>
                              </div>
                              <Plus className="size-4 text-muted-foreground group-hover/item:text-primary group-hover/item:rotate-90 transition-all duration-200 shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ── Sub-Nav 1: Portfolio / Case Studies ── */}
                    {expandedCategory === 1 && (
                      <div className="space-y-5">
                        <div className="flex items-center justify-between border-b border-border pb-3.5 pr-8">
                          <div>
                            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase font-bold tracking-wider">
                              Verified Case Studies
                            </span>
                            <h3 className="font-space text-xl sm:text-2xl font-bold text-foreground mt-0.5">
                              Mission-Critical Deployments
                            </h3>
                          </div>
                          <Link
                            href="/#selected-work"
                            onClick={onClose}
                            className="text-xs font-mono font-semibold text-primary hover:underline flex items-center gap-1"
                          >
                            <span>Explore Grid</span> &rarr;
                          </Link>
                        </div>

                        <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                          {portfolioHighlights.map((work, idx) => (
                            <Link
                              key={idx}
                              href={work.href}
                              onClick={onClose}
                              className="group/item flex items-center justify-between p-3.5 rounded-2xl bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/40 transition-all duration-200"
                            >
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-space font-bold text-foreground group-hover/item:text-primary transition-colors">
                                    {work.title}
                                  </span>
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                                    {work.category}
                                  </span>
                                </div>
                                <span className="text-[11px] text-muted-foreground font-mono mt-0.5 block">
                                  Client: {work.client}
                                </span>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block">
                                  {work.metric}
                                </span>
                                <Plus className="size-4 text-muted-foreground group-hover/item:text-primary transition-all shrink-0" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ── Sub-Nav 2: Industries ── */}
                    {expandedCategory === 2 && (
                      <div className="space-y-5">
                        <div className="flex items-center justify-between border-b border-border pb-3.5 pr-8">
                          <div>
                            <span className="text-xs font-mono text-[#C0703C] uppercase font-bold tracking-wider">
                              12 Domain Blueprints
                            </span>
                            <h3 className="font-space text-xl sm:text-2xl font-bold text-foreground mt-0.5">
                              Commercial Sector Specializations
                            </h3>
                          </div>
                          <Link
                            href="/industries"
                            onClick={onClose}
                            className="text-xs font-mono font-semibold text-primary hover:underline flex items-center gap-1"
                          >
                            <span>All Industries</span> &rarr;
                          </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[320px] overflow-y-auto pr-1">
                          {industriesData.slice(0, 8).map((ind) => (
                            <Link
                              key={ind.slug}
                              href={`/industries/${ind.slug}`}
                              onClick={onClose}
                              className="group/item flex items-center justify-between p-3 rounded-2xl bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/40 transition-all duration-200"
                            >
                              <div className="min-w-0 pr-2">
                                <span className="font-space text-sm font-bold text-foreground group-hover/item:text-primary transition-colors block truncate">
                                  {ind.name}
                                </span>
                                <span className="text-[10px] text-[#C0703C] font-mono block truncate">
                                  {ind.badge}
                                </span>
                              </div>
                              <Plus className="size-4 text-muted-foreground group-hover/item:text-primary group-hover/item:rotate-90 transition-all shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ── Sub-Nav 3: Blogs ── */}
                    {expandedCategory === 3 && (
                      <div className="space-y-5">
                        <div className="flex items-center justify-between border-b border-border pb-3.5 pr-8">
                          <div>
                            <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase font-bold tracking-wider">
                              Engineering Journal
                            </span>
                            <h3 className="font-space text-xl sm:text-2xl font-bold text-foreground mt-0.5">
                              Technical Deep Dives &amp; Compliance
                            </h3>
                          </div>
                          <Link
                            href="/blog"
                            onClick={onClose}
                            className="text-xs font-mono font-semibold text-primary hover:underline flex items-center gap-1"
                          >
                            <span>View Journal</span> &rarr;
                          </Link>
                        </div>

                        <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                          {blogPosts.map((post) => (
                            <Link
                              key={post.slug}
                              href={`/blog/${post.slug}`}
                              onClick={onClose}
                              className="group/item flex items-center justify-between p-3.5 rounded-2xl bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/40 transition-all duration-200"
                            >
                              <div className="min-w-0 pr-2">
                                <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground mb-0.5">
                                  <span className="text-primary font-semibold">{post.category}</span>
                                  <span>&middot; {post.readTime}</span>
                                </div>
                                <h4 className="font-space text-sm font-bold text-foreground group-hover/item:text-primary transition-colors truncate">
                                  {post.title}
                                </h4>
                              </div>
                              <Plus className="size-4 text-muted-foreground group-hover/item:text-primary transition-all shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ── Sub-Nav 4: About Devolopy ── */}
                    {expandedCategory === 4 && (
                      <div className="space-y-5">
                        <div className="border-b border-border pb-3.5 pr-8">
                          <span className="text-xs font-mono text-[#C0703C] uppercase font-bold tracking-wider">
                            Engineering DNA
                          </span>
                          <h3 className="font-space text-xl sm:text-2xl font-bold text-foreground mt-0.5">
                            Systems, Not Billable Staff Hours.
                          </h3>
                        </div>

                        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                          <p>
                            Devolopy is an elite technology engineering partner. We design, build, and maintain mission-critical software backbones for growing enterprises and ambitious venture startups.
                          </p>
                          <div className="grid grid-cols-2 gap-3 pt-1">
                            <div className="p-3.5 rounded-2xl bg-secondary/50 border border-border">
                              <span className="font-space text-lg font-bold text-foreground block">100% IP</span>
                              <span className="text-xs text-muted-foreground">Full code ownership transferred on day one.</span>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-secondary/50 border border-border">
                              <span className="font-space text-lg font-bold text-foreground block">99.99% SLA</span>
                              <span className="text-xs text-muted-foreground">Guaranteed production uptime monitoring.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ── Sub-Nav 5: Contact ── */}
                    {expandedCategory === 5 && (
                      <div className="space-y-5">
                        <div className="border-b border-border pb-3.5 pr-8">
                          <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider">
                            Direct Technical Line
                          </span>
                          <h3 className="font-space text-xl sm:text-2xl font-bold text-foreground mt-0.5">
                            Start Your Architecture Briefing
                          </h3>
                        </div>

                        <div className="space-y-3.5 text-sm">
                          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-secondary/50 border border-border">
                            <Mail className="size-4 text-primary shrink-0" />
                            <div>
                              <span className="text-[10px] font-mono text-muted-foreground block">Inquiries</span>
                              <a href="mailto:contact@devolopy.com" className="font-semibold text-foreground hover:text-primary transition-colors">
                                contact@devolopy.com
                              </a>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-secondary/50 border border-border">
                            <MapPin className="size-4 text-primary shrink-0" />
                            <div>
                              <span className="text-[10px] font-mono text-muted-foreground block">Headquarters</span>
                              <span className="font-medium text-foreground">
                                Tech Innovation Hub, Silicon Avenue
                              </span>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              onClose();
                              openConsultation("custom-software");
                            }}
                            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm shadow-xl transition-all cursor-pointer"
                          >
                            <span>Schedule Technical Call</span>
                            <ArrowRight className="size-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Sub-Nav Bottom Fast Links */}
                    <div className="pt-3.5 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                      <span>&copy; {new Date().getFullYear()} Devolopy, Inc.</span>
                      <span className="text-[#C0703C]">Next.js 15 &middot; React 19 &middot; TypeScript</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Bottom Bar: Social Channels & Direct Contact Links */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 sm:pb-8 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="font-mono text-muted-foreground">Connect:</span>
              <a
                href="https://instagram.com/devolopy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/devolopy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Twitter / X
              </a>
              <a
                href="https://facebook.com/devolopy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://github.com/devolopy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-6">
              <Link href="/blog" onClick={onClose} className="hover:text-foreground transition-colors">
                Technical Blog
              </Link>
              <Link href="/privacy" onClick={onClose} className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" onClick={onClose} className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MegaSidebarOverlay;
