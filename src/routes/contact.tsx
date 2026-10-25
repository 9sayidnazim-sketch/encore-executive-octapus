import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Container, Eyebrow, Icon } from "@/components/site/Shell";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { BUSINESS, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Encore Executive Travel | 01924 806407" },
      {
        name: "description",
        content:
          "Contact Encore Executive Travel by phone, WhatsApp or enquiry form. 206a Bridge Road, Horbury, Wakefield WF4 5PS.",
      },
      { property: "og:title", content: "Contact Encore Executive Travel" },
      {
        property: "og:description",
        content: "Call 01924 806407, message us on WhatsApp or send an enquiry.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { icon: "call", label: "Telephone", value: BUSINESS.phone, href: BUSINESS.phoneHref },
    {
      icon: "chat",
      label: "WhatsApp",
      value: "Message Encore",
      href: whatsappLink("Hello Encore,"),
    },
    { icon: "location_on", label: "Head office", value: BUSINESS.address },
  ];
  return (
    <PageShell>
      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-6">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="text-display-hero-mobile md:text-headline-lg font-display-hero text-neutral-900">
              How can we help?
            </h1>
            <p className="text-body-lg text-neutral-600">
              Tell us where you need to be, and let us help you arrange your journey.
            </p>
            <ul className="space-y-4">
              {items.map((i) => (
                <li
                  key={i.label}
                  className="flex gap-4 rounded-[18px] bg-neutral-50 border border-neutral-200 p-5"
                >
                  <Icon name={i.icon} className="text-primary-container" />
                  <div>
                    <p className="text-label-eyebrow uppercase tracking-widest text-neutral-600">
                      {i.label}
                    </p>
                    {i.href ? (
                      <a
                        href={i.href}
                        target={i.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-title-md text-neutral-900 hover:text-primary-container"
                      >
                        {i.value}
                      </a>
                    ) : (
                      <p className="text-body-md text-neutral-900">{i.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8">
            <EnquiryForm mode="contact" />
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
