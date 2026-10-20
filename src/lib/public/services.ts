import { toId } from "@/lib/db/ids";
import { getModels } from "@/lib/db/models";
import { readBrandColors, type BrandColor } from "@/lib/services/colors";
import { readFaqIntro, readFaqs } from "@/lib/services/faqs";
import { readProcessSteps } from "@/lib/services/process";
import {
  PERFORMANCE_COLUMN_LABELS,
  SPACE_COLUMN_LABELS,
  columnLabels,
} from "@/lib/services/table-labels";

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

const FALLBACK_IMAGE = "/images/tents/tent-install.jpg";
const PUBLISHED = { _status: "published" } as const;

type LeanDoc = Record<string, unknown>;

function isRecord(value: unknown): value is LeanDoc {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function text(value: unknown) {
  return typeof value === "string" ? value : "";
}

function mediaFrom(value: unknown) {
  if (!isRecord(value)) return { url: FALLBACK_IMAGE, alt: "" };
  const url = text(value.url);
  const usable = url.startsWith("/") || /^https?:\/\//.test(url);
  return {
    url: usable ? url : FALLBACK_IMAGE,
    alt: text(value.alt),
  };
}

function parentOf(value: unknown) {
  if (!isRecord(value)) return { id: null as string | null, title: null as string | null };
  return {
    id: toId(value._id) || null,
    title: text(value.title) || null,
  };
}

function toCard(doc: LeanDoc): ServiceCard {
  const image = mediaFrom(doc.image);
  const parent = parentOf(doc.parent);
  const slug = text(doc.slug);
  const title = text(doc.title);
  return {
    id: toId(doc._id),
    slug,
    title,
    excerpt: text(doc.excerpt),
    image: image.url,
    imageAlt: image.alt || title,
    href: `/services/${slug}`,
    parentId: parent.id,
    parentTitle: parent.title,
  };
}

function pointLabels(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value
    .map((point) => {
      if (typeof point === "string") return point.trim();
      if (isRecord(point)) return text(point.label).trim();
      return "";
    })
    .filter(Boolean);
}

function applicationsOf(value: unknown): ServiceApplication[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item) => {
    if (!isRecord(item)) return [];
    const title = text(item.title).trim();
    const description = text(item.description).trim();
    if (!title && !description) return [];
    return [
      {
        title,
        description,
        icon: text(item.icon),
        points: pointLabels(item.points),
      },
    ];
  });
}

function rowsOf<T>(value: unknown, map: (row: LeanDoc) => T) {
  if (!Array.isArray(value)) return [];
  return value.flatMap((row) => (isRecord(row) ? [map(row)] : []));
}

function toDetail(doc: LeanDoc, siblings: ServiceCard[]): ServiceDetailView {
  const card = toCard(doc);
  const overviewUrl = text(isRecord(doc.overviewImage) ? doc.overviewImage.url : "");
  const overviewUsable =
    overviewUrl.startsWith("/") || /^https?:\/\//.test(overviewUrl);
  const related = siblings.slice(0, 3);
  return {
    ...card,
    detailReady: Boolean(doc.detailReady),
    heroTitle: text(doc.heroTitle),
    heroDescription: text(doc.heroDescription),
    overviewTitle: text(doc.overviewTitle),
    overviewDescription: text(doc.overviewDescription),
    overviewImage: overviewUsable ? overviewUrl : card.image,
    guideTitle: text(doc.guideTitle),
    guideDescription: text(doc.guideDescription),
    applications: applicationsOf(doc.applications),
    showPerformanceMatrix: Boolean(doc.showPerformanceMatrix),
    performanceTitle: text(doc.performanceTitle),
    performanceDescription: text(doc.performanceDescription),
    performanceLabels: columnLabels(doc.performanceLabels, PERFORMANCE_COLUMN_LABELS),
    performanceRows: rowsOf(doc.performanceRows, (row) => ({
      useCase: text(row.useCase),
      recommended: text(row.recommended),
      forceReduction: text(row.forceReduction),
    })),
    density: text(doc.density),
    warranty: text(doc.warranty),
    brandingTitle: text(doc.brandingTitle),
    brandingDescription: text(doc.brandingDescription),
    brandColorLabel: text(doc.brandColorLabel),
    brandColors: readBrandColors(doc.brandColors),
    showSpaceRequirements: Boolean(doc.showSpaceRequirements),
    spaceTitle: text(doc.spaceTitle),
    spaceDescription: text(doc.spaceDescription),
    spaceLabels: columnLabels(doc.spaceLabels, SPACE_COLUMN_LABELS),
    spaceRows: rowsOf(doc.spaceRows, (row) => ({
      useCase: text(row.useCase),
      recommended: text(row.recommended),
      impact: text(row.impact),
      slip: text(row.slip),
      acoustic: text(row.acoustic),
      maintenance: text(row.maintenance),
    })),
    showProcess: doc.showProcess !== false,
    processTitle: text(doc.processTitle),
    processDescription: text(doc.processDescription),
    processSteps: readProcessSteps(doc.processSteps),
    faqIntro: readFaqIntro(doc.faqIntro),
    faqs: readFaqs(doc.faqs),
    caseStudiesTitle: text(doc.caseStudiesTitle),
    caseStudiesDescription: text(doc.caseStudiesDescription),
    projectsTitle: text(doc.projectsTitle),
    projectsDescription: text(doc.projectsDescription),
    related,
    siblings,
    seoTitle: text(doc.seoTitle) || card.title,
    seoDescription: text(doc.seoDescription) || card.excerpt,
  };
}

