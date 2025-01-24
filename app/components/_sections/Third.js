import Testimonials from "../Testimonials";

export default function Third() {
  return (
    <section className="w-screen h-auto  overflow-x-hidden relative bg-[url('/Images/bgHero.jpg')] bg-cover bg-center flex flex-col items-center justify-center py-10">
      {/* Heading Section */}
      <div className="w-full flex flex-col items-center justify-center mt-10 px-5 md:px-0">
        <h1 className="font-Helvetica font-bold text-3xl md:text-5xl lg:text-6xl text-center">
          Testimonials
        </h1>
        <p className="font-inter text-sm md:text-lg lg:text-xl text-center mt-4">
          Our clients' stories speak volumes about our service's reliability,
          <br className="hidden md:block" />
          transparency, and unwavering support.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="w-full mt-10 md:mt-20 px-5 md:px-20 lg:px-36">
        <Testimonials />
      </div>
    </section>
  );
}
