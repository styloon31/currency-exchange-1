import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Card({ image, alt }) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      className="relative w-[100px] h-[100px] overflow-hidden flex items-center justify-center rounded-full"
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black/50 pointer-events-none h-full w-full flex items-center justify-center text-white text-sm font-Helvetica">
              <motion.p initial={{ y: 10 }} animate={{ y: 0 }} exit={{ y: 10 }}>
                {alt}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Image
        src={image}
        alt={alt}
        height={200}
        width={200}
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
}
