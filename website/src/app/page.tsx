import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Studio } from "@/components/studio";
import { Work } from "@/components/work";
import { Services } from "@/components/services";
import { MarqueeBand } from "@/components/marquee-band";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Studio />
        <Work />
        <Services />
        <MarqueeBand />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
