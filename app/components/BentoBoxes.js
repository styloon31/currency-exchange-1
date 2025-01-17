import Image from "next/image";

export default function BentoBoxes() {
  return (
    <div className="grid grid-rows-2 grid-cols-1 w-full h-full gap-5">
      <div className="md:row-span-1 grid md:grid-cols-2 gap-5">
        <div className="bg-white/10 backdrop-blur-xl overflow-hidden relative col-span-1 border-2 border-white/20 rounded-3xl w-full h-[40dvh]">
          <Image
            src="/Images/forexcard.png"
            width={500}
            height={500}
            alt="forexcard"
            className="absolute h-[36%] md:h-full md:w-[50%] bottom-0  md:right-0 object-cover object-center"
          />
          <div className="px-5 py-8 text-white flex flex-col gap-4">
            <div className="w-12 h-12 border border-white/40 p-1 rounded-lg">
              <Image
                src="/svg/forex.svg"
                width={500}
                height={500}
                alt="svg"
                className="w-full h-full"
              />
            </div>
            <h2 className="text-3xl font-allround-medium">Forex Cards</h2>
            <p className="text-lg max-w-xs font-inter text-white/70">
              A perfect solution for all your forex needs. Travel carefree
              without worrying about running out of cash!
            </p>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-xl overflow-hidden relative col-span-1 border-2 border-white/20 rounded-3xl w-full h-[40dvh]">
          <Image
            src="/Images/moneytransfer.png"
            width={500}
            height={500}
            alt="forexcard"
            className="absolute h-[36%] md:h-full md:w-[50%] bottom-0  md:right-0 object-cover object-center"
          />
          <div className="px-5 py-8 text-white flex flex-col gap-4">
            <div className="w-12 h-12 border border-white/40 p-1 rounded-lg">
              <Image
                src="/svg/moneytransfer.svg"
                width={500}
                height={500}
                alt="svg"
                className="w-full h-full"
              />
            </div>
            <h2 className="text-3xl font-allround-medium">Money Transfer</h2>
            <p className="text-lg max-w-xs font-inter text-white/70">
              Now international remittances are easier than ever. Send money to
              your loved ones abroad with the click of a button
            </p>
          </div>
        </div>
      </div>
      <div className="md:row-span-1 grid md:grid-cols-3 gap-5">
        <div className="bg-white/10 backdrop-blur-xl overflow-hidden relative md:col-span-2 border-2 border-white/20 rounded-3xl w-full h-fit md:h-[40dvh]">
          <Image
            src="/Images/currencyexchange.png"
            width={500}
            height={500}
            alt="forexcard"
            className="absolute hidden md:block h-[36%] md:h-full md:w-[50%] bottom-0  md:right-0 object-cover object-center"
          />
          <div className="px-5 py-8 text-white flex flex-col gap-4">
            <div className="w-12 h-12 border border-white/40 p-1 rounded-lg">
              <Image
                src="/svg/currencyexchange.svg"
                width={500}
                height={500}
                alt="svg"
                className="w-full h-full"
              />
            </div>
            <h2 className="text-3xl font-allround-medium">Currency Exchange</h2>
            <p className="text-lg max-w-md font-inter text-white/70">
              Whether you are planning a trip or just returned from one,
              we&apos;re here to handle your currency needs. Get access to the
              best rates for buying and selling foreign currency, both in form
              of notes & forex card.
            </p>
          </div>
        </div>
        <div className=" bg-white/10 backdrop-blur-xl overflow-hidden relative col-span-1 border-2 border-white/20 rounded-3xl w-full h-auto md:h-[40dvh]">
          <div className="px-7 py-8 text-white flex flex-col gap-4">
            <div className="w-12 h-12 border border-white/40 p-1 rounded-lg">
              <Image
                src="/svg/learn.svg"
                width={500}
                height={500}
                alt="svg"
                className="w-full h-full"
              />
            </div>
            <h2 className="text-3xl font-allround-medium">Learn more about our products for your needs</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
