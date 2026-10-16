import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { heroCopy, heroImage, heroStats, heroVideo } from "@/content/home";

function hasPublicAsset(src: string) {
  return existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

export function Hero() {
  const showVideo = Boolean(heroVideo) && hasPublicAsset(heroVideo);
  const showImage = hasPublicAsset(heroImage);

  return (
    <section className="relative isolate min-h-[min(90svh,50rem)] overflow-hidden bg-ink">
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-br from-[#3a2a24] via-[#2a2522] to-[#1c1917]"
      />

      {showImage ? (
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[center_65%]"
        />
      ) : null}

      {showVideo ? (
        <video
          className="absolute inset-0 -z-10 size-full object-cover object-[center_65%] motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={showImage ? heroImage : undefined}
          aria-hidden
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      ) : null}

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/40"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-ink to-transparent"
      />

      <Container className="flex min-h-[min(90svh,50rem)] flex-col justify-end pb-8 pt-24 sm:pb-10 lg:pb-14">
        <FadeIn className="max-w-3xl">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-brand-soft">
            Mahraj Tents · UAE & GCC
          </p>
          <span aria-hidden className="mt-3 block h-0.5 w-12 bg-brand" />
          <h1 className="mt-5 font-heading text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-[4.35rem]">
            {heroCopy.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {heroCopy.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <Link href="/contact#quote-form">
                Request a specification
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="inverseOutline" size="xl">
              <Link href="/services">View tents</Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/15 bg-white/10 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <li key={stat.label} className="bg-ink/40 px-4 py-4 backdrop-blur-sm">
                <p className="font-heading text-2xl font-semibold text-white sm:text-[1.65rem]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-white/65">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
