import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Shipped from "@/components/sections/Shipped";
import HowBuilt from "@/components/sections/HowBuilt";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="content" tabIndex={-1} className="outline-none">
        <Hero />
        <Shipped />
        <HowBuilt />
        <Contact />
      </main>
    </>
  );
}
