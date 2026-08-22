"use client";

import React from "react";

export function WhatWeBuildSection() {
  return (
    <section id="what-we-build" className="dv-sec dv-sec--dark">
      <div className="dv-wrap">
        <div style={{ maxWidth: "56ch" }}>
          <span className="dv-eyebrow">What we build</span>
          <h2 className="dv-h2">Systems, not staff hours.</h2>
          <p className="dv-lead dv-muted-d">
            We are hired to deliver a working system and to keep it working &mdash; not to supply developers by the hour.
          </p>
        </div>

        <div className="dv-bento">
          {/* Card 1: Business Platforms (Wide) */}
          <article className="dv-bento__t dv-bento__t--wide">
            <svg className="dv-bento__glyph" viewBox="0 0 100 100" fill="none" aria-hidden="true">
              <rect x="14" y="14" width="72" height="18" rx="4" stroke="#2B5CFF" strokeWidth="1.4" />
              <rect x="14" y="41" width="72" height="18" rx="4" stroke="#C0703C" strokeWidth="1.4" />
              <rect x="14" y="68" width="72" height="18" rx="4" stroke="#3A4049" strokeWidth="1.4" />
            </svg>
            <h3>Business Platforms</h3>
            <p>ERP, CRM, HR and internal operations systems &mdash; the software your team lives in all day.</p>
          </article>

          {/* Card 2: Customer Experiences */}
          <article className="dv-bento__t">
            <svg className="dv-bento__glyph" viewBox="0 0 100 100" fill="none" aria-hidden="true">
              <rect x="30" y="12" width="40" height="76" rx="7" stroke="#2B5CFF" strokeWidth="1.4" />
              <path d="M42 74h16" stroke="#C0703C" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <h3>Customer Experiences</h3>
            <p>Apps, portals, marketplaces and booking platforms.</p>
          </article>

          {/* Card 3: Commerce */}
          <article className="dv-bento__t">
            <svg className="dv-bento__glyph" viewBox="0 0 100 100" fill="none" aria-hidden="true">
              <path d="M20 30h60l-7 46H27z" stroke="#2B5CFF" strokeWidth="1.4" />
              <path d="M38 30a12 12 0 0 1 24 0" stroke="#C0703C" strokeWidth="1.4" />
            </svg>
            <h3>Commerce</h3>
            <p>Ecommerce, POS, marketplaces and payment integrations.</p>
          </article>

          {/* Card 4: Enterprise Systems */}
          <article className="dv-bento__t">
            <svg className="dv-bento__glyph" viewBox="0 0 100 100" fill="none" aria-hidden="true">
              <circle cx="50" cy="50" r="9" stroke="#C0703C" strokeWidth="1.4" />
              <circle cx="22" cy="24" r="7" stroke="#2B5CFF" strokeWidth="1.4" />
              <circle cx="78" cy="24" r="7" stroke="#2B5CFF" strokeWidth="1.4" />
              <circle cx="22" cy="78" r="7" stroke="#2B5CFF" strokeWidth="1.4" />
              <circle cx="78" cy="78" r="7" stroke="#2B5CFF" strokeWidth="1.4" />
              <path d="m28 30 15 14M72 30 57 44M28 72l15-14M72 72 57 58" stroke="#3A4049" strokeWidth="1.2" />
            </svg>
            <h3>Enterprise Systems</h3>
            <p>Custom enterprise software and system-to-system integrations.</p>
          </article>

          {/* Card 5: Intelligent Products */}
          <article className="dv-bento__t">
            <svg className="dv-bento__glyph" viewBox="0 0 100 100" fill="none" aria-hidden="true">
              <path d="M30 62V38l20-12 20 12v24L50 74z" stroke="#2B5CFF" strokeWidth="1.4" strokeLinejoin="round" />
              <circle cx="50" cy="50" r="5" fill="#C0703C" opacity="0.8" />
            </svg>
            <h3>Intelligent Products</h3>
            <p>AI assistants, automated workflows and document processing.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default WhatWeBuildSection;
