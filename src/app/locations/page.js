import Link from "next/link";
import Reveal from "@/components/Reveal";
import { locations } from "@/lib/data";

export const metadata = {
  title: "Locations — Coffeejuana",
};

export default function LocationsPage() {
  return (
    <div className="bg-cream min-h-screen pt-40 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0C7642] font-semibold mb-4">
            Find us
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-espresso mb-4">
            One home. More brewing.
          </h1>
          <p className="text-ink/60 max-w-lg mx-auto">
            Currently pouring coffee in Krishna Nagar — built to grow as
            Coffeejuana opens new locations across Delhi.
          </p>
        </Reveal>

        <Reveal as="div" stagger className="grid gap-8 md:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.slug}
              className="bg-white rounded-3xl border border-sand overflow-hidden"
            >
              <div className="h-56">
                <iframe
                  title={loc.name}
                  src={`https://www.google.com/maps?q=${loc.lat},${loc.lng}&z=15&output=embed`}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h2 className="font-display text-2xl text-espresso mb-2">
                  {loc.name}
                </h2>
                <p className="text-sm text-ink/60 mb-1">{loc.address}</p>
                <p className="text-sm text-marigold font-medium mb-6">
                  ★ {loc.rating.toFixed(1)} ({loc.ratingCount} reviews) ·{" "}
                  {loc.priceLevel}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/locations/${loc.slug}/book`}
                    className="rounded-full bg-espresso text-cream px-6 py-2.5 text-sm font-semibold hover:bg-rust transition-colors"
                  >
                    Book This Location
                  </Link>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="rounded-full border border-espresso/20 text-espresso px-6 py-2.5 text-sm font-semibold hover:bg-espresso hover:text-cream transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder card hinting at future growth */}
          <div className="rounded-3xl border-2 border-dashed border-sand flex flex-col items-center justify-center text-center p-10 text-ink/40">
            <p className="font-display text-xl mb-2">Next location</p>
            <p className="text-sm max-w-xs">
              Built to scale — add a new city block here the day Coffeejuana
              opens location #2.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
