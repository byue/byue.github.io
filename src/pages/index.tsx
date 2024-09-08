import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Timeline } from "../components/ui/timeline";
import { FocusCards } from "../components/ui/focus-cards";
import { Tabs } from "../components/ui/tabs";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { EmailSubmitButton } from "../components/ui/email-submit-button";
import { cn } from "../lib/utils";
import { HeroHeader } from "../components/ui/hero-header";
import { AboutUs } from "../components/ui/about-us";
import { NavBar } from "../components/ui/navbar";

const pageStyles = {
  color: "#232129",
  fontFamily: "Montserrat",
}

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
      <div id="skills" className="mb-[60rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main id="home" style={pageStyles} className="bg-black overflow-x-clip">
      <NavBar/>
      <HeroHeader/>
      <AboutUs/>
      <div id="timeline" className="id=timeline w-full h-screen bg-black">
        <Timeline data={timelineData} />
        <h5 className="relative p-[3rem] text-slate-500 text-center bg-black ">©2024 Architech Solutions LLC. All rights reserved.</h5>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Architect Solutions</title>
