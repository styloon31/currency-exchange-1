"use client";

import Image from "next/image";
import { delay, motion } from "framer-motion";

export default function Section5() {
  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      delay:1.5,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      delay:1.5,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="flex w-screen h-dvh flex-col md:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-white">
      {/* Text Content */}
      <motion.div
        className="md:w-1/2 space-y-4 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
      >
        <h1 className="text-2xl md:text-5xl font-medium text-gray-900 leading-tight font-Helvetica">
          Global Alliances,
          <br />
          <span className="text-gray-500">A World of Trust</span>
        </h1>
        <p className="text-gray-600 text-sm md:text-xl leading-relaxed font-Helvetica">
          As the Principal Agent for prominent overseas companies like
          MoneyGram, Western Union, and Continental Exchange Solutions, Inc.
          (trading as RIA Money Transfer), 7Janpath Forex proudly extends its global reach
          while nurturing strong local roots. These enduring partnerships
          exemplify our commitment to providing seamless and reliable
          international money transfer solutions to our esteemed patrons.
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariant}
      >
        <Image
          src="/Images/about/globalalliance.jpg"
          alt="globalalliance"
          width={500}
          height={500}
          className="rounded-lg shadow-md shadow-black/30"
        />
      </motion.div>
    </section>
  );
}
