import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ConsultationProvider } from "@/components/consultation-modal";
import { VerticalThemeToggle } from "@/components/vertical-theme-toggle";
import { VerticalSocialBar } from "@/components/vertical-social-bar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devolopy.com";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Devolopy | Website Development, Mobile Apps, Odoo ERP, E-Commerce, N8N & SEO",
    template: "%s | Devolopy",
  },
  description:
    "Devolopy is a premier digital engineering agency specializing in custom Website Development, Mobile App Development, Odoo ERP integration, E-Commerce, N8N Automations, AI Agents, and technical SEO dominance.",
  keywords: [
    "Devolopy",
    "Website Development",
    "Mobile App Development",
    "Odoo Development",
    "Odoo ERP Integration",
    "E-Commerce Solutions",
    "N8N Development",
    "N8N Workflow Automation",
    "SEO Optimization",
    "Next.js Agency",
    "React Native",
    "Flutter Apps",
    "AI Agents Automation",
    "Cloud Architecture",
    "Tailwind CSS",
    "TypeScript",
  ],
  authors: [{ name: "Devolopy Engineering Team", url: siteUrl }],
  creator: "Devolopy",
  publisher: "Devolopy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Devolopy | Website, Mobile Apps, Odoo ERP, E-Commerce, N8N & SEO",
    description:
      "Transforming digital operations with custom websites, mobile apps, Odoo ERP, e-commerce, n8n automations, and search engine optimization.",
    siteName: "Devolopy",
    images: [
      {
        url: "/DevolopyDarkTheme.png",
        width: 1200,
        height: 630,
        alt: "Devolopy Services Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devolopy | Website, Mobile, Odoo ERP, E-Commerce, N8N & SEO",
    description:
      "High-performance website development, mobile apps, Odoo ERP customization, n8n workflow automations, and SEO.",
    images: ["/DevolopyDarkTheme.png"],
    creator: "@devolopy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/DevolopyDarkTheme.png", type: "image/png" },
    ],
    shortcut: "/DevolopyDarkTheme.png",
    apple: "/DevolopyDarkTheme.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Devolopy",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/DevolopyDarkTheme.png`,
      },
      sameAs: [
        "https://twitter.com/devolopy",
        "https://github.com/devolopy",
        "https://linkedin.com/company/devolopy",
        "https://instagram.com/devolopy",
      ],
      description:
        "Building beautiful, functional, and ultra-fast web experiences with modern Next.js, Tailwind CSS, Odoo ERP, n8n automations, and AI technologies.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Devolopy Digital Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development",
              description: "Custom Next.js web applications, responsive UI/UX, and SEO-optimized architecture.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development",
              description: "Cross-platform iOS and Android mobile applications using React Native and Flutter.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Odoo Development",
              description: "Custom enterprise Odoo ERP implementation, module development, and automated business workflows.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-Commerce Solutions",
              description: "High-performance online stores with secure multi-gateway payment integration and headless checkout.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "N8N Development",
              description: "Workflow automation pipelines and cross-application integration with enterprise n8n.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Optimization",
              description: "Technical SEO, Core Web Vitals acceleration, Schema.org rich snippets, and Google ranking growth.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Agentic Automation",
              description: "Autonomous AI agents, custom fine-tuned LLMs, retrieval augmented generation (RAG), and smart copilots.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud & DevOps Architecture",
              description: "Scalable AWS, Docker, Kubernetes infrastructure with 99.99% uptime and automated CI/CD.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design Systems",
              description: "Figma design tokens, accessible WCAG AA standards, and pixel-perfect interactive component libraries.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "API & Microservices Architecture",
              description: "High-throughput REST and GraphQL APIs with low latency caching on Edge CDN networks.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom CRM & Client Portals",
              description: "Tailored enterprise dashboards with real-time role-based access control and analytics.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Conversion Rate Optimization (CRO)",
              description: "Data-driven multivariate testing, user journey mapping, and funnel optimization.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Devolopy",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground font-sans relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ConsultationProvider>
            {children}
            {/* Ultra-Premium Vertical Social Bar Docked on Left */}
            <VerticalSocialBar />
            {/* Ultra-Premium Vertical Theme Toggle Docked on Right */}
            <VerticalThemeToggle />
          </ConsultationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
