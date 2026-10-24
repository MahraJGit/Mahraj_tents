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
  cta = "Explore this tent",
  layout = "stack",
  className,
}: {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  excerpt?: string;
  cta?: string;
  layout?: "stack" | "scan";
  className?: string;
}) {
  const scan = layout === "scan";

  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full overflow-hidden rounded-xl bg-card shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift motion-reduce:hover:translate-y-0",
        scan ? "flex-row items-stretch gap-3 p-2 sm:flex-col sm:gap-0 sm:p-0" : "flex-col",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          scan && "w-28 shrink-0 rounded-lg sm:w-full sm:rounded-none"
        )}
      >
        <Media
          src={image}
          alt={imageAlt}
          className={scan ? "h-full min-h-28 sm:aspect-[16/10] sm:min-h-0" : "aspect-[16/10]"}
          sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 40vw"
        />
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent",
            scan && "hidden sm:block"
          )}
        />
        <h3
          className={cn(
            "font-heading font-semibold leading-tight text-white",
            scan
              ? "absolute inset-x-0 bottom-0 hidden p-4 text-2xl sm:block sm:p-5"
              : "absolute inset-x-0 bottom-0 p-4 text-2xl sm:p-5"
          )}
        >
          {title}
        </h3>
      </div>
      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col",
          scan ? "justify-center py-1 pe-1 sm:px-5 sm:py-4" : excerpt ? "px-4 py-4 sm:px-5" : "hidden"
        )}
      >
        {scan ? (
          <h3 className="font-heading text-base font-semibold leading-tight text-brand sm:hidden">
            {title}
          </h3>
        ) : null}
        {excerpt ? (
          <p
            className={cn(
              "line-clamp-2 text-sm leading-relaxed text-body",
              scan && "mt-1 text-xs sm:mt-0 sm:text-sm"
            )}
          >
            {excerpt}
          </p>
        ) : null}
        {excerpt || scan ? (
          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand sm:mt-3">
            {cta}
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        ) : null}
      </div>
    </Link>
  );
}
