"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  num: string;
  client: string;
  title: string;
  outcome: string;
  tags: string[];
}

const workItems: CaseStudy[] = [
  {
    num: "01",
    client: "Oakland Greens",
    title: "Property listing and community site",
    outcome: "Replaced a brochure site with a searchable property platform the sales team updates themselves.",
    tags: ["Web Development", "CMS", "SEO"],
  },
  {
    num: "02",
    client: "Radisson Blu Murree",
    title: "Hotel booking experience",
    outcome: "A booking flow built for direct reservations, cutting dependency on third-party channels.",
    tags: ["Web Development", "Booking Engine", "Integrations"],
  },
  {
    num: "03",
    client: "Vispur",
    title: "Social media management platform",
    outcome: "An internal tool that replaced spreadsheet-based scheduling and approvals.",
    tags: ["Custom Software", "Node.js", "Dashboard"],
  },
];

export function SelectedWorkSection() {
  return (
    <section id="work" className="dv-sec dv-sec--light">
      <div className="dv-wrap">
        <div style={{ maxWidth: "56ch" }}>
          <span className="dv-eyebrow">Selected work</span>
          <h2 className="dv-h2">Systems we designed, built and shipped.</h2>
        </div>

        <div className="dv-work">
          {workItems.map((w, idx) => (
            <article key={idx} className="dv-work__row">
              <div className="dv-work__media">
                <div className="dv-work__frame">
                  <div className="dv-work__bar">
                    <i></i><i></i><i></i>
                  </div>
                  <div className="dv-work__body">
                    <div className="dv-work__ph dv-work__ph--w60"></div>
                    <div className="dv-work__ph dv-work__ph--w40"></div>
                    <div className="dv-work__blocks">
                      <div></div><div></div><div></div>
                    </div>
                  </div>
                </div>
                <span className="dv-work__ph-note">Client Case Study</span>
              </div>

              <div>
                <span className="dv-work__num">{w.num}</span>
                <div className="dv-work__meta">2026 &middot; Production Verified</div>
                <div className="dv-work__client">{w.client}</div>
                <h3 className="dv-work__title">{w.title}</h3>
                <p className="dv-work__out">{w.outcome}</p>
                <div className="dv-tags">
                  {w.tags.map((t, i) => (
                    <span key={i} className="dv-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href="#contact" className="dv-link">
                  View case study
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWorkSection;
