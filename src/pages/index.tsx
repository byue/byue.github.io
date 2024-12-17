import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Timeline } from "../components/ui/timeline";
import { FocusCards } from "../components/ui/focus-cards";
import { Tabs } from "../components/ui/tabs";
import { HeroHeader } from "../components/ui/hero-header";
import { AboutUs } from "../components/ui/about-us";
import { NavBar } from "../components/ui/navbar";
import { Contact } from "../components/ui/contact";
import { useEffect } from "react";

const IndexPage: React.FC<PageProps> = () => {
    // Function to update the URL slug based on the section in view
    const updateSlug = () => {
      const sections = document.querySelectorAll<HTMLElement>("section");
      let currentSectionId = "";
  
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSectionId = section.id;
        }
      });
  
      // Update the URL slug if it changes
      if (currentSectionId && window.location.hash.substring(1) !== currentSectionId) {
        window.history.replaceState({}, "", `#${currentSectionId}`);
        highlightActiveLink(currentSectionId);
      }
    };
  
    // Function to highlight the active link in the NavBar
    const highlightActiveLink = (sectionId: string) => {
      const links = document.querySelectorAll<HTMLAnchorElement>("nav a");
      links.forEach((link) => {
        link.classList.remove("active");
      });
  
      const activeLink = document.getElementById(`link-${sectionId}`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    };
  
    // Attach the scroll listener when the component mounts
    useEffect(() => {
      const handleScroll = () => updateSlug();
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
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

export const Head: HeadFC = () => (
  <>
    <title>Architect Solutions - Tech Consulting</title>
    <meta name="description" content="Simplifying Complex Problems with Expert Insight and Personalized Innovation." />
  </>
) 
