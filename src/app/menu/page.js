import Reveal from "@/components/Reveal";
import { menu } from "@/lib/data";

export const metadata = {
  title: "Menu — Coffeejuana",
};

export default function MenuPage() {
  return (
    <div className="bg-cream min-h-screen pt-40 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0C7642] font-semibold mb-4">
            The full menu
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-espresso">
            Something for every craving.
          </h1>
        </Reveal>

        <div className="space-y-20">
          {menu.map((section) => (
            <Reveal key={section.category} as="div">
              <h2 className="font-display text-2xl md:text-3xl text-espresso mb-8 pb-4 border-b border-sand">
                {section.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-espresso">
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span className="text-[10px] uppercase tracking-wider text-[#0C7642] bg-[#0C7642]/10 rounded-full px-2 py-0.5 font-semibold">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-ink/60 mt-1 leading-relaxed max-w-sm">
                        {item.desc}
                      </p>
                    </div>
                    <p className="font-semibold text-espresso whitespace-nowrap">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 text-center text-xs text-ink/40">
          Prices shown are placeholder demo values — swap in Coffeejuana&apos;s
          real menu and pricing.
        </Reveal>
      </div>
    </div>
  );
}
