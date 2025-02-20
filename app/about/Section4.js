"use client";

import Image from "next/image";
import { delay, motion } from "framer-motion";

export default function Section3() {
  // Animation variants for text and image
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      delay:1.5,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      delay:1.5,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="flex w-screen h-fit md:h-dvh flex-col-reverse md:flex-row items-center bg-[url('/Images/bgHero.jpg')] bg-cover bg-center justify-between px-6 lg:px-20 py-16 bg-white">
      {/* Image */}
      <motion.div
        className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariant}
      >
        <Image
          src="/Images/about/regulatoryexcellence.jpg"
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
          Regulatory Excellence,
          <br />
          <span className="text-gray-500">Upholding Standards</span>
        </h1>
        <p className="text-gray-600 text-sm md:text-xl leading-relaxed font-Helvetica">
          7Janpath forex operates under the prestigious AD-II License issued by the Reserve
          Bank of India, ensuring absolute adherence to the FEMA Act and
          maintaining the highest levels of regulatory compliance. Further, we
          have been authorized by the Reserve Bank of India to provide Inward
          Money Transfer Services, broadening our financial services to meet
          the diverse needs of our valued clientele.
        </p>
      </motion.div>
    </section>
  );
}
