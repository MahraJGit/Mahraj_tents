import {
  BadgeCheck,
  Shield,
  Sparkles,
  Sun,
  Tent,
  Wind,
} from "lucide-react";

import { tentImages } from "@/content/tent-catalog";

export const cataloguePage = {
  hero: {
    image: tentImages.hero,
    title: "Tent structures for the Gulf, set out by use",
    description:
      "Browse rental, wedding, exhibition, sports, majlis, warehouse, and hangar tents. Open a structure for sizes and a specification, or ask us to send the pack for your site.",
    searchPlaceholder: "Search wedding, exhibition, warehouse, majlis…",
    breadcrumb: "Structures",
  },

  filterDropdowns: [
    { label: "Structure", placeholder: "All structures" },
    { label: "Use", placeholder: "All uses" },
    { label: "Hire or purchase", placeholder: "All options" },
  ],

  topics: [
    { title: "Weddings", image: tentImages.event },
    { title: "Exhibitions", image: tentImages.modern },
    { title: "Sports", image: tentImages.dome },
    { title: "Ramadan", image: tentImages.luxury },
    { title: "Warehousing", image: tentImages.industrial },
    { title: "Aviation", image: tentImages.pyramid },
  ],

  featured: {
    badge: "Featured structure",
    title: "Pyramid reception tents",
    excerpt:
      "A peaked clear span for ceremonies and waterfront dinners, with solid or clear walls.",
    image: tentImages.pyramid,
    author: "Mahraj Tents",
    authorAvatar: tentImages.pyramid,
  },

  explore: {
    title: "Explore tent structures",
    collections: [
      {
        title: "Wedding & event",
        description: "Reception, dinner, and launch tents with a finished interior.",
        image: tentImages.event,
        tags: ["Wedding", "Corporate", "Hire"],
      },
      {
        title: "Exhibition halls",
        description: "Polygon and clear span halls with doors and stand height planned in.",
        image: tentImages.modern,
        tags: ["Exhibition", "Pavilion", "Branding"],
      },
      {
        title: "Majlis & Ramadan",
        description: "Hospitality tents for iftar, suhoor, and formal gatherings.",
        image: tentImages.luxury,
        tags: ["Majlis", "Ramadan", "Royal"],
      },
      {
        title: "Warehouse & hangar",
        description: "Working cover for yards, storage, and airside shelter.",
        image: tentImages.industrial,
        tags: ["Warehouse", "Hangar", "Long stay"],
      },
    ],
  },

  matters: {
    title: "Choose a tent by what the site needs",
    cards: [
      {
        icon: Tent,
        title: "Clear span",
        description: "A guest floor or a working bay without a column in the middle.",
      },
      {
        icon: Wind,
        title: "Wind and hold-down",
        description: "Anchoring specified for the ground and how long the tent stays.",
      },
      {
        icon: Sun,
        title: "Gulf sun",
        description: "PVC membranes and ventilation planned for daytime heat.",
      },
      {
        icon: Shield,
        title: "Weather closure",
        description: "Solid, clear, or open sides depending on the event and the exposure.",
      },
      {
        icon: Sparkles,
        title: "A finished interior",
        description: "Lining, lighting points, and branding where the tent should feel like a room.",
      },
      {
        icon: BadgeCheck,
        title: "Hire or purchase",
        description: "A weekend, a season, or a cover that stays. The quote says which.",
      },
    ],
  },

  industry: {
    title: "Find a tent for the job",
    cards: [
      {
        title: "Weddings",
        description: "Ceremony and dinner under one clear span.",
        image: tentImages.event,
      },
      {
        title: "Exhibitions",
        description: "Halls and pavilions with visitor circulation.",
        image: tentImages.modern,
      },
      {
        title: "Sports",
        description: "Court covers with height kept clear of play.",
        image: tentImages.dome,
      },
      {
        title: "Ramadan",
        description: "Evening hospitality for the length of the season.",
        image: tentImages.luxury,
      },
      {
        title: "Warehousing",
        description: "Column-free bays for stock and plant.",
        image: tentImages.industrial,
      },
      {
        title: "Aviation",
        description: "Wide spans for aircraft and airside hospitality.",
        image: tentImages.pyramid,
      },
    ],
  },

  resources: {
    title: "Specification packs",
    cards: [
      {
        title: "Wedding structures",
        description: "Spans, wall types, and interior notes",
        fileInfo: "Sent on request",
      },
      {
        title: "Exhibition halls",
        description: "Heights, doors, and branding positions",
        fileInfo: "Sent on request",
      },
      {
        title: "Sports covers",
        description: "Clearance and side ventilation",
        fileInfo: "Sent on request",
      },
      {
        title: "Warehouse tents",
        description: "Bay sizes and vehicle doors",
        fileInfo: "Sent on request",
      },
      {
        title: "Majlis tents",
        description: "Seating plans and service routes",
        fileInfo: "Sent on request",
      },
      {
        title: "Hangar tents",
        description: "Span and door opening notes",
        fileInfo: "Sent on request",
      },
    ],
  },

  realProjects: {
    title: "Structures on real sites",
    cards: [
      {
        title: "Palm ceremony pavilion",
        description: "Linked pyramid reception in Dubai.",
        image: tentImages.pyramid,
      },
      {
        title: "Waterfront exhibition hall",
        description: "Faceted hall for an outdoor show.",
        image: tentImages.modern,
      },
      {
        title: "Desert Ramadan majlis",
        description: "Month-long hospitality seating.",
        image: tentImages.luxury,
      },
      {
        title: "Training court cover",
        description: "Seasonal arch over a court in Sharjah.",
        image: tentImages.dome,
      },
      {
        title: "Logistics yard canopy",
        description: "Clear span storage in Jebel Ali.",
        image: tentImages.industrial,
      },
      {
        title: "Airside hospitality shell",
        description: "Dome beside a show aircraft.",
        image: tentImages.hero,
      },
    ],
  },

  testimonial: {
    image: tentImages.install,
    title: "Sizes, walls, and a crew, in one place",
    review:
      "Start with the use of the tent. The structure pages show the usual spans, and the team turns that into a drawing for your site.",
    author: "Mahraj Tents project desk",
    metrics: [
      { label: "Event solutions", value: "9" },
      { label: "Structure types", value: "13" },
      { label: "Hire or purchase", value: "Both" },
      { label: "Office", value: "Dubai" },
    ],
  },

  sizingGuide: {
    title: "A starting guide to span",
    columns: ["Use", "Compact", "Standard", "Large", "Notes"],
    rows: [
      { cells: ["Wedding", "12m x 12m", "15m x 30m", "20m x 40m", "Dining and a stage"] },
      { cells: ["Exhibition", "15m x 20m", "20m x 40m", "30m x 60m", "Stand height matters"] },
      { cells: ["Sports", "18m x 30m", "20m x 40m", "25m x 50m", "Keep the lines clear"] },
      { cells: ["Warehouse", "15m x 30m", "20m x 40m", "30m x 60m", "Door height for vehicles"] },
    ],
  },

  ctaPanels: {
    help: {
      title: "Not sure which tent fits the site?",
      description:
        "Send the date, the location, and what has to happen inside. We will suggest a structure and a hire or purchase route.",
    },
    subscribe: {
      title: "Project notes, occasionally",
      description:
        "New structures, seasonal booking windows, and short guides. No weekly noise.",
      placeholder: "Your email address",
    },
  },

  faqIntro:
    "Answers about specifications, samples, and how a quotation starts.",
  faqs: [
    {
      question: "Can I download a full catalogue?",
      answer:
        "Specification packs are sent for the structure you are considering, so the sizes match a real brief rather than a generic brochure.",
    },
    {
      question: "Can I see fabric before we commit?",
      answer:
        "Yes. Colour, clear panels, and lining are confirmed before fabrication.",
    },
    {
      question: "Do the sizes on this page fix the price?",
      answer:
        "No. They are planning ranges. The quotation follows a survey of your site.",
    },
    {
      question: "Do you provide drawings for venues and authorities?",
      answer:
        "Yes. Layout, span, and anchoring notes can be issued for the venue or permit process.",
    },
    {
      question: "How do I get a price?",
      answer:
        "Use the contact form with the date, location, and use. We reply with a structure and a figure.",
    },
  ],
};
