import { coverMedia, journalPosts, type JournalPost } from "@/content/journal";
import type { PublicMedia } from "@/lib/public/media";
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

function formatDate(value?: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function resolveImage(media: PublicMedia | null | undefined) {
  const resolved = resolveMediaUrl(media ?? null, "card");
  return {
    url: resolved.url,
    alt: resolved.alt,
  };
}

export function toBlogCard(
  post: PublicPost,
  _imageSize?: "thumbnail" | "card" | "hero",
): BlogCard {
  const image = resolveImage(post.coverImage);
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
    authorImage: "",
    authorImageAlt: post.author || "Mahraj Tents",
    category: post.category?.title ?? "Insights",
    categorySlug: post.category?.slug ?? "",
    href: `/blog/${post.slug}`,
  };
}

function toPublicPost(post: JournalPost): PublicPost {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: coverMedia(post),
    seoTitle: post.seoTitle,
    seoDescription: post.seoDescription,
    category: {
      id: post.category.id,
      title: post.category.title,
      slug: post.category.slug,
    },
    author: post.author,
    authorImage: null,
    readTime: post.readTime,
    publishedAt: post.publishedAt,
    featured: post.featured,
    inlineMedia: {},
  };
}

type ListArgs = {
  page?: number;
  limit?: number;
  categorySlug?: string;
  search?: string;
};

function filteredPosts({ categorySlug, search }: ListArgs) {
  return journalPosts.filter((post) => {
    if (categorySlug && post.category.slug !== categorySlug) return false;
    if (!search) return true;
    const haystack = `${post.title} ${post.excerpt}`.toLowerCase();
    return haystack.includes(search.toLowerCase());
  });
}

export async function getPosts({
  page = 1,
  limit = 6,
  categorySlug,
  search,
}: ListArgs = {}) {
  const matches = filteredPosts({ categorySlug, search });
  const start = Math.max(0, (page - 1) * limit);
  const slice = matches.slice(start, start + limit);
  return {
    docs: slice.map((post) => toBlogCard(toPublicPost(post))),
    page,
    totalPages: matches.length === 0 ? 0 : Math.ceil(matches.length / limit),
    totalDocs: matches.length,
  };
}

export async function getFeaturedPosts(limit = 3) {
  return journalPosts
    .filter((post) => post.featured)
    .slice(0, limit)
    .map((post) => toBlogCard(toPublicPost(post)));
}

export async function getRelatedPosts(
  categorySlug: string,
  excludeId: string,
  limit = 3,
) {
  return journalPosts
    .filter((post) => post.id !== excludeId)
    .filter((post) => !categorySlug || post.category.slug === categorySlug)
    .slice(0, limit)
    .map((post) => toBlogCard(toPublicPost(post)));
}

export async function getPostBySlug(slug: string): Promise<PublicPost | null> {
  const post = journalPosts.find((item) => item.slug === slug);
  return post ? toPublicPost(post) : null;
}

export async function getPostSlugs() {
  return journalPosts.map((post) => post.slug);
}

export function postContent(post: PublicPost): LexicalContent {
  return post.content as LexicalContent;
}
