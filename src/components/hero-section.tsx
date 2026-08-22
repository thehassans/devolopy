"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useConsultation } from "@/components/consultation-modal";

export function HeroSection() {
  const { openConsultation } = useConsultation();
  const pinRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  const [activeBeat, setActiveBeat] = useState<number>(0);
  const [railActive, setRailActive] = useState<boolean>(false);
  const [activeLayers, setActiveLayers] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  useEffect(() => {
    const pin = pinRef.current;
    const stage = stageRef.current;
    const tilt = tiltRef.current;
    const fill = fillRef.current;
    if (!pin || !stage) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.matchMedia("(max-width: 900px)");

    if (reduceMotion) return;

    const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const map = (p: number, a: number, b: number) => clamp((p - a) / (b - a), 0, 1);
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let ticking = false;

    const onScrollFrame = () => {
      if (smallScreen.matches) return;

      const r = pin.getBoundingClientRect();
      const travel = pin.offsetHeight - window.innerHeight;
      const p = travel > 0 ? clamp(-r.top / travel, 0, 1) : 0;

      // BEAT 1 (p 0.10 - 0.42): stack separates
      const open = ease(map(p, 0.1, 0.42));
      let sp = lerp(46, 132, open);
      let rx = lerp(56, 34, open);

      // BEAT 2 (p 0.45 - 0.72): rotate face-on
      const face = ease(map(p, 0.45, 0.72));
      rx = lerp(rx, 6, face);
      sp = lerp(sp, 88, face);

      // BEAT 3 (p 0.75 - 1.00): collapse + recede
      const shut = ease(map(p, 0.75, 1.0));
      sp = lerp(sp, 30, shut);
      rx = lerp(rx, 52, shut);
      const sc = lerp(1, 0.82, shut);

      stage.style.setProperty("--sp", sp.toFixed(2));
      stage.style.setProperty("--rx", rx.toFixed(2));
      stage.style.setProperty("--sc", sc.toFixed(3));

      // Layer Rail
      const showRail = p > 0.12 && p < 0.8;
      setRailActive(showRail);

      const layersState: Record<number, boolean> = {
        0: open > 0 && p > 0.14 + (3 - 0) * 0.055 && p < 0.8,
        1: open > 0 && p > 0.14 + (3 - 1) * 0.055 && p < 0.8,
        2: open > 0 && p > 0.14 + (3 - 2) * 0.055 && p < 0.8,
        3: open > 0 && p > 0.14 + (3 - 3) * 0.055 && p < 0.8,
      };
      setActiveLayers(layersState);

      // Headline beats
      const nextBeat = p < 0.4 ? 0 : p < 0.72 ? 1 : 2;
      setActiveBeat(nextBeat);

      // Progress bar fill
      if (fill) {
        fill.style.width = (p * 100).toFixed(2) + "%";
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          onScrollFrame();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    onScrollFrame();

    // Mouse parallax for 3D stage
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      raf: number | null = null;

    const onMouseMove = (e: MouseEvent) => {
      tx = ((e.clientY - window.innerHeight / 2) / window.innerHeight) * -5;
      ty = ((e.clientX - window.innerWidth / 2) / window.innerWidth) * 7;

      const r = stage.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 100;
      const my = ((e.clientY - r.top) / r.height) * 100;
      stage.style.setProperty("--mx", Math.max(-20, Math.min(120, mx)).toFixed(1) + "%");
      stage.style.setProperty("--my", Math.max(-20, Math.min(120, my)).toFixed(1) + "%");

      if (!raf) {
        raf = requestAnimationFrame(loop);
      }
    };

    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      stage.style.setProperty("--px", cx.toFixed(2));
      stage.style.setProperty("--py", cy.toFixed(2));
      if (Math.abs(tx - cx) > 0.01 || Math.abs(ty - cy) > 0.01) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    };

    if (window.matchMedia("(hover: hover)").matches) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("mousemove", onMouseMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="dv-pin" id="pin" ref={pinRef}>
      <div className="dv-pin__stage">
        <div className="dv-wrap dv-hero__grid">
          {/* Copy Area */}
          <div className="dv-hero__copy">
            <span className="dv-eyebrow">Digital Product &amp; Technology Partner</span>

            <div className="dv-beats">
              {/* Beat 0 */}
              <div
                className={`dv-beat ${activeBeat === 0 ? "is-on" : ""}`}
                data-beat="0"
                aria-hidden={activeBeat !== 0}
              >
                <h1 id="heroH1">We build digital products that move businesses forward.</h1>
                <p className="dv-hero__sub">
                  Devolopy helps ambitious companies design, build, automate and scale the software their business runs on.
                </p>
              </div>

              {/* Beat 1 */}
              <div
                className={`dv-beat ${activeBeat === 1 ? "is-on" : ""}`}
                data-beat="1"
                aria-hidden={activeBeat !== 1}
              >
                <h1>Four layers. We own all of them.</h1>
                <p className="dv-hero__sub">
                  Infrastructure, data, logic, interface &mdash; designed together, not stitched together by three different vendors.
                </p>
              </div>

              {/* Beat 2 */}
              <div
                className={`dv-beat ${activeBeat === 2 ? "is-on" : ""}`}
                data-beat="2"
                aria-hidden={activeBeat !== 2}
              >
                <h1>Your team only ever sees this one.</h1>
                <p className="dv-hero__sub">
                  That is the point. The complexity stays ours. What reaches your people is something they can actually use.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="dv-hero__cta">
              <button
                type="button"
                onClick={() => openConsultation("custom-software")}
                className="dv-btn dv-btn--primary cursor-pointer"
              >
                Start a Project
                <ArrowRight className="size-4" />
              </button>
              <Link href="#work" className="dv-btn dv-btn--ghost">
                See our work
              </Link>
            </div>

            <p className="dv-hero__strip">
              Custom Software<span>&middot;</span>Odoo ERP<span>&middot;</span>Mobile Apps<span>&middot;</span>AI Automation
            </p>
          </div>

          {/* SIGNATURE: THE BUILD STACK (3D CSS Engine) */}
          <div className="dv-stage" id="stage" ref={stageRef} aria-hidden="true">
            <span className="dv-stage__shadow"></span>
            <div className="dv-stage__tilt" id="tilt" ref={tiltRef}>
              <div className="dv-stage__spin" id="spin">
                {/* Plane 1: Infrastructure */}
                <div className="dv-plane dv-plane--p1" style={{ ["--i" as string]: 0 }}>
                  <span className="dv-plane__grid"></span>
                  <span className="dv-plane__spec"></span>
                </div>

                {/* Plane 2: Data */}
                <div className="dv-plane dv-plane--p2" style={{ ["--i" as string]: 1 }}>
                  <div className="dv-plane__dots">
                    <i></i><i></i><i></i><i></i>
                    <i></i><i></i><i></i><i></i>
                    <i></i><i></i><i></i><i></i>
                    <i></i><i></i><i></i><i></i>
                  </div>
                  <span className="dv-plane__spec"></span>
                </div>

                {/* Plane 3: Logic */}
                <div className="dv-plane dv-plane--p3" style={{ ["--i" as string]: 2 }}>
                  <span className="dv-plane__seam"></span>
                  <span className="dv-plane__seam dv-plane__seam--b"></span>
                  <span className="dv-plane__spec"></span>
                </div>

                {/* Plane 4: Interface */}
                <div className="dv-plane dv-plane--p4" style={{ ["--i" as string]: 3 }}>
                  <div className="dv-plane__ui">
                    <div>
                      <div className="dv-plane__bar dv-plane__bar--s"></div>
                    </div>
                    <div className="dv-plane__cols">
                      <span className="dv-plane__cell"></span>
                      <span className="dv-plane__cell"></span>
                      <span className="dv-plane__cell"></span>
                    </div>
                  </div>
                  <span className="dv-plane__spec"></span>
                </div>

                {/* Connector Beam & Pulsing Nodes */}
                <span className="dv-beam"></span>
                <span className="dv-node dv-node--1"></span>
                <span className="dv-node dv-node--2"></span>
                <span className="dv-node dv-node--3"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Layer Rail */}
        <div className={`dv-rail ${railActive ? "is-on" : ""}`} aria-hidden="true">
          <div className={`dv-rail__i ${activeLayers[3] ? "is-lit" : ""}`} data-layer="3">
            <span className="dv-rail__d"></span>
            <b>Interface</b>
            <em>What your team touches</em>
          </div>
          <div className={`dv-rail__i ${activeLayers[2] ? "is-lit" : ""}`} data-layer="2">
            <span className="dv-rail__d"></span>
            <b>Logic</b>
            <em>Rules, workflows, permissions</em>
          </div>
          <div className={`dv-rail__i ${activeLayers[1] ? "is-lit" : ""}`} data-layer="1">
            <span className="dv-rail__d"></span>
            <b>Data</b>
            <em>The single source of truth</em>
          </div>
          <div className={`dv-rail__i ${activeLayers[0] ? "is-lit" : ""}`} data-layer="0">
            <span className="dv-rail__d"></span>
            <b>Infrastructure</b>
            <em>Where it runs, and stays running</em>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="dv-pin__bar">
          <span className="dv-pin__fill" id="pinFill" ref={fillRef}></span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
