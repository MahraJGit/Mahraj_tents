import type { Metadata } from "next";

import { AboutCta, AboutFaq } from "@/components/about/about-closing";
import {
  AboutCompliance,
  AboutObjectives,
  CommercialProcess,
} from "@/components/about/about-delivery";
import { AboutHero } from "@/components/about/about-hero";
import {
  AboutAudiences,
  AboutIndustries,
} from "@/components/about/about-industries";
import {
  AboutOverview,
  AboutPartners,
} from "@/components/about/about-overview";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "How Mahraj Tents plans, supplies, and installs clear-span structures across the UAE and GCC.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutPartners />
      <AboutOverview />
      <AboutIndustries />
      <AboutAudiences />
      <AboutObjectives />
      <CommercialProcess />
      <AboutCompliance />
      <AboutFaq />
      <AboutCta />
    </>
  );
}
