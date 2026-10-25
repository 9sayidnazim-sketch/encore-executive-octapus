// Business facts sourced from encoreexecutive.co.uk (audited Oct 2026). Do not invent details here.
export const BUSINESS = {
  legalName: "Encore Executive Travel Ltd",
  brand: "Encore Executive Travel",
  phone: "01924 806407",
  phoneHref: "tel:01924806407",
  whatsapp: "447818708692",
  address: "206a Bridge Road, Horbury, Wakefield, England, WF4 5PS",
  philosophy: "Luxury, reliability and personalised service.",
  message: "We believe that the journey is just as important as the destination.",
};

export const whatsappLink = (text?: string) =>
  `https://api.whatsapp.com/send?phone=${BUSINESS.whatsapp}${text ? `&text=${encodeURIComponent(text)}` : ""}`;

const IMG = "https://lh3.googleusercontent.com/aida-public/";
export const IMAGES = {
  hero:
    IMG +
    "AB6AXuANklE0dFCTCg0o9eyTcHZQSrrMWpirJbgvp9e5y_UzLztGdCD60Yu1vssYpgzAjaa1xQ_FrChA0gZnjjSJRVq3QiF8-AGzhEQY-OpS74itGEXEY896-2BPFjVZ0P6iI1Q_14dRghxkrZzhTo1_0AHcElwz13hhG1Zn0SXv1Ob9ZttSAljJmAnut-wSabHTb8smOotT4lzF0zh_ipGEUjYgGEZH6pxPeIvnK0e29IZA5qUuyxv-glOzOw",
  airport:
    IMG +
    "AB6AXuD5-wwl5nbHii98wao3GQD2WB4onVrq-ODZLhnrUzVLHfgD7VCWVodo7qeiRhm7g5iERVc8qxIEyydMAju84YQxXi__bWNFNclMamfyI1Sr5cgR8FWhUHdysRCyAYXxDBBlLO8K_n-Hi1mgx2iVvPzIJe5B7K1i-vxUD4nTIFS07EoQG6IVlkpHqu7w1vH5e4ZtsOCFmTHpx8cqULgIrJnT-swCNeAanlQD6FzjEHSHSA0-3elKCaGhYA",
  corporate:
    IMG +
    "AB6AXuDBTKRARLkM5Ch-gFFi7HpDNQuv5LHjd8H3oyH1hAqnQAp97uQmDe5ZRMNjbMqWeem-3YaXC0Istwj2zBhGUT9UsIzIsVzlFDewJP9lFw0GOAIuSQmgOOZWP2Do_WZ9yjEqB-hqg0a9I-QPpn1RfHp3mEPHZLxXi0uF3nXFrBj8GqANzGvGsCjJwOu9lS_D5LzZhiAKK_3_nPLQ1y1lEPqwsGl4_1AAjyZVNLq9r7N4C1gn2rb4HSVJnA",
  wedding:
    IMG +
    "AB6AXuDu9dzlKXG2hnzxYIyY6tSHmUzlDNnNobo4QF20IK01OTW0kEcf_RWV2AkjXz_lLCwHsbON-AxW4sCfPuYf741n-iK91x1AmKWD7EJLLQX6_RdMGAKt6vx7gGt-Bf1OfaHKQxcG4uDivCxqBXRohPp6x1VTwoaNIdNa3Mi9Sb8_FtpqvYmCqtb8GTL5QLDQeuoEuPGBhOaR7XFgauQKOq0QYzZB1CSTFHRV7BvL-_CtPXa8CWrhxWwfLg",
  event:
    IMG +
    "AB6AXuCDPdTvxxfKTl7NaePGD2BxJv15l9wiuJ_Ta0iL1YrGGTlkSUXFSSrsxX7PwImoTXSNMYbu4BWYx3d67rYkCn9lTNMFN3HOckPeGceV2sxHGaCSdhTr1VLlIuHGXOSqUVV1VXEX0tHqFgLzBsVsdCBcfvy-DFCc27-J5N5W8xWMWa1lgdRx1APChwHOGb4nyufjZBvDpue7k8aiz58Qdyt3YsxiB4FMwoYhVfJEOtyLUg72RSgtMz6qNQ",
  eqs:
    IMG +
    "AB6AXuCz8YbU1hh7F5hxYjZgX4-4iKOcLaVO2hyU7EQmwc_u_f7ziApsVL-7Xu7mYo1pCSoYkK3aN0ivjGtoqqogmx93SdA5wB8u1u6aBtdGQKITsiDT-nryOK5a8rQB62VliAyB55YEsNub21X_XDFLrVmjlJgHuvVAQQHEqEidEY_sLZMaxpkr_EORtK3Bcwg4ZdO_dUy_9Ybv3SngsrF3msNI3CuWbRiynMESh6E8OyEhL1LX-PDlA6sjrA",
  vclass:
    IMG +
    "AB6AXuBYMYfP5pLsHEWrERNcVG-cxIkQGEgVDn6z6qa3MzSarEJj9ViGD33E2UpUQvWOyA4MKsqIEM_uPPoMSgNU317hBkyUZdcPjhlkyGIf6TJGWil5nbadzV1MgTskd1PWrm0Ew0wkOcy92NI4cdn3Zg5b_e8yWfgUSoFnMOrT0MISA6Ng-g09cN9oszNLd6yCMPzwtB9vAb0MnHhQLYMj9SMIqO0IU9aenk-DHfEU54y1ulNyK5uMNDer4A",
  interior:
    IMG +
    "AB6AXuBiOH5tLZA5i-6pkqasBBZ7o-FG65PbQHEt_rpRmeaq8fAeD7ubHjRI_5lwM0HlDE5BSROI4UgVCa73iJNiaohUL477gy0bb8Ttu7xvMAJ8Z8u6ixs635Gl8_9WC6m7Av1MpQtqschbaCZAUuq8shkpWJZ_LIKbgtMr-tW59zvO1IomKwPDpDPcTmBTxT60Ruc9d5hYbLoiyzvDzX-AB1nHF-TsHqms0nyeEYTGH3x__-id8iRM7Cs8Lw",
  city:
    IMG +
    "AB6AXuCqO1yxfIPdptV0308vcCD2Zb3BCO8mkiWDsWEKwNPg74TrB5F2vWZV95Pdj2vhR41HX9-icnaAvpejgbV8QU_nvqAnFSYxk0BYRRWvmRrmiMSJQwPf3qKWXtNN8GbfI3hUI5_te74E7RbhURYAqUN-EBI7k9T5hYPj-wmfMtFvI44Cm5kC8x2wiXuVGe4yvs62csZh6m1o9eBbNdlRRjhuU9gfpxIG5cYuvqS8udHnxHQTQeHv_8R1vQ",
  chauffeurDoor:
    IMG +
    "AB6AXuCqO1yxfIPdptV0308vcCD2Zb3BCO8mkiWDsWEKwNPg74TrB5F2vWZV95Pdj2vhR41HX9-icnaAvpejgbV8QU_nvqAnFSYxk0BYRRWvmRrmiMSJQwPf3qKWXtNN8GbfI3hUI5_te74E7RbhURYAqUN-EBI7k9T5hYPj-wmfMtFvI44Cm5kC8x2wiXuVGe4yvs62csZh6m1o9eBbNdlRRjhuU9gfpxIG5cYuvqS8udHnxHQTQeHv_8R1vQ",
  estate:
    IMG +
    "AB6AXuByhX_cNdF4ZbjQL4aUumVGxHDsdoibqCEPN0gxKQxhEt2gx6VqvUzHdlfP12geEPl6PVizDlu4w4LNVLLo0gET1G2BT3XkHQPDNfVODHn0xJ3KgtM-An8YjQA6e9uzAAmy-AP0z1GyfBsXN57uJichGLSDZV1ahkUPP1WKv8_YpOnNZgsdl-W0liR5UcecYtKDJ9_P4XpwLiLwRkcOPpLktrCai8rx7yrHW-h0ehfGqqIIAgxiy9C4qA",
};

