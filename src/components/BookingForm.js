"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";

export default function BookingForm({ location }) {
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    // Demo only — wire this up to email, a sheet, or a booking API
    // (e.g. Tock, SevenRooms, or a simple serverless function) at launch.
    setSubmitted(true);
    requestAnimationFrame(() => {
      if (successRef.current) {
        gsap.fromTo(
          successRef.current,
          { opacity: 0, y: 16, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.6)" }
        );
      }
    });
  }

  if (submitted) {
    return (
      <div
        ref={successRef}
        className="bg-white border border-sand rounded-3xl p-10 text-center"
      >
        <div className="w-14 h-14 rounded-full bg-rust/10 text-rust flex items-center justify-center mx-auto mb-6 text-2xl">
          ✓
        </div>
        <h3 className="font-display text-2xl text-espresso mb-3">
          Table requested!
        </h3>
        <p className="text-ink/60 leading-relaxed">
          This is a demo confirmation — in the live site, this would notify{" "}
          {location.name} instantly and send you a confirmation text or
          email.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-sand rounded-3xl p-8 md:p-10 grid gap-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Full name" name="name" placeholder="Your name" required />
        <Field
          label="Phone number"
          name="phone"
          type="tel"
          placeholder="98xxxxxxxx"
          required
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Field label="Date" name="date" type="date" required />
        <Field label="Time" name="time" type="time" required />
        <Field
          label="Guests"
          name="guests"
          type="number"
          min="1"
          max="12"
          defaultValue={2}
          required
        />
      </div>

      <Field
        label="Notes (optional)"
        name="notes"
        as="textarea"
        placeholder="Window seat, birthday, allergies..."
      />

      <button
        type="submit"
        className="rounded-full bg-espresso text-cream px-8 py-3.5 font-semibold hover:bg-rust transition-colors justify-self-start"
      >
        Request Table at {location.name.replace("Coffeejuana — ", "")}
      </button>
    </form>
  );
}

function Field({ label, name, as = "input", ...props }) {
  const Tag = as;
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-medium text-espresso">{label}</span>
      <Tag
        name={name}
        rows={as === "textarea" ? 3 : undefined}
        className="rounded-xl border border-sand bg-cream/40 px-4 py-3 outline-none focus:border-rust transition-colors"
        {...props}
      />
    </label>
  );
}
