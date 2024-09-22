import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AboutUsHeader = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "start start"],
    target: ref
  });
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 0.6, 0.75],
    ["50%", "10%", "0%", "0%", "0%"]
  );
  return (
    <motion.div
      ref={ref}
      style={{
        translateX: translateX,
      }}
    >
      <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-7xl text-white text-center font-light mt-[10vh] mb-[10vh] relative mx-auto">
        About Us
      </h1>
    </motion.div>
  );
};
