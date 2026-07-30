import { motion } from "motion/react";
import { Scissors, Star } from "lucide-react";
import heroImage from "@/assets/hero-shop.jpg";
import { Button } from "@/components/ui/button";

export function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Interior of FadeCraft Barbershop with leather chairs and warm gold lighting"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background" />

      <div className="relative mx-auto w-full max-w-5xl px-5 pt-28 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary backdrop-blur"
        >
          <Scissors className="h-3.5 w-3.5" /> Dasmariñas, Cavite
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl leading-[0.92] sm:text-7xl lg:text-8xl"
        >
          Look Sharp.
          <br />
          <span className="text-gradient-gold">Feel Confident.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Premium haircuts, skin fades, and beard grooming for modern gentlemen — crafted by barbers who
          treat every cut like a signature.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={onBook}
            className="bg-gradient-gold px-8 font-semibold tracking-wide text-primary-foreground shadow-gold transition hover:opacity-90"
          >
            Book Appointment
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border bg-transparent px-8 tracking-wide hover:bg-secondary"
          >
            <a href="#services">View Services</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-primary text-primary" /> 4.9 average rating
          </span>
          <span>10+ years experience</span>
          <span>Open daily 9AM – 9PM</span>
        </motion.div>
      </div>
    </section>
  );
}
