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
              distance: 160,
              links: {
                opacity: 0.35,
                color: "#6366f1"
              },
            },
          },
        },
        particles: {
          color: {
            value: "#6366f1", /* Soft Indigo */
          },
          links: {
            color: "#6366f1",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.4, /* Calmer drift speed */
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 45, /* Reduced density for clean UX */
          },
          opacity: {
            value: 0.25, /* Much softer and lighter */
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2.5 }, /* Smaller subtle dots */
          },
        },
        detectRetina: true,
      }}
    />
  );
};
