import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Timeline } from "../components/ui/timeline";
import { FocusCards } from "../components/ui/focus-cards";
import { Tabs } from "../components/ui/tabs";
import { HeroHeader } from "../components/ui/hero-header";
import { AboutUs } from "../components/ui/about-us";
import { NavBar } from "../components/ui/navbar";
import { Contact } from "../components/ui/contact";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main id="home"
          className="bg-black overflow-x-clip"
          style={{color: "#232129", fontFamily: "Montserrat"}}>
      <NavBar/>
      <HeroHeader/>
      <AboutUs/>
      <div id="timeline" className="id=timeline w-full h-screen bg-black">
        <Timeline data={[
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
              <Contact/>
            ),
          },
        ]} 
      />
        <h5 className="relative p-[3rem] text-slate-500 text-center bg-black ">©2024 Architech Solutions LLC. All rights reserved.</h5>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Architect Solutions</title>
