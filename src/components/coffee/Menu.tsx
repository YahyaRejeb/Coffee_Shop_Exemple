import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import croissant from "@/assets/menu-croissant.jpg";
import chocolatChantillyImg from "@/assets/chocolat-chantilly.png";

import brightExpress from "@/assets/menu-express-bright.jpg";
import brightAmericain from "@/assets/menu-americain-bright.jpg";
import brightDirect from "@/assets/menu-direct-bright.jpg";
import brightCappucin from "@/assets/menu-cappucin-bright.jpg";
import brightCappucino from "@/assets/menu-cappucino-bright.jpg";
import brightChocolat from "@/assets/menu-chocolat-bright.jpg";
import brightNespressoDirect from "@/assets/menu-nespresso-direct.jpg";
import brightNespressoCappucin from "@/assets/menu-nespresso-cappucin.jpg";
import brightNescafe from "@/assets/nescafe-custom.jpg";
import brightMacchiato from "@/assets/menu-macchiato-bright.jpg";
import brightMenthe from "@/assets/menu-the-menthe.jpg";
import brightAmande from "@/assets/menu-the-amande.jpg";
import brightPignons from "@/assets/menu-the-pignons.jpg";
import brightInfusion from "@/assets/menu-the-infusion.jpg";
import brightTheGlace from "@/assets/menu-the-glace.jpg";

// Newly generated local image assets
import water05Img from "@/assets/water_bottle_05l_1782665909509.png";
import water1Img from "@/assets/water_bottle_1l_1782665925520.png";
import sparklingWaterImg from "@/assets/sparkling_water_1l_1782665987295.png";
import sodaImg from "@/assets/soda_glass_1782665998774.png";
import tonicImg from "@/assets/schweppes_tonic_1782666052489.png";
import frappuccinoImg from "@/assets/frappuccino_1782666067199.png";

// Unsplash high-quality image constants (extremely accurate names & bright light-background style)
import menuAffogato from "@/assets/menu-affogato.jpg";
const brightCafeGlace = "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop";
const brightCocktail = "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop";
import menuCitronnade from "@/assets/menu-citronnade.jpg";
const brightCitronnadeAmandes = "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop";
const brightJusOrange = "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800&auto=format&fit=crop";
import menuJusFraise from "@/assets/menu-jus-fraise.jpg";
import menuJusBanane from "@/assets/menu-jus-banane.jpg";
import menuJusKiwi from "@/assets/menu-jus-kiwi-hd.jpg";
const brightPinaColada = "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop";
import menuLaitPoule from "@/assets/menu-lait-de-poule-hd.jpg";
import smoothieTonic from "@/assets/smoothies_tonic.png";
import smoothieBb from "@/assets/smoothies_bb.png";

type Item = {
  id: string; name: string; desc: string; price: number;
  category: "Boissons Chaudes" | "Boissons Froides" | "Pâtisseries" | "Nespresso";
  img: string;
};

