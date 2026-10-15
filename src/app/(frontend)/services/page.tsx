import type { Metadata } from "next";

import { OfferingCard } from "@/components/cards/offering-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { getServiceGroups } from "@/lib/public/services";

export const metadata: Metadata = {
  title: "Tents",
  description:
    "Clear-span tents for weddings, events, exhibitions, sport, Ramadan hospitality, warehousing, and aviation.",
};

export default async function ServicesPage() {
  const groups = await getServiceGroups();

  return (
    <>
      <PageHero
        title="Tent structures and solutions"
        description="Event solutions and the frames behind them: pyramid, dome, polygon, majlis, warehouse, hangar, and the rest of the Mahraj Tents range."
      />
      <Section>
        <div className="space-y-16">
          {groups.map((group) => (
            <section key={group.id} aria-labelledby={`service-group-${group.slug}`}>
              <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-5">
                <h2
                  id={`service-group-${group.slug}`}
                  className="font-heading text-3xl font-semibold text-ink sm:text-4xl"
                >
                  {group.title}
                </h2>
                <p className="text-sm text-body">
                  {group.children.length === 1
                    ? "1 solution"
                    : `${group.children.length} solutions`}
                </p>
              </div>

              <Stagger className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {group.children.map((service) => (
                  <StaggerItem key={service.slug}>
                    <OfferingCard
                      href={service.href}
                      image={service.image}
                      imageAlt={service.imageAlt}
                      title={service.title}
                      excerpt={service.excerpt}
                    />
                  </StaggerItem>
                ))}
              </Stagger>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
