"use client";

import { useEffect, useState } from "react";
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
import WhatsappButton from "./components/WhatsappButton";
import PopupModal from "./components/PopupModal"; // Import PopupModal
import Lenis from "lenis";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <div className="sticky top-0 z-10">
        <Hero />
        <Sixth />
      </div>
      <div className="relative">
        <Fifth />
      </div>
      <Fourth />
      <Third />
      <Customers />
      <Seventh />
      <WhatsappButton />
      <Footer />

      {/* Popup Modal */}
      <PopupModal isOpen={showPopup}/>
    </main>
  );
}
