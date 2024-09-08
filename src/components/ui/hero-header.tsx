import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ParticleLinks } from './particle-links';
import { TypewriterEffect } from './typewriter-effect';

const words = [
  {
    text: "Simple",
    className: "text-main",
  },
  {
    text: "tech",
    className: "text-main",
  },
  {
    text: "solutions",
    className: "text-main",
  },
  {
    text: "to",
    className: "text-white font-light",
  },
  {
    text: "complex",
    className: "text-white font-light",
  },
  {
    text: "problems.",
    className: "text-white font-light",
  },
];

export const HeroHeader = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
    target: ref
  });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, 0.75, 0.5, 0, 0]);
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacity
      }}
    >
      <div id="header" className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mb-[4rem]">
        <ParticleLinks className="absolute w-full h-full"/>
        <h1 id="main_page" className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center text-white relative mx-auto w-full z-20 pt-[5rem]">
          Architech Solutions
        </h1>
        <div className="w-full sm:w-[24rem] md:w-[48rem] lg:w-[72rem] h-1 relative items-center justify-center">
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full mx-auto blur-sm" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full mx-auto" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-full mx-auto blur-sm" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-full mx-auto" />
        </div>
        <div className="flex items-center justify-center align-center h-[18rem] z-10">
          <TypewriterEffect words={words} />
        </div>
      </div>
    </motion.div>
  );
};
