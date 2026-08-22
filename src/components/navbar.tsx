"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { useConsultation } from "./consultation-modal";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openConsultation } = useConsultation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "AI & Automation", href: "#ai-automation" },
    { label: "How We Work", href: "#how-we-work" },
    { label: "Technology", href: "#technology" },
    { label: "Why Us", href: "#why-devolopy" },
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

          {/* Theme Toggle & Get Started CTA */}
          <div className="hidden sm:flex items-center gap-3.5">
            <ThemeToggle />

            {/* Theme-Aware Get Started Button */}
            <button
              type="button"
              onClick={() => openConsultation()}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 cursor-pointer"
            >
              {/* Outer animated gradient border */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full animate-pulse" />

              {/* Button inner */}
              <span className="relative flex items-center gap-2 h-9 px-5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 group-hover:from-blue-500 group-hover:to-indigo-500 shadow-inner">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] rounded-full" />

                <span>Get Started</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2.5 md:hidden">
            <ThemeToggle />
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
          <div className="md:hidden mt-3 rounded-2xl bg-background/95 backdrop-blur-xl border border-border p-6 shadow-2xl space-y-4">
            <div className="flex flex-col space-y-3">
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
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all"
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
