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
} from "@/components/site/Shell";
import { getVehicle, FLEET, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/fleet/$slug")({
  loader: ({ params }) => {
    const vehicle = getVehicle(params.slug);
    if (!vehicle) throw notFound();
    return { vehicle };
  },
  head: ({ loaderData }) => {
    const v = loaderData?.vehicle;
    if (!v)
      return {
        meta: [
          { title: "Vehicle not found | Encore Executive Travel" },
          { name: "robots", content: "noindex" },
        ],
      };
    const title = `${v.name} Chauffeur | Encore Executive Travel`;
    const desc = `${v.tagline} ${v.category} for up to ${v.passengers} passengers.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: v.image },
        { name: "twitter:image", content: v.image },
      ],
    };
  },
  component: VehiclePage,
});

function VehiclePage() {
  const { vehicle: v } = Route.useLoaderData();
  const other = FLEET.filter((o) => o.slug !== v.slug);
  const services = SERVICES.filter((s) => s.fleet.includes(v.slug));
  return (
    <PageShell>
      <PageHero
        eyebrow={v.category}
        title={v.name}
        intro={v.tagline}
        image={v.image}
        crumbs={[
          { label: "Fleet", to: "/fleet" },
          { label: v.name, to: `/fleet/${v.slug}` },
        ]}
      >
        <PrimaryButton to="/book-now">Reserve This Vehicle</PrimaryButton>
        <GhostButton to="/contact">Ask a Question</GhostButton>
      </PageHero>

      <section className="py-20 bg-warm text-neutral-900" data-header-light="">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-5">
            <Eyebrow>Overview</Eyebrow>
            {v.description.map((p) => (
              <p key={p} className="text-body-lg text-neutral-700">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-body-sm inline-flex items-center gap-2">
                <Icon name="group" className="text-primary-container text-[18px]" />
                Up to {v.passengers} passengers
              </span>
              <span className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-body-sm inline-flex items-center gap-2">
                <Icon name="luggage" className="text-primary-container text-[18px]" />
                {v.slug.includes("eqs") ? "Generous boot" : "Large boot"}
              </span>
            </div>
            <p className="text-body-md text-neutral-600">
              <strong className="text-neutral-900">Ideal for: </strong>
              {v.bestFor}
            </p>
          </div>
          <div className="lg:col-span-5 rounded-[24px] bg-white border border-neutral-200 p-8">
            <h2 className="text-headline-sm font-headline-sm mb-4">Features</h2>
            <ul className="space-y-3 text-body-md text-neutral-700">
              {v.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <Icon name="check_circle" className="text-primary-container" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-6">
          <h2 className="text-headline-md font-headline-md text-neutral-900">
            Services in the {v.name.replace("Mercedes-Benz ", "")}
          </h2>
          <div className="flex flex-wrap gap-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="px-5 py-2.5 rounded-full border border-neutral-300 hover:border-primary-container text-neutral-800 inline-flex items-center gap-2"
              >
                <Icon name={s.icon} className="text-primary-container text-[18px]" />
                {s.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title={`Travel in the ${v.name}.`}
        text="Share your journey details and we will confirm availability with you."
        primary={{ to: "/book-now", label: "Reserve This Vehicle" }}
        secondary={{ to: "/fleet", label: "Back to Fleet" }}
      />

      <section className="pb-20">
        <Container className="space-y-6">
          <h2 className="text-headline-md font-headline-md text-neutral-900">Also in the fleet</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {other.map((o) => (
              <VehicleCard key={o.slug} v={o} />
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
