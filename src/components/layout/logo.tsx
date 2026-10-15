import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 font-heading text-[1.65rem] font-semibold tracking-tight sm:text-[1.85rem]",
        onDark ? "text-white" : "text-ink",
        className
      )}
    >
      <span className="relative size-8 shrink-0 sm:size-9">
        <Image
          src="/svgs/logo/mahraj-mark.svg"
          alt="Mahraj Tents mark"
          fill
          sizes="36px"
          className="object-contain"
        />
      </span>
      <span>
        Mahraj <span className="tracking-[0.04em] text-brand">Tents</span>
      </span>
    </Link>
  );
}
