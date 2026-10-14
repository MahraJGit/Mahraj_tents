import { tentImages } from "@/content/tent-catalog";

export const blogPage = {
  hero: {
    image: tentImages.hero,
    title: "Notes on specifying, hiring, and building tents",
    description:
      "Short guides for hosts, organisers, and site teams planning a structure in the UAE and wider GCC.",
    searchPlaceholder: 'Search "wedding", "warehouse", "Ramadan"…',
  },
  featured: {
    title: "Featured notes",
    articles: [],
  },
  topics: [
    {
      title: "Planning",
      subtitle: "Dates, counts, and access",
      image: tentImages.event,
    },
    {
      title: "Structures",
      subtitle: "Spans and which shell to use",
      image: tentImages.modern,
    },
    {
      title: "Hospitality",
      subtitle: "Weddings, majlis, and Ramadan",
      image: tentImages.luxury,
    },
    {
      title: "Operations",
      subtitle: "Yards, sport, and longer covers",
      image: tentImages.industrial,
    },
  ],
  workingOn: {
    title: "What are you planning?",
    description: "Filter notes by the kind of tent you need.",
    cards: [
      "Wedding",
      "Exhibition",
      "Ramadan",
      "Warehouse",
      "Sports",
    ],
  },
  latestInsights: {
    title: "Latest from the project desk",
    description:
      "Practical notes on span, hire, and how a tent is specified before the crew arrives.",
  },
  knowledgeHub: {
    title: "What the notes cover",
    cards: [
      "Wedding planning",
      "Structure choice",
      "Exhibition halls",
      "Hire or purchase",
    ],
  },
  caseStudy: {
    image: tentImages.install,
    title: "From a date and a site to a finished tent",
    description:
      "The useful work happens before build day: span, doors, anchoring, and a crew that already knows the programme.",
  },
  ctaPanels: {
    help: {
      title: "Not sure which structure fits?",
      description:
        "Tell us the date and what has to happen inside the tent. We will point you to a structure and a way to book it.",
    },
    subscribe: {
      title: "Occasional project notes",
      description:
        "Seasonal booking windows and short guides. Nothing weekly.",
      placeholder: "Enter your email address",
    },
  },
};
