import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FlipWords } from './flip-words';

const flipWords = ["success.", "growth.", "impact."];

export const AboutUsStatement = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "start start"],
    target: ref
  });
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 0.75, 1],
    ["-50%", "-10%", "0%", "0%", "0%"],
  );
  return (
    <motion.div
      ref={ref}
      style={{
        translateX: translateX,
      }}
    >
      <div className="text-base sm:text-base md:text-3xl lg:text-4xl mx-auto text-white text-left tracking-wider mb-[10vh] font-light">
        At Architech Solutions, our mission is to provide businesses with expert software consulting
        that tailors to any customer requirement. We are dedicated to offering
        solutions that address unique business needs, foster rapid innovation, and support sustainable growth.
        Through clarity, collaboration, and commitment, we turn technology challenges into opportunities for 
        <FlipWords words={flipWords} duration={750} />
        <br/>
        <br/>
        Our team of seasoned developers brings extensive experience from industry leaders like
        <span className="text-main font-bold"> Meta, Microsoft, and Amazon</span>, complemented by credentials from top-tier universities such
        as UW and MIT. This exceptional combination of practical expertise and academic rigor allows us
        to provide high-quality software solutions that are robust, reliable, and meticulously
        customized to help our clients <span className="text-main font-bold">thrive</span> in a competitive marketplace.
      </div>
    </motion.div>
  );
};
