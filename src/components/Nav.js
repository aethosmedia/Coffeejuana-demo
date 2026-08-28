"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  // { href: "/locations/krishna-nagar/book", label: "Book a Table" },
];

export default function Nav() {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.1 }
    );

    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-tight text-espresso"
        >
          <Image
            src="/logo1.png"
            alt="Coffeejuana"
            width={150}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-ink/80 hover:text-[#0C7642] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/locations/krishna-nagar/book"
          className="hidden md:inline-flex items-center rounded-full bg-[#0C7642] text-cream px-5 py-2.5 text-sm font-semibold hover:bg-rust transition-colors duration-400"
        >
          Reserve a Table
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-espresso" />
          <span className="w-6 h-0.5 bg-espresso" />
          <span className="w-4 h-0.5 bg-espresso" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-sand px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-ink/80 font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