const items: Item[] = [
  { id: "18", name: "Chocolat Chaud + Chantilly", desc: "Onctueux chocolat chaud servi avec une généreuse crème chantilly.", price: 9.0, category: "Boissons Chaudes", img: chocolatChantillyImg },
  { id: "16", name: "Nescafé", desc: "Café instantané crémeux et réconfortant dans son verre.", price: 5.0, category: "Boissons Chaudes", img: brightNescafe },
  { id: "17", name: "Macchiato", desc: "Espresso intense surmonté d'une touche de mousse de lait.", price: 3.5, category: "Boissons Chaudes", img: brightMacchiato },
  { id: "5", name: "Croissant au Beurre", desc: "Feuilleté 36 heures. Se brise à la première bouchée.", price: 4.0, category: "Pâtisseries", img: croissant },
  { id: "7", name: "Express", desc: "Un shot d'espresso riche et intense.", price: 3.0, category: "Boissons Chaudes", img: brightExpress },
  { id: "8", name: "Américain", desc: "Espresso allongé avec de l'eau chaude.", price: 3.5, category: "Boissons Chaudes", img: brightAmericain },
  { id: "9", name: "Direct", desc: "Café filtre noir, pur et réconfortant.", price: 4.0, category: "Boissons Chaudes", img: brightDirect },
  { id: "10", name: "Cappucin", desc: "Petit cappuccino, un équilibre parfait.", price: 3.5, category: "Boissons Chaudes", img: brightCappucin },
  { id: "11", name: "Cappucino", desc: "Grand cappuccino avec art latte.", price: 7.0, category: "Boissons Chaudes", img: brightCappucino },
  { id: "12", name: "Chocolat au Lait", desc: "Chocolat chaud onctueux et riche.", price: 5.0, category: "Boissons Chaudes", img: brightChocolat },
  { id: "19", name: "Thé à la Menthe", desc: "Thé vert traditionnel parfumé aux feuilles de menthe fraîche.", price: 3.0, category: "Boissons Chaudes", img: brightMenthe },
  { id: "20", name: "Thé aux Amandes", desc: "Thé chaud ambré garni d'amandes croquantes.", price: 7.0, category: "Boissons Chaudes", img: brightAmande },
  { id: "21", name: "Thé aux Pignons", desc: "Thé traditionnel tunisien généreusement servi avec des pignons de pin.", price: 10.0, category: "Boissons Chaudes", img: brightPignons },
  { id: "22", name: "Thé Infusions", desc: "Sélection d'herbes naturelles et verveine apaisante.", price: 3.5, category: "Boissons Chaudes", img: brightInfusion },
  
  // Nespresso
  { id: "14", name: "Nespresso Américain", desc: "Café américain long préparé avec capsule Nespresso.", price: 5.0, category: "Nespresso", img: brightAmericain },
  { id: "15", name: "Nespresso Direct", desc: "Café long Nespresso, doux et aromatique.", price: 6.0, category: "Nespresso", img: brightNespressoDirect },
  { id: "23", name: "Nespresso Cappucin", desc: "Boisson lactée Nespresso veloutée avec mousse délicate.", price: 5.5, category: "Nespresso", img: brightNespressoCappucin },
  
  // Boissons Froides
  { id: "24", name: "Thé Glacé", desc: "Thé glacé rafraîchissant fait maison avec une pointe de citron.", price: 5.0, category: "Boissons Froides", img: brightTheGlace },
  { id: "25", name: "Eau Minérale 0.5L", desc: "Eau minérale plate, fraîche et pure en bouteille de 50 cl.", price: 1.5, category: "Boissons Froides", img: water05Img },
  { id: "26", name: "Eau Minérale 1L", desc: "Eau minérale plate, fraîche et pure en bouteille de 1 L.", price: 3.0, category: "Boissons Froides", img: water1Img },
  { id: "27", name: "Eau Gazeuse 1L", desc: "Eau minérale naturellement gazeuse, bulles intenses, servie fraîche.", price: 5.0, category: "Boissons Froides", img: sparklingWaterImg },
  { id: "28", name: "Soda", desc: "Soda classique rafraîchissant servi bien frais avec des glaçons.", price: 4.0, category: "Boissons Froides", img: sodaImg },
  { id: "29", name: "Schweppes Tonic", desc: "Boisson gazeuse tonic fraîche aux notes d'agrumes amères.", price: 4.5, category: "Boissons Froides", img: tonicImg },
  { id: "30", name: "Frappuccino", desc: "Café frappé mixé avec de la glace et surmonté de crème fouettée.", price: 10.0, category: "Boissons Froides", img: frappuccinoImg },
  { id: "31", name: "Affogato", desc: "Une boule de glace vanille onctueuse noyée dans un espresso chaud intense.", price: 7.0, category: "Boissons Froides", img: menuAffogato },
  { id: "32", name: "Café Glacé", desc: "Café glacé rafraîchissant servi sur un lit de glaçons.", price: 6.0, category: "Boissons Froides", img: brightCafeGlace },
  { id: "33", name: "Cocktail", desc: "Cocktail de fruits frais pressés, saveurs exotiques et estivales.", price: 13.0, category: "Boissons Froides", img: brightCocktail },
  { id: "34", name: "Citronnade", desc: "Citronnade tunisienne traditionnelle fraîchement pressée, acidulée et sucrée.", price: 6.0, category: "Boissons Froides", img: menuCitronnade },
  { id: "35", name: "Citronnade aux Amandes", desc: "Notre citronnade tunisienne parfumée, enrichie d'amandes finement concassées.", price: 8.0, category: "Boissons Froides", img: brightCitronnadeAmandes },
  { id: "36", name: "Jus d'Orange", desc: "Jus d'orange 100% pur et frais, pressé à la minute.", price: 6.0, category: "Boissons Froides", img: brightJusOrange },
  { id: "37", name: "Jus de Fraise", desc: "Jus de fraises fraîches de saison, doux, onctueux et fruité.", price: 7.0, category: "Boissons Froides", img: menuJusFraise },
  { id: "38", name: "Jus de Banane", desc: "Jus ou smoothie de banane crémeux et naturellement sucré.", price: 7.0, category: "Boissons Froides", img: menuJusBanane },
  { id: "39", name: "Jus de Kiwi", desc: "Jus de kiwi frais, riche en vitamines, note légèrement acidulée.", price: 10.0, category: "Boissons Froides", img: menuJusKiwi },
  { id: "40", name: "Piña Colada", desc: "Boisson crémeuse et tropicale à base d'ananas frais et de noix de coco.", price: 7.0, category: "Boissons Froides", img: brightPinaColada },
  { id: "41", name: "Lait de Poule", desc: "Boisson traditionnelle onctueuse, œuf, lait et douces épices.", price: 9.0, category: "Boissons Froides", img: menuLaitPoule },
  { id: "42", name: "Smoothie Tonic", desc: "Yaourt glacé, banane, mangue et ananas — un mélange frais et onctueux.", price: 10.0, category: "Boissons Froides", img: smoothieTonic },
  { id: "43", name: "Smoothie Blue Berry", desc: "Yaourt glacé, banane et fruits rouges — un délice fruité et crémeux.", price: 10.0, category: "Boissons Froides", img: smoothieBb }
];

