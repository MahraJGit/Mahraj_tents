import Link from "next/link";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Media } from "@/components/media";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/home";

export function FeaturedCaseStudies() {
  return (
    <Section tone="alt">
      <SectionHeading
        align="center"
        eyebrow="Projects"
        title="Tents delivered for real sites"
        description="A sample of wedding, exhibition, and working covers specified across the UAE."
      />

      <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <StaggerItem
            key={project.slug}
            className="overflow-hidden rounded-md border border-border bg-background transition-shadow duration-200 hover:shadow-md"
          >
            <Link href={`/projects/${project.slug}`} className="relative block">
              <Media
                src={project.image}
                alt={project.title}
                className="aspect-[4/3]"
                sizes="(min-width: 768px) 30vw, 90vw"
              />
              <span className="absolute start-3 top-3 rounded-sm bg-brand-dark px-2 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-white">
                {project.application}
              </span>
            </Link>
            <div className="p-5">
              <h3 className="text-xl font-semibold tracking-tight text-ink">
                {project.title}
              </h3>
              <div className="mt-3 flex items-end justify-between gap-3 text-sm">
                <p className="font-semibold text-ink">{project.product}</p>
                <p className="text-xs text-body">{project.location}</p>
              </div>
              <Button asChild variant="brand" size="xl" className="mt-5 w-full">
                <Link href={`/projects/${project.slug}`}>View Project Details</Link>
              </Button>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
