import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Media } from "@/components/media";
import { cn } from "@/lib/utils";

export function ProjectCard({
  href,
  image,
  title,
  location,
  application,
  product,
  summary,
  featured = false,
  className,
}: {
  href: string;
  image: string;
  title: string;
  location?: string;
  application?: string;
  product?: string;
  summary?: string;
  featured?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block h-full overflow-hidden rounded-xl bg-card shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift motion-reduce:hover:translate-y-0",
        className
      )}
    >
      <Media
        src={image}
        alt={title}
        className={
          featured
            ? "aspect-[16/10] h-full min-h-[18rem] lg:absolute lg:inset-0 lg:aspect-auto lg:min-h-0"
            : "aspect-[16/10]"
        }
        sizes={featured ? "(min-width: 1024px) 50vw, 90vw" : "(min-width: 1024px) 40vw, 90vw"}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"
      />
      {application ? (
        <span className="absolute start-4 top-4 rounded-full bg-brand px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-white">
          {application}
        </span>
      ) : null}
      <span className="absolute end-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <ArrowUpRight className="size-4" />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
        {location ? (
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white/75">
            {location}
          </p>
        ) : null}
        <h3
          className={cn(
            "mt-1.5 font-heading font-semibold leading-tight",
            featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          )}
        >
          {title}
        </h3>
        {summary && featured ? (
          <p className="mt-2 hidden max-w-xl text-sm leading-relaxed text-white/80 lg:block">
            {summary}
          </p>
        ) : null}
        {product ? (
          <p className="mt-1.5 text-sm text-white/75">{product}</p>
        ) : null}
      </div>
    </Link>
  );
}
