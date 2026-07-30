import { Reveal, SectionTitle } from "./Reveal";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Regular Haircut",
    price: "₱150",
    desc: "Clean, stylish cut with a precise finish for everyday confidence.",
    items: ["Consultation", "Wash & style", "Neck shave"],
    featured: false,
  },
  {
    name: "Skin Fade",
    price: "₱200",
    desc: "Modern fade blended to the skin with razor-sharp line-up.",
    items: ["Consultation", "Razor line-up", "Wash & style", "Hot towel"],
    featured: true,
  },
  {
    name: "Beard Grooming",
    price: "₱450",
    desc: "Professional beard shaping, trimming, and hot towel treatment.",
    items: ["Beard sculpting", "Hot towel", "Beard oil finish"],
    featured: false,
  },
];

export function Services({ onBook }: { onBook: () => void }) {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="What we do" title="Our Services" />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1}>
              <article
                className={`group relative flex h-full flex-col rounded-lg border bg-card p-8 transition duration-300 hover:-translate-y-1.5 ${
                  s.featured ? "border-primary/50 shadow-gold" : "border-border shadow-elegant"
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
                    Most booked
                  </span>
                )}
                <h3 className="text-2xl">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-end justify-between border-t border-border pt-6">
                  <span className="font-display text-4xl text-gradient-gold">{s.price}</span>
                  <Button
                    variant={s.featured ? "default" : "outline"}
                    onClick={onBook}
                    className={
                      s.featured
                        ? "bg-gradient-gold font-semibold text-primary-foreground hover:opacity-90"
                        : "border-border bg-transparent hover:bg-secondary"
                    }
                  >
                    Book
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
