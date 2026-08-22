import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import HoverFooter from "@/components/ui/hover-footer";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Share2,
  Sparkles,
  User,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Article Not Found | Devolopy",
      description: "The requested blog article could not be found.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devolopy.com";
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Devolopy Blog`,
    description: post.excerpt,
    keywords: [...post.tags, post.category, "Devolopy Engineering"],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} | Devolopy`,
      description: post.excerpt,
      url: canonicalUrl,
      type: "article",
      siteName: "Devolopy",
      publishedTime: "2026-08-20T00:00:00Z",
      authors: [post.author.name],
      images: [
        {
          url: "/DevolopyDarkTheme.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/DevolopyDarkTheme.png"],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devolopy.com";
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: "2026-08-20T00:00:00Z",
    dateModified: "2026-08-22T00:00:00Z",
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Devolopy",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/DevolopyDarkTheme.png`,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground border-b border-border/80 pb-4">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="size-3 text-muted-foreground/50" />
            <Link href="/blog" className="hover:text-foreground">Blog</Link>
            <ChevronRight className="size-3 text-muted-foreground/50" />
            <span className="text-primary font-bold truncate max-w-[240px] sm:max-w-md">
              {post.category}
            </span>
          </div>

          {/* Article Header */}
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#C0703C] bg-[#C0703C]/10 border border-[#C0703C]/20">
                {post.category}
              </span>
              <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                <Clock className="size-3.5" />
                {post.readTime}
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                {post.publishedAt}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-space font-extrabold text-foreground tracking-tight leading-[1.15]">
              {post.title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pt-2 border-t border-border/60">
              <div className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold font-mono text-sm">
                DV
              </div>
              <div>
                <div className="text-sm font-bold font-space text-foreground">
                  {post.author.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {post.author.role}
                </div>
              </div>
            </div>
          </header>

          {/* Lead Paragraph */}
          <div className="p-6 sm:p-8 rounded-3xl bg-secondary/50 border border-border text-base sm:text-lg leading-relaxed text-foreground/90 font-medium">
            {post.content.lead}
          </div>

          {/* Article Body Sections */}
          <div className="space-y-10 text-base sm:text-lg text-foreground/80 leading-relaxed font-normal">
            {post.content.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-space font-bold text-foreground">
                  {section.heading}
                </h2>
                {section.body.map((para, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {para}
                  </p>
                ))}

                {section.codeSnippet && (
                  <div className="mt-4 rounded-2xl bg-[#090d16] border border-white/15 p-5 overflow-x-auto shadow-xl">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-muted-foreground">
                      <span>architecture.tsx</span>
                      <span className="text-emerald-400">TypeScript</span>
                    </div>
                    <pre className="text-xs sm:text-sm font-mono text-blue-300 leading-relaxed">
                      <code>{section.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Tag Pills */}
          <div className="pt-8 border-t border-border/80 flex flex-wrap gap-2 items-center">
            <span className="text-xs font-mono text-muted-foreground mr-2 font-bold">Topics:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-foreground/80 border border-border"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Next Steps CTA Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                Technical Partnership
              </span>
              <h3 className="text-2xl sm:text-3xl font-space font-bold text-foreground">
                Deploying this architecture in your company?
              </h3>
              <p className="text-sm text-muted-foreground">
                Devolopy engineers design, build, and deploy enterprise-grade digital systems and ERP integrations tailored to your requirements.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#newsletter"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
              >
                <span>Discuss System Requirements</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-secondary hover:bg-muted text-foreground font-semibold text-sm transition-colors border border-border"
              >
                <span>Back to All Articles</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <HoverFooter />
    </div>
  );
}
