import { tentImages } from "@/content/tent-catalog";
import type { PublicMedia } from "@/lib/public/media";
import type { LexicalContent } from "@/lib/public/rich-text";

export type JournalCategory = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  image: string;
};

export type JournalPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: LexicalContent;
  image: string;
  seoTitle: string;
  seoDescription: string;
  category: JournalCategory;
  author: string;
  readTime: string;
  publishedAt: string;
  featured: boolean;
};

function text(value: string) {
  return {
    type: "text",
    text: value,
    format: 0,
    version: 1,
    detail: 0,
    mode: "normal",
    style: "",
  };
}

function paragraph(value: string) {
  return {
    type: "paragraph",
    version: 1,
    direction: "ltr",
    format: "",
    indent: 0,
    children: [text(value)],
  };
}

function heading(value: string) {
  return {
    type: "heading",
    tag: "h2",
    version: 1,
    direction: "ltr",
    format: "",
    indent: 0,
    children: [text(value)],
  };
}

function article(
  blocks: Array<ReturnType<typeof paragraph> | ReturnType<typeof heading>>,
) {
  return {
    root: {
      type: "root",
      version: 1,
      direction: "ltr",
      format: "",
      indent: 0,
      children: blocks,
    },
  } as LexicalContent;
}

export const journalCategories: JournalCategory[] = [
  {
    id: "planning",
    title: "Planning",
    slug: "planning",
    subtitle: "Dates, guest counts, and site access",
    image: tentImages.event,
  },
  {
    id: "structures",
    title: "Structures",
    slug: "structures",
    subtitle: "Spans, frames, and when to use each shell",
    image: tentImages.modern,
  },
  {
    id: "hospitality",
    title: "Hospitality",
    slug: "hospitality",
    subtitle: "Weddings, majlis, and Ramadan",
    image: tentImages.luxury,
  },
  {
    id: "operations",
    title: "Operations",
    slug: "operations",
    subtitle: "Warehousing, sport, and longer covers",
    image: tentImages.industrial,
  },
];

const planning = journalCategories[0];
const structures = journalCategories[1];
const hospitality = journalCategories[2];
const operations = journalCategories[3];

