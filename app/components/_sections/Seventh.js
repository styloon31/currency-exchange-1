import { CircleUser } from "lucide-react";
import CForm from "../CForm";

export default function Seventh() {
  return (
    <section className="h-dvh w-screen overflow-x-hidden relative bg-[url('/Images/bgHero.jpg')] bg-cover bg-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full px-6 md:px-20">
        {/* Left Content */}
        <div className="col-span-1 w-full h-full flex flex-col text-darkBlue justify-center gap-6 sm:gap-8 py-8">
          <div className="mt-5 flex items-center text-darkBlue gap-2 border-2 border-darkBlue/40 backdrop-blur-xl w-fit p-2 rounded-3xl font-Helvetica">
            <CircleUser className="w-5 h-5" /> Contact Us
          </div>
          <h1 className="font-Helvetica text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-wide">
            Talk to forex experts
          </h1>
          <p className="font-inter text-sm sm:text-base md:text-lg lg:text-xl text-darkBlue">
            Our forex experts can help you with all your currency requirements
            and queries.
          </p>
        </div>

        {/* Right Content */}
        <div className="col-span-1 w-full h-full flex items-center justify-center">
          <CForm />
        </div>
      </div>
    </section>
  );
}
