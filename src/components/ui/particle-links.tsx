import React, { useId } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import useWindowDimensions from "../../lib/windowDimensions";

type ParticleLinksProps = {
  id?: string;
  className?: string;
  backgroundColor?: string;
};
export const ParticleLinks = (props: ParticleLinksProps) => {
  const {
    id,
    className,
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

  const { width } = useWindowDimensions();
  let numParticles = 200;
  switch (true) {
    case (width < 640):
        numParticles = 100;
        break;
    case (width < 768):
        numParticles = 125;
        break;
    case (width < 1024):
        numParticles = 150;
        break;
  }

  let linksDistance = 120;
  switch (true) {
    case (width < 640):
      linksDistance = 60;
        break;
    case (width < 768):
      linksDistance = 80;
        break;
    case (width < 1024):
      linksDistance = 100;
        break;
  }

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
