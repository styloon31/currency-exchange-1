"use client";

import Image from "next/image";
import { delay, motion } from "framer-motion";

export default function Section3() {
  // Animation variants for text and image
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      delay: 1.5,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      delay: 1.5,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="flex w-screen h-fit md:h-dvh bg-[url('/Images/bgHero.jpg')] bg-cover bg-center flex-col-reverse  md:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-white">
      {/* Image */}
      <motion.div
        className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariant}
      >
        <Image
          src="/Images/about/banking.jpg"
          alt="Reserve Bank of India Seal"
          width={500}
          height={500}
          className="rounded-lg shadow-md shadow-black/30"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="md:w-1/2 space-y-4 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
      >
        <h1 className="text-2xl md:text-5xl font-medium text-gray-900 leading-tight font-Helvetica">
          Banking on Trust,
          <br />
          <span className="text-gray-500">Strategic Collaborations</span>
        </h1>
        <p className="text-gray-600 text-sm md:text-xl leading-relaxed font-Helvetica">
          7Janpath Forex stands tall as a trusted partner to distinguished financial
          institutions, including Axis Bank, ICICI Bank, Kotak Mahindra Bank,
          Punjab National Bank, HDFC Bank, IndusInd Bank, State Bank of India,
          Yes Bank, and SBM Bank India. These strategic alliances empower us to
          effectively cater to outward remittances and referral transactions,
          solidifying our position as a preferred choice for comprehensive
          financial services. Join us at 7Janpath Forex, where expertise intertwines with
          innovation, and each transaction resonates with trust. Experience a
          world of seamless currency exchange and money transfer solutions,
          meticulously crafted to empower you in your financial journey.
        </p>
      </motion.div>
    </section>
  );
}
