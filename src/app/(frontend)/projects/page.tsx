import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards/project-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { projects } from "@/content/home";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Wedding, exhibition, sports, Ramadan, warehouse, and airside tents delivered across the UAE.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        description="A selection of tents specified for celebrations, exhibitions, sport, and working sites."
      />
      <Section>
        <Stagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
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
    </>
  );
}