const categories = ["Toutes", "Boissons Chaudes", "Boissons Froides", "Pâtisseries", "Nespresso"] as const;

export default function Menu() {
  const [active, setActive] = useState<(typeof categories)[number]>("Toutes");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => {
      if (active !== "Toutes") {
        return [...items.filter((i) => i.category === active)].sort((a, b) => b.price - a.price);
      }

      const groups: Record<string, Item[]> = {};
      for (const cat of ["Boissons Chaudes", "Boissons Froides", "Pâtisseries", "Nespresso"]) {
        groups[cat] = items.filter((i) => i.category === cat).sort((a, b) => b.price - a.price);
      }

      const result: Item[] = [];
      let taken = true;
      while (taken) {
        taken = false;
        for (const cat of ["Boissons Chaudes", "Boissons Froides", "Pâtisseries", "Nespresso"]) {
          const next = groups[cat].shift();
          if (next) {
            result.push(next);
            taken = true;
          }
        }
      }
      return result;
    },
    [active]
  );

  const visibleItems = useMemo(
    () => (showAll ? filtered : filtered.slice(0, 9)),
    [filtered, showAll]
  );

  const handleCategoryChange = (cat: (typeof categories)[number]) => {
    setActive(cat);
    setShowAll(false);
  };

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Top fading gradient divider */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase text-accent tracking-[0.3em] text-xs font-semibold"
          >
            Le Menu
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 font-display text-4xl sm:text-5xl font-bold"
          >
            Préparé frais, <span className="italic text-accent">toute la journée</span>.
          </motion.h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <div className="inline-flex items-center gap-1 p-1 bg-secondary/60 rounded-full border border-border/50 flex-wrap justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => handleCategoryChange(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
                  active === c
                    ? "bg-foreground text-background shadow-sm"
                    : "text-foreground/80 hover:bg-background/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>


        <motion.div layout className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, i) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-warm flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                    <span className="font-display text-lg text-accent font-semibold whitespace-nowrap">
                      {item.price.toFixed(2)} DT
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length > 9 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-all shadow-sm cursor-pointer"
            >
              {showAll ? "Voir Moins" : "Voir Plus d'Articles"}
            </button>
          </div>
        )}
      </div>
      {/* Bottom fading gradient divider */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}