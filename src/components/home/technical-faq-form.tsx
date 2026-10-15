import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Section } from "@/components/layout/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DEFAULT_FAQS, type FaqItem } from "@/lib/services/faqs";

export function TechnicalFaqForm({
  formIdPrefix = "home",
  faqs = DEFAULT_FAQS,
  faqIntro = "Questions about hire, span, and installation. If yours is not here, send the date and the site.",
  formTitle = "Technical Expertise",
}: {
  formIdPrefix?: string;
  faqs?: FaqItem[];
  faqIntro?: string;
  formTitle?: string;
}) {
  const showFaqs = faqs.length > 0;

  return (
    <Section
      id="quote-form"
      tone="alt"
      spacing="none"
      className="scroll-mt-28"
    >
      <div
        className={
          showFaqs
            ? "grid items-start gap-10 py-16 lg:grid-cols-2 lg:gap-14 lg:py-20"
            : "grid items-start gap-10 py-16 lg:py-20"
        }
      >
        {showFaqs ? (
          <div>
            <h2 className="font-heading text-4xl font-semibold sm:text-5xl">
              Frequently asked questions
            </h2>
            {faqIntro ? (
              <p className="mt-4 text-sm leading-relaxed text-body">{faqIntro}</p>
            ) : null}

            <Accordion
              type="single"
              collapsible
              defaultValue={faqs[0]?.question}
              className="mt-7"
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={`${faq.question}-${index}`} value={faq.question}>
                  <AccordionTrigger className="py-4 text-start text-base font-medium text-ink hover:no-underline data-[state=open]:text-brand">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-body">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ) : null}

        <div className={showFaqs ? "rounded-2xl bg-card p-8 shadow-soft ring-1 ring-border lg:p-10" : "max-w-xl rounded-2xl bg-card p-8 shadow-soft ring-1 ring-border lg:p-10"}>
          <h3 className="font-heading text-2xl font-semibold sm:text-3xl">
            {formTitle}
          </h3>
          <EnquiryForm idPrefix={formIdPrefix} className="mt-6" />
        </div>
      </div>
    </Section>
  );
}
