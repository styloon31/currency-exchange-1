import { Copyright, DotIcon, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-screen h-fit overflow-x-hidden relative bg-black text-white">
      <div className="px-6 md:px-20 pt-10 pb-4">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 w-full h-full ">
          {/* Resources Section */}
          <div className="col-span-1 w-full h-full gap-4 flex flex-col">
            <h2 className="font-Helvetica font-bold text-gray-400 text-lg md:text-xl">
              Resources
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-base md:text-lg font-Helvetica">FAQs</p>
              <p className="text-base md:text-lg font-Helvetica">Blog</p>
            </div>
          </div>

          {/* Pages Section */}
          <div className="col-span-1 w-full h-full gap-4 flex flex-col">
            <h2 className="font-Helvetica font-bold text-gray-400 text-lg md:text-xl">
              Pages
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-base md:text-lg font-Helvetica">About Us</p>
              <p className="text-base md:text-lg font-Helvetica">Contact</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-span-1 md:col-span-2 w-full h-full gap-4 flex flex-col items-start md:items-end">
            <h2 className="font-Helvetica font-bold text-gray-400 text-lg md:text-xl">
              Have A Question?
            </h2>
            <div className="flex flex-col gap-2 items-start md:items-end">
              <p className="text-base md:text-lg font-inter">+91- 8882382276</p>
              <p className="text-base md:text-lg font-inter">
                info@7janpathforex.com
              </p>
              <div className="flex gap-4 mt-2">
                <Link href="instagram.com/7janpath-forex"><Instagram className="w-5 h-5" /></Link>
                <Twitter className="w-5 h-5" />
                <Link href="https://www.linkedin.com/company/7janpathforex/"><Linkedin className="w-5 h-5" /></Link>
                <Facebook className="w-5 h-5" />
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-14">
          <h1 className="font-Helvetica text-gray-400 text-lg">
            Fast Nationwide Forex Delivery
          </h1>
          <p className=" font-inter mt-2">
            Forex Rates in Ahmedabad | Best Forex Rates in Ambala | Best Forex
            Rates in Amritsar |Best Forex Rates in Bangalore | Best Forex Rates
            in Chandigarh | Best Forex Rates in Chennai | Forex Rates in Delhi
            |Best Forex Rates in Gorakhpur | Best Forex Rates in Gurdaspur |Best
            Forex Rates in Gurugram | Best Forex Rates in Hoshiarpur | Best
            Forex Rates in Hyderabad |Best Forex Rates in Jaipur | Best Forex
            Rates in Jalandhar | Best Forex Rates in Kanpur |Best Forex Rates in
            Karnal | Best Forex Rates in Kolkata | Best Forex Rates in Lucknow |
            Best Forex Rates in Ludhiana | Best Forex Rates in Moga |Best Forex
            Rates in Mumbai |Best Forex Rates in Nawanshahar | Best Forex Rates
            in New Delhi | Best Forex Rates in Noida | Best Forex Rates in
            Pathankot | Best Forex Rates in Patiala | Best Forex Rates in
            Phagwara | Best Forex Rates in Tanda
          </p>
        </div>
        <div className="w-full mt-14">
          <h1 className="font-Helvetica text-gray-400 text-lg">
            Best Currency Exchange Rates
          </h1>
          <p className=" font-inter mt-2">
            AED Exchange Rate | AUD Exchange Rate | CAD Exchange Rate | CHF
            Exchange Rate | CNY Exchange Rate | DKK Exchange Rate | EUR Exchange
            Rate | GBP Exchange Rate | HKD Exchange Rate | JPY Exchange Rate |
            MYR Exchange Rate | NOK Exchange Rate | NZD Exchange Rate | SAR
            Exchange Rate | SEK Exchange Rate | SGD Exchange Rate | THB Exchange
            Rate | USD Exchange Rate | ZAR Exchange Rate
          </p>
        </div>
        <div className="w-full flex-col md:flex-row flex items-center justify-center border-t-2 border-gray-400 mt-14 pt-4">
            <p>Privacy</p>
            <DotIcon />
            <p>Terms of Use</p>
            <DotIcon />
            <p className="flex items-center justify-center gap-2"> <Copyright />2025 7Janpath Forex</p>
        </div>  
      </div>
    </footer>
  );
}
