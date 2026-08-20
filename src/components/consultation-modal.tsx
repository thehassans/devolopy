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
} from "lucide-react";
import { ALL_SERVICES } from "@/lib/services-data";

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
        }, 4000);
      }, 500);
    }
  };

  const budgets = ["<$5,000", "$5k - $15k", "$15k - $50k", "$50k+ Enterprise"];

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
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0b0e14] border border-white/20 p-6 sm:p-10 shadow-[0_0_50px_rgba(59,130,246,0.2)] z-10 text-white space-y-6"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeConsultation}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>

              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                    <Check className="size-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-space text-2xl sm:text-3xl font-extrabold text-white">
                      Strategy Session Reserved!
                    </h3>
                    <p className="text-white/70 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{name}</strong>. A Devolopy technical lead has received your project parameters and will reach out to <strong className="text-primary">{email}</strong> within 24 hours.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm mx-auto text-xs text-white/60 font-mono">
                    ⚡ Free 30-min architecture consultation & proposal scope included.
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-2 pr-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-mono font-semibold text-primary">
                      <Sparkles className="size-3.5" /> High-Velocity Engineering
                    </div>
                    <h2 className="font-space text-2xl sm:text-3xl font-extrabold text-white">
                      Start Your Project With Devolopy
                    </h2>
                    <p className="text-sm text-white/70">
                      Select your project scope below for an instant architecture assessment and timeline estimate.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* 1. Service Selection */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/60">
                        1. Select Service Offering
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {ALL_SERVICES.slice(0, 6).map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setSelectedService(service.id)}
                            className={`px-3 py-2.5 rounded-xl border text-xs font-medium text-left transition-all truncate cursor-pointer ${
                              selectedService === service.id
                                ? "bg-primary/20 border-primary text-white shadow-md font-semibold"
                                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {service.title}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 2. Budget Range */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/60">
                        2. Target Budget Range
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgets.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setSelectedBudget(b)}
                            className={`px-3 py-2 rounded-xl border text-xs font-mono text-center transition-all cursor-pointer ${
                              selectedBudget === b
                                ? "bg-primary text-white border-primary font-bold shadow-md"
                                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 3. Contact Inputs */}
                    <div className="space-y-3 pt-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/60">
                        3. Your Information
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name *"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Work Email Address *"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Company / Organization Name (Optional)"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                          type="text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Brief Project Scope or Notes"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    {/* Submit Bar */}
                    <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-white/50">
                        <ShieldCheck className="size-4 text-emerald-400" />
                        <span>Non-Disclosure & Privacy Protected</span>
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 transition-all cursor-pointer"
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