export type FleetSlug = "mercedes-benz-eqs-450-plus" | "mercedes-benz-v-class";

export type Service = {
  slug: string;
  title: string;
  icon: string;
  image: string;
  heading: string;
  intro: string;
  original: string;
  forWhom: string;
  uses: string[];
  benefit: string;
  provide: string[];
  fleet: FleetSlug[];
  testimonialKey: string;
};

export const SERVICES: Service[] = [
  {
    slug: "airport-transfers",
    title: "Airport Transfers",
    icon: "flight_takeoff",
    image: IMAGES.airport,
    heading: "A more composed start and finish to your journey.",
    intro:
      "Travel to or from the airport with a professional chauffeur service arranged around your itinerary, with attention to timing, comfort and the details of your journey.",
    original:
      "Begin your journey stress-free with our premium airport transfer service. Whether you are travelling for business or pleasure, our team monitors live flight data to adjust for any changes, so that you reach your destination on time and in comfort. From the moment you step into one of our vehicles, your journey becomes our priority.",
    forWhom:
      "Business travellers, families and leisure passengers departing from or arriving at UK airports.",
    uses: [
      "Departure transfers from home, hotel or office to the terminal",
      "Arrival collections, coordinated with your flight details",
      "Business trips and holiday travel alike",
      "Journeys arranged in advance around your itinerary",
      "Group and family transfers with generous luggage space",
    ],
    benefit:
      "Live flight monitoring helps us coordinate collections when timings change, so you are not left waiting after a delay or an early landing.",
    provide: [
      "The airport and terminal, with pickup or drop-off address",
      "Date and time of travel",
      "Your flight number, where applicable",
      "Number of passengers and items of luggage",
    ],
    fleet: ["mercedes-benz-eqs-450-plus", "mercedes-benz-v-class"],
    testimonialKey: "Airport",
  },
  {
    slug: "wedding-chauffeur",
    title: "Wedding Chauffeur",
    icon: "favorite",
    image: IMAGES.wedding,
    heading: "Arrive beautifully on the day that matters most.",
    intro:
      "A stunning vehicle and a professional chauffeur to complement your wedding day, with shuttle options so your guests can enjoy the celebration too.",
    original:
      "Your wedding day is one of the most important days of your life, and we are here to help make it unforgettable. Our wedding chauffeur service includes a stunning vehicle to complement your special day, complete with a professional driver to ensure you arrive in style. We also offer shuttle services for guests, so everyone can enjoy the celebration without worry.",
    forWhom:
      "Couples, families and wedding planners arranging transport for the wedding party and guests.",
    uses: [
      "Bridal and groom arrivals at the ceremony",
      "Transfers between ceremony and reception venues",
      "Guest shuttle services",
      "Departures at the end of the celebration",
    ],
    benefit:
      "A calm, punctual arrival in an immaculate vehicle, leaving you free to focus on the day itself.",
    provide: [
      "Wedding date and approximate timings",
      "Ceremony and reception addresses",
      "Number of guests requiring transport",
      "Any particular requests for the vehicle",
    ],
    fleet: ["mercedes-benz-eqs-450-plus", "mercedes-benz-v-class"],
    testimonialKey: "Wedding",
  },
  {
    slug: "event-chauffeur",
    title: "Event Chauffeur",
    icon: "celebration",
    image: IMAGES.event,
    heading: "Make an entrance, then enjoy the occasion.",
    intro:
      "Exclusive chauffeur services for race days, theatre evenings, proms and special occasions, so you arrive in style and travel home without concern.",
    original:
      "Make a grand entrance at your next event with our exclusive chauffeur services. Whether it is a day at the races, a night at the theatre or a special occasion such as a prom, our vehicles and professional drivers ensure you arrive in style.",
    forWhom: "Individuals, friends and groups attending sporting, social and cultural occasions.",
    uses: [
      "York Races",
      "The Royal Ascot",
      "Cheltenham Races",
      "Proms and other special occasions",
      "Theatre and evening events",
    ],
    benefit:
      "No parking, no navigating and no need to leave early: your chauffeur handles the journey both ways.",
    provide: [
      "The event and venue",
      "Date, pickup time and expected return time",
      "Number of passengers",
      "Whether a return journey is required",
    ],
    fleet: ["mercedes-benz-v-class", "mercedes-benz-eqs-450-plus"],
    testimonialKey: "Event",
  },
  {
    slug: "corporate-travel",
    title: "Corporate Travel",
    icon: "business_center",
    image: IMAGES.corporate,
    heading: "Business travel, handled with discretion.",
    intro:
      "Punctual, professional chauffeur services for conferences, meetings and corporate events, in vehicles suited to work or quiet reflection.",
    original:
      "Impress your clients and partners with our corporate travel services. We understand the importance of punctuality and professionalism in business, and our chauffeurs are trained to provide a discreet and efficient service. Whether you are attending a conference, a business meeting or a corporate event, our vehicles provide a conducive environment for work or relaxation.",
    forWhom:
      "Companies, personal assistants and teams arranging travel for staff, clients and guests.",
    uses: [
      "Client meetings and site visits",
      "Conferences and exhibitions",
      "Corporate events and hospitality",
      "Roadshows and team transfers",
    ],
    benefit:
      "Discreet, reliable chauffeurs and a calm cabin that reflects well on your organisation.",
    provide: [
      "Company name and point of contact",
      "Journey details and timings",
      "Number of passengers",
      "Whether the requirement is one-off or recurring",
    ],
    fleet: ["mercedes-benz-eqs-450-plus", "mercedes-benz-v-class"],
    testimonialKey: "Corporate",
  },
  {
    slug: "executive-travel",
    title: "Executive Travel",
    icon: "workspace_premium",
    image: IMAGES.chauffeurDoor,
    heading: "Tailored travel for those who expect the best.",
    intro:
      "Regular or one-off executive journeys tailored to your requirements, with the option of a corporate account for ease of booking and billing.",
    original:
      "For those who demand the best, our executive travel service offers luxury and convenience. Whether you need regular transport for business or a one-off journey, we provide a service tailored to your needs, with the option of setting up a corporate account for ease of booking and billing.",
    forWhom:
      "Executives, directors and private clients who travel frequently or value a dependable, personal service.",
    uses: [
      "Regular business travel",
      "One-off journeys",
      "Point-to-point and as-directed travel",
      "Corporate account arrangements",
    ],
    benefit:
      "A consistent, personalised service, with account options that simplify booking and billing.",
    provide: [
      "Journey details and timings",
      "Frequency of travel",
      "Any preferences for vehicle or chauffeur",
      "Billing requirements, if opening an account",
    ],
    fleet: ["mercedes-benz-eqs-450-plus", "mercedes-benz-v-class"],
    testimonialKey: "Executive",
  },
];

