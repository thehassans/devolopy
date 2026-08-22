"use client";

import React, { useEffect, useRef, useState } from "react";

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

const steps: ProcessStep[] = [
  {
    num: "01 — Discover",
    title: "Understand the business",
    desc: "Workflows, users, goals and the actual cost of the current problem. We write down what success looks like before anyone opens a design file.",
  },
  {
    num: "02 — Define",
    title: "Scope, architecture, roadmap",
    desc: "Requirements agreed in writing, system architecture decided, and a phased plan with dates you can hold us to.",
  },
  {
    num: "03 — Design",
    title: "Product experience",
    desc: "UX flows first, interface second. You review working prototypes, not static pictures.",
  },
  {
    num: "04 — Build",
    title: "Engineering and integration",
    desc: "Two-week cycles, a working environment you can open at any time, and integration handled as part of the build — not left to the end.",
  },
  {
    num: "05 — Launch",
    title: "Deploy and train",
    desc: "Deployment, monitoring, data migration and training for the people who will actually use the system.",
  },
  {
    num: "06 — Scale",
    title: "Support and improve",
    desc: "Agreed response times, ongoing development, and a roadmap that keeps moving after launch day.",
  },
];

export function HowWeWorkSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!track || !fill) return;

    const onScrollProc = () => {
      const r = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.75;
      const total = r.height + start - vh * 0.35;
      const p = Math.min(1, Math.max(0, (start - r.top) / total));

      fill.style.height = `${p * r.height}px`;

      const stepElements = track.querySelectorAll(".dv-proc__step");
      stepElements.forEach((s, idx) => {
        const sr = s.getBoundingClientRect();
        if (sr.top < vh * 0.6 && sr.bottom > vh * 0.2) {
          setActiveStep(idx);
        }
      });
    };

    window.addEventListener("scroll", onScrollProc, { passive: true });
    window.addEventListener("resize", onScrollProc);
    onScrollProc();

    return () => {
      window.removeEventListener("scroll", onScrollProc);
      window.removeEventListener("resize", onScrollProc);
    };
  }, []);

  return (
    <section id="how-we-work" className="dv-sec dv-sec--light">
      <div className="dv-wrap">
        <div className="dv-proc">
          {/* Sticky Left Info */}
          <div className="dv-proc__sticky">
            <span className="dv-eyebrow">How we work</span>
            <h2 className="dv-h2">Six stages. No surprises in the middle.</h2>
            <p className="dv-muted-l" style={{ marginTop: "var(--s5)", maxWidth: "40ch" }}>
              You know what is happening, what is next, and what it depends on &mdash; at every stage.
            </p>
          </div>

          {/* Right Process Track */}
          <div className="dv-proc__track" id="procTrack" ref={trackRef}>
            <span className="dv-proc__line"></span>
            <span className="dv-proc__fill" id="procFill" ref={fillRef}></span>

            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`dv-proc__step transition-all duration-300 ${activeStep === idx ? "is-active" : ""}`}
              >
                <div className="dv-proc__n">{step.num}</div>
                <h3 className="dv-proc__h">{step.title}</h3>
                <p className="dv-proc__p">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWorkSection;
