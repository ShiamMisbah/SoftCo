"use client";

import { useId } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";

type FluidBackgroundProps = {
  className?: string;
  colorFrom?: string;
  colorTo?: string;
  intensity?: number;
  opacity?: number;
};

export function FluidBackground({
  className = "",
  colorFrom = "#2563EB",
  colorTo = "#06B6D4",
  intensity = 1,
  opacity = 0.25,
}: FluidBackgroundProps) {
  const gradientId = useId();
  const reduceMotion = useReducedMotion();

  const { scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);

  // Limit deformation regardless of scroll speed.
  const limitedVelocity = useTransform(
    scrollVelocity,
    [-2000, 0, 2000],
    [-100, 0, 100],
    { clamp: true },
  );

  // Elastic, smooth movement.
  const fluidVelocity = useSpring(limitedVelocity, {
    stiffness: 65,
    damping: 18,
    mass: 1.2,
  });

  const path = useTransform(fluidVelocity, (value) => {
    const v = reduceMotion ? 0 : value * intensity;

    const top = Math.min(v, 0);
    const bottom = Math.max(v, 0);

    return `
      M 300 ${140 + top * 0.5}

      C 400 ${65 + top * 1.4}
        580 ${100 + top}
        620 ${240 + v * 0.2}

      C 680 ${370 + bottom * 0.5}
        610 ${490 + bottom * 1.4}
        470 ${510 + bottom}

      C 340 ${570 + bottom * 0.8}
        260 ${470 + v * 0.4}
        190 ${390 + v * 0.2}

      C 100 ${310 + top * 0.2}
        160 ${190 + top * 0.6}
        300 ${140 + top * 0.5}

      Z
    `;
  });

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.svg
        viewBox="0 0 800 700"
        className="absolute h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity }}
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, 4, -3, 0],
                scale: [1, 1.04, 0.98, 1],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorFrom} />
            <stop offset="100%" stopColor={colorTo} />
          </linearGradient>
        </defs>

        <motion.path d={path} fill={`url(#${gradientId})`} />
      </motion.svg>
    </div>
  );
}

export default FluidBackground;
