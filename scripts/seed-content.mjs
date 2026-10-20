/**
 * Inserts the reviewed Mahraj Tents catalogue into MongoDB.
 *
 * Inserts a record only when its slug (or media URL) is missing.
 * Does not update, delete, or reset existing documents.
 */
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

import mongoose from "mongoose";
import ts from "typescript";

import { loadEnv } from "./lib/load-env.mjs";

loadEnv();

const PROCESS_STEPS = [
  { label: "Survey" },
  { label: "Design" },
  { label: "Fabricate" },
  { label: "Install" },
  { label: "Handover" },
];

const BRAND_COLORS = [
  { hex: "#f4f4f4", selected: true },
  { hex: "#e6d3b3", selected: false },
  { hex: "#1c1c1c", selected: false },
  { hex: "#9a3412", selected: false },
];

function transpile(source, fileName) {
  return ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
    fileName,
  }).outputText;
}

async function loadReviewedContent() {
  const dir = mkdtempSync(join(tmpdir(), "mahraj-seed-"));
  const catalogPath = join(dir, "tent-catalog.mjs");
  const journalPath = join(dir, "journal.mjs");
  const catalogSource = readFileSync(
    new URL("../src/content/tent-catalog.ts", import.meta.url),
    "utf8",
  );
  writeFileSync(catalogPath, transpile(catalogSource, "tent-catalog.ts"));

  const journalSource = readFileSync(
    new URL("../src/content/journal.ts", import.meta.url),
    "utf8",
  ).replace(
    'from "@/content/tent-catalog"',
    `from ${JSON.stringify(pathToFileURL(catalogPath).href)}`,
  );
  writeFileSync(journalPath, transpile(journalSource, "journal.ts"));

  try {
    const catalog = await import(pathToFileURL(catalogPath).href);
    const journal = await import(pathToFileURL(journalPath).href);
    return { catalog, journal };
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

function faqsFor(item) {
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

function points(labels) {
  return labels.map((label) => ({ label }));
}

function serviceDocument(item, parentId, imageId, sortOrder, now) {
  return {
    title: item.title,
    slug: item.slug,
    parent: parentId,
    sortOrder,
    showInMegaMenu: true,
    detailReady: true,
    excerpt: item.excerpt,
    image: imageId,
    overviewImage: imageId,
    relatedServices: [],
    heroTitle: item.heroTitle,
    heroDescription: item.heroDescription,
    overviewTitle: item.overviewTitle,
    overviewDescription: item.overview,
    guideTitle: item.guideTitle,
    guideDescription: item.guide,
    applications: [
      {
        title: "Where it is used",
        description: item.points[0],
        icon: "home",
        points: points(item.points),
      },
      {
        title: "What we handle",
        description: "Survey, engineering, supply, installation, and handover.",
        icon: "wrench",
        points: points(["Site survey", "Engineering", "Installation crew"]),
      },
      {
        title: "How you buy it",
        description: "Rental, seasonal hire, or purchase, confirmed in the quotation.",
        icon: "award",
        points: points(["Weekend hire", "Seasonal hire", "Purchase"]),
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
    brandColors: BRAND_COLORS,
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
    seoTitle: item.title,
    seoDescription: item.excerpt,
    _status: "published",
    createdAt: now,
    updatedAt: now,
  };
}

const uri = process.env.DATABASE_URI;
if (!uri) {
  console.error("DATABASE_URI is not set.");
  process.exit(1);
}

const { catalog, journal } = await loadReviewedContent();
const conn = await mongoose.createConnection(uri, {
  serverSelectionTimeoutMS: 8000,
}).asPromise();

const media = conn.collection("media");
const families = conn.collection("main-services");
const services = conn.collection("services");
const categories = conn.collection("categories");
const posts = conn.collection("posts");

const summary = {
  media: { inserted: 0, reused: 0 },
  families: { inserted: 0, skipped: 0 },
  services: { inserted: 0, skipped: 0 },
  categories: { inserted: 0, skipped: 0 },
  posts: { inserted: 0, skipped: 0 },
};

async function ensureMedia(url, alt) {
  const existing = await media.findOne({ url }, { projection: { _id: 1 } });
  if (existing) {
    summary.media.reused += 1;
    return existing._id;
  }
  const inserted = await media.insertOne({
    alt,
    caption: "",
    url,
    filename: url.split("/").pop() || "image.jpg",
    mimeType: "image/jpeg",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  summary.media.inserted += 1;
  return inserted.insertedId;
}

try {
  const now = new Date();
  const familyIds = new Map();

  for (const group of catalog.tentGroups) {
    const existing = await families.findOne(
      { slug: group.slug },
      { projection: { _id: 1 } },
    );
    if (existing) {
      familyIds.set(group.id, existing._id);
      summary.families.skipped += 1;
      continue;
    }
    const inserted = await families.insertOne({
      title: group.title,
      slug: group.slug,
      sortOrder: group.sortOrder,
      showInMegaMenu: true,
      menuDescription: "",
      _status: "published",
      createdAt: now,
      updatedAt: now,
    });
    familyIds.set(group.id, inserted.insertedId);
    summary.families.inserted += 1;
  }

  for (const [index, item] of catalog.tentOfferings.entries()) {
    const existing = await services.findOne(
      { slug: item.slug },
      { projection: { _id: 1 } },
    );
    if (existing) {
      summary.services.skipped += 1;
      continue;
    }
    const parentId = familyIds.get(item.groupId);
    if (!parentId) {
      throw new Error(`No family for ${item.slug} (${item.groupId}).`);
    }
    const imageUrl = catalog.tentImage(item.image);
    const imageId = await ensureMedia(imageUrl, item.title);
    await services.insertOne(
      serviceDocument(item, parentId, imageId, (index + 1) * 10, now),
    );
    summary.services.inserted += 1;
  }

  const categoryIds = new Map();
  for (const category of journal.journalCategories) {
    const existing = await categories.findOne(
      { slug: category.slug },
      { projection: { _id: 1 } },
    );
    if (existing) {
      categoryIds.set(category.slug, existing._id);
      summary.categories.skipped += 1;
      continue;
    }
    const imageId = await ensureMedia(category.image, category.title);
    const inserted = await categories.insertOne({
      title: category.title,
      slug: category.slug,
      subtitle: category.subtitle,
      image: imageId,
      createdAt: now,
      updatedAt: now,
    });
    categoryIds.set(category.slug, inserted.insertedId);
    summary.categories.inserted += 1;
  }

  for (const post of journal.journalPosts) {
    const existing = await posts.findOne(
      { slug: post.slug },
      { projection: { _id: 1 } },
    );
    if (existing) {
      summary.posts.skipped += 1;
      continue;
    }
    const categoryId = categoryIds.get(post.category.slug);
    if (!categoryId) {
      throw new Error(`No category for ${post.slug} (${post.category.slug}).`);
    }
    const coverId = await ensureMedia(post.image, post.title);
    await posts.insertOne({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: coverId,
      seoTitle: post.seoTitle,
      seoDescription: post.seoDescription,
      category: categoryId,
      author: post.author,
      readTime: post.readTime,
      publishedAt: new Date(`${post.publishedAt}T00:00:00.000Z`),
      featured: Boolean(post.featured),
      _status: "published",
      createdAt: now,
      updatedAt: now,
    });
    summary.posts.inserted += 1;
  }

  console.log(JSON.stringify(summary, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
} finally {
  await conn.close();
}
