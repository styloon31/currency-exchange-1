"use client";

import useMeasure from "react-use-measure";
import Card from "./Cards";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const flagData = [
  { src: "https://flagcdn.com/us.svg", alt: "United States" },
  { src: "https://flagcdn.com/gb.svg", alt: "United Kingdom" },
  { src: "https://flagcdn.com/ca.svg", alt: "Canada" },
  { src: "https://flagcdn.com/sg.svg", alt: "Singapore" },
  { src: "https://flagcdn.com/in.svg", alt: "India" },
  { src: "https://flagcdn.com/bh.svg", alt: "Bahrain" },
  { src: "https://flagcdn.com/ae.svg", alt: "UAE" },
  { src: "https://flagcdn.com/au.svg", alt: "Australia" },
  { src: "https://flagcdn.com/de.svg", alt: "Germany" },
  { src: "https://flagcdn.com/fr.svg", alt: "France" },
  { src: "https://flagcdn.com/jp.svg", alt: "Japan" },
  { src: "https://flagcdn.com/kr.svg", alt: "South Korea" },
  { src: "https://flagcdn.com/br.svg", alt: "Brazil" },
  { src: "https://flagcdn.com/za.svg", alt: "South Africa" },
  { src: "https://flagcdn.com/nz.svg", alt: "New Zealand" },
  { src: "https://flagcdn.com/ch.svg", alt: "Switzerland" },
  { src: "https://flagcdn.com/it.svg", alt: "Italy" },
  { src: "https://flagcdn.com/mx.svg", alt: "Mexico" },
];

export default function InfiniteCarousel() {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 14;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <main className="py-8 h-[30vh] flex items-center justify-center">
      <motion.div
        className="absolute left-0 flex gap-14"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...flagData, ...flagData].map((item, index) => (
          <Card key={index} image={item.src} alt={item.alt} />
        ))}
      </motion.div>
    </main>
  );
}
