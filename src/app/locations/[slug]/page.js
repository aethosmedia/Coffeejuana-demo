import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { locations } from "@/lib/data";

export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export function generateMetadata({ params }) {
  const loc = locations.find((l) => l.slug === params.slug);
  return { title: loc ? `${loc.name} — Coffeejuana` : "Location — Coffeejuana" };
}

export default function LocationDetail({ params }) {
  const loc = locations.find((l) => l.slug === params.slug);
  if (!loc) return notFound();

  return (
    <div className="bg-cream min-h-screen pt-40 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-rust font-semibold mb-4">
            Location
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-espresso mb-6">
            {loc.name}
          </h1>
        </Reveal>

        <Reveal delay={0.05} className="rounded-3xl overflow-hidden border border-sand h-80 mb-10">
          <iframe
            title={loc.name}
            src={`https://www.google.com/maps?q=${loc.lat},${loc.lng}&z=16&output=embed`}
            className="w-full h-full"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={0.1} className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-semibold text-espresso mb-2">Address</h2>
            <p className="text-ink/70 mb-6">{loc.address}</p>

            <h2 className="font-semibold text-espresso mb-2">Rating</h2>
            <p className="text-ink/70 mb-6">
              ★ {loc.rating.toFixed(1)} from {loc.ratingCount} Google reviews
            </p>

            <h2 className="font-semibold text-espresso mb-2">Price range</h2>
            <p className="text-ink/70">{loc.priceLevel}</p>
          </div>

          <div>
            <h2 className="font-semibold text-espresso mb-2">Hours</h2>
            <ul className="text-ink/70 space-y-1 mb-6">
              {loc.hours.map((h) => (
                <li key={h.day} className="flex justify-between max-w-xs">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-ink/40 mb-6">
              Sample hours — confirm real hours with Coffeejuana before
              launch.
            </p>

            <Link
              href={`/locations/${loc.slug}/book`}
              className="inline-block rounded-full bg-espresso text-cream px-7 py-3 font-semibold hover:bg-rust transition-colors"
            >
              Reserve a Table Here
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
