import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-screen h-fit overflow-x-hidden relative bg-black text-white">
      <div className="px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8 w-full h-full py-10">
        {/* Resources Section */}
        <div className="col-span-1 w-full h-full gap-4 flex flex-col">
          <h2 className="font-allround-bold text-gray-400 text-lg md:text-xl">
            Resources
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-base md:text-lg font-Helvetica">FAQs</p>
            <p className="text-base md:text-lg font-Helvetica">Blog</p>
          </div>
        </div>

        {/* Pages Section */}
        <div className="col-span-1 w-full h-full gap-4 flex flex-col">
          <h2 className="font-allround-bold text-gray-400 text-lg md:text-xl">
            Pages
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-base md:text-lg font-Helvetica">About Us</p>
            <p className="text-base md:text-lg font-Helvetica">Contact</p>
            <p className="text-base md:text-lg font-Helvetica">Our Services</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="col-span-1 md:col-span-2 w-full h-full gap-4 flex flex-col items-start md:items-end">
          <h2 className="font-allround-bold text-gray-400 text-lg md:text-xl">
            Have A Question?
          </h2>
          <div className="flex flex-col gap-2 items-start md:items-end">
            <p className="text-base md:text-lg font-Helvetica">+91- 8447532226</p>
            <p className="text-base md:text-lg font-Helvetica">info@7janpathforex.com</p>
            <div className="flex gap-4 mt-2">
              <Instagram className="w-5 h-5" />
              <Twitter className="w-5 h-5" />
              <Linkedin className="w-5 h-5" />
              <Facebook className="w-5 h-5" />
              <Youtube className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
