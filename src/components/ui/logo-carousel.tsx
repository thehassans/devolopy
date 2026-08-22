"use client";

import React from "react";
import { TextRoll } from "./text-roll";

export interface LogoItem {
  src: string;
  alt: string;
  name?: string;
}

export interface AnimatedCarouselProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  logos?: string[] | LogoItem[] | null;
  containerClassName?: string;
  titleClassName?: string;
  speedSeconds?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  padding?: string;
}

const defaultLogos: LogoItem[] = [
  { src: "https://cdn.worldvectorlogo.com/logos/next-js.svg", alt: "Next.js 15", name: "Next.js" },
  { src: "https://cdn.worldvectorlogo.com/logos/react-2.svg", alt: "React 19", name: "React" },
  { src: "https://cdn.worldvectorlogo.com/logos/typescript.svg", alt: "TypeScript", name: "TypeScript" },
  { src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", alt: "Tailwind CSS", name: "Tailwind" },
  { src: "https://cdn.worldvectorlogo.com/logos/python-5.svg", alt: "Python", name: "Python" },
  { src: "https://cdn.worldvectorlogo.com/logos/postgresql.svg", alt: "PostgreSQL", name: "PostgreSQL" },
  { src: "https://cdn.worldvectorlogo.com/logos/redis.svg", alt: "Redis", name: "Redis" },
  { src: "https://cdn.worldvectorlogo.com/logos/docker.svg", alt: "Docker", name: "Docker" },
  { src: "https://cdn.worldvectorlogo.com/logos/aws-2.svg", alt: "AWS Cloud", name: "AWS" },
  { src: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", alt: "Stripe", name: "Stripe" },
  { src: "https://cdn.worldvectorlogo.com/logos/openai-2.svg", alt: "OpenAI", name: "OpenAI" },
  { src: "https://cdn.worldvectorlogo.com/logos/figma-icon-one-color.svg", alt: "Figma", name: "Figma" },
];

export const AnimatedCarousel = ({
  title = "Engineered with World-Class Foundations",
  subtitle = "Battle-tested open source frameworks and cloud infrastructure powering our high-velocity builds.",
  badge = "Enterprise Technology Stack",
  logos = null,
  containerClassName = "",
  titleClassName = "",
  speedSeconds = 28,
  padding = "py-14 sm:py-20",
}: AnimatedCarouselProps) => {
  const logoItems: (string | LogoItem)[] = logos || defaultLogos;

  // Duplicate items 4x for continuous seamless loop without seams
  const duplicatedLogos = [...logoItems, ...logoItems, ...logoItems, ...logoItems];

  return (
    <section
      aria-label="Technology Stack"
      className={`w-full ${padding} bg-background border-y border-border transition-colors duration-300 relative overflow-hidden ${containerClassName}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            {badge && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20 shadow-xs">
                <span className="size-1.5 rounded-full bg-[#C0703C] animate-pulse" />
                {badge}
              </span>
            )}
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-space font-extrabold tracking-tight text-foreground ${titleClassName}`}>
              <TextRoll>{title}</TextRoll>
            </h2>
          </div>
          {subtitle && (
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Infinite Continuous Moving Marquee (No blocks, No box background) */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] dark:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div
          className="flex w-max items-center gap-14 sm:gap-20 animate-marquee"
          style={{ animationDuration: `${speedSeconds}s` }}
        >
          {duplicatedLogos.map((logo, index) => {
            const src = typeof logo === "string" ? logo : logo.src;
            const alt = typeof logo === "string" ? `Partner Logo ${index + 1}` : logo.alt;
            const name = typeof logo === "object" ? logo.name || logo.alt : undefined;

            return (
              <div
                key={index}
                className="flex items-center gap-3 shrink-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-default group"
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="h-8 sm:h-9 w-auto max-w-[130px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 dark:invert"
                />
                {name && (
                  <span className="font-space font-bold text-sm text-foreground/80 group-hover:text-primary transition-colors tracking-tight">
                    {name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Case1 = (props: AnimatedCarouselProps) => {
  return <AnimatedCarousel {...props} />;
};

export default AnimatedCarousel;
