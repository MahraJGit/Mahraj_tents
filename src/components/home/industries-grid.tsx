import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { industries } from "@/content/home";

const featuredUses = industries.slice(0, 4);

export function IndustriesGrid() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Applications"
        title="Where these tents are used"
        description="The same clear span approach, specified differently for a celebration, a show, a court, or a yard."
      />

      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
        {featuredUses.map(({ slug, label, summary, icon: Icon }) => (
          <StaggerItem key={slug}>
            <Link
              href={`/industries/${slug}`}
              className="group flex h-full gap-4 rounded-xl bg-card p-6 shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lift motion-reduce:hover:translate-y-0"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                <Icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="flex items-center justify-between gap-3">
                  <span className="font-heading text-2xl font-semibold text-brand">
                    {label}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-body">
                  {summary}
                </span>
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-12 flex justify-center">
        <Button asChild variant="brandOutline" size="xl">
          <Link href="/industries">See all uses</Link>
        </Button>
      </div>
    </Section>
  );
}
