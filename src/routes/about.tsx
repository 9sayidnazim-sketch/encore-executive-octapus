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
} from "@/components/site/Shell";
import { IMAGES, QUALITIES, BUSINESS } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Encore Executive Travel | Wakefield Chauffeurs" },
      {
        name: "description",
        content:
          "A family tradition of excellence: luxury, reliability and personalised chauffeur service from Horbury, Wakefield.",
      },
      { property: "og:title", content: "About Encore Executive Travel" },
      {
        property: "og:description",
        content:
          "Luxury, reliability and personalised service are at the heart of everything we do.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: IMAGES.interior },
      { name: "twitter:image", content: IMAGES.interior },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Encore"
        title="A family tradition of excellence."
        intro="Luxury, reliability and personalised service are at the heart of everything we do."
        image={IMAGES.interior}
        crumbs={[{ label: "About Us", to: "/about" }]}
      >
        <PrimaryButton to="/services">Our Services</PrimaryButton>
        <GhostButton to="/fleet">Our Fleet</GhostButton>
      </PageHero>

      <section className="py-20 bg-warm text-neutral-900" data-header-light="">
        <Container className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-5">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg">
              {BUSINESS.message}
            </h2>
            <p className="text-body-lg text-neutral-700">
              With years of experience in the executive travel industry, our director's passion for
              excellence comes from a deep-rooted family tradition of providing exceptional
              transport services. Following in the footsteps of his father, who ran a successful
              transport business, he has built a company that combines a legacy of professionalism
              with modern luxury.
            </p>
            <p className="text-body-md text-neutral-600">
              From premium airport transfers to corporate and event chauffeur services, Encore
              Executive Travel is dedicated to exceeding your expectations. Our high-end vehicles,
              the Mercedes-Benz EQS 450+ and the spacious V-Class, make every journey as comfortable
              as it is stylish. Whether you are travelling for business or a special occasion, we
              treat every journey with the same importance and tailor our service to your needs.
            </p>
            <p className="text-body-md text-neutral-600">
              Our chauffeurs are fully licensed, insured and DBS cleared, offering not just a ride
              but a seamless experience marked by punctuality, courtesy and attention to detail.
              Complimentary refreshments, onboard Wi-Fi and thoughtful comforts make every journey a
              relaxed one.
            </p>
          </div>
          <div className="rounded-[28px] overflow-hidden aspect-[4/5]">
            <img
              src={IMAGES.estate}
              alt="Executive vehicle outside a Yorkshire estate"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <Eyebrow>What to expect</Eyebrow>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-neutral-900">
              Considered in every detail.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {QUALITIES.map((q) => (
              <div
                key={q.title}
                className="rounded-[22px] bg-neutral-50 border border-neutral-200 p-7 space-y-3"
              >
                <span className="w-11 h-11 rounded-full bg-primary-container/15 text-primary-container flex items-center justify-center">
                  <Icon name={q.icon} />
                </span>
                <h3 className="text-title-md font-title-md text-neutral-900">{q.title}</h3>
                <p className="text-body-sm text-neutral-600">{q.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Let us be part of your journey."
        text="When you choose Encore, you are choosing a family tradition of excellence."
        primary={{ to: "/book-now", label: "Book Your Journey" }}
        secondary={{ to: "/contact", label: "Make an Enquiry" }}
      />
    </PageShell>
  );
}
