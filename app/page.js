import Image from "next/image";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";
import Seventh from "./components/Seventh";
import Customers from "./components/Customers"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <div className="sticky top-0 z-10">
        <Hero />
      </div>
      <div className="relative z-20">
        <Sixth />
      </div>
      <div className="relative">
        <Fifth />
      </div>
      <Fourth />
      <Third />
      <Customers />
      <Seventh />
      <Footer />
    </main>
  );
}
