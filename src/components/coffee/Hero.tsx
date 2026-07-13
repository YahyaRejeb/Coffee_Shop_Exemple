import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-coffee.jpg";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src={heroImg} alt="" className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />
      </motion.div>

      {/* steam wisps */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 z-10 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute block w-1.5 h-16 rounded-full bg-white/20 blur-sm animate-steam"
            style={{ left: `${(i - 1) * 14}px`, animationDelay: `${i * 0.8}s` }}
          />
        ))}
      </div>

      <motion.div style={{ opacity }} className="relative z-20 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white/80 uppercase tracking-[0.4em] text-xs sm:text-sm font-medium mb-6"
        >
          Café Royal
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight"
        >
          L'Art dans <span className="italic opacity-90">Chaque</span> Tasse
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 text-base sm:text-lg text-white/80 max-w-xl mx-auto font-light"
        >
          Grains torréfiés à la main, extraction lente, et une atmosphère qui rappelle un dimanche matin.
          Bienvenue dans votre nouveau coin préféré.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 rounded-full px-10 h-12 font-medium shadow-warm border-none"
          >
            <a href="#menu">Voir le Menu</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white"
        aria-label="Scroll down"
      >
        <ChevronDown className="size-7" />
      </motion.a>
    </section>
  );
}