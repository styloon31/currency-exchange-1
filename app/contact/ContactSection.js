"use client";
import { useState } from "react";
import { Clock, MapPinHouse } from "lucide-react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_l9s26yk",
        "template_qjr445n",
        templateParams,
        "HP5OIGwzPCo7qJVbL"
      );

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent. We will contact you soon!",
        icon: "success",
        confirmButtonColor: "#FC8E06",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }

    setLoading(false);
  };

  return (
    <section className="w-screen h-fit mt-20 md:mt-0 md:h-[120dvh] bg-white px-6 md:px-20 flex items-center justify-center">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-6xl font-bold font-Helvetica text-gray-800 leading-10">
            Speak Directly to Our Expert
            <br /> Advisors
          </h2>
          <p className="text-gray-600 text-xl mt-2">
            Connect with our forex experts to fulfill your currency requirements
            and queries.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Contact Information */}
          <div className="flex flex-col gap-6">
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
                <h3 className="font-semibold text-gray-800">
                  WhatsApp or Call Us
                </h3>
                <p className="text-gray-600">+91- 8882382276</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                <Clock className="w-full h-full text-darkBlue" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Working Hours</h3>
                <p className="text-gray-600">9 AM - 8 PM, Monday to Saturday</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                <MapPinHouse className="w-12 h-12" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">HQ Address:</h3>
                <p className="text-gray-600">
                  Shop No - 7, Block A, Connaught Place, New Delhi, Delhi 110001
                </p>
                <h3 className="font-semibold text-gray-800">
                  Branch Office Address:
                </h3>
                <p className="text-gray-600">
                  Shop No.-MEZZ-007, Mezzanine Floor, Ansal Fortune Arcade, K
                  Block, Pocket E, Sector 18, Noida, Uttar Pradesh 201301
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <form
              onSubmit={sendEmail}
              className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lightOrange"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lightOrange"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lightOrange"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone number"
                className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lightOrange"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lightOrange"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FC8E06] to-[#FEBC3E] text-white py-3 rounded-lg transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Request a Callback"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
