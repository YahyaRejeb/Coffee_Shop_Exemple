import { Toaster } from "sonner";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import Locations from "./Locations";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Nav from "./Nav";

export default function CoffeeSite() {
  return (
    <main className="font-sans bg-background text-foreground overflow-x-hidden">
      <Toaster position="bottom-right" richColors />
      <Nav />
      <Hero />
      <About />
      <Menu />
      <Locations />
      <Testimonials />
      <Footer />
    </main>
  );
}