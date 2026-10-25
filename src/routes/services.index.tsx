import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageShell,
  PageHero,
  Container,
  Eyebrow,
  Icon,
  PrimaryButton,
  GhostButton,
  CtaBand,
} from "@/components/site/Shell";
import { SERVICES, IMAGES, getVehicle } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Chauffeur Services | Encore Executive Travel" },
      {
        name: "description",
        content:
          "Airport transfers, wedding, event, corporate and executive chauffeur services from Encore Executive Travel, Wakefield.",
      },
      { property: "og:title", content: "Chauffeur Services | Encore Executive Travel" },
      {
        property: "og:description",
        content: "Professional chauffeur transport shaped around the purpose of each journey.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: IMAGES.chauffeurDoor },
      { name: "twitter:image", content: IMAGES.chauffeurDoor },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Services"
        title="Chauffeur services, thoughtfully arranged."
        intro="From airport collections and executive appointments to weddings and special occasions, Encore provides professional chauffeur transportation shaped around the purpose of each journey."
        image={IMAGES.chauffeurDoor}
        crumbs={[{ label: "Our Services", to: "/services" }]}
      >
        <PrimaryButton to="/book-now">Book Your Journey</PrimaryButton>
        <GhostButton to="/contact">Make an Enquiry</GhostButton>
      </PageHero>

      <nav className="sticky top-[76px] z-30 bg-white/90 backdrop-blur border-y border-neutral-200">
        <Container className="flex gap-6 overflow-x-auto py-3 text-label-button font-label-button">
          {SERVICES.map((s, i) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="whitespace-nowrap text-neutral-600 hover:text-primary-container"
            >
              0{i + 1} {s.title}
            </a>
          ))}
        </Container>
      </nav>

      {SERVICES.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`py-20 scroll-mt-32 ${i % 2 ? "bg-warm text-neutral-900" : ""}`}
          data-header-light={i % 2 ? "" : undefined}
        >
          <Container
            className={`grid gap-12 lg:grid-cols-2 items-start ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="rounded-[24px] overflow-hidden aspect-[4/3] lg:sticky lg:top-40">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <Eyebrow>
                0{i + 1} · {s.title}
              </Eyebrow>
              <h2
                className={`text-headline-lg-mobile md:text-headline-lg font-headline-lg ${i % 2 ? "text-neutral-900" : "text-neutral-900"}`}
              >
                {s.heading}
              </h2>
              <p className={`text-body-lg ${i % 2 ? "text-neutral-600" : "text-neutral-600"}`}>
                {s.original}
              </p>
              <dl className="grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="text-title-md font-title-md">Who it's for</dt>
                  <dd
                    className={`text-body-sm mt-1 ${i % 2 ? "text-neutral-600" : "text-neutral-600"}`}
                  >
                    {s.forWhom}
                  </dd>
                </div>
                <div>
                  <dt className="text-title-md font-title-md">The benefit</dt>
                  <dd
                    className={`text-body-sm mt-1 ${i % 2 ? "text-neutral-600" : "text-neutral-600"}`}
                  >
                    {s.benefit}
                  </dd>
                </div>
                <div>
                  <dt className="text-title-md font-title-md">Typical journeys</dt>
                  <dd>
                    <ul
                      className={`mt-2 space-y-1.5 text-body-sm ${i % 2 ? "text-neutral-600" : "text-neutral-600"}`}
                    >
                      {s.uses.map((u) => (
                        <li key={u} className="flex gap-2">
                          <Icon name="check" className="text-primary-container text-[18px]" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="text-title-md font-title-md">When enquiring, share</dt>
                  <dd>
                    <ul
                      className={`mt-2 space-y-1.5 text-body-sm ${i % 2 ? "text-neutral-600" : "text-neutral-600"}`}
                    >
                      {s.provide.map((u) => (
                        <li key={u} className="flex gap-2">
                          <Icon name="arrow_right" className="text-primary-container text-[18px]" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              <p className={`text-body-sm ${i % 2 ? "text-neutral-600" : "text-neutral-600"}`}>
                Vehicles: {s.fleet.map((f) => getVehicle(f)!.name).join(" · ")}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="orange-gradient-cta text-neutral-900 font-label-button text-label-button px-7 py-3.5 rounded-full inline-flex items-center gap-2"
                >
                  Explore Service <Icon name="arrow_forward" className="text-[18px]" />
                </Link>
                <GhostButton to="/book-now" light={!!(i % 2)}>
                  Book This Service
                </GhostButton>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <CtaBand
        title="Not sure which service fits?"
        text="Tell us where you need to be, and let us help you arrange your journey."
        primary={{ to: "/book-now", label: "Book Your Journey" }}
        secondary={{ to: "/contact", label: "Make an Enquiry" }}
      />
    </PageShell>
  );
}
