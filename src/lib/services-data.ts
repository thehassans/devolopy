export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  category: "engineering" | "mobile" | "erp-automation" | "growth" | "ai-cloud";
  categoryLabel: string;
  technologies: string[];
  features: string[];
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
    title: "Website Development",
    tagline: "Ultra-Fast, SEO-Dominant Next.js Web Applications",
    shortDescription:
      "We design and develop websites that are not only visually appealing but also user-friendly and optimized for search engines.",
    fullDescription:
      "Devolopy engineers bespoke websites and web platforms using Next.js App Router, React 19, TypeScript, and Tailwind CSS. We optimize every millisecond of rendering performance, enforce semantic schema markup, and implement conversion-focused design systems that captivate visitors and rank effortlessly on search engines.",
    category: "engineering",
    categoryLabel: "Engineering & Web",
    technologies: ["Next.js 14/15", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Node.js", "Sanity CMS"],
    features: [
      "Custom responsive UI/UX engineered with pixel-perfect design system tokens",
      "Sub-second First Contentful Paint (FCP) and 100/100 Core Web Vitals",
      "Semantic HTML5 structure, OpenGraph cards & Schema.org JSON-LD microdata",
      "Headless CMS integration (Sanity, Strapi, WordPress, Contentful)",
      "Global CDN edge caching and automated zero-downtime deployment",
    ],
    deliverables: [
      "Complete production Next.js repository with clean TypeScript types",
      "Automated CI/CD deployment pipelines on Vercel or AWS",
      "Technical SEO configuration (XML sitemaps, robots.txt, canonical tags)",
      "Admin CMS dashboard and team handover documentation",
      "30-day post-launch warranty and performance monitoring",
    ],
    timeline: "2 - 4 Weeks",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-blue-500 to-cyan-500",
    metrics: [
      { value: "100/100", label: "Lighthouse Performance" },
      { value: "< 0.6s", label: "Average Page Load" },
      { value: "+300%", label: "SEO Organic Reach" },
      { value: "99.99%", label: "Uptime SLA" },
    ],
    processSteps: [
      { step: "01", title: "Discovery & Architecture", description: "Deep analysis of your target audience, competitors, user flows, and technical stack selection." },
      { step: "02", title: "Interactive UI/UX Design", description: "Figma wireframes and high-fidelity prototypes validated with usability heuristics." },
      { step: "03", title: "Full-Stack Development", description: "Modular component engineering, API integrations, and continuous unit testing." },
      { step: "04", title: "SEO Audit & Deployment", description: "Comprehensive Core Web Vitals benchmarking, security audit, and zero-downtime go-live." },
    ],
    faqs: [
      { question: "Why do you build with Next.js instead of WordPress?", answer: "Next.js provides unprecedented page speed, server-side rendering (SSR), unmatched security without vulnerable plugins, and significantly higher Google search rankings." },
      { question: "Can our team easily update text and images?", answer: "Yes! We integrate modern visual headless CMS platforms (Sanity, Strapi, Notion) so non-technical team members can publish and edit content with zero code." },
      { question: "Do you handle custom domain and hosting setup?", answer: "Absolutely. We configure your DNS records, SSL encryption certificates, and edge caching on Vercel, AWS, or your preferred cloud provider." },
    ],
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Cross-Platform iOS & Android Native Experiences",
    shortDescription:
      "Create intuitive, user-friendly mobile applications to reach your audience anywhere.",
    fullDescription:
      "We architect high-performance mobile applications that deliver native 60fps animations, offline-first synchronization, and seamless user experiences across iOS and Android. Built on React Native and Flutter, your app shares a single maintainable codebase without compromising device-level hardware capabilities.",
    category: "mobile",
    categoryLabel: "Mobile & Apps",
    technologies: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Expo", "Firebase", "GraphQL", "PostgreSQL"],
    features: [
      "Cross-platform compilation for simultaneous iOS & Android App Store deployments",
      "Offline-first local caching with background database synchronization",
      "Push notification systems via Firebase Cloud Messaging & OneSignal",
      "Native device hardware integration (Camera, GPS, Bluetooth, Biometrics)",
      "In-app purchases, Stripe mobile SDK, and Apple Pay/Google Pay",
    ],
    deliverables: [
      "iOS (.ipa) and Android (.aab) signed production builds",
      "App Store & Google Play submission and review approval support",
      "RESTful API / GraphQL backend integration",
      "Crashlytics error tracking and user analytics integration",
      "Modular source code repository with automated CI builds",
    ],
    timeline: "4 - 8 Weeks",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-purple-500 to-indigo-500",
    metrics: [
      { value: "60 FPS", label: "Fluid Native Motion" },
      { value: "iOS & Android", label: "Single Codebase" },
      { value: "100%", label: "App Store Approval" },
      { value: "< 20MB", label: "Optimized Binary Size" },
    ],
    processSteps: [
      { step: "01", title: "Product Strategy & Wireframing", description: "Mobile journey mapping, gesture interactions, and technical device compatibility matrix." },
      { step: "02", title: "Native Prototyping", description: "Clickable mobile prototypes testing biometric auth, navigation bars, and offline states." },
      { step: "03", title: "Engineering & Integration", description: "State management, API integration, and hardware sensor bridge implementation." },
      { step: "04", title: "App Store Launch", description: "Signing keys, screenshots, metadata compliance, and full store launch review." },
    ],
    faqs: [
      { question: "Will my app feel as smooth as a native iOS/Android app?", answer: "Yes! Modern React Native with the New Architecture (JSI / Fabric) compiles directly to native UI components running at 60fps." },
      { question: "How long does App Store review take?", answer: "Apple typically reviews apps in 24-48 hours, while Google Play takes 1-3 business days. We handle all compliance questions directly." },
    ],
  },
  {
    id: "odoo-development",
    slug: "odoo-development",
    title: "Odoo Development",
    tagline: "Enterprise ERP Customization & Financial Automation",
    shortDescription:
      "Customize and integrate Odoo ERP solutions for streamlined business operations.",
    fullDescription:
      "Devolopy empowers growing companies and enterprises with end-to-end Odoo ERP implementation, bespoke module development, third-party software bridges, and automated financial accounting. Streamline your accounting, supply chain, inventory, and human resources inside one unified ecosystem.",
    category: "erp-automation",
    categoryLabel: "ERP & Automation",
    technologies: ["Odoo 17/18", "Python", "PostgreSQL", "XML-RPC", "Docker", "REST API", "Ubuntu Linux", "Redis"],
    features: [
      "Bespoke Odoo ERP module engineering tailored to unique business logic",
      "Automated multi-currency financial accounting & invoicing pipelines",
      "Real-time Inventory, POS, Manufacturing, CRM & Accounting synchronization",
      "Legacy ERP data migration with zero data loss or downtime",
      "Automated database backup, rollback, and load-balancing",
    ],
    deliverables: [
      "Hardened, production-ready Odoo Community or Enterprise instance",
      "Custom business workflow modules and invoice PDF report templates",
      "Automated financial reconciliation and reporting pipelines",
      "Comprehensive staff training manuals and role permission matrix",
      "24/7 database monitoring and security patching",
    ],
    timeline: "3 - 6 Weeks",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-emerald-500 to-teal-500",
    metrics: [
      { value: "100%", label: "ERP Financial Accuracy" },
      { value: "5x", label: "Faster Bookkeeping" },
      { value: "Zero", label: "Data Loss Migrations" },
      { value: "Real-Time", label: "Inventory Tracking" },
    ],
    processSteps: [
      { step: "01", title: "Business Process Audit", description: "Mapping your current chart of accounts, sales workflows, warehouse routes, and approval hierarchies." },
      { step: "02", title: "Instance Architecture", description: "Setting up isolated Docker staging/production servers with PostgreSQL database tuning." },
      { step: "03", title: "Module Development & Testing", description: "Coding custom Python models, views, wizards, and tax compliance APIs." },
      { step: "04", title: "Data Migration & Go-Live", description: "Importing historical transactions, running staff workshops, and flipping to live operations." },
    ],
    faqs: [
      { question: "Can Odoo integrate with our existing website and payment gateways?", answer: "Yes! We build XML-RPC and REST API webhooks between Odoo and Shopify, Next.js, Stripe, Amazon, or local banks." },
      { question: "Is Odoo scalable for multi-company operations?", answer: "Odoo natively supports multi-company, multi-currency, and multi-warehouse structures across international subsidiaries." },
    ],
  },
  {
    id: "e-commerce",
    slug: "e-commerce",
    title: "E-Commerce Solutions",
    tagline: "High-Conversion Headless & Shopify Online Stores",
    shortDescription:
      "Create a high-performance online store with secure payment integration.",
    fullDescription:
      "We design and build e-commerce experiences engineered to maximize average order value (AOV) and conversion rates. From high-speed headless Next.js Commerce setups to customized Shopify Plus stores, we integrate secure multi-currency payment gateways (Stripe, Apple Pay, Tamara, Tabby) and automated logistics workflows.",
    category: "engineering",
    categoryLabel: "Engineering & Web",
    technologies: ["Shopify Plus", "Next.js Commerce", "Stripe", "Apple Pay", "Tamara", "Tabby", "PostgreSQL", "Redis", "Algolia"],
    features: [
      "1-Click frictionless checkout flows with accelerated mobile payment methods",
      "Multi-currency & multi-language localization with automatic geo-detection",
      "Instant faceted product search and AI-driven personalized recommendations",
      "Real-time inventory synchronization with physical retail POS and warehouses",
      "Automated abandoned cart email/SMS recovery campaigns",
    ],
    deliverables: [
      "Custom responsive online store with lightning-fast catalog browsing",
      "Configured payment gateways, shipping zones, and tax rules",
      "Product catalog migration and SEO-optimized metadata taxonomy",
      "Google Enhanced Ecommerce Analytics 4 & Facebook CAPI tracking",
      "Store owner training documentation",
    ],
    timeline: "3 - 5 Weeks",
    heroImage: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-amber-500 to-orange-500",
    metrics: [
      { value: "+45%", label: "Average Conversion Rate" },
      { value: "< 1s", label: "Instant Product Filtering" },
      { value: "PCI-DSS", label: "Compliant Security" },
      { value: "100%", label: "Mobile Cart Retention" },
    ],
    processSteps: [
      { step: "01", title: "Commerce Strategy", description: "Catalog structure, payment gateway selection, and checkout friction analysis." },
      { step: "02", title: "UI/UX & Storefront Design", description: "High-converting product detail pages (PDP), collections, and cart slide-outs." },
      { step: "03", title: "Engineering & Integrations", description: "Hooking up Stripe, shipping APIs, inventory databases, and tax engines." },
      { step: "04", title: "Stress Test & Launch", description: "Simulating flash-sale traffic loads, payment sandbox verification, and public launch." },
    ],
    faqs: [
      { question: "Should we choose Shopify Plus or custom Next.js Commerce?", answer: "Shopify Plus is phenomenal for fast catalog management, while custom Next.js provides complete design freedom and sub-second load times. We help you choose what best fits your revenue goals." },
    ],
  },
  {
    id: "n8n-development",
    slug: "n8n-development",
    title: "N8N Development",
    tagline: "Autonomous Enterprise Workflow Automation",
    shortDescription:
      "Automate workflows and integrate with other applications using N8N.",
    fullDescription:
      "Devolopy builds self-hosted, scalable n8n automation architectures that connect hundreds of SaaS applications, eliminate manual repetitive work, and orchestrate intelligent data pipelines. Free your team from data entry with automated webhook listeners, AI data extraction, and CRM updates.",
    category: "erp-automation",
    categoryLabel: "ERP & Automation",
    technologies: ["n8n Enterprise", "Webhooks", "REST APIs", "Node.js", "Docker", "OpenAI API", "PostgreSQL", "Slack API"],
    features: [
      "Complex multi-step workflow triggers across 400+ SaaS apps and internal databases",
      "Custom TypeScript n8n nodes for proprietary company APIs",
      "AI-powered document parsing, invoice OCR, and automatic support routing",
      "Self-hosted enterprise deployment with zero monthly per-execution fees",
      "Automated error monitoring and instant Slack / Email alert webhooks",
    ],
    deliverables: [
      "Operational n8n workflow blueprints with full error handling",
      "Self-hosted Dockerized n8n cloud cluster on AWS / DigitalOcean",
      "Secure API credentials vault with encrypted environment variables",
      "Testing sandbox and visual flow documentation",
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
      { question: "Why n8n over Zapier or Make?", answer: "n8n is open-source and self-hostable, meaning your private customer data never leaves your secure server, and you incur zero expensive per-task subscription fees." },
    ],
  },
  {
    id: "seo",
    slug: "seo",
    title: "SEO & Search Dominance",
    tagline: "Technical SEO, Core Web Vitals & Google Top Rankings",
    shortDescription:
      "Boost your organic reach and improve your rankings on Google.",
    fullDescription:
      "We execute data-driven SEO campaigns that systematically elevate your brand to the top of Google search results. By combining deep technical code audits, Schema.org rich snippet injection, high-intent keyword clustering, and sub-second load times, we turn search engine traffic into consistent revenue.",
    category: "growth",
    categoryLabel: "Growth & SEO",
    technologies: ["Google Search Console", "Schema.org", "Ahrefs", "Semrush", "Google Analytics 4", "Lighthouse", "PostHog"],
    features: [
      "Deep technical code auditing (crawling, canonicals, indexing barriers, redirect chains)",
      "Automated Schema.org JSON-LD microdata for Google Rich Snippets & FAQs",
      "High-intent keyword mapping and semantic search topical authority clusters",
      "Core Web Vitals acceleration targeting 100/100 performance scores",
      "Local SEO, Google Business Profile optimization, and high-authority link acquisition",
    ],
    deliverables: [
      "Technical SEO audit and implementation pull requests",
      "Keyword research matrix and editorial content roadmap",
      "Live Google Search Console and GA4 conversion dashboard",
      "Bi-weekly keyword movement and organic revenue growth reports",
    ],
    timeline: "Ongoing / Sprint",
    heroImage: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-green-500 to-emerald-500",
    metrics: [
      { value: "#1", label: "Top Page Rankings" },
      { value: "+400%", label: "Organic Impressions" },
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
    title: "AI & Agentic Automation",
    tagline: "Autonomous LLM Copilots & Enterprise RAG Systems",
    shortDescription:
      "Deploy custom LLM agents, intelligent RAG knowledge copilots, and autonomous task workflows.",
    fullDescription:
      "Transform your operational efficiency with custom AI agents and Retrieval-Augmented Generation (RAG) knowledge copilots. We connect frontier models (GPT-4o, Claude 3.5 Sonnet) securely to your company databases, enabling autonomous customer support, instant document synthesis, and automated business decisions.",
    category: "ai-cloud",
    categoryLabel: "AI & Cloud",
    technologies: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "LangChain", "LlamaIndex", "Pinecone", "Qdrant", "Python", "FastAPI"],
    features: [
      "Custom enterprise RAG knowledge bases queried via natural language",
      "Autonomous 24/7 AI customer support copilots with guardrails",
      "Automated document processing, contract summarization & data extraction",
      "Multi-agent reasoning architectures with human-in-the-loop validation",
      "Strict data privacy ensuring zero model training on company confidential data",
    ],
    deliverables: [
      "Custom trained AI agent pipeline and vector database setup",
      "Interactive web widget, Slack bot, or WhatsApp integration",
      "Admin control center for prompt management and audit logs",
      "Token usage & cloud cost monitoring dashboard",
    ],
    timeline: "2 - 5 Weeks",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-violet-500 to-purple-500",
    metrics: [
      { value: "90%", label: "First Contact Resolution" },
      { value: "< 2s", label: "Semantic AI Response Time" },
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
      { question: "Will our proprietary business data be secure?", answer: "Yes. We use zero-retention enterprise API endpoints with private vector databases, ensuring your data is never used to train public LLM models." },
    ],
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
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
      "Infrastructure as Code (IaC) with automated multi-region replication",
      "Zero-downtime blue/green and canary deployment pipelines",
      "Cloudflare WAF, DDoS mitigation, and SSL hardening",
      "Real-time server telemetry, Prometheus metrics, and automated Slack paging",
      "Cloud cost auditing and compute instance right-sizing",
    ],
    deliverables: [
      "Modular Terraform infrastructure blueprints",
      "Hardened Docker container images and CI/CD workflows",
      "Disaster recovery runbook with automatic daily backup snapshots",
      "Security compliance certification and load testing report",
    ],
    timeline: "2 - 4 Weeks",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    accentColor: "from-sky-500 to-blue-500",
    metrics: [
      { value: "99.99%", label: "Uptime Reliability" },
      { value: "0", label: "Downtime Deployments" },
      { value: "-40%", label: "Average Cloud Bill" },
      { value: "< 5min", label: "Disaster Recovery RTO" },
    ],
    processSteps: [
      { step: "01", title: "Infrastructure Assessment", description: "Auditing server load, security vulnerabilities, and monthly cloud expenditures." },
      { step: "02", title: "Terraform & Containerization", description: "Writing reproducible infrastructure code and Dockerizing application services." },
      { step: "03", title: "CI/CD Pipeline Construction", description: "Automating unit testing, security linting, and staging/production rollouts." },
      { step: "04", title: "Migration & Hardening", description: "Switching DNS with zero downtime, configuring firewalls, and setting up alerts." },
    ],
    faqs: [
      { question: "Can you help lower our monthly AWS/GCP cloud bill?", answer: "Yes! Our cloud cost optimization audit typically reduces infrastructure overhead by 30% to 50% through right-sizing and caching." },
    ],
  },
  {
    id: "ui-ux-design-systems",
    slug: "ui-ux-design-systems",
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
      "Complete Figma atomic design systems with nested auto-layout components",
      "Interactive click-through prototypes for user testing and stakeholder alignment",
      "WCAG 2.1 AA accessibility compliance across contrast, typography, and focus states",
      "Direct design-to-code token synchronization with Tailwind CSS and React",
      "Comprehensive UX journey mapping and conversion funnel analysis",
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
    ],
  },
  {
    id: "api-microservices",
    slug: "api-microservices",
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
      "High-concurrency RESTful and GraphQL API gateways with rate limiting",
      "Redis in-memory caching layers slashing database response times to &lt;10ms",
      "Role-Based Access Control (RBAC), JWT authentication, and OAuth2 security",
      "Event-driven message queues (RabbitMQ, Kafka, AWS SQS) for async background tasks",
      "Interactive Swagger UI / OpenAPI 3.0 self-documenting endpoints",
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
    ],
  },
  {
    id: "custom-crm-portals",
    slug: "custom-crm-portals",
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
    ],
  },
  {
    id: "conversion-optimization",
    slug: "conversion-optimization",
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
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug || s.id === slug);
}
