import { AppShell } from "@/components/layout/app-shell";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Products } from "@/components/sections/products";
import { Capabilities } from "@/components/sections/capabilities";
import { Stats } from "@/components/sections/stats";
import { Blog } from "@/components/sections/blog";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <AppShell>
      <Hero />
      <About />
      <Products />
      <Capabilities />
      <Stats />
      <Blog />
      <Faq />
      <Contact />
      <Footer />
    </AppShell>
  );
}