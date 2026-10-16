import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { site } from "@/content/site";

export function MobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-ivory/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <nav className="grid grid-cols-3" aria-label="Quick actions">
        <a
          href={site.phoneHref}
          className="flex flex-col items-center gap-1 py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-brand"
        >
          <Phone className="size-4" />
          Call
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-col items-center gap-1 py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-brand"
        >
          <MessageCircle className="size-4" />
          WhatsApp
        </a>
        <Link
          href="/contact#quote-form"
          className="flex flex-col items-center gap-1 bg-brand py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white"
        >
          Quote
        </Link>
      </nav>
    </div>
  );
}
