"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Layers, Database, Cpu, Layout } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

const beats = [
  {
    title: "We build digital products that move businesses forward.",
    subtitle:
      "Devolopy helps ambitious companies design, build, automate and scale the software their business runs on.",
  },
  {
    title: "Four layers. We own all of them.",
    subtitle:
      "Infrastructure, data, logic, interface — designed together, not stitched together by three different vendors.",
  },
  {
    title: "Your team only ever sees this one.",
    subtitle:
      "That is the point. The complexity stays ours. What reaches your people is something they can actually use.",
  },
];

const layers = [
  { id: 3, name: "Interface", desc: "What your team touches", icon: Layout },
  { id: 2, name: "Logic", desc: "Rules, workflows, permissions", icon: Cpu },
  { id: 1, name: "Data", desc: "The single source of truth", icon: Database },
  { id: 0, name: "Infrastructure", desc: "Where it runs, and stays running", icon: Layers },
];

export function HeroSection() {
  const { openConsultation } = useConsultation();
  const [activeBeat, setActiveBeat] = useState(0);
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  // Auto-cycle beats every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBeat((prev) => (prev + 1) % beats.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-background text-foreground pt-28 pb-16 lg:py-24 border-b border-border transition-colors duration-300">
      {/* Background Ambient Radial Glows */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 blur-[140px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#C0703C]/10 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Multi-Beat Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20 shadow-xs">
              <span className="size-2 rounded-full bg-[#C0703C] animate-pulse" />
              Digital Product &amp; Technology Partner
            </div>

            {/* Headline Switcher Area */}
            <div className="min-h-[190px] sm:min-h-[160px] flex flex-col justify-center">
              <h1 className="font-space text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] text-foreground">
                {beats[activeBeat].title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mt-4 leading-relaxed max-w-xl">
                {beats[activeBeat].subtitle}
              </p>
            </div>

            {/* Beat indicator pills */}
            <div className="flex items-center gap-2 pt-1">
              {beats.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveBeat(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeBeat === idx ? "w-8 bg-[#C0703C]" : "w-2 bg-foreground/20 hover:bg-foreground/40"
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="size-4" />
              </button>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-secondary/80 hover:bg-secondary text-foreground font-semibold text-sm sm:text-base border border-border transition-all duration-200"
              >
                <span>See our work</span>
              </Link>
            </div>

            {/* Technology Strip */}
            <div className="pt-6 border-t border-border flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-muted-foreground">
              <span className="hover:text-foreground transition-colors">Custom Software</span>
              <span className="text-[#C0703C]">&middot;</span>
              <span className="hover:text-foreground transition-colors">Odoo ERP</span>
              <span className="text-[#C0703C]">&middot;</span>
              <span className="hover:text-foreground transition-colors">Mobile Apps</span>
              <span className="text-[#C0703C]">&middot;</span>
              <span className="hover:text-foreground transition-colors">AI Automation</span>
            </div>
          </div>

          {/* Right Column: Interactive 3D Build Stack Visual & Layer Rail */}
          <div className="lg:col-span-6 flex flex-col md:flex-row items-center justify-center gap-6">
            {/* 3D Stack Stage */}
            <div
              ref={stageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[380px] h-[380px] sm:h-[420px] flex items-center justify-center cursor-pointer select-none"
              style={{ perspective: "1200px" }}
            >
              {/* Floor ambient glow shadow */}
              <div className="absolute bottom-4 w-64 h-16 bg-black/20 dark:bg-black/80 blur-2xl rounded-full" />

              {/* 3D Rotating Stack Container */}
              <div
                className="relative w-[240px] sm:w-[270px] h-[240px] sm:h-[270px] transition-transform duration-300 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${55 + tilt.y}deg) rotateY(${tilt.x}deg) rotateZ(-25deg)`,
                }}
              >
                {/* Plane 1: Infrastructure (Base Layer) */}
                <div
                  className={`absolute inset-0 rounded-2xl border transition-all duration-500 shadow-2xl ${
                    hoveredLayer === 0
                      ? "border-[#2B5CFF] shadow-[#2B5CFF]/30 ring-2 ring-[#2B5CFF]/40"
                      : "border-border dark:border-white/15"
                  }`}
                  style={{
                    transform: "translateZ(0px)",
                    background: "linear-gradient(145deg, #14171C, #0C0E11)",
                  }}
                  onMouseEnter={() => setHoveredLayer(0)}
                  onMouseLeave={() => setHoveredLayer(null)}
                >
                  {/* Grid matrix pattern */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    L1 // Infra
                  </div>
                </div>

                {/* Plane 2: Data Layer */}
                <div
                  className={`absolute inset-0 rounded-2xl border transition-all duration-500 shadow-2xl ${
                    hoveredLayer === 1
                      ? "border-[#C0703C] shadow-[#C0703C]/30 ring-2 ring-[#C0703C]/40"
                      : "border-border dark:border-white/15"
                  }`}
                  style={{
                    transform: "translateZ(50px)",
                    background: "linear-gradient(145deg, rgba(28,32,39,0.95), rgba(14,16,19,0.95))",
                  }}
                  onMouseEnter={() => setHoveredLayer(1)}
                  onMouseLeave={() => setHoveredLayer(null)}
                >
                  {/* 16 Pulsing Copper Nodes */}
                  <div className="absolute inset-5 grid grid-cols-4 grid-rows-4 items-center justify-items-center">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className="size-1.5 rounded-full bg-[#C0703C]"
                        style={{
                          animation: `dvPulseGlow 3s infinite ease-in-out ${i * 0.15}s`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#C0703C] uppercase tracking-wider">
                    L2 // Data
                  </div>
                </div>

                {/* Plane 3: Logic Layer */}
                <div
                  className={`absolute inset-0 rounded-2xl border transition-all duration-500 shadow-2xl ${
                    hoveredLayer === 2
                      ? "border-[#2B5CFF] shadow-[#2B5CFF]/30 ring-2 ring-[#2B5CFF]/40"
                      : "border-border dark:border-white/20"
                  }`}
                  style={{
                    transform: "translateZ(100px)",
                    background: "linear-gradient(145deg, rgba(34,39,47,0.92), rgba(18,21,26,0.92))",
                  }}
                  onMouseEnter={() => setHoveredLayer(2)}
                  onMouseLeave={() => setHoveredLayer(null)}
                >
                  {/* Glowing Logic Seams */}
                  <div className="absolute top-1/3 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-[#2B5CFF] to-transparent opacity-80" />
                  <div className="absolute bottom-1/3 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-[#C0703C] to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#2B5CFF] uppercase tracking-wider">
                    L3 // Logic
                  </div>
                </div>

                {/* Plane 4: Interface (Top Layer) */}
                <div
                  className={`absolute inset-0 rounded-2xl border backdrop-blur-sm transition-all duration-500 shadow-2xl ${
                    hoveredLayer === 3
                      ? "border-white shadow-white/20 ring-2 ring-white/40"
                      : "border-border dark:border-white/25"
                  }`}
                  style={{
                    transform: "translateZ(150px)",
                    background: "linear-gradient(145deg, rgba(52,60,72,0.45), rgba(22,25,30,0.65))",
                  }}
                  onMouseEnter={() => setHoveredLayer(3)}
                  onMouseLeave={() => setHoveredLayer(null)}
                >
                  {/* Etched Glass Wireframe UI */}
                  <div className="p-4 space-y-3">
                    <div className="h-2 w-16 bg-white/40 rounded-full" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-10 rounded-lg bg-white/15 border border-white/10 flex items-center justify-center">
                        <div className="size-2 rounded-full bg-emerald-400" />
                      </div>
                      <div className="h-10 rounded-lg bg-white/15 border border-white/10 flex items-center justify-center">
                        <div className="size-2 rounded-full bg-blue-400" />
                      </div>
                      <div className="h-10 rounded-lg bg-white/15 border border-white/10 flex items-center justify-center">
                        <div className="size-2 rounded-full bg-amber-400" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white/90 uppercase tracking-wider">
                    L4 // Interface
                  </div>
                </div>

                {/* Vertical Central Beam & Pulsing Nodes */}
                <div
                  className="absolute left-1/2 top-1/2 w-0.5 h-[170px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    transform: "rotateX(90deg) translateZ(0)",
                    background: "linear-gradient(180deg, transparent, rgba(192,112,60,0.8), transparent)",
                  }}
                />
              </div>
            </div>

            {/* Layer Rail Selector */}
            <div className="flex flex-col gap-2.5 w-full md:w-48">
              {layers.map((layer) => {
                const Icon = layer.icon;
                const isHovered = hoveredLayer === layer.id;
                return (
                  <div
                    key={layer.id}
                    onMouseEnter={() => setHoveredLayer(layer.id)}
                    onMouseLeave={() => setHoveredLayer(null)}
                    className={`flex items-start gap-3 p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isHovered
                        ? "bg-secondary dark:bg-white/10 border-primary shadow-sm translate-x-1"
                        : "bg-card/60 dark:bg-white/5 border-border dark:border-white/5 hover:border-border/80"
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-lg shrink-0 ${
                        isHovered ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                        {layer.name}
                      </div>
                      <div className="text-[11px] text-muted-foreground leading-tight">
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
