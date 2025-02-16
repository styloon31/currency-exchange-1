"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Section2() {
  // Controls for animations
  const headingControls = useAnimation();
  const paragraphControls = useAnimation();

  // Ref and inView hook for the section
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is in the viewport
  });

  // Trigger animations when the section is in view
  useEffect(() => {
    if (inView) {
      headingControls.start({ opacity: 1, y: 0 });
      paragraphControls.start({ opacity: 1, y: 0 });
    }
  }, [inView, headingControls, paragraphControls]);

  return (
    <section
      ref={ref}
      className="w-screen h-auto md:h-[40dvh] bg-[url('/Images/bgHero.jpg')] bg-cover bg-bottom overflow-x-hidden relative py-10"
    >
      <div className="w-full h-full px-6 md:px-20 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-10">
          {/* Heading */}
          <motion.div
            className="col-span-1 flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={headingControls} // Triggered animation
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-Helvetica text-darkBlue font-bold text-center md:text-left">
              A Legacy of Trust
            </h1>
          </motion.div>

          {/* Paragraph */}
          <motion.div
            className="col-span-1 flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={paragraphControls} // Triggered animation
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <p className="font-inter text-base sm:text-lg text-center md:text-left leading-relaxed">
              Embark on a journey with 7Janpath Forex, an online initiative
              crafted by the esteemed Supreme Securities Limited, a pioneering
              figure in the currency exchange and money transfer industry of
              India, with a legacy spanning over 23 years.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
