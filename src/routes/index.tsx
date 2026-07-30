import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Barbers } from "@/components/site/Barbers";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact, Location } from "@/components/site/Contact";
import { Footer, BackToTop } from "@/components/site/Footer";
import { BookingDialog } from "@/components/site/BookingDialog";

const title = "FadeCraft Barbershop | Premium Haircuts in Dasmariñas, Cavite";
const description =
  "Premium haircuts, skin fades, and beard grooming for modern gentlemen in Dasmariñas, Cavite. Book your appointment at FadeCraft Barbershop.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "FadeCraft Barbershop",
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dasmariñas",
            addressRegion: "Cavite",
            addressCountry: "PH",
          },
          telephone: "+63-912-345-6789",
          email: "fadecraft@gmail.com",
          openingHours: "Mo-Su 09:00-21:00",
          priceRange: "₱₱",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [booking, setBooking] = useState(false);
  const openBooking = () => setBooking(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <Services onBook={openBooking} />
        <Gallery />
        <Testimonials />
        <Barbers />
        <Location />
        <Contact onBook={openBooking} />
      </main>
      <Footer />
      <BackToTop />
      <BookingDialog open={booking} onOpenChange={setBooking} />
      <Toaster position="top-center" />
    </div>
  );
}
