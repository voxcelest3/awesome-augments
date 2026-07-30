import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logoAsset from "@/assets/logo.png.asset.json";

const today = new Date().toISOString().split("T")[0];

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{7,15}$/, "Enter a valid phone number (e.g. 0912-345-6789)"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please pick a date").refine((d) => d >= today, "Date can't be in the past"),
  time: z.string().min(1, "Please pick a time"),
});

type FormValues = z.infer<typeof schema>;

const services = ["Regular Haircut", "Skin Fade", "Beard Grooming"];

export function BookingDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", phone: "", service: "", date: "", time: "" },
  });

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 900));
    setDone(true);
    toast.success("Appointment booked!", {
      description: `${values.service} on ${values.date} at ${values.time}`,
    });
    setTimeout(() => {
      setDone(false);
      reset();
      onOpenChange(false);
    }, 1800);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) {
          setDone(false);
          reset();
        }
      }}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-card sm:max-w-lg">
        {done ? (
          <div className="flex flex-col items-center py-12 text-center">
            <CheckCircle2 className="h-14 w-14 text-primary" />
            <h3 className="mt-5 text-3xl">Appointment Booked</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We'll text you a confirmation shortly. Salamat!
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="mb-2 flex items-center gap-2.5">
                <img src={logoAsset.url} alt="" width={32} height={32} className="h-8 w-8" />
                <span className="font-display text-xl tracking-wide text-gradient-gold">FadeCraft</span>
              </div>
              <DialogTitle className="text-3xl">Reserve Your Appointment</DialogTitle>
              <DialogDescription>
                Choose your preferred service and schedule. We'll take care of the rest.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 space-y-4" noValidate>
              <div className="space-y-1.5">
                <Label htmlFor="fullName">Full name</Label>
                <Input id="fullName" placeholder="Juan Dela Cruz" autoComplete="name" {...register("fullName")} />
                {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" placeholder="0912-345-6789" autoComplete="tel" {...register("phone")} />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="service">Service</Label>
                <select
                  id="service"
                  {...register("service")}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm text-foreground shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-card">
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-xs text-destructive">{errors.service.message}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" min={today} {...register("date")} />
                  {errors.date && <p className="text-xs text-destructive">{errors.date.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" {...register("time")} />
                  {errors.time && <p className="text-xs text-destructive">{errors.time.message}</p>}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-gold font-semibold text-primary-foreground hover:opacity-90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Confirming…
                  </>
                ) : (
                  "Confirm Appointment"
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
