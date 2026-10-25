import { EnquiryForm } from "./site/EnquiryForm";
import { Link } from "@tanstack/react-router";
/* Converted from the supplied design HTML */
export function HomeSections() {
  return (
    <>
      <section
        className="relative min-h-[90vh] flex items-center pt-8 pb-32 overflow-hidden bg-surface-container-lowest"
        id="hero"
      >
        {" "}
        <div className="absolute inset-0 z-0">
          {" "}
          <img
            className="w-full h-full object-cover opacity-35 object-center"
            alt="A cinematic, high-contrast, dusk capture of an obsidian-black executive chauffeur vehicle parked gracefully outside a historic British neo-classical London estate. Warm golden ambient street lamps reflect off the pristine metallic bodywork, while a smartly attired chauffeur in a crisp charcoal tailored suit stands courteously by the open passenger door. Moody, ultra-luxurious, and sharp."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANklE0dFCTCg0o9eyTcHZQSrrMWpirJbgvp9e5y_UzLztGdCD60Yu1vssYpgzAjaa1xQ_FrChA0gZnjjSJRVq3QiF8-AGzhEQY-OpS74itGEXEY896-2BPFjVZ0P6iI1Q_14dRghxkrZzhTo1_0AHcElwz13hhG1Zn0SXv1Ob9ZttSAljJmAnut-wSabHTb8smOotT4lzF0zh_ipGEUjYgGEZH6pxPeIvnK0e29IZA5qUuyxv-glOzOw"
          />{" "}
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-surface-container-lowest/90"></div>{" "}
          <div className="absolute inset-0 from-transparent via-surface/40 to-surface"></div>{" "}
        </div>{" "}
        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-margin pt-6">
          {" "}
          <div className="max-w-3xl space-y-6">
            {" "}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high/80 border border-outline-variant/40 backdrop-blur-md">
              {" "}
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>{" "}
              <span className="text-label-eyebrow font-label-eyebrow tracking-widest uppercase text-secondary">
                {" "}
                EXECUTIVE TRAVEL / AIRPORTS / BUSINESS / EVENTS{" "}
              </span>{" "}
            </div>{" "}
            <h1 className="text-display-hero-mobile md:text-display-hero font-display-hero tracking-tight text-white leading-tight">
              {" "}
              Luxury travel.
              <br /> <span className="text-primary-container">Made effortless.</span>{" "}
            </h1>{" "}
            <p className="text-body-lg font-body-lg text-secondary max-w-xl">
              {" "}
              Professional chauffeurs. Considered journeys. Comfort and absolute reliability, from
              collection to your seamless arrival across the UK.{" "}
            </p>{" "}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {" "}
              <Link
                className="orange-gradient-cta text-white font-label-button text-label-button px-8 py-4 rounded-full flex items-center gap-2.5 shadow-xl shadow-primary-container/25 active:scale-95 transition-all"
                to="/book-now"
              >
                {" "}
                <span>Book Your Journey</span>{" "}
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>{" "}
              </Link>{" "}
              <Link
                className="text-on-surface hover:text-white bg-surface-container/60 hover:bg-surface-container-high border border-outline-variant/40 backdrop-blur-md font-label-button text-label-button px-7 py-4 rounded-full flex items-center gap-2 transition-all"
                to="/fleet"
              >
                {" "}
                <span>Explore the Fleet</span>{" "}
                <span className="material-symbols-outlined text-[18px]">directions_car</span>{" "}
              </Link>{" "}
            </div>{" "}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-outline-variant/20 max-w-lg">
              {" "}
              <div className="flex items-center gap-2.5">
                {" "}
                <span className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary-container">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">verified</span>{" "}
                </span>{" "}
                <span className="text-body-sm font-body-sm text-secondary">Premium Fleet</span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2.5">
                {" "}
                <span className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary-container">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">flight_takeoff</span>{" "}
                </span>{" "}
                <span className="text-body-sm font-body-sm text-secondary">
                  Airport Transfers
                </span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2.5">
                {" "}
                <span className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary-container">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">shield_person</span>{" "}
                </span>{" "}
                <span className="text-body-sm font-body-sm text-secondary">
                  Vetted Chauffeurs
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="booking" className="relative max-w-[1320px] mx-auto px-4 md:px-8 py-10">
        <h2 className="text-headline-sm mb-6">Arrange Your Journey</h2>
        <EnquiryForm />
      </section>{" "}
      <section className="max-w-[1320px] mx-auto px-margin py-16">
        {" "}
        <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 sm:p-8">
          {" "}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/20">
            {" "}
            <div className="flex items-center gap-4 pt-4 sm:pt-0">
              {" "}
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0 border border-outline-variant/40">
                {" "}
                <span className="material-symbols-outlined text-primary-container text-[24px]">
                  verified_user
                </span>{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="text-title-md font-title-md text-on-surface">Professional</div>{" "}
                <div className="text-body-sm font-body-sm text-secondary">
                  Fully licensed &amp; DBS checked
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
              {" "}
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0 border border-outline-variant/40">
                {" "}
                <span className="material-symbols-outlined text-primary-container text-[24px]">
                  directions_car
                </span>{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="text-title-md font-title-md text-on-surface">
                  Pristine Fleet
                </div>{" "}
                <div className="text-body-sm font-body-sm text-secondary">
                  Carefully selected vehicles
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
              {" "}
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0 border border-outline-variant/40">
                {" "}
                <span className="material-symbols-outlined text-primary-container text-[24px]">
                  tune
                </span>{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="text-title-md font-title-md text-on-surface">Personalised</div>{" "}
                <div className="text-body-sm font-body-sm text-secondary">
                  Tailored journey arrangements
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
              {" "}
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0 border border-outline-variant/40">
                {" "}
                <span className="material-symbols-outlined text-primary-container text-[24px]">
                  timer
                </span>{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="text-title-md font-title-md text-on-surface">Punctual</div>{" "}
                <div className="text-body-sm font-body-sm text-secondary">
                  Real-time schedule tracking
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="max-w-[1320px] mx-auto px-margin py-12" id="services">
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {" "}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            {" "}
            <span className="text-label-eyebrow font-label-eyebrow uppercase tracking-widest text-primary-container">
              {" "}
              OUR SERVICES{" "}
            </span>{" "}
            <h2 className="text-headline-lg font-headline-lg text-white leading-tight">
              {" "}
              A better way
              <br />
              to travel.{" "}
            </h2>{" "}
            <p className="text-body-md font-body-md text-secondary">
              {" "}
              From UK airport transfers to corporate roadshows and weddings, we combine discreet
              professional chauffeurs with pristine executive vehicles tailored to your
              schedule.{" "}
            </p>{" "}
            <div className="pt-2">
              {" "}
              <Link
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-outline-variant/50 hover:border-primary-container text-on-surface hover:text-white transition-all text-label-button font-label-button"
                to="/services"
              >
                {" "}
                <span>Explore All Services</span>{" "}
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>{" "}
              </Link>{" "}
            </div>{" "}
            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/20 mt-8 space-y-3">
              {" "}
              <div className="flex items-center gap-2 text-primary font-medium text-title-md font-title-md">
                {" "}
                <span className="material-symbols-outlined">concierge</span>{" "}
                <span>Bespoke Concierge Bookings</span>{" "}
              </div>{" "}
              <p className="text-body-sm font-body-sm text-secondary">
                {" "}
                Have multi-city stops or an all-day executive itinerary? Contact Dany Williams and
                our concierge team directly.{" "}
              </p>{" "}
              <div className="text-primary-container font-semibold text-body-sm font-body-sm">
                01924 806407
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {" "}
            <div className="group relative rounded-[20px] overflow-hidden bg-surface-container border border-outline-variant/30 flex flex-col justify-end min-h-[380px] p-6 transition-all hover:border-primary-container/60">
              <Link
                to="/services/$slug"
                params={{ slug: "airport-transfers" }}
                aria-label="View service"
                className="absolute inset-0 z-20"
              />{" "}
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="A luxurious black executive vehicle quietly positioned in front of an international airport private jet terminal, runway tarmac in the soft twilight background, luggage neatly loaded by a chauffeur in formal attire. Sleek, cinematic, high contrast composition."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5-wwl5nbHii98wao3GQD2WB4onVrq-ODZLhnrUzVLHfgD7VCWVodo7qeiRhm7g5iERVc8qxIEyydMAju84YQxXi__bWNFNclMamfyI1Sr5cgR8FWhUHdysRCyAYXxDBBlLO8K_n-Hi1mgx2iVvPzIJe5B7K1i-vxUD4nTIFS07EoQG6IVlkpHqu7w1vH5e4ZtsOCFmTHpx8cqULgIrJnT-swCNeAanlQD6FzjEHSHSA0-3elKCaGhYA"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface/60 to-transparent"></div>{" "}
              <div className="relative z-10 space-y-2">
                {" "}
                <div className="w-10 h-10 rounded-full bg-primary-container/20 border border-primary-container flex items-center justify-center text-primary-container mb-3">
                  {" "}
                  <span className="material-symbols-outlined text-[20px]">flight_takeoff</span>{" "}
                </div>{" "}
                <h3 className="text-headline-sm font-headline-sm text-white">Airport Transfers</h3>{" "}
                <p className="text-body-sm font-body-sm text-secondary">
                  On-time, stress-free travel to Manchester, Heathrow, Leeds Bradford, and all UK
                  flight hubs.
                </p>{" "}
                <div className="pt-2 flex items-center justify-between text-body-sm text-primary font-medium">
                  {" "}
                  <span>Flight tracking included</span>{" "}
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-container group-hover:text-white transition-colors">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_outward
                    </span>{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="group relative rounded-[20px] overflow-hidden bg-surface-container border border-outline-variant/30 flex flex-col justify-end min-h-[380px] p-6 transition-all hover:border-primary-container/60">
              <Link
                to="/services/$slug"
                params={{ slug: "corporate-travel" }}
                aria-label="View service"
                className="absolute inset-0 z-20"
              />{" "}
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="A business executive in a sharply tailored suit working on an ultrathin laptop in the spacious leather rear seat of an executive vehicle with warm ambient reading lighting. Quiet, productive, and comfortable luxury mobile workspace."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBTKRARLkM5Ch-gFFi7HpDNQuv5LHjd8H3oyH1hAqnQAp97uQmDe5ZRMNjbMqWeem-3YaXC0Istwj2zBhGUT9UsIzIsVzlFDewJP9lFw0GOAIuSQmgOOZWP2Do_WZ9yjEqB-hqg0a9I-QPpn1RfHp3mEPHZLxXi0uF3nXFrBj8GqANzGvGsCjJwOu9lS_D5LzZhiAKK_3_nPLQ1y1lEPqwsGl4_1AAjyZVNLq9r7N4C1gn2rb4HSVJnA"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface/60 to-transparent"></div>{" "}
              <div className="relative z-10 space-y-2">
                {" "}
                <div className="w-10 h-10 rounded-full bg-primary-container/20 border border-primary-container flex items-center justify-center text-primary-container mb-3">
                  {" "}
                  <span className="material-symbols-outlined text-[20px]">
                    business_center
                  </span>{" "}
                </div>{" "}
                <h3 className="text-headline-sm font-headline-sm text-white">Corporate Travel</h3>{" "}
                <p className="text-body-sm font-body-sm text-secondary">
                  Mobile office environments for visiting directors, roadshows, and inter-city
                  appointments.
                </p>{" "}
                <div className="pt-2 flex items-center justify-between text-body-sm text-primary font-medium">
                  {" "}
                  <span>Dedicated corporate accounts</span>{" "}
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-container group-hover:text-white transition-colors">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_outward
                    </span>{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="group relative rounded-[20px] overflow-hidden bg-surface-container border border-outline-variant/30 flex flex-col justify-end min-h-[380px] p-6 transition-all hover:border-primary-container/60">
              <Link
                to="/services/$slug"
                params={{ slug: "wedding-chauffeur" }}
                aria-label="View service"
                className="absolute inset-0 z-20"
              />{" "}
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="An impeccably polished black luxury saloon adorned with delicate ivory satin ribbon parked outside an English stone cathedral, wedding couple laughing softly in the background. Exquisite elegance, dignified presentation, British luxury."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu9dzlKXG2hnzxYIyY6tSHmUzlDNnNobo4QF20IK01OTW0kEcf_RWV2AkjXz_lLCwHsbON-AxW4sCfPuYf741n-iK91x1AmKWD7EJLLQX6_RdMGAKt6vx7gGt-Bf1OfaHKQxcG4uDivCxqBXRohPp6x1VTwoaNIdNa3Mi9Sb8_FtpqvYmCqtb8GTL5QLDQeuoEuPGBhOaR7XFgauQKOq0QYzZB1CSTFHRV7BvL-_CtPXa8CWrhxWwfLg"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface/60 to-transparent"></div>{" "}
              <div className="relative z-10 space-y-2">
                {" "}
                <div className="w-10 h-10 rounded-full bg-primary-container/20 border border-primary-container flex items-center justify-center text-primary-container mb-3">
                  {" "}
                  <span className="material-symbols-outlined text-[20px]">favorite</span>{" "}
                </div>{" "}
                <h3 className="text-headline-sm font-headline-sm text-white">Wedding Chauffeurs</h3>{" "}
                <p className="text-body-sm font-body-sm text-secondary">
                  Impeccably turned-out vehicles, custom ribbons, and coordinated timing for your
                  special milestone.
                </p>{" "}
                <div className="pt-2 flex items-center justify-between text-body-sm text-primary font-medium">
                  {" "}
                  <span>Coordinated arrival schedule</span>{" "}
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-container group-hover:text-white transition-colors">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_outward
                    </span>{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="group relative rounded-[20px] overflow-hidden bg-surface-container border border-outline-variant/30 flex flex-col justify-end min-h-[380px] p-6 transition-all hover:border-primary-container/60">
              <Link
                to="/services/$slug"
                params={{ slug: "event-chauffeur" }}
                aria-label="View service"
                className="absolute inset-0 z-20"
              />{" "}
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Sophisticated guests arriving at York Races in high-fashion formal attire, stepping out of a gloss-black Mercedes V-Class onto cobblestones, subtle evening sky. Exclusive British sporting event ambiance."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDPdTvxxfKTl7NaePGD2BxJv15l9wiuJ_Ta0iL1YrGGTlkSUXFSSrsxX7PwImoTXSNMYbu4BWYx3d67rYkCn9lTNMFN3HOckPeGceV2sxHGaCSdhTr1VLlIuHGXOSqUVV1VXEX0tHqFgLzBsVsdCBcfvy-DFCc27-J5N5W8xWMWa1lgdRx1APChwHOGb4nyufjZBvDpue7k8aiz58Qdyt3YsxiB4FMwoYhVfJEOtyLUg72RSgtMz6qNQ"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface/60 to-transparent"></div>{" "}
              <div className="relative z-10 space-y-2">
                {" "}
                <div className="w-10 h-10 rounded-full bg-primary-container/20 border border-primary-container flex items-center justify-center text-primary-container mb-3">
                  {" "}
                  <span className="material-symbols-outlined text-[20px]">
                    confirmation_number
                  </span>{" "}
                </div>{" "}
                <h3 className="text-headline-sm font-headline-sm text-white">Event Chauffeurs</h3>{" "}
                <p className="text-body-sm font-body-sm text-secondary">
                  Royal Ascot, York Races, Cheltenham Festival, premier theatre galas, and concert
                  transport.
                </p>{" "}
                <div className="pt-2 flex items-center justify-between text-body-sm text-primary font-medium">
                  {" "}
                  <span>Wait-and-return options</span>{" "}
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-container group-hover:text-white transition-colors">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_outward
                    </span>{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section
        className="bg-surface-container-lowest py-24 border-y border-outline-variant/20"
        id="fleet"
      >
        {" "}
        <div className="max-w-[1320px] mx-auto px-margin space-y-12">
          {" "}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            {" "}
            <div className="space-y-3">
              {" "}
              <span className="text-label-eyebrow font-label-eyebrow uppercase tracking-widest text-primary-container">
                THE ENCORE FLEET
              </span>{" "}
              <h2 className="text-headline-lg font-headline-lg text-white">
                Space to travel well.
              </h2>{" "}
              <p className="text-body-md font-body-md text-secondary max-w-xl">
                {" "}
                A handpicked selection of meticulously maintained, high-specification luxury
                vehicles equipped with high-speed connectivity and refreshments.{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex items-center gap-3">
              {" "}
              <Link
                to="/fleet"
                aria-label="Explore fleet"
                className="w-12 h-12 rounded-full border border-outline-variant/40 bg-surface-container flex items-center justify-center text-on-surface hover:text-white hover:border-primary-container transition-all"
                type="button"
              >
                {" "}
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>{" "}
              </Link>{" "}
              <Link
                to="/fleet"
                aria-label="View all vehicles"
                className="w-12 h-12 rounded-full border border-outline-variant/40 bg-surface-container flex items-center justify-center text-on-surface hover:text-white hover:border-primary-container transition-all"
                type="button"
              >
                {" "}
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {" "}
            <div className="bg-surface-container-low rounded-[24px] border border-outline-variant/30 overflow-hidden flex flex-col justify-between group">
              {" "}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-surface-container">
                {" "}
                <img
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  alt="A pristine black Mercedes-Benz EQS 450+ electric luxury saloon parked in an ultra-modern glass architectural courtyard in central London. Crisp reflections, aerodynamic curves, glowing digital headlights, and immaculate executive stance."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz8YbU1hh7F5hxYjZgX4-4iKOcLaVO2hyU7EQmwc_u_f7ziApsVL-7Xu7mYo1pCSoYkK3aN0ivjGtoqqogmx93SdA5wB8u1u6aBtdGQKITsiDT-nryOK5a8rQB62VliAyB55YEsNub21X_XDFLrVmjlJgHuvVAQQHEqEidEY_sLZMaxpkr_EORtK3Bcwg4ZdO_dUy_9Ybv3SngsrF3msNI3CuWbRiynMESh6E8OyEhL1LX-PDlA6sjrA"
                />{" "}
                <div className="absolute top-4 left-4 bg-surface/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-outline-variant/30 text-label-eyebrow font-label-eyebrow text-white flex items-center gap-2">
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>{" "}
                  <span>100% All-Electric Luxury</span>{" "}
                </div>{" "}
                <div className="absolute bottom-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full border border-outline-variant/30 text-body-sm font-body-sm text-secondary">
                  {" "}
                  Saloon Executive{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-8 space-y-6">
                {" "}
                <div className="flex items-start justify-between">
                  {" "}
                  <div>
                    {" "}
                    <h3 className="text-headline-md font-headline-md text-white">
                      Mercedes-Benz EQS 450+
                    </h3>{" "}
                    <p className="text-body-sm font-body-sm text-secondary mt-1">
                      Silent electric poise paired with sovereign digital cabin refinement.
                    </p>{" "}
                  </div>{" "}
                  <span className="px-3 py-1 rounded-full bg-primary-container/20 text-primary-container text-body-sm font-semibold">
                    Flagship
                  </span>{" "}
                </div>{" "}
                <div className="flex items-center gap-6 py-2 border-y border-outline-variant/20 text-body-sm font-body-sm text-secondary">
                  {" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary-container text-[18px]">
                      person
                    </span>{" "}
                    <span>Up to 4 Passengers</span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary-container text-[18px]">
                      luggage
                    </span>{" "}
                    <span>2-3 Large Bags</span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary-container text-[18px]">
                      wifi
                    </span>{" "}
                    <span>5G Wi-Fi</span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="grid grid-cols-2 gap-3 text-body-sm font-body-sm text-secondary">
                  {" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary-container text-[16px]">
                      check_circle
                    </span>{" "}
                    <span>Nappa Executive Leather</span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary-container text-[16px]">
                      check_circle
                    </span>{" "}
                    <span>Acoustic Privacy Glass</span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary-container text-[16px]">
                      check_circle
                    </span>{" "}
                    <span>Burmester 3D Surround</span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary-container text-[16px]">
                      check_circle
                    </span>{" "}
                    <span>Chilled Bottled Water</span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="pt-4 flex items-center justify-between">
                  {" "}
                  <Link
                    className="orange-gradient-cta text-white font-label-button text-label-button px-6 py-3 rounded-full flex items-center gap-2"
                    to="/fleet/$slug"
                    params={{ slug: "mercedes-benz-eqs-450-plus" }}
                  >
                    {" "}
                    <span>Reserve EQS 450+</span>{" "}
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>{" "}
                  </Link>{" "}
                  <span className="text-body-sm font-body-sm text-secondary">
                    Fixed-rate quotation available
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-surface-container-low rounded-[24px] border border-outline-variant/30 overflow-hidden flex flex-col justify-between group">
              {" "}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-surface-container">
                {" "}
                <img
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  alt="A deep metallic black Mercedes-Benz V-Class Extra-Long Wheelbase passenger van arriving in front of a private jet hangar in England, dusk sky with warm tarmac floodlights. Executive group luxury and effortless space."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYMYfP5pLsHEWrERNcVG-cxIkQGEgVDn6z6qa3MzSarEJj9ViGD33E2UpUQvWOyA4MKsqIEM_uPPoMSgNU317hBkyUZdcPjhlkyGIf6TJGWil5nbadzV1MgTskd1PWrm0Ew0wkOcy92NI4cdn3Zg5b_e8yWfgUSoFnMOrT0MISA6Ng-g09cN9oszNLd6yCMPzwtB9vAb0MnHhQLYMj9SMIqO0IU9aenk-DHfEU54y1ulNyK5uMNDer4A"
                />{" "}
                <div className="absolute top-4 left-4 bg-surface/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-outline-variant/30 text-label-eyebrow font-label-eyebrow text-white flex items-center gap-2">
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>{" "}
                  <span>Extra-Long Wheelbase (XLWB)</span>{" "}
                </div>{" "}
                <div className="absolute bottom-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full border border-outline-variant/30 text-body-sm font-body-sm text-secondary">
                  {" "}
                  Group Executive{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-8 space-y-6">
                {" "}
                <div className="flex items-start justify-between">
                  {" "}
                  <div>
                    {" "}
                    <h3 className="text-headline-md font-headline-md text-white">
                      Mercedes-Benz V-Class XLWB
                    </h3>{" "}
                    <p className="text-body-sm font-body-sm text-secondary mt-1">
                      Conferencing capability with expansive luggage capacity for teams &amp;
                      families.
                    </p>{" "}
                  </div>{" "}
                  <span className="px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/40 text-on-surface text-body-sm font-semibold">
                    XL Space
                  </span>{" "}
                </div>{" "}
                <div className="flex items-center gap-6 py-2 border-y border-outline-variant/20 text-body-sm font-body-sm text-secondary">
                  {" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary-container text-[18px]">
                      group
                    </span>{" "}
                    <span>Up to 7 Passengers</span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary-container text-[18px]">
                      luggage
                    </span>{" "}
                    <span>6-7 Large Suitcases</span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary-container text-[18px]">
                      meeting_room
                    </span>{" "}
                    <span>Face-to-Face Seating</span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="grid grid-cols-2 gap-3 text-body-sm font-body-sm text-secondary">
                  {" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary-container text-[16px]">
                      check_circle
                    </span>{" "}
                    <span>Conference Seating Table</span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary-container text-[16px]">
                      check_circle
                    </span>{" "}
                    <span>Ambient Starlight Ceiling</span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary-container text-[16px]">
                      check_circle
                    </span>{" "}
                    <span>USB-C Quick-Charge Ports</span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary-container text-[16px]">
                      check_circle
                    </span>{" "}
                    <span>Mineral Water &amp; Confectionery</span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="pt-4 flex items-center justify-between">
                  {" "}
                  <Link
                    className="orange-gradient-cta text-white font-label-button text-label-button px-6 py-3 rounded-full flex items-center gap-2"
                    to="/fleet/$slug"
                    params={{ slug: "mercedes-benz-v-class" }}
                  >
                    {" "}
                    <span>Reserve V-Class XLWB</span>{" "}
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>{" "}
                  </Link>{" "}
                  <span className="text-body-sm font-body-sm text-secondary">
                    Ideal for roadshows &amp; events
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="py-24 bg-[#FAFAF8] text-neutral-900" id="approach">
        {" "}
        <div className="max-w-[1320px] mx-auto px-margin">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {" "}
            <div className="lg:col-span-6 relative">
              {" "}
              <div className="rounded-[24px] overflow-hidden shadow-2xl">
                {" "}
                <img
                  className="w-full h-[480px] object-cover"
                  alt="A close-up interior photograph of a pristine executive vehicle rear passenger compartment, featuring diamond-quilted nappa leather seats, a polished fold-out wooden tray table holding an espresso cup, and soft morning sunlight pouring through tinted privacy windows."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiOH5tLZA5i-6pkqasBBZ7o-FG65PbQHEt_rpRmeaq8fAeD7ubHjRI_5lwM0HlDE5BSROI4UgVCa73iJNiaohUL477gy0bb8Ttu7xvMAJ8Z8u6ixs635Gl8_9WC6m7Av1MpQtqschbaCZAUuq8shkpWJZ_LIKbgtMr-tW59zvO1IomKwPDpDPcTmBTxT60Ruc9d5hYbLoiyzvDzX-AB1nHF-TsHqms0nyeEYTGH3x__-id8iRM7Cs8Lw"
                />{" "}
              </div>{" "}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-neutral-200 hidden sm:block max-w-xs">
                {" "}
                <div className="text-headline-sm font-headline-sm text-neutral-900">
                  10+ Years
                </div>{" "}
                <div className="text-body-sm font-body-sm text-neutral-600 mt-1">
                  Of proven chauffeur excellence across Yorkshire and nationwide UK destinations.
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="lg:col-span-6 space-y-6">
              {" "}
              <span className="text-label-eyebrow font-label-eyebrow uppercase tracking-widest text-primary-container">
                {" "}
                THE ENCORE APPROACH{" "}
              </span>{" "}
              <h2 className="text-headline-lg font-headline-lg text-neutral-900 leading-tight">
                {" "}
                Considered in
                <br />
                every single detail.{" "}
              </h2>{" "}
              <p className="text-body-lg font-body-lg text-neutral-700">
                {" "}
                We believe that the journey is just as important as the destination. This is the
                ethos with which we deliver our service.{" "}
              </p>{" "}
              <p className="text-body-md font-body-md text-neutral-600">
                {" "}
                From vehicle climate pre-conditioning to seamless live flight monitoring, every
                journey is managed with understated discretion, absolute punctuality, and calm
                composure.{" "}
              </p>{" "}
              <div className="space-y-4 pt-4 border-t border-neutral-200">
                {" "}
                <div className="flex items-start gap-4">
                  {" "}
                  <span className="w-8 h-8 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0 mt-0.5">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">verified</span>{" "}
                  </span>{" "}
                  <div>
                    {" "}
                    <h4 className="text-title-md font-title-md text-neutral-900">
                      Professional, DBS-Checked Chauffeurs
                    </h4>{" "}
                    <p className="text-body-sm font-body-sm text-neutral-600">
                      Courteous, certified drivers who respect client privacy and confidentiality.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start gap-4">
                  {" "}
                  <span className="w-8 h-8 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0 mt-0.5">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">local_cafe</span>{" "}
                  </span>{" "}
                  <div>
                    {" "}
                    <h4 className="text-title-md font-title-md text-neutral-900">
                      Complimentary Cabin Amenities
                    </h4>{" "}
                    <p className="text-body-sm font-body-sm text-neutral-600">
                      Chilled bottled water, confectionery, high-speed multi-device phone chargers,
                      and daily publications.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start gap-4">
                  {" "}
                  <span className="w-8 h-8 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0 mt-0.5">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">flight_land</span>{" "}
                  </span>{" "}
                  <div>
                    {" "}
                    <h4 className="text-title-md font-title-md text-neutral-900">
                      Intelligent Flight Delay Buffering
                    </h4>{" "}
                    <p className="text-body-sm font-body-sm text-neutral-600">
                      We dynamically track commercial and private flight numbers to guarantee your
                      chauffeur is waiting the moment you exit baggage claim.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="pt-4">
                {" "}
                <a
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-label-button font-label-button"
                  href="tel:01924806407"
                >
                  {" "}
                  <span>Speak to Concierge: 01924 806407</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">call</span>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="py-20 bg-surface" id="business">
        {" "}
        <div className="max-w-[1320px] mx-auto px-margin">
          {" "}
          <div className="rounded-[28px] bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low border border-outline-variant/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {" "}
            <div className="relative z-10 max-w-2xl space-y-6">
              {" "}
              <span className="text-label-eyebrow font-label-eyebrow uppercase tracking-widest text-primary-container">
                {" "}
                CORPORATE &amp; EXECUTIVE ACCOUNTS{" "}
              </span>{" "}
              <h2 className="text-headline-lg font-headline-lg text-white">
                {" "}
                Business travel,
                <br />
                thoughtfully arranged.{" "}
              </h2>{" "}
              <p className="text-body-lg font-body-lg text-secondary">
                {" "}
                Provide your visiting leadership, board members, and executive clients with an
                uncompromising standard of mobility. Centralized monthly invoicing, priority
                dispatch, and dedicated journey managers.{" "}
              </p>{" "}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                {" "}
                <Link
                  className="orange-gradient-cta text-white font-label-button text-label-button px-8 py-3.5 rounded-full flex items-center gap-2 shadow-lg"
                  to="/contact"
                >
                  {" "}
                  <span>Discuss Corporate Travel</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>{" "}
                </Link>{" "}
                <Link
                  className="text-on-surface hover:text-white border border-outline-variant/40 hover:border-outline px-6 py-3.5 rounded-full font-label-button text-label-button transition-colors"
                  to="/business"
                >
                  {" "}
                  Discuss a Business Account{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 pointer-events-none hidden lg:block">
              {" "}
              <img
                className="w-full h-full object-cover"
                alt="Abstract architectural composition of an executive London financial district high-rise skyscraper with dramatic glass reflections at night."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqO1yxfIPdptV0308vcCD2Zb3BCO8mkiWDsWEKwNPg74TrB5F2vWZV95Pdj2vhR41HX9-icnaAvpejgbV8QU_nvqAnFSYxk0BYRRWvmRrmiMSJQwPf3qKWXtNN8GbfI3hUI5_te74E7RbhURYAqUN-EBI7k9T5hYPj-wmfMtFvI44Cm5kC8x2wiXuVGe4yvs62csZh6m1o9eBbNdlRRjhuU9gfpxIG5cYuvqS8udHnxHQTQeHv_8R1vQ"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="py-16 bg-surface-container-lowest">
        {" "}
        <div className="max-w-[1320px] mx-auto px-margin space-y-8">
          {" "}
          <div className="flex items-end justify-between">
            {" "}
            <div>
              {" "}
              <span className="text-label-eyebrow font-label-eyebrow uppercase tracking-widest text-primary-container">
                OUR PORTFOLIO
              </span>{" "}
              <h2 className="text-headline-md font-headline-md text-white mt-1">
                Journeys across the UK.
              </h2>{" "}
            </div>{" "}
            <div className="hidden sm:flex items-center gap-2 text-secondary text-body-sm font-body-sm">
              {" "}
              <span>London · Manchester · Leeds · York · Edinburgh</span>{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {" "}
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              {" "}
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="A sleek black executive vehicle gliding over London Westminster Bridge at dusk with the illuminated Big Ben clock tower in the backdrop."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-2B60SDk3b5mkuDHDIeBRnjMw5R6SJ-XS5eN62GThHZ-5qDvWeI-3IvdUDYgRaVueZlv60fESArxUzm2bnrnzQxTKqjDeNpkKBR8BWAM9lvarAJSZFWfcoGgrpjx-r7i6GZeo-67tOawzVtWKxPHH3V93bxzwVQdUyblhI4blgvXyMx9g2BNhB7gBvY-wMJaMIEW3Z51rVQIyDDmvd53qStot4gxQzyVI76vCM5tChPnM_u9U4R_-XA"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>{" "}
              <span className="absolute bottom-3 left-3 text-body-sm text-white font-medium">
                Westminster, London
              </span>{" "}
            </div>{" "}
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              {" "}
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="A chauffeur opening an executive car door for a client outside the iconic Royal Albert Hall evening concert hall in London."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqO1yxfIPdptV0308vcCD2Zb3BCO8mkiWDsWEKwNPg74TrB5F2vWZV95Pdj2vhR41HX9-icnaAvpejgbV8QU_nvqAnFSYxk0BYRRWvmRrmiMSJQwPf3qKWXtNN8GbfI3hUI5_te74E7RbhURYAqUN-EBI7k9T5hYPj-wmfMtFvI44Cm5kC8x2wiXuVGe4yvs62csZh6m1o9eBbNdlRRjhuU9gfpxIG5cYuvqS8udHnxHQTQeHv_8R1vQ"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>{" "}
              <span className="absolute bottom-3 left-3 text-body-sm text-white font-medium">
                Royal Albert Hall
              </span>{" "}
            </div>{" "}
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              {" "}
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="A luxury executive saloon vehicle parked on private airport runway tarmac right next to a sleek private charter jet aircraft."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ND2uhgP4QaTXgbTXvd4rD4wSxe5xBYnCo0TkVrixM6xZMbmgZrQcTYduo7H7GpeBG3AGcbTC9lMVK5cNzIKnJuI5H8tfDW3PPSUYzfIIisn2D6ta8k1s3pnz0ZFLOH9_PZya773fmstByDsfyaSrIQsCY5xaT16nN-r3mpBjIkt2iugfKJW9THTq40e50IQpqX9mZjHHa2suFK5cTErkh8hKrtTsSWvKZRerrZ_0reyqP5wd-xwNnw"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>{" "}
              <span className="absolute bottom-3 left-3 text-body-sm text-white font-medium">
                VIP Aviation Terminal
              </span>{" "}
            </div>{" "}
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              {" "}
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="An executive vehicle parked outside a classic Yorkshire country estate during a prestigious corporate leadership retreat."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByhX_cNdF4ZbjQL4aUumVGxHDsdoibqCEPN0gxKQxhEt2gx6VqvUzHdlfP12geEPl6PVizDlu4w4LNVLLo0gET1G2BT3XkHQPDNfVODHn0xJ3KgtM-An8YjQA6e9uzAAmy-AP0z1GyfBsXN57uJichGLSDZV1ahkUPP1WKv8_YpOnNZgsdl-W0liR5UcecYtKDJ9_P4XpwLiLwRkcOPpLktrCai8rx7yrHW-h0ehfGqqIIAgxiy9C4qA"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>{" "}
              <span className="absolute bottom-3 left-3 text-body-sm text-white font-medium">
                Yorkshire Estate Retreat
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="py-20 bg-surface">
        {" "}
        <div className="max-w-[1320px] mx-auto px-margin space-y-12">
          {" "}
          <div className="text-center max-w-xl mx-auto space-y-3">
            {" "}
            <span className="text-label-eyebrow font-label-eyebrow uppercase tracking-widest text-primary-container">
              CLIENT REVIEWS
            </span>{" "}
            <h2 className="text-headline-lg font-headline-lg text-white">What our clients say.</h2>{" "}
            <p className="text-body-md font-body-md text-secondary">
              Verified feedback from our corporate partners, private clients, and international
              travelers.
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {" "}
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 flex flex-col justify-between space-y-6">
              {" "}
              <div className="space-y-4">
                {" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <div className="flex items-center gap-1 text-primary-container">
                    {" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                  </div>{" "}
                  <span className="text-body-sm font-body-sm text-secondary px-2.5 py-1 rounded bg-surface-container">
                    Corporate Travel
                  </span>{" "}
                </div>{" "}
                <p className="text-body-md font-body-md text-on-surface italic">
                  {" "}
                  "Booked for a corporate event, and everything was flawless. The chauffeur was
                  professional, and our guests were impressed. Will use again for all future
                  events!"{" "}
                </p>{" "}
              </div>{" "}
              <div className="border-t border-outline-variant/20 pt-4 flex items-center justify-between">
                {" "}
                <span className="text-title-md font-title-md text-white">Verified Client</span>{" "}
                <span className="text-body-sm font-body-sm text-secondary">Leeds Event</span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 flex flex-col justify-between space-y-6">
              {" "}
              <div className="space-y-4">
                {" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <div className="flex items-center gap-1 text-primary-container">
                    {" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                  </div>{" "}
                  <span className="text-body-sm font-body-sm text-secondary px-2.5 py-1 rounded bg-surface-container">
                    Airport Transfers
                  </span>{" "}
                </div>{" "}
                <p className="text-body-md font-body-md text-on-surface italic">
                  {" "}
                  "Exceptional service! They tracked our flight and ensured we arrived on time
                  despite a delay. Can't thank them enough for the peace of mind."{" "}
                </p>{" "}
              </div>{" "}
              <div className="border-t border-outline-variant/20 pt-4 flex items-center justify-between">
                {" "}
                <span className="text-title-md font-title-md text-white">
                  Executive Traveler
                </span>{" "}
                <span className="text-body-sm font-body-sm text-secondary">
                  Manchester Flight
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 flex flex-col justify-between space-y-6">
              {" "}
              <div className="space-y-4">
                {" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <div className="flex items-center gap-1 text-primary-container">
                    {" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{" "}
                  </div>{" "}
                  <span className="text-body-sm font-body-sm text-secondary px-2.5 py-1 rounded bg-surface-container">
                    Event Chauffeur
                  </span>{" "}
                </div>{" "}
                <p className="text-body-md font-body-md text-on-surface italic">
                  {" "}
                  "Used their service for an event, and they exceeded all expectations. Punctual,
                  courteous, and the car was spotless. The sweets and drinks were a lovely
                  surprise!"{" "}
                </p>{" "}
              </div>{" "}
              <div className="border-t border-outline-variant/20 pt-4 flex items-center justify-between">
                {" "}
                <span className="text-title-md font-title-md text-white">Private Client</span>{" "}
                <span className="text-body-sm font-body-sm text-secondary">York Races</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="max-w-[1320px] mx-auto px-margin py-20" id="contact">
        {" "}
        <div className="orange-gradient-cta rounded-[28px] p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          {" "}
          <div className="space-y-4 max-w-xl text-left">
            {" "}
            <span className="text-label-eyebrow font-label-eyebrow uppercase tracking-widest text-white/80">
              RESERVE YOUR CHAUFFEUR
            </span>{" "}
            <h2 className="text-headline-lg font-headline-lg text-white leading-tight">
              Your next journey starts here.
            </h2>{" "}
            <p className="text-body-lg font-body-lg text-white/90">
              {" "}
              Tell us where you need to be. We’ll help you arrange the right chauffeur service for
              your schedule.{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            {" "}
            <Link
              className="w-full sm:w-auto text-center bg-white text-neutral-950 hover:bg-neutral-100 font-label-button text-label-button px-8 py-4 rounded-full shadow-lg transition-all active:scale-95"
              to="/book-now"
            >
              {" "}
              Book Your Journey{" "}
            </Link>{" "}
            <a
              className="w-full sm:w-auto text-center border-2 border-white/80 hover:border-white text-white font-label-button text-label-button px-8 py-4 rounded-full transition-all"
              href="tel:01924806407"
            >
              {" "}
              Call 01924 806407{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <footer className="w-full bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20 dark:border-outline-variant/20">
        {" "}
        <div className="w-full max-w-[1320px] mx-auto px-margin py-space-xl flex flex-col gap-space-lg">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-outline-variant/10">
            {" "}
            <div className="md:col-span-5 space-y-4">
              {" "}
              <Link className="inline-block" to="/">
                {" "}
                <img
                  alt="Encore Chauffeurs Luxury Travel Logo"
                  className="h-10 w-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2uiBnyo1u2Ma4gkZUfSLmB1Hm6aw_iYjAT_bPoKRquAbyNBhwL5U8n1jX5w90iYqcw3gV5CuLvMLuiWvxOPDNEOvxqeSb6FcoGwWi6hfUCy8xfPTHtiV6KBPz2bUc7vDZmLIapbId480xXTPtB-Rb70SrSxQ-UMx4CfAZFqKNP3dl1JQUEnXSIGYAgiCja0RvPakJJVjN7JBHwowjbjLtFSVVMOrdKLnBpyRuEeJWCejKvn1cjqi3PxnhL13tQRaq8sE"
                />{" "}
              </Link>{" "}
              <p className="text-body-sm font-body-sm text-secondary max-w-sm">
                {" "}
                We believe that the journey is just as important as the destination. Ultra-premium
                executive mobility, airport transfers, and bespoke chauffeur services across the
                United Kingdom.{" "}
              </p>{" "}
              <div className="pt-2 text-body-sm font-body-sm text-on-surface">
                {" "}
                <span className="text-secondary">Direct Telephone:</span>{" "}
                <a
                  className="font-bold text-primary-container hover:underline ml-1"
                  href="tel:01924806407"
                >
                  01924 806407
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div className="md:col-span-3 space-y-3">
              {" "}
              <h4 className="text-title-md font-title-md text-white">Executive Services</h4>{" "}
              <ul className="space-y-2 text-body-sm font-body-sm">
                {" "}
                <li>
                  <Link
                    className="text-secondary hover:text-on-surface transition-colors"
                    to="/services/$slug"
                    params={{ slug: "airport-transfers" }}
                  >
                    Airport Transfers
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    className="text-secondary hover:text-on-surface transition-colors"
                    to="/services/$slug"
                    params={{ slug: "corporate-travel" }}
                  >
                    Corporate Travel
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    className="text-secondary hover:text-on-surface transition-colors"
                    to="/services/$slug"
                    params={{ slug: "executive-travel" }}
                  >
                    Executive Fleet
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    className="text-secondary hover:text-on-surface transition-colors"
                    to="/services/$slug"
                    params={{ slug: "wedding-chauffeur" }}
                  >
                    Wedding Chauffeur Services
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    className="text-secondary hover:text-on-surface transition-colors"
                    to="/services/$slug"
                    params={{ slug: "event-chauffeur" }}
                  >
                    Event Chauffeur Services
                  </Link>
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="md:col-span-4 space-y-3">
              {" "}
              <h4 className="text-title-md font-title-md text-white">Concierge &amp; Legal</h4>{" "}
              <ul className="space-y-2 text-body-sm font-body-sm">
                {" "}
                <li>
                  <Link
                    className="text-secondary hover:text-on-surface transition-colors"
                    to="/contact"
                  >
                    Contact Concierge
                  </Link>
                </li>{" "}
                <li></li>{" "}
                <li>
                  <Link
                    className="text-secondary hover:text-on-surface transition-colors"
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>{" "}
                <li className="pt-2 text-secondary text-body-sm font-body-sm">
                  {" "}
                  <span className="block text-white font-medium">Head Office:</span> 206a Bridge
                  Road, Horbury, Wakefield, England, WF4 5PS{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-body-sm font-body-sm text-secondary">
            {" "}
            <div>
              {" "}
              © 2026 Encore Executive Travel Ltd. Registered Office: Horbury, Wakefield WF4 5PS. All
              rights reserved. Built by Octapus.{" "}
            </div>{" "}
            <div className="flex items-center gap-6">
              {" "}
              <Link className="hover:text-primary transition-colors" to="/about">
                Safety Standards
              </Link>{" "}
              <Link className="hover:text-primary transition-colors" to="/about">
                Licensing
              </Link>{" "}
              <Link className="hover:text-primary transition-colors" to="/about">
                DBS Verification
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </footer>
    </>
  );
}
