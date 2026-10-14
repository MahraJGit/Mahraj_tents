import {
  offeringsByGroup,
  tentGroups,
  tentImage,
  tentOfferings,
  type TentOffering,
} from "@/content/tent-catalog";
import type { BrandColor } from "@/lib/services/colors";

export type ServiceCard = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  href: string;
  parentId: string | null;
  parentTitle: string | null;
};

export type ServiceGroup = {
  id: string;
  slug: string;
  title: string;
  sortOrder: number;
  children: ServiceCard[];
};

export type ServiceApplication = {
  title: string;
  description: string;
  icon: string;
  points: string[];
};

export type PerformanceRow = {
  useCase: string;
  recommended: string;
  forceReduction: string;
};

export type SpaceRow = {
  useCase: string;
  recommended: string;
  impact: string;
  slip: string;
  acoustic: string;
  maintenance: string;
};

export type ServiceDetailView = ServiceCard & {
  detailReady: boolean;
  heroTitle: string;
  heroDescription: string;
  overviewTitle: string;
  overviewDescription: string;
  overviewImage: string;
  guideTitle: string;
  guideDescription: string;
  applications: ServiceApplication[];
  showPerformanceMatrix: boolean;
  performanceTitle: string;
  performanceDescription: string;
  performanceLabels: string[];
  performanceRows: PerformanceRow[];
  density: string;
  warranty: string;
  brandingTitle: string;
  brandingDescription: string;
  brandColorLabel: string;
  brandColors: BrandColor[];
  showSpaceRequirements: boolean;
  spaceTitle: string;
  spaceDescription: string;
  spaceLabels: string[];
  spaceRows: SpaceRow[];
  showProcess: boolean;
  processTitle: string;
  processDescription: string;
  processSteps: { label: string }[];
  faqIntro: string;
  faqs: { question: string; answer: string }[];
  caseStudiesTitle: string;
  caseStudiesDescription: string;
  projectsTitle: string;
  projectsDescription: string;
  related: ServiceCard[];
  siblings: ServiceCard[];
  seoTitle: string;
  seoDescription: string;
};

export type MegaMenuColumn = {
  title: string;
  href?: string;
  links: { label: string; href: string }[];
};

export type SearchEntry = {
  label: string;
  href: string;
  group: string;
};

const PROCESS_STEPS = [
  { label: "Survey" },
  { label: "Design" },
  { label: "Fabricate" },
  { label: "Install" },
  { label: "Handover" },
];

function groupTitle(groupId: string) {
  return tentGroups.find((group) => group.id === groupId)?.title ?? "";
}

function toCard(item: TentOffering): ServiceCard {
  return {
    id: item.slug,
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt,
    image: tentImage(item.image),
    imageAlt: item.title,
    href: `/services/${item.slug}`,
    parentId: item.groupId,
    parentTitle: groupTitle(item.groupId),
  };
}

function faqsFor(item: TentOffering) {
  return [
    {
      question: `Can a ${item.title.toLowerCase()} be rented as well as purchased?`,
      answer:
        "Yes. Most structures are available for short hire, a season, or a longer installation. The quotation states which applies.",
    },
    {
      question: "How long does installation take?",
      answer:
        "A compact tent can be up in a day once the site is clear. Larger halls and hangars take longer and are scheduled around venue access.",
    },
    {
      question: "Are the structures specified for Gulf weather?",
      answer:
        "Frames are aluminum and membranes are heavy-duty PVC, anchored for the site. Wind, sun, and drainage are part of the specification, not an extra.",
    },
    {
      question: "Can the tent be branded?",
      answer:
        "Yes. Valances, gable ends, and selected wall panels can carry colour and branding. We confirm artwork deadlines with the build date.",
    },
  ];
}

function toDetail(item: TentOffering): ServiceDetailView {
  const card = toCard(item);
  const siblings = offeringsByGroup(item.groupId)
    .filter((sibling) => sibling.slug !== item.slug)
    .map(toCard);
  const related = siblings.slice(0, 3);

  return {
    ...card,
    detailReady: true,
    heroTitle: item.heroTitle,
    heroDescription: item.heroDescription,
    overviewTitle: item.overviewTitle,
    overviewDescription: item.overview,
    overviewImage: tentImage(item.image),
    guideTitle: item.guideTitle,
    guideDescription: item.guide,
    applications: [
      {
        title: "Where it is used",
        description: item.points[0],
        icon: "home",
        points: [...item.points],
      },
      {
        title: "What we handle",
        description: "Survey, engineering, supply, installation, and handover.",
        icon: "wrench",
        points: ["Site survey", "Engineering", "Installation crew"],
      },
      {
        title: "How you buy it",
        description: "Rental, seasonal hire, or purchase, confirmed in the quotation.",
        icon: "award",
        points: ["Weekend hire", "Seasonal hire", "Purchase"],
      },
    ],
    showPerformanceMatrix: true,
    performanceTitle: "Typical sizes",
    performanceDescription:
      "Final spans follow the site survey. These ranges are a starting point for planning.",
    performanceLabels: ["Scale", "Typical size", "Best suited to"],
    performanceRows: item.specs,
    density: "Aluminum frame",
    warranty: "Project warranty",
    brandingTitle: "Colour and branding",
    brandingDescription:
      "Roof and wall membranes can be specified in a project colour, with branding on valances and gables.",
    brandColorLabel: "Common membrane colours",
    brandColors: [
      { hex: "#f4f4f4", selected: true },
      { hex: "#e6d3b3", selected: false },
      { hex: "#1c1c1c", selected: false },
      { hex: "#9a3412", selected: false },
    ],
    showSpaceRequirements: false,
    spaceTitle: "",
    spaceDescription: "",
    spaceLabels: [],
    spaceRows: [],
    showProcess: true,
    processTitle: "How the project runs",
    processDescription:
      "One team stays with the tent from the first measure to handover or strike.",
    processSteps: PROCESS_STEPS,
    faqIntro: `Practical answers before you brief a ${item.title.toLowerCase()}.`,
    faqs: faqsFor(item),
    caseStudiesTitle: "",
    caseStudiesDescription: "",
    projectsTitle: "Recent applications",
    projectsDescription:
      "A selection of the kinds of sites this structure is specified for across the UAE and GCC.",
    related,
    siblings,
    seoTitle: item.title,
    seoDescription: item.excerpt,
  };
}

export async function getServices(limit = 100): Promise<ServiceCard[]> {
  return tentOfferings.slice(0, limit).map(toCard);
}

export async function getServiceGroups(): Promise<ServiceGroup[]> {
  return tentGroups.map((group) => ({
    id: group.id,
    slug: group.slug,
    title: group.title,
    sortOrder: group.sortOrder,
    children: offeringsByGroup(group.id).map(toCard),
  }));
}

export async function getServiceBySlug(
  slug: string,
): Promise<ServiceDetailView | null> {
  const item = tentOfferings.find((offering) => offering.slug === slug);
  return item ? toDetail(item) : null;
}

export async function getServiceSlugs(): Promise<string[]> {
  return tentOfferings.map((item) => item.slug);
}

export async function getServiceMegaMenu(): Promise<MegaMenuColumn[]> {
  return tentGroups.map((group) => ({
    title: group.title,
    href: "/services",
    links: offeringsByGroup(group.id).map((item) => ({
      label: item.title,
      href: `/services/${item.slug}`,
    })),
  }));
}

export async function getServiceSearchIndex(): Promise<SearchEntry[]> {
  return tentOfferings.map((item) => ({
    label: item.title,
    href: `/services/${item.slug}`,
    group: groupTitle(item.groupId),
  }));
}
