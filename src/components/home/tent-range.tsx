import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Media } from "@/components/media";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { getServices } from "@/lib/public/services";

export async function TentRange() {
  const services = (await getServices()).slice(0, 6);

  return (
    <Section tone="alt">
      <SectionHeading
        eyebrow="Tent solutions"
        title="Structures for the way the site is used"
        description="Hire or purchase a tent for a wedding, an exhibition, a sports cover, a Ramadan gathering, or a working yard. Each one is a clear-span structure, sized after a survey."
      />

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <StaggerItem key={service.slug}>
            <Link
              href={service.href}
              className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-background transition-all hover:border-brand/40 hover:shadow-md"
            >
              <Media
                src={service.image}
                alt={service.imageAlt}
                className="aspect-[4/3]"
                sizes="(min-width: 1280px) 15vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold leading-snug">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                  {service.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Explore Solution
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-12 flex justify-center">
        <Button asChild variant="brandOutline" size="xl">
          <Link href="/services">View all tents</Link>
        </Button>
      </div>
    </Section>
  );
}
