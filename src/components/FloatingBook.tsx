import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

/** Floating booking button; hides while scrolling and reappears once scrolling stops. */
export function FloatingBook() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let t: number | undefined;
    const onScroll = () => {
      setHidden(true);
      window.clearTimeout(t);
      t = window.setTimeout(() => setHidden(false), 800);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(t);
    };
  }, []);

  if (path === "/book-now") return null;
  return (
    <Link
      to="/book-now"
      aria-label="Book Now"
      className={`fixed right-4 z-[60] orange-gradient-cta text-white font-label-button text-label-button rounded-full shadow-xl shadow-primary-container/30 inline-flex items-center gap-2 px-5 py-3.5 md:bottom-6 md:right-6 transition-all duration-300 ${
        path === "/" ? "bottom-24" : "bottom-5"
      } ${hidden ? "opacity-0 translate-y-3 pointer-events-none" : "opacity-100 translate-y-0"}`}
    >
      <span className="material-symbols-outlined text-[20px]">event_available</span>
      Book Now
    </Link>
  );
}
