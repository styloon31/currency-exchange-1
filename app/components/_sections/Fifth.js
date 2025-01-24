import BentoBoxes from "../BentoBoxes";

export default function Fifth() {
  return (
    <section className="w-screen h-auto overflow-x-hidden relative bg-darkBlue py-10">
      <div className="w-full h-full px-5 md:px-20">
        {/* Title */}
        <h1 className="text-white font-helvetica font-bold text-4xl md:text-5xl lg:text-6xl text-center">
          Our Products
        </h1>

        {/* Subtitle */}
        <p className="font-inter text-center text-base md:text-lg lg:text-xl mt-4 text-white">
          With our cutting-edge technology and a team of dedicated experts,
          we're<br className="hidden md:inline" /> here to help you make the most of your international financial
          transactions.
        </p>

        {/* Content */}
        <div className="w-full pt-10">
          <BentoBoxes />
        </div>
      </div>
    </section>
  );
}
