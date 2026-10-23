import Link from "next/link";

import { ProjectCard } from "@/components/cards/project-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/home";
import { industryReviews } from "@/content/reviews";

export function FeaturedCaseStudies() {
  const [featured, ...rest] = projects.slice(0, 3);
  const quote = industryReviews[0];

  return (
    <Section tone="alt">
      <SectionHeading
        className="gap-5 md:gap-6"
        eyebrow="Projects"
        title="Tents delivered for real sites"
        description="A wedding, an exhibition, and a working cover, specified across the UAE."
        action={
          <Button asChild variant="brandOutline" className="hidden md:inline-flex">
            <Link href="/projects">All projects</Link>
          </Button>
        }
      />

      <Stagger className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-2 lg:grid-rows-2">
        {featured ? (
          <StaggerItem className="h-full lg:row-span-2">
            <ProjectCard
              featured
              href={`/projects/${featured.slug}`}
              image={featured.image}
              title={featured.title}
              location={featured.location}
              application={featured.application}
              product={featured.product}
              summary={featured.summary}
            />
          </StaggerItem>
        ) : null}
        {rest.map((project) => (
          <StaggerItem key={project.slug} className="h-full">
            <ProjectCard
              href={`/projects/${project.slug}`}
              image={project.image}
              title={project.title}
              location={project.location}
              application={project.application}
              product={project.product}
            />
          </StaggerItem>
        ))}
      </Stagger>

      {quote ? (
        <blockquote className="mt-8 max-w-3xl border-s-2 border-brand ps-5">
          <p className="font-heading text-2xl font-semibold leading-snug text-ink">
            “{quote.quote}”
          </p>
          <footer className="mt-3 text-sm text-body">
            {quote.name} · {quote.industry}
          </footer>
        </blockquote>
      ) : null}

      <div className="mt-8 flex justify-center md:hidden">
        <Button asChild variant="brandOutline" size="xl">
          <Link href="/projects">All projects</Link>
        </Button>
      </div>
    </Section>
  );
}
