export const site = {
  name: "Mahraj Tents",
  tagline: "Event, exhibition, and industrial tents across the UAE and GCC",
  description:
    "Mahraj Tents designs, supplies, and installs clear-span tents for weddings, exhibitions, sports, warehousing, Ramadan hospitality, and aviation sites.",
  url: "https://mahrajtents.com",
  phone: "+971 55 765 7570",
  phoneHref: "tel:+971557657570",
  email: "Tents@mahraj.com",
  whatsapp: "https://wa.me/971557657570",
  address: {
    line1: "2204, B2B Tower",
    line2: "Business Bay, Dubai",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=2204+B2B+Tower+Business+Bay+Dubai",
    mapsEmbed:
      "https://maps.google.com/maps?q=2204+B2B+Tower+Business+Bay+Dubai&z=16&output=embed",
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/mahrajtents/" },
    { label: "YouTube", href: "https://www.youtube.com/@MahrajTents" },
    { label: "Facebook", href: "https://www.facebook.com/mahrajtents/" },
    { label: "X", href: "https://x.com/mahrajtents" },
  ],
} as const;

export type NavLink = {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
};

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Tents", href: "/services", hasMegaMenu: true },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact" },
  { label: "Journal", href: "/blog" },
];
