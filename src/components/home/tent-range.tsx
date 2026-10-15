import Link from "next/link";

import { OfferingCard } from "@/components/cards/offering-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { getServices } from "@/lib/public/services";

export async function TentRange() {
  const services = (await getServices()).slice(0, 6);

  return (
    <Section>
      <SectionHeading
        eyebrow="Tent solutions"
        title="Structures for the way the site is used"
        description="Hire or purchase a tent for a wedding, an exhibition, a sports cover, a Ramadan gathering, or a working yard. Each one is a clear-span structure, sized after a survey."
      />

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
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

      <div className="mt-14 flex justify-center">
        <Button asChild variant="brandOutline" size="xl">
          <Link href="/services">View all tents</Link>
        </Button>
      </div>
    </Section>
  );
}
