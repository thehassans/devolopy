"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BrandItem {
  name: string;
  logo: string;
}

const BRANDS: BrandItem[] = [
  {
    name: "Spotify",
    logo: "https://xhmthoftkmuxvqrwmsvi.supabase.co/storage/v1/object/sign/AI%20Component-Header/Brands/spotify-black.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNGM4MDA0OS1lYTE1LTQyMDgtYTJjOC1iOTViMTkxYmFkMGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBSSBDb21wb25lbnQtSGVhZGVyL0JyYW5kcy9zcG90aWZ5LWJsYWNrLnN2ZyIsImlhdCI6MTc2Nzg0OTQ0OCwiZXhwIjoxOTI1NTI5NDQ4fQ.G4y-cDv4h_6YdUR3rQAHfRLP342UBYDugskgVVuRJPU",
  },
  {
    name: "Asana",
    logo: "https://xhmthoftkmuxvqrwmsvi.supabase.co/storage/v1/object/sign/AI%20Component-Header/Brands/asana-black.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNGM4MDA0OS1lYTE1LTQyMDgtYTJjOC1iOTViMTkxYmFkMGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBSSBDb21wb25lbnQtSGVhZGVyL0JyYW5kcy9hc2FuYS1ibGFjay5zdmciLCJpYXQiOjE3Njc4NDk0OTMsImV4cCI6MTkyNTUyOTQ5M30.nF4O4Dnko7LAnJ0qRNffeK72V-VWVi7vSrK1d1q91ys",
  },
  {
    name: "Medium",
    logo: "https://xhmthoftkmuxvqrwmsvi.supabase.co/storage/v1/object/sign/AI%20Component-Header/Brands/medium-black.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNGM4MDA0OS1lYTE1LTQyMDgtYTJjOC1iOTViMTkxYmFkMGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBSSBDb21wb25lbnQtSGVhZGVyL0JyYW5kcy9tZWRpdW0tYmxhY2suc3ZnIiwiaWF0IjoxNzY3ODQ5NTIwLCJleHAiOjE5MjU1Mjk1MjB9.HURqzcp87syqXcsj4QmK0TapCh5evugoM6LSdMkDFD0",
  },
  {
    name: "Gumroad",
    logo: "https://xhmthoftkmuxvqrwmsvi.supabase.co/storage/v1/object/sign/AI%20Component-Header/Brands/gumroad-black.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNGM4MDA0OS1lYTE1LTQyMDgtYTJjOC1iOTViMTkxYmFkMGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBSSBDb21wb25lbnQtSGVhZGVyL0JyYW5kcy9ndW1yb2FkLWJsYWNrLnN2ZyIsImlhdCI6MTc2Nzg0OTUzNCwiZXhwIjoxOTI1NTI5NTM0fQ.C6nlRAIJMiSXdxB7EiZ_0Moq7moeUUz98681Mipct5w",
  },
  {
    name: "Framer",
    logo: "https://xhmthoftkmuxvqrwmsvi.supabase.co/storage/v1/object/sign/AI%20Component-Header/Brands/framer-black.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNGM4MDA0OS1lYTE1LTQyMDgtYTJjOC1iOTViMTkxYmFkMGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBSSBDb21wb25lbnQtSGVhZGVyL0JyYW5kcy9mcmFtZXItYmxhY2suc3ZnIiwiaWF0IjoxNzY3ODQ5NTQ3LCJleHAiOjE5MjU1Mjk1NDd9.MNectRtlUC1eOY2skYdkS-c9ClglnqbTUcKyUpzK6CE",
  },
  {
    name: "Stripe",
    logo: "https://xhmthoftkmuxvqrwmsvi.supabase.co/storage/v1/object/sign/AI%20Component-Header/Brands/stripe-black.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNGM4MDA0OS1lYTE1LTQyMDgtYTJjOC1iOTViMTkxYmFkMGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBSSBDb21wb25lbnQtSGVhZGVyL0JyYW5kcy9zdHJpcGUtYmxhY2suc3ZnIiwiaWF0IjoxNzY3ODQ5MzgzLCJleHAiOjE5MjU1MjkzODN9.s2GRVXgT4PEmS3Js7ZJbweS3GsKRCydtl5MGzLmlTnw",
  },
  {
    name: "HubSpot",
    logo: "https://xhmthoftkmuxvqrwmsvi.supabase.co/storage/v1/object/sign/AI%20Component-Header/Brands/hubspot-black.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNGM4MDA0OS1lYTE1LTQyMDgtYTJjOC1iOTViMTkxYmFkMGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBSSBDb21wb25lbnQtSGVhZGVyL0JyYW5kcy9odWJzcG90LWJsYWNrLnN2ZyIsImlhdCI6MTc2Nzg0OTQxMCwiZXhwIjoxOTI1NTI5NDEwfQ.OrtPAsWr4kzD7_BPhcqGwTGmC5ZyoPDy6ur3YyLO_0c",
  },
  {
    name: "GitHub",
    logo: "https://xhmthoftkmuxvqrwmsvi.supabase.co/storage/v1/object/sign/AI%20Component-Header/Brands/github-black.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNGM4MDA0OS1lYTE1LTQyMDgtYTJjOC1iOTViMTkxYmFkMGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBSSBDb21wb25lbnQtSGVhZGVyL0JyYW5kcy9naXRodWItYmxhY2suc3ZnIiwiaWF0IjoxNzY3ODQ5NDMwLCJleHAiOjE5MjU1Mjk0MzB9.Hp_X4jTTtv7PCOk0gB4q5RwfzB9q78gEb-i7W4ylj2Q",
  },
];

export function TrustedBrandBlack() {
  const duplicatedBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="w-full bg-[#000000] py-[80px] overflow-hidden select-none relative">
      {/* Google Fonts Scoped Loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Scoped CSS Keyframes for Seamless Marquee */}
      <style>{`
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 40px));
          }
        }
        @keyframes marquee-scroll-mobile {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 20px));
          }
        }
        .marquee-content {
          animation: marquee-scroll 30s linear infinite;
          will-change: transform;
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .marquee-content {
            gap: 40px;
            animation: marquee-scroll-mobile 20s linear infinite;
          }
        }
      `}</style>

      {/* Inner Centered Content Wrapper */}
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#FEFFFF] text-center text-[18px] font-medium leading-[140%] mb-[60px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Trusted by 90+ high-growth startups
        </motion.h2>

        {/* Marquee container with fade edges */}
        <div className="marquee-container relative flex overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          {/* Marquee Content track */}
          <div className="marquee-content flex shrink-0 gap-[80px] min-w-full">
            {duplicatedBrands.map((brand, idx) => (
              <img
                key={`${brand.name}-${idx}`}
                src={brand.logo}
                alt={brand.name}
                className="h-[32px] w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer object-contain shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBrandBlack;
