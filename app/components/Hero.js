import Image from "next/image";
import FormTabs from "./Form";

export default function Hero() {
  return (
    <div className="relative bg-[url('/Images/bg.jpg')] bg-cover bg-center w-screen h-fit py-5 lg:py-0 lg:h-dvh overflow-x-hidden mt-20 font-Helvetica">
      <div className="w-full h-full px-5 lg:px-20">
        {/* Illustrations */}
        <Image
          src="/Images/illustration1.png"
          height={500}
          width={500}
          alt="illustration"
          className="absolute left-[50%] -translate-x-[50%] top-[40px] md:top-[60px] lg:left-[530px] lg:translate-x-0 w-40 md:w-60 md:h-60 hidden landscape:block"
        />

        {/* Content Grid */}
        <div className="grid w-full h-full grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="col-span-1 w-full h-full flex flex-col justify-center gap-4 text-darkGreen text-center lg:text-left z-10 px-4 lg:px-0">
            <h1 className="text-2xl md:text-3xl">
              Leading Currency Exchange in India
            </h1>
            <h2 className="font-inter font-semibold text-[2.2rem] md:text-[2.5rem] lg:text-[2.8rem] leading-[3rem] md:leading-[3.2rem] lg:leading-[3.4rem]">
              Your Trusted Partner
              <br />
              for Hassle-Free
              <br />
              Transactions
            </h2>
            <p className="text-sm md:text-lg lg:text-xl font-inter font-extralight mt-2">
              Direct Connections, Maximum Savings: Experience the Best Currency
              Exchange Rates at our Nearest Branch
            </p>
            {/* Info Boxes */}
            <div className="flex flex-col sm:flex-row bg-darkGreen/10 backdrop-blur-xl border-darkGreen/20 border-2 px-6 md:px-8 lg:px-14 py-5 gap-5 mt-8 items-center justify-around rounded-xl">
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-2xl md:text-3xl">28 Years</h4>
                <p className="text-xs md:text-sm lg:text-base font-inter">
                  of forex expertise
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-2xl md:text-3xl">
                  20<span className="font-sans">+</span>
                </h4>
                <p className="text-xs md:text-sm lg:text-base font-inter">
                  Branches across India
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-2xl md:text-3xl">Pan India</h4>
                <p className="text-xs md:text-sm lg:text-base font-inter">
                  Customer Served
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-1 w-full h-full flex items-center justify-center lg:justify-end relative px-4 lg:px-0">
            <Image
              src="/Images/airplane.png"
              height={500}
              width={500}
              alt="illustration"
              className="absolute hidden md:block -right-12 top-10 z-10 "
            />
            <Image
              src="/Images/airplane.png"
              height={500}
              width={500}
              alt="illustration"
              className="absolute hidden md:block bottom-16 md:bottom-32 right-28 md:right-72"
            />
            <FormTabs />
          </div>
        </div>
      </div>
    </div>
  );
}
