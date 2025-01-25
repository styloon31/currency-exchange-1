"use client";

import { motion } from "framer-motion";
import InfiniteCarousel from "../components/InfiniteCarousel/InfiniteCarousel";

export default function Section1() {
  return (
    <section className="h-dvh w-screen bg-[url('/Images/bgHero.jpg')] bg-cover bg-center overflow-x-hidden relative">
      <div className="w-full h-full px-5 md:px-20 flex flex-col justify-center items-center gap-4 -mt-16">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }} // Start position
          animate={{ opacity: 1, y: 0 }} // End position
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
          className="text-xl sm:text-2xl font-Helvetica text-center"
        >
          About 7Janpath Forex
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 50 }} // Start position
          animate={{ opacity: 1, y: 0 }} // End position
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} // Animation timing with delay
          className="text-3xl sm:text-4xl md:text-6xl font-Helvetica font-medium text-center leading-tight"
        >
          Where Expertise Meets Innovation
        </motion.h1>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl font-inter max-w-lg md:max-w-3xl text-center mt-4 md:mt-8"
        >
          Since its inception in 2014, our company has been synonymous with
          unwavering expertise and a reputation that echoes trust and
          excellence.
        </motion.p>

        {/* Infinite Carousel */}
        <div className="w-full absolute bottom-0">
          <InfiniteCarousel />
        </div>
      </div>
    </section>
  );
}
