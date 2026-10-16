import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Media } from "@/components/media";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { regionalOffices, regionalOfficesIntro } from "@/content/contact";
import { cn } from "@/lib/utils";

const officeToneClass = {
  brand: "bg-brand-dark",
  navy: "bg-[#1a2744]",
} as const;

const buttonTextClass = {
  brand: "text-brand-dark",
  navy: "text-[#1a2744]",
} as const;

export function RegionalOffices() {
  return (
    <Section tone="alt">
      <SectionHeading
        className="gap-4"
        align="center"
        title={regionalOfficesIntro.title}
        description={regionalOfficesIntro.description}
      />

      <div className="mt-8 overflow-hidden rounded-xl bg-card shadow-soft ring-1 ring-border lg:grid lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full">
          <Media
            src="/images/gcc-map.jpg"
            alt="GCC regional offices map"
            className="absolute inset-0 size-full grayscale"
            sizes="(min-width: 1024px) 55vw, 90vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20"
          />
          <div className="absolute end-[24%] top-[58%] flex flex-col items-center">
            <span className="relative flex size-8 items-center justify-center">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-400/30" />
              <span className="relative inline-flex size-3 rounded-full bg-sky-500 ring-4 ring-sky-400/25" />
            </span>
            <span className="mt-1 rounded bg-white/90 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-ink">
              Dubai
            </span>
          </div>
        </div>

        {regionalOffices.map((office) => (
          <article
            key={office.slug}
            className={cn("flex flex-col p-6 text-white sm:p-7", officeToneClass[office.tone])}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              {office.title}
            </h3>

            <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-white/90">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>{office.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0" />
                <a href={office.phoneHref} className="transition-opacity hover:opacity-80">
                  {office.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0" />
                <a
                  href={`mailto:${office.email}`}
                  className="transition-opacity hover:opacity-80"
                >
                  {office.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0" />
                <span>{office.hours}</span>
              </li>
            </ul>

            <Button
              asChild
              variant="inverse"
              size="lg"
              className={cn(
                "mt-6 w-full text-xs font-semibold uppercase tracking-[0.14em]",
                buttonTextClass[office.tone]
              )}
            >
              <a href={office.mapsHref} target="_blank" rel="noreferrer noopener">
                Get Directions
              </a>
            </Button>
          </article>
        ))}
      </div>
    </Section>
  );
}
