"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

const aiCapabilities = [
  "AI assistants & Copilots",
  "Customer support automation",
  "Workflow automation (n8n & custom)",
  "Document processing & OCR",
  "Analytics and real-time reporting",
  "Recommendation systems",
  "Internal knowledge assistants (RAG)",
  "CRM automation pipelines",
  "ERP automation & accounting sync",
];

export function AIAutomationSection() {
  const { openConsultation } = useConsultation();

  return (
    <section id="ai-automation" className="dv-sec dv-sec--dark">
      <div className="dv-wrap">
        <div style={{ maxWidth: "58ch" }}>
          <span className="dv-eyebrow">AI &amp; Automation</span>
          <h2 className="dv-h2">Make your business intelligent &mdash; practically.</h2>
          <p className="dv-lead dv-muted-d">
            Most useful AI work is not a chatbot. It is removing the twenty minutes a day someone spends copying data between
            two systems, and the three days a week spent answering the same customer question.
          </p>
        </div>

        <div className="dv-ai">
          {/* Capabilities Checklist */}
          <div className="dv-ai__list">
            {aiCapabilities.map((item, idx) => (
              <div key={idx} className="dv-ai__item">
                <span className="dv-ai__tick"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Practical AI Pipeline Diagram */}
          <div className="dv-ai__diagram" aria-hidden="true">
            <div className="dv-flow">
              <div className="dv-flow__n">
                <b>Input</b>
                <span>Email, form, WhatsApp, document</span>
              </div>
              <div className="dv-flow__c">
                <i></i>
              </div>
              <div className="dv-flow__n">
                <b>Process</b>
                <span>Extract, classify, validate</span>
              </div>
              <div className="dv-flow__c">
                <i style={{ animationDelay: "0.6s" }}></i>
              </div>
              <div className="dv-flow__n">
                <b>System</b>
                <span>Write to ERP, CRM or database</span>
              </div>
              <div className="dv-flow__c">
                <i style={{ animationDelay: "1.2s" }}></i>
              </div>
              <div className="dv-flow__n dv-flow__n--end">
                <b>Action</b>
                <span>Notify, respond, trigger next step</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "var(--s7)" }}>
          <button
            type="button"
            onClick={() => openConsultation("ai-agentic-automation")}
            className="dv-link cursor-pointer"
          >
            Explore AI &amp; Automation
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AIAutomationSection;
