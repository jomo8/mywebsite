import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FloatingMenu from "@/components/FloatingMenu";
import Services from "@/components/Services";
import Works from "@/components/Works";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <FloatingMenu />

      <div className="relative z-[10] min-h-screen w-full overflow-x-clip">
        <Services />
        <Works />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
