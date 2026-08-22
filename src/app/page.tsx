import React from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import WhoWeAreSection from "@/components/who-we-are-section";
import WhatWeDoSection from "@/components/what-we-do-section";
import WhatWeBuildSection from "@/components/what-we-build-section";
import SelectedWorkSection from "@/components/selected-work-section";
import AIAutomationSection from "@/components/ai-automation-section";
import HowWeWorkSection from "@/components/how-we-work-section";
import IndustriesSection from "@/components/industries-section";
import WhyDevolopySection from "@/components/why-devolopy-section";
import { MarqueeDemo } from "@/components/ui/marquee";
import HomeFAQ from "@/components/home-faq";
import FooterNewsletter from "@/components/ui/footer-newsletter";
import HoverFooter from "@/components/ui/hover-footer";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://devolopy.com/#webpage",
      url: "https://devolopy.com",
      name: "Devolopy - Digital Product & Technology Partner",
      description:
        "We build digital products that move businesses forward. Custom software, web development, mobile applications, Odoo ERP, and practical AI automation.",
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://devolopy.com/#website",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do you price a project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After a discovery call we give a range, not a single number. Once scope is written down and agreed, the range becomes a fixed price with milestones. If scope changes mid-project, we price the change before we build it — never after.",
          },
        },
        {
          "@type": "Question",
          name: "Who owns the code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You do. Source code, repositories, infrastructure accounts and domains are transferred to your ownership on final payment. We do not hold client systems hostage, and we do not license you your own software. This is written into every contract.",
          },
        },
        {
          "@type": "Question",
          name: "Do you sign NDAs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, before any commercially sensitive discussion. Send yours or use ours.",
          },
        },
        {
          "@type": "Question",
          name: "Can you work with our existing team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Under the dedicated team model our engineers join your standups, your board and your repository. We can also take a defined module while your team owns the rest — that requires agreeing interfaces and ownership up front.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide support after launch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Support is a separate agreement with defined response times, not an informal favour.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with clients outside Saudi Arabia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We work across the GCC and internationally. Contracts, invoicing and communication are handled in English or Arabic.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground transition-colors duration-300">
      {/* JSON-LD Rich Snippet for FAQ & WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* 1. Header (Adaptive Navbar with Light/Dark logo) */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 flex flex-col">
        {/* 2. Scroll-Scrubbed 3D Build Stack Hero Section */}
        <HeroSection />

        {/* 3. Tech Stack Infinite Marquee */}
        <section aria-label="The stack we build on" className="border-y border-border bg-background">
          <MarqueeDemo />
        </section>

        {/* 4. Who We Are Section & Live Count-Up Metrics */}
        <WhoWeAreSection />

        {/* 5. What We Do & Our Solutions Section (Unified Ultra-Premium Layout) */}
        <WhatWeDoSection />

        {/* 6. What We Build Section (Bento Grid) */}
        <WhatWeBuildSection />

        {/* 7. Selected Work Section */}
        <SelectedWorkSection />

        {/* 8. AI & Automation Section (Interactive Pipeline Flow) */}
        <AIAutomationSection />

        {/* 9. How We Work Section (Sticky 6-Stage Process Track) */}
        <HowWeWorkSection />

        {/* 10. Industries & Domain Expertise (Ultra-Minimalistic Split Screen) */}
        <IndustriesSection />

        {/* 11. Why Devolopy & Engagement Models */}
        <WhyDevolopySection />

        {/* 12. Comprehensive FAQ Section */}
        <HomeFAQ />

        {/* 13. Newsletter & Final Call to Action */}
        <div id="newsletter">
          <FooterNewsletter />
        </div>
      </main>

      {/* 14. Devolopy Interactive Hover Footer */}
      <HoverFooter />
    </div>
  );
}
