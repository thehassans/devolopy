"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function VerticalThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <aside
      aria-label="Theme Switcher"
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col items-center"
    >
      <div
        className="relative flex flex-col items-center p-1 rounded-full bg-card/85 dark:bg-black/75 backdrop-blur-xl border border-border/80 dark:border-white/15 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary/40 select-none group"
      >
        {/* Light Segment Button */}
        <button
          type="button"
          onClick={() => setTheme("light")}
          className={`relative z-10 flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-full transition-all duration-300 cursor-pointer ${
            !isDark
              ? "text-foreground font-bold"
              : "text-muted-foreground/60 hover:text-foreground font-medium"
          }`}
          aria-label="Activate Light Theme"
          title="Activate Light Theme"
        >
          <Sun className={`size-4 transition-transform duration-300 ${!isDark ? "text-amber-500 scale-110 rotate-0" : "scale-90"}`} />
          <span
            className="text-[10px] tracking-widest uppercase font-mono [writing-mode:vertical-rl] rotate-180"
          >
            Light
          </span>
        </button>

        {/* Divider dot */}
        <div className="w-1 h-1 rounded-full bg-border my-1" />

        {/* Dark Segment Button */}
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={`relative z-10 flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-full transition-all duration-300 cursor-pointer ${
            isDark
              ? "text-foreground font-bold"
              : "text-muted-foreground/60 hover:text-foreground font-medium"
          }`}
          aria-label="Activate Dark Theme"
          title="Activate Dark Theme"
        >
          <span
            className="text-[10px] tracking-widest uppercase font-mono [writing-mode:vertical-rl] rotate-180"
          >
            Dark
          </span>
          <Moon className={`size-4 transition-transform duration-300 ${isDark ? "text-blue-400 scale-110 rotate-0" : "scale-90"}`} />
        </button>

        {/* Animated Sliding Active Capsule */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 450, damping: 32 }}
          className={`absolute left-1 right-1 rounded-full shadow-md pointer-events-none transition-all duration-300 ${
            !isDark
              ? "top-1 h-[78px] bg-white border border-black/10 shadow-sm"
              : "bottom-1 h-[78px] bg-white/10 border border-white/20 shadow-blue-500/10"
          }`}
        />
      </div>
    </aside>
  );
}

export default VerticalThemeToggle;
