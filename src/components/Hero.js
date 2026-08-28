"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.2
      )
        .fromTo(
          ".hero-word",
          { opacity: 0, y: 60, rotate: 2 },
          { opacity: 1, y: 0, rotate: 0, duration: 0.9, stagger: 0.08 },
          0.35
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          ".hero-badge",
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
          "-=0.5"
        );

      gsap.to(".hero-bean", {
        y: -18,
        rotate: 8,
        duration: 3.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.4, from: "random" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-cream grain-bg pt-40 pb-28 md:pt-52 md:pb-36"
    >
      {/* floating decorative beans */}
      <div className="hero-bean absolute left-[8%] top-[22%] w-4 h-6 rounded-full bg-roast/40 rotate-12" />
      <div className="hero-bean absolute left-[18%] top-[68%] w-3 h-5 rounded-full bg-rust/40 -rotate-12" />
      <div className="hero-bean absolute right-[12%] top-[30%] w-5 h-7 rounded-full bg-cocoa/40 rotate-6" />
      <div className="hero-bean absolute right-[20%] top-[70%] w-3 h-5 rounded-full bg-marigold/50 rotate-3" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="hero-eyebrow text-xs md:text-sm uppercase tracking-[0.35em] text-[#0C7642] font-semibold mb-6">
          Krishna Nagar, Delhi · Est. locally loved
        </p>

        <h1 className="font-display text-espresso leading-[0.95] text-[15vw] md:text-[7.5vw] font-semibold tracking-tight">
          <span className="hero-word inline-block">Coffee,</span>{" "}
          <span className="hero-word inline-block italic text-[#0C7642]">brewed</span>
          <br className="hidden md:block" />
          <span className="hero-word inline-block">with</span>{" "}
          <span className="hero-word inline-block">heart.</span>
        </h1>

        <p className="hero-sub mt-8 text-base md:text-lg text-ink/70 max-w-xl mx-auto leading-relaxed">
          A neighbourhood cafe in Krishna Nagar pouring rich, hand-crafted
          coffee and all-day comfort food — the kind of place regulars rave
          about.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/locations/krishna-nagar/book"
            className="hero-cta w-full sm:w-auto rounded-full bg-espresso text-cream px-8 py-3.5 font-semibold hover:bg-rust transition-colors"
          >
            Reserve a Table
          </Link>
          <Link
            href="/menu"
            className="hero-cta w-full sm:w-auto rounded-full border border-espresso/20 text-espresso px-8 py-3.5 font-semibold hover:bg-espresso hover:text-cream transition-colors"
          >
            View the Menu
          </Link>
        </div>

        <div className="hero-badge inline-flex items-center gap-2 mt-12 rounded-full bg-white/70 border border-sand px-5 py-2.5 text-sm font-medium text-espresso shadow-sm">
          <span className="text-marigold text-base">★★★★★</span>
          <span>5.0 rating from our Krishna Nagar outlet</span>
        </div>
      </div>
    </section>
  );
}
