import Link from "next/link";

import { HomeCarousel } from "@/components/home/home-carousel";
import { Media } from "@/components/media";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { blogHighlights } from "@/content/home";
import { getPosts } from "@/lib/public/blog";

export async function TechnicalInsights() {
  const { docs } = await getPosts({ limit: 6 });
  const posts =
    docs.length > 0
      ? docs.map((post) => ({
          key: post.id,
          title: post.title,
          image: post.image,
          imageAlt: post.imageAlt || post.title,
          href: post.href,
        }))
      : blogHighlights.map((post) => ({
          key: post.slug,
          title: post.title,
          image: post.image,
          imageAlt: post.title,
          href: `/blog/${post.slug}`,
        }));

  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="Blogs"
        title="From the project desk"
        description="Short notes on choosing a span, hiring a tent, and planning Ramadan or exhibition dates."
      />

      <HomeCarousel
        className="mt-14"
        itemClassName="w-full md:w-[calc((100%-2.5rem)/3)]"
        prevLabel="Previous insights"
        nextLabel="Next insights"
      >
        {posts.map((post) => (
          <article key={post.key} className="group">
            <Link href={post.href} className="block overflow-hidden rounded-xl">
              <Media
                src={post.image}
                alt={post.imageAlt}
                className="aspect-[16/10]"
                sizes="(min-width: 768px) 30vw, 90vw"
              />
            </Link>
            <h3 className="mt-5 font-heading text-2xl font-semibold text-brand">
              <Link href={post.href} className="transition-colors hover:text-brand">
                {post.title}
              </Link>
            </h3>
            <Button asChild variant="brandDark" className="mt-5">
              <Link href={post.href}>Read full guide</Link>
            </Button>
          </article>
        ))}
      </HomeCarousel>
    </Section>
  );
}
