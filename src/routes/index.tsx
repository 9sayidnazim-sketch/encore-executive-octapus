import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { HomeSections } from "@/components/HomeSections";
import { MobileHeader } from "@/components/MobileHeader";
import { MobileSections } from "@/components/MobileSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Encore Chauffeurs | Luxury Travel, Made Effortless" },
      {
        name: "description",
        content:
          "Executive chauffeur, airport transfer and event travel across the UK from Wakefield-based Encore Chauffeurs.",
      },
      { property: "og:title", content: "Encore Chauffeurs | Luxury Travel, Made Effortless" },
      {
        property: "og:description",
        content: "Professional chauffeurs, premium fleet and seamless journeys across the UK.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <div className="hidden md:block bg-background text-on-surface antialiased overflow-x-clip min-h-screen">
        <SiteHeader />
        <HomeSections />
      </div>
      <div className="md:hidden bg-background text-on-background antialiased overflow-x-clip min-h-screen pb-24">
        <MobileHeader />
        <div>
          <MobileSections />
        </div>
      </div>
    </>
  );
}
