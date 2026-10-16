import {
  Building2,
  ClipboardCheck,
  Crown,
  HardHat,
  Headphones,
  MoonStar,
  Package,
  PartyPopper,
  Plane,
  Ruler,
  ShieldCheck,
  Tent,
  Trophy,
  Warehouse,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { tentImages } from "@/content/tent-catalog";

export const heroImage = tentImages.hero;
export const heroVideo = "/videos/hero/hero-video.mp4";

export const heroCopy = {
  title: "Clear-span tents for Gulf events and working cover",
  description:
    "Hire or purchase a finished structure for a wedding, exhibition, sports cover, or yard. Surveyed, specified, and installed by one crew.",
};

export const heroHighlights = [
  { icon: Ruler, label: "Survey" },
  { icon: Tent, label: "Supply" },
  { icon: Wrench, label: "Install" },
  { icon: Headphones, label: "Support" },
];

export const heroStats = [
  { value: "150+", label: "Structures delivered" },
  { value: "UAE & KSA", label: "Where we install" },
  { value: "Hire or buy", label: "Confirmed in the quote" },
  { value: "4.8", label: "Average client rating" },
];

export type Industry = {
  slug: string;
  label: string;
  icon: LucideIcon;
  summary: string;
  serviceSlug: string;
};

export const industries: Industry[] = [
  {
    slug: "weddings",
    label: "Weddings",
    icon: PartyPopper,
    summary:
      "Ceremony and reception tents with clear spans, lined interiors, and room for dining and a stage.",
    serviceSlug: "wedding-tent",
  },
  {
    slug: "exhibitions",
    label: "Exhibitions",
    icon: Building2,
    summary:
      "Temporary halls and pavilions with visitor doors, rigging points, and enough height for stands.",
    serviceSlug: "exhibition-tent",
  },
  {
    slug: "sports",
    label: "Sports",
    icon: Trophy,
    summary:
      "Court and training covers with clear height, side ventilation, and no columns in the playing area.",
    serviceSlug: "sports-tent",
  },
  {
    slug: "warehousing",
    label: "Warehousing",
    icon: Warehouse,
    summary:
      "Clear-span fabric bays for storage, workshops, and overflow operations on an existing yard.",
    serviceSlug: "warehouse-tent",
  },
  {
    slug: "ramadan",
    label: "Ramadan",
    icon: MoonStar,
    summary:
      "Iftar and suhoor tents with majlis seating, service lanes, and lighting for long evenings.",
    serviceSlug: "ramadan-tent",
  },
  {
    slug: "royal-hospitality",
    label: "Royal hospitality",
    icon: Crown,
    summary:
      "Formal tents for private hosts and delegations, with a controlled arrival and a quiet interior.",
    serviceSlug: "royal-tent",
  },
  {
    slug: "aviation",
    label: "Aviation",
    icon: Plane,
    summary:
      "Wide hangar tents and airside hospitality shells sized around aircraft and equipment.",
    serviceSlug: "aircraft-hangar-tent",
  },
  {
    slug: "corporate-events",
    label: "Corporate events",
    icon: ClipboardCheck,
    summary:
      "Launch, dinner, and conference tents that can reset between banquet and theatre layouts.",
    serviceSlug: "event-tent",
  },
];

export const homeIndustriesCompact = industries;

export type CoreService = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

export const coreServices: CoreService[] = [
  {
    title: "Site Survey",
    subtitle: "Access, ground, and span checked before design",
    icon: Ruler,
  },
  {
    title: "Structure Design",
    subtitle: "Frame, membrane, and anchoring matched to the brief",
    icon: Tent,
  },
  {
    title: "Fabrication & Supply",
    subtitle: "Aluminum frames and heavy-duty PVC, ready for site",
    icon: Package,
  },
  {
    title: "Professional Installation",
    subtitle: "Crews who build, line, and hand over the tent",
    icon: Wrench,
  },
  {
    title: "Climate & Safety",
    subtitle: "Wind, drainage, exits, and Gulf heat considered",
    icon: ShieldCheck,
  },
  {
    title: "Branding & Interiors",
    subtitle: "Colour, valances, lighting points, and lining",
    icon: HardHat,
  },
  {
    title: "Project Coordination",
    subtitle: "One contact for venue, decorators, and catering",
    icon: Building2,
  },
  {
    title: "Aftercare & Strike",
    subtitle: "Care during the event, then a clean removal",
    icon: Headphones,
  },
];

export const advantages = [
  {
    title: "Site-led design",
    description:
      "Span, height, and anchoring follow the ground, the access, and the event, not a catalogue guess.",
  },
  {
    title: "Gulf-ready materials",
    description:
      "Aluminum frames and PVC membranes specified for sun, wind, and the length of time the tent must stay.",
  },
  {
    title: "One installation crew",
    description:
      "The team that surveys the site is the team that builds it, so the handover matches the drawing.",
  },
];

export type Project = {
  slug: string;
  title: string;
  location: string;
  application: string;
  product: string;
  image: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "palm-ceremony-pavilion",
    title: "Palm Ceremony Pavilion",
    location: "Dubai, UAE",
    application: "Wedding",
    product: "Pyramid tent",
    image: tentImages.pyramid,
    summary:
      "A linked pyramid reception for a garden ceremony, with clear walls toward the water and a lined interior for dinner.",
  },
  {
    slug: "waterfront-exhibition-hall",
    title: "Waterfront Exhibition Hall",
    location: "Abu Dhabi, UAE",
    application: "Exhibition",
    product: "Polygon tent",
    image: tentImages.modern,
    summary:
      "A faceted hall for an outdoor brand exhibition, with visitor doors, stand height, and a daylight interior.",
  },
  {
    slug: "desert-ramadan-majlis",
    title: "Desert Ramadan Majlis",
    location: "Al Ain, UAE",
    application: "Ramadan",
    product: "Arabic majlis tent",
    image: tentImages.luxury,
    summary:
      "A month-long majlis for iftar seating, with a separate catering door and lighting planned for the evening sitting.",
  },
  {
    slug: "sharjah-sports-cover",
    title: "Training Court Cover",
    location: "Sharjah, UAE",
    application: "Sports",
    product: "Arch tent",
    image: tentImages.modern,
    summary:
      "A seasonal arch over a training court, kept clear of the playing lines with open sides for daytime airflow.",
  },
  {
    slug: "jebel-ali-logistics-canopy",
    title: "Logistics Yard Canopy",
    location: "Jebel Ali, UAE",
    application: "Warehouse",
    product: "Warehouse tent",
    image: tentImages.industrial,
    summary:
      "A clear-span bay for overflow storage, with a vehicle door height set around the yard's forklifts.",
  },
  {
    slug: "airside-hospitality-shell",
    title: "Airside Hospitality Shell",
    location: "Dubai, UAE",
    application: "Aviation",
    product: "Geodesic tent",
    image: tentImages.dome,
    summary:
      "A rigid dome used as airside hospitality beside a show aircraft, specified for an exposed apron.",
  },
];

