"use client";

import React from "react";
import { HeroCarousel, type HeroCarouselItem } from "@/components/ui/hero-carousel";

const LOOKS: HeroCarouselItem[] = [
  {
    id: "maqder",
    title: "Maqder",
    image: "/maqderdevolopy.jpg",
    cardImage: "/maqderdevolopy.jpg",
    meta: ["ENTERPRISE ERP", "FINANCIAL ENGINE", "SUPPLY CHAIN"],
    noColorGrade: true,
    objectPosition: "center top",
    bgObjectPosition: "center 90%",
    bgScale: 1.0,
  },
  {
    id: "oaklandgreens",
    title: "Oakland Greens",
    image: "/oaklandgreens.png",
    meta: ["HEADLESS COMMERCE", "NEXT.JS", "SHOPIFY PLUS"],
    noColorGrade: true,
    objectPosition: "center top",
    bgObjectPosition: "center top",
    bgScale: 1.0,
  },
  {
    id: "radison",
    title: "Radisson",
    image: "/radison.jpg",
    meta: ["HOSPITALITY", "BOOKING ENGINE", "GLOBAL CDN"],
    noColorGrade: true,
    objectPosition: "center center",
    bgObjectPosition: "center center",
    bgScale: 1.0,
  },
  {
    id: "oldarcade",
    title: "Old Arcade",
    image: "/oldarcade.png",
    meta: ["RETRO GAMING", "60 FPS WEBGL", "MULTIPLAYER"],
    noColorGrade: true,
    objectPosition: "center center",
    bgObjectPosition: "center center",
    bgScale: 1.0,
  },
  {
    id: "next-gen-platforms",
    title: "Web Applications",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=80",
    meta: ["100 CORE VITALS", "TYPESCRIPT", "EDGE DEPLOYED"],
    accent: "#00c8ff",
  },
  {
    id: "conversion-engines",
    title: "Conversion Engine",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
    meta: ["A/B TESTING", "TELEMETRY", "MAX REVENUE"],
    accent: "#e5231b",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    meta: ["99.99% UPTIME", "TERRAFORM", "KUBERNETES"],
    accent: "#14307a",
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Featured Hero Showcase"
      className="relative w-full h-[88vh] min-h-[620px] max-h-[920px] pt-20 sm:pt-24 lg:pt-28 bg-black overflow-hidden"
    >
      <HeroCarousel
        items={LOOKS}
        defaultIndex={0}
        autoplay={true}
        autoplayDelay={5500}
      />
    </section>
  );
}

export default HeroSection;