export type Vehicle = {
  slug: FleetSlug;
  name: string;
  tagline: string;
  category: string;
  passengers: number;
  image: string;
  description: string[];
  features: string[];
  bestFor: string;
};

export const FLEET: Vehicle[] = [
  {
    slug: "mercedes-benz-eqs-450-plus",
    name: "Mercedes-Benz EQS 450+",
    tagline: "Silent luxury. Effortless elegance.",
    category: "All-electric executive saloon",
    passengers: 4,
    image: IMAGES.eqs,
    description: [
      "The Mercedes-Benz EQS 450+ is the all-electric evolution of luxury chauffeuring. As Mercedes' flagship electric saloon, it delivers the refinement expected of the brand's finest, with the added benefit of a whisper-quiet, zero-emission ride.",
      "Whether you are travelling for business or leisure, the EQS offers an exceptionally serene environment. Accommodating up to four passengers, it is the choice for those who expect the highest standards of comfort, luxury and sustainability.",
    ],
    features: [
      "High-speed Wi-Fi",
      "Sumptuous leather upholstery throughout",
      "Complimentary bottled water",
      "Heated seats with multi-zone climate control",
      "A generous boot for your luggage",
      "Active ambient lighting and panoramic sunroof",
      "Burmester surround-sound system",
      "Acoustic privacy glass",
      "Phone chargers",
    ],
    bestFor:
      "Individual executives, couples and small parties: airport transfers, business travel and weddings.",
  },
  {
    slug: "mercedes-benz-v-class",
    name: "Mercedes-Benz V-Class XLWB",
    tagline: "Luxury for larger groups.",
    category: "Extra-long wheelbase people carrier",
    passengers: 7,
    image: IMAGES.vclass,
    description: [
      "For group travel, the Mercedes V-Class is the ideal choice. This extra-long wheelbase model offers generous space and versatile seating, making it well suited to corporate events, airport transfers and family outings.",
      "With seating for up to seven passengers, the V-Class ensures that everyone travels together in comfort and style.",
    ],
    features: [
      "Premium leather seating in a conference-style configuration",
      "High-speed Wi-Fi",
      "Complimentary bottled water",
      "Ambient lighting and a starlight roof",
      "A large boot for all your luggage",
      "Phone chargers for all passengers",
    ],
    bestFor:
      "Families, teams and groups: airport transfers with luggage, race days, events and wedding guests.",
  },
];

