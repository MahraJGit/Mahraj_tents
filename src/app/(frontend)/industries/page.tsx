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
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map(({ slug, label, icon: Icon }) => (
            <StaggerItem key={slug}>
              <Link
                href={`/industries/${slug}`}
                className="flex h-full flex-col items-center justify-center gap-3 rounded-md border border-border bg-background px-4 py-7 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm motion-reduce:hover:translate-y-0"
              >
                <Icon className="size-6 text-brand" />
                <span className="text-sm font-medium text-ink">{label}</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
