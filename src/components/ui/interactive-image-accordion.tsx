"use client";

import React, { useState } from "react";
import { useConsultation } from "@/components/consultation-modal";

// --- Data for the black aesthetic image accordion ---
interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
}

const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: "Voice Assistant",
    imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "AI Image Generation",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "AI Chatbot + Local RAG",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "AI Agent",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Visual Understanding",
    imageUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&w=1200&q=80",
  },
];

// --- Accordion Item Component ---
interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[440px] rounded-2xl overflow-hidden cursor-pointer shrink-0
        transition-all duration-700 ease-in-out select-none shadow-xl border border-black/10 dark:border-white/10
        ${isActive ? "w-[240px] sm:w-[300px] md:w-[330px] lg:w-[350px]" : "w-[44px] sm:w-[50px] md:w-[56px]"}
      `}
      onMouseEnter={onMouseEnter}
      onClick={onMouseEnter}
    >
      {/* Background Image (Black & Dark Aesthetic) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 transition-all duration-700 ease-out"
        onError={(e) => {
          (e.target as HTMLImageElement).onerror = null;
          (e.target as HTMLImageElement).src =
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";
        }}
      />

      {/* Dark overlay for clean contrast & black tone */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-sm sm:text-base font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0 text-center font-space tracking-tight"
              : "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90 font-mono text-xs tracking-wider opacity-80 uppercase"
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

// --- Main App Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openConsultation } = useConsultation();

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="ai-acceleration"
      aria-labelledby="ai-accordion-heading"
      className="w-full bg-background text-foreground font-sans border-t border-border overflow-hidden py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            <h2
              id="ai-accordion-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tight font-space"
            >
              Accelerate Gen-AI Tasks on Any Device
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Build high-performance AI apps on-device without the hassle of model compression or edge deployment.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openConsultation("ai-agentic-automation")}
                className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:bg-primary/90 transition-colors duration-300 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Side: Black Aesthetic Image Accordion (Without Bottom Scroll Line) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end overflow-hidden">
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-2.5 md:gap-3 p-1">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
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
