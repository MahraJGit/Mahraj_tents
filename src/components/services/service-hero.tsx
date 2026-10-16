import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/reveal";
import { Media } from "@/components/media";
import { Button } from "@/components/ui/button";
import type { ServiceDetailView } from "@/lib/public/services";

export function ServiceHero({ service }: { service: ServiceDetailView }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-br from-[#3a2a24] via-[#2a2522] to-[#1c1917]"
      />
      <Media
        src={service.image}
        alt=""
        className="absolute inset-0 -z-10 size-full"
        sizes="100vw"
        priority
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-ink/20"
      />

      <Container className="flex min-h-[34rem] flex-col justify-end py-20 lg:min-h-[40rem] lg:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/75">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight className="size-3.5" />
              <Link
                href="/services"
                className="transition-colors hover:text-white"
              >
                Services
              </Link>
            </li>
            {service.parentTitle ? (
              <li className="flex items-center gap-1.5">
                <ChevronRight className="size-3.5" />
                <Link
                  href="/services"
                  className="transition-colors hover:text-white"
                >
                  {service.parentTitle}
                </Link>
              </li>
            ) : null}
            <li className="flex items-center gap-1.5">
              <ChevronRight className="size-3.5" />
              <span className="text-white">{service.title}</span>
            </li>
          </ol>
        </nav>

        <FadeIn className="mt-10 max-w-2xl">
          <h1 className="font-heading text-5xl font-semibold leading-[1.08] text-white sm:text-6xl">
            {service.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            {service.heroDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <Link href="/contact#quote-form">Request a specification</Link>
            </Button>
            <Button asChild variant="inverseOutline" size="xl">
              <Link href="/projects">See similar projects</Link>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
