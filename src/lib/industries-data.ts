export interface IndustryDetail {
  slug: string;
  id: string;
  num: string;
  name: string;
  badge: string;
  category: string;
  headline: string;
  summary: string;
  overview: string;
  operationalContext: string[];
  challenges: {
    problem: string;
    impact: string;
    resolution: string;
  }[];
  architecturalStack: {
    layer: string;
    tech: string;
    description: string;
    capabilities: string[];
  }[];
  implementationStages: {
    stage: string;
    duration: string;
    title: string;
    details: string;
  }[];
  complianceAndSecurity: {
    standard: string;
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
    category: "Commerce & Retail",
    headline: "High-Throughput Multi-Location Retail Architecture & Real-Time Stock Telemetry",
    summary: "Centralized Odoo POS, barcode telemetry, and automated stock replenishment across physical store networks.",
    overview:
      "We design and deploy robust multi-branch retail infrastructure connecting high-volume POS terminals, automated warehouse replenishment triggers, and unified customer loyalty across hundreds of physical and digital storefronts.",
    operationalContext: [
      "Modern multi-branch retail requires instantaneous bi-directional synchronization between physical cash registers, central distribution warehouses, and localized e-commerce nodes.",
      "Our architecture isolates individual store POS nodes with local SQLite caching so checkout continues uninterrupted during internet outages, synchronizing fiscal journals and inventory ledgers the moment connectivity returns.",
      "Integrated with regional e-invoicing mandates (including Saudi Arabia ZATCA Phase 2 clearance) to guarantee zero compliance risk during high-volume sales seasons.",
    ],
    challenges: [
      {
        problem: "Inventory discrepancies across stores and central warehouse.",
        impact: "Overstocking, stockouts, and revenue loss from manual sync lag.",
        resolution: "Event-driven inventory ledgers using PostgreSQL `pg_notify` and Redis streams for sub-second barcode scan reconciliation.",
      },
      {
        problem: "POS cashier latency and queue abandonment during peak traffic.",
        impact: "Customer queue abandonment, lost sales, and cashier operational friction.",
        resolution: "Offline-first indexed local caching with sub-250ms barcode lookup and asynchronous transaction clearance.",
      },
      {
        problem: "ZATCA Phase 2 compliance & localized fiscal tax integration.",
        impact: "Regulatory penalties, audit delays, and potential store operational suspension.",
        resolution: "Embedded ECDSA cryptographic signing engine generating UBL 2.1 XML invoices with automated Fatoora API clearance.",
      },
    ],
    architecturalStack: [
      {
        layer: "Point of Sale (POS)",
        tech: "Odoo 18 POS + Offline Indexed SQLite Engine",
        description: "Zero-downtime offline transaction queuing with instant cloud reconciliation.",
        capabilities: ["Offline receipt signing", "Barcode gun telemetry", "Multi-drawer cash tracking", "1-click split payments"],
      },
      {
        layer: "Warehouse & ERP",
        tech: "PostgreSQL 16 + Redis Queue + Odoo Inventory",
        description: "Sub-second barcode scan sync and automated inter-branch transfer triggers.",
        capabilities: ["Min-max safety stock triggers", "Automated purchase orders", "Batch barcode printing", "Bin location routing"],
      },
      {
        layer: "Fiscal Compliance",
        tech: "ZATCA Phase 2 Cryptographic XML Engine",
        description: "Automated cryptographic invoice signing and real-time tax authority reporting.",
        capabilities: ["ECDSA secp256k1 signing", "Cryptographic stamp QR codes", "Sequential hash chaining", "Real-time Fatoora sync"],
      },
      {
        layer: "Omnichannel Bridge",
        tech: "FastAPI + Webhook Hub + Next.js 15 PWA",
        description: "Unified customer account, loyalty points, and digital receipts across online and offline touchpoints.",
        capabilities: ["Cross-branch loyalty balances", "SMS/WhatsApp digital receipts", "Click-and-collect inventory reservation"],
      },
    ],
    implementationStages: [
      {
        stage: "Stage 01",
        duration: "Week 1 - 2",
        title: "Operational Blueprint & SKUs Audit",
        details: "Audit store workflows, catalog hierarchy, barcode standards, and tax registration requirements.",
      },
      {
        stage: "Stage 02",
        duration: "Week 3 - 4",
        title: "ERP & POS Environment Architecture",
        details: "Deploy isolated Odoo 18 staging environment, configure POS terminals, and build custom fiscal modules.",
      },
      {
        stage: "Stage 03",
        duration: "Week 5 - 6",
        title: "Telemetry & E-Invoice Clearance Testing",
        details: "Simulate high-concurrency 10,000 transaction test runs and verify ZATCA Phase 2 cryptographic XML clearance.",
      },
      {
        stage: "Stage 04",
        duration: "Week 7",
        title: "Pilot Store Deployment & Parallel Run",
        details: "Roll out to primary flagship branch with parallel ledger reconciliation and cashier staff training.",
      },
      {
        stage: "Stage 05",
        duration: "Week 8+",
        title: "Full Branch Network Cutover & 24/7 SLA",
        details: "Full production rollout across all store locations with real-time telemetry monitoring and 24/7 SLA.",
      },
    ],
    complianceAndSecurity: [
      { standard: "ZATCA Phase 2 Mandate", description: "Cryptographically compliant UBL 2.1 electronic invoices with sequential hashing." },
      { standard: "PCI-DSS Level 1 Standards", description: "End-to-end payment card tokenization with zero plain-text card data storage." },
      { standard: "Role-Based Access Control (RBAC)", description: "Strict cashier, manager, and auditor permission matrices with full ledger change logs." },
    ],
    deliverables: [
      "Custom Odoo 18 Multi-Store POS Configuration & Terminal Setup",
      "Automated Inter-Branch Stock Replenishment & Safety Threshold Engine",
      "Centralized Barcode Telemetry & Multi-Store Inventory Dashboard",
      "ZATCA Phase 2 Certified Cryptographic E-Invoicing Integration",
      "Omnichannel Customer Loyalty, Gift Card & Digital Receipt System",
      "Offline-Resilient Local Caching Layer with Auto-Reconciliation",
    ],
    metrics: [
      { metric: "< 250ms", label: "Barcode Scan & POS Checkout Latency" },
      { metric: "99.99%", label: "POS Offline-First Transaction Uptime" },
      { metric: "-42%", label: "Multi-Store Inventory Shrinkage Drop" },
      { metric: "100%", label: "ZATCA Phase 2 Compliant Invoices" },
    ],
    tags: ["Odoo POS", "Barcode Telemetry", "ZATCA Phase 2", "Multi-Store ERP", "Retail Tech"],
    faqs: [
      {
        question: "How does the POS handle internet outages during high-traffic store hours?",
        answer: "Our retail POS utilizes an offline-first indexed caching layer. Cashiers continue processing cash, card, and barcode transactions without interruption. The system assigns local cryptographically validated sequence numbers and automatically reconciles financial ledgers once connectivity is restored.",
      },
      {
        question: "Can this integrate with our third-party delivery and e-commerce aggregators?",
        answer: "Yes. We build bi-directional webhook pipelines that ingest orders directly into your store POS queue, updating inventory across all branches in real time and notifying kitchen or fulfillment staff instantly.",
      },
      {
        question: "How is employee fraud and drawer discrepancies prevented?",
        answer: "Every POS terminal tracks cashier shifts with mandatory blind cash drawer counts, biometric or RFID badge sign-in, and instant manager override logging for price adjustments or item voids.",
      },
    ],
  },
  {
    slug: "food-beverage",
    id: "fnb",
    num: "02",
    name: "Food & Beverage",
    badge: "Aggregator Sync",
    category: "Hospitality & Dining",
    headline: "Automated Kitchen Telemetry & Real-Time Restaurant Webhook Routing",
    summary: "Automated aggregator webhook routing, live Kitchen Display (KDS), and recipe batch cost ledgers.",
    overview:
      "Engineered for high-throughput cloud kitchens, franchise restaurants, and multi-concept hospitality groups. We consolidate delivery aggregators, QR table orders, and drive-thru queues into a single high-performance kitchen display system with automated recipe inventory depletion.",
    operationalContext: [
      "In modern food service, multiple food delivery tablets create kitchen chaos, incorrect orders, and inventory reporting lag.",
      "Devolopy builds a unified ingestion engine that parses orders from Jahez, HungerStation, Deliveroo, Talabat, and direct QR menus into standardized kitchen tickets with real-time station routing.",
      "Every prepared dish automatically depletes raw ingredient inventories down to the gram, giving operations leaders real-time recipe gross margin visibility.",
    ],
    challenges: [
      {
        problem: "Order fragmentation across multiple delivery aggregators and hardware tablets.",
        impact: "Kitchen ticket bottlenecks, incorrect meal prep, and high tablet hardware clutter.",
        resolution: "Unified FastAPI webhook middleware normalizing all third-party aggregators into a single digital KDS stream.",
      },
      {
        problem: "Volatile raw ingredient costs and unmeasured recipe portioning.",
        impact: "Uncontrolled food cost variance and eroded restaurant profit margins.",
        resolution: "Automated Bill of Materials (BOM) linked to POS order events with live ingredient cost depletion tracking.",
      },
    ],
    architecturalStack: [
      {
        layer: "Aggregator Ingestion Hub",
        tech: "FastAPI + Webhook Queue + Redis Pub/Sub",
        description: "Unified normalization of multi-platform orders with automatic kitchen queue routing.",
        capabilities: ["Sub-2s order normalization", "Automatic 86-item auto-sync", "Delivery rider ETA tracking", "Dynamic prep time pacing"],
      },
      {
        layer: "Kitchen Display (KDS)",
        tech: "Next.js 15 WebSockets + Touch Screen PWA",
        description: "Multi-station touch displays for cold prep, grill, fry, and dispatch packaging.",
        capabilities: ["Color-coded timer warnings", "Order item recall", "Station load balancing", "Audible ticket alerts"],
      },
      {
        layer: "Inventory & Recipe BOM",
        tech: "Odoo 18 Manufacturing & Inventory Ledgers",
        description: "Real-time recipe depletion and ingredient cost margin analytics per ticket.",
        capabilities: ["Gram-level ingredient tracking", "Batch production ledgers", "Supplier cost tracking", "Waste log auditing"],
      },
    ],
    implementationStages: [
      {
        stage: "Stage 01",
        duration: "Week 1 - 2",
        title: "Recipe Costing & Menu Taxonomy",
        details: "Digitize recipe BOMs, modifier matrices, and station routing workflows across kitchen lines.",
      },
      {
        stage: "Stage 02",
        duration: "Week 3 - 4",
        title: "Aggregator Webhook & KDS Engine Setup",
        details: "Configure aggregator developer credentials, build webhook normalization, and deploy KDS screens.",
      },
      {
        stage: "Stage 03",
        duration: "Week 5",
        title: "Kitchen Simulation & Stress Testing",
        details: "Simulate peak rush-hour volumes with 500 concurrent tickets and verify station latency.",
      },
      {
        stage: "Stage 04",
        duration: "Week 6+",
        title: "Live Service Launch & SLA Support",
        details: "Live service cutover with on-site engineering standby and 24/7 continuous operations support.",
      },
    ],
    complianceAndSecurity: [
      { standard: "Municipal Food Safety & HACCP", description: "Digital temperature telemetry and ingredient expiration tracking." },
      { standard: "Tax & Fiscal Receipts", description: "Compliant itemized customer receipts with localized tax breakdown and QR stamps." },
    ],
    deliverables: [
      "Unified Delivery Aggregator Webhook Middleware (Jahez, HungerStation, Talabat)",
      "Interactive Multi-Station Kitchen Display System (KDS)",
      "Automated Recipe BOM & Inventory Depletion Engine",
      "Direct QR Code Table Ordering & Digital Menu PWA",
      "Real-Time Food Cost Variance & Recipe Profitability Analytics",
    ],
    metrics: [
      { metric: "-68%", label: "Kitchen Ticket Prep Variance" },
      { metric: "< 2.1s", label: "Aggregator-to-KDS Webhook Sync" },
      { metric: "+18%", label: "Average Table Ticket Size Lift" },
      { metric: "100%", label: "Real-Time Recipe Margin Visibility" },
    ],
    tags: ["Webhook Router", "Kitchen Display", "Real-Time Ledger", "Restaurant ERP", "Cloud Kitchen"],
    faqs: [
      {
        question: "How quickly can we 86 (mark out of stock) an ingredient across all aggregator platforms?",
        answer: "With 1 tap on the kitchen manager portal, the item is instantly marked unavailable across your direct QR menu, Jahez, HungerStation, and Deliveroo within seconds.",
      },
      {
        question: "Can we support customized combo menus and complex modifiers?",
        answer: "Yes, our modifier schema supports nested choices, required minimum selections, dynamic upcharge pricing, and station-specific routing (e.g. beverage modifiers routing to the barista station).",
      },
    ],
  },
  {
    slug: "ecommerce-brands",
    id: "ecommerce",
    num: "03",
    name: "E-Commerce & Scale Brands",
    badge: "Headless Commerce",
    category: "Commerce & Retail",
    headline: "Sub-Second Headless Storefronts Engineered for High-Volume Checkouts",
    summary: "Sub-second Next.js headless storefronts with 1-click Mada/Stripe checkout and automated dispatch.",
    overview:
      "We replace bloated legacy monoliths with blazing-fast headless Next.js 15 storefronts. Integrated with regional payment rails (Mada, Apple Pay, Tabby, Tamara) and automated ERP fulfillment workflows.",
    operationalContext: [
      "Every 100ms of checkout latency costs e-commerce brands up to 7% in lost sales conversion.",
      "Devolopy engineers edge-rendered Next.js 15 storefronts with instantaneous page transitions, localized split-payment gateways, and automated warehouse dispatch pipelines.",
    ],
    challenges: [
      {
        problem: "Slow mobile page load speeds causing high bounce rates.",
        impact: "Lost conversion rate and high cost per customer acquisition.",
        resolution: "Static Edge ISR with partial prerendering and sub-350ms global content delivery.",
      },
      {
        problem: "Cart abandonment on multi-step checkout forms.",
        impact: "Sub-optimal conversion on paid ad campaign traffic.",
        resolution: "1-click native Apple Pay, Mada, and BNPL checkout with zero redundant form inputs.",
      },
    ],
    architecturalStack: [
      {
        layer: "Frontend Storefront",
        tech: "Next.js 15 App Router + Tailwind CSS + Edge ISR",
        description: "Static page generation with instant incremental revalidation on product edits.",
        capabilities: ["Sub-350ms Edge LCP", "Dynamic bundle splitting", "Instant product search", "PWA offline browsing"],
      },
      {
        layer: "Payment & Checkout",
        tech: "Stripe, Mada, Apple Pay, Tabby & Tamara SDKs",
        description: "1-click localized high-conversion checkout flows.",
        capabilities: ["Direct Apple Pay tokenization", "Tabby/Tamara BNPL widgets", "Auto-reconciled payouts", "Fraud shield velocity checks"],
      },
      {
        layer: "Fulfillment Pipeline",
        tech: "n8n Automation + 3PL Courier APIs + Odoo ERP",
        description: "Automated airway bill generation, dispatch booking, and SMS tracking notifications.",
        capabilities: ["Instant Airway Bill (AWB) generation", "Multi-courier rate shopping", "Automated SMS/WhatsApp tracking bot"],
      },
    ],
    implementationStages: [
      {
        stage: "Stage 01",
        duration: "Week 1 - 2",
        title: "Product Taxonomy & UI/UX Design System",
        details: "Craft bespoke high-conversion mobile UI in Figma with customized design tokens and checkout wireframes.",
      },
      {
        stage: "Stage 02",
        duration: "Week 3 - 4",
        title: "Headless Next.js 15 Architecture Build",
        details: "Build edge storefront, integrate headless catalog CMS, and implement localized payment SDKs.",
      },
      {
        stage: "Stage 03",
        duration: "Week 5",
        title: "Fulfillment & Courier Automation",
        details: "Connect 3PL couriers, automated SMS tracking notifications, and ERP stock sync.",
      },
      {
        stage: "Stage 04",
        duration: "Week 6+",
        title: "Conversion Optimization & Launch",
        details: "Run A/B checkout experiments, GA4 enhanced e-commerce telemetry, and live traffic scaling.",
      },
    ],
    complianceAndSecurity: [
      { standard: "PCI-DSS Level 1 Gateway", description: "Direct client-side tokenization with no credit card data passing through application servers." },
      { standard: "GDPR / Regional Data Residency", description: "Encrypted customer database with full personal data export and deletion workflows." },
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
    tags: ["Next.js 15", "Stripe & Mada", "Shopify Plus", "Headless Commerce", "E-Commerce Architecture"],
    faqs: [
      {
        question: "Can we integrate with our existing ERP for inventory sync?",
        answer: "Yes, we connect Next.js headless storefronts directly to Odoo, SAP, or Microsoft Dynamics with bi-directional stock webhooks.",
      },
    ],
  },
  {
    slug: "logistics-fleet",
    id: "logistics",
    num: "04",
    name: "Logistics & Fleet Operations",
    badge: "Real-Time Telemetry",
    category: "Supply Chain & Logistics",
    headline: "Mission-Critical Dispatcher Portals & GPS Geofenced Fleet Tracking",
    summary: "Custom driver dispatcher mobile apps, live GPS geofencing, and automated shipment tracking notifications.",
    overview:
      "Transforming complex last-mile and line-haul logistics. We engineer high-frequency GPS telemetry maps, route optimization algorithms, and intuitive driver mobile apps that reduce fuel burn and eliminate lost parcels.",
    operationalContext: [
      "Fleet operations require zero-blind-spot visibility over vehicle coordinates, fuel consumption, driver behavior, and instant proof of delivery.",
      "We engineer custom native mobile apps and WebGL dispatcher map consoles handling thousands of concurrent telemetry streams with sub-second update intervals.",
    ],
    challenges: [
      {
        problem: "Blind spots in driver location and delivery proof verification.",
        impact: "Customer disputes, late deliveries, and operational bottlenecks.",
        resolution: "Native Flutter driver app with offline signature capture, photo proof, and continuous GPS coordinate streaming.",
      },
      {
        problem: "Manual dispatching and inefficient routing schedules.",
        impact: "Inflated fuel expenditure and reduced deliveries per driver shift.",
        resolution: "Automated route optimization engine utilizing Python OR-Tools and dynamic time-window clustering.",
      },
    ],
    architecturalStack: [
      {
        layer: "Driver Mobile App",
        tech: "Flutter Native 60fps (iOS & Android)",
        description: "Offline barcode scanning, photo signature proof, and turn-by-turn navigation.",
        capabilities: ["Offline SQLite persistence", "Camera barcode laser scanner", "Digital signature canvas", "Voice-guided navigation"],
      },
      {
        layer: "Telemetry & Map Engine",
        tech: "Mapbox GL + WebSockets + Redis Pub/Sub",
        description: "Real-time coordinate streaming for thousands of concurrent vehicles.",
        capabilities: ["Sub-500ms vehicle refresh", "Geofence entry/exit alerts", "Speeding telemetry", "Historical breadcrumb replay"],
      },
      {
        layer: "Dispatch Optimization",
        tech: "Python OR-Tools + FastRoute Solver",
        description: "Automated route clustering based on time windows and parcel volume.",
        capabilities: ["Vehicle capacity constraints", "Time window scheduling", "Traffic-aware route solving"],
      },
    ],
    implementationStages: [
      {
        stage: "Stage 01",
        duration: "Week 1 - 2",
        title: "Fleet Workflows & Telemetry Mapping",
        details: "Analyze driver shifts, vehicle classes, hub sorting procedures, and customer notification SLA requirements.",
      },
      {
        stage: "Stage 02",
        duration: "Week 3 - 4",
        title: "Flutter Driver App & Mapbox Dispatch Build",
        details: "Develop native mobile app and real-time dispatcher command tower with WebSocket streaming.",
      },
      {
        stage: "Stage 03",
        duration: "Week 5",
        title: "Route Optimization Engine Calibration",
        details: "Calibrate route clustering solver with historical road speed data and geofence boundary rules.",
      },
      {
        stage: "Stage 04",
        duration: "Week 6+",
        title: "Fleet Rollout & Driver Onboarding",
        details: "Deploy app across driver fleet with on-device diagnostics and 24/7 telemetry monitoring.",
      },
    ],
    complianceAndSecurity: [
      { standard: "Transport Authority Telemetry (Wasl / Local Regulators)", description: "Direct regulatory API integration for mandatory commercial fleet telemetry transmission." },
      { standard: "Data Encryption & Privacy", description: "Encrypted location logs and pseudonymized customer delivery recipient contact info." },
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
    tags: ["Flutter Driver App", "Live GPS Geofence", "WhatsApp Bot", "Fleet Telemetry", "Logistics Tech"],
    faqs: [
      {
        question: "Can drivers scan parcels without active cellular connection in remote areas?",
        answer: "Yes. Scanned barcodes, photos, and digital signatures are encrypted in local SQLite storage and automatically stream to central dispatch once cell reception is acquired.",
      },
    ],
  },
  {
    slug: "healthcare-clinics",
    id: "healthcare",
    num: "05",
    name: "Healthcare & Specialized Clinics",
    badge: "Patient Portals",
    category: "Healthcare & Regulated",
    headline: "HIPAA-Ready Telehealth Systems & Automated Clinical Scheduling",
    summary: "HIPAA-ready patient portal, doctor shift scheduling, and automated WhatsApp appointment reminders.",
    overview:
      "Digital health platforms built for specialized clinics, diagnostic labs, and telehealth providers. Secure Electronic Medical Records (EMR), dynamic doctor scheduling, and automated patient engagement.",
    operationalContext: [
      "Medical clinics lose substantial revenue from patient no-shows and face severe regulatory liabilities if medical data is improperly handled.",
      "Devolopy builds end-to-end encrypted telehealth portals, automated WhatsApp appointment confirmations, and compliant EMR integrations.",
    ],
    challenges: [
      {
        problem: "High appointment no-show rates and phone-based booking friction.",
        impact: "Doctor idle time and lost clinic revenue.",
        resolution: "Automated multi-channel WhatsApp booking reminders with 1-tap confirmation and dynamic waitlist backfills.",
      },
      {
        problem: "Fragmented patient medical history and lab report delivery.",
        impact: "Slow diagnostic follow-ups and compliance vulnerability.",
        resolution: "Encrypted patient portal with instant lab report delivery and role-based doctor access logs.",
      },
    ],
    architecturalStack: [
      {
        layer: "Patient Experience Portal",
        tech: "Next.js 15 PWA + WebAuthn Biometrics",
        description: "Zero-friction appointment booking, lab result downloads, and encrypted messaging.",
        capabilities: ["Biometric 1-tap sign-in", "Lab report PDF viewer", "Prescription renewal requests", "Integrated telemedicine video"],
      },
      {
        layer: "Clinical Data Core",
        tech: "PostgreSQL + AES-256 Column Encryption",
        description: "HIPAA and local health authority compliance with audit log trails.",
        capabilities: ["At-rest column encryption", "Immutable audit trails", "Doctor shift calendar sync", "E-prescribing integration"],
      },
      {
        layer: "Automated Communication",
        tech: "Meta WhatsApp Cloud API + SMS Gateway",
        description: "Automated 24h & 2h appointment confirmations with 1-tap rescheduling.",
        capabilities: ["Interactive WhatsApp buttons", "Automated pre-consultation medical questionnaires", "Post-visit care follow-ups"],
      },
    ],
    implementationStages: [
      {
        stage: "Stage 01",
        duration: "Week 1 - 2",
        title: "Clinical Workflow & Compliance Audit",
        details: "Define medical specialty workflows, appointment types, doctor room calendars, and data governance standards.",
      },
      {
        stage: "Stage 02",
        duration: "Week 3 - 4",
        title: "Encrypted EMR & Scheduling Architecture",
        details: "Deploy encrypted PostgreSQL schema, doctor scheduling matrix, and patient portal frontend.",
      },
      {
        stage: "Stage 03",
        duration: "Week 5",
        title: "WhatsApp Bot & Telehealth Video Module",
        details: "Integrate Meta WhatsApp Business API and WebRTC encrypted video consultation module.",
      },
      {
        stage: "Stage 04",
        duration: "Week 6+",
        title: "Clinical Staff Training & Production Launch",
        details: "Staff onboarding, pilot patient bookings, and 24/7 security monitoring.",
      },
    ],
    complianceAndSecurity: [
      { standard: "HIPAA / Local Health Authority Compliance", description: "Encrypted data transmission, strict data retention rules, and medical record audit logging." },
      { standard: "AES-256 & TLS 1.3 Encryption", description: "All patient identifiable health information is encrypted at rest and in transit." },
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
    tags: ["HIPAA Ready", "Telehealth Portal", "WhatsApp Reminders", "EMR Integration", "HealthTech"],
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
    category: "EdTech & Academies",
    headline: "Unified Student Lifecycle Platforms & Automated Fee Installments",
    summary: "Unified student lifecycle portal with automated fee installments and mobile parent communications.",
    overview:
      "Modern Learning Management Systems (LMS) and student information platforms engineered for private academies, training institutes, and multi-campus schools.",
    operationalContext: [
      "Educational institutions struggle with fragmented student databases, manual tuition fee chasing, and disconnected parent communication channels.",
      "Devolopy unifies admissions, live attendance tracking, automated tuition installment debiting, and digital gradebooks into a single secure platform.",
    ],
    challenges: [
      {
        problem: "Manual tuition fee collection and reconciliation bottlenecks.",
        impact: "Cashflow delays and heavy administrative workload.",
        resolution: "Automated recurring tuition installment plans with reminder SMS and instant payment receipts.",
      },
    ],
    architecturalStack: [
      {
        layer: "Student / Parent Portal",
        tech: "Next.js 15 + Mobile Responsive UI",
        description: "Attendance records, report cards, and digital fee invoices.",
        capabilities: ["Digital report cards", "Fee installment breakdown", "Direct teacher messaging"],
      },
      {
        layer: "Billing Engine",
        tech: "Stripe Subscriptions + Local Mada Recurring",
        description: "Automated recurring tuition installment plans with reminder SMS.",
        capabilities: ["Split family payment plans", "Auto-reconciled bank ledger", "Scholarship discount rules"],
      },
    ],
    implementationStages: [
      {
        stage: "Stage 01",
        duration: "Week 1 - 2",
        title: "Academic Curriculum & Fee Structure Mapping",
        details: "Define grade levels, course modules, fee schedules, and teacher assignment rosters.",
      },
      {
        stage: "Stage 02",
        duration: "Week 3 - 4",
        title: "LMS Portal & Billing Architecture Build",
        details: "Develop student portal, gradebook calculation engine, and automated tuition payment rails.",
      },
    ],
    complianceAndSecurity: [
      { standard: "Student Privacy & COPPA Compliance", description: "Strict isolation of student personal identifiable information with parent guardian consent logs." },
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
    category: "PropTech & Real Estate",
    headline: "Interactive Property Portals & Automated Lead-to-CRM Routing",
    summary: "Searchable property platform with interactive floorplans, 3D tours, and automated CRM lead capture.",
    overview:
      "High-end real estate portals, tenant management platforms, and developer showroom interfaces with dynamic inventory filters, interactive 3D tours, and instant broker lead routing.",
    operationalContext: [
      "Real estate brokerages and asset managers need lightning-fast property search with immersive media and instant broker lead distribution to capture high-value buyer intent.",
    ],
    challenges: [
      {
        problem: "Slow lead follow-up from property portal inquiries.",
        impact: "Lost buyer interest and reduced sales conversions.",
        resolution: "Instant WhatsApp and CRM lead assignment to nearest regional property broker within 30 seconds.",
      },
    ],
    architecturalStack: [
      {
        layer: "Search Engine",
        tech: "Next.js 15 + MeiliSearch Vector Index",
        description: "Sub-50ms property search by budget, neighborhood, and amenities.",
        capabilities: ["Faceted search filters", "Polygon map search", "Instant price currency conversion"],
      },
      {
        layer: "CRM & Broker Router",
        tech: "Odoo CRM + n8n Webhook Pipeline",
        description: "Instant WhatsApp lead assignment to regional real estate brokers.",
        capabilities: ["Broker round-robin distribution", "Lead scoring algorithm", "Automated viewing reminder SMS"],
      },
    ],
    implementationStages: [
      {
        stage: "Stage 01",
        duration: "Week 1 - 2",
        title: "Property Catalog Taxonomy & Virtual Assets",
        details: "Structure property parameters, high-res photo hosting, and 3D Matterport embeds.",
      },
      {
        stage: "Stage 02",
        duration: "Week 3 - 4",
        title: "Sub-50ms Search & Lead Engine Build",
        details: "Implement vector search index, broker assignment routing, and WhatsApp instant alerts.",
      },
    ],
    complianceAndSecurity: [
      { standard: "Real Estate Authority MLS Compliance", description: "Verified license numbers and real estate regulatory compliance metadata." },
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
    category: "Hospitality & Dining",
    headline: "Zero-Commission Direct Booking Engines & Guest Experience Portals",
    summary: "High-converting direct booking engine with guest experience portal and zero OTA commissions.",
    overview:
      "Empowering boutique hotels and luxury resorts to bypass hefty OTA commissions with elegant, lightning-fast direct booking engines, room customization, and digital guest concierge web apps.",
    operationalContext: [
      "Hotels surrender 15% to 25% of top-line revenue to third-party online travel agencies. We engineer high-converting direct booking engines that maximize direct revenue while syncing inventory two-way with major channel managers.",
    ],
    challenges: [
      {
        problem: "15-25% commission leakage to third-party travel agencies (OTAs).",
        impact: "Severe compression of hotel operating profit margins.",
        resolution: "Sub-second direct booking engine with dynamic room rate calendars, promo codes, and 1-click checkout.",
      },
    ],
    architecturalStack: [
      {
        layer: "Direct Booking Engine",
        tech: "Next.js 15 + Stripe / Mada Gateways",
        description: "Dynamic room rate calendars, promo codes, and multi-currency checkout.",
        capabilities: ["Dynamic room yield pricing", "Add-on amenity upsells", "Multi-currency checkout"],
      },
      {
        layer: "Channel Manager Sync",
        tech: "Two-Way OTA Channel Manager API",
        description: "Real-time calendar synchronization to prevent double bookings across Booking.com and Expedia.",
        capabilities: ["Real-time availability lock", "Rate parity enforcement", "Instant cancellation backfills"],
      },
    ],
    implementationStages: [
      {
        stage: "Stage 01",
        duration: "Week 1 - 2",
        title: "Room Matrix & PMS Inventory Mapping",
        details: "Define room types, seasonal rate tiers, cancellation policies, and PMS integration endpoints.",
      },
      {
        stage: "Stage 02",
        duration: "Week 3 - 4",
        title: "Direct Booking Engine & Guest PWA Build",
        details: "Develop high-converting direct booking funnel, payment gateway integration, and guest web app.",
      },
    ],
    complianceAndSecurity: [
      { standard: "PCI-DSS Level 1 Standards", description: "Zero credit card exposure with secure tokenized pre-authorizations." },
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
    tags: ["Direct Booking", "Channel Manager", "Guest Web App", "Hospitality Tech"],
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
    category: "Hospitality & Dining",
    headline: "Dynamic Visual Tour Itinerary Builders & Supplier API Feeds",
    summary: "Dynamic visual itinerary builder integrated with live supplier flight and hotel API feeds.",
    overview:
      "Bespoke travel platforms for tour operators, DMC agencies, and customized travel planners with live pricing aggregation and visual drag-and-drop itinerary builders.",
    operationalContext: [
      "Custom travel agencies lose booking velocity when building manual itinerary proposals. We build dynamic visual itinerary builders with live supplier rate aggregation.",
    ],
    challenges: [
      {
        problem: "Slow manual quote turnaround for custom multi-city tour packages.",
        impact: "Customer booking drop-off to faster automated competitors.",
        resolution: "Visual drag-and-drop itinerary studio dynamically fetching live hotel and flight inventory.",
      },
    ],
    architecturalStack: [
      {
        layer: "Itinerary Studio",
        tech: "React 19 + Drag-and-Drop Canvas",
        description: "Visual day-by-day travel timeline with interactive map routes.",
        capabilities: ["Interactive day-by-day maps", "Dynamic markup rules", "Instant PDF export"],
      },
    ],
    implementationStages: [
      {
        stage: "Stage 01",
        duration: "Week 1 - 2",
        title: "Supplier API Ingestion & Product Catalog",
        details: "Connect Amadeus, Sabre, and HotelBeds supplier APIs for real-time rate queries.",
      },
    ],
    complianceAndSecurity: [
      { standard: "IATA Compliance & Travel Insurance Security", description: "Secure passenger manifest storage and payment verification." },
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
    category: "Industrial & Manufacturing",
    headline: "Shop Floor Telemetry, Automated Work Orders & Odoo MRP",
    summary: "IoT sensor telemetry dashboard, automated shop floor work orders, and predictive maintenance alerts.",
    overview:
      "Digital shop-floor execution systems (MES) and MRP ERP implementations connecting industrial machinery telemetry to real-time production ledgers and inventory replenishment.",
    operationalContext: [
      "Industrial manufacturing requires real-time telemetry over Overall Equipment Effectiveness (OEE), scrap rates, machine vibration/temperature, and automated raw material re-ordering.",
    ],
    challenges: [
      {
        problem: "Unplanned machine downtime and untracked scrap rate variance.",
        impact: "Missed production schedules and high maintenance costs.",
        resolution: "Industrial IoT edge gateways streaming machine cycle signals directly to Odoo MRP work orders.",
      },
    ],
    architecturalStack: [
      {
        layer: "Industrial IoT Edge",
        tech: "MQTT + Node-RED + TimescaleDB",
        description: "High-frequency machine temperature, vibration, and RPM telemetry.",
        capabilities: ["Modbus / OPC UA integration", "Sub-second sensor streaming", "Threshold anomaly detection"],
      },
      {
        layer: "Shop Floor MES & MRP",
        tech: "Odoo 18 Manufacturing (MRP) + Tablet Work Centers",
        description: "Digital work order tracking and live operator efficiency metrics.",
        capabilities: ["Work order timers", "Automated raw material depletion", "Digital quality control checklists"],
      },
    ],
    implementationStages: [
      {
        stage: "Stage 01",
        duration: "Week 1 - 2",
        title: "Shop Floor Audit & PLC Protocol Mapping",
        details: "Map machinery sensors, Modbus registers, work center routing, and bill of materials.",
      },
      {
        stage: "Stage 02",
        duration: "Week 3 - 4",
        title: "IoT Telemetry Pipeline & Odoo MRP Setup",
        details: "Deploy edge gateways, TimescaleDB time-series database, and digital tablet work centers.",
      },
    ],
    complianceAndSecurity: [
      { standard: "ISO 9001 / Batch Traceability", description: "Complete raw material lot/serial traceability with immutable batch records." },
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
    tags: ["IoT Telemetry", "Odoo MRP", "Automated Work Orders", "Manufacturing Tech"],
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
    category: "Enterprise SaaS & B2B",
    headline: "Automated Client Invoicing, Resource Scheduling & Margin Telemetry",
    summary: "Automated timesheet telemetry, client milestone invoicing, and real-time project margin analytics.",
    overview:
      "Operational backbones for consulting firms, law offices, and creative agencies. Centralized project billing, automated milestone triggers, and real-time project profitability dashboards.",
    operationalContext: [
      "Professional service agencies leak revenue when billable hours go untracked and milestone invoices are delayed. We build automated agency operating systems.",
    ],
    challenges: [
      {
        problem: "Revenue leakage from unbilled hours and delayed milestone invoicing.",
        impact: "Depressed agency operating margins and late client payments.",
        resolution: "Automated timesheet tracking linked directly to milestone invoice triggers and client approval portals.",
      },
    ],
    architecturalStack: [
      {
        layer: "Agency CRM & PM",
        tech: "Odoo Project + Next.js Client Portal",
        description: "Transparent milestone approvals, timesheets, and deliverable sign-offs.",
        capabilities: ["Milestone approval workflows", "Resource utilization heatmaps", "Profit margin telemetry"],
      },
    ],
    implementationStages: [
      {
        stage: "Stage 01",
        duration: "Week 1 - 2",
        title: "Service Catalog & Billing Rate Matrix",
        details: "Define billable roles, retainer structures, and milestone approval stages.",
      },
    ],
    complianceAndSecurity: [
      { standard: "NDA & Client Data Confidentiality", description: "Tenant data isolation with encrypted contract storage." },
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
    category: "High-Growth Startups",
    headline: "Rapid 4-Week Production MVP Sprints Built on Scalable TypeScript",
    summary: "Rapid 4-week production MVP sprint with modular TypeScript codebase ready for venture scale.",
    overview:
      "For venture-backed founders who need to move fast without accumulating technical debt. We engineer clean, modular TypeScript + Next.js + PostgreSQL architectures ready for seed and Series A due diligence.",
    operationalContext: [
      "Startups cannot afford months of bloated agency overhead. We deliver production-grade MVPs in 4-week structured sprints, handing over 100% intellectual property and full Git repositories.",
    ],
    challenges: [
      {
        problem: "Slow development cycles and messy outsourced prototype code.",
        impact: "Burned runway and failed technical investor due diligence.",
        resolution: "Clean modular TypeScript architecture with automated CI/CD and production staging environments.",
      },
    ],
    architecturalStack: [
      {
        layer: "Application Core",
        tech: "Next.js 15 + TypeScript + Tailwind CSS",
        description: "Clean modular repository with strict type safety and linting standards.",
        capabilities: ["Server Actions", "Strict TypeScript types", "Shadcn UI component kit", "Edge routing"],
      },
      {
        layer: "Database & Auth",
        tech: "PostgreSQL + Prisma ORM + Supabase / Auth0",
        description: "Enterprise-grade database with automated migrations and secure JWT auth.",
        capabilities: ["Automated Prisma migrations", "Row-Level Security (RLS)", "OAuth social & magic links"],
      },
    ],
    implementationStages: [
      {
        stage: "Stage 01",
        duration: "Week 1",
        title: "Product Scope & Technical Architecture",
        details: "Lock MVP user stories, database schema, and Figma design tokens.",
      },
      {
        stage: "Stage 02",
        duration: "Week 2 - 3",
        title: "Full-Stack Development Sprint",
        details: "Engineer frontend UI, core business logic, database migrations, and authentication.",
      },
      {
        stage: "Stage 03",
        duration: "Week 4",
        title: "QA, Security & Live Production Launch",
        details: "End-to-end automated testing, Vercel/AWS deployment, and full Git repository handover.",
      },
    ],
    complianceAndSecurity: [
      { standard: "100% IP & Code Ownership", description: "Complete intellectual property assignment to the founder upon project delivery." },
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
