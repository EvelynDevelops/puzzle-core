import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhoItsFor from "@/components/WhoItsFor";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import Coach from "@/components/Coach";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <WhoItsFor />
        <Philosophy />
        <Testimonials />
        <Coach />
        <FinalCTA />
      </main>
    </>
  );
}
