import Link from "next/link";

import { Media } from "@/components/media";
import { cn } from "@/lib/utils";

export function ProjectCard({
  href,
  image,
  title,
  location,
  application,
  product,
  className,
}: {
  href: string;
  image: string;
  title: string;
  location?: string;
  application?: string;
  product?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group block overflow-hidden rounded-xl bg-card shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lift motion-reduce:hover:translate-y-0",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <Media
          src={image}
          alt={title}
          className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"
          sizes="(min-width: 768px) 30vw, 90vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent"
        />
        {application ? (
          <span className="absolute start-4 top-4 rounded-full bg-brand px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-white">
            {application}
          </span>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          {location ? (
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white/75">
              {location}
            </p>
          ) : null}
          <h3 className="mt-2 font-heading text-2xl font-semibold leading-tight">
            {title}
          </h3>
          {product ? (
            <p className="mt-2 text-sm text-white/75">{product}</p>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
