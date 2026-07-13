import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setVal(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="aspect-[4/5] overflow-hidden rounded-lg shadow-warm row-span-2"
          >
            <img src={about1} alt="Barista pouring latte art" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.4s]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square overflow-hidden rounded-lg shadow-warm mt-12"
          >
            <img src={about2} alt="Freshly roasted beans" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.4s]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="aspect-square rounded-lg bg-accent text-accent-foreground p-6 flex flex-col justify-center"
          >
            <p className="font-display text-4xl font-bold">Lent.</p>
            <p className="font-display text-4xl font-bold italic opacity-85">Soigneux.</p>
            <p className="font-display text-4xl font-bold">Incomparable.</p>
          </motion.div>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="uppercase text-accent tracking-[0.3em] text-xs font-semibold"
          >
            Notre Histoire
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight"
          >
            Une décennie de <span className="italic text-accent">petits lots</span> et de grands matins.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-muted-foreground leading-relaxed"
          >
            Nous sourçons des grains d'origine unique de fermes que nous connaissons par leur nom, les torréfions en petits lots de trois kilos chaque matin, et les servons dans des tasses que nos habitués connaissent par cœur. Aucun raccourci, pas d'artifices sirupeux — juste du café, fait avec soin.
          </motion.p>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { v: 10, s: "+", l: "Années d'expérience" },
              { v: 50, s: "+", l: "Variétés de café" },
              { v: 10000, s: "+", l: "Clients satisfaits" },
            ].map((stat, i) => (
              <motion.div
                key={stat.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <p className="font-display text-3xl sm:text-4xl font-bold text-accent">
                  <Counter to={stat.v} suffix={stat.s} />
                </p>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">{stat.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}