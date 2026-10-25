import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  PageShell,
  PageHero,
  Container,
  Eyebrow,
  Icon,
  PrimaryButton,
  GhostButton,
  CtaBand,
  VehicleCard,
  ServiceCard,
} from "@/components/site/Shell";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { getService, getVehicle, SERVICES, TESTIMONIALS, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s)
      return {
        meta: [
          { title: "Service not found | Encore Executive Travel" },
          { name: "robots", content: "noindex" },
        ],
      };
    const title = `${s.title} | Encore Executive Travel`;
    return {
      meta: [
        { title },
        { name: "description", content: s.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: s.intro },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: s.image },
        { name: "twitter:image", content: s.image },
      ],
    };
  },
  component: ServicePage,
});

const STEPS_AIRPORT = [
  "Submit the airport, journey details and required date.",
  "Provide the flight number where applicable.",
  "Specify passenger and luggage requirements.",
  "Receive confirmation and any further instructions from Encore.",
];

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  const reviews = TESTIMONIALS.filter((t) => t.service.includes(s.testimonialKey));
  const steps =
    s.slug === "airport-transfers"
      ? STEPS_AIRPORT
      : [
          "Share your journey details through the booking form, by phone or on WhatsApp.",
          ...s.provide.slice(0, 2).map((p) => `Include ${p.charAt(0).toLowerCase()}${p.slice(1)}.`),
          "Encore will review your requirements and confirm the arrangements with you.",
        ];
  const ctaTitle =
    s.slug === "airport-transfers"
      ? "Arrange your airport transfer."
      : `Arrange your ${s.title.toLowerCase()}.`;

  return (
    <PageShell>
      <PageHero
        eyebrow={s.title}
        title={s.heading}
        intro={s.intro}
        image={s.image}
        crumbs={[
          { label: "Our Services", to: "/services" },
          { label: s.title, to: `/services/${s.slug}` },
        ]}
      >
        <PrimaryButton to="/book-now">
          {s.slug === "airport-transfers" ? "Book an Airport Transfer" : "Book Your Journey"}
        </PrimaryButton>
        <GhostButton href="#enquire">Enquire Now</GhostButton>
      </PageHero>

      <section className="py-20 bg-warm text-neutral-900" data-header-light="">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <Eyebrow>About this service</Eyebrow>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg">
              {s.title}, the Encore way.
            </h2>
            <p className="text-body-lg text-neutral-600">{s.original}</p>
            <p className="text-body-md text-neutral-600">
              <strong className="text-neutral-900">Who it's for: </strong>
              {s.forWhom}
            </p>
            <p className="text-body-md text-neutral-600">
              <strong className="text-neutral-900">The benefit: </strong>
              {s.benefit}
            </p>
          </div>
          <div className="lg:col-span-5 rounded-[24px] bg-white border border-neutral-200 p-8 space-y-4">
            <h3 className="text-headline-sm font-headline-sm">Typical journeys</h3>
            <ul className="space-y-3 text-body-md text-neutral-700">
              {s.uses.map((u) => (
                <li key={u} className="flex gap-3">
                  <Icon name="check_circle" className="text-primary-container" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <Eyebrow>How to arrange it</Eyebrow>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-neutral-900">
              Four simple steps.
            </h2>
            <ol className="space-y-5">
              {steps.map((st, i) => (
                <li key={st} className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-full border border-primary-container/50 text-primary-container flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <p className="text-body-md text-neutral-600 pt-2">{st}</p>
                </li>
              ))}
            </ol>
            <p className="text-body-sm text-neutral-600">
              Your journey is confirmed only once Encore has replied to confirm it.
            </p>
          </div>
          <div className="rounded-[24px] bg-neutral-50 border border-neutral-200 p-8 space-y-4 self-start">
            <h3 className="text-headline-sm font-headline-sm text-neutral-900">
              What to include in your enquiry
            </h3>
            <ul className="space-y-3 text-body-md text-neutral-600">
              {s.provide.map((p) => (
                <li key={p} className="flex gap-3">
                  <Icon name="arrow_right" className="text-primary-container" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white border-y border-neutral-200">
        <Container className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <Eyebrow>Relevant fleet</Eyebrow>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-neutral-900">
              Choose the right vehicle.
            </h2>
            <p className="text-body-md text-neutral-600">
              The EQS 450+ carries up to four passengers; the V-Class XLWB carries up to seven with
              a large boot for luggage.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {s.fleet.map((f) => (
              <VehicleCard key={f} v={getVehicle(f)!} />
            ))}
          </div>
        </Container>
      </section>

      {reviews.length > 0 && (
        <section className="py-20">
          <Container className="space-y-8">
            <Eyebrow>What clients say</Eyebrow>
            <div className="grid gap-6 md:grid-cols-2">
              {reviews.map((r) => (
                <figure
                  key={r.quote}
                  className="rounded-[22px] bg-neutral-50 border border-neutral-200 p-7 space-y-3"
                >
                  <p className="text-title-md font-title-md text-neutral-900">{r.title}</p>
                  <blockquote className="text-body-md text-neutral-600">“{r.quote}”</blockquote>
                  <figcaption className="text-label-eyebrow uppercase tracking-widest text-primary-container">
                    {r.service}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section
        id="enquire"
        className="py-20 bg-warm text-neutral-900 scroll-mt-24"
        data-header-light=""
      >
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <Eyebrow>{s.title} enquiry</Eyebrow>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg">
              {ctaTitle}
            </h2>
            <p className="text-body-md text-neutral-600">
              Share your details and Encore will come back to you to confirm the arrangements.
            </p>
          </div>
          <div className="lg:col-span-8">
            <EnquiryForm mode="booking" defaultService={s.slug} />
          </div>
        </Container>
      </section>

      <CtaBand
        title={ctaTitle}
        text="Tell us where you need to be, and let us help you arrange your journey."
        primary={{
          to: "/book-now",
          label: s.slug === "airport-transfers" ? "Book an Airport Transfer" : "Book Your Journey",
        }}
        secondary={{ to: "/contact", label: "Ask a Question" }}
      />

      <section className="pb-20">
        <Container className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-headline-md font-headline-md text-neutral-900">Other services</h2>
            <div className="flex gap-4 text-label-button">
              <Link to="/fleet" className="text-primary-container">
                View the fleet
              </Link>
              <a
                href={whatsappLink(`Hello Encore, I have a question about ${s.title}.`)}
                target="_blank"
                rel="noreferrer"
                className="text-primary-container"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.filter((o) => o.slug !== s.slug).map((o) => (
              <ServiceCard key={o.slug} s={o} />
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
