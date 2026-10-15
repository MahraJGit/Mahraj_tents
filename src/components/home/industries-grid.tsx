import Link from "next/link";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { homeIndustriesCompact } from "@/content/home";

export function IndustriesGrid() {
  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="Applications"
        title="Industries we cover"
      />

      <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        {homeIndustriesCompact.map(({ slug, label, icon: Icon }) => (
          <StaggerItem key={slug}>
            <Link
              href={`/industries/${slug}`}
              className="flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-card px-4 py-8 text-center shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lift motion-reduce:hover:translate-y-0"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-brand-soft text-brand">
                <Icon className="size-5" />
              </span>
              <span className="text-sm font-medium text-ink">{label}</span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-14 flex justify-center">
        <Button asChild variant="brandOutline" size="xl">
          <Link href="/industries">See where tents are used</Link>
        </Button>
      </div>
    </Section>
  );
}
