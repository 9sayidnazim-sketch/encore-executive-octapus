import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageShell,
  PageHero,
  Container,
  Eyebrow,
  Icon,
  PrimaryButton,
  GhostButton,
} from "@/components/site/Shell";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { IMAGES } from "@/lib/site";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Business & Corporate Chauffeur Accounts | Encore" },
      {
        name: "description",
        content:
          "Corporate travel and executive accounts with Encore Executive Travel: discreet, punctual chauffeurs and simplified booking and billing.",
      },
      { property: "og:title", content: "Business Travel with Encore Executive Travel" },
      {
        property: "og:description",
        content:
          "Corporate accounts for ease of booking and billing, with discreet, professional chauffeurs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: IMAGES.corporate },
      { name: "twitter:image", content: IMAGES.corporate },
    ],
  }),
  component: BusinessPage,
});

const POINTS = [
  {
    icon: "account_balance",
    title: "Corporate accounts",
    text: "Set up an account for ease of booking and billing across your organisation.",
  },
  {
    icon: "schedule",
    title: "Punctual and discreet",
    text: "Chauffeurs trained to provide a discreet, efficient service for clients and staff.",
  },
  {
    icon: "laptop_mac",
    title: "Work on the move",
    text: "Calm cabins with high-speed Wi-Fi and phone chargers.",
  },
  {
    icon: "groups",
    title: "Teams and guests",
    text: "The V-Class XLWB seats up to seven in a conference-style layout.",
  },
];

function BusinessPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Business"
        title="Business travel, thoughtfully arranged."
        intro="Impress clients and partners with a punctual, professional chauffeur service, whether for a conference, a meeting or a corporate event."
        image={IMAGES.corporate}
        crumbs={[{ label: "Business", to: "/business" }]}
      >
        <PrimaryButton to="/book-now">Book a Business Journey</PrimaryButton>
        <GhostButton href="#account">Discuss an Account</GhostButton>
      </PageHero>

      <section className="py-20">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p) => (
            <div
              key={p.title}
              className="rounded-[22px] bg-neutral-50 border border-neutral-200 p-7 space-y-3"
            >
              <Icon name={p.icon} className="text-primary-container" />
              <h3 className="text-title-md font-title-md text-neutral-900">{p.title}</h3>
              <p className="text-body-sm text-neutral-600">{p.text}</p>
            </div>
          ))}
        </Container>
        <Container className="pt-8 flex flex-wrap gap-4 text-label-button">
          <Link
            to="/services/$slug"
            params={{ slug: "corporate-travel" }}
            className="text-primary-container"
          >
            Corporate Travel →
          </Link>
          <Link
            to="/services/$slug"
            params={{ slug: "executive-travel" }}
            className="text-primary-container"
          >
            Executive Travel →
          </Link>
          <Link
            to="/services/$slug"
            params={{ slug: "airport-transfers" }}
            className="text-primary-container"
          >
            Airport Transfers →
          </Link>
        </Container>
      </section>

      <section
        id="account"
        className="py-20 bg-warm text-neutral-900 scroll-mt-24"
        data-header-light=""
      >
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <Eyebrow>Business enquiries</Eyebrow>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg">
              Discuss your company's travel.
            </h2>
            <p className="text-body-md text-neutral-600">
              Tell us about your organisation, how often you travel and any billing requirements.
              Choose “Business account” as the topic.
            </p>
          </div>
          <div className="lg:col-span-8">
            <EnquiryForm mode="contact" defaultService="corporate-travel" />
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
