import FormTabs from "./Form";

export default function Hero() {
  return (
    <div className="relative bg-blue-500 bg-cover bg-no-repeat w-screen h-fit py-5 md:py-0 md:h-dvh overflow-x-hidden mt-20 font-Helvetica">
      <div className="w-full h-full px-5 md:px-20">
        <div className="grid w-full h-full grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="col-span-1 w-full h-full flex flex-col justify-center gap-4 text-white text-center md:text-left">
            <h1 className="text-white text-2xl md:text-4xl">
              Leading Currency Exchange in India
            </h1>
            <h2 className="text-white font-inter font-semibold text-3xl md:text-6xl">
              Your Trusted Partner
              <br />
              for Hassle-Free
              <br />
              Transactions
            </h2>
            <p className="text-base md:text-xl font-inter font-extralight mt-2">
              Direct Connections, Maximum Savings: Experience the Best Currency
              Exchange Rates at our Nearest Branch
            </p>
            <div className="flex flex-col md:flex-row bg-white/10 backdrop-blur-xl border-white/20 border-2 px-8 md:px-14 py-5 gap-5 mt-8 items-center justify-around rounded-xl">
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-3xl md:text-4xl">
                  28 Years
                </h4>
                <p className="text-sm md:text-base font-inter">
                  of forex expertise
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-3xl md:text-4xl">
                  20<span className="font-sans">+</span>
                </h4>
                <p className="text-sm md:text-base font-inter">
                  Branches across India
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-3xl md:text-4xl">
                  Pan India
                </h4>
                <p className="text-sm md:text-base font-inter">
                  Customer Served
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-1 w-full h-full flex items-center justify-center md:justify-end">
            <FormTabs />
          </div>
        </div>
      </div>
    </div>
  );
}
