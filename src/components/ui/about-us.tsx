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
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.9, 0.95], [0, 0.25, 1, 0.1, 0]);
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacity
      }}
    >
      <div id="aboutus" className="relative overflow-clip h-full w-full bg-black bg-dot-white/[0.3] relative flex items-center justify-center pb-[10vh] pt-[10vh]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="z-10 bg-transparent column px-[10vw]">
          <AboutUsHeader/>
          <AboutUsStatement/>
        </div>
      </div>
    </motion.div>
  );
};
