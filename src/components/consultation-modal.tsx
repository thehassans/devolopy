"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  CheckCircle2,
  Send,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  Check,
  User,
  Mail,
  Building,
  FileText,
  Clock,
  Zap,
  Lock,
} from "lucide-react";
import { ALL_SERVICES } from "@/lib/services-data";
import { cn } from "@/lib/utils";

interface ConsultationContextType {
  isOpen: boolean;
  openConsultation: (preselectedService?: string) => void;
  closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType>({
  isOpen: false,
  openConsultation: () => {},
  closeConsultation: () => {},
});

export const useConsultation = () => useContext(ConsultationContext);

export function ConsultationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("website-development");
  const [selectedBudget, setSelectedBudget] = useState<string>("$5k - $15k");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const openConsultation = (serviceSlug?: string) => {
    if (serviceSlug) {
      setSelectedService(serviceSlug);
    }
    setSubmitted(false);
    setIsOpen(true);
  };

  const closeConsultation = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
      setTimeout(() => {
        // Auto-close after celebration
        setTimeout(() => {
          setIsOpen(false);
          setSubmitted(false);
          setName("");
          setEmail("");
          setCompany("");
          setMessage("");
        }, 4500);
      }, 400);
    }
  };

  const budgets = [
    { label: "< $5,000", desc: "MVP / Sprint" },
    { label: "$5k - $15k", desc: "Standard Build" },
    { label: "$15k - $50k", desc: "Scale Platform" },
    { label: "$50k+ Enterprise", desc: "Full Architecture" },
  ];

  return (
    <ConsultationContext.Provider value={{ isOpen, openConsultation, closeConsultation }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Ambient Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeConsultation}
              className="fixed inset-0 bg-black/75 backdrop-blur-xl"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ type: "spring", damping: 28, stiffness: 360 }}
              className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-card border border-border/80 p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.5)] z-10 text-card-foreground space-y-6"
            >
              {/* Background Ambient Glow */}
              <div
                className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-purple-600/10 blur-3xl"
                aria-hidden="true"
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={closeConsultation}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all cursor-pointer shadow-sm border border-border"
                aria-label="Close modal"
              >
                <X className="size-4" />
              </button>

              {submitted ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
                  <div className="relative mx-auto flex size-20 items-center justify-center rounded-3xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 shadow-xl shadow-emerald-500/10">
                    <span className="absolute -inset-1 rounded-3xl bg-emerald-500/20 animate-ping opacity-75" />
                    <Check className="size-10 relative z-10" />
                  </div>

                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 text-xs font-mono font-semibold">
                      <Clock className="size-3" /> Guaranteed 24h Response
                    </div>
                    <h3 className="font-space text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                      Strategy Session Reserved!
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-foreground font-bold">{name}</strong>. Our engineering leads are analyzing your parameters and will reach out to <strong className="text-primary font-bold">{email}</strong> with an architectural scope.
                    </p>
                  </div>

                  {/* Next Steps RoadMap */}
                  <div className="grid grid-cols-3 gap-3 max-w-md mx-auto pt-2 text-left">
                    <div className="p-3 rounded-2xl bg-secondary/50 border border-border space-y-1">
                      <span className="text-[10px] font-mono text-primary font-bold">01. AUDIT</span>
                      <p className="text-[11px] text-muted-foreground leading-snug">Tech stack analysis</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-secondary/50 border border-border space-y-1">
                      <span className="text-[10px] font-mono text-primary font-bold">02. SCOPE</span>
                      <p className="text-[11px] text-muted-foreground leading-snug">Sprint roadmap & quote</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-secondary/50 border border-border space-y-1">
                      <span className="text-[10px] font-mono text-primary font-bold">03. LAUNCH</span>
                      <p className="text-[11px] text-muted-foreground leading-snug">Immediate kickoff</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 relative z-10">
                  {/* Header */}
                  <div className="space-y-2 pr-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-xs font-mono font-semibold text-primary shadow-sm">
                      <Sparkles className="size-3.5" /> High-Velocity Engineering
                    </div>
                    <h2 className="font-space text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                      Start Your Project With Devolopy
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Select your project scope below for an instant architecture assessment and fixed timeline quote.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* 1. Service Selection */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                          <Layers className="size-3.5 text-primary" /> 1. Select Service Offering
                        </label>
                        <span className="text-[11px] font-mono text-primary">Custom Modular Stacks</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {ALL_SERVICES.slice(0, 6).map((service) => {
                          const isSelected = selectedService === service.id;
                          return (
                            <button
                              key={service.id}
                              type="button"
                              onClick={() => setSelectedService(service.id)}
                              className={cn(
                                "p-2.5 sm:p-3 rounded-2xl border text-xs text-left transition-all truncate cursor-pointer relative shadow-sm",
                                isSelected
                                  ? "bg-primary text-primary-foreground border-primary font-bold shadow-md shadow-primary/20 scale-[1.02]"
                                  : "bg-secondary/60 hover:bg-secondary border-border text-foreground font-medium"
                              )}
                            >
                              <span className="block truncate">{service.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Budget Range */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                          <Zap className="size-3.5 text-amber-500" /> 2. Target Budget Range
                        </label>
                        <span className="text-[11px] font-mono text-muted-foreground">Fixed Quote Models</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgets.map((b) => {
                          const isSelected = selectedBudget === b.label;
                          return (
                            <button
                              key={b.label}
                              type="button"
                              onClick={() => setSelectedBudget(b.label)}
                              className={cn(
                                "p-2.5 rounded-2xl border text-center transition-all cursor-pointer shadow-sm",
                                isSelected
                                  ? "bg-primary text-primary-foreground border-primary font-bold shadow-md shadow-primary/20 scale-[1.02]"
                                  : "bg-secondary/60 hover:bg-secondary border-border text-foreground font-medium"
                              )}
                            >
                              <div className="text-xs font-mono font-bold leading-tight">{b.label}</div>
                              <div className={cn("text-[10px] font-mono mt-0.5", isSelected ? "text-primary-foreground/80" : "text-muted-foreground")}>
                                {b.desc}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 3. Contact Inputs */}
                    <div className="space-y-3 pt-1">
                      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                        <User className="size-3.5 text-primary" /> 3. Your Information
                      </label>

                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name *"
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-secondary/50 border border-border text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                          />
                        </div>

                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Work Email Address *"
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-secondary/50 border border-border text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="relative">
                          <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Company / Organization Name"
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-secondary/50 border border-border text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                          />
                        </div>

                        <div className="relative">
                          <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                          <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Brief Project Scope or Notes"
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-secondary/50 border border-border text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Bar */}
                    <div className="pt-3 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
                        <span>Non-Disclosure & 100% IP Protected</span>
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 transition-all cursor-pointer"
                      >
                        <span>Submit Project Brief</span>
                        <Send className="size-4" />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ConsultationContext.Provider>
  );
}

export default ConsultationProvider;
