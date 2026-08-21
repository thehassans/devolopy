"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Bot,
  Cpu,
  Zap,
  Eye,
  Mic,
  Brain,
  ShieldCheck,
  Code2,
  CheckCircle2,
  Layers,
  Activity,
} from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export interface AICapabilityItem {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge: string;
  metric: string;
  metricLabel: string;
  features: string[];
  codeSnippet: string;
}

const AI_CAPABILITIES: AICapabilityItem[] = [
  {
    id: 1,
    title: "Conversational Voice AI",
    tagline: "Ultra-Low Latency Audio Copilots",
    subtitle: "Real-time, bi-directional speech intelligence and voice copilots for enterprise customer operations.",
    icon: Mic,
    badge: "<200ms Latency",
    metric: "<200ms",
    metricLabel: "Speech Inference SLA",
    features: [
      "Sub-200ms streaming audio processing via WebRTC",
      "Dynamic acoustic noise cancellation and voice activity detection (VAD)",
      "Multi-lingual accent adaptation and custom voice cloning",
    ],
    codeSnippet: `// Voice Pipeline Agent Config
export const voiceEngine = {
  transport: "WebRTC / WebSocket Stream",
  turnDetection: "Server-VAD (Adaptive)",
  model: "Devolopy-Voice-Turbo-v2",
  p99Latency: "185ms",
};`,
  },
  {
    id: 2,
    title: "Enterprise RAG & Knowledge",
    tagline: "Private Vector Search & Embeddings",
    subtitle: "Connect frontier LLMs securely to your company manuals, SQL databases, and internal documents with zero leakage.",
    icon: Brain,
    badge: "100% Zero-Data Retention",
    metric: "100%",
    metricLabel: "Confidentiality SLA",
    features: [
      "Hybrid dense & sparse embedding retrieval (BM25 + Cohere Rerank)",
      "Automated PDF, DOCX, and spreadsheet schema chunking",
      "Role-based permission guards preventing unauthorized document access",
    ],
    codeSnippet: `// Private Enterprise RAG Pipeline
const ragPipeline = await createVectorMesh({
  embeddings: "text-embedding-3-large",
  vectorStore: "Qdrant / Pinecone Private VPC",
  reranker: "Cohere-Rerank-v3",
  zeroDataRetention: true,
});`,
  },
  {
    id: 3,
    title: "Autonomous Agentic Workflows",
    tagline: "Multi-Agent Reasoning & Tool Use",
    subtitle: "Self-healing AI agents that reason through multi-step tasks, execute API webhooks, and automate operations 24/7.",
    icon: Bot,
    badge: "Self-Healing Logic",
    metric: "24/7/365",
    metricLabel: "Autonomous Execution",
    features: [
      "Dynamic tool-calling and external API integration loops",
      "Human-in-the-loop validation triggers for sensitive operations",
      "Automated self-correcting error recovery and webhook retries",
    ],
    codeSnippet: `// Multi-Agent Swarm Orchestrator
export const agentSwarm = new Orchestrator({
  planner: "Claude-3.5-Sonnet",
  executor: "GPT-4o-Mini",
  tools: [crmAPI, databaseQuery, paymentGateway],
  humanInLoopThreshold: 0.95,
});`,
  },
  {
    id: 4,
    title: "Visual Intelligence & OCR",
    tagline: "High-Precision Document Perception",
    subtitle: "Automated document comprehension, structured table parsing, and high-throughput visual inspection pipelines.",
    icon: Eye,
    badge: "99.8% Precision",
    metric: "99.8%",
    metricLabel: "Parsing Accuracy",
    features: [
      "Complex table extraction and JSON structured data serialization",
      "Edge-deployed vision transformers for defect detection",
      "Multi-page financial invoice and contract parsing in seconds",
    ],
    codeSnippet: `// Vision OCR & Document Ingestion
const documentResult = await parseDocument({
  schema: InvoiceSchema,
  multimodalModel: "Claude-3.5-Sonnet-Vision",
  confidenceThreshold: 0.998,
});`,
  },
];

