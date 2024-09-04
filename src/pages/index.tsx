import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { ParticleLinks } from "../components/ui/particle-links";
import { Timeline } from "../components/ui/timeline";
import { FlipWords } from "../components/ui/flip-words";
import { FocusCards } from "../components/ui/focus-cards";
import { Tabs } from "../components/ui/tabs";

const pageStyles = {
  color: "#232129",
  fontFamily: "Montserrat",
}

const flipWords = ["success.", "achievement.", "impact."];

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

const data = [
  {
    title: "Services",
    content: (
        <FocusCards />
    ),
  },
  {
    title: "Skills",
    content: (
      <div id="Skills" className="pl-[5rem] h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        <Tabs />
      </div>
    ),
  },
  {
    title: "Customers",
    content: (
      <h1 id="Customers">Who we work with</h1>
    ),
  },
  {
    title: "Contact",
    content: (
      <div>
        <h1 id="Contact"> Email: bryan.yue@architech-solutions.com</h1>
        <h1> Phone: xxx-xxx-xxxx</h1>
      </div>
    ),
  },
];

const scrollWithOffset = ( buttonLabel: string) => {
  var offset;
  const element = document.getElementById(buttonLabel);
  const rect = element.getBoundingClientRect();
  const elementTop = rect.top + window.scrollY;
  if(buttonLabel === "About Us") {
    offset = 200;
  } else if(buttonLabel === "Skills") {
    offset = 25
  } else if(buttonLabel === "Services") {
    offset = 10
  } else {
    offset = 0;
  }
  window.scrollTo({ top: elementTop - offset, behavior: 'smooth' });
}

const handleClick = (buttonLabel) => {
  const element = document.getElementById(buttonLabel);
  if(buttonLabel === "Home") {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    scrollWithOffset(buttonLabel);
  }
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles} className="bg-black">
      <div id="header" className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mb-[4rem]">
        <ParticleLinks className="absolute w-full h-full"/>
        <div id="nav_bar" className="flex flex-wrap justify-center space-x-4 mb-24">
          {['Home', 'About Us', 'Services', 'Skills', 'Customers', 'Contact'].map(buttonLabel => 
            <button  
              key={buttonLabel}
              onClick={() => handleClick(buttonLabel)}
              className="flex-auto text-white bg-black min-w-fit relative h-[50px] sm:w-[5rem] md:w-[7rem] lg:w-[12rem] overflow-hidden rounded-full border-2 border-[#616467] px-3 text-white uppercase
                                font-light shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:h-full before:w-0 before:bg-sky-500 before:transition-all 
                                before:duration-300 hover:text-white hover:shadow-sky-500 hover:before:left-0 hover:before:w-full">
              <span className="relative z-10 sm:xs md:text-sm lg:text-2xl xl:text-2xl">{buttonLabel}</span>
            </button>
          )}
        </div>
        <h1 id="Main Page" className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center text-white relative mx-auto w-full z-20">
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
      <div className="relative h-[60rem] w-full bg-black bg-dot-white/[0.3] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div id="about us" className="z-10 bg-transparent column px-[11rem]">
          <h1 id="About Us" className=" text-white text-[4rem] text-center font-medium mt-[22rem] mb-[2rem]">
            About Us
          </h1>
          <div className="text-4xl pl-[2rem] mx-auto text-white text-left tracking-wider mb-[22rem] font-normal">
            At Architech Solutions, our mission is to provide businesses with expert software consulting
            that solves complex problems with simple solutions. We are dedicated to offering expert
            solutions that address unique business needs, foster innovation, and support sustainable growth.
            Through clarity, collaboration, and commitment, we turn technology challenges into opportunities for 
            <FlipWords words={flipWords} duration={750} />
          </div>
        </div>
      </div>

      <div id="timeline" className="id=timeline w-full h-screen bg-black">
        <Timeline data={data} />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Architect Solutions</title>
