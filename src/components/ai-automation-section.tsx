"use client";

import React, { useState } from "react";
import { ArrowRight, Bot, Check, Zap, Cpu, Sparkles, MessageSquare, Database, Send } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

const aiCapabilities = [
  "AI Assistants & Agentic Copilots",
  "Autonomous Customer Support Routing",
  "n8n Workflow Pipelines & Webhooks",
  "Intelligent OCR Document Processing",
  "Real-Time Analytics & Telemetry",
  "AI Recommendation Engines",
  "Internal Knowledge Systems (Local RAG)",
  "Automated Lead Scoring & CRM Sync",
  "Odoo ERP Automation & Ledger Rules",
];

const flowSteps = [
  {
    stage: "Input",
    desc: "Email, webhooks, WhatsApp, PDFs, API triggers",
    icon: MessageSquare,
    color: "text-blue-400",
  },
  {
    stage: "Process",
    desc: "AI extraction, schema validation, sentiment classifier",
    icon: Cpu,
    color: "text-[#C0703C]",
  },
  {
    stage: "System",
    desc: "Transactional write to Odoo ERP, CRM, or PostgreSQL DB",
    icon: Database,
    color: "text-purple-400",
  },
  {
    stage: "Action",
    desc: "Instant client notification, invoice issue, next task trigger",
    icon: Send,
    color: "text-emerald-400",
  },
];

export function AIAutomationSection() {
  const { openConsultation } = useConsultation();
  const [activeNode, setActiveNode] = useState(1);

  return (
    <section id="ai-automation" className="w-full py-20 sm:py-28 bg-[#08090B] text-[#F5F6F7] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
            AI &amp; Automation
          </span>
          <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Make your business intelligent &mdash; practically.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Most high-value AI work is not a chatbot gimmick. It is eliminating the 20 minutes a day your team spends copying records between systems, and the 3 days a week spent answering repetitive inquiries.
          </p>
        </div>

        {/* 2-Column Grid: Checklist & Pipeline Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 9 Capabilities Checklist */}
          <div className="lg:col-span-6 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aiCapabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/40 hover:bg-white/[0.05] transition-all"
                >
                  <div className="size-5 rounded-lg bg-primary/20 border border-primary/40 text-primary flex items-center justify-center shrink-0">
                    <Check className="size-3" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => openConsultation("ai-agentic-automation")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm shadow-lg shadow-primary/20 transition-all cursor-pointer"
              >
                <span>Deploy Autonomous AI Pipeline</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Pipeline Flow Diagram */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#0E1013] border border-white/15 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 font-mono text-xs text-[#C0703C] uppercase tracking-wider font-bold">
                <Bot className="size-4" /> Automated Business Pipeline
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold">Zero Latency</span>
            </div>

            <div className="space-y-4">
              {flowSteps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeNode === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveNode(idx)}
                    className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-white/[0.08] border-primary shadow-lg shadow-primary/10 translate-x-2"
                        : "bg-white/[0.02] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${step.color}`}>
                        <Icon className="size-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-space text-lg font-bold text-white">
                            {step.stage}
                          </span>
                          <span className="font-mono text-[10px] text-slate-500 uppercase">
                            Step 0{idx + 1}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIAutomationSection;
