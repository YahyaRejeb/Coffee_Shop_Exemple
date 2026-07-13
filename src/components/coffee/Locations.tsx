import { motion } from "motion/react";
import { MapPin, Clock, Phone } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "WHY NOT NOW ?",
    address: "Q62G+G9R, Ben Arous, Tunisie",
    hours: "Tous les jours 7h – 22h",
    phone: "",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="uppercase text-accent tracking-[0.3em] text-xs font-semibold">Nous Trouver</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Une adresse, <span className="italic text-accent">une philosophie</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Venez nous rendre visite à Ben Arous et découvrez notre univers autour d'un café préparé avec soin.
          </p>

          <Accordion type="single" collapsible defaultValue="loc-0" className="mt-8">
            {locations.map((loc, i) => (
              <AccordionItem key={loc.name} value={`loc-${i}`} className="border-border">
                <AccordionTrigger className="font-display text-lg hover:no-underline">
                  <span className="flex items-center gap-3">
                    <MapPin className="size-5 text-accent" />
                    {loc.name}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 pl-8 text-sm text-muted-foreground">
                    <p>{loc.address}</p>
                    <p className="flex items-center gap-2"><Clock className="size-4" /> {loc.hours}</p>
                    {loc.phone && <p className="flex items-center gap-2"><Phone className="size-4" /> {loc.phone}</p>}
                    <Button variant="outline" size="sm" className="mt-3 rounded-full" asChild>
                      <a href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`} target="_blank" rel="noreferrer">
                        Itinéraire
                      </a>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-warm bg-foreground"
        >
          <iframe
            title="WHY NOT NOW ? location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=10.187%2C36.720%2C10.247%2C36.760&layer=mapnik&marker=36.740%2C10.217"
            className="w-full h-full grayscale-[0.3] contrast-[1.05]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}