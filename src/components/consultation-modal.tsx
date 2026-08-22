"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Check,
  User,
  Mail,
  Building,
  FileText,
  Clock,
  Zap,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Layers,
  Smartphone,
  Cloud,
  Globe,
  RefreshCw,
  Bot,
  ShoppingBag,
  BarChart3,
  Calendar,
} from "lucide-react";
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

const serviceOptions = [
  {
    id: "website-development",
    title: "Web Development",
    desc: "Next.js 15, React 19, TypeScript & Headless CMS",
    icon: Globe,
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    desc: "React Native & Flutter iOS / Android Native Apps",
    icon: Smartphone,
  },
  {
    id: "odoo-development",
    title: "Odoo ERP Systems",
    desc: "Odoo 18, Multi-Branch POS & ZATCA E-Invoicing",
    icon: RefreshCw,
  },
  {
    id: "ai-agentic-automation",
    title: "AI & Agentic Automation",
    desc: "Custom LLM Copilots, Document OCR & RAG",
    icon: Bot,
  },
  {
    id: "e-commerce-solutions",
    title: "E-Commerce Solutions",
    desc: "Shopify Plus & Headless Next.js Commerce",
    icon: ShoppingBag,
  },
  {
    id: "cloud-devops-architecture",
    title: "Cloud & DevOps",
    desc: "AWS, GCP, Terraform IaC & Docker Containers",
    icon: Cloud,
  },
];

const budgetTiers = [
  { label: "< $5,000", title: "MVP / Sprint", desc: "Proof-of-concept prototype & design" },
  { label: "$5k - $15k", title: "Standard Build", desc: "Complete production app / website" },
  { label: "$15k - $50k", title: "Scale Platform", desc: "Multi-service enterprise system" },
  { label: "$50k+", title: "Enterprise", desc: "Custom full-stack architecture & SLA" },
];

const timelineTiers = [
  "2 - 4 Weeks (Fast-Track)",
  "1 - 2 Months",
  "3+ Months (Enterprise)",
  "Immediate Kickoff",
];

