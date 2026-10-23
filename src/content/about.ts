import {
  Award,
  ClipboardCheck,
  FileCheck2,
  Handshake,
  Ruler,
  ShieldCheck,
  Tent,
  Truck,
  Users,
  Wind,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { tentImages } from "@/content/tent-catalog";

export const aboutHero = {
  image: tentImages.hero,
  title: "Tent structures designed around the event, the site, and the weather",
  description:
    "Mahraj Tents plans, supplies, and installs clear span structures for celebrations, exhibitions, sport, storage, and formal hospitality across the UAE and GCC.",
};

export const aboutPartners = [
  "Weddings",
  "Exhibitions",
  "Sports",
  "Warehousing",
  "Ramadan",
  "Aviation",
];

export const aboutOverview = {
  image: tentImages.install,
  title: "From the first measure to a finished tent",
  steps: [
    "Understand the event and the site",
    "Choose the structure and the span",
    "Fabricate, deliver, and install",
    "Hand over, or strike when it is done",
  ],
  objective:
    "We keep tent projects straightforward. One team surveys the ground, specifies the frame and membrane, builds it, and stays available until the event is over or the cover is no longer needed.",
};

export type AboutIndustry = {
  title: string;
  image: string;
  size: "small" | "large" | "wide";
};

export const aboutIndustries: AboutIndustry[] = [
  {
    title: "Weddings & receptions",
    image: tentImages.event,
    size: "small",
  },
  {
    title: "Exhibitions & pavilions",
    image: tentImages.modern,
    size: "large",
  },
  {
    title: "Majlis & Ramadan",
    image: tentImages.luxury,
    size: "small",
  },
  {
    title: "Sports covers",
    image: tentImages.dome,
    size: "wide",
  },
  {
    title: "Warehouse tents",
    image: tentImages.industrial,
    size: "small",
  },
  {
    title: "Hangar tents",
    image: tentImages.pyramid,
    size: "small",
  },
];

export const aboutAudiences = [
  {
    title: "For planners who need the tent to look finished",
    description:
      "We treat the interior as part of the structure: lining, lighting points, wall type, and a service route that does not cross the guests. You get a room, not a bare frame.",
    image: tentImages.event,
    imageSide: "start" as const,
  },
  {
    title: "For sites that cannot wait on a permanent building",
    description:
      "Exhibitions, yards, and seasonal hospitality need cover on a date. We design a tent that can be hired, extended, or removed when the programme changes.",
    image: tentImages.industrial,
    imageSide: "end" as const,
  },
];

export type Objective = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const aboutObjectives: Objective[] = [
  {
    title: "A clear brief",
    description:
      "We start with the use, the date, the guest count or the goods, and the ground the tent has to sit on.",
    icon: Users,
  },
  {
    title: "A drawn span",
    description:
      "You see size, wall type, and door positions before fabrication, so decorators and caterers can plan too.",
    icon: FileCheck2,
  },
  {
    title: "A real site check",
    description:
      "Access, anchoring, and levels are checked on the ground, not assumed from a map pin.",
    icon: Ruler,
  },
  {
    title: "Known materials",
    description:
      "Aluminum frames and heavy-duty PVC membranes, specified for sun and wind in the Gulf.",
    icon: Truck,
  },
  {
    title: "Weather in the spec",
    description:
      "Drainage, hold-down, and ventilation are part of the design, matched to how long the tent stays.",
    icon: Wind,
  },
  {
    title: "A crew that builds it",
    description:
      "Installation is done by our own team, checked as the frame goes up and again at handover.",
    icon: Wrench,
  },
  {
    title: "One point of contact",
    description:
      "Venue, catering, and decorators deal with us for the structure, so the build does not depend on a chain of suppliers.",
    icon: Handshake,
  },
  {
    title: "A proper handover",
    description:
      "You get the layout, care notes, and the strike or aftercare plan before we leave the site.",
    icon: ClipboardCheck,
  },
];

export const commercialProcess = [
  { number: "01", label: "Hear the event and the site", icon: Tent },
  { number: "02", label: "Choose the right structure", icon: Ruler },
  { number: "03", label: "Resolve access before build day", icon: FileCheck2 },
  { number: "04", label: "Keep venue and suppliers aligned", icon: Handshake },
  { number: "05", label: "Hand over a finished tent", icon: Truck },
];

export const aboutCompliance = [
  { title: "Wind and anchoring", icon: ShieldCheck },
  { title: "Fire-retardant membranes", icon: Award },
  { title: "Documented specifications", icon: FileCheck2 },
];

export const aboutFaqIntro =
  "Answers clients usually want before they book a survey or send a date.";

export const aboutFaqs = [
  {
    question: "Can you build while a venue is still in use?",
    answer:
      "Often, yes. We agree access hours with the venue and stage the build so guest areas and neighbouring tenants are not blocked longer than they need to be.",
  },
  {
    question: "Do you show fabric and colour before we commit?",
    answer:
      "Yes. Membrane colour, clear or solid walls, and lining are confirmed before fabrication so the tent matches the event design.",
  },
  {
    question: "How long can a tent stay up?",
    answer:
      "From a weekend to a multi-year cover. Hire, seasonal installation, and purchase are different offers, and the quotation says which one you are buying.",
  },
  {
    question: "What if the ground is sand, deck, or unfinished concrete?",
    answer:
      "The survey records it. Anchoring, ballast, and base plates are chosen for that surface before the crew arrives.",
  },
  {
    question: "What is included in project coordination?",
    answer:
      "Dates, site access, the structure itself, and the conversations with venue, catering, and decorators that depend on the tent. You have one contact for the shell.",
  },
  {
    question: "What should be ready before the crew arrives?",
    answer:
      "A clear footprint, agreed access for trucks, and any permits the venue requires. We send a short checklist with the programme.",
  },
];

export const aboutCta = {
  image: tentImages.install,
  title: "Ready to specify a tent?",
  description:
    "Tell us the date, the site, and what has to happen inside. We will recommend a structure and a way to hire or buy it.",
};
