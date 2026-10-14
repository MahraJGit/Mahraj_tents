import { faqs as homeFaqs } from "@/content/home";

export const DEFAULT_FAQ_INTRO =
  "Compact tents can often be scheduled within a few weeks. Large halls, hangars, and branded membranes need longer.";

export const DEFAULT_FAQS = homeFaqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export type FaqItem = {
  question: string;
  answer: string;
};

export function readFaqs(value: unknown): FaqItem[] {
  if (!Array.isArray(value)) return DEFAULT_FAQS.map((faq) => ({ ...faq }));

  return value
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const question = String((item as { question?: unknown }).question ?? "").trim();
      const answer = String((item as { answer?: unknown }).answer ?? "").trim();
      if (!question || !answer) return null;
      return { question, answer };
    })
    .filter((item): item is FaqItem => item !== null);
}

export function readFaqIntro(value: unknown) {
  return typeof value === "string" ? value : DEFAULT_FAQ_INTRO;
}
