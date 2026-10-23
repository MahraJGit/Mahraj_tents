import {
  FileSignature,
  HandCoins,
  Lock,
  Mail,
  ShieldCheck,
  Truck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  closing?: string[];
};

export type LegalKeyPoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type LegalDocument = {
  slug: "terms" | "privacy-policy";
  title: string;
  breadcrumb: string;
  description: string;
  heroImage: string;
  lastUpdated: string;
  highlights: { label: string; value: string }[];
  keyPointsTitle: string;
  keyPointsDescription: string;
  keyPoints: LegalKeyPoint[];
  intro: string;
  sections: LegalSection[];
  related: { label: string; href: string };
  cta: {
    title: string;
    description: string;
  };
};

export const termsDocument: LegalDocument = {
  slug: "terms",
  title: "Terms of Service",
  breadcrumb: "Terms of Service",
  description:
    "Before the first pole goes up, here's how we work together. Clear rules on quotes, hire, site access, weather, and care, so your event or project runs without surprises.",
  heroImage: "/images/tents/tent-modern.jpg",
  lastUpdated: "20 October 2026",
  highlights: [
    { label: "Last updated", value: "20 October 2026" },
    { label: "Covers", value: "Website use, tent hire and purchase" },
    { label: "Governed by", value: "UAE law" },
  ],
  keyPointsTitle: "Four Things to Know Before You Book",
  keyPointsDescription:
    "A quick summary of what matters most. The full terms below give the details.",
  keyPoints: [
    {
      icon: FileSignature,
      title: "Your signed quote rules",
      description:
        "If these terms and your signed quote say different things, the signed quote wins.",
    },
    {
      icon: HandCoins,
      title: "Online info is a guide",
      description:
        "Prices, photos, and dates on this site are estimates. Only a written quote is final.",
    },
    {
      icon: Truck,
      title: "Your site must be ready",
      description:
        "Flat ground, truck access, and space for anchoring must be ready on build day.",
    },
    {
      icon: ShieldCheck,
      title: "Weather can change plans",
      description:
        "For safety, we may delay a build or close a tent in strong wind.",
    },
  ],
  intro:
    "These terms apply when you use our website, ask for a quote, or hire or buy a tent from Mahraj Tents. They are written to be clear and fair. If anything is unclear, ask us before you sign.",
  related: { label: "Privacy Policy", href: "/privacy-policy" },
  cta: {
    title: "Not Sure About Something in Your Quote?",
    description:
      "Ask before you sign. We'll explain pricing, delivery, hire period, or tent care in plain words.",
  },
  sections: [
    {
      id: "acceptance",
      title: "Agreeing to These Terms",
      paragraphs: [
        "By using our website or asking us for a quote, you agree to these terms. If you act for a company or a client, you confirm you can agree for them.",
        "We may update these terms from time to time. The date at the top will change. If you keep using our website or services after that, you accept the new version.",
      ],
    },
    {
      id: "definitions",
      title: "Simple Definitions",
      paragraphs: [],
      bullets: [
        "We, Us: Mahraj Tents.",
        "You: Anyone who visits our site, asks for a quote, or hires or buys from us.",
        "Works: The survey, supply, installation, strike, and other services in your quote.",
        "Project Documents: Your quote, drawings, order, or signed contract.",
        "Strike: Taking the tent down and removing it.",
      ],
    },
    {
      id: "quotes",
      title: "Quotes and Orders",
      paragraphs: [
        "A quote shows your tent size, type, and services. It is valid for the period written on it. Your order is confirmed when you accept the quote in writing, and we confirm it back.",
        "Your quote will say if it is for hire or purchase. Photos, colours, and 3D drawings are a guide. Light and site conditions can change how a tent looks, so please check colours and layouts with us before we build.",
      ],
    },
    {
      id: "payment",
      title: "Prices and Payment",
      paragraphs: [
        "Prices do not include VAT unless the quote says so. Deposits and payment dates are listed in your quote.",
        "We start ordering materials or scheduling crews after we receive the deposit. If payment is late, we may delay delivery or installation until it is paid.",
      ],
    },
    {
      id: "delivery",
      title: "Delivery, Hire and Ownership",
      paragraphs: [
        "Dates are our best estimate. We will tell you quickly if they change.",
      ],
      bullets: [
        "If You are Buying: The tent is yours only after full payment. Until then, it stays our property.",
        "If You are Hiring: The tent stays ours at all times. You can use it only for the dates, place, and purpose in your quote. Please do not move, sell, sublet, or change it.",
      ],
      closing: [
        "Once the tent is on your site, you are responsible for its safety until we take it away or hand it back.",
      ],
    },
    {
      id: "site",
      title: "Your Site and Permits",
      paragraphs: ["To build safely, we need:"],
      bullets: [
        "Clear, level ground and enough room for the frame and anchors",
        "Truck and crane access",
        "Power, if the quote needs it",
        "Details of pipes, cables, or weak ground below the surface",
        "Any permits or approvals your venue or authority requires, unless we agreed to arrange them",
      ],
      closing: [
        "If the site is different from what we surveyed, we may pause the work. We will explain what is needed and any extra cost before we continue.",
      ],
    },
    {
      id: "changes",
      title: "Changes, Delays and Cancellations",
      paragraphs: [
        "If you want to change the size, layout, date, or services, tell us in writing. We will confirm any change in cost or time before we act.",
        "If you cancel or postpone after we have started ordering, cutting, or building, you pay for work done, materials ordered, and costs we cannot recover. Custom made items usually cannot be returned.",
      ],
    },
    {
      id: "care",
      title: "Warranties and Tent Care",
      paragraphs: [
        "Warranties follow the structure and materials in your project documents. Hire tents are covered by the hire terms in your quote.",
        "You must use the tent as intended and follow our care and safety guidance. This includes:",
      ],
      bullets: [
        "No cooking flames, candles, or heaters inside unless we approve",
        "No hanging heavy items, lights, or décor from the frame without approval",
        "No moving or removing anchors, ballast, or side walls",
        "No repairs by anyone except us",
      ],
      closing: [
        "Warranties do not cover misuse, unapproved changes, extreme weather beyond design limits, or poor care. Please report any damage or fault in writing as soon as you see it.",
      ],
    },
    {
      id: "website",
      title: "Using Our Website",
      paragraphs: [
        "You can browse, download catalogues, and send enquiries. Please do not copy content in bulk, break into restricted areas, send harmful code, or pretend to be us.",
        "We try to keep our website correct and online, but we cannot promise it will never have errors or downtime.",
      ],
    },
    {
      id: "content",
      title: "Our Content",
      paragraphs: [
        "Our logos, photos, drawings, text, and designs belong to Mahraj Tents or its licensors. You may share them to discuss a project with us. Please do not copy, sell, or edit them without our written permission.",
        "If we feature your event or project in our work, we will ask for your agreement first.",
      ],
    },
    {
      id: "confidentiality",
      title: "Keeping Things Confidential",
      paragraphs: [
        "We keep your drawings, venue details, tender documents, and prices private and share them only with people who need them for your project. Please also keep our prices and technical proposals private.",
      ],
    },
    {
      id: "liability",
      title: "Limits on Our Responsibility",
      paragraphs: [
        "Website content is for general guidance. It is not a survey or a final design. Please do not rely on it alone.",
        "As far as the law allows, we are not responsible for indirect losses, such as lost bookings, lost profit, or event costs caused by delays. Our responsibility for a project is set in your project documents.",
        "Nothing here removes responsibility that the law does not allow us to limit, such as fraud or injury caused by our negligence.",
      ],
    },
    {
      id: "indemnity",
      title: "Your Responsibility to Us",
      paragraphs: [
        "You agree to cover us for losses or claims caused by wrong information you give us, misuse of the tent, or breaking these terms. This includes damage to hired tents beyond normal wear.",
      ],
    },
    {
      id: "weather",
      title: "Events Outside Our Control",
      paragraphs: [
        "Neither side is at fault for delays caused by things we cannot reasonably control, such as storms, strong winds, extreme heat, port or customs delays, supplier problems, power failures, new laws, or emergencies.",
        "If strong wind or unsafe weather is forecast, we may pause the build or ask you to clear the tent for everyone's safety. We will agree on a new plan with you as soon as it is safe.",
      ],
    },
    {
      id: "partners",
      title: "Links and Partners",
      paragraphs: [
        "Our website may link to maps, social media, or other sites. Those sites have their own rules, and we are not responsible for them.",
        "We may use delivery partners or specialist installers. We expect them to meet our standards for safety, quality, and confidentiality.",
      ],
    },
    {
      id: "general",
      title: "If Part of These Terms Doesn't Apply",
      paragraphs: [
        "If one part of these terms cannot be enforced, the rest still applies. If we do not enforce a right straight away, we have not given it up. These terms and your project documents are our full agreement.",
      ],
    },
    {
      id: "law",
      title: "Which Laws Apply",
      paragraphs: [
        "These terms follow the laws of the United Arab Emirates. The courts of Dubai will handle disputes about website use, unless your signed contract says something different. Projects outside the UAE may follow the law in your contract.",
      ],
    },
    {
      id: "contact-terms",
      title: "Contact Our Commercial Team",
      paragraphs: [],
      bullets: [
        "Email: Tents@mahraj.com",
        "Phone: +971 55 765 7570",
      ],
    },
  ],
};

