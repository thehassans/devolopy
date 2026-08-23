"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Database,
  Cpu,
  Layout,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

interface BeatItem {
  headline: string;
  highlight: string;
  subtitle: string;
}

const beats: BeatItem[] = [
  {
    headline: "We build digital products that",
    highlight: "move businesses forward.",
    subtitle:
      "Devolopy helps ambitious companies design, engineer, automate, and scale the mission-critical software their entire operation runs on.",
  },
  {
    headline: "Four layers.",
    highlight: "We own all of them.",
    subtitle:
      "Infrastructure, data architecture, business logic, and user interface — designed together as a unified system, not stitched together by separate vendors.",
  },
  {
    headline: "Your team only ever",
    highlight: "sees this one.",
    subtitle:
      "That is the point. The engineering complexity stays ours. What reaches your customers and employees is fast, intuitive, and built to scale.",
  },
];

const layers = [
  {
    id: 3,
    name: "04 // Interface",
    title: "Client & User Interface",
    desc: "Next.js Web, Mobile Apps, Portals",
    icon: Layout,
    color: "#2B5CFF",
    glow: "rgba(43, 92, 255, 0.4)",
  },
  {
    id: 2,
    name: "03 // Logic",
    title: "Business Logic & APIs",
    desc: "n8n Workflows, Microservices, Auth",
    icon: Cpu,
    color: "#8B5CF6",
    glow: "rgba(139, 92, 246, 0.4)",
  },
  {
    id: 1,
    name: "02 // Data",
    title: "Data & Storage Rails",
    desc: "PostgreSQL, Odoo ERP, Redis, pgvector",
    icon: Database,
    color: "#C0703C",
    glow: "rgba(192, 112, 60, 0.4)",
  },
  {
    id: 0,
    name: "01 // Infra",
    title: "Cloud Infrastructure",
    desc: "AWS, Docker, Edge CDN, CI/CD",
    icon: Layers,
    color: "#10B981",
    glow: "rgba(16, 185, 129, 0.4)",
  },
];

