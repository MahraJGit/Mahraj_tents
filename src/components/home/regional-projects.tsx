import { ProjectCard } from "@/components/cards/project-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { projects } from "@/content/home";

export function RegionalProjects() {
  return (
    <Section>
      <SectionHeading eyebrow="Projects" title="Regional projects" />

      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard
              href={`/projects/${project.slug}`}
              image={project.image}
              title={project.title}
              location={project.location}
              application={project.application}
              product={project.product}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
