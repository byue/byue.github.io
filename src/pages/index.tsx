import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { ParticleLinks } from "../components/ui/particle-links";
import { Timeline } from "../components/ui/timeline";
import { FlipWords } from "../components/ui/flip-words";
import { FocusCards } from "../components/ui/focus-cards";
import { Tabs } from "../components/ui/tabs";
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";

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

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form submitted");
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full text-wrap", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const timelineData = [
  {
    title: "Services",
    content: (
      <FocusCards />
    ),
  },
  {
    title: "Skills",
    content: (
      <div id="skills" className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        <Tabs />
      </div>
    ),
  },
  {
    title: "Contact",
    content: (
<div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-[4rem] md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-light text-3xl text-neutral-800 dark:text-neutral-200">
        Reach Out to Us
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 font-light">
        Have questions? Send us an email!
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="font-light" htmlFor="firstname">First name</Label>
            <Input className="font-light" id="firstname" placeholder="First" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="font-light" htmlFor="lastname">Last name</Label>
            <Input className="font-light" id="lastname" placeholder="Last" type="text" />
          </LabelInputContainer>
        </div>
        <div className="relative">
        <LabelInputContainer className="mb-4">
          <Label className="font-light" htmlFor="email">Email Address</Label>
          <Input className="font-light" id="email" placeholder="Your email" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 text-wrap h-40 font-light">
          <Label className="font-light" htmlFor="issue">Your Problem</Label>
          <textarea placeholder="Tell us about your problem! We'll be glad to help out." className="flex-none h-[9rem] w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-light placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400 overflow-x-hidden inline-block align-top text-left align-top leading-normal resize-none"></textarea>
        </LabelInputContainer>
        <button
          className="font-light absolute pt-[5-rem] bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send Email
          <BottomGradient />
        </button>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
    ),
  },
];

const tabData = [
  {tabName: 'Home', buttonId: 'homeButton', jumpId: 'home'},
  {tabName: 'About Us', buttonId: 'aboutUsButton', jumpId: 'aboutus'}, 
  {tabName: 'Services', buttonId: 'servicesButton', jumpId: 'services'}, 
  {tabName: 'Skills', buttonId: 'skillsButton', jumpId: 'skills'},
  {tabName: 'Contact', buttonId: 'contactButton', jumpId: 'contact'},
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main id="home" style={pageStyles} className="bg-black">
      <div id="header" className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mb-[4rem]">
        <ParticleLinks className="absolute w-full h-full"/>
        <div id="nav_bar" className="flex flex-wrap justify-center space-x-4 mb-24">
          {tabData.map((element, index) => 
            <button id={element.buttonId}
              onClick={()=> scrollTo('#' + element.jumpId)}
              className="flex-auto text-white bg-black min-w-fit relative h-[50px] sm:w-[5rem] md:w-[7rem] lg:w-[12rem] overflow-hidden rounded-full border-2 border-[#616467] px-3 text-white uppercase
                                font-light shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:h-full before:w-0 before:bg-sky-500 before:transition-all 
                                before:duration-300 hover:text-white hover:shadow-sky-500 hover:before:left-0 hover:before:w-full">
              <span className="relative z-10 sm:xs md:text-sm lg:text-2xl xl:text-2xl">{element.tabName}</span>
            </button>
          )}
        </div>
        <h1 id="main_page" className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center text-white relative mx-auto w-full z-20">
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
        <div id="aboutus" className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="z-10 bg-transparent column px-[11rem]">
          <h1 className=" text-white text-[4rem] text-center font-medium mt-[22rem] mb-[2rem] pt:[40rem]">
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
        <Timeline data={timelineData} />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Architect Solutions</title>
