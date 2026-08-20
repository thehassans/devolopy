"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-md" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex h-9 w-[68px] items-center justify-between rounded-full border border-white/20 bg-black/40 dark:bg-[#0c1017]/80 p-1 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] cursor-pointer overflow-hidden"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* Background ambient lighting */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isDark
            ? "bg-gradient-to-r from-blue-950/30 via-indigo-950/20 to-purple-950/30 opacity-100"
            : "bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-yellow-500/15 opacity-100"
        }`}
      />

      {/* Sun icon on left */}
      <div className="relative z-10 flex size-6 items-center justify-center">
        <Sun
          className={`size-3.5 transition-all duration-300 ${
            !isDark
              ? "text-amber-500 scale-105 drop-shadow-[0_0_6px_rgba(245,158,11,0.8)] opacity-100"
              : "text-white/40 scale-90 opacity-60"
          }`}
        />
      </div>

      {/* Moon icon on right */}
      <div className="relative z-10 flex size-6 items-center justify-center">
        <Moon
          className={`size-3.5 transition-all duration-300 ${
            isDark
              ? "text-blue-400 scale-105 drop-shadow-[0_0_6px_rgba(96,165,250,0.8)] opacity-100"
              : "text-white/40 scale-90 opacity-60"
          }`}
        />
      </div>

      {/* Sliding illuminated toggle thumb */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
        className={`absolute top-1 size-7 rounded-full shadow-md flex items-center justify-center ${
          isDark
            ? "left-[36px] bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-blue-500/50"
            : "left-1 bg-gradient-to-tr from-amber-400 to-orange-500 text-white shadow-amber-500/50"
        }`}
      >
        {isDark ? (
          <Moon className="size-3.5 text-white drop-shadow-sm" />
        ) : (
          <Sun className="size-3.5 text-white drop-shadow-sm" />
        )}
      </motion.div>
    </button>
  );
}

export default ThemeToggle;
