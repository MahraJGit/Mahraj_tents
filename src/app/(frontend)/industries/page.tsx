import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { industries } from "@/content/home";

export const metadata: Metadata = {
  title: "Where tents are used",
  description:
    "Weddings, exhibitions, sport, warehousing, Ramadan hospitality, aviation, and corporate events.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Where tents are used"
        description="The same clear-span approach, specified differently for a wedding, a show, a court, a yard, or a majlis."
      />
      <Section>
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ slug, label, icon: Icon }) => (
            <StaggerItem key={slug}>
              <Link
                href={`/industries/${slug}`}
                className="flex h-full flex-col items-center justify-center gap-4 rounded-xl bg-card px-4 py-10 text-center shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lift motion-reduce:hover:translate-y-0"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <Icon className="size-6" />
                </span>
                <span className="font-heading text-xl font-semibold text-ink">
                  {label}
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
