import Link from "next/link";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { coreServices } from "@/content/home";

const processSteps = [
  coreServices[0],
  coreServices[1],
  coreServices[3],
  coreServices[7],
];

export function CoreServices() {
  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="How we work"
        title="Four steps from brief to handover"
        description="One team surveys the ground, specifies the span, builds the tent, and stays available until strike."
      />

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map(({ title, subtitle, icon: Icon }, index) => (
          <StaggerItem
            key={title}
            className="relative rounded-xl bg-card px-6 py-8 shadow-soft ring-1 ring-border"
          >
            <span className="font-heading text-4xl font-semibold text-brand/25">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-4 flex size-11 items-center justify-center rounded-full bg-brand-soft text-brand">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{subtitle}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-12 flex justify-center">
        <Button asChild variant="brandOutline" size="xl">
          <Link href="/about">See how a project runs</Link>
        </Button>
      </div>
    </Section>
  );
}
