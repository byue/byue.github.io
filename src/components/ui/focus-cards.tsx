"use client";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { graphql, useStaticQuery } from "gatsby";

const serviceImageQuery = graphql`
query ServiceImageQuery {
  allServiceImagesJson {
    nodes {
      name
      image {
        childImageSharp {
          id
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            transformOptions: {fit: COVER}
          )
        }
      }
    }
  }
}
`;

export const Card = React.memo(
  ({
    node,
    index,
    hovered,
    setHovered,
  }: {
    node: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
            "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
        >
            <GatsbyImage className={"object-cover absolute inset-0"} image={getImage(node.image)!} alt={node.image}/>
        <div
            className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="z-40 pb-[1rem] text-6xl md:text-3xl font-light bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                {node.name}
            </div>
            <br/>
        </div>
    </div>
  )
);

export function FocusCards() {
  const [hovered, setHovered] = useState<number | null>(null);
  const sourceData = useStaticQuery(serviceImageQuery);
  const nodes = sourceData.allServiceImagesJson.nodes;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {nodes.map((node: any, index: number) => (
        <Card
          key={node.name}
          node={node}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
