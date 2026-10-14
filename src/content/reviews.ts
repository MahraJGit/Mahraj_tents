import {
  Award,
  BadgeCheck,
  Building2,
  HardHat,
  Headset,
  ShieldCheck,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";

import { tentImages } from "@/content/tent-catalog";

export const reviewsHero = {
  image: tentImages.event,
  title: "What clients say after the tent comes down",
  description:
    "Notes from hosts, organisers, and site teams who used Mahraj Tents for weddings, exhibitions, sport, and working cover.",
};

type HeroMetric = {
  kind: "rating" | "stat" | "verified";
  value: string;
  label: string;
};

export const heroMetrics: HeroMetric[] = [
  { kind: "stat", value: "150+", label: "Structures delivered" },
  { kind: "stat", value: "UAE & KSA", label: "Where we install" },
  { kind: "rating", value: "4.8", label: "Average client rating" },
];

export type TrustMetric = {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
};

export const trustMetrics: TrustMetric[] = [
  {
    label: "Average Client Rating",
    value: "4.8",
    note: "From hosts and project teams",
    icon: Star,
  },
  {
    label: "Uses covered",
    value: "8+",
    note: "Weddings through warehousing",
    icon: Building2,
  },
  {
    label: "Install crews",
    value: "In house",
    note: "The same team surveys and builds",
    icon: HardHat,
  },
  {
    label: "Repeat bookings",
    value: "Common",
    note: "Seasonal hosts come back",
    icon: Users,
  },
  {
    label: "Site safety",
    value: "Planned",
    note: "Anchoring, exits, and access agreed first",
    icon: ShieldCheck,
  },
  {
    label: "Hire or purchase",
    value: "Both",
    note: "The quotation states which",
    icon: BadgeCheck,
  },
  {
    label: "Membranes",
    value: "PVC",
    note: "Heavy-duty fabric on aluminum frames",
    icon: Award,
  },
  {
    label: "After the event",
    value: "Strike",
    note: "Removal is part of a hire",
    icon: Headset,
  },
];

export type WhyChooseItem = {
  title: string;
  subtitle: string;
};

export const whyChooseIntro = {
  title: "Why clients book Mahraj Tents again",
  description:
    "A structure that matches the brief, a crew that turns up, and a site left as agreed.",
};

export const whyChooseItems: WhyChooseItem[] = [
  { title: "Clear spans", subtitle: "Rooms without a column in the way" },
  { title: "Gulf specification", subtitle: "Sun, wind, and anchoring considered" },
  { title: "Honest sizing", subtitle: "Span follows the guest count or the goods" },
  { title: "Site survey", subtitle: "Ground and access checked first" },
  { title: "A visible programme", subtitle: "Build and strike dates in writing" },
  { title: "Aftercare", subtitle: "Support while the tent is up" },
  { title: "Hire or buy", subtitle: "Weekend, season, or a lasting cover" },
  { title: "Regional crews", subtitle: "Installed from our Dubai base" },
];

export type IndustryReview = {
  industry: string;
  name: string;
  rating: string;
  quote: string;
  projectImage: string;
  extraViews: number;
};

export const industryReviewFilters = [
  "Weddings",
  "Exhibitions",
  "Sports",
  "Ramadan",
  "Warehousing",
  "Corporate",
];

export const industryReviews: IndustryReview[] = [
  {
    industry: "Weddings",
    name: "Layla Al Hashimi",
    rating: "4.9",
    quote:
      "The pyramid reception was dressed and cool before the guests arrived. The crew left the garden as they found it the next morning.",
    projectImage: tentImages.event,
    extraViews: 2,
  },
  {
    industry: "Weddings",
    name: "Omar Nasser",
    rating: "4.8",
    quote:
      "We were worried a tent would feel temporary. The lined interior and the lighting points made it feel like the venue we had wanted.",
    projectImage: tentImages.pyramid,
    extraViews: 1,
  },
  {
    industry: "Exhibitions",
    name: "Helena Kruger",
    rating: "4.9",
    quote:
      "Stand height and door lines were agreed before the fabric arrived. Exhibitors built inside a hall, not around a surprise column.",
    projectImage: tentImages.modern,
    extraViews: 2,
  },
  {
    industry: "Exhibitions",
    name: "Faisal Al Marzooqi",
    rating: "4.7",
    quote:
      "We added a bay two weeks out. The module they had specified made that possible without redrawing the whole show.",
    projectImage: tentImages.modern,
    extraViews: 1,
  },
  {
    industry: "Sports",
    name: "Coach Daniel Okonkwo",
    rating: "4.8",
    quote:
      "The arch sits clear of the court lines and the sides open enough that afternoon training is bearable, even in summer.",
    projectImage: tentImages.dome,
    extraViews: 1,
  },
  {
    industry: "Ramadan",
    name: "Mariam Al Suwaidi",
    rating: "5.0",
    quote:
      "Seating, the service door, and the lighting were planned for the whole month, not just opening night. That is what we needed.",
    projectImage: tentImages.luxury,
    extraViews: 2,
  },
  {
    industry: "Warehousing",
    name: "James Whitfield",
    rating: "4.8",
    quote:
      "The bay covered the overflow stock and the door height actually matched our forklifts. It was a working cover, not a marquee.",
    projectImage: tentImages.industrial,
    extraViews: 1,
  },
  {
    industry: "Corporate",
    name: "Noor Al Ali",
    rating: "4.9",
    quote:
      "We switched from dinner to a presentation layout the next day. The clear span meant the furniture moved and the tent did not.",
    projectImage: tentImages.hero,
    extraViews: 2,
  },
];

export const solutionFeedbackFilters = [
  "Wedding",
  "Exhibition",
  "Majlis",
  "Warehouse",
  "Sports",
  "Rental",
];

export type SolutionProject = {
  slug: string;
  title: string;
  location: string;
  category: string;
  image: string;
  rating: number;
};

export const solutionProjects: SolutionProject[] = [
  {
    slug: "palm-ceremony-pavilion",
    title: "Palm Ceremony Pavilion",
    location: "Dubai, UAE",
    category: "Wedding",
    image: tentImages.event,
    rating: 5,
  },
  {
    slug: "waterfront-exhibition-hall",
    title: "Waterfront Exhibition Hall",
    location: "Abu Dhabi, UAE",
    category: "Exhibition",
    image: tentImages.modern,
    rating: 5,
  },
  {
    slug: "desert-ramadan-majlis",
    title: "Desert Ramadan Majlis",
    location: "Al Ain, UAE",
    category: "Majlis",
    image: tentImages.luxury,
    rating: 5,
  },
  {
    slug: "jebel-ali-logistics-canopy",
    title: "Logistics Yard Canopy",
    location: "Jebel Ali, UAE",
    category: "Warehouse",
    image: tentImages.industrial,
    rating: 4,
  },
  {
    slug: "sharjah-sports-cover",
    title: "Training Court Cover",
    location: "Sharjah, UAE",
    category: "Sports",
    image: tentImages.dome,
    rating: 5,
  },
  {
    slug: "airside-hospitality-shell",
    title: "Airside Hospitality Shell",
    location: "Dubai, UAE",
    category: "Rental",
    image: tentImages.pyramid,
    rating: 4,
  },
];

export const feedbackFormIntro = {
  title: "Tell us how the tent worked",
  description:
    "A short note about the event or the site helps the next client, and it helps us.",
};

export const trustedByIntro =
  "Specified for celebrations, exhibitions, sport, and working sites across the Gulf";

export const trustedByLogos = [
  "Weddings",
  "Exhibitions",
  "Sports",
  "Warehousing",
  "Ramadan",
  "Aviation",
];

export const projectExperienceIntro = {
  title: "What sits behind a calm event",
};

export const projectExperienceSteps = [
  {
    number: "01",
    title: "We ask about the inside of the tent",
    description:
      "Guest count, stands, aircraft, or stock. The use decides the span, not the other way around.",
  },
  {
    number: "02",
    title: "We say what will not fit",
    description:
      "If the plot, the access, or the date cannot carry the idea, we say so before a deposit.",
  },
  {
    number: "03",
    title: "We build to the programme",
    description:
      "Venue curfews and neighbouring tenants are part of the plan. The site is left clear after strike.",
  },
  {
    number: "04",
    title: "We stay reachable while it is up",
    description:
      "Weather, a moved door, or an extra bay. Hire does not end when the last peg is in.",
  },
];

export const reviewsFaqIntro =
  "Short answers on hire, visits, and what happens after handover.";

export const reviewsFaqs = [
  {
    question: "Can we see a finished tent before we book?",
    answer:
      "When a comparable structure is up, we can arrange a visit. Otherwise we share recent photography and a drawn layout for your site.",
  },
  {
    question: "Is installation included?",
    answer:
      "Yes for hire, and it can be included with purchase. The quotation lists delivery, build, and, for hire, the strike.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Purchase and longer installations carry a written warranty on the structure. Hire includes the performance of the tent for the booked period.",
  },
  {
    question: "Can the tent match our brand colour?",
    answer:
      "Membrane colour, valances, and gable branding can be specified. Artwork has to be approved before the fabric is finished.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Send the date, location, and what the tent is for through the contact form, phone, or WhatsApp. We reply with a structure and a price.",
  },
];

export const reviewsCta = {
  image: tentImages.hero,
  title: "Want the same kind of handover?",
  description:
    "Tell us the date and the site. We will recommend a tent and say whether hire or purchase fits.",
};
