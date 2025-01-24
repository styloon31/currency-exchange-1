import Image from "next/image";
import Btn from "../Btn";
import { Split } from "lucide-react";

export default function Fourth() {
  return (
    <section className="w-screen h-auto md:h-fit md:h-[110dvh] overflow-hidden relative px-5 md:px-20 py-10">
      {/* Process Badge */}
      <div className="mt-5 flex items-center gap-2 border-2 border-darkBlue w-fit p-2 rounded-3xl font-Helvetica">
        <Split className="w-5 h-5" /> Our process
      </div>

      {/* Title and Button */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-10 gap-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-inter text-center md:text-left">
          How it Works
        </h1>
        <Btn
          title="Talk to Forex Expert"
          containerClass="bg-gradient-to-r from-[#FC8E06] to-[#FEBC3E] text-white px-5 py-3 text-lg"
        />
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-auto gap-12 mt-10">
        {/* Step 1 */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Image
            src="/Images/h1.png"
            height={500}
            width={500}
            alt="h1"
            className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 object-contain"
          />
          <div className="flex items-center justify-start gap-4 mt-4">
            <div className="font-inter w-fit h-fit text-sm md:text-xl rounded-full justify-start text-white bg-darkBlue px-3 md:px-4 py-2">
              1
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-Helvetica   text-center md:text-left">
              Select Product and Currency
            </h2>
          </div>
          <p className="text-sm md:text-base lg:text-lg font-inter text-gray-700 text-center md:text-left">
            Select the delivery city, currency type and amount you need.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Image
            src="/Images/h2.png"
            height={500}
            width={500}
            alt="h2"
            className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 object-contain"
          />
          <div className="flex items-center gap-4 mt-4">
            <div className="font-inter w-fit h-fit text-sm md:text-xl rounded-full justify-start text-white bg-darkBlue px-3 md:px-4 py-2">
              2
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-Helvetica text-center md:text-left">
              Request Callback
            </h2>
          </div>
          <p className="text-sm md:text-base lg:text-lg font-inter text-gray-700 text-center md:text-left">
            Our forex expert will provide the best rates and instant support for your requirements.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Image
            src="/Images/h3.png"
            height={500}
            width={500}
            alt="h3"
            className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 object-contain"
          />
          <div className="flex items-center gap-4 mt-4">
            <div className="font-inter w-fit h-fit text-sm md:text-xl rounded-full justify-start text-white bg-darkBlue px-3 md:px-4 py-2">
              3
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-Helvetica   text-center md:text-left">
              Submit Relevant Documents
            </h2>
          </div>
          <p className="text-sm md:text-base lg:text-lg font-inter text-gray-700 text-center md:text-left">
            Submit prescribed documents and verify traveller details.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Image
            src="/Images/h4.png"
            height={500}
            width={500}
            alt="h4"
            className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 object-contain"
          />
          <div className="flex items-center gap-4 mt-4">
            <div className="font-inter w-fit h-fit text-sm md:text-xl rounded-full justify-start text-white bg-darkBlue px-3 md:px-4 py-2">
              4
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-Helvetica   text-center md:text-left">
              Pickup or Get it Delivered
            </h2>
          </div>
          <p className="text-sm md:text-base lg:text-lg font-inter text-gray-700 text-center md:text-left">
            Get home delivery or pick-up from your nearest branch. Same-day service is available in many metros.
          </p>
        </div>
      </div>
    </section>
  );
}
