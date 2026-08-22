"use client";

import React from "react";
import { TextRoll } from "./text-roll";

export interface LogoItem {
  name: string;
  category?: string;
  icon: React.ReactNode;
}

const TECH_LOGOS: LogoItem[] = [
  {
    name: "React 19",
    icon: (
      <svg className="size-6 sm:size-7" viewBox="0 0 115.3 100" fill="#61DAFB">
        <path d="M57.65 65.25c-8.4 0-15.25-6.85-15.25-15.25s6.85-15.25 15.25-15.25 15.25 6.85 15.25 15.25-6.85 15.25-15.25 15.25z" />
        <ellipse cx="57.65" cy="50" rx="54.4" ry="21.15" fill="none" stroke="#61DAFB" strokeWidth="4.4" />
        <ellipse cx="57.65" cy="50" rx="54.4" ry="21.15" fill="none" stroke="#61DAFB" strokeWidth="4.4" transform="rotate(60 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="54.4" ry="21.15" fill="none" stroke="#61DAFB" strokeWidth="4.4" transform="rotate(120 57.65 50)" />
      </svg>
    ),
  },
  {
    name: "Next.js 15",
    icon: (
      <svg className="size-6 sm:size-7" viewBox="0 0 180 180" fill="none">
        <mask id="next-mask-p2" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#next-mask-p2)">
          <circle cx="90" cy="90" r="90" fill="black" className="dark:fill-white" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.166 149.508 157.52Z" fill="white" className="dark:fill-black" />
          <rect x="115" y="54" width="12" height="72" fill="white" className="dark:fill-black" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg className="size-6 sm:size-7 rounded-md" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path d="M72.9 87.2c3.1 3.5 7.6 5.6 13.1 5.6 7.4 0 12.3-3.8 12.3-9.5 0-6.1-4.7-8.3-13.4-12-12.7-5.3-17.5-10.9-17.5-21.4 0-11.8 9.5-20.7 24.6-20.7 8.3 0 14.6 2.4 19.3 6.9l-6.4 8.7c-3.5-3.1-7.7-4.6-12.8-4.6-7.1 0-11.2 3.8-11.2 8.4 0 5.4 3.9 7.4 12.5 11.2 13.9 5.8 18.5 11.4 18.5 22.3 0 13.1-10.4 21.6-26.4 21.6-10.3 0-18.4-3.1-23.7-8.9l6.1-7.6zM28.4 40.5h33.8v10.9H47.1v51.4H33.8V51.4H28.4V40.5z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="size-6 sm:size-7" viewBox="0 0 24 24" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className="size-6 sm:size-7" viewBox="0 0 110 110">
        <path d="M54.5 5.5c-24.8 0-23.2 10.8-23.2 10.8l.1 11.2h23.6v3.4H22.5C6.8 30.9 5.5 44.5 5.5 44.5s-1.5 17.5 13.9 17.5h8.3v-11.7c0-8.5 7.4-15.9 15.9-15.9h23.6v-3.4H39.8s-7.9.8-7.9-7.9c0-8.6 7.4-8.1 7.4-8.1h38.4s7.2.2 7.2-7.4c0-7.7-7.4-7.5-7.4-7.5H54.5zm-9.3 6.9c2.3 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1-4.1-1.8-4.1-4.1 1.8-4.1 4.1-4.1z" fill="#3776AB" />
        <path d="M55.5 104.5c24.8 0 23.2-10.8 23.2-10.8l-.1-11.2H55v-3.4h32.5c15.7 0 17-13.6 17-13.6s1.5-17.5-13.9-17.5h-8.3v11.7c0 8.5-7.4 15.9-15.9 15.9H42.8v3.4h27.4s7.9-.8 7.9 7.9c0 8.6-7.4 8.1-7.4 8.1H32.3s-7.2-.2-7.2 7.4c0 7.7 7.4 7.5 7.4 7.5h23zM64.8 97.6c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1z" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg className="size-6 sm:size-7" viewBox="0 0 64 64" fill="#336791">
        <path d="M31.9 3.5c-15.8 0-28.4 12.6-28.4 28.4 0 8 3.3 15.2 8.6 20.4l6.4-12.7c-1.3-2.3-2.1-5-2.1-7.8 0-8.9 7.2-16.1 16.1-16.1s16.1 7.2 16.1 16.1c0 3.3-1 6.3-2.8 8.8l6.8 11.9c4.9-5.2 7.8-12.4 7.8-20.5 0-15.8-12.7-28.5-28.5-28.5zm-5.4 28.6c0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4-2.4 5.4-5.4 5.4-5.4-2.4-5.4-5.4z" />
        <path d="M32 39.5c-3.1 0-5.8 1.7-7.2 4.2l-7.3 14.5c4.3 3.6 9.8 5.8 15.9 5.8 6.4 0 12.3-2.5 16.6-6.4L40 43.1c-1.8-2.2-4.6-3.6-8-3.6z" fill="#4B8BBE" />
      </svg>
    ),
  },
  {
    name: "Redis",
    icon: (
      <svg className="size-6 sm:size-7" viewBox="0 0 24 24" fill="#DC382D">
        <path d="M22.08 6.55L13.1.28c-.68-.48-1.57-.48-2.25 0L1.87 6.55c-.71.5-.78 1.48-.15 2.08l8.97 8.52c.62.59 1.6.59 2.22 0l8.97-8.52c.63-.6.56-1.58-.15-2.08zM12 2.37l7.24 5.06-7.24 5.06L4.76 7.43 12 2.37zm-.98 19.34l-8.97-6.28a1.5 1.5 0 0 1-.65-1.23V9.75l3.29 2.3v3.75l6.33 4.43v1.48zm1.96 0v-1.48l6.33-4.43v-3.75l3.29-2.3v4.45c0 .48-.25.93-.65 1.23l-8.97 6.28z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg className="size-6 sm:size-7" viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185M23.79 11.23a4.7 4.7 0 00-2.316-1.572c-.17-.058-.352-.095-.536-.11-1.04-.084-2.03.355-2.73 1.137-.417-.084-.848-.127-1.282-.127H1.365a1.364 1.364 0 00-1.36 1.366c0 3.738 1.488 7.322 4.135 9.97 2.648 2.648 6.233 4.136 9.97 4.136 9.206 0 16.79-7.142 17.29-16.326.69-.117 1.436-.453 1.944-1.066.417-.504.606-1.164.446-1.808" />
      </svg>
    ),
  },
  {
    name: "AWS Cloud",
    icon: (
      <svg className="size-6 sm:size-7" viewBox="0 0 24 24">
        <path d="M6.9 9.5c0-.6.4-1.1 1.2-1.1.9 0 1.3.4 1.4 1.2h1.6c-.1-1.6-1.3-2.6-3-2.6-1.9 0-2.9 1.1-2.9 2.5 0 2.2 2.6 2.1 2.6 3.3 0 .7-.6 1-1.3 1-1.1 0-1.6-.6-1.7-1.4H3.2c.1 1.7 1.3 2.7 3.2 2.7 2 0 3-1.1 3-2.6 0-2.3-2.5-2.2-2.5-3zM12.9 7.1l-1.9 8h1.6l.4-1.9h2.3l.4 1.9h1.7l-1.9-8h-2.6zm.5 4.8l.7-3.4.7 3.4h-1.4zM22.5 7.1l-1.4 5.7-1.2-4.4h-1.4l-1.2 4.4-1.4-5.7h-1.7l2.2 8h1.6l1.2-4.1 1.2 4.1h1.6l2.2-8h-1.9z" fill="#232F3E" className="dark:fill-white" />
        <path d="M19.7 18.2c-3.7 2.4-8.8 2.8-13.4 1.2-1.8-.6-3.4-1.6-4.8-2.9-.3-.3-.1-.6.3-.4 4.5 2.6 10.1 2.7 14.9.4.6-.3 1.2.3.6.7z" fill="#FF9900" />
        <path d="M21 16.8c-.5-.6-3.1-.3-4.3-.1-.3 0-.4-.3-.1-.5 2-1.3 4.2-.9 4.6-.4.4.5-.1 2.7-2 4.2-.3.2-.5.1-.4-.2.4-1.1 1.7-2.4 2.2-3z" fill="#FF9900" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    icon: (
      <svg className="size-6 sm:size-7" viewBox="0 0 24 24" fill="#635BFF">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.607.5 6.675.5 2.46 3.633 2.46 8.528c0 5.485 5.568 6.883 9.49 8.28 2.427.868 3.518 1.684 3.518 2.727 0 .979-.868 1.583-2.378 1.583-2.584 0-5.46-1.144-7.398-2.22l-.92 5.587C6.674 25.492 9.77 26 12.83 26c6.234 0 10.518-2.96 10.518-8.228 0-5.748-5.385-6.86-9.372-8.622z" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    icon: (
      <svg className="size-6 sm:size-7" viewBox="0 0 24 24" fill="#10A37F">
        <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0010.812.5a6.05 6.05 0 00-5.77 4.148 6.065 6.065 0 00-3.99 2.899 6.045 6.045 0 00.748 7.098 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 6.09 6.09 0 003.99-2.899 6.046 6.046 0 00-.74-7.074zM13.26 22.47a4.52 4.52 0 01-2.89-.964l.16-.092 4.8-2.772a.79.79 0 00.395-.684v-6.76l2.03 1.173a.07.07 0 01.04.053v5.526a4.54 4.54 0 01-4.535 4.52zM3.48 17.65a4.512 4.512 0 01-.564-3.007l.16.093 4.8 2.772a.795.795 0 00.79 0l5.856-3.38v2.347a.08.08 0 01-.03.064L9.7 19.39a4.537 4.537 0 01-6.22-1.74zm-1.25-9.61a4.512 4.512 0 012.327-2.045v5.736a.79.79 0 00.395.684l5.856 3.38-2.03 1.172a.08.08 0 01-.07.01L3.9 14.19a4.537 4.537 0 01-1.67-6.15zm16.48-1.572l-4.8 2.772a.79.79 0 00-.395.684v6.76l-2.03-1.173a.07.07 0 01-.04-.053V9.59a4.54 4.54 0 014.535-4.52c1.07 0 2.08.38 2.89.964l-.16.093zm3.79 5.83a4.512 4.512 0 01.564 3.007l-.16-.093-4.8-2.772a.795.795 0 00-.79 0l-5.856 3.38V13.88a.08.08 0 01.03-.064l4.79-2.766a4.537 4.537 0 016.222 1.74zm-8.8-1.078l2.67 1.542v3.084l-2.67 1.542-2.67-1.542V12.77l2.67-1.542z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg className="size-6 sm:size-7" viewBox="0 0 38 57">
        <path d="M19 28.5a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z" fill="#1ABCFE" />
        <path d="M0 47.5a9.5 9.5 0 019.5-9.5H19v9.5a9.5 9.5 0 11-19 0z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 100-19H19z" fill="#FF7262" />
        <path d="M0 9.5A9.5 9.5 0 009.5 19H19V0H9.5A9.5 9.5 0 000 9.5z" fill="#F24E1E" />
        <path d="M0 28.5A9.5 9.5 0 009.5 38H19V19H9.5A9.5 9.5 0 000 28.5z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <svg className="size-6 sm:size-7" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "Flutter",
    icon: (
      <svg className="size-6 sm:size-7" viewBox="0 0 24 24" fill="#02569B">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zM14.286 9.34l-5.6 5.6 5.6 5.6h7.4l-5.6-5.6 5.6-5.6h-7.4z" />
      </svg>
    ),
  },
  {
    name: "Odoo ERP",
    icon: (
      <svg className="size-6 sm:size-7" viewBox="0 0 100 100" fill="#714B67">
        <circle cx="50" cy="50" r="45" fill="#714B67" />
        <path d="M50 25c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25zm0 38c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13z" fill="#FFFFFF" />
      </svg>
    ),
  },
];

export interface AnimatedCarouselProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  containerClassName?: string;
  titleClassName?: string;
  speedSeconds?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  logos?: any;
  padding?: string;
}

export const AnimatedCarousel = ({
  title = "Engineered with World-Class Foundations",
  subtitle = "Battle-tested open source frameworks and cloud infrastructure powering our high-velocity builds.",
  badge = "Enterprise Technology Stack",
  containerClassName = "",
  titleClassName = "",
  speedSeconds = 130, // True slow, relaxed, ultra-premium continuous glide
  padding = "py-14 sm:py-20",
}: AnimatedCarouselProps) => {
  // Duplicate array 2x for seamless continuous infinite marquee
  const duplicatedLogos = [...TECH_LOGOS, ...TECH_LOGOS];

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

      {/* Infinite Continuous Ultra-Slow Marquee */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)] dark:[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div
          className="flex w-max items-center gap-16 sm:gap-24 py-2"
          style={{
            animation: `marquee ${speedSeconds}s linear infinite`,
          }}
        >
          {duplicatedLogos.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 shrink-0 opacity-80 hover:opacity-100 transition-all duration-300 cursor-default group"
            >
              {/* Perfectly Sized Authentic Vector Icon */}
              <div className="shrink-0 flex items-center justify-center transition-transform group-hover:scale-110 duration-200">
                {tech.icon}
              </div>

              {/* Perfectly Proportioned Label */}
              <span className="font-space font-semibold text-xs sm:text-sm text-foreground/80 group-hover:text-primary transition-colors tracking-tight whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Case1 = (props: AnimatedCarouselProps) => {
  return <AnimatedCarousel {...props} />;
};

export default AnimatedCarousel;
