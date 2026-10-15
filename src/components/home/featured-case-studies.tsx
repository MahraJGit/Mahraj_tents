import { ProjectCard } from "@/components/cards/project-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
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

      <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <StaggerItem key={project.slug}>
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
    </Section>
  );
}
