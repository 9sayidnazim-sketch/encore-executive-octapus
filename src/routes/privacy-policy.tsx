import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Container, Eyebrow } from "@/components/site/Shell";
import { BUSINESS } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy & Cookie Policy | Encore Executive Travel" },
      {
        name: "description",
        content:
          "How Encore Executive Travel Ltd collects, uses and retains personal data, and how we use cookies.",
      },
      { property: "og:title", content: "Privacy & Cookie Policy | Encore Executive Travel" },
      {
        property: "og:description",
        content: "Our commitment to safeguarding the privacy of our website visitors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS: [string, string[]][] = [
  [
    "Introduction",
    [
      "We are committed to safeguarding the privacy of our website visitors.",
      "This policy applies where we are acting as a data controller with respect to the personal data of such persons; in other words, where we determine the purposes and means of the processing of that personal data.",
    ],
  ],
  [
    "The personal data that we collect",
    [
      "We may process data enabling us to get in touch with you (“contact data”). The source of the contact data is you.",
      "We may process data about your use of our website and services (“usage data”). The usage data may include your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths, as well as information about the timing, frequency and pattern of your service use. The source of the usage data is our analytics tracking system.",
    ],
  ],
  [
    "Purposes of processing and legal bases",
    [
      "Relationships and communications: we may process contact data, account data, customer relationship data, transaction data and/or communication data for the purposes of managing our relationships, communicating with you (excluding direct marketing) by email, SMS, post, fax and/or telephone, providing support services and complaint handling. The legal basis is our legitimate interests, namely communications with our website visitors, service users, customers and customer personnel, the maintenance of our relationships, enabling the use of our services, and the proper administration of our website, services and business.",
      "Record keeping: we may process your personal data for the purposes of creating and maintaining our databases, back-up copies of our databases and our business records generally. The legal basis is our legitimate interests, namely ensuring that we have access to all the information we need to run our business properly and efficiently in accordance with this policy.",
      "Legal claims: we may process your personal data where necessary for the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure. The legal basis is our legitimate interests, namely the protection and assertion of our legal rights, your legal rights and the legal rights of others.",
      "Legal compliance and vital interests: we may also process your personal data where necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.",
    ],
  ],
  [
    "Providing your personal data to others",
    [
      "Your personal data held in our website database will be stored on the servers of our hosting services providers.",
      "We may disclose your personal data where necessary for compliance with a legal obligation to which we are subject, in order to protect your vital interests or the vital interests of another natural person, or for the establishment, exercise or defence of legal claims.",
    ],
  ],
  [
    "Retaining and deleting personal data",
    [
      "Personal data that we process for any purpose shall not be kept for longer than is necessary for that purpose.",
      "Contact data will be retained for a minimum period of 12 months following the date of the most recent contact between you and us, and for a maximum period of 24 months following that date.",
      "We may retain your personal data where such retention is necessary for compliance with a legal obligation, or to protect your vital interests or the vital interests of another natural person.",
    ],
  ],
  [
    "Your rights",
    [
      "Your principal rights under data protection law are: the right to access; the right to rectification; the right to erasure; the right to restrict processing; the right to object to processing; the right to data portability; the right to complain to a supervisory authority; and the right to withdraw consent.",
      "These rights are subject to certain limitations and exceptions. You can learn more from the Information Commissioner's Office (ico.org.uk). You may exercise any of your rights by written notice to us, using the contact details below.",
    ],
  ],
  [
    "About cookies",
    [
      "A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.",
      "Cookies may be “persistent” cookies, which remain valid until their set expiry date unless deleted, or “session” cookies, which expire at the end of the user session when the browser is closed.",
      "Cookies may not contain any information that personally identifies a user, but personal data that we store about you may be linked to the information stored in and obtained from cookies.",
    ],
  ],
  [
    "Cookies that we use",
    [
      "We use cookies for security, as an element of the measures used to protect our website generally, and for analysis, to help us analyse the use and performance of our website and services.",
    ],
  ],
  [
    "Cookies used by our service providers",
    [
      "Our service providers use cookies and those cookies may be stored on your computer when you visit our website.",
      "We use Google Analytics, which gathers information about the use of our website by means of cookies. The information gathered is used to create reports about the use of our website. You can review Google's privacy policy at policies.google.com/privacy.",
    ],
  ],
  [
    "Managing cookies",
    [
      "Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser and from version to version; please consult your browser's help pages (Chrome, Firefox, Opera, Safari and Edge). Blocking all cookies will have a negative impact upon the usability of many websites.",
    ],
  ],
  [
    "Amendments",
    [
      "We may update this policy from time to time by publishing a new version on our website. You should check this page occasionally to ensure you are happy with any changes to this policy.",
    ],
  ],
  [
    "Our details",
    [
      `This website is owned and operated by ${BUSINESS.legalName}.`,
      `You can contact us by telephone on ${BUSINESS.phone}, or by post at ${BUSINESS.address}.`,
    ],
  ],
];

function PrivacyPage() {
  return (
    <PageShell>
      <section className="py-16 md:py-24 bg-warm text-neutral-900" data-header-light="">
        <Container className="max-w-3xl space-y-10">
          <div className="space-y-3">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg">
              Privacy &amp; Cookie Policy
            </h1>
          </div>
          {SECTIONS.map(([title, paras], i) => (
            <div key={title} className="space-y-3">
              <h2 className="text-headline-sm font-headline-sm">
                {i + 1}. {title}
              </h2>
              {paras.map((p) => (
                <p key={p} className="text-body-md text-neutral-700">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </Container>
      </section>
    </PageShell>
  );
}