export function HeroSection() {
  const { openConsultation } = useConsultation();
  const [activeBeat, setActiveBeat] = useState(0);
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  // Auto-cycle beats every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBeat((prev) => (prev + 1) % beats.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden bg-background text-foreground pt-32 pb-20 lg:pt-36 lg:pb-28 border-b border-border transition-colors duration-300">
      {/* Background Matrix Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 45%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 45%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Atmospheric Radial Gradient Lighting */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-primary/10 dark:bg-primary/15 blur-[160px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#C0703C]/10 dark:bg-[#C0703C]/15 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center">
          {/* Left Column: Multi-Beat Copy & CTAs */}
          <div className="lg:col-span-5 space-y-7">
            {/* Ultra-Premium Shimmering Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 dark:bg-[#C0703C]/15 border border-[#C0703C]/25 shadow-xs backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#C0703C] animate-ping" />
              <span>Digital Product &amp; Technology Partner</span>
            </div>

            {/* Headline Switcher Area with Gradient Emphasis */}
            <div className="min-h-[190px] sm:min-h-[170px] flex flex-col justify-center">
              <h1 className="font-space text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] text-foreground">
                {beats[activeBeat].headline}{" "}
                <span className="bg-gradient-to-r from-primary via-indigo-500 to-[#C0703C] bg-clip-text text-transparent">
                  {beats[activeBeat].highlight}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mt-4 leading-relaxed max-w-xl">
                {beats[activeBeat].subtitle}
              </p>
            </div>

            {/* Beat Indicator Interactive Controls */}
            <div className="flex items-center gap-2.5 pt-1">
              {beats.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveBeat(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeBeat === idx
                      ? "w-10 bg-primary shadow-xs shadow-primary/30"
                      : "w-2.5 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`View slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => openConsultation("custom-software")}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="size-4" />
              </button>

              <Link
                href="#solutions"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-card hover:bg-secondary text-foreground font-semibold text-sm sm:text-base border border-border/80 dark:border-white/15 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Explore Solutions</span>
                <ArrowUpRight className="size-4 text-muted-foreground" />
              </Link>
            </div>

            {/* Technology Capability Strip */}
            <div className="pt-6 border-t border-border flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-mono text-muted-foreground">
              <span className="hover:text-foreground transition-colors font-medium">Custom Software</span>
              <span className="text-[#C0703C] font-bold">&middot;</span>
              <span className="hover:text-foreground transition-colors font-medium">Odoo ERP</span>
              <span className="text-[#C0703C] font-bold">&middot;</span>
              <span className="hover:text-foreground transition-colors font-medium">Mobile Apps</span>
              <span className="text-[#C0703C] font-bold">&middot;</span>
              <span className="hover:text-foreground transition-colors font-medium">AI Automation</span>
            </div>
          </div>

          {/* Right Column: 3D Isometric Build Stack & Interactive Inspector (Shifted Far Right) */}
          <div className="lg:col-span-7 flex flex-col md:flex-row items-center justify-center lg:justify-end gap-6 sm:gap-8 lg:translate-x-16 xl:translate-x-24">
            {/* 3D Stack Stage Canvas */}
            <div
              ref={stageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[390px] h-[400px] sm:h-[450px] flex items-center justify-center cursor-pointer select-none"
              style={{ perspective: "1300px" }}
            >
              {/* Ground Depth Ambient Shadow */}
              <div className="absolute bottom-6 w-72 h-20 bg-black/15 dark:bg-black/80 blur-2xl rounded-full" />

              {/* 3D Rotating Stack Container */}
              <div
                className="relative w-[250px] sm:w-[280px] h-[250px] sm:h-[280px] transition-transform duration-300 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${54 + tilt.y}deg) rotateY(${tilt.x}deg) rotateZ(-24deg)`,
                }}
              >
                {/* Plane 1: Infrastructure (Base Layer - translateZ 0px) */}
                <div
                  className={`absolute inset-0 rounded-2xl border transition-all duration-500 shadow-2xl backdrop-blur-md ${
                    hoveredLayer === 0
                      ? "border-emerald-500 shadow-emerald-500/30 ring-2 ring-emerald-500/40"
                      : "border-slate-300/80 dark:border-white/15"
                  }`}
                  style={{
                    transform: "translateZ(0px)",
                    background:
                      "linear-gradient(145deg, rgba(20, 24, 30, 0.95), rgba(10, 12, 16, 0.98))",
                  }}
                  onMouseEnter={() => setHoveredLayer(0)}
                  onMouseLeave={() => setHoveredLayer(null)}
                >
                  {/* Grid Wireframe */}
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(16,185,129,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.15) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    L1 // Infra &amp; Cloud (AWS)
                  </div>
                </div>

                {/* Plane 2: Data Layer (translateZ 55px) */}
                <div
                  className={`absolute inset-0 rounded-2xl border transition-all duration-500 shadow-2xl backdrop-blur-md ${
                    hoveredLayer === 1
                      ? "border-[#C0703C] shadow-[#C0703C]/30 ring-2 ring-[#C0703C]/40"
                      : "border-slate-300/80 dark:border-white/15"
                  }`}
                  style={{
                    transform: "translateZ(55px)",
                    background:
                      "linear-gradient(145deg, rgba(28, 33, 41, 0.95), rgba(15, 18, 23, 0.95))",
                  }}
                  onMouseEnter={() => setHoveredLayer(1)}
                  onMouseLeave={() => setHoveredLayer(null)}
                >
                  {/* 16 Pulsing Copper Nodes */}
                  <div className="absolute inset-6 grid grid-cols-4 grid-rows-4 items-center justify-items-center">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className="size-2 rounded-full bg-[#C0703C]"
                        style={{
                          animation: `dvPulseGlow 3.2s infinite ease-in-out ${i * 0.15}s`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-mono text-[#C0703C] font-bold uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-[#C0703C] animate-pulse" />
                    L2 // Data &amp; ERP (Odoo/Postgres)
                  </div>
                </div>

                {/* Plane 3: Logic Layer (translateZ 110px) */}
                <div
                  className={`absolute inset-0 rounded-2xl border transition-all duration-500 shadow-2xl backdrop-blur-md ${
                    hoveredLayer === 2
                      ? "border-purple-500 shadow-purple-500/30 ring-2 ring-purple-500/40"
                      : "border-slate-300/80 dark:border-white/20"
                  }`}
                  style={{
                    transform: "translateZ(110px)",
                    background:
                      "linear-gradient(145deg, rgba(35, 39, 49, 0.92), rgba(19, 21, 28, 0.92))",
                  }}
                  onMouseEnter={() => setHoveredLayer(2)}
                  onMouseLeave={() => setHoveredLayer(null)}
                >
                  {/* Glowing Logic Seams */}
                  <div className="absolute top-1/3 inset-x-5 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80" />
                  <div className="absolute bottom-1/3 inset-x-5 h-[1px] bg-gradient-to-r from-transparent via-[#C0703C] to-transparent opacity-70" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-mono text-purple-400 font-bold uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-purple-400 animate-pulse" />
                    L3 // Logic &amp; n8n Workflows
                  </div>
                </div>

                {/* Plane 4: Interface Layer (Top - translateZ 165px) */}
                <div
                  className={`absolute inset-0 rounded-2xl border transition-all duration-500 shadow-2xl backdrop-blur-lg ${
                    hoveredLayer === 3
                      ? "border-primary shadow-primary/30 ring-2 ring-primary/40"
                      : "border-primary/40 dark:border-white/30"
                  }`}
                  style={{
                    transform: "translateZ(165px)",
                    background:
                      "linear-gradient(145deg, rgba(255, 255, 255, 0.85), rgba(240, 245, 255, 0.65))",
                  }}
                  onMouseEnter={() => setHoveredLayer(3)}
                  onMouseLeave={() => setHoveredLayer(null)}
                >
                  {/* Frosted Wireframe UI */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="h-2.5 w-20 bg-primary/40 rounded-full" />
                      <div className="flex items-center gap-1">
                        <div className="size-2 rounded-full bg-red-400" />
                        <div className="size-2 rounded-full bg-amber-400" />
                        <div className="size-2 rounded-full bg-emerald-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="h-11 rounded-lg bg-white/70 dark:bg-slate-800/60 border border-black/5 dark:border-white/10 shadow-xs flex flex-col justify-center items-center p-1.5">
                        <div className="size-2 rounded-full bg-emerald-500 mb-1" />
                        <div className="h-1 w-8 bg-slate-400/50 rounded" />
                      </div>
                      <div className="h-11 rounded-lg bg-white/70 dark:bg-slate-800/60 border border-black/5 dark:border-white/10 shadow-xs flex flex-col justify-center items-center p-1.5">
                        <div className="size-2 rounded-full bg-blue-500 mb-1" />
                        <div className="h-1 w-8 bg-slate-400/50 rounded" />
                      </div>
                      <div className="h-11 rounded-lg bg-white/70 dark:bg-slate-800/60 border border-black/5 dark:border-white/10 shadow-xs flex flex-col justify-center items-center p-1.5">
                        <div className="size-2 rounded-full bg-[#C0703C] mb-1" />
                        <div className="h-1 w-8 bg-slate-400/50 rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-mono text-primary font-bold uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                    L4 // Next.js &amp; Mobile UI
                  </div>
                </div>

                {/* Central Luminous Energy Beam */}
                <div
                  className="absolute left-1/2 top-1/2 w-1 h-[200px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    transform: "rotateX(90deg) translateZ(0)",
                    background:
                      "linear-gradient(180deg, rgba(43,92,255,0), rgba(43,92,255,0.9), rgba(192,112,60,0.9), rgba(16,185,129,0))",
                  }}
                />
              </div>
            </div>

            {/* Layer Rail Selector */}
            <div className="flex flex-col gap-2.5 w-full md:w-56">
              {layers.map((layer) => {
                const Icon = layer.icon;
                const isHovered = hoveredLayer === layer.id;
                return (
                  <div
                    key={layer.id}
                    onMouseEnter={() => setHoveredLayer(layer.id)}
                    onMouseLeave={() => setHoveredLayer(null)}
                    className={`flex items-start gap-3 p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isHovered
                        ? "bg-card border-primary shadow-md translate-x-1 ring-1 ring-primary/30"
                        : "bg-card/70 dark:bg-white/5 border-border/80 dark:border-white/10 hover:border-primary/40 hover:bg-card"
                    }`}
                  >
                    <div
                      className="p-2 rounded-xl shrink-0 transition-colors"
                      style={{
                        backgroundColor: isHovered ? layer.color : "transparent",
                        color: isHovered ? "#fff" : layer.color,
                        border: `1px solid ${isHovered ? layer.color : "currentColor"}`,
                        opacity: isHovered ? 1 : 0.85,
                      }}
                    >
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                        {layer.name}
                      </div>
                      <div className="text-[11px] font-semibold text-foreground/90 mt-0.5 leading-tight">
                        {layer.title}
                      </div>
                      <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                        {layer.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
