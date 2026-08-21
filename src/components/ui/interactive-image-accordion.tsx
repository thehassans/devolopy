"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Bot, Cpu, Zap, Eye, Mic, Brain } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge: string;
}

const DEFAULT_ACCORDION_ITEMS: AccordionItemData[] = [
  {
    id: 1,
    title: "Conversational Voice AI",
    subtitle: "Real-time, ultra-low latency speech intelligence and voice copilots.",
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop",
    icon: Mic,
    badge: "<200ms Voice SLA",
  },
  {
    id: 2,
    title: "Generative Vision & Models",
    subtitle: "High-resolution diffusion pipelines and automated creative synthesis.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2070&auto=format&fit=crop",
    icon: Sparkles,
    badge: "Multi-Modal",
  },
  {
    id: 3,
    title: "Enterprise RAG & Knowledge",
    subtitle: "Private vector search connecting frontier LLMs securely to your company data.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    icon: Brain,
    badge: "100% Data Privacy",
  },
  {
    id: 4,
    title: "Autonomous Agentic Workflows",
    subtitle: "Multi-agent reasoning architectures executing complex business workflows 24/7.",
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
    icon: Bot,
    badge: "Self-Healing",
  },
  {
    id: 5,
    title: "Visual Intelligence & OCR",
    subtitle: "Automated document comprehension, visual inspection, and telemetry parsing.",
    imageUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2070&auto=format&fit=crop",
    icon: Eye,
    badge: "99.8% Accuracy",
  },
];

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isActive,
  onMouseEnter,
  onClick,
}) => {
  const Icon = item.icon;

  return (
    <div
      className={cn(
        "relative h-[480px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out border border-white/10 shadow-2xl backdrop-blur-xl group select-none shrink-0",
        isActive
          ? "w-[340px] sm:w-[380px] lg:w-[420px] ring-2 ring-primary/60 shadow-[0_0_50px_rgba(59,130,246,0.25)]"
          : "w-[68px] sm:w-[80px] opacity-70 hover:opacity-100 hover:border-primary/40"
      )}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {/* Background Image */}
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 420px"
        className={cn(
          "object-cover transition-transform duration-700 ease-out",
          isActive ? "scale-105" : "scale-100 grayscale group-hover:grayscale-0"
        )}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

      {/* Active State Content */}
      {isActive && (
        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10 animate-in fade-in duration-500">
          {/* Top Badge */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-mono font-semibold backdrop-blur-md">
              <Zap className="size-3" /> {item.badge}
            </span>
            <div className="size-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white backdrop-blur-md">
              <Icon className="size-5 text-primary" />
            </div>
          </div>

          {/* Bottom Caption & Description */}
          <div className="space-y-2.5">
            <h3 className="font-space text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed line-clamp-3">
              {item.subtitle}
            </p>
          </div>
        </div>
      )}

      {/* Inactive State Rotated Title */}
      {!isActive && (
        <div className="absolute inset-0 flex flex-col items-center justify-between py-8 z-10">
          <div className="size-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white/80">
            <Icon className="size-4 text-primary" />
          </div>

          <span className="text-white/90 text-sm font-space font-bold whitespace-nowrap -rotate-90 tracking-wider uppercase mb-16 font-mono">
            {item.title}
          </span>
        </div>
      )}
    </div>
  );
};

export function LandingAccordionItem({
  items = DEFAULT_ACCORDION_ITEMS,
  className,
}: {
  items?: AccordionItemData[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(2);
  const { openConsultation } = useConsultation();

  return (
    <section
      id="ai-architecture"
      aria-label="Enterprise AI Architecture"
      className={cn(
        "relative w-full py-24 sm:py-32 bg-[#06080d] text-white overflow-hidden border-t border-border/50",
        className
      )}
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.14),transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          {/* Left Side: Headline & Value Proposition */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-primary shadow-lg shadow-primary/10">
              <Cpu className="size-3.5" /> Next-Gen AI Infrastructure
            </div>

            <h2 className="font-space text-3xl sm:text-5xl font-black tracking-[-0.035em] text-white leading-tight">
              Autonomous AI Systems Built For Scale
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Deploy custom enterprise RAG copilots, multi-modal vision systems, and autonomous multi-agent reasoning pipelines connected securely to your proprietary company databases.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => openConsultation("ai-agentic-automation")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Architect Your AI Stack</span>
                <ArrowRight className="size-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-6 py-3.5 text-sm sm:text-base font-semibold text-white/90 hover:bg-white/10 hover:text-white transition-all"
              >
                <span>Browse All Capabilities</span>
              </a>
            </div>
          </div>

          {/* Right Side: Interactive Image Accordion */}
          <div className="lg:col-span-7 flex items-center justify-center overflow-x-auto py-4 px-2 scrollbar-none">
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 p-2">
              {items.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingAccordionItem;
