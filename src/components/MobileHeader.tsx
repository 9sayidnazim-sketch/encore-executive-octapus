import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const LOGO = "/logo.svg";
const LOCKUP = "/brand-lockup-dark.svg";

const LINKS = [
  ["/services", "Our Services"],
  ["/fleet", "Fleet"],
  ["/business", "Business Travel"],
  ["/about", "About Us"],
  ["/contact", "Contact"],
] as const;

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const btn = "bg-neutral-100 text-neutral-900 border-neutral-300";

  return (
    <header className="sticky top-0 z-50 site-header-glass">
      <div className="flex justify-between items-center w-full px-margin-mobile py-2.5">
        <Link
          to="/"
          aria-label="Encore Executive — home"
          className="flex items-center gap-2 select-none shrink-0"
        >
          <img
            alt="Encore Executive — Luxury Travel"
            src={LOCKUP}
            className="h-[22px] w-auto object-contain mr-1.5"
          />
        </Link>
        <div className="flex items-center gap-2">
          <a
            href="tel:01924806407"
            aria-label="Call"
            className={`flex items-center justify-center w-10 h-10 rounded-full border active:scale-95 transition-all ${btn}`}
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
          </a>
          <Link
            to="/book-now"
            className="inline-flex orange-gradient-cta text-white text-label-button font-label-button px-4 py-2 rounded-full font-bold whitespace-nowrap"
          >
            Book Now
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className={`flex items-center justify-center w-10 h-10 rounded-full border active:scale-95 transition-all ${btn}`}
          >
            <span className="material-symbols-outlined text-[20px]">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="px-margin-mobile py-4 site-header-glass-strong space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
            <img alt="" className="h-6 w-auto object-contain" src={LOCKUP} />
            <span className="text-xs text-neutral-500">24/7 Concierge</span>
          </div>
          <div className="flex flex-col space-y-2">
            {LINKS.map(([href, label]) => (
              <Link
                key={href}
                to={href}
                onClick={() => setOpen(false)}
                className="text-neutral-900 hover:text-primary-container py-2 border-b border-neutral-100 text-label-button font-label-button"
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            to="/book-now"
            onClick={() => setOpen(false)}
            className="block w-full text-center orange-gradient-cta text-white py-3 rounded-full font-bold text-label-button font-label-button"
          >
            Book Your Journey
          </Link>
        </div>
      )}
    </header>
  );
}
