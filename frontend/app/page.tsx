import { AppShell } from "@/components/layout/app-shell";
import { Hero } from "@/components/sections/hero";
import { StackMarquee } from "@/components/sections/marquee";
import { Products } from "@/components/sections/products";
import { Capabilities } from "@/components/sections/capabilities";
import { Stats } from "@/components/sections/stats";
import { Stack } from "@/components/sections/stack";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <AppShell>
      <Hero />
      <StackMarquee />
      <Products />
      <Capabilities />
      <Stats />
      <Stack />
      <Faq />
      <Contact />
      <Footer />
    </AppShell>
  );
}
