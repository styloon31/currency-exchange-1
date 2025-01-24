import Image from "next/image";
import Hero from "./components/_sections/Hero";
import Testimonials from "./components/Testimonials";
import Third from "./components/_sections/Third";
import Fourth from "./components/_sections/Fourth";
import Fifth from "./components/_sections/Fifth";
import Sixth from "./components/_sections/Sixth";
import Seventh from "./components/_sections/Seventh";
import Customers from "./components/_sections/Customers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
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
