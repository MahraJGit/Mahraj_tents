import { trustPartnerLogos } from "@/content/home";
import { cn } from "@/lib/utils";

export function PartnerLogos({ className }: { className?: string }) {
  const labels = [...trustPartnerLogos, ...trustPartnerLogos];

  return (
    <div className={cn("overflow-hidden", className)}>
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {labels.slice(0, trustPartnerLogos.length).map((label) => (
          <li
            key={label}
            className="rounded-full border border-border bg-sand px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-body"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
