import { PartnerLogos } from "@/components/home/partner-logos";
import { Section } from "@/components/layout/section";
import { regions } from "@/content/home";
import { site } from "@/content/site";

export function RegionalPowerhouse() {
  return (
    <Section tone="alt">
      <div className="overflow-hidden rounded-2xl bg-card p-8 shadow-soft ring-1 ring-border lg:p-12">
        <div className="text-center">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-brand">
            Our regional presence
          </p>
          <span aria-hidden className="mx-auto mt-3 block h-0.5 w-10 bg-brand" />
          <h2 className="mt-4 font-heading text-4xl font-semibold sm:text-5xl">
            Trusted across the GCC
          </h2>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-body">
              Where we operate
            </h3>
            <ul className="mt-5 space-y-3">
              {regions.map((region) => (
                <li key={region} className="flex items-center gap-3 text-sm">
                  <span aria-hidden className="size-1.5 rounded-full bg-brand" />
                  {region}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-body">
              Regional footprint
            </h3>
            <div className="overflow-hidden rounded-xl ring-1 ring-border">
              <iframe
                title="Mahraj Tents, B2B Tower, Business Bay, Dubai"
                src={site.address.mapsEmbed}
                className="aspect-[16/10] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <PartnerLogos className="mt-12 border-t border-border pt-10" />
      </div>
    </Section>
  );
}
