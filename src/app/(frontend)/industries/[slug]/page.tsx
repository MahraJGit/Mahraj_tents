import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { industries } from "@/content/home";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) return {};

  return {
    title: `Tents for ${industry.label}`,
    description: industry.summary,
  };
}

export default async function IndustryDetailPage({
  params,
}: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) notFound();

  return (
    <>
      <PageHero
        title={`Tents for ${industry.label}`}
        description={industry.summary}
        breadcrumb={[{ label: "Uses", href: "/industries" }]}
      />
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base leading-relaxed text-body">
            {industry.summary} Mahraj Tents surveys the site, then recommends a
            structure you can hire or purchase.
          </p>
          <Button asChild variant="brand" size="xl" className="mt-8">
            <Link href={`/services/${industry.serviceSlug}`}>
              View this tent
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
