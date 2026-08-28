import Link from "next/link";
import { locations } from "@/lib/data";

export default function Footer() {
  const loc = locations[0];

  return (
    <footer className="bg-[#0c6339] text-cream/90">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl mb-3">Coffeejuana</p>
          <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
            Rich coffee, honest hospitality, made fresh in Krishna Nagar,
            Delhi.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-marigold mb-4">
            Visit
          </p>
          <p className="text-sm text-cream/80 leading-relaxed">{loc.address}</p>
          <a
            href={loc.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-sm underline decoration-rust underline-offset-4"
          >
            Get directions
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-marigold mb-4">
            Explore
          </p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>
              <Link href="/menu" className="hover:text-marigold">
                Full menu
              </Link>
            </li>
            <li>
              <Link href="/locations" className="hover:text-marigold">
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/locations/krishna-nagar/book"
                className="hover:text-marigold"
              >
                Book a table
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} Coffeejuana - built by Aethos
        Media.
      </div>
    </footer>
  );
}
