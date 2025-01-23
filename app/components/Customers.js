import Image from "next/image";

export default function Customers() {
  return (
    <section className="w-screen h-[100vh] md:h-[90vh] overflow-hidden relative">
      <Image
        src="/Images/bgcity.jpg"
        height={5000}
        width={5000}
        alt="new"
        className="w-full object-cover h-[60vh] md:h-[80vh] absolute -bottom-[20%] md:-bottom-[35%] -z-10"
      />
      <div className="w-full h-full px-6 md:px-20 flex flex-col pt-10 md:pt-16 items-center z-10">
        <h1 className="text-lg md:text-2xl text-darkGreen font-bold font-Helvetica text-center">
          The Largest Online Foreign Exchange Marketplace in Delhi - 7Janpath
          Forex
        </h1>
        <div className="grid w-full h-auto md:h-[50vh] grid-cols-1 md:grid-cols-3 gap-5 mt-6 md:mt-4">
          {/* First Card */}
          <div className="col-span-1 w-full h-full flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center w-28 h-28 md:w-40 md:h-40 bg-darkGreen rounded-full border-white border-2 shadow-xl shadow-black/40">
              <Image
                src="/Images/cicon1.png"
                width={500}
                height={500}
                alt="1"
                className="w-20 h-20 md:w-28 md:h-28"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-3 md:mt-5 gap-1">
              <h2 className="text-lg md:text-2xl font-bold font-Helvetica text-darkGreen">
                USD 1.2 Billions
              </h2>
              <p className="text-xs md:text-sm font-bold">Exchanged so far</p>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-span-1 w-full h-full flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center w-28 h-28 md:w-40 md:h-40 bg-darkGreen rounded-full border-white border-2 shadow-xl shadow-black/40">
              <Image
                src="/Images/cicon2.png"
                width={500}
                height={500}
                alt="2"
                className="w-20 h-20 md:w-28 md:h-28"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-3 md:mt-5 gap-1">
              <h2 className="text-lg md:text-2xl font-bold font-Helvetica text-darkGreen">
                8,50,000+
              </h2>
              <p className="text-xs md:text-sm font-bold">Happy Customers</p>
            </div>
          </div>

          {/* Third Card */}
          <div className="col-span-1 w-full h-full flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center w-28 h-28 md:w-40 md:h-40 bg-darkGreen rounded-full border-white border-2 shadow-xl shadow-black/40">
              <Image
                src="/Images/cicon3.png"
                width={500}
                height={500}
                alt="3"
                className="w-20 h-20 md:w-28 md:h-28"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-3 md:mt-5 gap-1">
              <h2 className="text-lg md:text-2xl font-bold font-Helvetica text-darkGreen">
                30+
              </h2>
              <p className="text-xs md:text-sm font-bold">
                Banks and Money Exchangers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
