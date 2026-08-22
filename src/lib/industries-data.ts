export interface IndustryDetail {
  slug: string;
  id: string;
  num: string;
  name: string;
  badge: string;
  headline: string;
  summary: string;
  overview: string;
  challenges: {
    problem: string;
    impact: string;
  }[];
  architecturalStack: {
    layer: string;
    tech: string;
    description: string;
  }[];
  deliverables: string[];
  metrics: {
    metric: string;
    label: string;
  }[];
  tags: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const industriesData: IndustryDetail[] = [
  {
    slug: "retail-multibranch",
    id: "retail",
    num: "01",
    name: "Retail & Multi-Branch",
    badge: "POS & Multi-Store",
    headline: "Centralized Multi-Location Retail Engines with Real-Time Stock Telemetry",
    summary: "Centralized Odoo POS, barcode telemetry, and automated stock replenishment across physical store networks.",
    overview:
      "We design and deploy robust multi-branch retail infrastructure connecting high-volume POS terminals, automated warehouse replenishment triggers, and unified customer loyalty across hundreds of physical and digital storefronts.",
    challenges: [
      {
        problem: "Inventory discrepancies across stores and central warehouse.",
        impact: "Overstocking, stockouts, and revenue loss from manual sync lag.",
      },
      {
        problem: "POS latency during peak shopping hours.",
        impact: "Customer queue abandonment and missed sales transactions.",
      },
      {
        problem: "ZATCA Phase 2 compliance & localized fiscal integration.",
        impact: "Regulatory fines and delayed electronic invoicing audits.",
      },
    ],
    architecturalStack: [
      {
        layer: "Point of Sale",
        tech: "Odoo 18 POS + Offline SQLite Engine",
        description: "Zero-downtime offline transaction queuing with instant cloud reconciliation.",
      },
      {
        layer: "Warehouse Telemetry",
        tech: "PostgreSQL + pg_notify + Redis Queue",
        description: "Sub-second barcode scan sync and automated inter-branch transfer triggers.",
      },
      {
        layer: "Compliance & E-Invoice",
        tech: "ZATCA Phase 2 Cryptographic XML Engine",
        description: "Automated cryptographic invoice signing and real-time tax authority reporting.",
      },
    ],
    deliverables: [
      "Custom Odoo 18 Multi-Store POS Configuration",
      "Automated Inter-Branch Stock Replenishment Engine",
      "Centralized Barcode & Inventory Telemetry Dashboard",
      "ZATCA Phase 2 Verified Cryptographic E-Invoicing",
      "Omnichannel Customer Loyalty & Gift Card System",
    ],
    metrics: [
      { metric: "< 250ms", label: "Barcode Scan & POS Checkout Latency" },
      { metric: "99.99%", label: "POS Offline-First Transaction Uptime" },
      { metric: "-42%", label: "Multi-Store Inventory Shrinkage Drop" },
      { metric: "100%", label: "ZATCA Phase 2 Compliant Invoices" },
    ],
    tags: ["Odoo POS", "Barcode Telemetry", "ZATCA Phase 2", "Multi-Store ERP"],
    faqs: [
      {
        question: "How does the POS handle internet outages during store hours?",
        answer: "Our retail POS uses an offline-first indexed caching layer. Cashiers continue processing cash and card receipts without interruption, and the system automatically reconciles ledgers once connectivity is restored.",
      },
      {
        question: "Can this integrate with our existing third-party delivery aggregators?",
        answer: "Yes. We build bi-directional webhook pipelines that inject aggregator orders directly into your kitchen/store POS queue, updating inventory in real time.",
      },
    ],
  },
  {
    slug: "food-beverage",
    id: "fnb",
    num: "02",
    name: "Food & Beverage",
    badge: "Aggregator Sync",
    headline: "Automated Kitchen Telemetry & Real-Time Restaurant Webhook Routing",
    summary: "Automated aggregator webhook routing, live Kitchen Display (KDS), and recipe batch cost ledgers.",
    overview:
      "Engineered for high-throughput cloud kitchens and multi-concept restaurant chains. We consolidate Jahez, HungerStation, and direct online ordering into a single unified kitchen display and automated recipe cost accounting platform.",
    challenges: [
      {
        problem: "Order fragmentation across multiple delivery aggregators and tablets.",
        impact: "Kitchen mistakes, delivery delays, and high tablet hardware clutter.",
      },
      {
        problem: "Volatile raw material costs and untracked recipe portioning.",
        impact: "Uncontrolled food cost variance and eroded restaurant profit margins.",
      },
    ],
    architecturalStack: [
      {
        layer: "Aggregator Hub",
        tech: "FastAPI + Webhook Ingestion Engine",
        description: "Unified normalization of multi-platform orders with automatic kitchen queue routing.",
      },
      {
        layer: "Kitchen Display (KDS)",
        tech: "Next.js 15 WebSockets + Touch Screen UI",
        description: "Color-coded prep stage stations with live ticket timer tracking.",
      },
      {
        layer: "Cost Accounting",
        tech: "Odoo Manufacturing + Automated BOM Ledgers",
        description: "Real-time recipe depletion and ingredient cost margin analytics per ticket.",
      },
    ],
    deliverables: [
      "Unified Delivery Aggregator Webhook Middleware",
      "Interactive Multi-Station Kitchen Display System (KDS)",
      "Automated Recipe BOM & Inventory Depletion Engine",
      "Direct QR Code Table Ordering & Digital Menu PWA",
      "Live Operational Variance & Food Cost Analytics",
    ],
    metrics: [
      { metric: "-68%", label: "Kitchen Ticket Prep Variance" },
      { metric: "< 2.1s", label: "Aggregator-to-KDS Webhook Sync" },
      { metric: "+18%", label: "Average Table Ticket Size Lift" },
      { metric: "100%", label: "Real-Time Recipe Margin Visibility" },
    ],
    tags: ["Webhook Router", "Kitchen Display", "Real-Time Ledger", "Restaurant ERP"],
    faqs: [
      {
        question: "Can we manage different menus across lunch and dinner services?",
        answer: "Yes. Menus, price tiers, and modifier groups can be automated by daypart schedule, location, or delivery channel.",
      },
    ],
  },
  {
    slug: "ecommerce-brands",
    id: "ecommerce",
    num: "03",
    name: "E-Commerce & Scale Brands",
    badge: "Headless Commerce",
    headline: "Sub-Second Headless Storefronts Engineered for High-Volume Checkouts",
    summary: "Sub-second Next.js headless storefronts with 1-click Mada/Stripe checkout and automated dispatch.",
    overview:
      "We replace bloated legacy monoliths with blazing-fast headless Next.js 15 storefronts. Integrated with regional payment rails (Mada, Apple Pay, Tabby, Tamara) and automated ERP fulfillment workflows.",
    challenges: [
      {
        problem: "Slow mobile page load speeds causing high bounce rates.",
        impact: "Lost conversion rate and high cost per customer acquisition.",
      },
      {
        problem: "Cart abandonment on multi-step checkout forms.",
        impact: "Sub-optimal conversion on paid ad campaign traffic.",
      },
    ],
    architecturalStack: [
      {
        layer: "Frontend Storefront",
        tech: "Next.js 15 App Router + Tailwind CSS + Edge ISR",
        description: "Static page generation with instant incremental revalidation on product edits.",
      },
      {
        layer: "Payment & Checkout",
        tech: "Stripe, Mada, Apple Pay, Tabby & Tamara SDKs",
        description: "1-click localized high-conversion checkout flows.",
      },
      {
        layer: "Fulfillment Pipeline",
        tech: "n8n Automation + 3PL Courier APIs",
        description: "Automated airway bill generation, dispatch booking, and SMS tracking notifications.",
      },
    ],
    deliverables: [
      "Custom Next.js Headless E-Commerce Web & PWA",
      "Localized Payment Gateways (Mada, Tabby, Tamara, Stripe)",
      "Automated Courier Dispatch & Real-Time Tracking Bot",
      "Headless CMS for Dynamic Campaign Landing Pages",
      "Conversion Funnel Tracking & GA4 Enhanced E-Commerce",
    ],
    metrics: [
      { metric: "99/100", label: "Google PageSpeed Mobile Score" },
      { metric: "+48%", label: "Average Mobile Checkout Conversion Lift" },
      { metric: "< 350ms", label: "Global Edge Page Response Time" },
      { metric: "0", label: "Manual Airway Bill Entry Errors" },
    ],
    tags: ["Next.js 15", "Stripe & Mada", "Shopify Plus", "Headless Commerce"],
    faqs: [
      {
        question: "Do you support Split Payment / Buy Now Pay Later (BNPL) providers?",
        answer: "Yes, we natively integrate Tabby, Tamara, and standard payment gateways like Mada and Apple Pay with automated ledger reconciliation.",
      },
    ],
  },
  {
    slug: "logistics-fleet",
    id: "logistics",
    num: "04",
    name: "Logistics & Fleet Operations",
    badge: "Real-Time Telemetry",
    headline: "Mission-Critical Dispatcher Portals & GPS Geofenced Fleet Tracking",
    summary: "Custom driver dispatcher mobile apps, live GPS geofencing, and automated shipment tracking notifications.",
    overview:
      "Transforming complex last-mile and line-haul logistics. We engineer high-frequency GPS telemetry maps, route optimization algorithms, and intuitive driver mobile apps that reduce fuel burn and eliminate lost parcels.",
    challenges: [
      {
        problem: "Blind spots in driver location and delivery proof verification.",
        impact: "Customer disputes, late deliveries, and operational bottlenecks.",
      },
      {
        problem: "Manual dispatching and inefficient routing schedules.",
        impact: "Inflated fuel expenditure and reduced deliveries per driver shift.",
      },
    ],
    architecturalStack: [
      {
        layer: "Driver App",
        tech: "Flutter Native 60fps (iOS & Android)",
        description: "Offline barcode scanning, photo signature proof, and turn-by-turn navigation.",
      },
      {
        layer: "Telemetry & Map",
        tech: "Mapbox GL + WebSockets + Redis Pub/Sub",
        description: "Real-time coordinate streaming for thousands of concurrent vehicles.",
      },
      {
        layer: "Dispatch Optimizer",
        tech: "Python OR-Tools Route Solver",
        description: "Automated route clustering based on time windows and parcel volume.",
      },
    ],
    deliverables: [
      "Custom Flutter Driver Mobile App with Signature Proof",
      "Dispatcher Control Tower Web Dashboard with Live Fleet Map",
      "Automated Route Clustering & Optimization Engine",
      "Customer Self-Service Tracking Portal with ETA Alerts",
      "Fleet Maintenance & Fuel Telemetry Logging System",
    ],
    metrics: [
      { metric: "1,200+", label: "Concurrent Vehicles Monitored Live" },
      { metric: "-31%", label: "Fuel Burn via Smart Route Optimization" },
      { metric: "< 500ms", label: "Driver GPS Telemetry Latency" },
      { metric: "99.8%", label: "On-Time Delivery SLA Fulfillment" },
    ],
    tags: ["Flutter Driver App", "Live GPS Geofence", "WhatsApp Bot", "Fleet Telemetry"],
    faqs: [
      {
        question: "Can drivers scan parcels without active cellular connection in remote areas?",
        answer: "Yes. Scanned barcodes and digital signatures are encrypted in local SQLite storage and automatically stream to central dispatch once cell reception is acquired.",
      },
    ],
  },
  {
    slug: "healthcare-clinics",
    id: "healthcare",
    num: "05",
    name: "Healthcare & Specialized Clinics",
    badge: "Patient Portals",
    headline: "HIPAA-Ready Telehealth Systems & Automated Clinical Scheduling",
    summary: "HIPAA-ready patient portal, doctor shift scheduling, and automated WhatsApp appointment reminders.",
    overview:
      "Digital health platforms built for specialized clinics, diagnostic labs, and telehealth providers. Secure Electronic Medical Records (EMR), dynamic doctor scheduling, and automated patient engagement.",
    challenges: [
      {
        problem: "High appointment no-show rates and phone-based booking friction.",
        impact: "Doctor idle time and lost clinic revenue.",
      },
      {
        problem: "Fragmented patient medical history and lab report delivery.",
        impact: "Slow diagnostic follow-ups and compliance vulnerability.",
      },
    ],
    architecturalStack: [
      {
        layer: "Patient Portal",
        tech: "Next.js 15 PWA + WebAuthn Biometrics",
        description: "Zero-friction appointment booking, lab result downloads, and encrypted messaging.",
      },
      {
        layer: "Clinical Ledger",
        tech: "PostgreSQL + AES-256 Column Encryption",
        description: "HIPAA and local health authority compliance with audit log trails.",
      },
      {
        layer: "Engagement Bot",
        tech: "Meta WhatsApp Business Cloud API",
        description: "Automated 24h & 2h appointment confirmations with 1-tap rescheduling.",
      },
    ],
    deliverables: [
      "Custom Patient Web Portal & Digital Health Pass",
      "Doctor Shift Scheduling & Multi-Room Calendar System",
      "Automated WhatsApp Appointment Reminder Engine",
      "Encrypted Medical Records & Lab Report Delivery",
      "Telemedicine Video Consultation Module (WebRTC)",
    ],
    metrics: [
      { metric: "98%", label: "Appointment Confirmation Rate" },
      { metric: "0", label: "Data Exposure Vulnerabilities (AES-256)" },
      { metric: "-74%", label: "Phone Desk Booking Inquiries" },
      { metric: "4.9/5", label: "Patient Booking Satisfaction Score" },
    ],
    tags: ["HIPAA Ready", "Telehealth Portal", "WhatsApp Reminders", "EMR Integration"],
    faqs: [
      {
        question: "How is patient data secured and isolated?",
        answer: "We employ strict tenant isolation, at-rest AES-256 database column encryption, TLS 1.3 in-transit security, and role-based audit logs matching healthcare compliance standards.",
      },
    ],
  },
  {
    slug: "education-academies",
    id: "education",
    num: "06",
    name: "Education & Academies",
    badge: "EdTech & LMS",
    headline: "Unified Student Lifecycle Platforms & Automated Fee Installments",
    summary: "Unified student lifecycle portal with automated fee installments and mobile parent communications.",
    overview:
      "Modern Learning Management Systems (LMS) and student information platforms engineered for private academies, training institutes, and multi-campus schools.",
    challenges: [
      {
        problem: "Manual tuition fee collection and reconciliation bottlenecks.",
        impact: "Cashflow delays and heavy administrative workload.",
      },
    ],
    architecturalStack: [
      {
        layer: "Student / Parent Portal",
        tech: "Next.js 15 + Mobile Responsive UI",
        description: "Attendance records, report cards, and digital fee invoices.",
      },
      {
        layer: "Billing Engine",
        tech: "Stripe Subscriptions + Local Mada Recurring",
        description: "Automated recurring tuition installment plans with reminder SMS.",
      },
      {
        layer: "LMS Core",
        tech: "Node.js + PostgreSQL + AWS S3 CDN",
        description: "High-concurrency video lectures, assignments, and automated grading.",
      },
    ],
    deliverables: [
      "Custom Student & Parent Portal",
      "Automated Tuition Installment & Invoice Reconciliation",
      "Teacher Grading & Attendance Tracking Dashboard",
      "Interactive Video Course Player with Progress Telemetry",
    ],
    metrics: [
      { metric: "+92%", label: "On-Time Tuition Fee Collection" },
      { metric: "< 100ms", label: "Student Gradebook Query Response" },
      { metric: "10K+", label: "Concurrent Video Lecture Streams" },
    ],
    tags: ["LMS Platform", "Automated Billing", "Parent Mobile App", "EdTech"],
    faqs: [
      {
        question: "Can we issue automated PDF certificates on course completion?",
        answer: "Yes. Our platform dynamically generates cryptographically signed PDF certificates with unique verification QR codes.",
      },
    ],
  },
  {
    slug: "real-estate-assets",
    id: "realestate",
    num: "07",
    name: "Real Estate & Asset Management",
    badge: "Property & Lead Hub",
    headline: "Interactive Property Portals & Automated Lead-to-CRM Routing",
    summary: "Searchable property platform with interactive floorplans, 3D tours, and automated CRM lead capture.",
    overview:
      "High-end real estate portals, tenant management platforms, and developer showroom interfaces with dynamic inventory filters, interactive 3D tours, and instant broker lead routing.",
    challenges: [
      {
        problem: "Slow lead follow-up from property portal inquiries.",
        impact: "Lost buyer interest and reduced sales conversions.",
      },
    ],
    architecturalStack: [
      {
        layer: "Search Engine",
        tech: "Next.js 15 + MeiliSearch Vector Index",
        description: "Sub-50ms property search by budget, neighborhood, and amenities.",
      },
      {
        layer: "Interactive Floorplans",
        tech: "Three.js / WebGL + Matterport SDK",
        description: "Immersive 3D virtual walkthroughs directly inside the browser.",
      },
      {
        layer: "CRM Engine",
        tech: "Odoo CRM + n8n Webhook Pipeline",
        description: "Instant WhatsApp lead assignment to regional real estate brokers.",
      },
    ],
    deliverables: [
      "Custom Fast Property Search & Showcase Engine",
      "Interactive 3D Virtual Tour & Floorplan Viewer",
      "Automated Broker Lead Assignment & CRM Sync",
      "Tenant Lease Management & Rent Payment Portal",
    ],
    metrics: [
      { metric: "< 35ms", label: "Property Search Query Latency" },
      { metric: "+55%", label: "Lead-to-Viewing Conversion Rate" },
      { metric: "$120M+", label: "Gross Property Value Showcased" },
    ],
    tags: ["Searchable Engine", "Lead Capture", "Odoo CRM Sync", "PropTech"],
    faqs: [
      {
        question: "Can we bulk import listings from external MLS or syndication feeds?",
        answer: "Yes, we build automated XML/JSON ingest parsers that sync property listings, pricing, and availability daily.",
      },
    ],
  },
  {
    slug: "hospitality-resorts",
    id: "hospitality",
    num: "08",
    name: "Hospitality & Boutique Resorts",
    badge: "Direct Booking",
    headline: "Zero-Commission Direct Booking Engines & Guest Experience Portals",
    summary: "High-converting direct booking engine with guest experience portal and zero OTA commissions.",
    overview:
      "Empowering boutique hotels and luxury resorts to bypass hefty OTA commissions with elegant, lightning-fast direct booking engines, room customization, and digital guest concierge web apps.",
    challenges: [
      {
        problem: "15-25% commission leakage to third-party travel agencies (OTAs).",
        impact: "Severe compression of hotel operating profit margins.",
      },
    ],
    architecturalStack: [
      {
        layer: "Booking Engine",
        tech: "Next.js 15 + Stripe / Mada Gateways",
        description: "Dynamic room rate calendars, promo codes, and multi-currency checkout.",
      },
      {
        layer: "Channel Sync",
        tech: "Two-Way OTA Channel Manager API",
        description: "Real-time calendar synchronization to prevent double bookings.",
      },
      {
        layer: "Guest Concierge",
        tech: "Mobile-First PWA + QR Code Access",
        description: "In-room dining orders, spa booking, and digital key integration.",
      },
    ],
    deliverables: [
      "Custom Ultra-Fast Direct Booking Engine",
      "Two-Way OTA Channel Manager Integration",
      "Digital In-Room Guest Concierge Web App",
      "Automated Pre-Arrival & Post-Stay Email Journeys",
    ],
    metrics: [
      { metric: "+38%", label: "Direct Booking Revenue Share Lift" },
      { metric: "0", label: "OTA Commission on Direct Website Bookings" },
      { metric: "< 1.5s", label: "Full Booking Funnel Completion Time" },
    ],
    tags: ["Direct Booking", "Channel Manager", "Guest Web App", "Hospitality"],
    faqs: [
      {
        question: "Does the system sync with our existing Property Management System (PMS)?",
        answer: "Yes, we integrate with major PMS solutions (Opera, Cloudbeds, Sirvoy, Odoo PMS) via robust REST APIs.",
      },
    ],
  },
  {
    slug: "travel-tours",
    id: "travel",
    num: "09",
    name: "Travel & Custom Tours",
    badge: "Dynamic Itineraries",
    headline: "Dynamic Visual Tour Itinerary Builders & Supplier API Feeds",
    summary: "Dynamic visual itinerary builder integrated with live supplier flight and hotel API feeds.",
    overview:
      "Bespoke travel platforms for tour operators, DMC agencies, and customized travel planners with live pricing aggregation and visual drag-and-drop itinerary builders.",
    challenges: [
      {
        problem: "Slow manual quote turnaround for custom multi-city tour packages.",
        impact: "Customer booking drop-off to faster automated competitors.",
      },
    ],
    architecturalStack: [
      {
        layer: "Itinerary Studio",
        tech: "React 19 + Drag-and-Drop Canvas",
        description: "Visual day-by-day travel timeline with interactive map routes.",
      },
      {
        layer: "Supplier GDS API",
        tech: "Amadeus / HotelBeds / Sabre APIs",
        description: "Real-time flight and accommodation rates dynamically bundled.",
      },
    ],
    deliverables: [
      "Dynamic Tour Package & Itinerary Builder",
      "Global Supplier GDS Live API Integration",
      "Instant PDF Travel Voucher & Itinerary Generator",
    ],
    metrics: [
      { metric: "-80%", label: "Custom Itinerary Quote Generation Time" },
      { metric: "100%", label: "Live Supplier Rate Accuracy" },
    ],
    tags: ["Supplier APIs", "Itinerary Builder", "Dynamic Pricing", "Travel Tech"],
    faqs: [
      {
        question: "Can customers share dynamic visual itineraries with travel companions?",
        answer: "Yes, each itinerary generates an interactive private link with responsive mobile view and group booking support.",
      },
    ],
  },
  {
    slug: "manufacturing-plants",
    id: "manufacturing",
    num: "10",
    name: "Manufacturing Plants & Industrial",
    badge: "Shop Floor IoT",
    headline: "Shop Floor Telemetry, Automated Work Orders & Odoo MRP",
    summary: "IoT sensor telemetry dashboard, automated shop floor work orders, and predictive maintenance alerts.",
    overview:
      "Digital shop-floor execution systems (MES) and MRP ERP implementations connecting industrial machinery telemetry to real-time production ledgers and inventory replenishment.",
    challenges: [
      {
        problem: "Unplanned machine downtime and untracked scrap rate variance.",
        impact: "Missed production schedules and high maintenance costs.",
      },
    ],
    architecturalStack: [
      {
        layer: "Industrial IoT",
        tech: "MQTT + Node-RED + TimescaleDB",
        description: "High-frequency machine temperature, vibration, and RPM telemetry.",
      },
      {
        layer: "Shop Floor MES",
        tech: "Odoo 18 Manufacturing (MRP) + Tablet Work Centers",
        description: "Digital work order tracking and live operator efficiency metrics.",
      },
    ],
    deliverables: [
      "Custom Odoo 18 Manufacturing & MRP Implementation",
      "Real-Time Machine Telemetry & OEE Dashboard",
      "Predictive Maintenance Alert Engine via Telegram/SMS",
      "Automated Raw Material Stock Replenishment Triggers",
    ],
    metrics: [
      { metric: "-35%", label: "Unplanned Equipment Downtime" },
      { metric: "+22%", label: "Overall Equipment Effectiveness (OEE)" },
      { metric: "100%", label: "Batch Traceability Audit Compliance" },
    ],
    tags: ["IoT Telemetry", "Odoo MRP", "Automated Work Orders", "Manufacturing"],
    faqs: [
      {
        question: "Can this connect to legacy PLC controllers on our factory line?",
        answer: "Yes. Using industrial edge gateways (Modbus / OPC UA / MQTT), we ingest real-time cycle signals from both modern and legacy equipment.",
      },
    ],
  },
  {
    slug: "professional-services",
    id: "proservices",
    num: "11",
    name: "Professional Services & Agencies",
    badge: "Agency Operations",
    headline: "Automated Client Invoicing, Resource Scheduling & Margin Telemetry",
    summary: "Automated timesheet telemetry, client milestone invoicing, and real-time project margin analytics.",
    overview:
      "Operational backbones for consulting firms, law offices, and creative agencies. Centralized project billing, automated milestone triggers, and real-time project profitability dashboards.",
    challenges: [
      {
        problem: "Revenue leakage from unbilled hours and delayed milestone invoicing.",
        impact: "Depressed agency operating margins and late client payments.",
      },
    ],
    architecturalStack: [
      {
        layer: "Agency CRM & PM",
        tech: "Odoo Project + Next.js Client Portal",
        description: "Transparent milestone approvals, timesheets, and deliverable sign-offs.",
      },
      {
        layer: "Automated Billing",
        tech: "Stripe Invoicing + ZATCA Phase 2 E-Invoice",
        description: "Milestone-triggered invoice generation with automated reminders.",
      },
    ],
    deliverables: [
      "Custom Client Project & Invoicing Portal",
      "Timesheet Tracking & Resource Utilization Dashboard",
      "Automated Milestone Invoicing & Payment Collection",
    ],
    metrics: [
      { metric: "+19%", label: "Agency Net Operating Margin Recovery" },
      { metric: "-85%", label: "Time Spent on Manual Invoicing & Follow-up" },
    ],
    tags: ["Timesheet Tracking", "Milestone Billing", "Margin Analytics", "Agency ERP"],
    faqs: [
      {
        question: "Can clients view project progress and approve deliverables online?",
        answer: "Yes, clients receive a dedicated branded portal to review milestones, sign off on deliverables, and settle invoices directly.",
      },
    ],
  },
  {
    slug: "venture-startups",
    id: "startups",
    num: "12",
    name: "Venture Startups & Scaleups",
    badge: "4-Week MVP Sprint",
    headline: "Rapid 4-Week Production MVP Sprints Built on Scalable TypeScript",
    summary: "Rapid 4-week production MVP sprint with modular TypeScript codebase ready for venture scale.",
    overview:
      "For venture-backed founders who need to move fast without accumulating technical debt. We engineer clean, modular TypeScript + Next.js + PostgreSQL architectures ready for seed and Series A due diligence.",
    challenges: [
      {
        problem: "Slow development cycles and messy outsourced prototype code.",
        impact: "Burned runway and failed technical investor due diligence.",
      },
    ],
    architecturalStack: [
      {
        layer: "Application Core",
        tech: "Next.js 15 + TypeScript + Tailwind CSS",
        description: "Clean modular repository with strict type safety and linting standards.",
      },
      {
        layer: "Database & Auth",
        tech: "PostgreSQL + Prisma ORM + Supabase / Auth0",
        description: "Enterprise-grade database with automated migrations and secure JWT auth.",
      },
      {
        layer: "Infrastructure",
        tech: "Vercel + AWS RDS + GitHub Actions CI/CD",
        description: "Production pipeline with automated preview deploys and unit test suites.",
      },
    ],
    deliverables: [
      "Complete Production-Grade MVP in 4 Weeks",
      "100% Client-Owned Git Repository & Architecture Blueprint",
      "Automated CI/CD Pipeline & Staging Environments",
      "Investor Technical Pitch Deck & Due Diligence Packet",
    ],
    metrics: [
      { metric: "4 Weeks", label: "From Kickoff to Live Production Launch" },
      { metric: "100%", label: "Codebase Ownership Transferred to Founder" },
      { metric: "$18M+", label: "Venture Capital Raised by Client Startups" },
    ],
    tags: ["4-Week MVP Sprint", "TypeScript Stack", "Next.js + Postgres", "Venture Scale"],
    faqs: [
      {
        question: "Who owns the code and intellectual property upon completion?",
        answer: "You own 100% of the repository, accounts, and intellectual property. We hand over the complete codebase on day one.",
      },
    ],
  },
];

export const industrySlugAliases: Record<string, string> = {
  retail: "retail-multibranch",
  fnb: "food-beverage",
  ecommerce: "ecommerce-brands",
  logistics: "logistics-fleet",
  healthcare: "healthcare-clinics",
  education: "education-academies",
  realestate: "real-estate-assets",
  hospitality: "hospitality-resorts",
  travel: "travel-tours",
  manufacturing: "manufacturing-plants",
  proservices: "professional-services",
  startups: "venture-startups",
};

export function getIndustryBySlug(slug: string): IndustryDetail | undefined {
  const normalized = industrySlugAliases[slug] || slug;
  return industriesData.find((ind) => ind.slug === normalized || ind.id === slug);
}
