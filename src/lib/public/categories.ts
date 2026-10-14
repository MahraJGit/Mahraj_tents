import { journalCategories, journalPosts } from "@/content/journal";

export type BlogCategory = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  image: string;
  postCount: number;
};

export async function getCategories(): Promise<BlogCategory[]> {
  return journalCategories.map((category) => ({
    ...category,
    postCount: journalPosts.filter((post) => post.category.slug === category.slug)
      .length,
  }));
}