export function ConsultationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState<string>("website-development");
  const [selectedBudget, setSelectedBudget] = useState<string>("$5k - $15k");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("2 - 4 Weeks (Fast-Track)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const openConsultation = (serviceSlug?: string) => {
    if (serviceSlug) {
      setSelectedService(serviceSlug);
    }
    setStep(1);
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
        setTimeout(() => {
          setIsOpen(false);
          setSubmitted(false);
          setStep(1);
          setName("");
          setEmail("");
          setCompany("");
          setMessage("");
        }, 5000);
      }, 400);
    }
  };

  return (
    <ConsultationContext.Provider value={{ isOpen, openConsultation, closeConsultation }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeConsultation}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 28, stiffness: 360 }}
              className="relative w-full max-w-2xl rounded-3xl bg-card border border-border p-6 sm:p-9 shadow-2xl z-10 text-card-foreground overflow-hidden"
            >
              {/* Subtle ambient corner glow */}
              <div
                className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-primary/15 blur-3xl"
                aria-hidden="true"
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={closeConsultation}
                className="absolute top-5 right-5 p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all cursor-pointer shadow-xs border border-border z-20"
                aria-label="Close modal"
              >
                <X className="size-4" />
              </button>

              {submitted ? (
                /* Celebration Screen */
                <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-400">
                  <div className="relative mx-auto flex size-20 items-center justify-center rounded-3xl bg-primary/15 border border-primary/30 text-primary shadow-xl shadow-primary/15">
                    <span className="absolute -inset-1 rounded-3xl bg-primary/20 animate-ping opacity-75" />
                    <Check className="size-10 relative z-10" />
                  </div>

                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-semibold">
                      <Clock className="size-3.5" /> Guaranteed 24h Lead Architect Response
                    </div>
                    <h3 className="font-space text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                      Architecture Brief Received!
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-foreground">{name}</strong>. Our engineering leads are reviewing your project parameters and will contact <strong className="text-primary">{email}</strong> with an architecture blueprint and fixed quote.
                    </p>
                  </div>

                  {/* 3-Step Roadmap */}
                  <div className="grid grid-cols-3 gap-3 max-w-md mx-auto pt-2 text-left">
                    <div className="p-3.5 rounded-2xl bg-secondary/60 border border-border space-y-1">
                      <span className="text-[10px] font-mono text-[#C0703C] font-bold block">01. AUDIT</span>
                      <p className="text-[11px] text-muted-foreground leading-snug">Stack &amp; flow assessment</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-secondary/60 border border-border space-y-1">
                      <span className="text-[10px] font-mono text-[#C0703C] font-bold block">02. BLUEPRINT</span>
                      <p className="text-[11px] text-muted-foreground leading-snug">Sprint roadmap &amp; pricing</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-secondary/60 border border-border space-y-1">
                      <span className="text-[10px] font-mono text-[#C0703C] font-bold block">03. KICKOFF</span>
                      <p className="text-[11px] text-muted-foreground leading-snug">Immediate build execution</p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Step-by-Step Multi-Stage Form */
                <div className="space-y-6">
                  {/* Stepper Header */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20 shadow-xs">
                        <span className="size-2 rounded-full bg-[#C0703C] animate-pulse" />
                        Step 0{step} of 03
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">
                        {step === 1 && "Select Service Offering"}
                        {step === 2 && "Target Scope & Budget"}
                        {step === 3 && "Contact Details"}
                      </span>
                    </div>

                    <h2 className="font-space text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                      Start Your Project With Devolopy
                    </h2>

                    {/* Step Progress Bar */}
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden flex gap-1">
                      <div className={`h-full flex-1 rounded-full transition-all duration-300 ${step >= 1 ? "bg-primary" : "bg-transparent"}`} />
                      <div className={`h-full flex-1 rounded-full transition-all duration-300 ${step >= 2 ? "bg-primary" : "bg-transparent"}`} />
                      <div className={`h-full flex-1 rounded-full transition-all duration-300 ${step >= 3 ? "bg-primary" : "bg-transparent"}`} />
                    </div>
                  </div>

                  {/* ── STEP 1: Select Service Offering ── */}
                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Choose the primary solution required for your business build:
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[320px] overflow-y-auto pr-1">
                        {serviceOptions.map((svc) => {
                          const Icon = svc.icon;
                          const isSelected = selectedService === svc.id;
                          return (
                            <button
                              key={svc.id}
                              type="button"
                              onClick={() => setSelectedService(svc.id)}
                              className={cn(
                                "flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer shadow-xs",
                                isSelected
                                  ? "bg-primary/10 border-primary ring-2 ring-primary/40 shadow-sm"
                                  : "bg-secondary/40 hover:bg-secondary/80 border-border"
                              )}
                            >
                              <div className={cn(
                                "size-9 rounded-xl flex items-center justify-center shrink-0 border transition-colors",
                                isSelected ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-foreground"
                              )}>
                                <Icon className="size-4.5" />
                              </div>
                              <div className="min-w-0">
                                <span className="font-space text-sm font-bold text-foreground block truncate">
                                  {svc.title}
                                </span>
                                <span className="text-[11px] text-muted-foreground leading-tight block mt-0.5 line-clamp-1">
                                  {svc.desc}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="pt-2 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs sm:text-sm shadow-md shadow-primary/20 transition-all cursor-pointer hover:scale-[1.02]"
                        >
                          <span>Continue to Scope &amp; Budget</span>
                          <ArrowRight className="size-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* ── STEP 2: Target Scope & Budget ── */}
                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      {/* Budget Selection */}
                      <div className="space-y-2.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                          <Zap className="size-3.5 text-[#C0703C]" /> Target Investment Range
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {budgetTiers.map((b) => {
                            const isSelected = selectedBudget === b.label;
                            return (
                              <button
                                key={b.label}
                                type="button"
                                onClick={() => setSelectedBudget(b.label)}
                                className={cn(
                                  "p-3 rounded-2xl border text-center transition-all cursor-pointer shadow-xs flex flex-col justify-between",
                                  isSelected
                                    ? "bg-primary text-primary-foreground border-primary font-bold shadow-md shadow-primary/20 scale-[1.02]"
                                    : "bg-secondary/40 hover:bg-secondary border-border text-foreground font-medium"
                                )}
                              >
                                <div className="text-xs font-mono font-bold">{b.label}</div>
                                <div className={cn("text-[10px] mt-1 line-clamp-1", isSelected ? "text-primary-foreground/90" : "text-muted-foreground")}>
                                  {b.title}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Timeline Selection */}
                      <div className="space-y-2.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                          <Calendar className="size-3.5 text-primary" /> Target Sprint Timeline
                        </label>
                        <div className="grid grid-cols-2 gap-2.5">
                          {timelineTiers.map((t) => {
                            const isSelected = selectedTimeline === t;
                            return (
                              <button
                                key={t}
                                type="button"
                                onClick={() => setSelectedTimeline(t)}
                                className={cn(
                                  "p-3 rounded-2xl border text-xs text-left transition-all cursor-pointer font-medium shadow-xs truncate",
                                  isSelected
                                    ? "bg-primary text-primary-foreground border-primary font-bold shadow-md shadow-primary/20 scale-[1.02]"
                                    : "bg-secondary/40 hover:bg-secondary border-border text-foreground"
                                )}
                              >
                                {t}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground font-semibold text-xs transition-all cursor-pointer"
                        >
                          <ArrowLeft className="size-3.5" />
                          <span>Back</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs sm:text-sm shadow-md shadow-primary/20 transition-all cursor-pointer hover:scale-[1.02]"
                        >
                          <span>Continue to Information</span>
                          <ArrowRight className="size-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* ── STEP 3: Contact Details & Submit ── */}
                  {step === 3 && (
                    <motion.form
                      key="step-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name *"
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-secondary/50 border border-border text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-xs"
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
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-secondary/50 border border-border text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-xs"
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
                            placeholder="Company / Brand Name"
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-secondary/50 border border-border text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-xs"
                          />
                        </div>

                        <div className="relative">
                          <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                          <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Brief Scope or Notes (Optional)"
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-secondary/50 border border-border text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-xs"
                          />
                        </div>
                      </div>

                      {/* Selected Summary Pill */}
                      <div className="p-3 rounded-2xl bg-secondary/40 border border-border/80 flex items-center justify-between text-xs font-mono text-muted-foreground">
                        <span>Selected: <strong className="text-foreground">{selectedService}</strong></span>
                        <span>Budget: <strong className="text-primary">{selectedBudget}</strong></span>
                      </div>

                      {/* Bottom Actions */}
                      <div className="pt-2 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground font-semibold text-xs transition-all cursor-pointer"
                        >
                          <ArrowLeft className="size-3.5" />
                          <span>Back</span>
                        </button>

                        <div className="flex items-center gap-2">
                          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-muted-foreground font-mono mr-2">
                            <ShieldCheck className="size-3.5 text-emerald-500" />
                            <span>100% NDA Protected</span>
                          </div>

                          <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/90 px-7 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all cursor-pointer hover:scale-[1.02]"
                          >
                            <span>Submit Project Brief</span>
                            <ArrowRight className="size-4" />
                          </button>
                        </div>
                      </div>
                    </motion.form>
                  )}
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
