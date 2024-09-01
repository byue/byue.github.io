import React, { useId } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";

type ParticleLinksProps = {
  id?: string;
  className?: string;
  numParticles?: number;
  linksDistance?: number;
  backgroundColor?: string;
};
export const ParticleLinks = (props: ParticleLinksProps) => {
  const {
    id,
    className,
    numParticles,
    linksDistance,
    backgroundColor,
  } = props;
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const generatedId = useId();
  return (init &&
    <Particles
      id={id || generatedId}
      className={className}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        background: {
          color: backgroundColor,
        },
        particles: {
          number: {
              value: numParticles,
          },
          links: {
              distance: linksDistance,
              enable: true,
          },
          move: {
              enable: true,
          },
          size: {
            value: 1
          },
          shape: {
            type: 'circle'
          }
        },
        preset: "links",
      }}
    />
  );
};