async function publishedServices() {
  const { Service } = await getModels();
  const docs = await Service.find(PUBLISHED)
    .populate("image")
    .populate("overviewImage")
    .populate("parent")
    .sort({ sortOrder: 1, title: 1 })
    .lean();
  return docs.filter(isRecord);
}

export async function getServices(limit = 100): Promise<ServiceCard[]> {
  const docs = await publishedServices();
  return docs.slice(0, limit).map(toCard);
}

export async function getServiceGroups(): Promise<ServiceGroup[]> {
  const { MainService } = await getModels();
  const [groups, services] = await Promise.all([
    MainService.find(PUBLISHED).sort({ sortOrder: 1, title: 1 }).lean(),
    publishedServices(),
  ]);

  return groups.filter(isRecord).map((group) => {
    const id = toId(group._id);
    return {
      id,
      slug: text(group.slug),
      title: text(group.title),
      sortOrder: Number(group.sortOrder ?? 0),
      children: services
        .filter((service) => parentOf(service.parent).id === id)
        .map(toCard),
    };
  });
}

export async function getServiceBySlug(
  slug: string,
): Promise<ServiceDetailView | null> {
  const docs = await publishedServices();
  const doc = docs.find((item) => text(item.slug) === slug);
  if (!doc) return null;
  const parentId = parentOf(doc.parent).id;
  const siblings = docs
    .filter((item) => item !== doc && parentOf(item.parent).id === parentId)
    .map(toCard);
  return toDetail(doc, siblings);
}

export async function getServiceSlugs(): Promise<string[]> {
  const docs = await publishedServices();
  return docs.map((doc) => text(doc.slug)).filter(Boolean);
}

export async function getServiceMegaMenu(): Promise<MegaMenuColumn[]> {
  const { MainService } = await getModels();
  const [groupDocs, services] = await Promise.all([
    MainService.find(PUBLISHED).sort({ sortOrder: 1, title: 1 }).lean(),
    publishedServices(),
  ]);

  return groupDocs.filter(isRecord).flatMap((group) => {
    if (group.showInMegaMenu === false) return [];
    const id = toId(group._id);
    const links = services
      .filter(
        (service) =>
          parentOf(service.parent).id === id && service.showInMegaMenu !== false,
      )
      .map((service) => {
        const card = toCard(service);
        return { label: card.title, href: card.href };
      });
    if (links.length === 0) return [];
    return [{ title: text(group.title), href: "/services", links }];
  });
}

export async function getServiceSearchIndex(): Promise<SearchEntry[]> {
  const docs = await publishedServices();
  return docs.map((doc) => {
    const card = toCard(doc);
    return {
      label: card.title,
      href: card.href,
      group: card.parentTitle ?? "",
    };
  });
}
