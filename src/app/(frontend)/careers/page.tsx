import type { Metadata } from "next";

import { ComingSoon } from "@/components/layout/coming-soon";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        description="We are interested in installers, surveyors, and people who can talk a client through a tent."
      />
      <ComingSoon note="Open positions will be listed here. In the meantime, send your CV to our team." />
    </>
  );
}
