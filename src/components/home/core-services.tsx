import Link from "next/link";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { coreServices } from "@/content/home";

export function CoreServices() {
  return (
    <Section tone="alt">
      <SectionHeading
        align="center"
        eyebrow="Our working process"
        title="How a tent project is delivered"
      />

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {coreServices.map(({ title, subtitle, icon: Icon }, index) => (
          <StaggerItem
            key={`${title}-${index}`}
            className="relative rounded-xl bg-card px-6 py-8 text-center shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lift motion-reduce:hover:translate-y-0"
          >
            <span className="font-heading text-4xl font-semibold text-brand/20">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mx-auto mt-3 flex size-12 items-center justify-center rounded-full bg-brand-soft text-brand">
              <Icon className="size-6" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{subtitle}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-14 flex justify-center">
        <Button asChild variant="brandOutline" size="xl">
          <Link href="/services">View tent structures</Link>
        </Button>
      </div>
    </Section>
  );
}
