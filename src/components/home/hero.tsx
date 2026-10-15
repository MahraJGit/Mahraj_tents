import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { heroCopy, heroHighlights, heroImage, heroVideo } from "@/content/home";

function hasPublicAsset(src: string) {
  return existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

export function Hero() {
  const showVideo = Boolean(heroVideo) && hasPublicAsset(heroVideo);
  const showImage = hasPublicAsset(heroImage);

  return (
    <section className="relative isolate min-h-[min(92svh,52rem)] overflow-hidden bg-ink">
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
        className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-ink to-transparent"
      />

      <Container className="flex min-h-[min(92svh,52rem)] flex-col justify-end pb-10 pt-24 sm:pb-12 lg:pb-16">
        <FadeIn className="max-w-3xl">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-brand-soft">
            Mahraj Tents
          </p>
          <span aria-hidden className="mt-3 block h-0.5 w-12 bg-brand" />
          <h1 className="mt-5 font-heading text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-[4.5rem]">
            {heroCopy.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {heroCopy.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <Link href="/contact#get-in-touch">
                Book a Consultation
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="inverseOutline" size="xl">
              <Link href="/services">View tents</Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <ul className="mt-12 grid grid-cols-2 gap-3 border-t border-white/15 pt-6 sm:flex sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-4">
            {heroHighlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-white/10">
                  <Icon className="size-3.5 text-brand-soft" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
