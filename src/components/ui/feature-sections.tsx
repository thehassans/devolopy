"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowUpRight, BarChart3, Users, Receipt, ShieldCheck } from "lucide-react";

export interface FeatureCardItem {
  id?: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tag?: string;
}

export interface FeatureSectionsProps {
  title?: string;
  subtitle?: string;
  features?: FeatureCardItem[];
  className?: string;
}

const defaultFeatures: FeatureCardItem[] = [
  {
    id: 1,
    title: "Feedback Analyser",
    description: "Get real-time sentiment analysis and user feedback telemetry with live automated dashboards.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    icon: BarChart3,
    tag: "Analytics",
  },
  {
    id: 2,
    title: "User Management",
    description: "Role-based access control, SSO authentication, and multi-tenant permission structures.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    icon: Users,
    tag: "Security",
  },
  {
    id: 3,
    title: "Automated Invoicing",
    description: "Multi-currency invoicing engines, Stripe billing webhooks, and automated accounting sync.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    icon: Receipt,
    tag: "Finance",
  },
];

export function FeatureSections({
  title = "Powerful Engineering Features",
  subtitle = "Everything you need to manage, track, and scale your digital applications securely and efficiently.",
  features = defaultFeatures,
  className,
}: FeatureSectionsProps) {
  return (
    <section className={cn("w-full py-16 sm:py-24 bg-background text-foreground relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
            <ShieldCheck className="size-3.5" /> High-Velocity Modules
          </div>
          <h2 className="font-space text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id ?? idx}
                className="group relative flex flex-col justify-between rounded-3xl bg-card border border-border/80 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Visual Image / Container */}
                <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-muted/60 border border-border/60">
                  {feature.imageUrl ? (
                    <img
                      src={feature.imageUrl}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary/80 text-muted-foreground">
                      {Icon && <Icon className="size-12 text-primary/60" />}
                    </div>
                  )}

                  {feature.tag && (
                    <span className="absolute top-3 left-3 text-[11px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20 px-2.5 py-0.5 rounded-full">
                      {feature.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="pt-5 space-y-2">
                  <h3 className="font-space text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{feature.title}</span>
                    <ArrowUpRight className="size-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureSections;
