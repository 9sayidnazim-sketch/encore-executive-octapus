import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { BUSINESS, SERVICES, FLEET, whatsappLink, type Service, type Vehicle } from "@/lib/site";

const LOGO_WHITE = "/logo.svg";

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden>
      {name}
    </span>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white text-neutral-900 antialiased overflow-x-clip min-h-screen">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin ${className}`}>
    {children}
  </div>
);

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-label-eyebrow font-label-eyebrow tracking-widest uppercase text-primary-container">
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  crumbs?: { label: string; to: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-surface-container-lowest">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface-container-lowest/80" />
      <Container className="relative z-10 pt-16 pb-20 md:pt-24 md:pb-28">
        {crumbs && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-body-sm text-secondary"
          >
            <Link to="/" className="hover:text-on-surface">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.to} className="flex items-center gap-1.5">
                <Icon name="chevron_right" className="text-[16px]" />
                <Link to={c.to} className="hover:text-on-surface">
                  {c.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        <div className="max-w-3xl space-y-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-display-hero-mobile md:text-display-hero font-display-hero tracking-tight text-white">
            {title}
          </h1>
          <p className="text-body-lg text-secondary max-w-2xl">{intro}</p>
          {children && <div className="flex flex-wrap gap-4 pt-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}

export function PrimaryButton({
  to,
  children,
  icon = "arrow_forward",
}: {
  to: string;
  children: ReactNode;
  icon?: string;
}) {
  return (
    <Link
      to={to}
      className="orange-gradient-cta text-white font-label-button text-label-button px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 shadow-xl shadow-primary-container/25"
    >
      {children} <Icon name={icon} className="text-[18px]" />
    </Link>
  );
}

export function GhostButton({
  to,
  href,
  children,
  light,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  light?: boolean;
}) {
  const cls = `font-label-button text-label-button px-7 py-3.5 rounded-full inline-flex items-center gap-2 border transition-colors ${
    light
      ? "border-neutral-300 text-neutral-900 hover:border-neutral-900"
      : "border-outline-variant/50 text-on-surface hover:border-outline bg-surface-container/50"
  }`;
  return to ? (
    <Link to={to} className={cls}>
      {children}
    </Link>
  ) : (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={cls}
    >
      {children}
    </a>
  );
}

export function CtaBand({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-surface-container-low p-8 md:p-14">
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-primary-container/20 blur-3xl" />
          <div className="relative max-w-2xl space-y-4">
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-white">
              {title}
            </h2>
            <p className="text-body-lg text-secondary">{text}</p>
            <div className="flex flex-wrap gap-4 pt-3">
              <PrimaryButton to={primary.to}>{primary.label}</PrimaryButton>
              {secondary && <GhostButton to={secondary.to}>{secondary.label}</GhostButton>}
              <GhostButton href={BUSINESS.phoneHref}>
                <Icon name="call" className="text-[18px] text-primary-container" /> {BUSINESS.phone}
              </GhostButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: s.slug }}
      className="group rounded-[22px] overflow-hidden bg-white border border-neutral-200 shadow-sm hover:border-primary-container/50 transition-colors flex flex-col"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={s.image}
          alt={s.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2 text-primary-container">
          <Icon name={s.icon} />
          <span className="text-label-eyebrow uppercase tracking-widest">Service</span>
        </div>
        <h3 className="text-headline-sm font-headline-sm text-neutral-900">{s.title}</h3>
        <p className="text-body-sm text-neutral-600 flex-1">{s.intro}</p>
        <span className="text-label-button font-label-button text-primary-container inline-flex items-center gap-1.5">
          View Service <Icon name="arrow_forward" className="text-[18px]" />
        </span>
      </div>
    </Link>
  );
}

export function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <Link
      to="/fleet/$slug"
      params={{ slug: v.slug }}
      className="group rounded-[24px] overflow-hidden bg-white border border-neutral-200 shadow-sm hover:border-primary-container/50 transition-colors"
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <img
          src={v.image}
          alt={v.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur text-body-sm text-white">
          {v.category}
        </span>
      </div>
      <div className="p-6 md:p-8 space-y-3">
        <h3 className="text-headline-md font-headline-md text-neutral-900">{v.name}</h3>
        <p className="text-body-md text-neutral-600">{v.tagline}</p>
        <div className="flex flex-wrap gap-4 pt-1 text-body-sm text-neutral-800">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="group" className="text-primary-container text-[18px]" /> Up to{" "}
            {v.passengers} passengers
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="wifi" className="text-primary-container text-[18px]" /> High-speed Wi-Fi
          </span>
        </div>
        <span className="pt-2 text-label-button font-label-button text-primary-container inline-flex items-center gap-1.5">
          View Vehicle <Icon name="arrow_forward" className="text-[18px]" />
        </span>
      </div>
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/10 pt-16 pb-24 md:pb-10">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 pb-12 border-b border-white/10">
          <div className="md:col-span-4 space-y-4">
            <img src={LOGO_WHITE} alt="Encore Executive Travel" className="h-10 w-auto" />
            <p className="text-body-sm text-secondary max-w-sm">
              {BUSINESS.message} Luxury, reliability and personalised service are at the heart of
              everything we do.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 text-primary-container font-bold"
            >
              <Icon name="call" className="text-[18px]" /> {BUSINESS.phone}
            </a>
          </div>
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-title-md font-title-md text-white">Services</h4>
            <ul className="space-y-2 text-body-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-secondary hover:text-on-surface"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-title-md font-title-md text-white">Encore</h4>
            <ul className="space-y-2 text-body-sm">
              {FLEET.map((v) => (
                <li key={v.slug}>
                  <Link
                    to="/fleet/$slug"
                    params={{ slug: v.slug }}
                    className="text-secondary hover:text-on-surface"
                  >
                    {v.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/about" className="text-secondary hover:text-on-surface">
                  About Encore
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-secondary hover:text-on-surface">
                  Business
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-title-md font-title-md text-white">Contact</h4>
            <ul className="space-y-2 text-body-sm text-secondary">
              <li>
                <Link to="/book-now" className="hover:text-on-surface">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-on-surface">
                  Contact &amp; Enquiries
                </Link>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-on-surface"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-on-surface">
                  Privacy &amp; Cookie Policy
                </Link>
              </li>
              <li className="pt-2">
                <span className="block text-white font-medium">Head Office</span>
                {BUSINESS.address}
              </li>
            </ul>
          </div>
        </div>
        <p className="pt-8 text-body-sm text-secondary">
          © {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved. Built by Octapus.
        </p>
      </Container>
    </footer>
  );
}
