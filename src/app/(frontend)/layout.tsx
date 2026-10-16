import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { HashScroll } from "@/components/layout/hash-scroll";
import { MobileActions } from "@/components/layout/mobile-actions";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { site } from "@/content/site";
import { getServiceMegaMenu } from "@/lib/public/services";
import "../globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Public pages render from static Mahraj Tents content.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Event, Exhibition, and Industrial Tents`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const megaMenu = await getServiceMegaMenu();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col bg-background pb-16 text-body md:pb-0"
        suppressHydrationWarning
      >
        <HashScroll />
        <SiteHeader megaMenu={megaMenu} />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
        <MobileActions />
      </body>
    </html>
  );
}
