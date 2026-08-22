import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import HoverFooter from "@/components/ui/hover-footer";
import { blogPosts } from "@/lib/blog-data";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock,
  Sparkles,
  Tag,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Blueprints | Devolopy",
  description:
    "Explore deep technical insights, system architecture patterns, Next.js 15 guides, Odoo ERP customization, and practical AI automation pipelines by Devolopy engineers.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Engineering Blog & Technical Blueprints | Devolopy",
    description:
      "Deep technical insights on Next.js 15, Odoo 18 ERP, ZATCA e-invoicing, AI automation, and high-concurrency cloud architecture.",
    url: "https://devolopy.com/blog",
    siteName: "Devolopy",
    images: [
      {
        url: "/DevolopyDarkTheme.png",
        width: 1200,
        height: 630,
        alt: "Devolopy Engineering Blog",
      },
    ],
  },
};

export default function BlogListingPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devolopy.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Devolopy Engineering Blog",
    description: "Deep technical articles on web engineering, Odoo ERP, and AI automation.",
    url: `${siteUrl}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Devolopy",
      logo: `${siteUrl}/DevolopyDarkTheme.png`,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: "2026-08-20",
      author: {
        "@type": "Organization",
        name: post.author.name,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Schema.org Blog Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header Section */}
          <div className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20 shadow-xs">
              <BookOpen className="size-3.5" />
              Devolopy Technical Journal
            </span>

            <h1 className="text-3xl sm:text-5xl font-space font-extrabold tracking-tight text-foreground leading-[1.1]">
              System Architecture, ERP Blueprints &amp; Modern Engineering
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Technical postmortems, production architecture guides, and operational insights from the engineers building mission-critical software at Devolopy.
            </p>
          </div>

          {/* Featured Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl space-y-5"
              >
                {/* Meta Tags */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {post.category}
                  </span>

                  <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-space font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & Footer */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-foreground">
                      {post.author.name}
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      {post.author.role}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-primary group-hover:underline">
                    <span>Read Article</span>
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Technical Newsletter Trigger */}
          <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border/80 text-center space-y-4">
            <h3 className="text-2xl font-space font-bold text-foreground">
              Never miss an architectural release
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Get our monthly engineering digests on Next.js, Odoo ERP, and practical AI automation delivered directly to your inbox.
            </p>
            <div className="pt-2">
              <Link
                href="/#newsletter"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                <span>Subscribe to Digest</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <HoverFooter />
    </div>
  );
}
