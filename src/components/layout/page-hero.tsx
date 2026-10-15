import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/reveal";

export function PageHero({
  title,
  description,
  breadcrumb,
}: {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-sand">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 end-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgb(194_79_50/0.12),transparent_58%)]"
      />
      <Container className="relative py-16 lg:py-24">
        {breadcrumb?.length ? (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-body">
              <li>
                <Link href="/" className="transition-colors hover:text-brand">
                  Home
                </Link>
              </li>
              {breadcrumb.map((crumb) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3.5" />
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-brand"
                  >
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <FadeIn>
          <span aria-hidden className="mb-4 block h-0.5 w-10 bg-brand" />
          <h1 className="max-w-4xl font-heading text-4xl font-semibold leading-[1.12] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
              {description}
            </p>
          ) : null}
        </FadeIn>
      </Container>
    </section>
  );
}
