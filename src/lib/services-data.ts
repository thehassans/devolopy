export interface ServiceDetail {
  id: string;
  slug: string;
  aliases?: string[];
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  category: "engineering" | "mobile" | "erp-automation" | "growth" | "ai-cloud";
  categoryLabel: string;
  technologies: string[];
  features: string[];
  architecturalLayers?: {
    layer: string;
    tech: string;
    description: string;
    capabilities: string[];
  }[];
  implementationRoadmap?: {
    stage: string;
    duration: string;
    title: string;
    details: string;
  }[];
  securityAndCompliance?: {
    standard: string;
    description: string;
  }[];
  deliverables: string[];
  timeline: string;
  heroImage: string;
  accentColor: string;
  metrics: { value: string; label: string }[];
  processSteps: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const ALL_SERVICES: ServiceDetail[] = [
  {
    id: "website-development",
    slug: "website-development",
    aliases: ["web-development", "custom-web-development"],
    title: "Website Development",
    tagline: "Ultra-Fast, SEO-Dominant Next.js Web Applications",
    shortDescription:
      "We design and develop websites that are not only visually appealing but also user-friendly and optimized for search engines.",
    fullDescription:
      "Devolopy engineers bespoke websites and high-concurrency web platforms using Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS. We optimize every millisecond of rendering performance, enforce semantic schema markup, and implement conversion-focused design systems that captivate visitors and rank effortlessly on search engines.",
    category: "engineering",
    categoryLabel: "Engineering & Web",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Node.js", "Sanity CMS", "Vercel Edge"],
    features: [
      "Partial Prerendering (PPR) and streaming Suspense for sub-300ms Largest Contentful Paint (LCP)",
      "Custom responsive UI/UX engineered with pixel-perfect design system tokens and WCAG 2.1 AA compliance",
      "Semantic HTML5 structure, automated OpenGraph social cards, and Schema.org JSON-LD microdata",
      "Headless CMS integration (Sanity, Strapi, WordPress, Contentful) for frictionless non-technical editing",
      "Global multi-region CDN edge caching with automated stale-while-revalidate invalidation",
    ],
    architecturalLayers: [
      {
        layer: "Client & Presentation",
        tech: "React 19 Server Components + Tailwind CSS",
        description: "Zero-bundle server components delivering instant static HTML with interactive client islands.",
        capabilities: ["Fluid responsive typography", "Hardware-accelerated CSS animations", "Automatic image WebP/AVIF transcoding", "Dark/Light theme tokens"],
      },
      {
        layer: "Edge Routing & Caching",
        tech: "Next.js 15 App Router + Vercel Edge Network",
        description: "Sub-50ms TTFB routing with incremental static regeneration (ISR) on content updates.",
        capabilities: ["Tag-based cache invalidation", "Edge middleware geolocation routing", "Dynamic OpenGraph image generation"],
      },
      {
        layer: "Content & Data Layer",
        tech: "Sanity Studio / Headless CMS + GraphQL",
        description: "Real-time visual content studio with instant live preview and structured schema types.",
        capabilities: ["Visual live editing", "Multi-language localization (i18n)", "Automated SEO meta auditing"],
      },
    ],
    implementationRoadmap: [
      { stage: "Stage 01", duration: "Week 1", title: "Information Architecture & User Journeys", details: "Audit competitors, define sitemap hierarchy, conversion funnels, and wireframe structural layout." },
      { stage: "Stage 02", duration: "Week 2", title: "High-Fidelity Figma UI & Design Tokens", details: "Craft pixel-perfect desktop and mobile prototypes with comprehensive component tokens." },
      { stage: "Stage 03", duration: "Week 3", title: "Next.js 15 Frontend & CMS Engineering", details: "Implement modular React 19 components, integrate headless CMS schema, and configure Server Actions." },
      { stage: "Stage 04", duration: "Week 4", title: "Technical SEO Audit & Zero-Downtime Launch", details: "Execute Core Web Vitals optimization (100/100 Lighthouse), configure DNS/SSL, and go live." },
    ],
    securityAndCompliance: [
      { standard: "OWASP Web Security Hardening", description: "Strict Content Security Policy (CSP), CORS headers, and anti-CSRF token verification on all mutations." },
      { standard: "Zero Vulnerable Plugins", description: "Modern headless architecture eliminating WordPress security exploit vectors." },
      { standard: "Automated SSL & Edge DDoS Shield", description: "TLS 1.3 encryption with Cloudflare / Vercel enterprise DDoS traffic mitigation." },
    ],
    deliverables: [
      "Complete production Next.js 15 repository with strict TypeScript types and clean architecture",
      "Automated CI/CD deployment pipelines on Vercel or AWS with preview branch environments",
      "Comprehensive technical SEO configuration (XML sitemaps, robots.txt, canonical tags, JSON-LD)",
      "Headless CMS administrative dashboard and comprehensive team handover training",
      "60-day post-launch warranty and real-time uptime/error monitoring",
    ],
    timeline: "2 - 4 Weeks",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-blue-500 to-cyan-500",
    metrics: [
      { value: "100/100", label: "Lighthouse Performance" },
      { value: "< 0.4s", label: "Average Page Load" },
      { value: "+300%", label: "SEO Organic Reach Lift" },
      { value: "99.99%", label: "Edge Uptime SLA" },
    ],
    processSteps: [
      { step: "01", title: "Discovery & Architecture", description: "Deep analysis of your target audience, competitors, user flows, and technical stack selection." },
      { step: "02", title: "Interactive UI/UX Design", description: "Figma wireframes and high-fidelity prototypes validated with usability heuristics." },
      { step: "03", title: "Full-Stack Development", description: "Modular component engineering, API integrations, and continuous unit testing." },
      { step: "04", title: "SEO Audit & Deployment", description: "Comprehensive Core Web Vitals benchmarking, security audit, and zero-downtime go-live." },
    ],
    faqs: [
      { question: "Why do you build with Next.js instead of traditional WordPress or PHP?", answer: "Next.js provides unprecedented page speed, server-side rendering (SSR), unmatched security without vulnerable plugins, sub-second edge delivery, and significantly higher Google search rankings." },
      { question: "Can non-technical team members easily update text, products, and images?", answer: "Yes! We integrate modern visual headless CMS platforms (Sanity, Strapi, Notion) so marketing and operations staff can publish and edit content with zero code in real time." },
      { question: "Do you handle custom domain, SSL, and hosting configuration?", answer: "Absolutely. We configure your DNS records, SSL encryption certificates, and global edge caching on Vercel, AWS, or your preferred cloud provider." },
      { question: "How do you guarantee 100/100 Google Core Web Vitals scores?", answer: "By utilizing Server Components, automatic font subsetting, Next.js Image optimization (AVIF/WebP), and CSS-in-Tailwind zero-runtime styling, our bundles eliminate JavaScript execution bloat." },
    ],
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    aliases: ["mobile-development", "mobile-apps", "app-development"],
    title: "Mobile App Development",
    tagline: "Cross-Platform iOS & Android Native Experiences",
    shortDescription:
      "Create intuitive, user-friendly mobile applications to reach your audience anywhere.",
    fullDescription:
      "We architect high-performance mobile applications that deliver native 60fps animations, offline-first synchronization, and seamless user experiences across iOS and Android. Built on React Native and Flutter, your app shares a single maintainable codebase without compromising device-level hardware capabilities.",
    category: "mobile",
    categoryLabel: "Mobile & Apps",
    technologies: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Expo EAS", "Firebase", "GraphQL", "PostgreSQL", "SQLite"],
    features: [
      "Cross-platform compilation for simultaneous iOS & Android App Store deployments with 100% native performance",
      "Offline-first local caching with encrypted SQLite storage and background synchronization",
      "Push notification pipelines via Firebase Cloud Messaging & OneSignal with deep-linking",
      "Native device hardware integration (Camera, GPS geofencing, Bluetooth BLE, Biometrics)",
      "In-app purchases, Stripe mobile SDK, and Apple Pay/Google Pay one-touch checkout",
    ],
    architecturalLayers: [
      {
        layer: "Native Client",
        tech: "React Native (Fabric & TurboModules) / Flutter (Impeller)",
        description: "Direct native GPU compilation delivering silky-smooth 60/120fps UI animations.",
        capabilities: ["Biometric FaceID / Fingerprint auth", "Haptic feedback engines", "Gesture-driven navigation", "Dynamic theme tokens"],
      },
      {
        layer: "Local Data & Offline Sync",
        tech: "SQLite + WatermelonDB + MMKV Key-Value",
        description: "Zero-latency local database persistence with background differential server synchronization.",
        capabilities: ["Offline mutation queuing", "Encrypted key storage", "Conflict resolution heuristics"],
      },
      {
        layer: "Backend Gateway & Push",
        tech: "FastAPI / Node.js + Firebase Cloud Messaging",
        description: "High-concurrency mobile API endpoints and personalized automated push campaigns.",
        capabilities: ["Deep-link routing", "Automated app update alerts", "Crashlytics real-time telemetry"],
      },
    ],
    implementationRoadmap: [
      { stage: "Stage 01", duration: "Week 1 - 2", title: "Mobile UX Mapping & Design System", details: "Figma mobile prototypes testing navigation flows, tab architectures, and gestures." },
      { stage: "Stage 02", duration: "Week 3 - 5", title: "Native Core & Hardware Bridge Build", details: "Code cross-platform frontend, implement SQLite caching, and integrate device sensors." },
      { stage: "Stage 03", duration: "Week 6", title: "API Integration & Push Telemetry", details: "Connect backend endpoints, authentication, in-app purchases, and push notifications." },
      { stage: "Stage 04", duration: "Week 7 - 8", title: "App Store & Play Store Approval", details: "Prepare store assets, privacy disclosures, signing keys, and submit for 100% verified approval." },
    ],
    securityAndCompliance: [
      { standard: "Apple App Store & Google Play Guidelines", description: "Strict compliance with App Tracking Transparency (ATT) and Google Play security policies." },
      { standard: "AES-256 On-Device Encryption", description: "All cached user tokens and local database records encrypted using hardware-backed iOS Keychain and Android Keystore." },
    ],
    deliverables: [
      "iOS (.ipa) and Android (.aab) signed production binaries ready for distribution",
      "Full App Store & Google Play submission, metadata optimization, and review approval guarantee",
      "Complete RESTful API / GraphQL backend integration and webhook listeners",
      "Real-time Crashlytics error tracking and user retention telemetry integration",
      "Modular source code repository with automated Expo EAS / Fastlane CI build pipelines",
    ],
    timeline: "4 - 8 Weeks",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-purple-500 to-indigo-500",
    metrics: [
      { value: "60 FPS", label: "Fluid Native Motion" },
      { value: "iOS & Android", label: "Single Codebase" },
      { value: "100%", label: "App Store Approval Rate" },
      { value: "< 25MB", label: "Optimized Binary Size" },
    ],
    processSteps: [
      { step: "01", title: "Product Strategy & Wireframing", description: "Mobile journey mapping, gesture interactions, and technical device compatibility matrix." },
      { step: "02", title: "Native Prototyping", description: "Clickable mobile prototypes testing biometric auth, navigation bars, and offline states." },
      { step: "03", title: "Engineering & Integration", description: "State management, API integration, and hardware sensor bridge implementation." },
      { step: "04", title: "App Store Launch", description: "Signing keys, screenshots, metadata compliance, and full store launch review." },
    ],
    faqs: [
      { question: "Will my app feel as fast and smooth as a native iOS/Android app?", answer: "Yes! Modern React Native with the New Architecture (JSI / Fabric) and Flutter compile directly to native UI components running at a locked 60fps." },
      { question: "How long does App Store review take?", answer: "Apple typically reviews apps in 24-48 hours, while Google Play takes 1-3 business days. We handle all compliance questions, metadata, and privacy disclosures directly." },
      { question: "Can users use the app when they have no internet connection?", answer: "Yes. We engineer offline-first architectures that save data to an encrypted local SQLite database and sync with cloud servers the moment connectivity returns." },
    ],
  },
  {
    id: "odoo-development",
    slug: "odoo-development",
    aliases: ["odoo-erp", "odoo-erp-systems", "enterprise-erp"],
    title: "Odoo Development",
    tagline: "Enterprise ERP Customization & Financial Automation",
    shortDescription:
      "Customize and integrate Odoo ERP solutions for streamlined business operations.",
    fullDescription:
      "Devolopy empowers growing companies and enterprises with end-to-end Odoo ERP implementation, bespoke module development, third-party software bridges, and automated financial accounting. Streamline your accounting, supply chain, inventory, and human resources inside one unified ecosystem.",
    category: "erp-automation",
    categoryLabel: "ERP & Automation",
    technologies: ["Odoo 17/18", "Python", "PostgreSQL", "XML-RPC", "Docker", "REST API", "Ubuntu Linux", "Redis", "ZATCA E-Invoice"],
    features: [
      "Bespoke Odoo ERP module engineering tailored to complex proprietary business logic",
      "Automated multi-currency financial accounting, localized tax rules & invoicing pipelines",
      "Real-time Inventory, POS, Manufacturing, CRM & Accounting synchronization across branches",
      "ZATCA Phase 2 cryptographic e-invoicing clearance integrated directly into checkout flows",
      "Legacy ERP data migration with zero data loss, ledger reconciliation, and zero downtime",
    ],
    architecturalLayers: [
      {
        layer: "ERP Core & Business Logic",
        tech: "Odoo 18 Enterprise / Community + Python ORM",
        description: "Extensible business models with custom views, automated action rules, and inheritance overrides.",
        capabilities: ["Custom Python models", "Automated email triggers", "Approval workflows", "Multi-company ledger isolation"],
      },
      {
        layer: "Database & Performance",
        tech: "PostgreSQL 16 + Redis Query Caching",
        description: "Optimized relational database with custom indexing, connection pooling, and automated backups.",
        capabilities: ["PgBouncer connection pool", "Read replica offloading", "Point-in-time recovery snapshots"],
      },
      {
        layer: "Fiscal Compliance Module",
        tech: "ZATCA Phase 2 Cryptographic XML Engine",
        description: "Automated cryptographic signing of UBL 2.1 invoices with real-time Fatoora clearance.",
        capabilities: ["ECDSA secp256k1 keys", "Sequential invoice hash chaining", "Cryptographic QR codes"],
      },
    ],
    implementationRoadmap: [
      { stage: "Stage 01", duration: "Week 1 - 2", title: "Business Process & Chart of Accounts Audit", details: "Map current operational workflows, fiscal ledgers, inventory routes, and user permission matrices." },
      { stage: "Stage 02", duration: "Week 3 - 4", title: "Custom Module Engineering & Sandbox Setup", details: "Code bespoke Python modules, configure ZATCA e-invoicing, and set up Dockerized staging environments." },
      { stage: "Stage 03", duration: "Week 5", title: "Historical Data Migration & Reconciliation", details: "Sanitize, map, and import historical customer, vendor, product, and financial transaction records." },
      { stage: "Stage 04", duration: "Week 6+", title: "Staff Training & Live Production Cutover", details: "Run live departmental workshops, execute zero-downtime cutover, and provide 24/7 dedicated support." },
    ],
    securityAndCompliance: [
      { standard: "ZATCA Phase 2 Mandate", description: "Cryptographically compliant UBL 2.1 electronic invoices with sequential hashing." },
      { standard: "Role-Based Access Control (RBAC)", description: "Strict permission matrices with immutable audit trails for every financial entry." },
    ],
    deliverables: [
      "Hardened, production-ready Odoo Community or Enterprise instance deployed on cloud infrastructure",
      "Custom business workflow modules, automated accounting ledgers, and branded invoice PDF reports",
      "Automated ZATCA Phase 2 e-invoicing integration with real-time tax authority reporting",
      "Comprehensive staff training manuals, video documentation, and role permission matrix",
      "24/7 database monitoring, automatic daily backups, and continuous security patching",
    ],
    timeline: "3 - 6 Weeks",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-emerald-500 to-teal-500",
    metrics: [
      { value: "100%", label: "ERP Financial Accuracy" },
      { value: "5x", label: "Faster Bookkeeping Reconciliations" },
      { value: "Zero", label: "Data Loss Migrations" },
      { value: "Real-Time", label: "Multi-Store Inventory Sync" },
    ],
    processSteps: [
      { step: "01", title: "Business Process Audit", description: "Mapping your current chart of accounts, sales workflows, warehouse routes, and approval hierarchies." },
      { step: "02", title: "Instance Architecture", description: "Setting up isolated Docker staging/production servers with PostgreSQL database tuning." },
      { step: "03", title: "Module Development & Testing", description: "Coding custom Python models, views, wizards, and tax compliance APIs." },
      { step: "04", title: "Data Migration & Go-Live", description: "Importing historical transactions, running staff workshops, and flipping to live operations." },
    ],
    faqs: [
      { question: "Can Odoo integrate with our website, POS, and third-party delivery apps?", answer: "Yes! We build robust XML-RPC, REST API, and webhook connectors between Odoo and Next.js, Shopify, Stripe, Amazon, Jahez, HungerStation, or local banks." },
      { question: "Is Odoo scalable for multi-company and international branch operations?", answer: "Odoo natively supports multi-company, multi-currency, and multi-warehouse structures across international subsidiaries with consolidated financial reporting." },
      { question: "How do you ensure zero data loss during migration from legacy ERPs?", answer: "We execute dry-run migrations in staging, sanitize data schemas, verify ledger balances against trial balance reports, and execute cutovers during off-peak windows." },
    ],
  },
  {
    id: "e-commerce-solutions",
    slug: "e-commerce-solutions",
    aliases: ["e-commerce", "ecommerce", "online-store"],
    title: "E-Commerce Solutions",
    tagline: "High-Conversion Headless & Shopify Online Stores",
    shortDescription:
      "Create a high-performance online store with secure payment integration.",
    fullDescription:
      "We design and build e-commerce experiences engineered to maximize average order value (AOV) and conversion rates. From high-speed headless Next.js Commerce setups to customized Shopify Plus stores, we integrate secure multi-currency payment gateways (Stripe, Apple Pay, Tamara, Tabby) and automated logistics workflows.",
    category: "engineering",
    categoryLabel: "Engineering & Web",
    technologies: ["Shopify Plus", "Next.js Commerce", "Stripe", "Apple Pay", "Tamara", "Tabby", "Mada", "PostgreSQL", "Redis", "Algolia"],
    features: [
      "1-Click frictionless checkout flows with accelerated mobile payment methods (Mada, Apple Pay, Google Pay)",
      "Multi-currency & multi-language localization with automatic geolocation detection",
      "Instant faceted product search and AI-driven personalized product recommendations",
      "Real-time inventory synchronization with physical retail POS and 3PL fulfillment warehouses",
      "Automated abandoned cart email/WhatsApp recovery campaigns and conversion funnel telemetry",
    ],
    architecturalLayers: [
      {
        layer: "Storefront & Edge Catalog",
        tech: "Next.js 15 Commerce / Shopify Liquid",
        description: "Sub-second product catalog browsing with instant faceted filtering.",
        capabilities: ["Instant search with Algolia", "Cart drawer slide-out", "Dynamic bundle discounts", "PWA mobile experience"],
      },
      {
        layer: "Checkout & Regional Payments",
        tech: "Stripe, Mada, Tabby, Tamara SDKs",
        description: "Localized payment checkout optimized for zero cart abandonment.",
        capabilities: ["Split-payment BNPL integrations", "Automated fraud checks", "Direct tokenized Apple Pay"],
      },
      {
        layer: "Fulfillment & ERP Sync",
        tech: "n8n Webhook Middleware + 3PL Courier APIs",
        description: "Automated Airway Bill generation and SMS tracking dispatch.",
        capabilities: ["Instant courier booking (Aramex, DHL, SMSA)", "Real-time tracking notifications", "Multi-warehouse routing"],
      },
    ],
    implementationRoadmap: [
      { stage: "Stage 01", duration: "Week 1 - 2", title: "Commerce Strategy & UX Prototyping", details: "Structure product catalog taxonomy, payment gateway selection, and Figma PDP wireframes." },
      { stage: "Stage 02", duration: "Week 3 - 4", title: "Storefront & Checkout Architecture", details: "Engineer headless Next.js frontend, integrate payment SDKs, and configure discount engines." },
      { stage: "Stage 03", duration: "Week 5", title: "Courier Integration & Analytics Tracking", details: "Connect 3PL logistics APIs, automated tracking bots, and GA4 Enhanced E-commerce tracking." },
      { stage: "Stage 04", duration: "Week 6+", title: "Stress Testing & Public Launch", details: "Simulate flash-sale traffic loads, test payment sandboxes, and launch with continuous monitoring." },
    ],
    securityAndCompliance: [
      { standard: "PCI-DSS Level 1 Compliance", description: "Direct tokenization with zero plain-text cardholder data exposure." },
    ],
    deliverables: [
      "Custom responsive online storefront with lightning-fast catalog browsing",
      "Configured regional payment gateways (Mada, Apple Pay, Tabby, Tamara, Stripe)",
      "Automated courier dispatch pipeline and real-time customer tracking notifications",
      "Google Enhanced Ecommerce Analytics 4 & Meta CAPI telemetry tracking",
      "Comprehensive store management training and documentation",
    ],
    timeline: "3 - 5 Weeks",
    heroImage: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-amber-500 to-orange-500",
    metrics: [
      { value: "+45%", label: "Average Conversion Rate Lift" },
      { value: "< 0.4s", label: "Instant Product Filter Response" },
      { value: "PCI-DSS", label: "Compliant Payment Security" },
      { value: "100%", label: "Mobile Cart Retention" },
    ],
    processSteps: [
      { step: "01", title: "Commerce Strategy", description: "Catalog structure, payment gateway selection, and checkout friction analysis." },
      { step: "02", title: "UI/UX & Storefront Design", description: "High-converting product detail pages (PDP), collections, and cart slide-outs." },
      { step: "03", title: "Engineering & Integrations", description: "Hooking up Stripe, shipping APIs, inventory databases, and tax engines." },
      { step: "04", title: "Stress Test & Launch", description: "Simulating flash-sale traffic loads, payment sandbox verification, and public launch." },
    ],
    faqs: [
      { question: "Should we choose Shopify Plus or custom Next.js Headless Commerce?", answer: "Shopify Plus is great for quick catalog launches, while custom Next.js Headless provides absolute design freedom, sub-second load times, and custom ERP integration without transaction percentage fees." },
      { question: "Do you support Buy Now Pay Later (BNPL) providers like Tabby and Tamara?", answer: "Yes! We integrate Tabby and Tamara natively into product pages, cart drawers, and checkouts with dynamic installment price calculators." },
    ],
  },
  {
    id: "n8n-development",
    slug: "n8n-development",
    aliases: ["n8n", "workflow-automation"],
    title: "N8N Development",
    tagline: "Autonomous Enterprise Workflow Automation",
    shortDescription:
      "Automate workflows and integrate with other applications using N8N.",
    fullDescription:
      "Devolopy builds self-hosted, scalable n8n automation architectures that connect hundreds of SaaS applications, eliminate manual repetitive work, and orchestrate intelligent data pipelines. Free your team from data entry with automated webhook listeners, AI data extraction, and CRM updates.",
    category: "erp-automation",
    categoryLabel: "ERP & Automation",
    technologies: ["n8n Enterprise", "Webhooks", "REST APIs", "Node.js", "Docker", "OpenAI API", "PostgreSQL", "Slack API", "Redis Queue"],
    features: [
      "Complex multi-step workflow triggers across 400+ SaaS applications and internal PostgreSQL databases",
      "Custom TypeScript n8n community nodes built for proprietary internal APIs",
      "AI-powered document parsing, invoice OCR, and automatic support routing using vision models",
      "Self-hosted enterprise deployment on private cloud clusters with zero per-task execution fees",
      "Automated error monitoring, exponential backoff retries, and instant Slack/Email alert webhooks",
    ],
    architecturalLayers: [
      {
        layer: "Automation Orchestration",
        tech: "n8n Queue Mode + Redis + Docker Swarm",
        description: "Distributed execution workers handling high-volume background webhook tasks.",
        capabilities: ["Queue concurrency scaling", "Dead-letter error queues", "Sub-second webhook response"],
      },
      {
        layer: "Data Transform & AI",
        tech: "TypeScript / Node.js + OpenAI Vision Models",
        description: "Intelligent unstructured data extraction, JSON validation, and entity mapping.",
        capabilities: ["PDF document OCR", "Schema normalization", "Fuzzy record deduplication"],
      },
    ],
    implementationRoadmap: [
      { stage: "Stage 01", duration: "Week 1", title: "Manual Bottlenecks Audit & Flow Mapping", details: "Audit repetitive data entry tasks across CRM, billing, email, and ERP systems." },
      { stage: "Stage 02", duration: "Week 2", title: "Workflow Building & Custom Node Coding", details: "Construct resilient visual pipelines with conditional branching and fallback triggers." },
      { stage: "Stage 03", duration: "Week 3", title: "Cluster Hardening & Live Deployment", details: "Deploy secure self-hosted Docker cluster with monitoring and Slack alerting." },
    ],
    securityAndCompliance: [
      { standard: "Self-Hosted Data Sovereignty", description: "Private cloud deployment where company data never traverses third-party automation servers." },
    ],
    deliverables: [
      "Operational n8n workflow blueprints with full error handling and retry logic",
      "Self-hosted Dockerized n8n cloud cluster on AWS or DigitalOcean with auto-scaling",
      "Secure API credentials vault with encrypted environment variables",
      "Testing sandbox environment and interactive flow documentation",
    ],
    timeline: "1 - 3 Weeks",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-pink-500 to-rose-500",
    metrics: [
      { value: "100%", label: "Automated Data Pipelines" },
      { value: "0", label: "Manual Copy-Paste Hours" },
      { value: "400+", label: "Supported Connectors" },
      { value: "99.9%", label: "Execution Reliability" },
    ],
    processSteps: [
      { step: "01", title: "Workflow Audit", description: "Identifying manual bottlenecks across CRM, billing, email, and inventory systems." },
      { step: "02", title: "Pipeline Architecture", description: "Designing visual flowcharts with conditional branching and fallback triggers." },
      { step: "03", title: "Building & AI Injection", description: "Configuring n8n nodes, JSON data mapping, and LLM reasoning steps." },
      { step: "04", title: "Hardening & Monitoring", description: "Stress testing edge cases, setting up webhook retries, and deploying to production." },
    ],
    faqs: [
      { question: "Why should we choose n8n over Zapier or Make?", answer: "n8n is self-hosted and open-source, meaning your confidential customer and financial data never leaves your secure server, and you incur zero expensive per-task subscription fees." },
    ],
  },
  {
    id: "seo",
    slug: "seo",
    aliases: ["seo-optimization", "search-engine-optimization"],
    title: "SEO & Search Dominance",
    tagline: "Technical SEO, Core Web Vitals & Google Top Rankings",
    shortDescription:
      "Boost your organic reach and improve your rankings on Google.",
    fullDescription:
      "We execute data-driven SEO campaigns that systematically elevate your brand to the top of Google search results. By combining deep technical code audits, Schema.org rich snippet injection, high-intent keyword clustering, and sub-second load times, we turn search engine traffic into consistent revenue.",
    category: "growth",
    categoryLabel: "Growth & SEO",
    technologies: ["Google Search Console", "Schema.org JSON-LD", "Ahrefs", "Semrush", "Google Analytics 4", "Lighthouse", "PostHog"],
    features: [
      "Deep technical code auditing (crawling, canonicals, indexing barriers, redirect chains)",
      "Automated Schema.org JSON-LD microdata for Google Rich Snippets, Breadcrumbs & FAQs",
      "High-intent keyword mapping and semantic search topical authority clusters",
      "Core Web Vitals acceleration targeting 100/100 performance scores across mobile and desktop",
      "Local SEO, Google Business Profile optimization, and high-authority link acquisition",
    ],
    architecturalLayers: [
      {
        layer: "Technical Core & Crawlability",
        tech: "Semantic HTML5 + Dynamic XML Sitemaps + Edge Bot Rules",
        description: "Zero indexation barriers ensuring search engine spiders crawl 100% of high-value pages.",
        capabilities: ["Robots.txt directive tuning", "Canonical link enforcement", "Hreflang international tags"],
      },
      {
        layer: "Structured Microdata",
        tech: "Schema.org JSON-LD Entities",
        description: "Rich snippet graph markup for Google search result dominance.",
        capabilities: ["FAQPage rich snippets", "BreadcrumbList markup", "Organization entity graph"],
      },
    ],
    implementationRoadmap: [
      { stage: "Stage 01", duration: "Week 1", title: "Comprehensive Technical Crawl Audit", details: "Diagnose crawl budget issues, 404s, redirect loops, and Core Web Vitals bottlenecks." },
      { stage: "Stage 02", duration: "Week 2", title: "Keyword Matrix & Semantic Topic Clusters", details: "Target high-intent transactional search terms and architect topic pillar pages." },
      { stage: "Stage 03", duration: "Week 3 - 4", title: "Code Implementation & Schema Injection", details: "Deploy structured JSON-LD data, heading optimizations, and internal linking networks." },
    ],
    securityAndCompliance: [
      { standard: "Google Search Essentials & Quality Guidelines", description: "100% white-hat algorithmic compliance protecting your domain from penalties." },
    ],
    deliverables: [
      "Technical SEO audit and direct code implementation pull requests",
      "Keyword research matrix and editorial content cluster roadmap",
      "Live Google Search Console and GA4 conversion telemetry dashboard",
      "Monthly keyword ranking movement and organic revenue growth reports",
    ],
    timeline: "Ongoing / Sprint",
    heroImage: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-green-500 to-emerald-500",
    metrics: [
      { value: "#1", label: "Top Page Rankings" },
      { value: "+400%", label: "Organic Impressions Lift" },
      { value: "100%", label: "Clean Technical Health" },
      { value: "0", label: "Search Indexing Errors" },
    ],
    processSteps: [
      { step: "01", title: "Comprehensive Audit", description: "Diagnosing technical indexing blockers, speed bottlenecks, and backlink health." },
      { step: "02", title: "Keyword & Entity Mapping", description: "Targeting high-buyer-intent keywords and semantic entity graphs." },
      { step: "03", title: "Code & Content Optimization", description: "Deploying Schema markup, optimizing heading hierarchies, and internal linking." },
      { step: "04", title: "Growth & Authority Building", description: "Earning tier-1 backlinks and scaling topical authority pages." },
    ],
    faqs: [
      { question: "How quickly will we see Google ranking improvements?", answer: "Technical fixes often yield indexation jumps within 2-4 weeks, while competitive keyword ranking climbs typically show substantial gains within 60-90 days." },
    ],
  },
  {
    id: "ai-agentic-automation",
    slug: "ai-agentic-automation",
    aliases: ["ai-automation", "ai-agents", "artificial-intelligence"],
    title: "AI & Agentic Automation",
    tagline: "Autonomous LLM Copilots & Enterprise RAG Systems",
    shortDescription:
      "Deploy custom LLM agents, intelligent RAG knowledge copilots, and autonomous task workflows.",
    fullDescription:
      "Transform your operational efficiency with custom AI agents and Retrieval-Augmented Generation (RAG) knowledge copilots. We connect frontier models (GPT-4o, Claude 3.5 Sonnet) securely to your company databases, enabling autonomous customer support, instant document synthesis, and automated business decisions.",
    category: "ai-cloud",
    categoryLabel: "AI & Cloud",
    technologies: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "LangChain", "LlamaIndex", "Pinecone", "Qdrant", "PostgreSQL pgvector", "Python", "FastAPI"],
    features: [
      "Custom enterprise RAG knowledge bases queried via natural language across private documentation",
      "Autonomous 24/7 AI customer support copilots with deterministic business logic guardrails",
      "Automated document processing, invoice OCR, and contract synthesis with multi-modal vision models",
      "Multi-agent reasoning architectures with human-in-the-loop validation triggers",
      "Strict data privacy ensuring zero model training on proprietary company confidential data",
    ],
    architecturalLayers: [
      {
        layer: "Agent Reasoning & Orchestration",
        tech: "LangChain / LlamaIndex + FastAPI",
        description: "Autonomous reasoning loops with tool-calling capabilities and output guardrails.",
        capabilities: ["Deterministic fallback logic", "Tool-calling APIs", "Human-in-the-loop escalation"],
      },
      {
        layer: "Vector Memory & Hybrid Search",
        tech: "PostgreSQL (pgvector) + Pinecone",
        description: "Hybrid retrieval combining keyword tsvector search with semantic vector embeddings.",
        capabilities: ["Cosine similarity ranking", "Document chunking pipelines", "Sub-50ms query responses"],
      },
    ],
    implementationRoadmap: [
      { stage: "Stage 01", duration: "Week 1", title: "Data Ingestion & Knowledge Mapping", details: "Ingest, clean, chunk, and embed internal SOPs, product documentation, and database schemas." },
      { stage: "Stage 02", duration: "Week 2 - 3", title: "Prompt Engineering & Tool Integrations", details: "Engineer agent reasoning tools, connect internal APIs, and establish safety guardrails." },
      { stage: "Stage 03", duration: "Week 4", title: "Telemetry & Live Deployment", details: "Deploy agent to web, Slack, or WhatsApp with hallucination telemetry tracking." },
    ],
    securityAndCompliance: [
      { standard: "Zero-Data Retention Enterprise APIs", description: "Zero training on private customer data using dedicated enterprise cloud endpoints." },
    ],
    deliverables: [
      "Custom trained AI agent pipeline and private vector database setup",
      "Interactive web widget, Slack bot, or WhatsApp customer service integration",
      "Admin control center for prompt management, test evaluations, and audit logs",
      "Token usage & cloud cost monitoring dashboard",
    ],
    timeline: "2 - 5 Weeks",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-violet-500 to-purple-500",
    metrics: [
      { value: "90%", label: "First Contact Resolution" },
      { value: "< 1.5s", label: "Semantic AI Response Time" },
      { value: "100%", label: "Data Privacy Guarantee" },
      { value: "24/7", label: "Autonomous Availability" },
    ],
    processSteps: [
      { step: "01", title: "Knowledge Ingestion", description: "Chunking, embedding, and vectorizing company SOPs, manuals, and databases." },
      { step: "02", title: "Agent System Design", description: "Prompt engineering, tool selection, and context-window guardrails." },
      { step: "03", title: "Integration & Testing", description: "Hooking agents into Slack, web apps, CRMs, and email dispatchers." },
      { step: "04", title: "Deployment & Telemetry", description: "Monitoring hallucination metrics, latency, and automated model evaluations." },
    ],
    faqs: [
      { question: "Will our proprietary company data be secure and private?", answer: "Yes. We use zero-retention enterprise API endpoints with private vector databases, guaranteeing that your data is never used to train public LLM models." },
    ],
  },
  {
    id: "cloud-devops-architecture",
    slug: "cloud-devops-architecture",
    aliases: ["cloud-devops", "cloud-infrastructure", "devops"],
    title: "Cloud & DevOps Architecture",
    tagline: "Resilient Multi-Cloud Topology & Automated CI/CD",
    shortDescription:
      "Scalable multi-cloud infrastructure, Docker containerization, and automated CI/CD pipelines.",
    fullDescription:
      "Devolopy engineers fault-tolerant, auto-scaling cloud architectures across AWS, Google Cloud, and DigitalOcean. With Infrastructure as Code (Terraform), Docker containerization, and automated GitHub Actions pipelines, your platform achieves 99.99% uptime with zero deployment stress.",
    category: "ai-cloud",
    categoryLabel: "AI & Cloud",
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Grafana"],
    features: [
      "Infrastructure as Code (IaC) with automated multi-region replication and instant rollbacks",
      "Zero-downtime blue/green and canary deployment pipelines via GitHub Actions",
      "Cloudflare WAF, DDoS mitigation, rate limiting, and SSL/TLS 1.3 hardening",
      "Real-time server telemetry, Prometheus metrics, and automated Slack paging alerts",
      "Cloud cost auditing and compute instance right-sizing reducing bills by 30% to 50%",
    ],
    architecturalLayers: [
      {
        layer: "Compute & Container Cluster",
        tech: "Docker + Kubernetes / AWS ECS Fargate",
        description: "Auto-scaling container nodes adjusting capacity to live traffic demand.",
        capabilities: ["Horizontal Pod Autoscaling", "Zero-downtime rolling updates", "Health check probes"],
      },
      {
        layer: "Infrastructure as Code",
        tech: "Terraform + GitHub Actions CI/CD",
        description: "Version-controlled cloud provisioning with automated security scanning.",
        capabilities: ["Reproducible staging environments", "State locking in S3", "Secret encryption"],
      },
    ],
    implementationRoadmap: [
      { stage: "Stage 01", duration: "Week 1", title: "Infrastructure Audit & Topology Design", details: "Audit existing cloud expenses, security gaps, and draft multi-region Terraform blueprints." },
      { stage: "Stage 02", duration: "Week 2 - 3", title: "Terraform Provisioning & CI/CD Pipeline", details: "Deploy container clusters, automated testing workflows, and database replication." },
      { stage: "Stage 03", duration: "Week 4", title: "Zero-Downtime Migration & Monitoring", details: "Cut over live DNS, verify SSL certificates, and configure 24/7 Grafana monitoring alerts." },
    ],
    securityAndCompliance: [
      { standard: "SOC 2 & ISO 27001 Infrastructure Standards", description: "Encrypted data volumes, least-privilege IAM roles, and centralized cloud audit logs." },
    ],
    deliverables: [
      "Modular Terraform infrastructure blueprints and documentation",
      "Hardened Docker container images and automated CI/CD workflows",
      "Disaster recovery runbook with automatic daily backup snapshots",
      "Security compliance certification and load testing performance report",
    ],
    timeline: "2 - 4 Weeks",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-sky-500 to-blue-500",
    metrics: [
      { value: "99.99%", label: "Uptime Reliability" },
      { value: "0", label: "Downtime Deployments" },
      { value: "-40%", label: "Average Cloud Bill Drop" },
      { value: "< 5min", label: "Disaster Recovery RTO" },
    ],
    processSteps: [
      { step: "01", title: "Infrastructure Assessment", description: "Auditing server load, security vulnerabilities, and monthly cloud expenditures." },
      { step: "02", title: "Terraform & Containerization", description: "Writing reproducible infrastructure code and Dockerizing application services." },
      { step: "03", title: "CI/CD Pipeline Construction", description: "Automating unit testing, security linting, and staging/production rollouts." },
      { step: "04", title: "Migration & Hardening", description: "Switching DNS with zero downtime, configuring firewalls, and setting up alerts." },
    ],
    faqs: [
      { question: "Can you help lower our monthly AWS or GCP cloud bill?", answer: "Yes! Our cloud cost optimization audit typically reduces infrastructure overhead by 30% to 50% through instance right-sizing, reserved capacity planning, and edge caching." },
    ],
  },
  {
    id: "ui-ux-design-systems",
    slug: "ui-ux-design-systems",
    aliases: ["ui-ux-design", "ui-ux", "design-systems", "product-design"],
    title: "UI/UX & Design Systems",
    tagline: "World-Class Interaction Design & Scalable Design Tokens",
    shortDescription:
      "Craft world-class interactive design prototypes, wireframes, and scalable design component systems.",
    fullDescription:
      "We design captivating user interfaces and robust design systems that establish brand authority and delight users. From Figma component libraries to interactive micro-animations, every screen is created with user empathy, conversion psychology, and seamless developer handoff.",
    category: "engineering",
    categoryLabel: "Engineering & Web",
    technologies: ["Figma", "Design Tokens", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Storybook", "Principle"],
    features: [
      "Complete Figma atomic design systems with nested auto-layout components and variables",
      "Interactive click-through prototypes for user testing and stakeholder alignment",
      "WCAG 2.1 AA accessibility compliance across contrast, typography, and focus states",
      "Direct design-to-code token synchronization with Tailwind CSS and React components",
      "Comprehensive UX journey mapping and conversion funnel usability analysis",
    ],
    architecturalLayers: [
      {
        layer: "Visual & Brand Tokens",
        tech: "Figma Variables + CSS Variables",
        description: "Centralized color palettes, typography scales, spacing tokens, and dynamic dark/light theme switching.",
        capabilities: ["Nested token hierarchy", "Semantic color palettes", "Fluid typography scales"],
      },
      {
        layer: "Interactive Component Library",
        tech: "Storybook + shadcn/ui + React",
        description: "Self-documenting UI components tested across hover, focus, active, loading, and disabled states.",
        capabilities: ["Zero developer guesswork", "Keyboard accessibility", "Aria attributes"],
      },
    ],
    implementationRoadmap: [
      { stage: "Stage 01", duration: "Week 1", title: "UX Discovery & Journey Architecture", details: "Define user personas, core interaction paths, and structural wireframes." },
      { stage: "Stage 02", duration: "Week 2", title: "Visual Design & Atomic Component System", details: "Craft high-fidelity components, micro-animations, and responsive screens in Figma." },
      { stage: "Stage 03", duration: "Week 3", title: "Developer Token Export & Storybook Sync", details: "Export SVG icons, generate CSS tokens, and document handoff guidelines." },
    ],
    securityAndCompliance: [
      { standard: "WCAG 2.1 AA Accessibility", description: "Enforced color contrast ratios, focus indicators, and screen reader compatibility." },
    ],
    deliverables: [
      "Master Figma design file with organized typography, color, and spacing styles",
      "Interactive prototype link for stakeholder and customer demonstrations",
      "Exported SVG icons, vector assets, and brand guidelines PDF",
      "Developer handoff documentation detailing hover, active, and error states",
    ],
    timeline: "2 - 3 Weeks",
    heroImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-rose-500 to-pink-500",
    metrics: [
      { value: "100%", label: "Figma Component Coverage" },
      { value: "WCAG AA", label: "Accessibility Compliant" },
      { value: "0", label: "Developer Guesswork" },
      { value: "2x", label: "Faster Frontend Build" },
    ],
    processSteps: [
      { step: "01", title: "User Research & Information Architecture", description: "Mapping sitemaps, user personas, and competitor interface benchmarks." },
      { step: "02", title: "Wireframing & UX Prototyping", description: "Designing low-fidelity structural layouts focused purely on clarity and hierarchy." },
      { step: "03", title: "Visual Design & Component System", description: "Applying brand typography, elevation, dark/light themes, and UI micro-states." },
      { step: "04", title: "Handoff & Design Review", description: "Providing organized Figma specs and reviewing frontend staging builds for 1:1 fidelity." },
    ],
    faqs: [
      { question: "Do you include light and dark theme designs in Figma?", answer: "Yes! We build using design token variables so switching between light and dark modes is built into every component." },
      { question: "Can our engineers directly copy code from the design system?", answer: "Yes, we structure components with 1:1 parity matching Tailwind CSS and React shadcn/ui tokens." },
    ],
  },
  {
    id: "api-microservices",
    slug: "api-microservices",
    aliases: ["apis", "microservices"],
    title: "API & Microservices Architecture",
    tagline: "High-Throughput REST & GraphQL Microservices",
    shortDescription:
      "High-throughput REST and GraphQL APIs to interconnect databases, legacy systems, and platforms.",
    fullDescription:
      "We design resilient API microservices capable of handling millions of requests with sub-millisecond latency. Whether migrating monolithic systems to distributed microservices or integrating complex third-party platforms, we build secure, self-documenting endpoints backed by Redis caching.",
    category: "engineering",
    categoryLabel: "Engineering & Web",
    technologies: ["Node.js / Express", "FastAPI / Python", "GraphQL", "PostgreSQL", "Redis", "Docker", "Swagger / OpenAPI 3.0", "Kafka"],
    features: [
      "High-concurrency RESTful and GraphQL API gateways with rate limiting and API key management",
      "Redis in-memory caching layers slashing database response times to &lt;15ms",
      "Role-Based Access Control (RBAC), JWT authentication, and OAuth2 security",
      "Event-driven message queues (RabbitMQ, Kafka, AWS SQS) for async background tasks",
      "Interactive Swagger UI / OpenAPI 3.0 self-documenting endpoints",
    ],
    architecturalLayers: [
      {
        layer: "API Gateway & Auth",
        tech: "FastAPI / Node.js + JWT + Redis Rate Limiter",
        description: "High-throughput request routing with token verification and DDoS throttle guards.",
        capabilities: ["Token authentication", "Rate limiting", "CORS policy enforcement"],
      },
      {
        layer: "Async Event Pipeline",
        tech: "Kafka / Redis Streams + Worker Containers",
        description: "Decoupled asynchronous task processing ensuring sub-15ms client response times.",
        capabilities: ["Dead-letter queues", "Event replayability", "Horizontal worker scaling"],
      },
    ],
    implementationRoadmap: [
      { stage: "Stage 01", duration: "Week 1", title: "API Contract & Schema Definition", details: "Draft OpenAPI 3.0 specification, JSON request/response models, and database migrations." },
      { stage: "Stage 02", duration: "Week 2 - 3", title: "Microservices Implementation & Redis Caching", details: "Engineer controllers, auth middleware, database indexing, and caching logic." },
      { stage: "Stage 03", duration: "Week 4", title: "Load Testing & High-Throughput Deployment", details: "Simulate 10,000 requests/second load testing, configure monitoring, and deploy." },
    ],
    securityAndCompliance: [
      { standard: "JWT / OAuth2 Strict Authentication", description: "Cryptographically signed JWT tokens with automated rotation and blacklist revoking." },
    ],
    deliverables: [
      "Modular microservices API codebase with comprehensive unit tests",
      "Interactive Postman collection and live Swagger documentation",
      "Database schema migration scripts and indexing optimizations",
      "Load-tested API performance benchmarks under stress conditions",
    ],
    timeline: "3 - 5 Weeks",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-indigo-500 to-cyan-500",
    metrics: [
      { value: "< 15ms", label: "Average API Response" },
      { value: "10,000+", label: "Requests / Sec Load" },
      { value: "100%", label: "OpenAPI Documented" },
      { value: "Zero", label: "Memory Leak Stability" },
    ],
    processSteps: [
      { step: "01", title: "Data Modeling & Contract Design", description: "Defining JSON schemas, endpoints, error structures, and database relations." },
      { step: "02", title: "Core Logic Implementation", description: "Writing modular service controllers, middleware auth, and Redis caching." },
      { step: "03", title: "Automated Testing", description: "Executing unit, integration, and load testing simulating peak concurrency." },
      { step: "04", title: "Deployment & Telemetry", description: "Setting up API gateways, rate limiters, and real-time response time monitoring." },
    ],
    faqs: [
      { question: "Do you provide documentation for our internal engineers?", answer: "Yes, every endpoint comes with live interactive Swagger/OpenAPI documentation and Postman workspace collections." },
      { question: "Can these APIs integrate with legacy SQL databases?", answer: "Yes, we build adapter layers that safely query and sync with legacy Oracle, SQL Server, and MySQL databases." },
    ],
  },
  {
    id: "custom-crm-portals",
    slug: "custom-crm-portals",
    aliases: ["custom-crm-client-portals", "client-portals", "crm-development"],
    title: "Custom CRM & Client Portals",
    tagline: "Bespoke Multi-Tenant Dashboards & Operational Software",
    shortDescription:
      "Bespoke client portals, partner dashboards, and operational CRM software built to your exact flow.",
    fullDescription:
      "Off-the-shelf software rarely fits specialized workflows. Devolopy builds bespoke CRM software, client onboarding portals, and internal operations dashboards designed around your exact business rules, ensuring maximum productivity and complete data ownership.",
    category: "erp-automation",
    categoryLabel: "ERP & Automation",
    technologies: ["Next.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Recharts", "NextAuth.js", "AWS S3", "SendGrid"],
    features: [
      "Multi-tenant customer and partner portals with custom branded experiences",
      "Granular role-based access permissions, audit logs, and activity timelines",
      "Real-time interactive data analytics dashboards, KPI metrics, and PDF export engines",
      "Integrated communication center (Email alerts, SMS notifications, in-app messaging)",
      "Secure document storage with encrypted cloud file uploads",
    ],
    architecturalLayers: [
      {
        layer: "Client Dashboard UI",
        tech: "Next.js 15 App Router + Recharts Data Visualizations",
        description: "Fast, responsive web portal with real-time chart telemetry and filterable data tables.",
        capabilities: ["Exportable PDF reports", "CSV bulk data import", "Multi-tenant white labeling"],
      },
      {
        layer: "Data Isolation & Storage",
        tech: "PostgreSQL 16 + Prisma ORM (Row-Level Security)",
        description: "Strict multi-tenant tenant isolation ensuring zero data cross-contamination.",
        capabilities: ["Role-Based Access Control (RBAC)", "Immutable audit logs", "Encrypted document attachments in S3"],
      },
    ],
    implementationRoadmap: [
      { stage: "Stage 01", duration: "Week 1 - 2", title: "Workflow Mapping & Entity Relations", details: "Catalog customer journey stages, data attributes, role permissions, and custom KPIs." },
      { stage: "Stage 02", duration: "Week 3 - 4", title: "Application Engineering & Dashboard Charts", details: "Build interactive portal UI, data tables, automated email triggers, and report exports." },
      { stage: "Stage 03", duration: "Week 5 - 6", title: "Security Testing & Team Onboarding", details: "Audit access control permissions, execute vulnerability scans, and onboard team users." },
    ],
    securityAndCompliance: [
      { standard: "Multi-Tenant Row-Level Security (RLS)", description: "Database-level tenant isolation preventing unauthorized data access between accounts." },
    ],
    deliverables: [
      "Custom web dashboard application with clean responsive design",
      "Relational PostgreSQL database schema with automated migration scripts",
      "Admin control center for customer account and team management",
      "Full source code ownership with zero monthly per-user licensing fees",
    ],
    timeline: "4 - 6 Weeks",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-teal-500 to-blue-500",
    metrics: [
      { value: "$0", label: "Per-User SaaS Fees" },
      { value: "100%", label: "Tailored to Your Flow" },
      { value: "Real-Time", label: "Data Reporting" },
      { value: "Encrypted", label: "Bank-Grade Security" },
    ],
    processSteps: [
      { step: "01", title: "Workflow Mapping", description: "Cataloging your pipeline stages, data fields, user roles, and reporting requirements." },
      { step: "02", title: "Database & UX Design", description: "Structuring clean entity schemas and intuitive dashboard screen wireframes." },
      { step: "03", title: "Application Engineering", description: "Building interactive charts, table filters, automated emails, and export tools." },
      { step: "04", title: "Role Testing & Launch", description: "Verifying permissions matrix, testing audit logs, and training your team." },
    ],
    faqs: [
      { question: "Do we own the full source code and data?", answer: "Yes! You own 100% of the source code, database, and intellectual property with zero recurring vendor lock-in." },
      { question: "Can we add custom fields and reports as our business expands?", answer: "Yes, our modular database architecture and admin interfaces allow dynamic attribute management without breaking code." },
    ],
  },
  {
    id: "conversion-optimization",
    slug: "conversion-optimization",
    aliases: ["cro", "conversion-rate-optimization"],
    title: "Conversion Rate Optimization (CRO)",
    tagline: "Scientific A/B Testing & Funnel Revenue Acceleration",
    shortDescription:
      "Data-backed A/B testing, heatmap audits, and checkout streamlining to turn visitors into buyers.",
    fullDescription:
      "Increase revenue from your existing website traffic without spending extra ad dollars. Devolopy conducts rigorous qualitative and quantitative CRO audits, runs scientific A/B tests, and removes checkout friction to dramatically improve your visitor-to-customer conversion rates.",
    category: "growth",
    categoryLabel: "Growth & SEO",
    technologies: ["Google Analytics 4", "PostHog", "Hotjar", "VWO", "Looker Studio", "Optimizely", "Mixpanel"],
    features: [
      "Complete funnel friction audit analyzing session recordings and drop-off points",
      "Scientific A/B and multivariate split-testing on landing pages and checkout flows",
      "Mobile user experience optimization and cart abandonment reduction",
      "Value proposition and headline copy testing backed by click heatmap data",
      "Live conversion tracking dashboards reporting statistical significance",
    ],
    architecturalLayers: [
      {
        layer: "Event Telemetry & Replay",
        tech: "PostHog + Google Analytics 4 + Server-Side CAPI",
        description: "Zero-data-loss user interaction tracking recording scrolls, clicks, and rage-clicks.",
        capabilities: ["Session replay video audits", "Multi-touch attribution", "Server-side event streaming"],
      },
      {
        layer: "Edge A/B Experimentation",
        tech: "Edge Middleware Split Testing + Looker Studio",
        description: "Zero-flicker edge-rendered split testing delivering variants with sub-10ms overhead.",
        capabilities: ["Flicker-free variant delivery", "Bayesian statistical confidence", "Real-time revenue lift analytics"],
      },
    ],
    implementationRoadmap: [
      { stage: "Stage 01", duration: "Week 1", title: "Funnel Friction & Heatmap Audit", details: "Analyze GA4 checkout steps, user session replay videos, and customer survey data." },
      { stage: "Stage 02", duration: "Week 2", title: "Hypothesis Matrix & Variation Engineering", details: "Code high-fidelity UI variations targeting identified conversion bottlenecks." },
      { stage: "Stage 03", duration: "Week 3 - 4", title: "A/B Experimentation & Production Rollout", details: "Run split test until statistical significance is reached, then deploy winning variation." },
    ],
    securityAndCompliance: [
      { standard: "GDPR / User Privacy Masking", description: "Automatic masking of credit cards, passwords, and personal information in session recordings." },
    ],
    deliverables: [
      "Comprehensive CRO opportunity matrix and audit report",
      "A/B test implementation plan with frontend code variations",
      "Live conversion funnel telemetry dashboards in Looker Studio",
      "Bi-weekly test results and revenue uplift reports",
    ],
    timeline: "Sprint / Ongoing",
    heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-yellow-500 to-amber-500",
    metrics: [
      { value: "+38%", label: "Average Checkout Lift" },
      { value: "95%+", label: "Statistical Significance" },
      { value: "-25%", label: "Cart Abandonment Drop" },
      { value: "3x - 5x", label: "Projected ROI" },
    ],
    processSteps: [
      { step: "01", title: "Quantitative & Qualitative Audit", description: "Reviewing GA4 funnel steps, user session replay videos, and customer survey data." },
      { step: "02", title: "Hypothesis Formulation", description: "Prioritizing test ideas based on potential impact, confidence, and ease (ICE score)." },
      { step: "03", title: "A/B Experiment Execution", description: "Deploying high-fidelity variation code and routing traffic evenly across test groups." },
      { step: "04", title: "Analysis & Implementation", description: "Validating winning variations and permanently implementing them into production." },
    ],
    faqs: [
      { question: "How much traffic do we need to run meaningful A/B tests?", answer: "Generally, sites with at least 5,000 monthly visitors can achieve statistically significant test results within 2 to 4 weeks." },
      { question: "Will A/B testing scripts slow down our site?", answer: "No. We utilize edge middleware routing and server-side experiments that eliminate the dreaded visual layout flicker and maintain 100/100 Lighthouse performance." },
    ],
  },
];

export function getAllServiceSlugs(): string[] {
  const slugs: string[] = [];
  for (const s of ALL_SERVICES) {
    slugs.push(s.slug);
    if (s.aliases) {
      slugs.push(...s.aliases);
    }
  }
  return Array.from(new Set(slugs));
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return ALL_SERVICES.find(
    (s) =>
      s.slug === slug ||
      s.id === slug ||
      (s.aliases && s.aliases.includes(slug))
  );
}
