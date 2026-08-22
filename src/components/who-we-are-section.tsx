"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState({ projects: 0, years: 0, clients: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1200;
          const start = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              projects: Math.round(18 * easeOut),
              years: Math.round(5 * easeOut),
              clients: Math.round(12 * easeOut),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="about" ref={sectionRef} className="dv-sec dv-sec--light">
      <div className="dv-wrap">
        <div className="dv-pos">
          <div>
            <span className="dv-eyebrow">Who we are</span>
            <h2 className="dv-h2">Technology built around how your business actually works.</h2>
          </div>
          <div>
            <p className="dv-muted-l">
              Most software fails because it was designed around a demo, not around the people who use it every day.
              We start with the workflow — who does what, where it breaks, what it costs when it breaks — and build from there.
            </p>
            <p className="dv-muted-l">
              Strategy, design, engineering and support sit in one team. You talk to the people building your system,
              not to an account manager relaying messages.
            </p>
            <Link href="#how-we-work" className="dv-link" style={{ marginTop: "8px" }}>
              More about how we work
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="dv-metrics">
          <div>
            <div className="dv-metric__v">
              {counts.projects}
              <em>+</em>
            </div>
            <div className="dv-metric__l">Projects delivered</div>
            <div className="dv-metric__note">Placeholder — real figure required</div>
          </div>
          <div>
            <div className="dv-metric__v">
              {counts.years}
              <em>+</em>
            </div>
            <div className="dv-metric__l">Years building software</div>
            <div className="dv-metric__note">Placeholder — real figure required</div>
          </div>
          <div>
            <div className="dv-metric__v">
              {counts.clients}
              <em>+</em>
            </div>
            <div className="dv-metric__l">Clients served</div>
            <div className="dv-metric__note">Placeholder — real figure required</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
