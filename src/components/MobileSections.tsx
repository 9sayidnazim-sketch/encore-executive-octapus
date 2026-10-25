import { EnquiryForm } from "./site/EnquiryForm";
import { Link } from "@tanstack/react-router";
/* Converted from the supplied mobile design HTML */
export function MobileSections() {
  return (
    <>
      <main className="w-full">
        {" "}
        <section className="relative px-margin-mobile pt-4 pb-8 max-w-7xl mx-auto" id="m-home">
          {" "}
          <div className="relative w-full rounded-[24px] overflow-hidden border border-white/10 min-h-[500px] flex flex-col justify-end p-6 md:p-12 shadow-2xl">
            {" "}
            <img
              className="absolute inset-0 w-full h-full object-cover z-0"
              alt="A luxurious black executive Mercedes sedan parked elegantly in front of iconic British architectural landmarks in London at twilight. Warm ambient streetlamps reflect along the sleek car bonnet with a sharp silhouette of a well-dressed professional chauffeur opening the rear passenger door. High dynamic range, deep moody obsidian tones, soft orange cinematic highlights, luxury automotive realism."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ0IZQU12wRMI3ne2tTmnLD7jIuz0kIkHu4QJj8ojuEL99louyo6PZOFojO3HEmQuYYGXEhLsTD0XFVEwk8NV6qGIzobGgjfk3_cdSub-k8IAnJ-PXNABDjTJS1iRzTJr810QkdmJRLYUdMgAv6gDXW6BLAF-YYcL0LepAOZhA0es8yR78EPt4tMXd6B3bIEnI3uPcTmUDAW68Y5ChPM3HJAuxwjMIBDaKRl_l501BfoWRMpHO6Tytww"
            />{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/75 to-transparent z-10"></div>{" "}
            <div className="relative z-20 max-w-2xl space-y-3">
              {" "}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest/60 backdrop-blur-md border border-white/10">
                {" "}
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>{" "}
                <span className="text-primary-container text-label-eyebrow font-label-eyebrow tracking-widest uppercase">
                  EXECUTIVE TRAVEL, REFINED
                </span>{" "}
              </div>{" "}
              <h1 className="text-headline-lg-mobile md:text-display-hero font-headline-lg-mobile md:font-display-hero text-on-surface tracking-tight leading-tight">
                {" "}
                Luxury travel. <br />
                <span className="text-primary-container">Made effortless.</span>{" "}
              </h1>{" "}
              <p className="text-body-md font-body-md text-secondary max-w-lg leading-relaxed">
                {" "}
                Professional chauffeurs. Considered journeys. Comfort and reliability, from
                collection to arrival across London, Yorkshire and the UK.{" "}
              </p>{" "}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                {" "}
                <Link
                  className="orange-gradient-btn orange-gradient-cta text-white font-bold text-label-button font-label-button py-3.5 px-6 rounded-full flex items-center justify-center gap-2 active:scale-95 transition-transform text-center shadow-lg"
                  to="/book-now"
                >
                  {" "}
                  <span>Book Your Journey</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>{" "}
                </Link>{" "}
                <Link
                  className="bg-surface-container-highest/70 hover:bg-surface-container-highest backdrop-blur-md text-on-surface border border-white/15 text-label-button font-label-button py-3.5 px-6 rounded-full flex items-center justify-center gap-2 active:scale-95 transition-transform text-center"
                  to="/fleet"
                >
                  {" "}
                  <span>Explore Our Fleet</span>{" "}
                </Link>{" "}
              </div>{" "}
              <div className="pt-3 grid grid-cols-3 gap-2 border-t border-white/10 text-on-surface-variant">
                {" "}
                <div className="flex items-center gap-1.5">
                  {" "}
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    verified
                  </span>{" "}
                  <span className="text-body-sm font-body-sm text-secondary">DBS Checked</span>{" "}
                </div>{" "}
                <div className="flex items-center gap-1.5">
                  {" "}
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    flight_takeoff
                  </span>{" "}
                  <span className="text-body-sm font-body-sm text-secondary">
                    Live Tracking
                  </span>{" "}
                </div>{" "}
                <div className="flex items-center gap-1.5">
                  {" "}
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    shield
                  </span>{" "}
                  <span className="text-body-sm font-body-sm text-secondary">
                    Fully Licensed
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
        <section className="px-margin-mobile py-8 max-w-7xl mx-auto">
          {" "}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {" "}
            <div className="bg-surface-container-low p-4 rounded-[20px] border border-white/5 space-y-2">
              {" "}
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                {" "}
                <span className="material-symbols-outlined text-[22px]">badge</span>{" "}
              </div>{" "}
              <h3 className="text-title-md font-title-md text-on-surface">
                Professional Chauffeurs
              </h3>{" "}
              <p className="text-body-sm font-body-sm text-secondary">
                DBS checked, fully certified &amp; discreetly attired.
              </p>{" "}
            </div>{" "}
            <div className="bg-surface-container-low p-4 rounded-[20px] border border-white/5 space-y-2">
              {" "}
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                {" "}
                <span className="material-symbols-outlined text-[22px]">directions_car</span>{" "}
              </div>{" "}
              <h3 className="text-title-md font-title-md text-on-surface">Executive Vehicles</h3>{" "}
              <p className="text-body-sm font-body-sm text-secondary">
                Pristine Mercedes-Benz fleet valeted before every trip.
              </p>{" "}
            </div>{" "}
            <div className="bg-surface-container-low p-4 rounded-[20px] border border-white/5 space-y-2">
              {" "}
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                {" "}
                <span className="material-symbols-outlined text-[22px]">map</span>{" "}
              </div>{" "}
              <h3 className="text-title-md font-title-md text-on-surface">Carefully Arranged</h3>{" "}
              <p className="text-body-sm font-body-sm text-secondary">
                Tailored itineraries coordinated directly to your schedule.
              </p>{" "}
            </div>{" "}
            <div className="bg-surface-container-low p-4 rounded-[20px] border border-white/5 space-y-2">
              {" "}
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                {" "}
                <span className="material-symbols-outlined text-[22px]">timer</span>{" "}
              </div>{" "}
              <h3 className="text-title-md font-title-md text-on-surface">
                Punctual &amp; Monitored
              </h3>{" "}
              <p className="text-body-sm font-body-sm text-secondary">
                Live aviation and traffic tracking for stress-free timing.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="px-margin-mobile py-8 max-w-7xl mx-auto space-y-6" id="m-services">
          {" "}
          <div className="space-y-1">
            {" "}
            <span className="text-primary-container text-label-eyebrow font-label-eyebrow tracking-widest uppercase">
              OUR SERVICES
            </span>{" "}
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface">
              A better way to travel.
            </h2>{" "}
            <p className="text-body-md font-body-md text-secondary max-w-xl">
              {" "}
              From international flight departures to high-stakes corporate roadshows, every journey
              is managed with quiet efficiency.{" "}
            </p>{" "}
          </div>{" "}
          <div className="space-y-4">
            {" "}
            <div className="group relative rounded-[22px] overflow-hidden border border-white/10 bg-surface-container-low p-5 flex flex-col justify-end min-h-[300px]">
              {" "}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="A distinguished executive passenger exiting a pristine metallic black chauffeur Mercedes sedan curbside at a private VIP airport terminal. A professional chauffeur in a bespoke tailored suit holds open the door. Crisp early morning daylight, soft architectural reflections of private jets and control towers in the background, luxury editorial photography."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoNlNEyQBKjDTRJP8Ic-5Ade8w6epl2hDFnPvmcZtEpu3S5EggGGbr6SqGSuGJUlJHE3PC39519MKRuqgYAAN760Iicl3PDd0uFaJmEVsvWJIbo1FY0VcRJs4Zvhr89AGchvcLEaUCMcMW_rOsEv65oMb2PcONZ6g2AEPYQn2XrKo9-nkINeSaICEbR1_x6DZ5QNv7NcNCUOQKWM2kVgH3GQWDzxWxHlTXBLhABqasZskq9Urz9XWaBA"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>{" "}
              <div className="relative z-10 space-y-2">
                {" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container/80 backdrop-blur-md text-primary text-label-eyebrow font-label-eyebrow border border-white/10">
                    {" "}
                    <span className="material-symbols-outlined text-[14px]">
                      flight_takeoff
                    </span>{" "}
                    <span>Airports &amp; Private Aviation</span>{" "}
                  </span>{" "}
                  <Link
                    aria-label="View service"
                    className="w-10 h-10 rounded-full bg-surface-container-highest/80 backdrop-blur-md text-on-surface flex items-center justify-center hover:bg-primary-container hover:text-white transition-colors"
                    to="/services/$slug"
                    params={{ slug: "airport-transfers" }}
                  >
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_forward
                    </span>{" "}
                  </Link>{" "}
                </div>{" "}
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Airport Transfers
                </h3>{" "}
                <p className="text-body-sm font-body-sm text-secondary line-clamp-2">
                  {" "}
                  Commercial hub and private aviation connectivity with guaranteed live flight
                  tracking, baggage assistance, and complimentary waiting periods.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="group relative rounded-[22px] overflow-hidden border border-white/10 bg-surface-container-low p-5 flex flex-col justify-end min-h-[300px]">
              {" "}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="An executive businessman in a dark tailored wool suit seated in the rear passenger cabin of a luxury Mercedes sedan. He is using a high-end laptop with ambient internal warm LED cockpit lighting, dark tinted acoustic privacy glass, and city skyline reflections. Clean luxury British corporate travel ambiance."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBau_y2jDmcUXbws5Ge3KSV0CtVxehRnpmPgJatJISPhpXWwFE_7cK4asOVrPXROYR7rZy53tGAIo8w0BCH4ospCusNeNDgh_6CKhc3vn6Oiphz06jqvKZcsZWZ0OFD1ZqtMWvyS0bmG8mnrxvjqoQeCUz2uRI-F1qqcap1GQO4qv1jsxgc959GjkN-mVflpjKEMP-NkqU5jDk6wRgqlNeQHZUmcFOQ0jFQZ6EjW2H4HiATfNdhKvX6Dw"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>{" "}
              <div className="relative z-10 space-y-2">
                {" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container/80 backdrop-blur-md text-primary text-label-eyebrow font-label-eyebrow border border-white/10">
                    {" "}
                    <span className="material-symbols-outlined text-[14px]">
                      business_center
                    </span>{" "}
                    <span>Corporate Accounts</span>{" "}
                  </span>{" "}
                  <Link
                    aria-label="View service"
                    className="w-10 h-10 rounded-full bg-surface-container-highest/80 backdrop-blur-md text-on-surface flex items-center justify-center hover:bg-primary-container hover:text-white transition-colors"
                    to="/services/$slug"
                    params={{ slug: "corporate-travel" }}
                  >
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_forward
                    </span>{" "}
                  </Link>{" "}
                </div>{" "}
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Corporate Travel
                </h3>{" "}
                <p className="text-body-sm font-body-sm text-secondary line-clamp-2">
                  {" "}
                  Mobile working environments equipped with fast onboard 5G Wi-Fi, power ports, and
                  complete confidentiality for executives and business leaders.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="group relative rounded-[22px] overflow-hidden border border-white/10 bg-surface-container-low p-5 flex flex-col justify-end min-h-[300px]">
              {" "}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="An elegant wedding couple beside a glossy black chauffeur vehicle adorned with subtle cream satin ribbons outside a historic British manor estate. Soft romantic natural lighting, cinematic shallow depth of field, timeless luxury wedding atmosphere with impeccably maintained vehicle craftsmanship."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbxeYKs8fduNOqBOxVCSPM5pteC-t4AIVMIZ-jWcEZwuUYly2eNgNTe2zyC566yw-yu-EvS0EYfRmdg2mDh4y9L0dBfJGr0FkPX2C60UyhG6gpNbE0Py7mnuAer21973_A1FF7GsbH0fAHOYscYcSewtq2crhHv93xgSPvEWsPveWistrS2qL8g7UJAlm4NbdJ-VXWtLAaBdr0KnZJilit2nnk3yJh5zgyeafluS7X0r8YvyjuSf5cfQ"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>{" "}
              <div className="relative z-10 space-y-2">
                {" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container/80 backdrop-blur-md text-primary text-label-eyebrow font-label-eyebrow border border-white/10">
                    {" "}
                    <span className="material-symbols-outlined text-[14px]">favorite</span>{" "}
                    <span>Bridal &amp; Bridal Party</span>{" "}
                  </span>{" "}
                  <Link
                    aria-label="View service"
                    className="w-10 h-10 rounded-full bg-surface-container-highest/80 backdrop-blur-md text-on-surface flex items-center justify-center hover:bg-primary-container hover:text-white transition-colors"
                    to="/services/$slug"
                    params={{ slug: "wedding-chauffeur" }}
                  >
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_forward
                    </span>{" "}
                  </Link>{" "}
                </div>{" "}
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Wedding Chauffeur Services
                </h3>{" "}
                <p className="text-body-sm font-body-sm text-secondary line-clamp-2">
                  {" "}
                  Impeccable vehicles, bespoke ribbon styling, and coordinated multi-car logistics
                  ensuring your special day unfolds effortlessly.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="group relative rounded-[22px] overflow-hidden border border-white/10 bg-surface-container-low p-5 flex flex-col justify-end min-h-[300px]">
              {" "}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Guests dressed in luxury formal attire arriving at a prestigious sporting or cultural event such as York Races or Royal Ascot. A gleaming black executive transport fleet stands ready with uniform chauffeurs. Elegant atmosphere, high-end British sporting season editorial mood."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs4v5aCBeqjYkTecJ_X0tL-6AUwTDL1jOAI53l_N-VI-qKMUSJiU07XkSpBi4G6k4-VCgtZoeFep3LsmTrUMW259Mzdw86i8j-_TGHa4PqTx7M6znHqljH6o2d287cJFclNQvnHp8dttHO3aLW3b2xJHuAHqo163r2RT5P9AFubrN5WLmB6VGDMjV65FQ54qoqnNskqhfzI0lj__XRF59tUTvIaNvrXC1dcWXkqa-Z3ayUUZHLSC613A"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>{" "}
              <div className="relative z-10 space-y-2">
                {" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container/80 backdrop-blur-md text-primary text-label-eyebrow font-label-eyebrow border border-white/10">
                    {" "}
                    <span className="material-symbols-outlined text-[14px]">
                      confirmation_number
                    </span>{" "}
                    <span>Cultural &amp; Sporting Events</span>{" "}
                  </span>{" "}
                  <Link
                    aria-label="View service"
                    className="w-10 h-10 rounded-full bg-surface-container-highest/80 backdrop-blur-md text-on-surface flex items-center justify-center hover:bg-primary-container hover:text-white transition-colors"
                    to="/services/$slug"
                    params={{ slug: "event-chauffeur" }}
                  >
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_forward
                    </span>{" "}
                  </Link>{" "}
                </div>{" "}
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Event Chauffeur Services
                </h3>{" "}
                <p className="text-body-sm font-body-sm text-secondary line-clamp-2">
                  {" "}
                  York Races, Royal Ascot, Cheltenham Festival, high-end theatre, and gala dinners.
                  Arrive and depart without congestion stress.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="group relative rounded-[22px] overflow-hidden border border-white/10 bg-surface-container-low p-5 flex flex-col justify-end min-h-[300px]">
              {" "}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="A sleek black luxury sedan gliding smoothly through city streets illuminated by architectural evening lights. Dynamic motion blur on the background contrasting with crisp sharp vehicle lines. Prestigious executive mobility aesthetic, modern and refined."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTjMJ7xgQaL_sK_Wc-Wf1I9fPv_srQ0uDbEhJ4Z1zfJQn_vn1q1liKJ0p3cK-ikgD8i99G5NnzDM2i4UDbhE_gYubll_v3DrXC8ypKhiygXzADxabW-761WprDApeUuyrVU2DO-8UefAQvkGow3zeZa7xy8iczc_KddlgFjAu-inWmjh5IyVBRIz2BvlHrfxwAQh6hAfkVy6mpw31QCyS9CwKRfyZGQxR7j_oslBqzVo0eFjXRvdX8hQ"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>{" "}
              <div className="relative z-10 space-y-2">
                {" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container/80 backdrop-blur-md text-primary text-label-eyebrow font-label-eyebrow border border-white/10">
                    {" "}
                    <span className="material-symbols-outlined text-[14px]">star</span>{" "}
                    <span>Bespoke Journeys</span>{" "}
                  </span>{" "}
                  <Link
                    aria-label="View service"
                    className="w-10 h-10 rounded-full bg-surface-container-highest/80 backdrop-blur-md text-on-surface flex items-center justify-center hover:bg-primary-container hover:text-white transition-colors"
                    to="/services/$slug"
                    params={{ slug: "executive-travel" }}
                  >
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_forward
                    </span>{" "}
                  </Link>{" "}
                </div>{" "}
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Executive Travel
                </h3>{" "}
                <p className="text-body-sm font-body-sm text-secondary line-clamp-2">
                  {" "}
                  Tailored personal and business itineraries crafted around your specific day-to-day
                  commitments and private engagements.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section
          className="py-12 bg-surface-container-lowest border-y border-white/10"
          id="m-fleet"
        >
          {" "}
          <div className="px-margin-mobile max-w-7xl mx-auto space-y-8">
            {" "}
            <div className="space-y-1">
              {" "}
              <span className="text-primary-container text-label-eyebrow font-label-eyebrow tracking-widest uppercase">
                THE ENCORE FLEET
              </span>{" "}
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface">
                Travel in absolute comfort.
              </h2>{" "}
              <p className="text-body-md font-body-md text-secondary max-w-xl">
                {" "}
                A meticulously maintained fleet of high-specification Mercedes-Benz vehicles
                configured for executive relaxation and productivity.{" "}
              </p>{" "}
            </div>{" "}
            <div className="space-y-6">
              {" "}
              <div className="bg-surface-container-low rounded-[24px] overflow-hidden border border-white/10 p-5 space-y-4">
                {" "}
                <div className="relative rounded-[18px] overflow-hidden aspect-[16/10] bg-surface-container">
                  {" "}
                  <img
                    className="w-full h-full object-cover"
                    alt="A side profile photograph of a stunning Obsidian Black Mercedes-Benz EQS electric luxury saloon in a minimalist daylight showroom. The metallic paint reflects soft studio lights, showcasing pristine aerodynamic curves, AMG line multi-spoke alloy wheels, and privacy tinting. High resolution automotive catalog photography."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtl83gMJqpUu4sgniLxQiT61bZoJLfURlLC4DFrltQC7fRG1ZSW8AFMu--53gQv1gcf1gbcX-CEOfYxO6_NZAYWg1OgBMxuNfXFmKSmAIwkOdw-TGOwh6NckafElB5SNpnCW6WySQfx-9gQi9SZRpeCwRSvxmbiu3qnjS9WeQVhh6niP_2RslxFZ6S9mUhyTlKerNwMLNm6U4sLNnRLjMtEM5l8taWtAlrAWds_mYZvgP3bBqDmF-fzQ"
                  />{" "}
                  <span className="absolute top-3 left-3 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full text-primary text-label-eyebrow font-label-eyebrow border border-white/10">
                    {" "}
                    All-Electric Luxury{" "}
                  </span>{" "}
                </div>{" "}
                <div className="space-y-3">
                  {" "}
                  <div className="flex items-center justify-between">
                    {" "}
                    <div>
                      {" "}
                      <h3 className="text-headline-sm font-headline-sm text-on-surface">
                        Mercedes-Benz EQS 450+
                      </h3>{" "}
                      <span className="text-body-sm font-body-sm text-secondary">
                        Flagship Electric Saloon
                      </span>{" "}
                    </div>{" "}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary-container font-semibold text-xs border border-white/5">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">person</span>{" "}
                      <span>Up to 4 Passengers</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="grid grid-cols-2 gap-2 text-body-sm font-body-sm text-secondary pt-2">
                    {" "}
                    <div className="flex items-center gap-2">
                      {" "}
                      <span className="material-symbols-outlined text-primary text-[16px]">
                        wifi
                      </span>{" "}
                      <span>High-speed 5G Wi-Fi</span>{" "}
                    </div>{" "}
                    <div className="flex items-center gap-2">
                      {" "}
                      <span className="material-symbols-outlined text-primary text-[16px]">
                        airline_seat_recline_extra
                      </span>{" "}
                      <span>Nappa Leather Cabin</span>{" "}
                    </div>{" "}
                    <div className="flex items-center gap-2">
                      {" "}
                      <span className="material-symbols-outlined text-primary text-[16px]">
                        surround_sound
                      </span>{" "}
                      <span>Burmester® 3D Sound</span>{" "}
                    </div>{" "}
                    <div className="flex items-center gap-2">
                      {" "}
                      <span className="material-symbols-outlined text-primary text-[16px]">
                        water_bottle
                      </span>{" "}
                      <span>Chilled Mineral Water</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="pt-3 flex items-center justify-between border-t border-white/10">
                    {" "}
                    <div className="text-body-sm font-body-sm text-secondary">
                      {" "}
                      Luggage:{" "}
                      <span className="text-on-surface font-semibold">2 Large Bags</span>{" "}
                    </div>{" "}
                    <Link
                      className="orange-gradient-btn orange-gradient-cta text-white font-bold text-label-button font-label-button px-5 py-2.5 rounded-full flex items-center gap-1.5 active:scale-95 transition-transform"
                      to="/book-now"
                    >
                      {" "}
                      <span>Enquire EQS 450+</span>{" "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-surface-container-low rounded-[24px] overflow-hidden border border-white/10 p-5 space-y-4">
                {" "}
                <div className="relative rounded-[18px] overflow-hidden aspect-[16/10] bg-surface-container">
                  {" "}
                  <img
                    className="w-full h-full object-cover"
                    alt="A three-quarter angle photograph of a glossy deep black Mercedes-Benz V-Class Extra-Long Wheelbase passenger van stationed in front of a modern glass skyscraper. Tinted rear privacy windows, sleek chrome accents, executive business travel aesthetic, rich moody lighting with sharp reflections."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3Kblitqd0gkuZMsJZL1dIldfp_DdCKXF0PsB-FCT-_qCCeN9A93iVj52HjaGlOZwudomHP5zwbNy_mKJ6RGRQhPT6tBHZAOiy8NbPqbQotenNs-7EOPiVFmjCJDtXiHSgB5vAToDVoDm6hDHehrULB7qKoUk2Guh1vpx6lh-JMEfEG9y4xfyp0EkuE7psHXEe4B1ABC_ReuWIrA_iTaV5I0xd6qybl0odQ8PhBeh5eet3AooCYcuPFQ"
                  />{" "}
                  <span className="absolute top-3 left-3 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full text-primary text-label-eyebrow font-label-eyebrow border border-white/10">
                    {" "}
                    Conference Style Space{" "}
                  </span>{" "}
                </div>{" "}
                <div className="space-y-3">
                  {" "}
                  <div className="flex items-center justify-between">
                    {" "}
                    <div>
                      {" "}
                      <h3 className="text-headline-sm font-headline-sm text-on-surface">
                        Mercedes-Benz V-Class XLWB
                      </h3>{" "}
                      <span className="text-body-sm font-body-sm text-secondary">
                        Extra-Long Wheelbase Multi-Passenger
                      </span>{" "}
                    </div>{" "}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary-container font-semibold text-xs border border-white/5">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">group</span>{" "}
                      <span>Up to 7 Passengers</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="grid grid-cols-2 gap-2 text-body-sm font-body-sm text-secondary pt-2">
                    {" "}
                    <div className="flex items-center gap-2">
                      {" "}
                      <span className="material-symbols-outlined text-primary text-[16px]">
                        meeting_room
                      </span>{" "}
                      <span>Face-to-Face Seating</span>{" "}
                    </div>{" "}
                    <div className="flex items-center gap-2">
                      {" "}
                      <span className="material-symbols-outlined text-primary text-[16px]">
                        stars
                      </span>{" "}
                      <span>Starlight Headlining</span>{" "}
                    </div>{" "}
                    <div className="flex items-center gap-2">
                      {" "}
                      <span className="material-symbols-outlined text-primary text-[16px]">
                        usb
                      </span>{" "}
                      <span>Individual USB-C Ports</span>{" "}
                    </div>{" "}
                    <div className="flex items-center gap-2">
                      {" "}
                      <span className="material-symbols-outlined text-primary text-[16px]">
                        luggage
                      </span>{" "}
                      <span>Huge Luggage Boot</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="pt-3 flex items-center justify-between border-t border-white/10">
                    {" "}
                    <div className="text-body-sm font-body-sm text-secondary">
                      {" "}
                      Luggage:{" "}
                      <span className="text-on-surface font-semibold">6-7 Large Bags</span>{" "}
                    </div>{" "}
                    <Link
                      className="orange-gradient-btn orange-gradient-cta text-white font-bold text-label-button font-label-button px-5 py-2.5 rounded-full flex items-center gap-1.5 active:scale-95 transition-transform"
                      to="/book-now"
                    >
                      {" "}
                      <span>Enquire V-Class XLWB</span>{" "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="px-margin-mobile py-8 max-w-7xl mx-auto">
          {" "}
          <div className="bg-surface-container rounded-[24px] border border-white/10 overflow-hidden p-6 md:p-10 space-y-6">
            {" "}
            <div className="space-y-2">
              {" "}
              <span className="text-primary text-label-eyebrow font-label-eyebrow tracking-widest uppercase">
                THE ENCORE STANDARD
              </span>{" "}
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface">
                Considered in every detail.
              </h2>{" "}
              <p className="text-body-md font-body-md text-secondary max-w-xl">
                {" "}
                We believe that the journey is just as important as the destination. This is the
                ethos with which we deliver our service.{" "}
              </p>{" "}
            </div>{" "}
            <div className="relative rounded-[20px] overflow-hidden aspect-[16/9] border border-white/10">
              {" "}
              <img
                className="w-full h-full object-cover"
                alt="Interior luxury detail shot of an executive chauffeur car cabin. A crystal water bottle rests in a bespoke console alongside neatly folded hand towels and smartphone charging cables. Warm amber ambient LED lighting casts gentle glow across quilted dark leather upholstery. Pristine calm atmosphere."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXw5p57J2GwN3kwtLaL0MnHuJ60s9sKQmSMZH_pJJieqR3WB5bxcX_V_K6-35Srdr8_7QY8AAouSIc3z4HHVWfFEvq7bK91UTwLAuwjPeqyJHCRJVP8sb5kfkTS25_-jwIgk80bvx5pNbcFZIF10rvXXoOrA3v2Zc_sN7Q3pH4x67k25W7E98pwGklStv4qTm6bjaKuu4VoncCLq_B1c_QAABLUFUL16u2RJsFpAbUFHU1iMvGeB-lsA"
              />{" "}
            </div>{" "}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              {" "}
              <div className="space-y-1">
                {" "}
                <span className="material-symbols-outlined text-primary text-[24px]">
                  charger
                </span>{" "}
                <h4 className="text-title-md font-title-md text-on-surface">
                  Universal Fast Power
                </h4>{" "}
                <p className="text-body-sm font-body-sm text-secondary">
                  Apple Lightning &amp; USB-C fast cables provided.
                </p>{" "}
              </div>{" "}
              <div className="space-y-1">
                {" "}
                <span className="material-symbols-outlined text-primary text-[24px]">
                  local_cafe
                </span>{" "}
                <h4 className="text-title-md font-title-md text-on-surface">
                  Chilled Refreshments
                </h4>{" "}
                <p className="text-body-sm font-body-sm text-secondary">
                  Complimentary mineral water and artisan sweets.
                </p>{" "}
              </div>{" "}
              <div className="space-y-1">
                {" "}
                <span className="material-symbols-outlined text-primary text-[24px]">air</span>{" "}
                <h4 className="text-title-md font-title-md text-on-surface">Climate Sanitised</h4>{" "}
                <p className="text-body-sm font-body-sm text-secondary">
                  Four-zone cabin climate and air purification.
                </p>{" "}
              </div>{" "}
              <div className="space-y-1">
                {" "}
                <span className="material-symbols-outlined text-primary text-[24px]">
                  shield_person
                </span>{" "}
                <h4 className="text-title-md font-title-md text-on-surface">Strict Discretion</h4>{" "}
                <p className="text-body-sm font-body-sm text-secondary">
                  Guaranteed NDAs and privacy compliance.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="px-margin-mobile py-8 max-w-7xl mx-auto" id="m-business">
          {" "}
          <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-lowest border border-white/10 p-6 md:p-10 space-y-4">
            {" "}
            <span className="text-primary-container text-label-eyebrow font-label-eyebrow tracking-widest uppercase">
              CORPORATE ACCOUNTS
            </span>{" "}
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface max-w-lg">
              {" "}
              Business travel, thoughtfully arranged.{" "}
            </h2>{" "}
            <p className="text-body-md font-body-md text-secondary max-w-xl leading-relaxed">
              {" "}
              Open a dedicated Encore corporate account for priority dispatch, consolidated monthly
              invoicing, bespoke flight tracking, and assigned primary chauffeurs for your executive
              team.{" "}
            </p>{" "}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              {" "}
              <a
                className="orange-gradient-btn orange-gradient-cta text-white font-bold text-label-button font-label-button py-3 px-6 rounded-full inline-flex items-center justify-center gap-2 active:scale-95 transition-transform"
                href="tel:01924806407"
              >
                {" "}
                <span>Discuss Corporate Travel</span>{" "}
                <span className="material-symbols-outlined text-[18px]">call</span>{" "}
              </a>{" "}
              <Link
                className="bg-surface-container text-on-surface border border-white/10 text-label-button font-label-button py-3 px-6 rounded-full inline-flex items-center justify-center gap-2 active:scale-95 transition-transform hover:bg-surface-container-high"
                to="/book-now"
              >
                {" "}
                <span>Request Account Pack</span>{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="px-margin-mobile py-8 max-w-7xl mx-auto space-y-6">
          {" "}
          <div className="space-y-1">
            {" "}
            <span className="text-primary text-label-eyebrow font-label-eyebrow tracking-widest uppercase">
              CLIENT EXPERIENCES
            </span>{" "}
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface">
              What our clients say.
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {" "}
            <div className="bg-surface-container-low p-5 rounded-[20px] border border-white/5 space-y-3 flex flex-col justify-between">
              {" "}
              <div className="space-y-2">
                {" "}
                <div className="flex text-primary">
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                </div>{" "}
                <h4 className="text-title-md font-title-md text-on-surface font-semibold">
                  Perfect for Corporate Events
                </h4>{" "}
                <p className="text-body-sm font-body-sm text-secondary leading-relaxed">
                  {" "}
                  "Booked for a corporate event, and everything was flawless. The chauffeur was
                  professional, and our guests were impressed. Will use again for all future
                  events!"{" "}
                </p>{" "}
              </div>{" "}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-body-sm font-body-sm">
                {" "}
                <span className="text-on-surface font-semibold">Corporate Event Client</span>{" "}
                <span className="text-secondary text-xs">Leeds &amp; Manchester</span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-surface-container-low p-5 rounded-[20px] border border-white/5 space-y-3 flex flex-col justify-between">
              {" "}
              <div className="space-y-2">
                {" "}
                <div className="flex text-primary">
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                </div>{" "}
                <h4 className="text-title-md font-title-md text-on-surface font-semibold">
                  Always On Time
                </h4>{" "}
                <p className="text-body-sm font-body-sm text-secondary leading-relaxed">
                  {" "}
                  "Exceptional service! They tracked our flight and ensured we arrived on time
                  despite a delay. Can't thank them enough for the absolute peace of mind."{" "}
                </p>{" "}
              </div>{" "}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-body-sm font-body-sm">
                {" "}
                <span className="text-on-surface font-semibold">Airport Transfer Client</span>{" "}
                <span className="text-secondary text-xs">Manchester Airport</span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-surface-container-low p-5 rounded-[20px] border border-white/5 space-y-3 flex flex-col justify-between">
              {" "}
              <div className="space-y-2">
                {" "}
                <div className="flex text-primary">
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">star</span>{" "}
                </div>{" "}
                <h4 className="text-title-md font-title-md text-on-surface font-semibold">
                  Top-Notch Experience
                </h4>{" "}
                <p className="text-body-sm font-body-sm text-secondary leading-relaxed">
                  {" "}
                  "Used their service for York Races, and they exceeded all expectations. Punctual,
                  courteous, and the car was spotless. The chilled drinks were a lovely touch!"{" "}
                </p>{" "}
              </div>{" "}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-body-sm font-body-sm">
                {" "}
                <span className="text-on-surface font-semibold">Event Chauffeur Client</span>{" "}
                <span className="text-secondary text-xs">York Races</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="px-margin-mobile py-8 max-w-7xl mx-auto">
          {" "}
          <div className="orange-gradient-btn orange-gradient-cta rounded-[26px] p-6 md:p-12 text-white space-y-4 shadow-2xl relative overflow-hidden">
            {" "}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>{" "}
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase">
              {" "}
              RESERVE YOUR CHAUFFEUR{" "}
            </span>{" "}
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg font-bold leading-tight">
              {" "}
              Your next journey <br />
              starts here.{" "}
            </h2>{" "}
            <p className="text-body-md font-body-md text-white/90 max-w-lg leading-relaxed">
              {" "}
              Get a quick quote or arrange your bespoke chauffeur booking in minutes. Our team is
              available 24/7.{" "}
            </p>{" "}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 relative z-10">
              {" "}
              <Link
                className="bg-white text-on-primary font-bold text-label-button font-label-button py-3.5 px-6 rounded-full flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg"
                to="/book-now"
              >
                {" "}
                <span>Book Your Journey</span>{" "}
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>{" "}
              </Link>{" "}
              <a
                className="bg-black/20 hover:bg-black/30 backdrop-blur-md text-white border border-white/30 text-label-button font-label-button py-3.5 px-6 rounded-full flex items-center justify-center gap-2 active:scale-95 transition-transform"
                href="tel:01924806407"
              >
                {" "}
                <span className="material-symbols-outlined text-[18px]">call</span>{" "}
                <span>Call 01924 806407</span>{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest w-full border-t border-outline-variant/20">
        {" "}
        <div className="w-full px-margin-mobile md:px-margin py-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {" "}
          <div className="space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
            {" "}
            <Link className="inline-block" to="/">
              {" "}
              <img
                alt="Encore Chauffeurs Luxury Travel"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2uiBnyo1u2Ma4gkZUfSLmB1Hm6aw_iYjAT_bPoKRquAbyNBhwL5U8n1jX5w90iYqcw3gV5CuLvMLuiWvxOPDNEOvxqeSb6FcoGwWi6hfUCy8xfPTHtiV6KBPz2bUc7vDZmLIapbId480xXTPtB-Rb70SrSxQ-UMx4CfAZFqKNP3dl1JQUEnXSIGYAgiCja0RvPakJJVjN7JBHwowjbjLtFSVVMOrdKLnBpyRuEeJWCejKvn1cjqi3PxnhL13tQRaq8sE"
              />{" "}
            </Link>{" "}
            <p className="text-body-sm font-body-sm text-on-surface-variant max-w-md">
              {" "}
              © 2026 Encore Executive Travel Ltd. Registered in England &amp; Wales. Built by
              Octapus. Tel: 01924 806407{" "}
            </p>{" "}
            <p className="text-body-sm font-body-sm text-secondary-container text-xs">
              {" "}
              Encore Executive Travel Ltd · Company No. 16637937 · Registered Office: 206a Bridge
              Road, Horbury, Wakefield WF4 5PS.{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex flex-wrap justify-center gap-4 text-body-sm font-body-sm">
            {" "}
            <Link
              className="text-on-surface-variant hover:text-on-surface transition-colors hover:underline duration-150"
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>{" "}
            <Link
              className="text-on-surface-variant hover:text-on-surface transition-colors hover:underline duration-150"
              to="/about"
            >
              Licensing
            </Link>{" "}
            <Link
              className="text-on-surface-variant hover:text-on-surface transition-colors hover:underline duration-150"
              to="/about"
            >
              Safety Standards
            </Link>{" "}
            <Link
              className="text-on-surface-variant hover:text-on-surface transition-colors hover:underline duration-150"
              to="/fleet"
            >
              Fleet Spec
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
      <nav className="bg-surface-container-lowest/90 backdrop-blur-xl dark:bg-surface-container-lowest/90 docked full-width bottom-0 shadow-2xl fixed bottom-0 left-0 w-full z-50 flex justify-around items-center py-2 px-margin-mobile pb-safe md:hidden border-t border-outline-variant/20">
        {" "}
        <Link
          className="flex flex-col items-center justify-center text-primary-container dark:text-primary font-bold active:scale-90 transition-transform duration-150"
          to="/"
        >
          {" "}
          <span className="material-symbols-outlined text-[22px]">home</span>{" "}
          <span className="text-label-eyebrow font-label-eyebrow mt-0.5">Home</span>{" "}
        </Link>{" "}
        <Link
          className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-150 active:scale-90 transition-transform"
          to="/services"
        >
          {" "}
          <span className="material-symbols-outlined text-[22px]">directions_car</span>{" "}
          <span className="text-label-eyebrow font-label-eyebrow mt-0.5">Services</span>{" "}
        </Link>{" "}
        <Link
          className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-150 active:scale-90 transition-transform"
          to="/fleet"
        >
          {" "}
          <span className="material-symbols-outlined text-[22px]">auto_awesome</span>{" "}
          <span className="text-label-eyebrow font-label-eyebrow mt-0.5">Fleet</span>{" "}
        </Link>{" "}
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-150 active:scale-90 transition-transform"
          href="tel:01924806407"
        >
          {" "}
          <span className="material-symbols-outlined text-[22px]">call</span>{" "}
          <span className="text-label-eyebrow font-label-eyebrow mt-0.5">Contact</span>{" "}
        </a>{" "}
      </nav>
    </>
  );
}
