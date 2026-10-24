"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, site } from "@/content/site";
import type { MegaMenuColumn } from "@/lib/public/services";
import { cn } from "@/lib/utils";

function Disclosure({
  label,
  children,
  active = false,
  className,
  buttonClassName,
}: {
  label: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
  buttonClassName?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "flex min-h-12 w-full items-center justify-between gap-3 text-start font-medium",
          active ? "text-brand" : "text-ink",
          buttonClassName
        )}
      >
        {label}
        <ChevronDown
          className={cn("size-4 shrink-0 text-body transition-transform", open && "rotate-180")}
        />
      </button>
      {open ? children : null}
    </div>
  );
}

export function MobileNav({ megaMenu }: { megaMenu: MegaMenuColumn[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          className="size-11 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full! max-w-none! gap-0 overflow-hidden bg-ivory p-0 data-[side=right]:w-full! sm:max-w-sm!"
      >
        <SheetHeader className="border-b border-border pe-16">
          <SheetTitle className="font-heading text-2xl font-semibold text-ink">
            Mahraj <span className="text-brand">Tents</span>
          </SheetTitle>
        </SheetHeader>
        <SheetClose asChild>
          <Button
            variant="ghost"
            size="icon-lg"
            className="absolute top-3 end-3 size-11"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </Button>
        </SheetClose>

        <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4">
          {mainNav.map((item) =>
            item.hasMegaMenu ? (
              <Disclosure
                key={item.href}
                label={item.label}
                active={isActive(item.href)}
                className="border-b border-border"
                buttonClassName="text-base"
              >
                <div className="pb-4">
                  <Link
                    href="/services"
                    className={cn(
                      "mb-3 flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold",
                      pathname === "/services" ? "bg-brand-soft text-brand" : "text-brand"
                    )}
                  >
                    View all tents
                  </Link>
                  <div className="space-y-2">
                    {megaMenu.map((column) => (
                      <Disclosure
                        key={column.title}
                        label={column.title}
                        className="rounded-xl border border-border bg-card px-3"
                        buttonClassName="min-h-11 text-sm font-semibold"
                      >
                        <ul className="pb-2">
                          {column.links.map((link) => {
                            const active = pathname === link.href;
                            return (
                              <li key={`${column.title}-${link.href}-${link.label}`}>
                                <Link
                                  href={link.href}
                                  aria-current={active ? "page" : undefined}
                                  className={cn(
                                    "flex min-h-11 items-center rounded-lg px-2 text-sm",
                                    active
                                      ? "bg-brand-soft font-semibold text-brand"
                                      : "text-body hover:text-brand"
                                  )}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </Disclosure>
                    ))}
                  </div>
                </div>
              </Disclosure>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex min-h-12 items-center border-b border-border text-base font-medium transition-colors",
                  isActive(item.href) ? "text-brand" : "text-ink hover:text-brand"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="grid gap-3 border-t border-border bg-ivory px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Button asChild variant="brand" size="xl" className="w-full">
            <Link href="/contact#quote-form">Request a quote</Link>
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button asChild variant="brandOutline" size="xl" className="w-full">
              <a href={site.phoneHref}>
                <Phone className="size-4" />
                Call
              </a>
            </Button>
            <Button asChild variant="brandOutline" size="xl" className="w-full">
              <a href={site.whatsapp} target="_blank" rel="noreferrer noopener">
                WhatsApp
              </a>
            </Button>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="flex min-h-11 items-center justify-center gap-2 text-sm text-body"
          >
            <Mail className="size-4 text-brand" />
            {site.email}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
