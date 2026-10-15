import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Media } from "@/components/media";
import { cn } from "@/lib/utils";

export function OfferingCard({
  href,
  image,
  imageAlt,
  title,
  excerpt,
  cta = "Explore solution",
  className,
}: {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  excerpt?: string;
  cta?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl bg-card shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lift motion-reduce:hover:translate-y-0",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <Media
          src={image}
          alt={imageAlt}
          className="aspect-[16/10]"
          sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent"
        />
        <h3 className="absolute inset-x-0 bottom-0 p-5 font-heading text-2xl font-semibold leading-tight text-white">
          {title}
        </h3>
      </div>
      {excerpt ? (
        <div className="flex flex-1 flex-col px-5 py-4">
          <p className="flex-1 text-sm leading-relaxed text-body">{excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            {cta}
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      ) : null}
    </Link>
  );
}
