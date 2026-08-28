import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { locations } from "@/lib/data";

export default function Home() {
  const loc = locations[0];

  return (
    <>
      <Hero />
      {/* About strip */}
      <section className="bg-[#0C7642]/10 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#0C7642] font-semibold mb-4">
              Our story
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-espresso mb-6 leading-tight">
              A small cafe, doing coffee properly.
            </h2>
            <p className="text-ink/70 leading-relaxed max-w-2xl mx-auto">
              Coffeejuana started as a neighbourhood spot in Krishna Nagar with
              one goal — serve genuinely good coffee alongside food people
              crave, in a space that feels warm the moment you walk in. No
              shortcuts, no rush.
            </p>
          </Reveal>
        </div>
      </section>

      <MenuPreview />
      <Testimonials />

      {/* Location + CTA */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-rust font-semibold mb-4">
              Come say hi
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0C7642] mb-4">
              {loc.name}
            </h2>
            <p className="text-ink/70 leading-relaxed mb-8">{loc.address}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/locations/${loc.slug}/book`}
                className="rounded-full bg-[#0C7642] text-cream px-7 py-3 font-semibold hover:bg-rust transition-colors"
              >
                Reserve a Table
              </Link>
              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-espresso/20 text-espresso px-7 py-3 font-semibold hover:bg-espresso hover:text-cream transition-colors"
              >
                Get Directions
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-sand h-80">
              <iframe
                title="Coffeejuana location map"
                src={`https://www.google.com/maps?q=${loc.lat},${loc.lng}&z=16&output=embed`}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
