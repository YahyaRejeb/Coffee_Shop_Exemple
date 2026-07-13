import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Amira Benali", role: "Habituée depuis 2019", text: "Un cadre magnifique et un café délicieux. Je viens toutes les semaines depuis l'ouverture, jamais déçue.", rating: 5 },
  { name: "Youssef Mansour", role: "Client fidèle", text: "L'endroit parfait pour travailler ou lire. L'espresso est toujours parfait et l'ambiance est unique.", rating: 5 },
  { name: "Layla Haddad", role: "Amatrice de café", text: "Le meilleur café de la ville. Je recommande le latte aux amandes, un pur délice.", rating: 4 },
  { name: "Karim Nasri", role: "Torréfacteur local", text: "Enfin un vrai café de spécialité en Tunisie. Le savoir-faire est là, bravo à toute l'équipe.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-foreground text-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase text-gold tracking-[0.3em] text-xs font-semibold">Mots Doux</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            De nos <span className="italic text-[oklch(0.3_0.04_45)]">habitués</span>.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-background/5 border border-background/10 rounded-2xl p-6 backdrop-blur hover:bg-background/10 transition-colors"
            >
              <Quote className="size-7 text-gold/70 mb-3" />
              <blockquote className="text-sm leading-relaxed text-background/90">
                "{r.text}"
              </blockquote>
              <div className="mt-5 flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <motion.span
                    key={k}
                    initial={{ opacity: 0, scale: 0.3 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + k * 0.06 }}
                  >
                    <Star className="size-4 fill-gold text-gold" />
                  </motion.span>
                ))}
              </div>
              <figcaption className="mt-4 text-sm">
                <span className="font-display font-semibold">{r.name}</span>
                <span className="block text-xs text-background/60">{r.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}