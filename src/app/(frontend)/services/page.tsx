import type { Metadata } from "next";

import { OfferingCard } from "@/components/cards/offering-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { getServiceGroups } from "@/lib/public/services";

export const metadata: Metadata = {
  title: "Tents",
  description:
    "Clear span tents for weddings, events, exhibitions, sport, Ramadan hospitality, warehousing, and aviation.",
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
          {groups.map((group) => {
            const categories = group.slug === "tent-solutions";
            return (
              <section key={group.id} aria-labelledby={`service-group-${group.slug}`}>
                <div className="mb-5 border-b border-border pb-5 sm:mb-8">
                  {categories ? (
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-brand">
                      Categories
                    </p>
                  ) : null}
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h2
                      id={`service-group-${group.slug}`}
                      className="font-heading text-3xl font-semibold text-brand sm:text-4xl"
                    >
                      {group.title}
                    </h2>
                    <p className="shrink-0 text-sm text-body">
                      {group.children.length === 1
                        ? "1 solution"
                        : `${group.children.length} solutions`}
                    </p>
                  </div>
                  {categories ? (
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body">
                      Choose by how the tent will be used: a wedding, an exhibition, sport, Ramadan, storage, or hire.
                    </p>
                  ) : null}
                </div>

                <Stagger
                  className={
                    categories
                      ? "grid gap-3 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3"
                      : "grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
                  }
                >
                  {group.children.map((service) => (
                    <StaggerItem key={service.slug}>
                      <OfferingCard
                        href={service.href}
                        image={service.image}
                        imageAlt={service.imageAlt}
                        title={service.title}
                        excerpt={service.excerpt}
                        layout={categories ? "scan" : "stack"}
                      />
                    </StaggerItem>
                  ))}
                </Stagger>
              </section>
            );
          })}
        </div>
      </Section>
    </>
  );
}
