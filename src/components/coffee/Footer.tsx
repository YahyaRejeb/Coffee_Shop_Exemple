import { Coffee, Instagram, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2">
              <Coffee className="size-6 text-accent" />
              <span className="font-display text-xl font-bold">WHY NOT NOW <span className="text-gold">?</span></span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Maison de café d'exception, où chaque tasse est une expérience royale.
            </p>
          </div>

          <div className="md:text-right">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Suivez-nous</h4>
            <div className="mt-3 flex gap-3 md:justify-end">
              <a
                href="https://www.instagram.com/cafewhynotnow/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="size-10 grid place-items-center rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://www.facebook.com/cafewhynotnow/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="size-10 grid place-items-center rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="size-4" />
              </a>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground hover:text-accent"
            >
              Haut de page <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-wrap justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} WHY NOT NOW ?. Tous droits réservés.</p>
          <p>Infusé avec amour · Servi avec patience.</p>
        </div>
      </div>
    </footer>
  );
}