import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import { locations } from "@/lib/data";

export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  return { title: loc ? `Book — ${loc.name}` : "Book a Table — Coffeejuana" };
}

export default async function BookPage({ params }) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return notFound();

  return (
    <div className="bg-sand min-h-screen pt-40 pb-24">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-rust font-semibold mb-4">
            Reserve a table
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-espresso mb-4">
            {loc.name}
          </h1>
          <p className="text-ink/60">{loc.address}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <BookingForm location={loc} />
        </Reveal>
      </div>
    </div>
  );
}