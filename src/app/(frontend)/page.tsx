import { CoreServices } from "@/components/home/core-services";
// import { FeaturedCaseStudies } from "@/components/home/featured-case-studies";
import { TentRange } from "@/components/home/tent-range";
import { Hero } from "@/components/home/hero";
import { IndustriesGrid } from "@/components/home/industries-grid";
import { RegionalPowerhouse } from "@/components/home/regional-powerhouse";
import { TechnicalFaqForm } from "@/components/home/technical-faq-form";
import { TechnicalInsights } from "@/components/home/technical-insights";

export default function Home() {
  return (
    <>
      <Hero />
      <TentRange />
      <CoreServices />
      {/* <FeaturedCaseStudies /> */}
      <IndustriesGrid />
      <RegionalPowerhouse />
      <TechnicalInsights />
      <TechnicalFaqForm />
    </>
  );
}
