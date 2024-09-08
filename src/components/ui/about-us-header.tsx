import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AboutUsHeader = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "start start"],
    target: ref
  });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.9, 1], [0, 0, 1, 1, 0]);
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6, 0.75],
    ["100%", "20%", "10%", "0%", "0%"]
  );
  return (
    <motion.div
      ref={ref}
      style={{
        translateX: translateX,
        opacity: opacity
      }}
    >
      <h1 className="text-white text-[4rem] sm-text-[2rem] text-center font-medium mt-[11rem] mb-[2rem] relative">
        About Us
      </h1>
    </motion.div>
  );
};
