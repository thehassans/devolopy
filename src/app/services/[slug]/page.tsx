import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import HoverFooter from "@/components/ui/hover-footer";
import { ALL_SERVICES, getAllServiceSlugs, getServiceBySlug } from "@/lib/services-data";
import { ServiceDetailClient } from "@/components/service-detail-client";

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devolopy.com";
  const serviceUrl = `${siteUrl}/services/${service.slug}`;

  return {
    title: `${service.title} | Devolopy Enterprise Digital Engineering`,
    description: service.fullDescription || service.shortDescription,
    keywords: [
      service.title,
      ...service.technologies,
      service.categoryLabel,
      "Enterprise Engineering",
      "Devolopy Services",
      "Full-Stack Architecture",
      "Custom Software",
      "Next.js Engineering",
      "Odoo ERP Partner",
    ],
    alternates: {
      canonical: serviceUrl,
    },
    openGraph: {
      title: `${service.title} - Devolopy Engineering`,
      description: service.shortDescription,
      url: serviceUrl,
      type: "website",
      siteName: "Devolopy",
      images: [
        {
          url: "/DevolopyDarkTheme.png",
          width: 1200,
          height: 630,
          alt: `${service.title} - Devolopy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Devolopy`,
      description: service.shortDescription,
      images: ["/DevolopyDarkTheme.png"],
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devolopy.com";
  const serviceUrl = `${siteUrl}/services/${service.slug}`;
  const relatedServices = ALL_SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${serviceUrl}/#service`,
        name: service.title,
        description: service.fullDescription,
        serviceType: service.categoryLabel,
        provider: {
          "@type": "Organization",
          name: "Devolopy",
          url: siteUrl,
          logo: `${siteUrl}/DevolopyDarkTheme.png`,
        },
        areaServed: [
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "GCC" },
          { "@type": "Country", name: "Global" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title} Deliverables`,
          itemListElement: service.deliverables.map((item, idx) => ({
            "@type": "Offer",
            position: idx + 1,
            itemOffered: {
              "@type": "Service",
              name: item,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${siteUrl}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: serviceUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground transition-colors duration-300">
      {/* Dynamic Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-20">
        <ServiceDetailClient
          service={service}
          relatedServices={relatedServices}
        />
      </main>

      <HoverFooter />
    </div>
  );
}
