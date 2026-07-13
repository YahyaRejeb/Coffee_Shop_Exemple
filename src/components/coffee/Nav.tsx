import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Coffee, Menu as MenuIcon, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Accueil" },
  { href: "#about", label: "À Propos" },
  { href: "#menu", label: "Menu" },
  { href: "#locations", label: "Adresses" },
  { href: "#testimonials", label: "Avis" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${scrolled ? "bg-white/20 dark:bg-black/20 backdrop-blur-lg border-b border-white/10 dark:border-black/10 shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <Coffee className={`size-6 transition-colors duration-500 ${scrolled ? "text-black dark:text-white" : "text-white"}`} />
          <span className={`font-display text-xl font-bold tracking-wide transition-colors duration-500 ${scrolled ? "text-black dark:text-white" : "text-white"}`}>
            WHY NOT NOW <span className={`transition-colors duration-500 ${scrolled ? "text-black/70 dark:text-white/70" : "text-white/70"}`}>?</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link text-sm font-medium tracking-wide transition-colors duration-500 ${scrolled ? "text-black/90 hover:text-black dark:text-white/90 dark:hover:text-white" : "text-white/90 hover:text-white"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className={`transition-colors duration-500 ${scrolled ? "text-black dark:text-white" : "text-white"}`}
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
          <button
            className={`md:hidden transition-colors duration-500 ${scrolled ? "text-black dark:text-white" : "text-white"}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-black/50 backdrop-blur-lg border-t border-white/10 overflow-hidden"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white py-2 border-b border-white/20">
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}