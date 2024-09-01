import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { ParticleLinks } from "../components/ui/particle-links";

const pageStyles = {
  color: "#232129",
  fontFamily: "Montserrat",
}

const words = [
  {
    text: "Simple",
    className: "text-sky-500 dark:text-sky-500",
  },
  {
    text: "solutions",
    className: "text-sky-500 dark:text-sky-500",
  },
  {
    text: "to",
  },
  {
    text: "complex",
  },
  {
    text: "problems.",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div className="relative h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">        
        <ParticleLinks
          className="absolute w-full h-full"
          numParticles={200}
          linksDistance={90}
          backgroundColor="black">
        </ParticleLinks>
        <div className="flex flex-wrap justify-center space-x-4 mb-24">
          {['Home', 'Skills', 'Services', 'Customers', 'Contact'].map(buttonLabel => 
            <button className="flex-auto text-white relative h-[50px] sm:w-[5rem] md:w-[7rem] lg:w-[12rem] overflow-hidden rounded-full border-2 border-[#616467] px-3 text-white uppercase font-light shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-sky-500 before:transition-all before:duration-300 hover:text-white hover:shadow-sky-500 hover:before:left-0 hover:before:w-full">
              <span className="relative z-10 sm:xs md:text-sm lg:text-2xl xl:text-2xl">{buttonLabel}</span>
            </button>
          )}
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center text-white relative mx-auto w-full z-20">
          Architech Solutions
        </h1>
        <div className="w-full sm:w-[24rem] md:w-[48rem] lg:w-[72rem] h-40 relative items-center justify-center ">
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full mx-auto blur-sm" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full mx-auto" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-full mx-auto blur-sm" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-full mx-auto" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-[10rem]">
        <TypewriterEffect words={words} />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
