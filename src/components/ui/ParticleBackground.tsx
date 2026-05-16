"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.8,
                color: "#4F46E5"
              },
            },
          },
        },
        particles: {
          color: {
            value: "#4F46E5", /* Primary Indigo */
          },
          links: {
            color: "#4F46E5", /* Primary Indigo */
            distance: 160,
            enable: true,
            opacity: 0.6,
            width: 1.5,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 120, /* Increased density */
          },
          opacity: {
            value: 0.8, /* Increased opacity */
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 4 }, /* Increased size */
          },
        },
        detectRetina: true,
      }}
    />
  );
};
