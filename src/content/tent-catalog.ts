export const tentImages = {
  hero: "/images/tents/tent-hero.jpg",
  pyramid: "/images/tents/tent-pyramid.jpg",
  dome: "/images/tents/tent-dome.jpg",
  modern: "/images/tents/tent-modern.jpg",
  luxury: "/images/tents/tent-luxury.jpg",
  industrial: "/images/tents/tent-warehouse.jpg",
  event: "/images/tents/tent-event.jpg",
  install: "/images/tents/tent-install.jpg",
} as const;

export type TentImageKey = keyof typeof tentImages;
export type TentGroupId = "solutions" | "products";

export const tentGroups = [
  {
    id: "solutions" as const,
    slug: "tent-solutions",
    title: "Tent Solutions",
    sortOrder: 1,
  },
  {
    id: "products" as const,
    slug: "tent-structures",
    title: "Tent Structures",
    sortOrder: 2,
  },
];

export type TentSpec = {
  useCase: string;
  recommended: string;
  forceReduction: string;
};

export type TentOffering = {
  slug: string;
  title: string;
  groupId: TentGroupId;
  image: TentImageKey;
  excerpt: string;
  heroTitle: string;
  heroDescription: string;
  overviewTitle: string;
  overview: string;
  guideTitle: string;
  guide: string;
  points: [string, string, string];
  specs: TentSpec[];
};

const sharedSpecs = (
  compact: string,
  standard: string,
  large: string,
): TentSpec[] => [
  {
    useCase: "Compact",
    recommended: compact,
    forceReduction: "Private gatherings and VIP rooms",
  },
  {
    useCase: "Standard",
    recommended: standard,
    forceReduction: "Weddings, launches, and hospitality",
  },
  {
    useCase: "Large span",
    recommended: large,
    forceReduction: "Exhibitions, sport, and operations",
  },
];

