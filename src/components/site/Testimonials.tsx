import { Star } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

const reviews = [
  {
    quote: "The best fade I've ever had. Very professional barbers and the shop is super clean.",
    name: "Mark Villanueva",
    meta: "Skin Fade",
  },
  {
    quote: "Excellent customer service and they really listen to what you want. I'll definitely come back.",
    name: "Ryan Dela Cruz",
    meta: "Regular Haircut",
  },
  {
    quote: "Affordable prices with premium quality. My beard has never looked better.",
    name: "Paolo Santos",
    meta: "Beard Grooming",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Reviews" title="What Our Clients Say" />

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-8 shadow-elegant">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-lg tracking-wide">{r.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">{r.meta}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
