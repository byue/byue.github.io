import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FlipWords } from './flip-words';

const flipWords = ["success.", "achievement.", "impact."];

export const AboutUsStatement = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "start start"],
    target: ref
  });
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.25, 1, 1, 1, 3]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.75, 1, 1, 1]);
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["-100%", "-20%", "0%", "0%", "-20%"],
  );
  return (
    <motion.div
      ref={ref}
      style={{
        translateX: translateX,
        scale: scale,
        opacity: opacity
      }}
    >
      <div className="text-[2rem] pl-[2rem] mx-auto text-white text-left tracking-wider mb-[22rem] font-normal">
        At Architech Solutions, our mission is to provide businesses with expert software consulting
        that tailors to any customer requirement. We are dedicated to offering
        solutions that address unique business needs, foster rapid innovation, and support sustainable growth.
        Through clarity, collaboration, and commitment, we turn technology challenges into opportunities for 
        <FlipWords words={flipWords} duration={750} />
      </div>
    </motion.div>
  );
};
