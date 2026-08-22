"use client";

import React from "react";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/devolopy",
    icon: Linkedin,
    hoverColor: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/devolopy",
    icon: Twitter,
    hoverColor: "hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/devolopy",
    icon: Facebook,
    hoverColor: "hover:text-[#1877F2] hover:bg-[#1877F2]/10",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/devolopy",
    icon: Instagram,
    hoverColor: "hover:text-[#E4405F] hover:bg-[#E4405F]/10",
  },
];

export function VerticalSocialBar() {
  return (
    <aside
      aria-label="Social Media Channels"
      className="fixed left-3 sm:left-6 top-[38vh] z-50 flex flex-col items-center"
    >
      <div className="relative flex flex-col items-center gap-1.5 p-1.5 rounded-full bg-card/90 dark:bg-[#090d16]/90 backdrop-blur-xl border border-border dark:border-white/15 shadow-xl transition-all duration-300 hover:shadow-2xl select-none group">
        {/* Social Link Icons */}
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Devolopy on ${social.name}`}
              title={`Follow us on ${social.name}`}
              className={`relative flex items-center justify-center p-2 rounded-full text-foreground/70 hover:text-foreground transition-all duration-200 hover:scale-110 active:scale-95 ${social.hoverColor}`}
            >
              <Icon className="size-3.5 sm:size-4 transition-transform" />
            </a>
          );
        })}

        {/* Divider Line */}
        <div className="w-3.5 h-[1.5px] bg-border/80 dark:bg-white/20 my-1 rounded-full" />

        {/* Vertical "Follow Us" Text */}
        <div className="py-2 px-1 flex items-center justify-center">
          <span className="text-[9px] tracking-widest uppercase font-mono [writing-mode:vertical-rl] rotate-180 font-bold text-muted-foreground group-hover:text-foreground transition-colors">
            Follow Us
          </span>
        </div>
      </div>
    </aside>
  );
}

export default VerticalSocialBar;
