import { useState } from "react";
import { X } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";

const shots = [
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80", alt: "Modern fade haircut style" },
  { src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80", alt: "Professional barber haircut service" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80", alt: "Classic men's hairstyle" },
  { src: work1, alt: "Client with a fresh sharp skin fade haircut" },
  { src: work2, alt: "Barber blending a clean taper fade with clippers" },
  { src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?auto=format&fit=crop&w=800&q=80", alt: "Premium men's haircut design" },
];


export function Gallery() {
  const [open, setOpen] = useState<null | { src: string; alt: string }>(null);

  return (
    <section id="gallery" className="border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Portfolio" title="Our Work" />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {shots.map((shot, i) => (
            <Reveal key={shot.src + i} delay={(i % 3) * 0.08}>
              <button
                type="button"
                onClick={() => setOpen(shot)}
                className="group relative block w-full overflow-hidden rounded-lg border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`View larger: ${shot.alt}`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-background/60 opacity-0 transition group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-5 backdrop-blur"
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close preview"
            className="absolute right-5 top-5 rounded-full border border-border p-2 text-foreground hover:bg-secondary"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={open.src}
            alt={open.alt}
            className="max-h-[85vh] w-auto rounded-lg border border-border object-contain shadow-elegant"
          />
        </div>
      )}
    </section>
  );
}
