import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Container, Eyebrow, Icon } from "@/components/site/Shell";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { BUSINESS } from "@/lib/site";

export const Route = createFileRoute("/book-now")({
  validateSearch: (s: Record<string, unknown>): { service?: string } =>
    typeof s["service"] === "string" ? { service: s["service"] } : {},
  head: () => ({
    meta: [
      { title: "Book a Chauffeur | Encore Executive Travel" },
      {
        name: "description",
        content:
          "Send a booking enquiry for one-way, hourly or airport transfer chauffeur journeys with Encore Executive Travel.",
      },
      { property: "og:title", content: "Book a Chauffeur | Encore Executive Travel" },
      {
        property: "og:description",
        content: "Arrange your journey: one way, hourly or airport transfer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const { service } = Route.useSearch();
  return (
    <PageShell>
      <section className="py-16 md:py-24">
        <Container className="space-y-10">
          <div className="max-w-2xl space-y-4">
            <Eyebrow>Book Now</Eyebrow>
            <h1 className="text-display-hero-mobile md:text-display-hero font-display-hero text-neutral-900">
              Arrange your journey.
            </h1>
            <p className="text-body-lg text-neutral-600">
              Share your journey details below. Encore will review your request and confirm
              availability and arrangements with you directly.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-body-sm text-neutral-600">
              <li className="flex items-center gap-1.5">
                <Icon name="looks_one" className="text-primary-container text-[18px]" />
                Enter your details
              </li>
              <li className="flex items-center gap-1.5">
                <Icon name="looks_two" className="text-primary-container text-[18px]" />
                Send via WhatsApp
              </li>
              <li className="flex items-center gap-1.5">
                <Icon name="looks_3" className="text-primary-container text-[18px]" />
                Encore confirms
              </li>
            </ul>
          </div>
          <EnquiryForm mode="booking" defaultService={service} />
          <p className="text-body-sm text-neutral-600">
            Urgent or same-day travel? Please call{" "}
            <a href={BUSINESS.phoneHref} className="text-primary-container font-bold">
              {BUSINESS.phone}
            </a>
            .
          </p>
        </Container>
      </section>
    </PageShell>
  );
}
