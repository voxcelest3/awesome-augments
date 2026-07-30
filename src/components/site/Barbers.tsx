import { Reveal, SectionTitle } from "./Reveal";
import barber1 from "@/assets/barber1.jpg.asset.json";
import barber2 from "@/assets/barber2.jpg.asset.json";
import barber3 from "@/assets/barber3.jpg.asset.json";

const team = [
  {
    name: "Brince Lawrence Rañas",
    role: "Senior Barber",
    bio: "10+ years behind the chair. Classic cuts, precision scissor work, and clean tapers.",
    img: barber1.url,
  },
  {
    name: "Jorjoel Macadildig",
    role: "Fade Specialist",
    bio: "Modern hairstyle expert known for razor-sharp skin fades and creative line-ups.",
    img: barber2.url,
  },
  {
    name: "Andromache Hilary Borines",
    role: "Grooming Specialist",
    bio: "Professional beard styling, hot towel shaves, and full grooming treatments.",
    img: barber3.url,
  },
];

export function Barbers() {
  return (
    <section id="barbers" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="The team" title="Meet Our Barbers" />

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <article className="group h-full overflow-hidden rounded-lg border border-border bg-card shadow-elegant transition duration-300 hover:-translate-y-1.5">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={m.img}
                    alt={`${m.name}, ${m.role} at FadeCraft Barbershop`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{m.role}</p>
                  <h3 className="mt-2 text-2xl">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