export const privacyDocument: LegalDocument = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  breadcrumb: "Privacy Policy",
  description:
    "Your information matters to us. Mahraj Tents uses your details to understand your requirements, prepare quotations, plan installations, and deliver tent solutions while keeping your personal information secure.",
  heroImage: "/images/tents/tent-luxury.jpg",
  lastUpdated: "20 October 2026",
  highlights: [
    { label: "Last updated", value: "20 October 2026" },
    { label: "Information collected", value: "Enquiry, site and contact details" },
    { label: "Privacy questions", value: "Tents@mahraj.com" },
  ],
  keyPointsTitle: "How We Handle Your Information",
  keyPointsDescription:
    "A simple guide to how we collect, manage, and protect your information.",
  keyPoints: [
    {
      icon: UserCheck,
      title: "What we collect",
      description:
        "Your name, contact details, event date, site location, and what the tent needs to do.",
    },
    {
      icon: ShieldCheck,
      title: "Why we need it",
      description:
        "To survey the ground, specify the span, quote hire or purchase, and install on time.",
    },
    {
      icon: Lock,
      title: "Who sees it",
      description:
        "Only the crew, delivery partners, and suppliers working on your tent. We never sell it.",
    },
    {
      icon: Mail,
      title: "What you control",
      description:
        "Ask to see, fix, or delete your data, or opt out of emails, whenever you like.",
    },
  ],
  intro:
    "At Mahraj Tents, we understand that every project involves specific site details, schedules, and requirements. We collect and use your information to respond to enquiries, plan suitable tent solutions, and coordinate delivery and installation. This Privacy Policy explains what information we collect, how we use it, and the steps we take to protect it.",
  related: { label: "Terms of Service", href: "/terms" },
  cta: {
    title: "Questions About Your Data? Ask Us Directly.",
    description:
      "Need a copy, a correction, or a deletion? Tell us what you need, and we'll sort it.",
  },
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      paragraphs: [
        "Mahraj Tents is responsible for the personal data collected through this website, our quote form, WhatsApp, phone, and email. Our office is 2204, B2B Tower, Business Bay, Dubai.",
      ],
    },
    {
      id: "what-we-collect",
      title: "What we collect",
      paragraphs: [],
      bullets: [
        "Contact details: Name, company, phone, and email.",
        "Site and event details: Location, date, guest count or intended use, ground conditions, and any photos, plans, or pins you send.",
        "Conversations: Emails, WhatsApp messages, and call notes about your enquiry or project.",
        "Newsletter details: Your email, if you subscribe to blog updates.",
        "Reviews and project content: Your name, role, and comments if you agree to be featured.",
        "Website data: Device, browser, IP address, and pages viewed.",
      ],
    },
    {
      id: "how-it-reaches-us",
      title: "How It Reaches Us",
      paragraphs: [],
      bullets: [
        "You send it through the quote or contact form, WhatsApp, email, a call, or at a site visit.",
        "Our website records some data automatically through cookies and logs.",
        "A planner, venue, or contractor gives us your details to arrange a tent for you.",
      ],
    },
    {
      id: "why-we-use-it",
      title: "Why We Use It",
      paragraphs: [],
      bullets: [
        "Reply to enquiries and book site surveys",
        "Design and quote the right structure, whether for hire or purchase",
        "Plan delivery, installation, event day support, and strike",
        "Share catalogues or blog articles you asked for",
        "Keep the website secure and working well",
        "Meet UAE and KSA legal, tax, and record keeping duties",
      ],
    },
    {
      id: "legal-grounds",
      title: "Our Legal Grounds",
      paragraphs: [
        "We rely on one or more of these, depending on the situation:",
      ],
      bullets: [
        "Consent: Newsletter sign-ups or featuring your review or event photos.",
        "Contract: Quoting and delivering what you request.",
        "Legitimate interest: Running, securing, and improving our business.",
        "Legal duty: Accounting and regulatory requirements.",
      ],
      closing: [
        "You can withdraw consent at any time. We follow the data protection laws that apply in the UAE and Saudi Arabia.",
      ],
    },
    {
      id: "messages",
      title: "Messages From Us",
      paragraphs: [
        "You'll hear from us about your quote, survey, and installation schedule. Updates and blog emails are sent only to those who ask for them, with an unsubscribe link in each. Opting out won't stop project messages you still need.",
      ],
    },
    {
      id: "sharing",
      title: "Who We Share It With",
      paragraphs: [],
      bullets: [
        "Installation crews and delivery partners: So the right people arrive at the right site at the right time.",
        "Suppliers and manufacturers: For materials, specifications, or technical queries.",
        "Technology providers: Hosting, email, messaging, and analytics services acting on our instructions.",
        "Advisers and authorities: Only when the law requires or to protect legal rights.",
      ],
      closing: ["We never sell or rent personal data."],
    },
    {
      id: "cookies",
      title: "Cookies",
      paragraphs: [
        "Essential cookies keep the site and quote form running. Optional analytics cookies show us which pages help visitors most. You can control cookies in your browser; blocking some may affect forms and navigation.",
      ],
    },
    {
      id: "retention",
      title: "How Long We Keep It",
      paragraphs: [],
      bullets: [
        "Enquiries and projects: Until the job ends, plus any period needed for accounts, legal, or support records.",
        "Newsletter: Until you unsubscribe.",
        "Website logs: Only as long as security and troubleshooting require.",
      ],
      closing: ["After that, we delete or securely dispose of it."],
    },
    {
      id: "security",
      title: "Keeping It Safe",
      paragraphs: [
        "We use access controls, secure hosting, and limited access. No online channel is risk free, so please don't send card or banking details by chat or email. If someone claiming to be us asks for payment details unexpectedly, call us on our official number first.",
      ],
    },
    {
      id: "breach",
      title: "If Something Goes Wrong",
      paragraphs: [
        "If personal data is ever put at risk, we will investigate, contain it, and reduce the harm. Where the law requires, we'll notify you and the relevant authority without undue delay.",
      ],
    },
    {
      id: "rights",
      title: "Your Rights",
      paragraphs: [
        "You can ask to access, correct, or delete your data, restrict or object to certain uses, and opt out of marketing. We may confirm your identity first, and we may keep limited records where the law requires. If you're unhappy with our response, you can contact your local data protection authority.",
      ],
    },
    {
      id: "borders",
      title: "Data Across Borders",
      paragraphs: [
        "We work across the UAE and KSA and use cloud tools, so some data may be processed outside the country where you shared it. When that happens, we apply safeguards that meet legal requirements.",
      ],
    },
    {
      id: "children",
      title: "Children",
      paragraphs: [
        "Our services are for businesses, event professionals, and property owners. We don't knowingly collect children's data. If you believe a child has shared information with us, tell us and we'll delete it.",
      ],
    },
    {
      id: "updates",
      title: "Policy Updates",
      paragraphs: [
        "We'll update this page when our services, tools, or the law change, and revise the date at the top. Significant changes will be highlighted here.",
      ],
    },
    {
      id: "contact-privacy",
      title: "Contact Us About Privacy",
      paragraphs: [],
      bullets: [
        "Email: Tents@mahraj.com",
        "Phone: +971 55 765 7570",
        "Address: 2204, B2B Tower, Business Bay, Dubai",
      ],
    },
  ],
};