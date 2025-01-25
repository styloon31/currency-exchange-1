import Third from "../components/_sections/Third";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactSection from "./ContactSection";

export default function contact() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <ContactSection />
      <Third />
      <Footer />
    </main>
  );
}
