import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Media } from "@/components/media";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/home";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <>
      <PageHero
        title={project.title}
        description={`${project.location} · ${project.application} · ${project.product}`}
        breadcrumb={[{ label: "Projects", href: "/projects" }]}
      />
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Media
            src={project.image}
            alt={project.title}
            className="aspect-[4/3] rounded-xl"
            sizes="(min-width: 1024px) 46vw, 90vw"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              {project.application}
            </p>
            <p className="mt-4 text-base leading-relaxed text-body">
              {project.summary}
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-body">
                  Location
                </dt>
                <dd className="mt-1 font-semibold text-ink">{project.location}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-body">
                  Structure
                </dt>
                <dd className="mt-1 font-semibold text-ink">{project.product}</dd>
              </div>
            </dl>
            <Button asChild variant="brand" size="xl" className="mt-8">
              <Link href="/contact#quote-form">Discuss a similar tent</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
