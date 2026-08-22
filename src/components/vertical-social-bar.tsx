"use client";

import React from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/devolopy",
    hoverColor: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/devolopy",
    hoverColor: "hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/devolopy",
    hoverColor: "hover:text-[#1877F2] hover:bg-[#1877F2]/10",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/devolopy",
    hoverColor: "hover:text-[#E4405F] hover:bg-[#E4405F]/10",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export function VerticalSocialBar() {
  return (
    <aside
      aria-label="Social Media Channels"
      className="fixed left-3 sm:left-6 top-[26vh] sm:top-[28vh] z-50 flex flex-col items-center"
    >
      <div className="relative flex flex-col items-center gap-1.5 p-1.5 rounded-full bg-card/90 dark:bg-[#090d16]/90 backdrop-blur-xl border border-border dark:border-white/15 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary/40 select-none group">
        {/* Social Link Icons */}
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow Devolopy on ${social.name}`}
            title={`Follow us on ${social.name}`}
            className={`relative flex items-center justify-center p-2.5 rounded-full text-foreground/75 hover:text-foreground transition-all duration-200 hover:scale-110 active:scale-95 ${social.hoverColor}`}
          >
            {social.icon}
          </a>
        ))}

        {/* Subtle Divider Line */}
        <div className="w-3.5 h-[1.5px] bg-border dark:bg-white/20 my-1 rounded-full" />

        {/* Ultra-Crisp Vertical "FOLLOW US" Text */}
        <div className="py-2 px-1 flex items-center justify-center">
          <span className="text-[9px] tracking-[0.24em] uppercase font-mono [writing-mode:vertical-rl] rotate-180 font-bold text-muted-foreground group-hover:text-foreground transition-colors">
            Follow Us
          </span>
        </div>
      </div>
    </aside>
  );
}

export default VerticalSocialBar;
