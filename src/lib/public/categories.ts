import { toId } from "@/lib/db/ids";
import { getModels } from "@/lib/db/models";

export type BlogCategory = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  image: string;
  postCount: number;
};

const FALLBACK_IMAGE = "/images/tents/tent-install.jpg";

function imageUrl(value: unknown) {
  if (!value || typeof value !== "object") return FALLBACK_IMAGE;
  const url = "url" in value && typeof value.url === "string" ? value.url : "";
  return url.startsWith("/") || /^https?:\/\//.test(url) ? url : FALLBACK_IMAGE;
}

export async function getCategories(): Promise<BlogCategory[]> {
  const { Category, Post } = await getModels();
  const [categories, counts] = await Promise.all([
    Category.find().populate("image").sort({ title: 1 }).lean(),
    Post.aggregate<{ _id: unknown; count: number }>([
      { $match: { _status: "published" } },
      { $group: { _id: "$category", count: { $sum: 1 } } },
    ]),
  ]);

  const countByCategory = new Map(
    counts.map((row) => [toId(row._id), row.count]),
  );

  return categories.map((category) => {
    const id = toId(category._id);
    return {
      id,
      title: String(category.title ?? ""),
      slug: String(category.slug ?? ""),
      subtitle: String(category.subtitle ?? ""),
      image: imageUrl(category.image),
      postCount: countByCategory.get(id) ?? 0,
    };
  });
}
