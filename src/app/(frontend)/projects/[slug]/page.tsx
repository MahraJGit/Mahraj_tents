import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectCard } from "@/components/cards/project-card";
import { FadeIn } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
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

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <Media
          src={project.image}
          alt=""
          className="absolute inset-0 -z-10 size-full"
          sizes="100vw"
          priority
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/25"
        />
        <Container className="flex min-h-[28rem] flex-col justify-end py-16 lg:min-h-[34rem] lg:py-20">
          <FadeIn className="max-w-3xl">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-brand-soft">
              {project.application} · {project.location}
            </p>
            <h1 className="mt-4 font-heading text-5xl font-semibold leading-[1.08] text-white sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
              {project.summary}
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
              The brief on site
            </h2>
            <p className="mt-5 text-base leading-relaxed text-body">
              {project.summary} The structure was specified after a survey, then
              installed by the same crew that measured the ground.
            </p>
            <Button asChild variant="brand" size="xl" className="mt-8">
              <Link href="/contact#quote-form">Discuss a similar tent</Link>
            </Button>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Location", value: project.location },
              { label: "Use", value: project.application },
              { label: "Structure", value: project.product },
              { label: "Delivery", value: "Survey, install, handover" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-card p-5 shadow-soft ring-1 ring-border"
              >
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-body">
                  {item.label}
                </dt>
                <dd className="mt-2 font-heading text-xl font-semibold text-ink">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section tone="alt">
          <SectionHeading eyebrow="More work" title="Other sites in this range" />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <ProjectCard
                  href={`/projects/${item.slug}`}
                  image={item.image}
                  title={item.title}
                  location={item.location}
                  application={item.application}
                  product={item.product}
                />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </>
  );
}