export function LandingAccordionItem({
  className,
}: {
  className?: string;
}) {
  const [selectedId, setSelectedId] = useState<number>(2);
  const { openConsultation } = useConsultation();

  const selectedItem = AI_CAPABILITIES.find((item) => item.id === selectedId) || AI_CAPABILITIES[1];

  return (
    <section
      id="ai-architecture"
      aria-label="Enterprise AI Architecture"
      className={cn(
        "relative w-full py-24 sm:py-32 bg-background text-foreground overflow-hidden border-t border-border",
        className
      )}
    >
      {/* Background Ambient Lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          {/* Left Side: Headline & Value Proposition */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-primary shadow-sm">
              <Cpu className="size-3.5" /> Next-Gen AI Infrastructure
            </div>

            <h2 className="font-space text-3xl sm:text-5xl font-black tracking-[-0.035em] text-foreground leading-tight">
              Autonomous AI Systems Built For Scale
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Deploy custom enterprise RAG copilots, multi-modal vision systems, and autonomous multi-agent reasoning pipelines connected securely to your proprietary company databases.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => openConsultation("ai-agentic-automation")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Architect Your AI Stack</span>
                <ArrowRight className="size-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary hover:bg-secondary/80 border border-border px-6 py-3.5 text-sm sm:text-base font-semibold text-foreground transition-all"
              >
                <span>Browse All Capabilities</span>
              </a>
            </div>
          </div>

          {/* Right Side: Interactive AI Capability Deck (Without Stock Images) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Capability Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {AI_CAPABILITIES.map((item) => {
                const Icon = item.icon;
                const isSelected = item.id === selectedId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className={cn(
                      "flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl border text-center transition-all duration-300 cursor-pointer shadow-sm",
                      isSelected
                        ? "bg-primary text-primary-foreground border-primary shadow-md scale-[1.02]"
                        : "bg-card hover:bg-secondary/80 border-border text-card-foreground"
                    )}
                  >
                    <Icon className={cn("size-5 mb-2", isSelected ? "text-primary-foreground" : "text-primary")} />
                    <span className="font-space text-xs sm:text-sm font-bold line-clamp-1">
                      {item.title.split(" ")[0]} {item.title.split(" ")[1]}
                    </span>
                    <span className={cn("text-[10px] font-mono mt-0.5 opacity-80", isSelected ? "text-primary-foreground/90" : "text-muted-foreground")}>
                      {item.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Capability Showcase Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xl text-card-foreground space-y-6"
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
                      <Zap className="size-3" /> {selectedItem.tagline}
                    </div>
                    <h3 className="font-space text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                      {selectedItem.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-secondary/80 border border-border shrink-0">
                    <Activity className="size-5 text-primary" />
                    <div>
                      <div className="font-space text-lg sm:text-xl font-bold text-foreground leading-none">
                        {selectedItem.metric}
                      </div>
                      <div className="text-[10px] font-mono text-muted-foreground">
                        {selectedItem.metricLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {selectedItem.subtitle}
                </p>

                {/* Features Checklist */}
                <div className="grid sm:grid-cols-3 gap-3">
                  {selectedItem.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-secondary/40 border border-border text-xs sm:text-sm text-foreground font-medium"
                    >
                      <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Live Code / Architecture Manifest */}
                <div className="rounded-2xl border border-border/80 bg-background/80 p-4 font-mono text-xs sm:text-sm text-foreground overflow-x-auto shadow-inner">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-border text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Code2 className="size-3.5 text-primary" /> ai-architecture.manifest.ts
                    </span>
                    <span className="text-emerald-500 font-semibold flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-ping inline-block" /> Live Engine
                    </span>
                  </div>
                  <pre className="text-xs text-foreground/90 leading-relaxed overflow-x-auto">
                    {selectedItem.codeSnippet}
                  </pre>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingAccordionItem;
