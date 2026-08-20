"use client";

import React from "react";
import { HeroCarousel, type HeroCarouselItem } from "@/components/ui/hero-carousel";

const LOOKS: HeroCarouselItem[] = [
  {
    id: "maqder",
    title: "Enterprise ERP\n& Financial Engine",
    image: "/maqderdevolopy.jpg",
    cardImage: "/maqderdevolopy.jpg",
    credit: "MAQDER • CRAFTED BY DEVOLOPY LABS",
    meta: ["ZATCA PHASE 2 APPROVED", "MULTI-ENTITY ERP", "REAL-TIME SUPPLY CHAIN"],
    noColorGrade: true,
    objectPosition: "center top",
    bgObjectPosition: "center 90%",
    bgScale: 1.0,
  },
  {
    id: "oaklandgreens",
    title: "Direct-To-Consumer\nCommerce Ecosystem",
    image: "/oaklandgreens.png",
    credit: "OAKLAND GREENS • CRAFTED BY DEVOLOPY LABS",
    meta: ["SUB-SECOND CHECKOUT", "HEADLESS NEXT.JS", "SHOPIFY PLUS SYNC"],
    noColorGrade: true,
    objectPosition: "center top",
    bgObjectPosition: "center top",
    bgScale: 1.0,
  },
  {
    id: "radison",
    title: "Radisson Luxury\nHospitality Platform",
    image: "/radison.jpg",
    credit: "RADISSON • CRAFTED BY DEVOLOPY LABS",
    meta: ["GLOBAL BOOKING ENGINE", "MULTI-LANGUAGE ARCHITECTURE", "EDGE SPEED ACCELERATED"],
    noColorGrade: true,
    objectPosition: "center center",
    bgObjectPosition: "center center",
    bgScale: 1.0,
  },
  {
    id: "oldarcade",
    title: "Old Arcade\nRetro Gaming Studio",
    image: "/oldarcade.png",
    credit: "OLD ARCADE • CRAFTED BY DEVOLOPY LABS",
    meta: ["60 FPS WEBGL ENGINE", "CUSTOM HARDWARE BRIDGES", "REAL-TIME MULTIPLAYER"],
    noColorGrade: true,
    objectPosition: "center center",
    bgObjectPosition: "center center",
    bgScale: 1.0,
  },
  {
    id: "next-gen-platforms",
    title: "High-Throughput\nWeb Applications",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=80",
    credit: "DEVOLOPY DIGITAL ENGINEERING",
    meta: ["100/100 CORE WEB VITALS", "TYPESCRIPT ARCHITECTURE", "SERVERLESS EDGE DEPLOYED"],
    accent: "#00c8ff",
  },
  {
    id: "conversion-engines",
    title: "Data-Driven\nConversion Architectures",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
    credit: "CONVERSION RATE OPTIMIZATION",
    meta: ["A/B MULTIVARIATE TESTING", "HEATMAP TELEMETRY", "MAXIMUM REVENUE UPLIFT"],
    accent: "#e5231b",
  },
  {
    id: "cloud-devops",
    title: "Resilient Multi-Cloud\n& DevOps Topology",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    credit: "SITE RELIABILITY ENGINEERING",
    meta: ["99.99% UPTIME SLA", "TERRAFORM IAC", "DOCKER & K8S CLUSTERS"],
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
