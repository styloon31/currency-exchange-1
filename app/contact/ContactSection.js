import { Clock, MapPinHouse } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
    return (
      <section className="w-screen h-fit mt-20 md:mt-0 md:h-[120dvh] bg-white px-6 md:px-20 flex items-center justify-center">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-6xl font-bold font-Helvetica text-gray-800 leading-10">
              Speak Directly to Our Expert<br /> Advisors
            </h2>
            <p className="text-gray-600 text-xl mt-2">
              Connect with our forex experts to fulfill your currency requirements and queries.
            </p>
          </div>
  
          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Contact Information */}
            <div className="flex flex-col gap-6">
              {/* WhatsApp/Call */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                  <Image 
                    src="/Images/contact/whatsapp.png"
                    height={40}
                    width={40}
                    alt="whatsapp"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">WhatsApp or Call Us</h3>
                  <p className="text-gray-600">+91-8447532226</p>
                </div>
              </div>
  
              {/* Working Hours */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                  <Clock className="w-full h-full text-darkBlue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Working Hours</h3>
                  <p className="text-gray-600">9 AM - 8 PM, Monday to Saturday</p>
                </div>
              </div>
  
              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                  <MapPinHouse className="w-12 h-12"/>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Registered Address</h3>
                  <p className="text-gray-600">
                    Supreme Securities Limited, 3rd Floor, RD Chambers, 16/11, Arya Samaj Road, Karol
                    Bagh, New Delhi-110005 (INDIA)
                  </p>
                </div>
              </div>
            </div>
  
            {/* Right Column: Form */}
            <div>
              <form className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lightOrange"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lightOrange"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lightOrange"
                />
                <input
                  type="tel"
                  placeholder="Enter your Phone number"
                  className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lightOrange"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lightOrange"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FC8E06] to-[#FEBC3E] text-white py-3 rounded-lg transition"
                >
                  Request a Callback
                </button>
                <p className="text-sm text-gray-500 text-center">
                  Guarantee call back in 30 minutes
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }