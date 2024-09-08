import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AboutUsHeader } from './about-us-header';
import { AboutUsStatement } from './about-us-statement';

export const AboutUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: ref
  });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.8, 0.9], [0, 0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.25, 1, 1, 1, 3]);
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacity,
        scale: scale
      }}
    >
      <div id="aboutus" className="relative overflow-clip h-[55rem] w-full bg-black bg-dot-white/[0.3] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="z-10 bg-transparent column px-[11rem]">
          <AboutUsHeader/>
          <AboutUsStatement/>
        </div>
      </div>
    </motion.div>
  );
};
