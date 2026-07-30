import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

const quick = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#barbers", label: "Barbers" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="FadeCraft logo" width={36} height={36} className="h-9 w-9" />
            <span className="font-display text-2xl tracking-wide text-gradient-gold">FadeCraft</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Professional barbershop offering modern haircuts, skin fades, beard grooming, and quality service
            in Dasmariñas, Cavite.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-lg tracking-wide text-primary">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quick.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground transition hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-lg tracking-wide text-primary">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Dasmariñas, Cavite</li>
            <li>
              <a href="tel:09123456789" className="hover:text-primary">0912-345-6789</a>
            </li>
            <li>
              <a href="mailto:fadecraft@gmail.com" className="hover:text-primary">fadecraft@gmail.com</a>
            </li>
            <li>Mon – Sun · 9:00 AM – 9:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-5 pt-6 lg:px-8">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} FadeCraft Barbershop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 rounded-full bg-gradient-gold p-3 text-primary-foreground shadow-gold transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
