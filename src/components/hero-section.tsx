"use client";

import React from "react";
import { HeroCarousel, type HeroCarouselItem } from "@/components/ui/hero-carousel";

const LOOKS: HeroCarouselItem[] = [
  {
    id: "maqder",
    title: "Maqder",
    subtitle: "Enterprise ERP customization, multi-entity accounting engine, and real-time inventory management.",
    image: "/maqderdevolopy.jpg",
    cardImage: "/maqderdevolopy.jpg",
    meta: ["ENTERPRISE ERP", "FINANCIAL ENGINE", "SUPPLY CHAIN"],
    noColorGrade: true,
    objectPosition: "center top",
    bgObjectPosition: "center 90%",
    bgScale: 1.0,
    slug: "odoo-development",
  },
  {
    id: "oaklandgreens",
    title: "Oakland Greens",
    subtitle: "High-performance headless e-commerce storefront with sub-second catalog browsing and frictionless checkout.",
    image: "/oaklandgreens.png",
    meta: ["HEADLESS COMMERCE", "NEXT.JS", "SHOPIFY PLUS"],
    noColorGrade: true,
    objectPosition: "center top",
    bgObjectPosition: "center top",
    bgScale: 1.0,
    slug: "e-commerce",
  },
  {
    id: "radison",
    title: "Radisson",
    subtitle: "Global hospitality booking engine with edge CDN caching, multi-currency payments, and high-concurrency availability.",
    image: "/radison.jpg",
    meta: ["HOSPITALITY", "BOOKING ENGINE", "GLOBAL CDN"],
    noColorGrade: true,
    objectPosition: "center center",
    bgObjectPosition: "center center",
    bgScale: 1.0,
    slug: "website-development",
  },
  {
    id: "oldarcade",
    title: "Old Arcade",
    subtitle: "Interactive 60 FPS WebGL gaming portal with real-time multiplayer lobbies and retro sound architecture.",
    image: "/oldarcade.png",
    meta: ["RETRO GAMING", "60 FPS WEBGL", "MULTIPLAYER"],
    noColorGrade: true,
    objectPosition: "center center",
    bgObjectPosition: "center center",
    bgScale: 1.0,
    slug: "mobile-app-development",
  },
  {
    id: "next-gen-platforms",
    title: "Web Applications",
    subtitle: "Full-stack Next.js App Router platforms engineered for 100/100 Core Web Vitals and edge computing.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=80",
    meta: ["100 CORE VITALS", "TYPESCRIPT", "EDGE DEPLOYED"],
    accent: "#00c8ff",
    slug: "website-development",
  },
  {
    id: "conversion-engines",
    title: "Conversion Engine",
    subtitle: "Data-backed multivariate A/B testing and checkout streamlining to accelerate funnel revenue.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
    meta: ["A/B TESTING", "TELEMETRY", "MAX REVENUE"],
    accent: "#e5231b",
    slug: "conversion-optimization",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Fault-tolerant multi-cloud infrastructure, Terraform blueprints, and automated zero-downtime CI/CD.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    meta: ["99.99% UPTIME", "TERRAFORM", "KUBERNETES"],
    accent: "#14307a",
    slug: "cloud-devops",
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Featured Hero Showcase"
      className="relative w-full h-[88vh] min-h-[640px] max-h-[960px] pt-16 sm:pt-20 lg:pt-24 bg-[#04060a] overflow-hidden"
    >
      <HeroCarousel
        items={LOOKS}
        defaultIndex={0}
        autoplay={true}
        autoplayDelay={6000}
      />
    </section>
  );
}

export default HeroSection;
