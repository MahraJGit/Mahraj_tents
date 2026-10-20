import { collectUploadIds } from "@/lib/cms/lexical";
import { asObjectId, isObjectId, toId } from "@/lib/db/ids";
import { getModels } from "@/lib/db/models";
import {
  toPublicMedia,
  type PublicMedia,
} from "@/lib/public/media";
import { resolveMediaUrl } from "@/lib/public/media";
import type { LexicalContent } from "@/lib/public/rich-text";

export type BlogCard = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  readTime: string;
  date: string;
  author: string;
  authorImage: string;
  authorImageAlt: string;
  category: string;
  categorySlug: string;
  href: string;
};

export type { BlogCategory } from "@/lib/public/categories";
export { getCategories } from "@/lib/public/categories";

export type PublicPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: unknown;
  coverImage: PublicMedia | null;
  seoTitle: string;
  seoDescription: string;
  category: { id: string; title: string; slug: string } | null;
  author: string;
  authorImage: PublicMedia | null;
  readTime: string;
  publishedAt: string | null;
  featured: boolean;
  inlineMedia: Record<string, PublicMedia>;
};

type LeanDoc = Record<string, unknown>;

function isRecord(value: unknown): value is LeanDoc {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function formatDate(value?: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function resolveImage(
  media: PublicMedia | null | undefined,
  size: "thumbnail" | "card" | "hero" = "card",
) {
  const resolved = resolveMediaUrl(media ?? null, size);
  return {
    url: resolved.url,
    alt: resolved.alt,
  };
}

function categoryOf(value: unknown) {
  if (!isRecord(value)) return null;
  const title = typeof value.title === "string" ? value.title : "";
  const slug = typeof value.slug === "string" ? value.slug : "";
  if (!title && !slug) return null;
  return { id: toId(value._id), title, slug };
}

function dateString(value: unknown) {
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "string" && value) return value;
  return null;
}

function toPublicPost(
  doc: LeanDoc,
  inlineMedia: Record<string, PublicMedia> = {},
): PublicPost {
  return {
    id: toId(doc._id),
    title: String(doc.title ?? ""),
    slug: String(doc.slug ?? ""),
    excerpt: String(doc.excerpt ?? ""),
    content: doc.content ?? null,
    coverImage: toPublicMedia(doc.coverImage),
    seoTitle: String(doc.seoTitle ?? ""),
    seoDescription: String(doc.seoDescription ?? ""),
    category: categoryOf(doc.category),
    author: String(doc.author ?? ""),
    authorImage: toPublicMedia(doc.authorImage),
    readTime: String(doc.readTime ?? ""),
    publishedAt: dateString(doc.publishedAt),
    featured: Boolean(doc.featured),
    inlineMedia,
  };
}

export function toBlogCard(
  post: PublicPost,
  imageSize: "thumbnail" | "card" | "hero" = "card",
): BlogCard {
  const image = resolveImage(post.coverImage, imageSize);
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    image: image.url,
    imageAlt: image.alt || post.title,
    readTime: post.readTime,
    date: formatDate(post.publishedAt),
    author: post.author || "Mahraj Tents",
    authorImage: post.authorImage ? resolveImage(post.authorImage).url : "",
    authorImageAlt: post.authorImage?.alt || post.author || "Mahraj Tents",
    category: post.category?.title ?? "Insights",
    categorySlug: post.category?.slug ?? "",
    href: `/blog/${post.slug}`,
  };
}

type ListArgs = {
  page?: number;
  limit?: number;
  categorySlug?: string;
  search?: string;
};

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function publishedQuery(args: ListArgs = {}) {
  const { Category } = await getModels();
  const filter: Record<string, unknown> = { _status: "published" };

  if (args.categorySlug) {
    const category = await Category.findOne({ slug: args.categorySlug })
      .select("_id")
      .lean();
    if (!category) return null;
    filter.category = category._id;
  }

  const search = args.search?.trim();
  if (search) {
    const pattern = escapeRegex(search);
    filter.$or = [
      { title: { $regex: pattern, $options: "i" } },
      { excerpt: { $regex: pattern, $options: "i" } },
    ];
  }

  return filter;
}

async function loadPosts(filter: Record<string, unknown>) {
  const { Post } = await getModels();
  const docs = await Post.find(filter)
    .populate("coverImage")
    .populate("authorImage")
    .populate("category")
    .sort({ publishedAt: -1, title: 1 })
    .lean();
  return docs.filter(isRecord).map((doc) => toPublicPost(doc));
}

export async function getPosts({
  page = 1,
  limit = 6,
  categorySlug,
  search,
}: ListArgs = {}) {
  const filter = await publishedQuery({ categorySlug, search });
  if (!filter) {
    return { docs: [], page, totalPages: 0, totalDocs: 0 };
  }

  const posts = await loadPosts(filter);
  const start = Math.max(0, (page - 1) * limit);
  return {
    docs: posts.slice(start, start + limit).map((post) => toBlogCard(post)),
    page,
    totalPages: posts.length === 0 ? 0 : Math.ceil(posts.length / limit),
    totalDocs: posts.length,
  };
}

export async function getFeaturedPosts(limit = 3) {
  const posts = await loadPosts({ _status: "published", featured: true });
  return posts.slice(0, limit).map((post) => toBlogCard(post));
}

export async function getRelatedPosts(
  categorySlug: string,
  excludeId: string,
  limit = 3,
) {
  const filter = await publishedQuery({ categorySlug });
  if (!filter) return [];
  const posts = await loadPosts(filter);
  return posts
    .filter((post) => post.id !== excludeId)
    .slice(0, limit)
    .map((post) => toBlogCard(post));
}

async function inlineMediaFor(content: unknown) {
  const ids = collectUploadIds(content).filter((id) => isObjectId(id));
  const inlineMedia: Record<string, PublicMedia> = {};
  if (ids.length === 0) return inlineMedia;

  const { Media } = await getModels();
  const docs = await Media.find({ _id: { $in: ids.map(asObjectId) } }).lean();
  for (const doc of docs) {
    const media = toPublicMedia(doc);
    if (media?.id) inlineMedia[media.id] = media;
  }
  return inlineMedia;
}

export async function getPostBySlug(slug: string): Promise<PublicPost | null> {
  const { Post } = await getModels();
  const doc = await Post.findOne({ slug, _status: "published" })
    .populate("coverImage")
    .populate("authorImage")
    .populate("category")
    .lean();
  if (!doc || !isRecord(doc)) return null;
  return toPublicPost(doc, await inlineMediaFor(doc.content));
}

export async function getPostSlugs() {
  const { Post } = await getModels();
  const docs = await Post.find({ _status: "published" }).select("slug").lean();
  return docs
    .map((doc) => (typeof doc.slug === "string" ? doc.slug : ""))
    .filter(Boolean);
}

export function postContent(post: PublicPost): LexicalContent {
  return post.content as LexicalContent;
}
