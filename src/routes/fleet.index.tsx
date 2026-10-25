import { createFileRoute } from "@tanstack/react-router";
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
import { FLEET, IMAGES, BUSINESS } from "@/lib/site";

export const Route = createFileRoute("/fleet/")({
  head: () => ({
    meta: [
      { title: "Our Fleet | Mercedes-Benz EQS & V-Class | Encore" },
      {
        name: "description",
        content:
          "The Encore fleet: the all-electric Mercedes-Benz EQS 450+ for up to four passengers and the V-Class XLWB for up to seven.",
      },
      { property: "og:title", content: "Our Fleet | Encore Executive Travel" },
      {
        property: "og:description",
        content:
          "Comfort, style and advanced technology: the Mercedes-Benz EQS 450+ and V-Class XLWB.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: IMAGES.eqs },
      { name: "twitter:image", content: IMAGES.eqs },
    ],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Encore Fleet"
        title="Experience luxury and comfort."
        intro={`${BUSINESS.message} Our carefully selected fleet offers the perfect blend of comfort, style and advanced technology, for an exceptional journey every time.`}
        image={IMAGES.eqs}
        crumbs={[{ label: "Fleet", to: "/fleet" }]}
      >
        <PrimaryButton to="/book-now">Book Your Journey</PrimaryButton>
        <GhostButton to="/contact">Make an Enquiry</GhostButton>
      </PageHero>

      <section className="py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {FLEET.map((v) => (
            <VehicleCard key={v.slug} v={v} />
          ))}
        </Container>
      </section>

      <section className="py-20 bg-warm text-neutral-900" data-header-light="">
        <Container className="space-y-8">
          <Eyebrow>Compare</Eyebrow>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg">
            Which vehicle suits your journey?
          </h2>
          <div className="overflow-x-auto rounded-[20px] border border-neutral-200 bg-white">
            <table className="w-full text-left text-body-sm">
              <thead className="bg-soft">
                <tr>
                  <th className="p-4">Vehicle</th>
                  <th className="p-4">Passengers</th>
                  <th className="p-4">Luggage</th>
                  <th className="p-4">Best for</th>
                </tr>
              </thead>
              <tbody>
                {FLEET.map((v) => (
                  <tr key={v.slug} className="border-t border-neutral-200">
                    <td className="p-4 font-semibold">{v.name}</td>
                    <td className="p-4">Up to {v.passengers}</td>
                    <td className="p-4">
                      {v.slug.includes("eqs") ? "Generous boot" : "Large boot"}
                    </td>
                    <td className="p-4 text-neutral-600">{v.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-body-sm text-neutral-600 flex gap-2">
            <Icon name="info" className="text-[18px]" />
            Both vehicles include high-speed Wi-Fi, complimentary bottled water and phone chargers.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Reserve your vehicle."
        text="Tell us your journey and passenger numbers, and we will recommend the right vehicle."
        primary={{ to: "/book-now", label: "Book Your Journey" }}
        secondary={{ to: "/services", label: "Explore Services" }}
      />
    </PageShell>
  );
}