export const tentOfferings: TentOffering[] = [
  {
    slug: "tent-rental",
    title: "Tent Rental",
    groupId: "solutions",
    image: "hero",
    excerpt:
      "Short and seasonal hire of clear-span tents, with delivery, installation, and strike handled by one team.",
    heroTitle: "Tent rental for events that cannot wait on a permanent build",
    heroDescription:
      "Hire a finished structure for a weekend, a season, or a project window. Mahraj Tents supplies the frame, fabric, anchoring, and crew.",
    overviewTitle: "Hire the structure. Keep the schedule.",
    overview:
      "Rental covers survey, delivery, build, and removal. You get a weather-ready tent without owning the asset, and the same crew returns for strike so the site is left clear.",
    guideTitle: "When rental is the right call",
    guide:
      "Choose rental when the date is fixed, the site is temporary, or you need a structure that can move between venues. Purchase and long-term lease stay available when the tent will stay in place.",
    points: [
      "Weekend, seasonal, and project-length hire",
      "Delivery, install, and strike included",
      "Layouts sized to guest count and site access",
    ],
    specs: sharedSpecs("10m x 10m", "15m x 25m", "20m x 40m"),
  },
  {
    slug: "wedding-tent",
    title: "Wedding Tent",
    groupId: "solutions",
    image: "event",
    excerpt:
      "Ceremony and reception tents with clear spans, soft interiors, and room for dining, stages, and guest flow.",
    heroTitle: "Wedding tents planned around the celebration, not the other way around",
    heroDescription:
      "Peaked, dome, and panoramic structures for nikah, receptions, and garden dinners across the UAE and wider Gulf.",
    overviewTitle: "A reception that still feels like a venue",
    overview:
      "We size the span for seating, a stage, and service routes, then dress the interior with lighting points, climate, and lined fabric so the tent reads as a room.",
    guideTitle: "Planning a wedding structure",
    guide:
      "Share the guest count, catering plan, and whether the ceremony and dinner share one space. We then match a pyramid, dome, or panoramic shell and confirm access for decorators.",
    points: [
      "Ceremony, dinner, and lounge zones",
      "Lined interiors and lighting provision",
      "Climate control for evening events",
    ],
    specs: sharedSpecs("12m x 12m", "15m x 30m", "20m x 40m"),
  },
  {
    slug: "event-tent",
    title: "Event Tent",
    groupId: "solutions",
    image: "event",
    excerpt:
      "Clear-span tents for launches, private dinners, conferences, and brand gatherings that need a fast, finished room.",
    heroTitle: "Event tents for gatherings that need a proper room outdoors",
    heroDescription:
      "Modular structures for corporate dinners, product launches, conferences, and private celebrations.",
    overviewTitle: "One shell, several event layouts",
    overview:
      "Open spans let planners switch between banquet, theatre, and lounge layouts without columns in the way. Side walls can be solid, clear, or opened for arrival.",
    guideTitle: "What we need from the brief",
    guide:
      "Date, location, expected attendance, and whether you need a stage, catering compound, or branded facade. From there we lock span, wall type, and build duration.",
    points: [
      "Banquet, theatre, and lounge layouts",
      "Clear or solid wall options",
      "Build windows matched to venue curfews",
    ],
    specs: sharedSpecs("10m x 15m", "15m x 30m", "25m x 50m"),
  },
  {
    slug: "exhibition-tent",
    title: "Exhibition Tent",
    groupId: "solutions",
    image: "modern",
    excerpt:
      "Temporary halls for outdoor expos, brand pavilions, and overflow exhibition space with visitor circulation built in.",
    heroTitle: "Exhibition tents that hold a show, not just a crowd",
    heroDescription:
      "Polygon, arch, and clear-span halls for trade displays, outdoor expos, and branded pavilions.",
    overviewTitle: "Span, height, and a path for visitors",
    overview:
      "Exhibition structures need door lines, rigging points, and enough eave height for stands. We plan those with the floor plan so exhibitors are not fighting the frame.",
    guideTitle: "Specifying an exhibition structure",
    guide:
      "Tell us stand count, vehicle access, and whether you need a blackout interior or a daylight hall. Branding can sit on valances and gable ends without reprinting the whole skin.",
    points: [
      "Daylight or blackout interiors",
      "Door lines for visitor flow",
      "Rigging and branding positions",
    ],
    specs: sharedSpecs("15m x 20m", "20m x 40m", "30m x 60m"),
  },
  {
    slug: "sports-tent",
    title: "Sports Tent",
    groupId: "solutions",
    image: "modern",
    excerpt:
      "Covered courts, training bays, and spectator hospitality with height and clear span kept free of internal columns.",
    heroTitle: "Sports tents with the height and span the game actually needs",
    heroDescription:
      "Arch and clear-span covers for training, courts, and hospitality beside the field of play.",
    overviewTitle: "Cover the play, keep the lines open",
    overview:
      "Sports covers are specified around clearance, runoff, and side ventilation. The frame stays outside the playing area so the surface underneath can be marked and maintained.",
    guideTitle: "Court and training covers",
    guide:
      "Share the sport, the required clear height, and whether the cover is seasonal or permanent. We then match an arch or clear-span frame and plan side openings for airflow.",
    points: [
      "Clear height for play and equipment",
      "Side ventilation for Gulf heat",
      "Seasonal or longer installations",
    ],
    specs: sharedSpecs("18m x 30m", "20m x 40m", "25m x 50m"),
  },
  {
    slug: "royal-tent",
    title: "Premium & Royal Tent",
    groupId: "solutions",
    image: "luxury",
    excerpt:
      "Formal hospitality tents for private celebrations, delegations, and hosts who need a quieter, more finished interior.",
    heroTitle: "Royal and premium tents for formal hospitality",
    heroDescription:
      "Lined majlis and reception structures with controlled arrival, seating, and service, built for private and official hosts.",
    overviewTitle: "Hospitality with a controlled arrival",
    overview:
      "Premium tents are planned as a sequence: arrival, majlis or dining, and discreet service. Fabrics, lighting, and climate are specified so the interior feels composed rather than temporary.",
    guideTitle: "A quieter brief",
    guide:
      "These projects usually start with protocol, guest numbers, and how separate the service route must be. We then choose a majlis, dome, or double-level shell to match.",
    points: [
      "Separate guest and service routes",
      "Lined fabric and formal seating plans",
      "Discreet climate and lighting",
    ],
    specs: sharedSpecs("12m x 18m", "15m x 30m", "20m x 35m"),
  },
  {
    slug: "ramadan-tent",
    title: "Ramadan Tent",
    groupId: "solutions",
    image: "luxury",
    excerpt:
      "Iftar and suhoor tents with majlis seating, service circulation, and a calm interior for the evening hours.",
    heroTitle: "Ramadan tents arranged for iftar, suhoor, and gathering",
    heroDescription:
      "Seasonal hospitality structures with seating, service lanes, and an interior planned for long evening sittings.",
    overviewTitle: "A tent that works for the whole evening",
    overview:
      "Ramadan tents need more than a roof. We plan seating density, prayer-adjacent flow where required, catering access, and lighting that stays comfortable after sunset.",
    guideTitle: "Seasonal hospitality, specified early",
    guide:
      "The useful details are nightly covers, catering style, and whether the tent stays for the month. Early confirmation keeps fabric, furniture, and crew available before the season peaks.",
    points: [
      "Iftar and suhoor seating plans",
      "Service lanes kept off the guest floor",
      "Month-long or shorter installations",
    ],
    specs: sharedSpecs("15m x 20m", "20m x 30m", "25m x 40m"),
  },
  {
    slug: "warehouse-tent",
    title: "Warehouse Tent",
    groupId: "solutions",
    image: "industrial",
    excerpt:
      "Clear-span fabric buildings for storage, workshops, and overflow operations when a permanent shed is not the answer.",
    heroTitle: "Warehouse tents for storage and working cover",
    heroDescription:
      "Aluminum clear-span structures with PVC membranes for logistics yards, workshops, and temporary operations.",
    overviewTitle: "Working cover without a permanent build",
    overview:
      "Warehouse tents give a dry, column-free bay for goods, plant, or a short production run. Spans, door height, and anchoring are set around forklifts and the yard you already have.",
    guideTitle: "Specifying an operations tent",
    guide:
      "We need the goods or process going inside, the tallest vehicle, and how long the cover must stay. Door type, lighting, and side ventilation follow from that.",
    points: [
      "Column-free storage bays",
      "Vehicle door heights planned in",
      "Temporary or multi-year installations",
    ],
    specs: sharedSpecs("15m x 30m", "20m x 40m", "30m x 60m"),
  },
  {
    slug: "aircraft-hangar-tent",
    title: "Aircraft Hangar Tent",
    groupId: "solutions",
    image: "industrial",
    excerpt:
      "Wide-span shelters for aircraft, ground equipment, and airside hospitality where a fixed hangar is not available.",
    heroTitle: "Hangar tents with the span aviation sites demand",
    heroDescription:
      "Wide, high clear-span structures for aircraft shelter, equipment cover, and airside reception.",
    overviewTitle: "Width and door height come first",
    overview:
      "Hangar tents are dimensioned around wingspan, tail height, and the door opening. The same engineering approach covers airside hospitality shells beside a show or maintenance event.",
    guideTitle: "What the airframe decides",
    guide:
      "Bring the aircraft type or the clear opening you must protect. We confirm span, eave height, door arrangement, and anchoring before fabric is cut.",
    points: [
      "Spans sized to wings and tail height",
      "Large door openings",
      "Shelter or airside hospitality use",
    ],
    specs: sharedSpecs("20m x 30m", "25m x 40m", "40m clear span"),
  },
  {
    slug: "pyramid-tent",
    title: "Pyramid Tent",
    groupId: "products",
    image: "pyramid",
    excerpt:
      "A peaked clear-span tent with a strong silhouette for weddings, pool decks, and branded receptions.",
    heroTitle: "Pyramid tents with a peak that reads from across the venue",
    heroDescription:
      "Single or linked peaks in heavy-duty PVC on an aluminum frame, for ceremonies, lounges, and waterfront receptions.",
    overviewTitle: "A classic peak, specified for the Gulf",
    overview:
      "The pyramid roof sheds weather and gives the event a recognisable outline. Peaks can stand alone or connect into a larger reception without a column in the middle of the room.",
    guideTitle: "Using a pyramid structure",
    guide:
      "Best where the tent should be seen as well as used: garden weddings, villa terraces, and brand receptions. Clear or solid walls change how open the peak feels at night.",
    points: [
      "Single or linked peaks",
      "Clear-span guest floor",
      "Solid or glazed wall options",
    ],
    specs: sharedSpecs("6m x 6m", "10m x 10m", "12m x 12m linked"),
  },
  {
    slug: "dome-tent",
    title: "Dome Tent",
    groupId: "products",
    image: "dome",
    excerpt:
      "A circular clear-span that keeps sightlines open for dining, launches, and hospitality lounges.",
    heroTitle: "Dome tents for open sightlines and a calm interior",
    heroDescription:
      "Round clear-span structures for dinners, lounges, and launches where guests should see across the room.",
    overviewTitle: "A room without a favoured corner",
    overview:
      "The dome puts everyone under one roof with no central column. It suits round dining, product reveals, and lounges where the plan is radial rather than a long hall.",
    guideTitle: "Where a dome earns its place",
    guide:
      "Choose it when the gathering is social and the view across the room matters. Diameter is set from seating and a clear service edge.",
    points: [
      "Column-free circular plan",
      "Even sightlines for dining",
      "Diameters matched to covers",
    ],
    specs: sharedSpecs("10m diameter", "15m diameter", "20m diameter"),
  },
  {
    slug: "capsule-tent",
    title: "Capsule Tent",
    groupId: "products",
    image: "dome",
    excerpt:
      "An elongated pod for VIP rooms, compact exhibitions, and lounges that need a softer outline.",
    heroTitle: "Capsule tents for VIP rooms and compact lounges",
    heroDescription:
      "A rounded, elongated shell for private hospitality, small exhibitions, and garden lounges.",
    overviewTitle: "Smaller footprint, finished interior",
    overview:
      "Capsule tents work where a full hall is too much. The rounded ends keep the structure visually light while still giving a clear interior for seating or a single exhibit.",
    guideTitle: "A pod, not a hall",
    guide:
      "Use a capsule for a private room beside a larger tent, a garden lounge, or a compact brand space. Several capsules can sit as a suite.",
    points: [
      "Soft rounded ends",
      "Suitable as a private room",
      "Can be grouped into a suite",
    ],
    specs: sharedSpecs("8m x 12m", "10m x 18m", "12m x 24m"),
  },
  {
    slug: "revolution-tent",
    title: "Revolution Tent",
    groupId: "products",
    image: "modern",
    excerpt:
      "A modular contemporary frame that resets between banquet, exhibition, and conference layouts.",
    heroTitle: "Revolution tents that change layout between events",
    heroDescription:
      "A modular aluminum system for organisers who reuse one structure across different programmes.",
    overviewTitle: "One frame, more than one brief",
    overview:
      "Bay lengths can be added or removed, and wall panels swap between open, clear, and solid. That makes the revolution tent a working tool for venues with a changing calendar.",
    guideTitle: "Modular by design",
    guide:
      "Tell us the largest and smallest events the structure must host. We set a bay module that can grow without a new engineering exercise each time.",
    points: [
      "Extendable bay modules",
      "Interchangeable wall panels",
      "Banquet or exhibition layouts",
    ],
    specs: sharedSpecs("10m x 15m", "15m x 30m", "20m x 50m"),
  },
  {
    slug: "polygon-tent",
    title: "Polygon Tent",
    groupId: "products",
    image: "modern",
    excerpt:
      "A faceted structure with a distinctive roof line for exhibitions and brand pavilions.",
    heroTitle: "Polygon tents with a roof line people remember",
    heroDescription:
      "Faceted clear-span structures for pavilions, exhibitions, and launches that need a stronger silhouette.",
    overviewTitle: "Architecture you can still strike",
    overview:
      "The polygon roof gives a pavilion its outline while the interior stays a clear span. It is a practical exhibition shell that does not look like a plain storage tent.",
    guideTitle: "Pavilion, not a box",
    guide:
      "Best for brand buildings, outdoor expos, and entrances that have to photograph well. Facets also give natural places for lighting and restrained branding.",
    points: [
      "Faceted roof profile",
      "Clear interior for stands",
      "Strong from a distance",
    ],
    specs: sharedSpecs("12m x 12m", "15m x 25m", "20m x 40m"),
  },
  {
    slug: "arch-tent",
    title: "Arch Tent",
    groupId: "products",
    image: "modern",
    excerpt:
      "A continuous arched span for sports covers, covered walkways, and long hospitality runs.",
    heroTitle: "Arch tents for long spans and covered routes",
    heroDescription:
      "Curved aluminum frames for courts, walkways, and hospitality that needs length more than a formal peak.",
    overviewTitle: "Length without a row of columns",
    overview:
      "The arch carries the span in a continuous curve, which suits sports covers and covered connections between venues. Ends can stay open or close with doors.",
    guideTitle: "Span and airflow",
    guide:
      "Share the width you must keep clear and whether the sides should breathe. Arch tents ventilate well, which matters for daytime sport and long pedestrian routes.",
    points: [
      "Continuous curved span",
      "Useful as a covered link",
      "Open or enclosed sides",
    ],
    specs: sharedSpecs("10m x 20m", "15m x 40m", "20m x 60m"),
  },
  {
    slug: "panoramic-tent",
    title: "Panoramic Tent",
    groupId: "products",
    image: "pyramid",
    excerpt:
      "Transparent walls and a wide opening so guests stay connected to the garden, water, or skyline.",
    heroTitle: "Panoramic tents that keep the view in the room",
    heroDescription:
      "Clear-wall structures for waterfront dinners, terraces, and any event where the setting is part of the brief.",
    overviewTitle: "Shelter without losing the site",
    overview:
      "Panoramic walls hold the weather out and the view in. The frame is kept slim so the tent does not turn a terrace into a closed hall unless you want it to.",
    guideTitle: "Specify the outlook first",
    guide:
      "We orient clear panels toward the view and solid panels toward service, sun, or neighbours. Evening lighting is planned so the interior does not mirror the glass.",
    points: [
      "Clear wall panels",
      "Oriented to the view",
      "Solid panels on the service side",
    ],
    specs: sharedSpecs("10m x 15m", "12m x 24m", "15m x 30m"),
  },
  {
    slug: "geodesic-tent",
    title: "Geodesic Tent",
    groupId: "products",
    image: "dome",
    excerpt:
      "A triangulated shell with high rigidity for premium lounges and sites exposed to wind.",
    heroTitle: "Geodesic tents with a rigid shell and an open floor",
    heroDescription:
      "Triangulated domes for lounges, exhibitions, and exposed sites that need stiffness as well as presence.",
    overviewTitle: "Stiffness from the geometry",
    overview:
      "The triangulated frame spreads load across the shell. That makes a geodesic tent a sound choice for premium lounges and locations where the wind exposure is part of the site.",
    guideTitle: "A dome with a job to do",
    guide:
      "Use it when you want a dome's interior and a stiffer structure. Diameter, anchorage, and door position are confirmed against the site before fabrication.",
    points: [
      "Triangulated aluminum shell",
      "Open floor for lounges",
      "Specified for exposed sites",
    ],
    specs: sharedSpecs("8m diameter", "12m diameter", "18m diameter"),
  },
  {
    slug: "wave-tent",
    title: "Wave Tent",
    groupId: "products",
    image: "modern",
    excerpt:
      "An undulating roof for festivals, product launches, and waterfront events that need a softer skyline.",
    heroTitle: "Wave tents with a roof that moves with the event",
    heroDescription:
      "An undulating clear-span profile for festivals, launches, and waterfront hospitality.",
    overviewTitle: "A skyline, still a clear span",
    overview:
      "The wave roof gives the event its photograph while the floor underneath stays open for stages, dining, or exhibits. It is a statement structure with a practical interior.",
    guideTitle: "Where the profile matters",
    guide:
      "Choose a wave tent when the structure is part of the branding. We still size bays around guest flow, stage height, and service access.",
    points: [
      "Undulating roof profile",
      "Open floor for a stage or dining",
      "Works on waterfront sites",
    ],
    specs: sharedSpecs("12m x 20m", "15m x 30m", "20m x 45m"),
  },
  {
    slug: "arabic-majlis-tent",
    title: "Arabic Majlis Tent",
    groupId: "products",
    image: "luxury",
    excerpt:
      "A majlis plan with modern climate control, perimeter seating, and a service path kept out of the gathering.",
    heroTitle: "Arabic majlis tents for gathering, not just for show",
    heroDescription:
      "Traditional majlis planning inside a modern clear-span tent, with climate, lighting, and service sorted.",
    overviewTitle: "The seating plan leads",
    overview:
      "A majlis tent is designed from the gathering outward: perimeter seating, a clear centre, and a service door that does not cross the guests. The structure can be traditional in character and current in specification.",
    guideTitle: "Hospitality first",
    guide:
      "Tell us the number of seats, whether dining shares the majlis, and how formal the arrival should be. Fabric lining and lighting follow that plan.",
    points: [
      "Perimeter majlis seating",
      "Separate service access",
      "Climate for long sittings",
    ],
    specs: sharedSpecs("12m x 18m", "15m x 25m", "20m x 30m"),
  },
  {
    slug: "double-decker-tent",
    title: "Double Decker Tent",
    groupId: "products",
    image: "pyramid",
    excerpt:
      "A two-level structure for viewing decks, VIP galleries, and urban sites where the footprint is limited.",
    heroTitle: "Double decker tents when the site has no more ground",
    heroDescription:
      "Two-storey tent structures for viewing, VIP galleries, and compact city sites.",
    overviewTitle: "A second floor instead of a larger footprint",
    overview:
      "When the plot will not grow, a double decker tent puts hospitality or viewing above the main floor. Stairs, loading, and balustrades are part of the specification, not an afterthought.",
    guideTitle: "Use the height",
    guide:
      "Best for VIP decks, commentary positions, and receptions above an exhibition floor. We confirm live load, stair position, and emergency exit before build.",
    points: [
      "Two usable levels",
      "Viewing or VIP galleries",
      "Stairs and exits designed in",
    ],
    specs: sharedSpecs("10m x 15m", "12m x 20m", "15m x 25m"),
  },
  {
    slug: "pyramid-dome-tent",
    title: "Pyramid Dome Tent",
    groupId: "products",
    image: "pyramid",
    excerpt:
      "A peaked roof over a rounded plan, combining ceremony presence with open circulation.",
    heroTitle: "Pyramid dome tents for ceremony presence and easy circulation",
    heroDescription:
      "A hybrid shell: the peak of a pyramid over the open plan of a dome.",
    overviewTitle: "Peak outside, circle inside",
    overview:
      "The pyramid dome gives a ceremony its outline and a dinner its sightlines. It suits weddings and receptions that want both a photograph and a comfortable room.",
    guideTitle: "A hybrid for celebrations",
    guide:
      "Choose it when a pure box feels too plain and a pure dome too quiet. We size the diameter from covers and keep service on the perimeter.",
    points: [
      "Peaked roof, rounded plan",
      "Open guest circulation",
      "Suited to ceremonies",
    ],
    specs: sharedSpecs("10m diameter", "14m diameter", "18m diameter"),
  },
  {
    slug: "curve-tent",
    title: "Curve Tent",
    groupId: "products",
    image: "modern",
    excerpt:
      "A swept roof line for entrances, stages, and event architecture that should feel sculpted.",
    heroTitle: "Curve tents for entrances, stages, and a sculpted roof",
    heroDescription:
      "A swept clear-span profile for arrivals, stages, and contemporary event architecture.",
    overviewTitle: "An entrance people notice",
    overview:
      "The curve tent works as a stage canopy, an arrival building, or a main hall with a softer roof line than a standard gable. The interior remains a clear span.",
    guideTitle: "Arrival or main hall",
    guide:
      "Decide whether the curve is the front door of a larger event or the room itself. That choice sets length, openness of the ends, and how it meets neighbouring tents.",
    points: [
      "Swept roof profile",
      "Useful as an entrance or stage",
      "Clear span underneath",
    ],
    specs: sharedSpecs("10m x 15m", "12m x 25m", "15m x 35m"),
  },
];

export function tentImage(key: TentImageKey) {
  return tentImages[key];
}

export function offeringsByGroup(groupId: TentGroupId) {
  return tentOfferings.filter((item) => item.groupId === groupId);
}
