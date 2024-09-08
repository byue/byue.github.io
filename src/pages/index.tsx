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
import { EmailSubmitButton } from "../components/ui/email-submit-button";
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
      <div id="contact" className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-[4rem] md:p-8 shadow-input bg-black">
        <h2 className="font-light text-3xl text-neutral-200">
          Reach Out to Us
        </h2>
        <p className=" text-sm max-w-sm mt-2 text-neutral-300 font-light">
          Have questions? Send us an email here!
        </p>
        <form className="my-8" method="POST" action={process.env.GATSBY_WEB3_API_URL}>
          <input type="checkbox" name="botcheck" className="hidden" />
          <input type="hidden" name="access_key" value={process.env.GATSBY_WEB3_API_KEY} />
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label className="font-light" htmlFor="First-Name">First Name</Label>
              <Input className="font-light h-6 overflow-hidden resize-none whitespace-nowrap" id="name" placeholder="First Name" type="text" name="First-Name" maxLength={35} required />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label className="font-light" htmlFor="Last-Name">Last Name</Label>
              <Input className="font-light h-6 overflow-hidden resize-none whitespace-nowrap" id="name" placeholder="Last Name" type="text" name="Last-Name" maxLength={35} required />
            </LabelInputContainer>
          </div>
          <div className="relative">
          <LabelInputContainer className="mb-4">
            <Label className="font-light" htmlFor="Email">Email</Label>
            <Input className="font-light h-6 overflow-hidden resize-none whitespace-nowrap" id="email" placeholder="Enter your email address here." type="email" name="email" maxLength={50} required />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label className="font-light" htmlFor="Subject">Subject</Label>
            <Input className="font-light h-6 overflow-hidden resize-none whitespace-nowrap" id="email" placeholder="Enter your email subject here." type="subject" name="Subject" maxLength={50} required />
          </LabelInputContainer>
          <LabelInputContainer className="mb-1 text-wrap h-40 font-light">
            <Label className="font-light" htmlFor="issue">Message</Label>
            <Input className="h-[7.5rem]" name="Message" placeholder="Tell us about your problem! We'll be glad to help out." required />
          </LabelInputContainer> 
          <EmailSubmitButton className="h-10" type="submit" >
            Send Email
          </EmailSubmitButton>
          </div>
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
        <div id="nav_bar" className="flex flex-wrap justify-center space-x-4 mb-24 fixed top-[2rem] z-40">
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
      <div className="relative h-[60rem] w-full bg-black bg-dot-white/[0.3] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div id="aboutus" className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="z-10 bg-transparent column px-[11rem]">
          <h1 className=" text-white text-[4rem] sm-text-[2rem] text-center font-medium mt-[11rem] mb-[2rem] relative">
            About Us
          </h1>
          <div className="text-[2rem] pl-[2rem] mx-auto text-white text-left tracking-wider mb-[22rem] font-normal">
            At Architech Solutions, our mission is to provide businesses with expert software consulting
            that tailors to any customer requirement. We are dedicated to offering
            solutions that address unique business needs, foster rapid innovation, and support sustainable growth.
            Through clarity, collaboration, and commitment, we turn technology challenges into opportunities for 
            <FlipWords words={flipWords} duration={750} />
          </div>
        </div>
      </div>
      <div id="timeline" className="id=timeline w-full h-screen bg-black">
        <Timeline data={timelineData} />
        <h5 className="relative p-[3rem] text-slate-500 text-center bg-black ">©2024 Architech Solutions LLC. All rights reserved.</h5>
      </div>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Architect Solutions</title>