export const journalPosts: JournalPost[] = [
  {
    id: "choosing-a-wedding-tent",
    title: "How to choose a wedding tent in the UAE",
    slug: "choosing-a-wedding-tent",
    excerpt:
      "Guest count, catering, and the view decide the span long before fabric colour does.",
    image: tentImages.event,
    seoTitle: "How to choose a wedding tent in the UAE",
    seoDescription:
      "A practical way to size a wedding tent for ceremony, dinner, and Gulf weather.",
    category: hospitality,
    author: "Mahraj Tents",
    readTime: "6 min read",
    publishedAt: "2026-03-12",
    featured: true,
    content: article([
      paragraph(
        "A wedding tent is a room with a date on it. The useful questions are how many people sit, where the catering comes from, and whether the ceremony and dinner share one shell.",
      ),
      heading("Start with covers, not with the peak"),
      paragraph(
        "A compact dinner can sit in a 12 metre span. Add a stage, a dance area, and a service lane and you are usually in a longer clear span. The peak, dome, or panoramic wall is the character. The span is the capacity.",
      ),
      heading("Keep the service off the guests"),
      paragraph(
        "Kitchens, generators, and decorators need a side of the tent that is not the photograph. Tell the supplier that early. A solid wall on the service side and a clear wall toward the garden is a common, calm arrangement.",
      ),
      heading("Book the date, then the dressing"),
      paragraph(
        "Lining, lighting points, and colour can follow. The frame and the crew cannot, especially in the cooler months when every garden in Dubai wants a tent. Share the date first.",
      ),
    ]),
  },
  {
    id: "clear-span-vs-framed-tents",
    title: "Clear-span tents and smaller frames, compared",
    slug: "clear-span-vs-framed-tents",
    excerpt:
      "When the middle of the room must stay empty, and when a lighter frame is enough.",
    image: tentImages.modern,
    seoTitle: "Clear-span tents compared with smaller frames",
    seoDescription:
      "How to choose between a clear-span hall and a smaller event frame.",
    category: structures,
    author: "Mahraj Tents",
    readTime: "7 min read",
    publishedAt: "2026-04-02",
    featured: true,
    content: article([
      paragraph(
        "Clear span means the interior has no poles. That is what exhibitions, banquets, and sports covers usually need. Smaller framed tents still have a place for lounges, entrances, and private rooms.",
      ),
      heading("Choose clear span when people or plant must move"),
      paragraph(
        "Stands, round tables, a stage, or a forklift all fail if a column lands in the plan. If you cannot draw the layout around poles, specify a clear span and accept the engineering that comes with it.",
      ),
      heading("Choose a smaller shell when the room is the point"),
      paragraph(
        "A capsule, a majlis, or a pyramid on a terrace does not need a 30 metre hall. A lighter structure is faster to build and easier to place beside a villa or a pool.",
      ),
      heading("Ask for the drawing"),
      paragraph(
        "The comparison is not a slogan. It is a plan with door positions. If the drawing still works after catering and furniture go on it, you have the right family of tent.",
      ),
    ]),
  },
  {
    id: "exhibition-tent-heights",
    title: "Exhibition tent height, doors, and stands",
    slug: "exhibition-tent-heights",
    excerpt:
      "A hall that looks large can still be wrong if the eave is too low for the stands.",
    image: tentImages.pyramid,
    seoTitle: "Exhibition tent height, doors, and stands",
    seoDescription:
      "What to specify so an outdoor exhibition tent works for stands and visitors.",
    category: planning,
    author: "Mahraj Tents",
    readTime: "6 min read",
    publishedAt: "2026-05-18",
    featured: true,
    content: article([
      paragraph(
        "Outdoor exhibitions fail in predictable ways: the door is on the wrong face, the eave cuts the top of a stand, or visitors queue in the sun because the arrival was never drawn.",
      ),
      heading("Height is an exhibit problem"),
      paragraph(
        "Ask for the internal clear height at the eave, not only the peak. Banners and stand towers live at the wall. If that number is short, a bigger floor area will not save the show.",
      ),
      heading("Doors are a crowd problem"),
      paragraph(
        "Put visitor doors on the arrival face and a separate opening for exhibitors and freight. One shared door looks efficient on a sketch and congests on opening morning.",
      ),
      heading("Branding is a panel, not a reprint"),
      paragraph(
        "Valances and gable ends carry the show identity. Confirm artwork before the membrane is finished, and keep the rest of the skin a colour that still looks right in daylight.",
      ),
    ]),
  },
  {
    id: "ramadan-tent-planning",
    title: "Planning a Ramadan tent before the season",
    slug: "ramadan-tent-planning",
    excerpt:
      "Nightly covers, catering access, and a structure that still feels calm in week three.",
    image: tentImages.luxury,
    seoTitle: "Planning a Ramadan tent before the season",
    seoDescription:
      "What to lock early for an iftar or suhoor tent in the UAE.",
    category: hospitality,
    author: "Mahraj Tents",
    readTime: "5 min read",
    publishedAt: "2026-01-20",
    featured: false,
    content: article([
      paragraph(
        "Ramadan tents are booked in a rush by people who waited, and calmly by people who did not. The difference is a seating count and a catering door agreed before the first week of the month.",
      ),
      heading("Plan the sitting, then the shell"),
      paragraph(
        "Majlis seating and banquet seating use the floor differently. A tent that is only 'large enough' still fails if the service lane crosses every guest. Draw the seats first.",
      ),
      heading("The tent stays up"),
      paragraph(
        "A month of evenings is not a weekend hire. Anchoring, cleaning access, and lighting that is comfortable after sunset belong in the first conversation, not in a variation halfway through.",
      ),
    ]),
  },
  {
    id: "warehouse-tent-or-building",
    title: "When a warehouse tent is enough",
    slug: "warehouse-tent-or-building",
    excerpt:
      "A fabric bay earns its place when the yard, the lease, or the programme will not wait for a shed.",
    image: tentImages.industrial,
    seoTitle: "When a warehouse tent is enough",
    seoDescription:
      "How to decide between a clear-span warehouse tent and a permanent building.",
    category: operations,
    author: "Mahraj Tents",
    readTime: "6 min read",
    publishedAt: "2026-06-09",
    featured: false,
    content: article([
      paragraph(
        "A warehouse tent is not a cheaper building. It is a faster one, and it can leave. That is the whole decision.",
      ),
      heading("Use it when the need can move"),
      paragraph(
        "Overflow stock, a seasonal workshop, or cover while a permanent shed is permitted. If the operation might relocate, a tent that can be struck is the honest specification.",
      ),
      heading("Size the door before the roof"),
      paragraph(
        "Forklifts, trucks, and the tallest rack decide the opening. A handsome span with the wrong door is a storeroom you cannot use. Bring the vehicle height to the survey.",
      ),
      heading("Say how long it stays"),
      paragraph(
        "A few months and several years are different anchoring and membrane conversations. Put the duration in the brief so the quotation matches the yard you actually have.",
      ),
    ]),
  },
  {
    id: "hiring-versus-buying-a-tent",
    title: "Hiring a tent versus buying one",
    slug: "hiring-versus-buying-a-tent",
    excerpt:
      "Hire when the date ends. Buy when the cover has a job that continues.",
    image: tentImages.hero,
    seoTitle: "Hiring a tent versus buying one",
    seoDescription:
      "A simple way to choose between tent rental and purchase.",
    category: planning,
    author: "Mahraj Tents",
    readTime: "5 min read",
    publishedAt: "2026-07-01",
    featured: false,
    content: article([
      paragraph(
        "Rental includes delivery, installation, the period the tent is up, and the strike. Purchase is the asset, with installation quoted beside it. Mixing the two in one sentence is how budgets go wrong.",
      ),
      heading("Hire for a programme"),
      paragraph(
        "Weddings, exhibitions, Ramadan, and most sports seasons end. Hiring keeps the structure off your balance sheet and puts removal in the same contract as the build.",
      ),
      heading("Buy for a yard that keeps the cover"),
      paragraph(
        "A logistics bay or a training cover that will still be there next year is usually a purchase or a long installation. Ask for that price separately from a weekend rate.",
      ),
    ]),
  },
];

export function coverMedia(post: JournalPost): PublicMedia {
  return {
    id: post.id,
    alt: post.title,
    caption: "",
    url: post.image,
    filename: post.image.split("/").pop() ?? "",
    mimeType: "image/jpeg",
    width: 1600,
    height: 1200,
    focalX: null,
    focalY: null,
    sizes: {},
  };
}
