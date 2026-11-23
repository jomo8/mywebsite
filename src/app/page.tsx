import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FloatingMenu from "@/components/FloatingMenu";
import Works from "@/components/Works";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <div className="flow-root snap-start">
          <Hero />
        </div>
        <FloatingMenu />
        <div className="relative z-10">
          <Works />
          <About />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
