import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-[#0c6339] text-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-marigold font-semibold mb-3 text-center">
            What Krishna Nagar is saying
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-center mb-16">
            Real reviews, real regulars.
          </h2>
        </Reveal>

        <Reveal
          as="div"
          stagger
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-cream/5 border border-cream/10 rounded-2xl p-6 flex flex-col justify-between"
            >
              <blockquote className="text-cream/90 text-sm leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-xs text-marigold flex items-center gap-1">
                <span>★★★★★</span>
                <span className="text-cream/40 ml-2">{t.author}</span>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
