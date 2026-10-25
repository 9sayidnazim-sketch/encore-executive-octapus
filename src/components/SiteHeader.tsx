import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const LOGO = "/logo.svg";
const LOCKUP = "/brand-lockup-dark.svg";

const LINKS = [
  ["/", "Home"],
  ["/services", "Our Services"],
  ["/fleet", "Fleet"],
  ["/business", "Business"],
  ["/about", "About Us"],
  ["/contact", "Contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 site-header-glass">
      <div className="flex justify-between items-center w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin py-space-md">
        <Link
          to="/"
          aria-label="Encore Executive — home"
          className="flex items-center gap-3 select-none shrink-0"
        >
          <img alt="" src={LOGO} className="h-9 sm:h-10 w-auto object-contain shrink-0" />
          <img
            alt="Encore Executive — Luxury Travel"
            src={LOCKUP}
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </Link>
        <nav className="hidden xl:flex items-center gap-5">
          {LINKS.map(([href, label]) => (
            <Link
              key={href}
              to={href}
              className={`text-label-button font-label-button transition-colors hover:text-primary-container ${
                isActive(href)
                  ? "text-primary-container font-bold border-b-2 border-primary-container pb-1"
                  : "text-neutral-800"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="tel:01924806407"
            className="hidden lg:flex items-center gap-2 transition-colors text-label-button font-label-button px-3.5 py-1.5 rounded-full border text-neutral-900 border-neutral-300 hover:text-primary-container"
          >
            <span className="material-symbols-outlined text-primary-container text-[18px]">
              call
            </span>
            01924 806407
          </a>
          <Link
            to="/book-now"
            className="orange-gradient-cta text-white font-label-button text-label-button px-5 sm:px-6 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-primary-container/20 active:scale-95"
          >
            <span>Book Now</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="xl:hidden w-10 h-10 rounded-full border flex items-center justify-center bg-neutral-100 text-neutral-900 border-neutral-300"
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="xl:hidden border-t border-white/50 site-header-glass-strong px-margin-mobile py-4 flex flex-col gap-1">
          {LINKS.map(([href, label]) => (
            <Link
              key={href}
              to={href}
              onClick={() => setOpen(false)}
              className="py-3 text-title-md font-title-md text-neutral-900 hover:text-primary-container border-b border-neutral-100"
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:01924806407"
            className="pt-3 flex items-center gap-2 text-primary-container font-label-button"
          >
            <span className="material-symbols-outlined text-[18px]">call</span> 01924 806407
          </a>
        </nav>
      )}
    </header>
  );
}
