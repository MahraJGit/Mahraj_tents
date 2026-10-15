import Link from "next/link";

import { OfferingCard } from "@/components/cards/offering-card";
import { Media } from "@/components/media";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { highlightIcon } from "@/lib/services/highlight-icons";
import type {
  ServiceCard,
  ServiceDetailView,
} from "@/lib/public/services";

export function ExploreServices({
  related,
}: {
  service: ServiceDetailView;
  related: ServiceCard[];
}) {
  return (
    <Section tone="alt">
      <SectionHeading
        eyebrow="Related tents"
        align="center"
        title="Other structures in this range"
      />

      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {related.map((item) => (
          <li key={item.slug}>
            <OfferingCard
              href={item.href}
              image={item.image}
              imageAlt={item.imageAlt}
              title={item.title}
              excerpt={item.excerpt}
            />
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="brandOutline" size="xl">
          <Link href="/services">View all categories</Link>
        </Button>
      </div>
    </Section>
  );
}

export function ServiceOverview({ service }: { service: ServiceDetailView }) {
  return (
    <Section tone="alt">
      <div className="grid items-center gap-10 lg:grid-cols-[20rem_minmax(0,1fr)]">
        <Media
          src={service.overviewImage}
          alt={`${service.title} installation`}
          className="aspect-4/3 rounded-xl"
          sizes="20rem"
        />
        <div>
          <h2 className="font-heading text-4xl font-semibold sm:text-5xl">
            {service.overviewTitle}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-body sm:text-base">
            {service.overviewDescription}
          </p>
          <Button asChild variant="brand" size="xl" className="mt-7">
            <Link href="/contact#get-in-touch">View Installation</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function ServiceGuide({ service }: { service: ServiceDetailView }) {
  return (
    <Section>
      <SectionHeading
        align="center"
        title={service.guideTitle}
        description={service.guideDescription}
      />

      <ul className="mt-12 grid overflow-hidden rounded-xl border border-border md:grid-cols-3">
        {service.applications.map((application, index) => {
          const Icon = highlightIcon(application.icon, index);

          return (
            <li
              key={application.title}
              className="group border-b border-border bg-surface-alt p-7 transition-colors last:border-b-0 hover:bg-brand hover:text-white md:border-b-0 md:border-e md:last:border-e-0"
            >
              <Icon className="size-6 text-brand transition-colors group-hover:text-white" />
              <h3 className="mt-5 text-lg font-semibold text-ink transition-colors group-hover:text-white">
                {application.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body transition-colors group-hover:text-white/75">
                {application.description}
              </p>
              <ul className="mt-5 space-y-2 text-xs text-body transition-colors group-hover:text-white/75">
                {application.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-brand group-hover:bg-white" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
