"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
  logoCount?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  logos?: string[] | LogoItem[] | null;
  containerClassName?: string;
  titleClassName?: string;
  carouselClassName?: string;
  logoClassName?: string;
  itemsPerViewMobile?: number;
  itemsPerViewDesktop?: number;
  spacing?: string;
  padding?: string;
  logoContainerWidth?: string;
  logoContainerHeight?: string;
  logoImageWidth?: string;
  logoImageHeight?: string;
  logoMaxWidth?: string;
  logoMaxHeight?: string;
}

export const AnimatedCarousel = ({
  title = "Trusted by thousands of businesses worldwide",
  subtitle,
  badge = "Enterprise Technology Stack",
  logoCount = 15,
  autoPlay = true,
  autoPlayInterval = 1800,
  logos = null,
  containerClassName = "",
  titleClassName = "",
  carouselClassName = "",
  logoClassName = "",
  itemsPerViewMobile = 3,
  itemsPerViewDesktop = 6,
  spacing = "gap-8",
  padding = "py-16 sm:py-24",
  logoContainerWidth = "w-full",
  logoContainerHeight = "h-20",
  logoImageWidth = "w-auto",
  logoImageHeight = "h-8 sm:h-9",
  logoMaxWidth = "max-w-[130px]",
  logoMaxHeight = "",
}: AnimatedCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api || !autoPlay) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [api, current, autoPlay, autoPlayInterval]);

  const defaultLogos: LogoItem[] = [
    { src: "https://cdn.worldvectorlogo.com/logos/next-js.svg", alt: "Next.js 15" },
    { src: "https://cdn.worldvectorlogo.com/logos/react-2.svg", alt: "React" },
    { src: "https://cdn.worldvectorlogo.com/logos/typescript.svg", alt: "TypeScript" },
    { src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", alt: "Tailwind CSS" },
    { src: "https://cdn.worldvectorlogo.com/logos/python-5.svg", alt: "Python" },
    { src: "https://cdn.worldvectorlogo.com/logos/postgresql.svg", alt: "PostgreSQL" },
    { src: "https://cdn.worldvectorlogo.com/logos/redis.svg", alt: "Redis" },
    { src: "https://cdn.worldvectorlogo.com/logos/docker.svg", alt: "Docker" },
    { src: "https://cdn.worldvectorlogo.com/logos/aws-2.svg", alt: "AWS" },
    { src: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", alt: "Stripe" },
    { src: "https://cdn.worldvectorlogo.com/logos/openai-2.svg", alt: "OpenAI" },
    { src: "https://cdn.worldvectorlogo.com/logos/figma-icon-one-color.svg", alt: "Figma" },
  ];

  const logoItems: (string | LogoItem)[] = logos || defaultLogos;

  const logoImageSizeClasses = `${logoImageWidth} ${logoImageHeight} ${logoMaxWidth} ${logoMaxHeight}`.trim();

  return (
    <section className={`w-full ${padding} bg-secondary/30 dark:bg-card/40 border-y border-border transition-colors duration-300 ${containerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${spacing}`}>
          {/* Header */}
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
              <p className="text-sm text-muted-foreground max-w-md">
                {subtitle}
              </p>
            )}
          </div>

          {/* Carousel */}
          <div className="w-full pt-2">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setApi}
              className={`w-full ${carouselClassName}`}
            >
              <CarouselContent className="-ml-3 sm:-ml-4">
                {logoItems.map((logo, index) => {
                  const src = typeof logo === "string" ? logo : logo.src;
                  const alt = typeof logo === "string" ? `Partner Logo ${index + 1}` : logo.alt;
                  const name = typeof logo === "object" ? logo.name || logo.alt : undefined;

                  return (
                    <CarouselItem
                      className="pl-3 sm:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                      key={index}
                    >
                      <div
                        className={`flex flex-col rounded-2xl border border-border/70 bg-card hover:border-primary/50 ${logoContainerWidth} ${logoContainerHeight} items-center justify-center p-4 transition-all duration-300 hover:scale-[1.03] shadow-xs group ${logoClassName}`}
                      >
                        <img
                          src={src}
                          alt={alt}
                          loading="lazy"
                          className={`${logoImageSizeClasses} object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:invert`}
                        />
                        {name && (
                          <span className="text-[10px] font-mono text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {name}
                          </span>
                        )}
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Case1 = (props: AnimatedCarouselProps) => {
  return <AnimatedCarousel {...props} />;
};

export default AnimatedCarousel;
