import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import { Button } from "@/components/ui/button";

const details = [
  { icon: MapPin, label: "Address", value: "Dasmariñas, Cavite" },
  { icon: Phone, label: "Phone", value: "0912-345-6789", href: "tel:09123456789" },
  { icon: Mail, label: "Email", value: "fadecraft@gmail.com", href: "mailto:fadecraft@gmail.com" },
  { icon: Clock, label: "Hours", value: "Monday – Sunday · 9:00 AM – 9:00 PM" },
];

export function Contact({ onBook }: { onBook: () => void }) {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Get in touch" title="Contact Us" />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="grid h-full gap-4 sm:grid-cols-2">
              {details.map((d) => (
                <div key={d.label} className="rounded-lg border border-border bg-card p-6 shadow-elegant">
                  <d.icon className="h-5 w-5 text-primary" />
                  <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="mt-1 block text-base text-foreground hover:text-primary">
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base text-foreground">{d.value}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-lg border border-primary/40 bg-card p-10 text-center shadow-gold">
              <h3 className="text-3xl">Ready for your next cut?</h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Reserve a slot in seconds — pick your service, date, and time. Walk-ins welcome, but booked
                clients always come first.
              </p>
              <Button
                size="lg"
                onClick={onBook}
                className="mx-auto mt-7 bg-gradient-gold px-8 font-semibold text-primary-foreground hover:opacity-90"
              >
                Book Appointment
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section id="location" className="border-t border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Find us" title="Visit Our Shop" />
        <Reveal>
          <div className="overflow-hidden rounded-lg border border-border shadow-elegant">
            <iframe
              title="FadeCraft Barbershop location in Dasmariñas, Cavite"
              src="https://www.google.com/maps?q=Dasmari%C3%B1as%20Cavite&output=embed"
              loading="lazy"
              allowFullScreen
              className="h-[420px] w-full border-0 grayscale-[35%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