export const QUALITIES = [
  {
    icon: "verified_user",
    title: "Professional and certified",
    text: "Courteous, professional chauffeurs who are fully licensed and insured.",
  },
  {
    icon: "shield_person",
    title: "DBS-checked chauffeurs",
    text: "Every chauffeur is DBS cleared for your peace of mind.",
  },
  {
    icon: "schedule",
    title: "Punctual",
    text: "Journeys planned around your timings, with live flight monitoring for airport work.",
  },
  {
    icon: "person_check",
    title: "Personalised service",
    text: "Each journey is tailored to your needs and treated with the same importance.",
  },
  {
    icon: "local_cafe",
    title: "Complimentary refreshments",
    text: "Complimentary drinks and snacks on board.",
  },
  {
    icon: "battery_charging_full",
    title: "Phone chargers",
    text: "Keep your devices powered throughout the journey.",
  },
];

export const TESTIMONIALS = [
  {
    title: "Luxury and Comfort",
    service: "Airport Transfer",
    quote:
      "The vehicle was immaculate, and the ride was incredibly comfortable. It was the perfect start to our vacation. Will definitely book again!",
  },
  {
    title: "Always On Time",
    service: "Airport Transfers",
    quote:
      "Exceptional service! They tracked our flight and ensured we arrived on time despite a delay. Can't thank them enough for the peace of mind.",
  },
  {
    title: "Top-Notch Experience",
    service: "Executive Travel",
    quote:
      "Impressed with the attention to detail and high-quality service. The chauffeur was courteous, and the car was pristine. A truly top-notch experience.",
  },
  {
    title: "Top-Notch Experience",
    service: "Event Chauffeur",
    quote:
      "Used their service for an event, and they exceeded all expectations. Punctual, courteous, and the car was spotless. The sweets and drinks were a lovely surprise!",
  },
  {
    title: "Perfect for Events",
    service: "Corporate Travel",
    quote:
      "Booked for a corporate event, and everything was flawless. The chauffeur was professional, and our guests were impressed. Will use again for all future events!",
  },
  {
    title: "Highly Recommend!",
    service: "Executive Travel",
    quote:
      "Outstanding service from start to finish. The booking process was easy, and the journey was comfortable. Great value for executive travel.",
  },
  {
    title: "Excellent Service!",
    service: "Executive Travel",
    quote:
      "Professional and punctual. The chauffeur made my business trip smooth and stress-free. Highly recommend for anyone needing reliable executive travel.",
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const getVehicle = (slug: string) => FLEET.find((v) => v.slug === slug);
