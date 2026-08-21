"use client";

import React from "react";
import { Gauge, ShieldCheck, Layers, Zap, Activity } from "lucide-react";

export function KeyMetricsBar() {
  const metrics = [
    {
      id: "lighthouse",
      value: "100/100",
      label: "Lighthouse Performance",
      subtext: "Sub-second FCP & Perfect Vitals",
      badge: "Google Certified",
      icon: Gauge,
      glow: "from-cyan-500/20 via-blue-500/10 to-transparent",
      borderColor: "group-hover:border-cyan-500/50",
      textColor: "text-cyan-400",
      iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
    {
      id: "uptime",
      value: "99.99%",
      label: "Uptime & Reliability",
      subtext: "Multi-Region Cloud Redundancy",
      badge: "24/7 Monitored",
      icon: ShieldCheck,
      glow: "from-emerald-500/20 via-teal-500/10 to-transparent",
      borderColor: "group-hover:border-emerald-500/50",
      textColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      id: "cls",
      value: "0.0s",
      label: "Cumulative Layout Shift",
      subtext: "Pixel-Perfect Visual Stability",
      badge: "Zero Shift",
      icon: Layers,
      glow: "from-indigo-500/20 via-purple-500/10 to-transparent",
      borderColor: "group-hover:border-indigo-500/50",
      textColor: "text-indigo-400",
      iconBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    },
    {
      id: "velocity",
      value: "10x",
      label: "Faster Delivery & Scale",
      subtext: "Accelerated Agile Engineering",
      badge: "High Velocity",
      icon: Zap,
      glow: "from-amber-500/20 via-orange-500/10 to-transparent",
      borderColor: "group-hover:border-amber-500/50",
      textColor: "text-amber-400",
      iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
  ];

  return (
    <section
      aria-label="Devolopy Key Performance Benchmarks"
      className="relative w-full bg-[#080a10] border-y border-white/10 text-white py-8 sm:py-10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.id}
                className={`group relative rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:shadow-2xl ${metric.borderColor}`}
              >
                {/* Ambient Card Corner Glow */}
                <div
                  className={`pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br ${metric.glow} blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`flex size-11 items-center justify-center rounded-xl border p-2.5 backdrop-blur-md shadow-md ${metric.iconBg}`}
                  >
                    <Icon className="size-full" />
                  </div>

                  <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-white/70 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-md">
                    <span className="relative flex size-1.5">
                      <span className="bg-emerald-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                      <span className="bg-emerald-500 relative inline-flex size-1.5 rounded-full" />
                    </span>
                    {metric.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-space font-extrabold text-3xl sm:text-4xl tracking-tight text-white flex items-baseline gap-1">
                    <span>{metric.value}</span>
                  </div>

                  <h3 className="text-sm font-semibold text-white/90 tracking-normal">
                    {metric.label}
                  </h3>

                  <p className="text-xs text-white/55 font-mono">
                    {metric.subtext}
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

export default KeyMetricsBar;
