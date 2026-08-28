import Link from "next/link";
import Reveal from "@/components/Reveal";
import { menu } from "@/lib/data";

export default function MenuPreview() {
  const favourites = menu
    .flatMap((c) => c.items)
    .filter((i) => i.tag === "Guest favourite");

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#0C7642] font-semibold mb-3">
              Crowd favourites
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-espresso">
              What people order twice.
            </h2>
          </div>
          <Link
            href="/menu"
            className="text-sm font-semibold text-[#0C7642] underline decoration-[#0C7642] underline-offset-4 whitespace-nowrap"
          >
            See the full menu →
          </Link>
        </Reveal>

        <Reveal as="div" stagger className="grid gap-6 md:grid-cols-3">
          {favourites.map((item) => (
            <div
              key={item.name}
              className="group bg-white rounded-3xl p-8 border border-sand hover:border-[#0C7642] transition-colors"
            >
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#0C7642] bg-[#0C7642]/10 rounded-full px-3 py-1 mb-5">
                {item.tag}
              </span>
              <h3 className="font-display text-2xl text-espresso mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed mb-6">
                {item.desc}
              </p>
              <p className="font-semibold text-espresso">{item.price}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
