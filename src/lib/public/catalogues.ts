import { tentOfferings, tentImage } from "@/content/tent-catalog";

export type CatalogueCollection = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string | null;
  pdfHref: string;
  pdfName: string;
  fileSizeLabel: string;
};

export async function getCatalogueCollections(): Promise<CatalogueCollection[]> {
  return tentOfferings.map((item) => ({
    slug: item.slug,
    title: item.title,
    description: item.excerpt,
    image: tentImage(item.image),
    tags: item.points.slice(0, 3),
    href: `/services/${item.slug}`,
    pdfHref: "/contact#quote-form",
    pdfName: item.slug,
    fileSizeLabel: "Specification on request",
  }));
}