export const trustPartnerLogos = [
  "Weddings",
  "Exhibitions",
  "Sports",
  "Warehousing",
  "Ramadan",
  "Aviation",
  "Corporate",
  "Hospitality",
];

export const blogHighlights = [
  {
    slug: "choosing-a-wedding-tent",
    title: "How to Choose a Wedding Tent in the UAE",
    image: tentImages.event,
  },
  {
    slug: "clear-span-vs-framed-tents",
    title: "Clear-Span and Smaller Frames, Compared",
    image: tentImages.modern,
  },
  {
    slug: "exhibition-tent-heights",
    title: "Exhibition Tent Height, Doors, and Stands",
    image: tentImages.pyramid,
  },
  {
    slug: "ramadan-tent-planning",
    title: "Planning a Ramadan Tent Before the Season",
    image: tentImages.luxury,
  },
];

export const regions = [
  "United Arab Emirates (UAE)",
  "Kingdom of Saudi Arabia (KSA)",
];

export const faqs = [
  {
    question: "What does Mahraj Tents actually supply?",
    answer:
      "Clear-span tents for events, exhibitions, sport, warehousing, and formal hospitality. That includes the frame, membrane, anchoring, installation, and, when you are hiring, the strike.",
  },
  {
    question: "Can I rent a tent instead of buying one?",
    answer:
      "Yes. Weekend, seasonal, and project-length hire are available, as is purchase when the structure will stay. The quotation states which you are being offered.",
  },
  {
    question: "Do you install outside Dubai?",
    answer:
      "The office is in Business Bay, Dubai. We install across the UAE and take briefs for the wider GCC. Share the site and we will confirm how the crew and transport work.",
  },
  {
    question: "How far ahead should I book?",
    answer:
      "A compact private event can often be scheduled in a few weeks. Exhibitions, hangars, and Ramadan hospitality should be briefed earlier so fabric and crew are reserved.",
  },
  {
    question: "Are the tents suitable for Gulf weather?",
    answer:
      "They are specified for it. Aluminum frames, heavy-duty PVC, and site anchoring deal with sun, wind, and drainage. The survey is what makes that specific to your ground.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the contact form, call, or WhatsApp. Tell us the date, location, guest count or use, and whether you want hire or purchase. We reply with a structure and a price.",
  },
];

export const quoteSolutions = [
  "Tent Rental",
  "Wedding Tent",
  "Event Tent",
  "Exhibition Tent",
  "Sports Tent",
  "Ramadan Tent",
  "Warehouse Tent",
  "Aircraft Hangar Tent",
];
