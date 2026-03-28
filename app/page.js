import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PanelSIP from "@/components/PanelSIP";
import QuienesSomos from "@/components/QuienesSomos";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Modulos from "@/components/Modulos";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuienesSomos />
      <PanelSIP />
      <Services />
      <Projects />
      <Modulos />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
