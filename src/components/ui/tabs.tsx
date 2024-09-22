import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../..//lib/utils";
import { graphql, useStaticQuery } from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import { CardBody, CardContainer, CardItem } from "./3d-card";

const skillsImageQuery = graphql`
query skillsImageQuery {
  allSkillsImagesJson {
    nodes {
      tabName
      tabImages {
        image {
          childImageSharp {
                    id
                    gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    )
                }
          }
        name
      }
    }
  }
}
`;

type TabImage = {
    image: React.ReactNode;
    name: string;
}

type Tab = {
  tabName: string;
  tabImages: TabImage[];
};

export const Tabs = ({
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [hovering, setHovering] = useState(false);
  const sourceData = useStaticQuery(skillsImageQuery);
  const propTabs = sourceData.allSkillsImagesJson.nodes;
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };
  return (
    <>
      <div
        className={cn(
          "translate-y-[10rem] flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab: Tab, idx: number) => (
          <button
            key={tab.tabName}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.tabName === tab.tabName && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-zinc-800 dark:bg-zinc-800 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-white text-2xl font-light">
              {tab.tabName}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.tabName}
        hovering={hovering}
        className={cn("mt-[18rem]", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.tabName === tabs[0].tabName;
  };

  return (
    <div className="w-full h-full">
      {tabs.map((tab: Tab, idx: number) => (
        <motion.div
          key={tab.tabName}
          layoutId={tab.tabName}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -60 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute", className)}
        >
        <CardContainer className="w-full">
              <CardBody className="relative w-auto sm:w-[30rem] rounded-xl">
                <CardItem translateZ="100" className="w-full mt-4">
                        <div className={`grid grid-cols-2 gap-2 w-full mx-auto rounded-2xl p-10 text-xl md:text-4xl -bold text-slate-500 bg-gradient-to-br from-white to-slate-700`}>   
                      {tab.tabImages.map((tabImage: any, index: number) => (
                        <div key={index} className="flex flex-col top-0 items-center">
                          <h1 className="text-black text-3xl pb-[2rem] font-thin">{tabImage.name}</h1>
                          <GatsbyImage className="w-1/2 h-auto object-cover" image={getImage(tabImage.image)!} alt={tabImage.name}/>
                        </div>
                      ))}
                  </div>
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                </div>
              </CardBody>
            </CardContainer>
        </motion.div>
      ))}
    </div>
  );
};
