import { createFileRoute } from "@tanstack/react-router";
import CoffeeSite from "@/components/coffee/CoffeeSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WHY NOT NOW ? — Café Artisanal, L'Art dans Chaque Tasse" },
      { name: "description", content: "Café artisanal premium, torréfié à la main tous les jours. Découvrez notre menu saisonnier chez WHY NOT NOW ?." },
      { property: "og:title", content: "WHY NOT NOW ? — Café Artisanal" },
      { property: "og:description", content: "Torréfié à la main, infusé lentement, fait avec amour. Rendez-nous visite aujourd'hui." },
    ],
  }),
  component: Index,
});

function Index() {
  return <CoffeeSite />;
}
